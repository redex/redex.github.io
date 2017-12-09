open Helpers;
let component = ReasonReact.statelessComponent("Package");
let make = (~data, _children) => {
  ...component,
  render: _self =>
    <div>
      <h1> (data##packagesJson##name |> text) </h1>
      <span> ("(" ++ data##packagesJson##version ++ ")" |> text) </span>
      <div> (data##packagesJson##description |> text) </div>
      <div dangerouslySetInnerHTML={ "__html": data##packagesJson##fields##html } />
    </div>
};

let default = ReasonReact.wrapReasonForJs(~component=component, jsProps => make(~data=jsProps##data, [||]));

[%%raw {|
  export const query = graphql`
    query PackageQuery($slug: String = "bs-json") {
      packagesJson(fields: { slug: { eq: $slug }}) {
        name
        version
        description

        fields {
          html
        }
      }
    }
  `
|}];