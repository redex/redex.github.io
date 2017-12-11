[@bs.module "react-icons/lib/go"] external reactClass: ReasonReact.reactClass = "GoStar";

let make = (~className=?, ~color=?, children) =>
  ReasonReact.wrapJsForReason(
    ~reactClass,
    ~props={
      "className",
      "color"
    },
    children
  );