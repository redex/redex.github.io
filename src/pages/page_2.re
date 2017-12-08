open Helpers;

let component = ReasonReact.statelessComponent("Page 2");
let make = _children => {
  ...component,
  render: _self =>
    <div>
      <h1> ("Hi from the second page" |> text) </h1>
      <p> ("Welcome to page 2" |> text) </p>
      <Link to_="/"> ("Go back to the homepage" |> text) </Link>
    </div>
};

let default = ReasonReact.wrapReasonForJs(~component=component, (_) => make([||]));
