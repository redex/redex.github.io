open! Helpers;

module Styles = SearchBoxStyles;

let appId ="B1AVN0IGTU";
let apiKey = "c7a3475a8567971cb7510b422d9f37ad";
let index = "re:libs";

type state = {
  searchClient: Algolia.Helper.t,
  query: string,
  results: array(Js.Json.t)
};

type action =
  | QueryChanged(string)
  | ResultsChanged(array(Js.Json.t))
  | SelectItem(SearchResultItem.t)
;

let decodeResult = json =>
  json |> Obj.magic /* TODO: very naughty */
       |> r => Js.Obj.assign({ "slug": "/packages/" ++ r##id }, r);

let component = ReasonReact.reducerComponent("PackageSearchBox");
let make = _children => {
  ...component,

  initialState: () => {
    searchClient: Algolia.Helper.make(Algolia.makeClient(appId, apiKey), index),
    query: "",
    results: [||]
  },
  reducer: (action, state) =>
    switch action {

    | QueryChanged(query) =>
      switch query {
      | "" => ReasonReact.Update({ ...state, query, results: [||] })
      | _ =>
        ReasonReact.UpdateWithSideEffects(
          { ...state, query },
          ({ state }) =>
              state.searchClient |> Algolia.Helper.setQuery(query)
                                 |> Algolia.Helper.search()
                                 |> ignore
        )
      }

    | ResultsChanged(results) =>
      ReasonReact.Update({ ...state, results })

    | SelectItem(package) =>
      ReasonReact.UpdateWithSideEffects(
        { ...state, query: "", results: [||] },
        _self => Link.navigateTo(package##slug)
      )
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
               value       = state.query
               onChange    = reduce(e => QueryChanged(Obj.magic(e)##target##value)) />
      </div>

      {
        switch (state.results |> Array.length) {
        | 0 => ReasonReact.nullElement
        | _ =>
          <div className=Styles.results>
            {
              state.results |> Array.map(decodeResult)
                            |> Array.map(package =>
                                <SearchResultItem key=package##name
                                                  package
                                                  onClick=reduce(p => SelectItem(p)) />)
                            |> ReasonReact.arrayToElement
            }
          </div>
        }
      }

    </div>
};

let default = ReasonReact.wrapReasonForJs(~component, _jsProps => make([||]))
