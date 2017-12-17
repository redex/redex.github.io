open! Helpers;

let component = ReasonReact.statelessComponent("Packages");
let make = (~data, _children) => {
  ...component,

  render: _self =>
    <PackageList packages={data##packages##edges |> Array.map(edge => edge##node)} />
};

let default = ReasonReact.wrapReasonForJs(~component=component, jsProps => make(~data=jsProps##data, [||]));

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
            slug
          }
        }
      }
    }
  `
|}];