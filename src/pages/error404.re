let text = ReasonReact.stringToElement;
let component = ReasonReact.statelessComponent "NotFoundPage";

let make _children => {
  ...component,
  render: fun _self =>
    <div>
      <h1> (text "NOT FOUND") </h1>
      <p> (text "You just hit a route that doesn't exist... the sadness.") </p>
    </div>
};

let default =
  ReasonReact.wrapReasonForJs
    ::component
    (fun _ => make [||])