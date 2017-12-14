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

module Book = Icon({
  [@bs.module "react-icons/lib/md"] external reactClass: ReasonReact.reactClass = "MdBook";
});

module Search = Icon({
  [@bs.module "react-icons/lib/fa"] external reactClass: ReasonReact.reactClass = "FaSearch";
});

module Star = Icon({
  [@bs.module "react-icons/lib/go"] external reactClass: ReasonReact.reactClass = "GoStar";
});

module Tags = Icon({
  [@bs.module "react-icons/lib/fa"] external reactClass: ReasonReact.reactClass = "FaTags";
});
