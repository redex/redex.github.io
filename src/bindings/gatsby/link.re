[@bs.module "gatsby-link"] external reactClass : ReasonReact.reactClass = "default";

let make = (~to_: string,
            ~className: option(string)=?,
            ~style: option(ReactDOMRe.Style.t)=?,
            children) =>
  ReasonReact.wrapJsForReason(
    ~reactClass,
    ~props={
      "to": to_,
      "className": Js.Nullable.fromOption(className),
      "style": Js.Nullable.fromOption(style)
    },
    children
  );

[@bs.module "gatsby-link"] external navigateTo : string => unit = "";