 [@bs.module "react-timeago"] external reactClass: ReasonReact.reactClass = "default";

let make = (~date: Js.Date.t, children) =>
  ReasonReact.wrapJsForReason(~reactClass, ~props={ "date": date }, children);