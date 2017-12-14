open Helpers;
let component = ReasonReact.statelessComponent("Package");
let make = (~data, _children) => {
  ...component,
  render: _self =>
    <div>
      <h1> (data##package##name |> text) </h1>
      <span> ("(" ++ data##package##version ++ ")" |> text) </span>
      <div> (data##package##description |> text) </div>
      <div dangerouslySetInnerHTML={ "__html": data##package##readme } />
    </div>
};

let default = ReasonReact.wrapReasonForJs(~component=component, jsProps => make(~data=jsProps##data, [||]));

[%%raw {|
  export const query = graphql`
    query PackageQuery($slug: String!) {
      package: packages(slug: { eq: $slug }) {
        name
        version
        description
        readme
      }
    }
  `
|}];