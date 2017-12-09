open Helpers;

module Header = {
  let component = ReasonReact.statelessComponent("IndexLayout Header");
  let make = _children => {
    ...component,

    render: _self =>
      <div className=Styles.Layout.header>
        <div className=Styles.Layout.widthContainer>
          <h1 className=Styles.Layout.title>
            <Link to_="/"> ("re:index" |> text) </Link>
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
      <Helmet title="Gatsby Default Starter"
              meta=[|
                {"name": "description", "content": "Sample"},
                {"name": "keywords", "content": "sample, something"}
              |] />

      <Header />

      <div className=Styles.Layout.widthContainer>
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
