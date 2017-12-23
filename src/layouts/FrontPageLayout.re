open! Helpers;

module Styles = FrontPageLayoutStyles;

let component = ReasonReact.statelessComponent("FrontPageLayout");
let make = (~children: unit => ReasonReact.reactElement, _children) => {
  ...component,

  render: _self =>
    <div className=Styles.root>
      
      <Helmet title="redex" />

      <div className=Styles.links>
        <Link to_="/packages"> ("Packages" |> text) </Link>
        <Link to_="/keywords"> ("Keywords" |> text) </Link>
        <Link to_="/packages/unpublished"> ("Unpublished" |> text) </Link>
        <Link className=Styles.inactiveLink to_="/"> ("Documentation" |> text) </Link>
      </div>

      <div className=Styles.header>
        <div className=CommonStyles.widthContainer>
          <h1 className=Styles.title>
            <svg className=Styles.logo>
              /* NOTE: xlink stuff needed for safari */
              <use href="/logo.svg#logo" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/logo.svg#logo"/>
            </svg>
            <em> {"re" |> text} </em> {"ason package in" |> text} <em>{"dex" |> text} </em>
          </h1>
        </div>
      </div>

      <div className=CommonStyles.widthContainer>
        (children())
      </div>

      <Footer context=`Front />

    </div>
};

let default =
  ReasonReact.wrapReasonForJs(
    ~component,
    jsProps => make(~children=jsProps##children, [||])
  );

let __esModule = true;
