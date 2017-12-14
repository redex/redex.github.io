open Helpers;
let component = ReasonReact.statelessComponent("Package");
let make = (~data, ~pathContext, _children) => {
  ...component,
  render: _self =>
    <div>
      <h1> {pathContext##keyword} </h1>
      <PackageList packages={data##packages##edges |> Array.map(edge => edge##node)} />
    </div>
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