open! Rebase;
open! Vrroom.Helpers;
module Control = Vrroom.Control;
module Styles = SearchBoxStyles;
module Config = Config.Search;

module Key = {
  let down = 40;
  let up = 38;
  let enter = 13;
};

type state = {
  searchClient: Algolia.Helper.t,
  query: string,
  results: array(SearchResultItem.t),
  focused: option(SearchResultItem.t)
};

type action =
  | QueryChanged(string)
  | ResultsChanged(array(Js.Json.t))
  | SelectItem(SearchResultItem.t)
  | KeyDown(int)
;

let decodeResult = json =>
  json |> Obj.magic /* TODO: very naughty */
       |> r => Js.Obj.assign({ "slug": "/packages/" ++ r##id }, r);

let component = ReasonReact.reducerComponent("PackageSearchBox");
let make = _children => {
  ...component,

  initialState: () => {
    searchClient: Algolia.Helper.make(Algolia.makeClient(Config.appId, Config.apiKey), Config.packageIndex),
    query: "",
    results: [||],
    focused: None
  },
  reducer: (action, state) =>
    switch action {

    | QueryChanged(query) =>
      switch query {
      | "" => ReasonReact.Update({ ...state, query, results: [||], focused: None })
      | _ =>
        ReasonReact.UpdateWithSideEffects(
          { ...state, query },
          ({ state }) =>
              state.searchClient |> Algolia.Helper.setQuery(query)
                                 |> Algolia.Helper.search()
                                 |> ignore
        )
      }

    | ResultsChanged(results) => {
      let results = results |> Array.map(decodeResult);
      ReasonReact.Update({
        ...state,
        results,
        focused: results[0]
      })
    }

    | SelectItem(package) =>
      ReasonReact.UpdateWithSideEffects(
        { ...state, query: "", results: [||], focused: None },
        _self => Link.navigateTo(package##slug)
      )

    | KeyDown(key) =>
      if (key === Key.down) {
        ReasonReact.Update({
          ...state,
          focused:
            state.focused |> Option.flatMap(p => Array.findIndex(this => this === p, state.results))
                          |> Option.map(((i, _)) => i + 1)
                          |> Option.getOr(0)
                          |> Array.get(state.results)
        })
      } else if (key === Key.up) {
        ReasonReact.Update({
          ...state,
          focused:
            state.focused |> Option.flatMap(p => Array.findIndex(this => this === p, state.results))
                          |> Option.map(((i, _)) => i - 1)
                          |> Option.getOr(Array.length(state.results) - 1)
                          |> Array.get(state.results)
        })
      } else if (key === Key.enter) {
        ReasonReact.SideEffects(
          self => self.state.focused |> Option.forEach(this => self.reduce(() => SelectItem(this))())
        )
      } else {
        ReasonReact.NoUpdate
      }
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
               onChange    = reduce(e => QueryChanged(Obj.magic(e)##target##value))
               onKeyDown   = reduce(e => KeyDown(Obj.magic(e)##keyCode)) />
      </div>

      <div className=Styles.results>
        <Control.Map items=state.results>
          ...(package =>
            <SearchResultItem
              package
              isFocused = Option.exists(this => this##name === package##name, state.focused)
              key       = package##id
              onClick   = reduce(p => SelectItem(p))
            />
          )
        </Control.Map>
      </div>

    </div>
};