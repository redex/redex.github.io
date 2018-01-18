open Vrroom.Helpers;
module Control = Vrroom.Control;
module Styles = IndexStyles;

let component = ReasonReact.statelessComponent("Index");
let make = (~data, _children) => {
  ...component,

  render: _self =>
    <div className=Styles.root>

      <SearchBox />

      <div className=Styles.keywords>
        <Control.Map items=(data##keywords |> Graphql.getNodes)>
          ...(keyword =>
            <Link key=keyword##slug to_=keyword##slug>
              <span className="label"> {keyword##name |> text} </span>
              <span className="count"> {keyword##count |> text} </span>
            </Link>
          )
        </Control.Map>
      </div>

      <div className=Styles.lists>

        <div>
          <h2> {"Recent releases" |> text} </h2>
          <TopList packages = (data##recentPackages |> Graphql.getNodes)
                   value    = `updated />
        </div>

        <div>
          <h2> {"Most popular" |> text} </h2>
          <TopList packages = (data##popularPackages |> Graphql.getNodes)
                   value    = `stars />  
        </div>

      </div>

    </div>
};

let default =
  ReasonReact.wrapReasonForJs(
    ~component,
    jsProps => make(~data=jsProps##data, [||])
  );

[%%raw {|
  export const query = graphql`
    query IndexQuery {
      recentPackages: allPackages(filter: { type: { eq: "published" } }, limit: 10, sort: { fields: [updated], order: DESC } ) {
        edges {
          node {
            ...package
          }
        }
      }

      popularPackages: allPackages(limit: 10, sort: { fields: [popularity], order: DESC } ) {
        edges {
          node {
            ...package
          }
        }
      }

      keywords: allKeywords(sort: { fields: [count], order: DESC } ) {
        edges {
          node {
            name
            count
            slug
          }
        }
      }
    }

    fragment package on Packages {
      name
      version
      description
      keywords
      license
      updated
      stars
      slug
    }
  `
|}];
