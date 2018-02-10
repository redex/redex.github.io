open! Vrroom;

let component = ReasonReact.statelessComponent("Packages");
let make = (~data, _:childless) => {
  ...component,

  render: _self =>
    <CollectionPage title="Packages" packages=(data##packages |> Graphql.getNodes) />
};

let default =
  ReasonReact.wrapReasonForJs(
    ~component,
    jsProps => make(~data=jsProps##data, [||])
  );

[%%raw {|
  export const query = graphql`
    query PackagesQuery {
      packages: allPackages(sort: { fields: [name] }) {
        edges {
          node {
            type
            id
            name
            version
            category
            flags
            platforms
            description
            keywords
            license
            updated
            stars
            score
            quality
            popularity
            maintenance
            slug
          }
        }
      }
    }
  `
|}];
