open! Vrroom;
module Styles = IndexLayoutStyles;

let component = ReasonReact.statelessComponent("PageLayout");
let make = (~children, _:childless) => {
  ...component,

  render: _self =>
    <div className=(Styles.root |> TypedGlamor.toString)>

      <Helmet defaultTitle="redex">
        <html lang="en" />
        <meta name="description" content="Package index for the ReasonML/BuckleScript ecosystem" />
      </Helmet>

      <div className=(Styles.header |> TypedGlamor.toString)>
        <div className=(CommonStyles.widthContainer |> TypedGlamor.toString)>
          <SearchBox />
          <Link to_="/" className=(Styles.title |> TypedGlamor.toString)>
            <svg className=(Styles.logo |> TypedGlamor.toString)>
              /* NOTE: xlink stuff needed for safari */
              <use href="/logo.svg#logo" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/logo.svg#logo"/>
            </svg>
          </Link>
        </div>
      </div>

      <div className=(CommonStyles.widthContainer |> TypedGlamor.toString)>
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