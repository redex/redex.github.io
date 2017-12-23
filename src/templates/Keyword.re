open! Helpers;

let component = ReasonReact.statelessComponent("Package");
let make = (~data, ~pathContext, _children) => {
  ...component,
  render: _self =>
    <div>
      <Helmet title=Config.titleTemplate(pathContext##keyword ++ " (keyword)") />
      <h1> {pathContext##keyword |> text} </h1>
      <Control.Map items=(data##packages |> Graphql.getNodes)>
        ...(package => <PackageSummary key=package##id package />)
      </Control.Map>
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