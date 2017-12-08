external linkClass : ReasonReact.reactClass = "default" [@@bs.module "react-helmet"];

let make
  title::(title: option string)=?
  meta::(meta: option (array (Js.t {. name: string, content: string })))=?
  children
  =>
  ReasonReact.wrapJsForReason
    reactClass::linkClass
    props::{
      "title": Js.Nullable.from_opt title,
      "meta": Js.Nullable.from_opt meta
    }
    children;