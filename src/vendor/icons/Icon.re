module Icon(Ext: { let reactClass : ReasonReact.reactClass }) = {
  let make = (~className=?, children) =>
    ReasonReact.wrapJsForReason(
      ~reactClass=Ext.reactClass,
      ~props={
        "className": className
      },
      children
    );
};

module Tags = Icon({
  [@bs.module "react-icons/lib/fa"] external reactClass: ReasonReact.reactClass = "FaTags";
});

module Star = Icon({
  [@bs.module "react-icons/lib/go"] external reactClass: ReasonReact.reactClass = "GoStar";
});