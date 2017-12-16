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
        /*
        <Link to_="/docs"> ("Documentation" |> text) </Link>
        <Link to_="/about"> ("About" |> text) </Link>
        <Link to_="/about/#submit"> ("Submit" |> text) </Link>
        */
      </div>
      
      <Helmet title="REDEX" />

      <div className=Styles.header>
        <div className=Styles.widthContainer>
          <h1 className=Styles.title>
            <svg className=Styles.logo viewBox="0 0 24 24">
                <path d="M19,2L14,6.5V17.5L19,13V2M6.5,5C4.55,5 2.45,5.4 1,6.5V21.16C1,21.41 1.25,21.66 1.5,21.66C1.6,21.66 1.65,21.59 1.75,21.59C3.1,20.94 5.05,20.5 6.5,20.5C8.45,20.5 10.55,20.9 12,22C13.35,21.15 15.8,20.5 17.5,20.5C19.15,20.5 20.85,20.81 22.25,21.56C22.35,21.61 22.4,21.59 22.5,21.59C22.75,21.59 23,21.34 23,21.09V6.5C22.4,6.05 21.75,5.75 21,5.5V7.5L21,13V19C19.9,18.65 18.7,18.5 17.5,18.5C15.8,18.5 13.35,19.15 12,20V13L12,8.5V6.5C10.55,5.4 8.45,5 6.5,5V5Z" />
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
              <li> <a href="https://github.com/rebench/rebench.github.io"> ("Source Code Repository" |> text) </a> </li>
              <li> <a href="https://github.com/rebench/rebench.github.io/issues"> ("Support / Bug Tracker" |> text) </a> </li>
              <li> <a href="https://github.com/rebench/rebench.github.io/issues"> ("Publish a package" |> text) </a> </li>
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
            <img className=Styles.algoliaLogo src="search-by-algolia-white.svg" />
          </section>
        </div>
      </div>
    </div>
};

let default =
  ReasonReact.wrapReasonForJs(
    ~component=component,
    jsProps => make(~children=jsProps##children, [||])
  );

let __esModule = true;
