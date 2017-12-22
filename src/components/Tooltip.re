open! Helpers;

module Styles = TooltipStyles;

let component = ReasonReact.reducerComponent("Tooltip");
let make = (~content: ReasonReact.reactElement,
            ~className=?,
            child: ReasonReact.reactElement) => {
  ...component,
  initialState: () => false,
  reducer: (isHovered, _) => ReasonReact.Update(isHovered),

  render: ({ state: isHovered, reduce }) =>
    <div className    = Styles.container
         onMouseEnter = reduce(_e => true)
         onMouseLeave = reduce(_e => false) >
      {isHovered ?
        <div className=Styles.tooltip> {content} </div> :
        ReasonReact.nullElement
      }
      {child}
    </div>
}