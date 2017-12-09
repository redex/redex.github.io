open Helpers;

let component = ReasonReact.statelessComponent("Index");
let make = (~data, _children) => {
  ...component,

  render: _self =>
    <div>
      <h1> ("Hi people" |> text) </h1>
      <p> ("Welcome to your new Gatsby site." |> text) </p>
      <p> ("Now go build something great." |> text) </p>
      {
        data##allPackagesJson##edges
        |> Array.map(edge => edge##node)
        |> Array.map(node => 
           <div>
             <Link to_=node##fields##slug> (node##name |> text) </Link>
           </div>)
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

            fields {
              slug
            }
          }
        }
      }
    }
  `
|}];