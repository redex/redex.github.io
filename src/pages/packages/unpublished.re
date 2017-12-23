open! Helpers;

let introduction = {|
  <em>
  Unpublished packages are usually incomplete or experimental, often written just
  to solve a specific need in the moment, then shared in the hopes that it'll be
  of use to others. These packages are included in the index mostly to make it
  easier to find a starting point or ideas for writing your own bindings and
  libraries. They might very well be complete enough to solve your needs too,
  however, since they've usually been written for a reason, to address a need.
  </em>
|};

let component = ReasonReact.statelessComponent("Packages");
let make = (~data, _children) => {
  ...component,

  render: _self =>
    <div>
      <Helmet title=Config.titleTemplate("Unpublished Packages") />
      <h1> {"Unpublished packages" |> text} </h1>

      <p dangerouslySetInnerHTML={ "__html": introduction } />

      <Control.Map items=(data##packages |> Graphql.getNodes)>
        ...(package => <PackageSummary key=package##id package />)
      </Control.Map>
    </div>
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