external linkClass : ReasonReact.reactClass = "default" [@@bs.module "gatsby-link"];

let make
  to_::(to_: string)
  style::(style: option ReactDOMRe.Style.t)=?
  children
  =>
  ReasonReact.wrapJsForReason
    reactClass::linkClass
    props::{
      "to": to_,
      "style": Js.Nullable.from_opt style
    }
    children;