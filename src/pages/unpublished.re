open! Vrroom;

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
let make = (~data, _:childless) => {
  ...component,

  render: _self =>
    <CollectionPage title="Unpublished Packages" packages=(data##packages |> Graphql.getNodes) />
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