webpackJsonp([39303488315316],{1069:function(e,s){e.exports={data:{package:{id:"bs-spectacle",score:.537752504368236,name:"bs-spectacle",version:"1.0.0",description:"Spectacle bindings for Bucklescript",keywords:["bucklescript","spectacle"],license:"MIT",updated:"2017-12-26T20:13:41.794Z",stars:0,type:"published",quality:.607161202123291,popularity:.02132344125748749,maintenance:.9946883979746517,readme:'<h1>:construction: bs-spectacle - <a href="https://github.com/bucklescript/bucklescript">BuckleScript</a> bindings for <a href="https://github.com/FormidableLabs/spectacle">Spectacle</a> <a href="https://www.npmjs.com/package/bs-spectacle"><img src="https://img.shields.io/npm/v/bs-spectacle.svg?style=flat-square" alt="npm (scoped)"></a></h1>\n<hr>\n<h2>Status</h2>\n<h3>Components</h3>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> Deck</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Slide (Base)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Notes</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Layout</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Fit</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Fill</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Markdown</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Magic</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Appear</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> BlockQuote, Quote and Cite (Base)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> CodePane (Base)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Code (Base)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ComponentPlayground</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> GoToAction (Base)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Heading (Base)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Image (Base)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Link (Base)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> List &#x26; ListItem (Base)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> S (Base)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Table, TableRow, TableBody, TableHeader, TableHeaderItem and TableItem (Base)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Text (Base)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Typeface</li>\n</ul>\n<h3>APIs</h3>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> Theme</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Transition Function</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> MarkdownSlides</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Preloader</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> History</li>\n</ul>\n<h2>Example</h2>\n<p>See <code>examples/full-spectacle</code>. It uses <em>almost</em> all features of <strong>Spectacle</strong>.</p>\n<p><code>examples/extras</code> aims to showcase features not included in original Spectacle example.</p>\n<pre><code class="language-reason">open BsSpectacle;\n\nlet theme =\n  Theme.(\n    createTheme(\n      {primary: "#26A0D1", secondary: "white", tertiary: "#505050", quarternary: "white"},\n      {\n        primary: {name: "Merriweather", googleFont: true, styles: [|"300"|]},\n        secondary: {name: "Roboto", googleFont: true, styles: [|"100"|]},\n        tertiary: simpleFont("monospace")\n      }\n    )\n  );\n\nlet s = ReasonReact.stringToElement;\n\nlet component = ReasonReact.statelessComponent("Simple");\n\nlet make = (_children) => {\n  ...component,\n  render: (_self) =>\n    &#x3C;Deck transition=[|Zoom, Slide|] theme>\n      &#x3C;Slide>\n        &#x3C;Heading textColor="secondary" textFont="secondary"> (s("Hello, world")) &#x3C;/Heading>\n      &#x3C;/Slide>\n      &#x3C;Slide transition=[|Slide|] bgColor="secondary">\n        &#x3C;BlockQuote>\n          &#x3C;Quote> (s({js|It’s easy, see...|js})) &#x3C;/Quote>\n          &#x3C;Cite> (s("Unknown")) &#x3C;/Cite>\n        &#x3C;/BlockQuote>\n      &#x3C;/Slide>\n    &#x3C;/Deck>\n};\n</code></pre>\n<h2>Installation</h2>\n<p>Easiest way is:</p>\n<ol>\n<li>\n<p>use <code>create-react-app</code></p>\n</li>\n<li>\n<p>install this bindings and spectacle</p>\n<pre><code>$ npm install --save bs-spectacle spectacle-scripts reason-react\n# or\n$ yarn add bs-spectacle spectacle-scripts reason-react\n</code></pre>\n</li>\n<li>\n<p>add <code>bs-spectacle</code> to <code>bs-dependencies</code> in your <code>bsconfig.json</code></p>\n<pre><code>{\n...\n"bs-dependencies": ["bs-spectacle"]\n}\n</code></pre>\n</li>\n<li>\n<p>modify <code>package.json</code> scripts</p>\n<pre><code>"scripts": {\n    "build": "bsb -make-world &#x26;&#x26; react-scripts build",\n    "start": "bsb -make-world -w",\n    "clean": "bsb -clean-world",\n    "test": "echo \\"Error: no test specified\\" &#x26;&#x26; exit 1"\n}\n</code></pre>\n</li>\n</ol>\n<p>To run it in dev mode, run <code>npm start</code> in one shell and <code>react-scripts start</code> in another shell.</p>\n',homepageUrl:"https://github.com/piotrdubiel/bs-spectacle#readme",repositoryUrl:"https://github.com/piotrdubiel/bs-spectacle",npmUrl:"https://www.npmjs.com/package/bs-spectacle",issuesUrl:"https://github.com/piotrdubiel/bs-spectacle/issues",slug:"packages/bs-spectacle"}},pathContext:{id:"bs-spectacle"}}}});
//# sourceMappingURL=path---packages-bs-spectacle-79b4df8a2b14305c0864.js.map