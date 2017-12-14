open! Helpers;

let component = ReasonReact.statelessComponent("IndexLayout");
let make = (~children: unit => ReasonReact.reactElement, _children) => {
  ...component,

  render: _self =>
    <div className=Styles.Layout.root>
      <Helmet title="re:libs" />

      <div className=Styles.Layout.header>
        <div className=Styles.Layout.widthContainer>
          <h1 className=Styles.Layout.title>
            <Link to_="/"> ("re:libs PAGE" |> text) </Link>
          </h1>
        </div>
      </div>

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