open! Helpers;

let component = ReasonReact.statelessComponent("Packages");
let make = (~data, _children) => {
  ...component,

  render: _self =>
    <div>
      <Helmet title=Config.titleTemplate("Packages") />

      <h1> {"Packages" |> text} </h1>

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
    query PackagesQuery {
      packages: allPackages(sort: { fields: [name] }) {
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
