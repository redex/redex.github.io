open! Helpers;

let html = {|
  <h1>Getting Published</h1>
  <h2>Step 1: Provide good documentation and metadata</h2>

  <h4>Readme</h4>
  <p>
    Add a file named <code>README.md</code> at the root of your project. A good
    readme should at the very least answer the following questions:
    <ul>
      <li>What is it?
      <li>What state is it in?
      <li>How do I install it?
      <li>How do I use it?
    </ul>
    Furthermore, providing an example, a change log and explaining how to contribute is a bonus.
  </p>
  <p>
    NOTE: The readme and other metadata together must total less than 10k bytes
    in order to be indexed by the search engine. To avoid going over that limit, 
    please keep the contents of the readme to only the essentials, and put
    extensive documentation and such in a separate markdown file linked to from
    the readme. This also has the added benefit of improving search relevance.,
    making it easier to find your package when searching for relevant terms.
  </p>

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
  </p>

  <h2>Step 2: Publish to NPM</h2>
  <p>
    Follow the documentation on <a href="https://docs.npmjs.com/getting-started/publishing-npm-packages">NPM</a>
  </p>

  <h2>Step 3: Submit to redex</h2>
  <p>
    Add the name of the published npm package to <a href="https://github.com/redex/redex.github.io/blob/source/data/sources.json">sources.json</a>
    and submit a PR. Submissions are checked manually (with a little help from a linter script), and any deficiencies
    or other remarks will be ntoed in the PR.
  </p
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