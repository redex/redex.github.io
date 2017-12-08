let text = ReasonReact.stringToElement;
let component = ReasonReact.statelessComponent "Page 2";

let make _children => {
  ...component,
  render: fun _self =>
    <div>
      <h1> (text "Hi from the second page") </h1>
      <p> (text "Welcome to page 2") </p>
      <Link to_="/"> (text "Go back to the homepage") </Link>
    </div>
};

let default =
  ReasonReact.wrapReasonForJs
    ::component
    (fun _ => make [||])