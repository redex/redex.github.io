[@bs.module "gatsby-link"] external reactClass : ReasonReact.reactClass = "default";

let make = (~to_: string,
            ~className: option(string)=?,
            ~style: option(ReactDOMRe.Style.t)=?,
            children) =>
  ReasonReact.wrapJsForReason(
    ~reactClass,
    ~props={
      "to": to_,
      "className": Js.Nullable.from_opt(className),
      "style": Js.Nullable.from_opt(style)
    },
    children
  );

[@bs.module "gatsby-link"] external navigateTo : string => unit = "";