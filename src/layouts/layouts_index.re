let text = ReasonReact.stringToElement;

[%raw "require('./index.css')"];

module Header = {
  let component = ReasonReact.statelessComponent("IndexLayout Header");
  let make = _children => {
    ...component,

    render: _self =>
      <div style=(ReactDOMRe.Style.make(~background="rebeccapurple", ~marginBottom="1.45rem", ()))>
        <div style=(
              ReactDOMRe.Style.make(
                ~margin="0 auto",
                ~maxWidth="960px",
                ~padding="1.45rem 1.0875rem",
                ()
              ))>
          <h1 style=(ReactDOMRe.Style.make(~margin="0", ()))>
            <Link
              to_="/" style=(ReactDOMRe.Style.make(~color="white", ~textDecoration="none", ()))>
              ("Gatsby" |> text)
            </Link>
          </h1>
        </div>
      </div>
  };
};

let component = ReasonReact.statelessComponent("IndexLayout");
let make = (~children: unit => ReasonReact.reactElement, _children) => {
  ...component,

  render: _self =>
    <div>
      <Helmet
        title="Gatsby Default Starter"
        meta=[|
          {"name": "description", "content": "Sample"},
          {"name": "keywords", "content": "sample, something"}
        |]
      />

      <Header />

      <div style=(
            ReactDOMRe.Style.make(
              ~margin="0 auto",
              ~maxWidth="960px",
              ~padding="0px 1.0875rem 1.45rem",
              ~paddingTop="0",
              ()
            )
          )>
        (children())
      </div>
    </div>
};

let default =
  ReasonReact.wrapReasonForJs(
    ~component=component,
    jsProps => make(~children=jsProps##children, [||])
  );

let __esModule = true;
