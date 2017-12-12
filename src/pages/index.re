open Helpers;

let component = ReasonReact.statelessComponent("Index");
let make = _children => {
  ...component,

  render: _self =>
    <div>
      <PackageSearchBox />
      <div className=Styles.Index.links>
        <Link to_="/packages"> ("Packages" |> text) </Link>
        <Link to_="/keywords"> ("Keywords" |> text) </Link>
        <Link to_="/about"> ("About" |> text) </Link>
      </div>
    </div>
};

let default = ReasonReact.wrapReasonForJs(~component, _jsProps => make([||]))
