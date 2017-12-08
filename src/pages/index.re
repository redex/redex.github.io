let text = ReasonReact.stringToElement;
let component = ReasonReact.statelessComponent "Index";

let make _children => {
  ...component,
  render: fun _self =>
    <div>
      <h1> (text "Hi people") </h1>
      <p> (text "Welcome to your new Gatsby site.") </p>
      <p> (text "Now go build something great.") </p>
      <Link to_="/page_2/"> (text "Go to page 2") </Link>
    </div>
};

let default =
  ReasonReact.wrapReasonForJs
    ::component
    (fun _ => make [||])