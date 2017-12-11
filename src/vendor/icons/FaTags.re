[@bs.module "react-icons/lib/fa"] external reactClass: ReasonReact.reactClass = "FaTags";

let make = (~color=?, children) =>
  ReasonReact.wrapJsForReason(~reactClass, ~props={ "color": color }, children);