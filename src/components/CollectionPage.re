open Vrroom;

let component = ReasonReact.statelessComponent("CollectionPage");
let make = (~title, ~packages, _:childless) => {
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