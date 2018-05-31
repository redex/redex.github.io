open! Rebase;
open! Vrroom;
module Styles = SearchBoxStyles;
module Config = Config.Search;

[@bs.send] external focus : Dom.element => unit = "";

module Key = {
  let down = 40;
  let up = 38;
  let enter = 13;
};

type state = {
  searchClient: Algolia.Helper.t,
  query: string,
  results: array(SearchResultItem.t),
  focused: option(SearchResultItem.t),
  inputRef: ref(option(Dom.element))
};

type action =
  | QueryChanged(string)
  | ResultsChanged(array(Js.Json.t))
  | SelectItem(SearchResultItem.t)
  | KeyDown(int)
;

let component = ReasonReact.reducerComponent("PackageSearchBox");
let make = (~focusOnMount=false, _:childless) => {
  ...component,

  initialState: () => {
    searchClient: Algolia.Helper.make(Algolia.makeClient(Config.appId, Config.apiKey), Config.packageIndex),
    query: "",
    results: [||],
    focused: None,
    inputRef: ref(None)
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
      let results = results |> Array.map(SearchResultItem.decode);
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
          self => self.state.focused |> Option.forEach(this => self.send(SelectItem(this)))
        )
      } else {
        ReasonReact.NoUpdate
      }
    },

  didMount: ({ state, send }) => {
    state.searchClient |> Algolia.Helper.on(`result(
      (results, _) => send(ResultsChanged(results##hits))
    )) |> ignore;

    if (focusOnMount) {
      state.inputRef^ |> Option.forEach(focus);
    };
  },

  render: ({ state, send, handle }) =>
    <div className=(Styles.root |> TypedGlamor.toString)>

      <div className=(Styles.fakeInput |> TypedGlamor.toString)>
        <Icon.Search className=Styles.searchIcon />
        <input className   = (Styles.input |> TypedGlamor.toString)
               placeholder = "Search packages"
               value       = state.query
               onChange    = (e => send(QueryChanged(Obj.magic(e)##target##value)))
               onKeyDown   = (e => send(KeyDown(Obj.magic(e)##keyCode)))
               ref         = handle((r, { state }) => state.inputRef := Js.toOption(r)) />
      </div>

      <Control.If cond=(Array.length(state.results) > 0)>
        ...(() => 
          <div className=(Styles.results |> TypedGlamor.toString)>
            <Control.Map items=state.results>
              ...(package =>
                <SearchResultItem
                  package
                  isFocused = Option.exists(this => this##name === package##name, state.focused)
                  key       = package##id
                  onClick   = (p => send(SelectItem(p)))
                />
              )
            </Control.Map>
            <div className=(Styles.footer |> TypedGlamor.toString)>
              <a href="https://www.algolia.com">
                <img className=(Styles.algoliaLogo |> TypedGlamor.toString) src="/search-by-algolia.svg" />
              </a>
            </div>
          </div>
        )
      </Control.If>

    </div>
};