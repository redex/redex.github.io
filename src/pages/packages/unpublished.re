open! Helpers;

let component = ReasonReact.statelessComponent("Packages");
let make = (~data, _children) => {
  ...component,

  render: _self =>
    <Control.Map items=(data##packages |> Graphql.getNodes)>
      ...(package => <PackageSummary key=package##id package />)
    </Control.Map>
};

let default =
  ReasonReact.wrapReasonForJs(
    ~component,
    jsProps => make(~data=jsProps##data, [||])
  );

[%%raw {|
  export const query = graphql`
    query UnpublishedQuery {
      packages: allPackages(filter: { type: { eq: "unpublished" }}) {
        edges {
          node {
            type
            id
            name
            version
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