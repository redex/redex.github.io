open! Vrroom;

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
    Furthermore, providing an example, a change log and explaining how to contribute
    is a bonus. And if it is a binding, please provide a link to the bound library,
    as it usually provides more in-depth information and documentation.

  <p>
    NOTE: The readme and other metadata together must total less than 10k bytes
    in order to be indexed by the search engine. To avoid going over that limit,
    please keep the contents of the readme to only the essentials, and put
    extensive documentation and such in a separate markdown file linked to from
    the readme. This also has the added benefit of improving search relevance,
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
    collection in <a href="https://github.com/redex/data/blob/master/sources.json">sources.json</a> and
    submit a PR. Or just <a href="https://github.com/redex/data/issues/new">submit an issue</a> with the same information.

    <h3>Published package</h3>
    <p>
      Add an entry in the published collection with the following format:

<pre><code>"&lt;npm name&gt;": {
  "category": "binding" | "library" | "tool" | "boilerplate",
  "platforms": ["browser" | "node" | "native" | "any"],
  "keywords": [&lt;string&gt;]
}</code></pre>

    <h3>Unpublished package</h3>
    <p>
      Add an entry in the published collection with the following format:

<pre><code>"&lt;owner&gt;/&lt;repository&gt;": {
  "repository": "github:&lt;owner&gt;/&lt;repository&gt;"
  "category": "binding" | "library" | "tool" | "boilerplate",
  "platforms": ["browser" | "node" | "native" | "any"],
  "keywords": [&lt;string&gt;]
}</code></pre>

    Submissions are checked manually (with a little help from a linter script).
    Any remarks will be noted in the PR. There's also a CI process that checks
    <code>sources.json</code> for syntax and trivial errors, which will quickly
    fail if you just made a silly mistake.

  <h2>Frequently Asked Questions</h2>
  <ul>
    <li>
      <h4>What does the "neglected" flag mean?</h4>
      <p>
        Packages that do not meet the minimum standards for documentation and
        metadata, according to what's described in Step 1 above, are marked as
        neglected. These packages might still function perfectly well, which is
        why they're listed at all, but the quallity of the packaging is also often
        a good indicator of the quality of its contents. There are therefore two
        for having this, and to de-emphasize flagged packages:
        <ol>
          <li> When there are alternatives, it makes it easier for consumers to
          make a choice by discarding packages that present themselves poorly and
          make unnecessarily hard to make an informed choice.
          <li> It serves as an incentive for package authors to improve the
          presentation.
        </ol>

    <li>
      <h4>Which keywords can I use?</h4>
      <p>
        Please try to use only the keywords that are already in use, which are
        listed on the front page. If you don't think your package fits into any of
        these categories, you may propose a new keyword in the submission PR.

    <li>
      <h4>What does the "any" platform mean?</h4>
      <p>
        The "any" platform means the package is platform-independent, because it
        avoids using platform-specific features. It's important to distinguish
        a package that is platform-independent from a package that, in one way or
        another, targets all available platforms. These are not equivalent since a
        platform-independent package will automatically support any new platform.
  </ul>
|};

let style = TypedGlamor.(css(~extend=CommonStyles.html, [
  backgroundColor(Theme.Panel.Color.background),
  padding2(~v=em(2.), ~h=em(4.)),
  select("@media (max-width: 900px)", [
    padding2(~v=em(1.), ~h=em(2.))
  ])
]));

let component = ReasonReact.statelessComponent("Publish");
let make = (_:childless) => {
  ...component,

  render: _self =>
    <div>
      <Helmet title=Config.titleTemplate("Publishing Guide") />
      <div className=(style |> TypedGlamor.toString) dangerouslySetInnerHTML={ "__html": html } />
    </div>
};

let default =
  ReasonReact.wrapReasonForJs(
    ~component,
    _jsProps => make([||])
  );
