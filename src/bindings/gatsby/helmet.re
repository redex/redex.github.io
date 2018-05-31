[@bs.module "react-helmet"] external reactClass : ReasonReact.reactClass = "default";

let make = (~title          : option(string)=?,
            ~titleTemplate  : option(string)=?,
            ~defaultTitle   : option(string)=?,
            ~meta           : option(array({. "name": string, "content": string }))=?,
            children) =>
  ReasonReact.wrapJsForReason(
    ~reactClass,
    ~props={
      "title"         : Js.Nullable.fromOption(title),
      "titleTemplate" : Js.Nullable.fromOption(titleTemplate),
      "defaultTitle"  : Js.Nullable.fromOption(defaultTitle),
      "meta"          : Js.Nullable.fromOption(meta)
    },
    children
  );
