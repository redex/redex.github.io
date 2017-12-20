open! Helpers;

let component = ReasonReact.statelessComponent("NotFoundPage");
let make = _children => {
  ...component,
  render: _self =>
    <div>
      <h1> ("NOT FOUND" |> text) </h1>
      <p> ("You just hit a route that doesn't exist... the sadness." |> text) </p>
    </div>
};

let default =
  ReasonReact.wrapReasonForJs(
    ~component,
    _jsProps => make([||])
  );
