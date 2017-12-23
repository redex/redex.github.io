[@bs.module "react-helmet"] external reactClass : ReasonReact.reactClass = "default";

let make = (~title          : option(string)=?,
            ~titleTemplate  : option(string)=?,
            ~defaultTitle   : option(string)=?,
            ~meta           : option(array({. "name": string, "content": string }))=?,
            children) =>
  ReasonReact.wrapJsForReason(
    ~reactClass,
    ~props={
      "title"         : Js.Nullable.from_opt(title),
      "titleTemplate" : Js.Nullable.from_opt(titleTemplate),
      "defaultTitle"  : Js.Nullable.from_opt(defaultTitle),
      "meta"          : Js.Nullable.from_opt(meta)
    },
    children
  );
