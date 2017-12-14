open Rebase;
open Helpers;

let component = ReasonReact.statelessComponent("Keywords");
let make = (~data, _children) => {
  ...component,

  render: _self =>
    <div>
      {
        data##keywords##edges
        |> Array.map(edge => edge##node)
        |> Array.map(keyword => 
          <div key=keyword##name>
            <h2> {keyword##name |> text} </h2>
            <PackageList packages={keyword##packages |> Array.filter(p => p !== Obj.magic(Js.null)) /* TODO: warn about missing packages instead of just fitlering them out*/
                                                     |> Js.Array.sortInPlaceWith((a, b) => compare(a##name, b##name)) } /> 
          </div>
        )
        |> ReasonReact.arrayToElement
      }
    </div>
};

let default = ReasonReact.wrapReasonForJs(~component=component, jsProps => make(~data=jsProps##data, [||]));

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
              stars
              slug
            }
          }
        }
      }
    }
  `
|}];
