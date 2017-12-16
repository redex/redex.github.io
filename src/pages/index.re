open! Helpers;

let component = ReasonReact.statelessComponent("Index");
let make = (~data, _children) => {
  ...component,

  render: _self =>
    <div>
      <PackageSearchBox />

      <div className=Styles.Index.keywords>
        {
          data##keywords##edges
          |> Array.map(edge => edge##node)
          |> Array.map(keyword =>
              <Link to_=keyword##slug>
                <span className="label"> {keyword##name |> text} </span>
                <span className="count"> {keyword##count |> text} </span>
              </Link>
              )
          |> ReasonReact.arrayToElement
        }
      </div>

      <div className=Styles.Index.lists>
        <div>
          <h2> {"Recent releases" |> text} </h2>
          {
            module Styles = Styles.Index.ListItem;

            data##recentPackages##edges
            |> Array.map(edge => edge##node)
            |> Array.map(package =>
                <div key=package##name className=Styles.root>
                  <div>
                    <Link to_=package##slug className=Styles.name>
                      {package##name |> text}
                    </Link>
                    <span className=Styles.version> {package##version |> text} </span>
                  </div>
                  <div className=Styles.right>
                    <div className=Styles.updated> <TimeAgo date=package##updated /> </div>
                  </div>
                </div>
               )
            |> ReasonReact.arrayToElement
          }
        </div>

        <div>
          <h2> {"Most popular" |> text} </h2>
          {
            module Styles = Styles.Index.ListItem;

            data##popularPackages##edges
            |> Array.map(edge => edge##node)
            |> Array.map(package =>
                <div key=package##name className=Styles.root>
                  <div>
                    <Link to_=package##slug className=Styles.name>
                      {package##name |> text}
                    </Link>
                    <span className=Styles.version> {package##version |> text} </span>
                  </div>
                  <div className=Styles.right>
                    {
                      switch (package##stars |> Js.toOption) {
                      | Some(stars) => <div className=Styles.stars> {stars |> text} <Icon.Star className=Styles.starIcon/> </div>
                      | None 				=> ReasonReact.nullElement
                      }
                    }
                  </div>
                </div>
               )
            |> ReasonReact.arrayToElement
          }
        </div>
      </div>
    </div>
};

let default = ReasonReact.wrapReasonForJs(~component, jsProps => make(~data=jsProps##data, [||]));

[%%raw {|
  export const query = graphql`
    query IndexQuery {
      recentPackages: allPackages(filter: { type: { eq: "published" } }, limit: 10, sort: { fields: [updated], order: DESC } ) {
        edges {
          node {
            ...package
          }
        }
      }

      popularPackages: allPackages(limit: 10, sort: { fields: [popularity], order: DESC } ) {
        edges {
          node {
            ...package
          }
        }
      }

      keywords: allKeywords(sort: { fields: [count], order: DESC } ) {
        edges {
          node {
            name
            count
            slug
          }
        }
      }
    }

    fragment package on Packages {
      name
      version
      description
      keywords
      license
      updated
      stars
      slug
    }
  `
|}];
