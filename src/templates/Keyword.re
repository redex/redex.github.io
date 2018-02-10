open! Vrroom;

let component = ReasonReact.statelessComponent("Keyword");
let make = (~data, ~pathContext, _:childless) => {
  ...component,
  render: _self =>
    <CollectionPage title=pathContext##keyword packages=(data##packages |> Graphql.getNodes) />
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
    query KeywordQuery($keyword: String!) {
      packages: allPackages(filter: { keywords: { in: [$keyword] }}) {
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