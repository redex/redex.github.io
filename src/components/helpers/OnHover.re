open Rebase;

[@bs.send.pipe: Dom.element] external _addEventListener : string => (unit => unit) => unit = "addEventListener";

let attachEventHandlers = (r, setHover) => {
  let el = ReactDOMRe.findDOMNode(r);
  el |> _addEventListener("mouseenter", () => setHover(true));
  el |> _addEventListener("mouseleave", () => setHover(false));
};

let component = ReasonReact.reducerComponent("OnHover");
let make = render => {
  ...component,
  initialState: () => false,
  reducer: (isHovered: bool, _) => ReasonReact.Update(isHovered),
  render: ({ state: isHovered, reduce }) =>
    <RefCatcher onRef=(r => r |> Option.forEach(r => attachEventHandlers(r, reduce(v => v))))>
      ...((~refBin:_) => render(isHovered))
    </RefCatcher>
};