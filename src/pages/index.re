open Helpers;

let component = ReasonReact.statelessComponent("Index");
let make = _children => {
  ...component,
  render: _self =>
    <div>
      <h1> ("Hi people" |> text) </h1>
      <p> ("Welcome to your new Gatsby site." |> text) </p>
      <p> ("Now go build something great." |> text) </p>
      <Link to_="/page_2/"> ("Go to page 2" |> text) </Link>
    </div>
};

let default = ReasonReact.wrapReasonForJs(~component=component, (_) => make([||]));
