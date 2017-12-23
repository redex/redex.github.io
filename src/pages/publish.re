open! Helpers;

let html = {|
  <h1>Getting Published</h1>
  <h2>Step 1: Provide good documentation and metadata</h2>

  <h4>Readme</h4>
  <p>
    Add a file named <code>README.md</code> to the root of your project. A good
    readme should at the very least answer the following questions:

  <ul>
    <li>What is it?
    <li>What state is it in?
    <li>How do I install it?
    <li>How do I use it?
  </ul>

  <p>
    Furthermore, providing an example, a change log and explaining how to contribute is a bonus.

  <p>
    NOTE: The readme and other metadata together must total less than 10k bytes
    in order to be indexed by the search engine. To avoid going over that limit, 
    please keep the contents of the readme to only the essentials, and put
    extensive documentation and such in a separate markdown file linked to from
    the readme. This also has the added benefit of improving search relevance.,
    making it easier to find your package when searching for relevant terms.

  <h4>Metadata</h4>
  <p>
    Fill out the following fields in <code>package.json</code>:
    <ul>
      <li><em>description</em> - A short sentence describing the package
      <li><em>license</em> - The <a href="https://spdx.org/licenses/">SPDX License ID</a> of the package license
      <li><em>keywords</em> - A list of keywords describing the package
      <li><em>homepage</em> - The URL of the project homepage
      <li><em>repository</em> - The URL of the source code repository
      <li><em>bugs</em> - The URL of the bug tracker
    </ul>

  <p>
    Additionally, a number of other factors are taken into account when calculating
    a score for the package, which primarily is used as part of search result
    ranking. This data is blatantly stolen from <a href="https://npms.io">npms.io</a>,
    who are nice enough to detail the factors taken into account
    <a href="https://github.com/npms-io/npms-analyzer/blob/master/docs/architecture.md#evaluators">here</a>.


  <h2>Step 2: Publish to NPM (optional)</h2>
  <p>
    Follow the documentation on <a href="https://docs.npmjs.com/getting-started/publishing-npm-packages">NPM</a>
  <p>
    Publishing to NPM is not a requirement. If your project is incomplete, experimental or otherwise not yet ready for primetime,
    it might be easier to just depend on the master branch of the source code repository. You can still submit your
    package to redex, where it'll then be marked as unpublished. This is not only intended as a warning, but also to
    highlight opportunities to contribute. 

  <h2>Step 3: Submit to redex</h2>
  <p>
    Submitting published and unpublished packages both follow roughly the same process: Add the package to the appropriate
    collection in <a href="https://github.com/redex/redex.github.io/blob/source/data/sources.json">sources.json</a> and
    submit a PR.

    <ul>
      <li>To submit a published package you should enter the npm name of the package into the published collection.
      <li>To submit an unpublished package hosted on GitHub you should enter the owner/repository pair into the unpublished collection.
      <li>To submit an unpublished package hosted elsewhere, please <a href="https://github.com/redex/redex.github.io/issues">make an issue</a>,
          so we can add support for the host first.
    </ul>

    Submissions are checked manually (with a little help from a linter script). Any remarks will be noted in the PR.
|};

let style = Css.(merge([
  Styles.html,
  style([
    backgroundColor(Theme.Panel.Color.background),
    unsafe("padding", "2em 4em")
  ])
]));

let component = ReasonReact.statelessComponent("Publish");
let make = _children => {
  ...component,

  render: _self =>
    <div className=style dangerouslySetInnerHTML={ "__html": html }/>
};

let default =
  ReasonReact.wrapReasonForJs(
    ~component,
    _jsProps => make([||])
  );