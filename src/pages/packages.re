open Helpers;

let component = ReasonReact.statelessComponent("Packages");
let make = (~data, _children) => {
  ...component,

  render: _self =>
    <div>
      {
        data##allPackagesJson##edges
        |> Array.map(edge => edge##node)
        |> Array.map(package => <PackageSummary package />)
        |> ReasonReact.arrayToElement
      }
    </div>
};

let default = ReasonReact.wrapReasonForJs(~component=component, jsProps => make(~data=jsProps##data, [||]));

[%%raw {|
  export const query = graphql`
    query IndexQuery {
      allPackagesJson {
        edges {
          node {
            name
            version
            description
            keywords
            license
            updated
            stars

            fields {
              slug
            }
          }
        }
      }
    }
  `
|}];
