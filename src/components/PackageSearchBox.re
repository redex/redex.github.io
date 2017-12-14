open Helpers;

module Styles = PackageSearchBoxStyles;
let appId ="B1AVN0IGTU";
let apiKey = "c7a3475a8567971cb7510b422d9f37ad";

type state = {
  searchClient: Algolia.Helper.t,
  results: array(Js.Json.t)
};

type action =
  | QueryChanged(string)
  | ResultsChanged(array(Js.Json.t))
;

let decodeResult = json =>
  json |> Obj.magic /* TODO: very naughty */
       |> r => Js.Obj.assign({ "fields": { "slug": "/packages/" ++ r##name }}, r);

let component = ReasonReact.reducerComponent("PackageSearchBox");
let make = _children => {
  ...component,

  initialState: () => {
    searchClient: Algolia.Helper.make(Algolia.makeClient(appId, apiKey), "re:libs"),
    results: [||]
  },
  reducer: (action, state) =>
    switch action {
    | QueryChanged(query) =>
      switch query {
      | "" => ReasonReact.Update({ ...state, results: [||] })
      | _ =>
        ReasonReact.SideEffects(
          ({ state }) =>
              state.searchClient |> Algolia.Helper.setQuery(query)
                                 |> Algolia.Helper.search()
                                 |> ignore
        )
      }
    | ResultsChanged(results) =>
      Js.log(Array.length(results));
      ReasonReact.Update({ ...state, results })
    },

  didMount: ({ state, reduce }) => {
    state.searchClient |> Algolia.Helper.on(`result(
      (results, _) => reduce(() => ResultsChanged(results##hits))()
    )) |> ignore;
    ReasonReact.NoUpdate
  },

  render: ({ state, reduce }) =>
    <div className=Styles.root>

      <div className=Styles.fakeInput>
        <Icon.Search className=Styles.searchIcon />
        <input className   = Styles.input
              placeholder = "Search packages"
              onChange    = reduce(e => QueryChanged(Obj.magic(e)##target##value)) />
      </div>

      {
        switch (state.results |> Array.length) {
        | 0 => ReasonReact.nullElement
        | _ =>
          <div className=Styles.results>
            {
              state.results |> Array.map(decodeResult)
                            |> Array.map(package => <PackageSummary package />)
                            |> ReasonReact.arrayToElement
            }
          </div>
        }
      }

    </div>
};

let default = ReasonReact.wrapReasonForJs(~component, _jsProps => make([||]))
