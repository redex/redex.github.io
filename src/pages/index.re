open Helpers;

let component = ReasonReact.statelessComponent("Index");
let make = (~data, _children) => {
  ...component,

  render: _self =>
    <div>
      <PackageSearchBox />
      <div className=Styles.Index.links>
        <Link to_="/packages"> ("Packages" |> text) </Link>
        <Link to_="/keywords"> ("Keywords" |> text) </Link>
        <Link to_="/docs"> ("Documentation" |> text) </Link>
        <Link to_="/about"> ("About" |> text) </Link>
        <Link to_="/about/#submit"> ("Submit" |> text) </Link>
      </div>
      
      <div className=Styles.Index.lists>
        <div>
          <h2> {"Recent releases" |> text} </h2>
          {
            data##recentPackages##edges
            |> Array.map(edge => edge##node)
            |> Array.map(package =>
                <div key=package##name className=PackageSummaryStyles.root>
                  <div className=PackageSummaryStyles.left>
                    <Link to_=package##fields##slug> {package##name |> text} </Link>
                    <span className=PackageSummaryStyles.version> {package##version |> text} </span>
                  </div>
                  <div className=PackageSummaryStyles.right>
                    <div className=PackageSummaryStyles.updated> <TimeAgo date=package##updated /> </div>
                  </div>
                </div>
               )
            |> ReasonReact.arrayToElement
          }
        </div>

        <div>
          <h2> {"Most popular" |> text} </h2>
          {
            data##popularPackages##edges
            |> Array.map(edge => edge##node)
            |> Array.map(package =>
                <div key=package##name className=PackageSummaryStyles.root>
                  <div className=PackageSummaryStyles.left>
                    <Link to_=package##fields##slug> {package##name |> text} </Link>
                    <span className=PackageSummaryStyles.version> {package##version |> text} </span>
                  </div>
                  <div className=PackageSummaryStyles.right>
                    {
                      switch (package##stars |> Js.toOption) {
                      | Some(stars) => <div className=PackageSummaryStyles.stars> {stars |> text} <FaStar className=PackageSummaryStyles.starIcon/> </div>
                      | None 				=> ReasonReact.nullElement
                      }
                    }
                  </div>
                </div>
               )
            |> ReasonReact.arrayToElement
          }
        </div>

        <div>
          <h2> {"Keywords" |> text} </h2>
          {
            data##keywords##edges
            |> Array.map(edge => edge##node)
            |> Array.map(keyword =>
                <div key=keyword##name className=PackageSummaryStyles.root>
                  <div className=PackageSummaryStyles.left>
                    <Link to_=keyword##fields##slug> {keyword##name |> text} </Link>
                  </div>
                  <div className=PackageSummaryStyles.right>
                    <div> {keyword##count |> text} </div>
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
      recentPackages: allPackagesJson(limit: 10, sort: { fields: [updated], order: DESC } ) {
        edges {
          node {
            ...package
          }
        }
      }

      popularPackages: allPackagesJson(limit: 10, sort: { fields: [popularity], order: DESC } ) {
        edges {
          node {
            ...package
          }
        }
      }

      keywords: allKeywordsJson(limit: 10, sort: { fields: [count], order: DESC } ) {
        edges {
          node {
            name
            count
            fields {
              slug
            }
          }
        }
      }
    }

    fragment package on PackagesJson {
      name
      version
      description
      keywords
      license
      updated
      stars

      fields {
        slug
      }
    }
  `
|}];
