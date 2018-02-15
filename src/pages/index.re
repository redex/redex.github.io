open Vrroom;
module Styles = IndexStyles;

let sort = groups => {
  let copy = groups |> Js.Array.copy;
  copy |> Array.stable_sort((a, b) => b##count - a##count);
  copy
};

let component = ReasonReact.statelessComponent("Index");
let make = (~data, _:childless) => {
  ...component,

  render: _self =>
    <div className=(Styles.root |> TypedGlamor.toString)>

      <SearchBox focusOnMount=true />

      <div className=(Styles.keywords |> TypedGlamor.toString)>
        <Control.Map items=(data##keywords##group |> sort)>
          ...(keyword =>
            <Link key=keyword##name to_=("/keyword/" ++ keyword##name)>
              <span className="label"> {keyword##name |> text} </span>
              <span className="count"> {string_of_int(keyword##count) |> text} </span>
            </Link>
          )
        </Control.Map>
      </div>

      <div className=(Styles.lists |> TypedGlamor.toString)>

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

      keywords: allPackages {
        group(field: keywords) {
          name: fieldValue,
          count: totalCount
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
