open! Helpers;

let component = ReasonReact.statelessComponent("PackageList");
let make = (~packages, _children) => {
  ...component,

  render: _self =>
    <div>
      {
        packages |> Array.map(package => <PackageSummary key=package##id package />)
                 |> ReasonReact.arrayToElement
      }
    </div>
}