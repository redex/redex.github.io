open! Vrroom;

let component = ReasonReact.statelessComponent("Category");
let make = (~data, ~pathContext, _:childless) => {
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