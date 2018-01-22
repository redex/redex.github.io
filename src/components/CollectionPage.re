open Vrroom.Helpers;
module Control = Vrroom.Control;

let component = ReasonReact.statelessComponent("CollectionPage");
let make = (~title, ~packages, _children) => {
  ...component,
  render: _self =>
    <div>
      <Helmet title=Config.titleTemplate(title) />
      <h1> {(title ++ " (" ++ string_of_int(Array.length(packages)) ++ ")") |> text} </h1>
      <Control.Map items=packages>
        ...(package => <PackageSummary key=package##id package />)
      </Control.Map>
    </div>
};