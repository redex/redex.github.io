open! Helpers;

let component = ReasonReact.statelessComponent("PackageList");
let make = (~packages, _children) => {
  ...component,

  render: _self =>
    <Control.Map items=packages>
      ...(package => <PackageSummary key=package##id package />)
    </Control.Map>
}