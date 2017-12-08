[@bs.module "gatsby-link"] external reactClass : ReasonReact.reactClass = "default";

let make = (~to_: string, ~style: option(ReactDOMRe.Style.t)=?, children) =>
  ReasonReact.wrapJsForReason(
    ~reactClass,
    ~props={
      "to": to_,
      "style": Js.Nullable.from_opt(style)
    },
    children
  );
