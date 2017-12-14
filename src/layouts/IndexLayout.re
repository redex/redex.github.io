open! Helpers;

module Styles = IndexLayoutStyles;

let component = ReasonReact.statelessComponent("IndexLayout");
let make = (~children: unit => ReasonReact.reactElement, _children) => {
  ...component,

  render: _self =>
    <div className=Styles.root>
      <Helmet title="re:libs" />

      <div className=Styles.header>
        <div className=Styles.widthContainer>
          <h1 className=Styles.title>
            <Link to_="/"> ("re:libs PAGE" |> text) </Link>
          </h1>
        </div>
      </div>

      <div className=Styles.widthContainer>
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