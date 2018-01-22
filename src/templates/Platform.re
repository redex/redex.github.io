open! Vrroom.Helpers;
module Control = Vrroom.Control;

let component = ReasonReact.statelessComponent("Platform");
let make = (~data, ~pathContext, _children) => {
  ...component,
  render: _self =>
    <CollectionPage title=pathContext##platform packages=(data##packages |> Graphql.getNodes) />
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
    query PlatformQuery($platform: String!) {
      packages: allPackages(filter: { platforms: { in: [$platform] }}) {
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