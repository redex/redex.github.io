open! Rebase;
open! Helpers;

let getPackages = keyword =>
  keyword##packages |> Array.map(Js.toOption)
                    |> Array.filter(
                       fun | Some(_) => true
                           | None => {
                             Js.log("missing package on keyword: " ++ keyword##name);
                             false
                           })
                    |> Array.map(Option.getOrRaise)
                    |> Js.Array.sortInPlaceWith(
                        (a, b) => compare(a##name: string, b##name));

let component = ReasonReact.statelessComponent("Keywords");
let make = (~data, _children) => {
  ...component,

  render: _self =>
    <div>
      <Helmet title=Config.titleTemplate("Keywords") />

      <h1> {"Keywords" |> text} </h1>

      <Control.Map items=(data##keywords |> Graphql.getNodes)>
        ...(keyword => 
          <div key=keyword##name>
            <h2> {keyword##name |> text} </h2>
            <Control.Map items=getPackages(keyword)>
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
      keywords: allKeywords(sort: { fields: [name] }) {
        edges {
          node {
            name

            packages {
              type
              id
              name
              version
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
