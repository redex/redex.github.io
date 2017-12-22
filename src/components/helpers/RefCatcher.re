open Rebase;

type state = {
  r: ref(option(ReasonReact.reactRef))
};

let component = ReasonReact.reducerComponent("Ref");
let make = (~onRef: option(ReasonReact.reactRef) => unit, render) => {
  ...component,
  initialState: () => { r: ref(None) },
  reducer: ((), _) => ReasonReact.NoUpdate,
  render: ({ state, handle }) =>
    ReasonReact.cloneElement(
      render(~refBin=state),
      ~props={ "ref": handle((r, self) => self.state.r := r |> Js.toOption |> Utils.tap(onRef)) },
      [||]
    )
};