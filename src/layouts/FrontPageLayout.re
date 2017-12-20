open! Helpers;

module Styles = FrontPageLayoutStyles;

let component = ReasonReact.statelessComponent("FrontPageLayout");
let make = (~children: unit => ReasonReact.reactElement, _children) => {
  ...component,

  render: _self =>
    <div className=Styles.root>

      <div className=Styles.links>
        <Link to_="/packages"> ("Packages" |> text) </Link>
        <Link to_="/keywords"> ("Keywords" |> text) </Link>
        <Link to_="/packages/unpublished"> ("Unpublished" |> text) </Link>
        <Link className=Styles.inactiveLink to_="/"> ("Documentation" |> text) </Link>
      </div>
      
      <Helmet title="redex" />

      <div className=Styles.header>
        <div className=Styles.widthContainer>
          <h1 className=Styles.title>
            <svg className=Styles.logo>
              /* NOTE: xlink stuff needed for safari */
              <use href="/logo.svg#logo" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/logo.svg#logo"/>
            </svg>
            ("redex" |> text)
          </h1>
        </div>
      </div>

      <div className=Styles.widthContainer>
        (children())
      </div>

      <div className=Styles.footer>
        <div className=Styles.widthContainer>
          <section>
            <h1> ("Project" |> text) </h1>
            <ul>
              <li> <a href="https://github.com/redex/redex.github.io"> ("Source Code Repository" |> text) </a> </li>
              <li> <a href="https://github.com/redex/redex.github.io/issues"> ("Support / Bug Tracker" |> text) </a> </li>
              <li> <Link to_="/publish"> ("Publishing Guide" |> text) </Link> </li>
            </ul>
          </section>

          <section>
            <h1> ("Made with" |> text) </h1>
            <ul>
              <li> <a href="https://npms.io/"> ("npms.io" |> text) </a> </li>
              <li> <a href="https://www.gatsbyjs.org/"> ("Gatsby" |> text) </a> </li>
              <li> <a href="https://reasonml.github.io/reason-react/"> ("ReasonReact" |> text) </a> </li>
              <li> <a href="https://github.com/bucklescript/bucklescript"> ("BuckleScript" |> text) </a> </li>
              <li> <a href="https://github.com/threepointone/glamor"> ("glamor" |> text) </a> </li>
            </ul>
          </section>

          <section>
            <h1> ("Reason" |> text) </h1>
            <ul>
              <li> <a href="https://reasonml.github.io/"> ("Reason Homepage" |> text) </a> </li>
              <li> <a href="https://reasonml.github.io/guide"> ("Reason Guide" |> text) </a> </li>
              <li> <a href="https://reasonml.github.io/try"> ("Reason Playground" |> text) </a> </li>
            </ul>
          </section>

          <section>
            <a href="https://www.algolia.com">
              <img className=Styles.algoliaLogo src="/search-by-algolia-white.svg" />
            </a>
          </section>
        </div>
      </div>
    </div>
};

let default =
  ReasonReact.wrapReasonForJs(
    ~component,
    jsProps => make(~children=jsProps##children, [||])
  );

let __esModule = true;
