open! Vrroom;
module Styles = FooterStyles;

let component = ReasonReact.statelessComponent("Footer");
let make = (~context, _:childless) => {
  ...component,
  render: _self =>
    <div className=(Styles.root(context) |> TypedGlamor.toString)>
      <div className=(CommonStyles.widthContainer |> TypedGlamor.toString)>
        <section>
          <h1> ("Project" |> text) </h1>
          <ul>
            <li> <a href="https://github.com/redex/redex.github.io"> ("Source Code Repository" |> text) </a> </li>
            <li> <a href="https://github.com/redex/data"> ("Package/Data Repository" |> text) </a> </li>
            <li> <a href="https://github.com/redex/redex.github.io/issues"> ("Support / Bug Tracker" |> text) </a> </li>
            <li> <Link to_="/publish"> ("Submit a Package" |> text) </Link> </li>
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
            {switch context {
            | `Front => <img className=(Styles.algoliaLogo |> TypedGlamor.toString) src="/search-by-algolia-white.svg" />
            | `Index => <img className=(Styles.algoliaLogo |> TypedGlamor.toString) src="/search-by-algolia.svg" />
            }}
          </a>
        </section>
      </div>
    </div>
};