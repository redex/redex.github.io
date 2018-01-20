open Vrroom.Helpers;
module Control = Vrroom.Control;
module Styles = PackageStyles;

[%raw "require('../../static/hljs.css')"];

let component = ReasonReact.statelessComponent("Package");
let make = (~data, _children) => {
  ...component,
  render: _self => {
    let package = data##package;

    <div className=Styles.root>
      <Helmet title=Config.titleTemplate(package##name) />
      <header className=Styles.header(package##_type)>
        <div className=Styles.props>
          <Control.IfSome option=(package##stars |> Js.toOption)>
            ...(stars =>
              <div className=Styles.stars>
                {stars |> text} <Icon.Star className=Styles.starIcon/>
              </div>
            )
          </Control.IfSome>

          <Score package />

          {switch (package##license |> Js.toOption) {
          | Some(license) => <div className=Styles.license> {license |> text} </div>
          | None					=> <div className=Styles.nolicense> {"No license" |> text} </div>
          }}

          <div className=Styles.updated> <TimeAgo date=package##updated /> </div>
        </div>

        <div className=Styles.title>
          /*<span className=Styles.owner> {"package" |> text} </span>*/
          <Link to_=package##slug className=Styles.name>
            {package##name |> text}
          </Link>

				  <Version version=package##version isPublished=(package##_type == "published") />

          <Platforms platforms=package##platforms />
        </div>

        <div className=Styles.fields>
          <div className=Styles.description>	
            {package##description |> text}
          </div>

          <div className=Styles.tags>
            <Icon.Tags className=Styles.tagsIcon />
            <Tag.Category name=package##category />
            <Control.Map items=package##keywords>
              ...(keyword => <Tag.Keyword key=keyword name=keyword />)
            </Control.Map>
          </div>
        </div>

        <div className=Styles.links>
          <a href=?Js.toOption(package##homepageUrl)> {"homepage" |> text} </a>
          <a href=?Js.toOption(package##repositoryUrl)> {"repository" |> text} </a>
          <a href=?Js.toOption(package##npmUrl)> {"npm" |> text} </a>
          <a href=?Js.toOption(package##issuesUrl)> {"issues" |> text} </a>
          <a href=?Js.toOption(package##docsUrl)> {"documentation" |> text} </a>
        </div>

      </header>

      <div className=Styles.readme
           dangerouslySetInnerHTML={ "__html": package##readme } />
    </div>
  }
};

let default =
  ReasonReact.wrapReasonForJs(
    ~component,
    jsProps => make(~data=jsProps##data, [||])
  );

[%%raw {|
  export const query = graphql`
    query PackageQuery($id: String!) {
      package: packages(id: { eq: $id }) {
        type
        id
        name
        version
        category
        condition
        platforms
        description
        keywords
        license
        updated
        stars
        score
        quality
        popularity
        maintenance
        readme
        homepageUrl
        repositoryUrl
        npmUrl
        issuesUrl

        slug
      }
    }
  `
|}];