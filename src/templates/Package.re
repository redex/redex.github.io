open Vrroom;
module Styles = PackageStyles;

[%raw "require('../../static/hljs.css')"];

let component = ReasonReact.statelessComponent("Package");
let make = (~data, _:childless) => {
  ...component,

  didMount: _self => {
    let _ = [%bs.raw {|
      document.querySelectorAll('.redex-codeblock.m-tabbed')
      .forEach(el => {
        el.querySelector('li.reason').addEventListener('click', () => {
          el.querySelectorAll('.reason').forEach(_ => _.classList.add('s-selected'));
          el.querySelectorAll('.ml').forEach(_ => _.classList.remove('s-selected'));
        });

        el.querySelector('li.ml').addEventListener('click', () => {
          el.querySelectorAll('.reason').forEach(_ => _.classList.remove('s-selected'));
          el.querySelectorAll('.ml').forEach(_ => _.classList.add('s-selected'));
        });
      })
    |}];
  },

  render: _self => {
    let package = data##package;

    <div className=(Styles.root |> TypedGlamor.toString)>
      <Helmet title=Config.titleTemplate(package##name) />
      <header className=(Styles.header |> TypedGlamor.toString)>
        <div className=(Styles.props |> TypedGlamor.toString)>
          <Control.IfSome option=(package##stars |> Js.toOption)>
            ...(stars =>
              <div className=(Styles.stars |> TypedGlamor.toString)>
                {stars |> text} <Icon.Star className=(Styles.starIcon |> TypedGlamor.toString)/>
              </div>
            )
          </Control.IfSome>

          <Score package />

          {switch (package##license |> Js.toOption) {
          | Some(license) => <div className=(Styles.license |> TypedGlamor.toString)> {license |> text} </div>
          | None					=> <div className=(Styles.nolicense |> TypedGlamor.toString)> {"No license" |> text} </div>
          }}

          <div className=(Styles.updated |> TypedGlamor.toString)> <TimeAgo date=package##updated /> </div>
        </div>

        <div className=(Styles.title |> TypedGlamor.toString)>
          /*<span className=Styles.owner> {"package" |> text} </span>*/
          <Link to_=package##slug className=(Styles.name |> TypedGlamor.toString)>
            {package##name |> text}
          </Link>

				  <Version version=package##version isPublished=(package##_type == "published") />

          <Platforms platforms=package##platforms />
        </div>

        <div className=(Styles.descLine |> TypedGlamor.toString)>
          <Flags package invert=true />
          <span className=(Styles.description |> TypedGlamor.toString)>	
            {package##description |> text}
          </span>
        </div>

        <div className=(Styles.tags |> TypedGlamor.toString)>
          <Icon.Tags className=Styles.tagsIcon />
          <Tag.Category name=package##category />
          <Control.Map items=package##keywords>
            ...(keyword => <Tag.Keyword key=keyword name=keyword />)
          </Control.Map>
        </div>

        <div className=(Styles.links |> TypedGlamor.toString)>
          <a href=?Js.toOption(package##homepageUrl)> {"homepage" |> text} </a>
          <a href=?Js.toOption(package##repositoryUrl)> {"repository" |> text} </a>
          <a href=?Js.toOption(package##npmUrl)> {"npm" |> text} </a>
          <a href=?Js.toOption(package##issuesUrl)> {"issues" |> text} </a>
          <a href=?Js.toOption(package##docsUrl)> {"documentation" |> text} </a>
        </div>

      </header>

      <div className=(Styles.readme |> TypedGlamor.toString)
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
        flags
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