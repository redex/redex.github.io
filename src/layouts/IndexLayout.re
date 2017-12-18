open! Helpers;

module Styles = IndexLayoutStyles;

let component = ReasonReact.statelessComponent("PageLayout");
let make = (~children, _children) => {
  ...component,

  render: _self =>
    <div className=Styles.root>
      <Helmet title="redex" />

      <div className=Styles.header>
        <div className=Styles.widthContainer>
          <PackageSearchBox />
          <Link to_="/" className=Styles.title>
            <svg className=Styles.logo>
              <use href="/logo.svg#logo" />
            </svg>
          </Link>
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
    jsProps => make(
      ~children=jsProps##children,
      [||]
    )
  );

let __esModule = true;