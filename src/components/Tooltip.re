open! Vrroom;
module Styles = TooltipStyles;

let component = ReasonReact.reducerComponent("Tooltip");
let make = (~content: ReasonReact.reactElement,
            child: ReasonReact.reactElement) => {
  ...component,
  initialState: () => false,
  reducer: (isHovered, _) => ReasonReact.Update(isHovered),

  render: ({ state: isHovered, send }) =>
    <div className    = (Styles.container |> TypedGlamor.toString)
         onMouseEnter = (_e => send(true))
         onMouseLeave = (_e => send(false)) >
      {isHovered ? <div className=(Styles.tooltip |> TypedGlamor.toString)> {content} </div> : nothing}
      {child}
    </div>
}