open! Helpers;

module Styles = IndexLayoutStyles;

let component = ReasonReact.statelessComponent("PageLayout");
let make = (~children, _children) => {
  ...component,

  render: _self =>
    <div className=Styles.root>

      <Helmet defaultTitle="redex">
        <html lang="en" />
        <meta name="description" content="Package index for the ReasonML/BuckleScript ecosystem" />
      </Helmet>

      <div className=Styles.header>
        <div className=CommonStyles.widthContainer>
          <SearchBox />
          <Link to_="/" className=Styles.title>
            <svg className=Styles.logo>
              /* NOTE: xlink stuff needed for safari */
              <use href="/logo.svg#logo" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/logo.svg#logo"/>
            </svg>
          </Link>
        </div>
      </div>

      <div className=CommonStyles.widthContainer>
        (children())
      </div>

      <Footer context=`Index />

    </div>
};

let default =
  ReasonReact.wrapReasonForJs(
    ~component,
    jsProps => make(~children=jsProps##children, [||])
  );

let __esModule = true;