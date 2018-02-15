open! Rebase;
open Vrroom;

module Styles = {
  open TypedGlamor;

  let root = css([
    select("& h2 > a", [
      textDecoration(none),

      hover([
        textDecoration(underline)
      ])
    ])
  ]);
};

let component = ReasonReact.statelessComponent("Keywords");
let make = (~data, _:childless) => {
  ...component,

  render: _self =>
    <div className=(Styles.root |> TypedGlamor.toString)>
      <Helmet title=Config.titleTemplate("Keywords") />

      <h1> {"Keywords" |> text} </h1>

      <Control.Map items=data##keywords##group>
        ...(keyword => 
          <div key=keyword##name>
            <h2> <a href=("/keyword/" ++ keyword##name)> {keyword##name |> text} </a> </h2>
            <Control.Map items=Graphql.getNodes(keyword)>
              ...(package => <PackageSummary key=package##id package />)
            </Control.Map>
          </div>
        )
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
    query KeywordsQuery {
      keywords: allPackages {
        group(field: keywords) {
          name: fieldValue
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
              score
              quality
              popularity
              maintenance
              stars
              slug
            }
          }
        }
      }
    }
  `
|}];
