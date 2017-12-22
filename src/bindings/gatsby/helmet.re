[@bs.module "react-helmet"] external reactClass : ReasonReact.reactClass = "default";

let make = (~title: option(string)=?,
            ~meta: option(array({. "name": string, "content": string }))=?,
            children) =>
  ReasonReact.wrapJsForReason(
    ~reactClass,
    ~props={
      "title": Js.Nullable.from_opt(title),
      "meta": Js.Nullable.from_opt(meta)
    },
    children
  );
