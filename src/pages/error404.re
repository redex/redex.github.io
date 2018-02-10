open! Vrroom;

let component = ReasonReact.statelessComponent("NotFoundPage");
let make = (_:childless) => {
  ...component,
  render: _self =>
    <div>
      <Helmet title=Config.titleTemplate("404: Not Found") />
      <h1> ("NOT FOUND" |> text) </h1>
      <p> ("You just hit a route that doesn't exist... the sadness." |> text) </p>
    </div>
};

let default =
  ReasonReact.wrapReasonForJs(
    ~component,
    _jsProps => make([||])
  );
