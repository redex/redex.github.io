open! Vrroom.Helpers;
module Control = Vrroom.Control;

let component = ReasonReact.statelessComponent("Package");
let make = (~data, ~pathContext, _children) => {
  ...component,
  render: _self =>
    <CollectionPage title=pathContext##category packages=(data##packages |> Graphql.getNodes) />
};

let default = ReasonReact.wrapReasonForJs(
  ~component,
  jsProps => make(
    ~data=jsProps##data,
    ~pathContext=jsProps##pathContext,
    [||]
  ));

[%%raw {|
  export const query = graphql`
    query CategoryQuery($category: String!) {
      packages: allPackages(filter: { category: { eq: $category }}) {
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