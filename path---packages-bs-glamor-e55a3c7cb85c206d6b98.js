webpackJsonp([62756271815014],{1017:function(e,o){e.exports={data:{package:{id:"bs-glamor",score:.6005831375747372,name:"bs-glamor",version:"0.1.3",description:"BuckleScript bindings for glamor",keywords:["css","glamor","bucklescript"],license:"ISC",updated:"2017-12-29T16:51:30.625Z",stars:46,type:"published",quality:.7447259491166693,popularity:.09199606102144478,maintenance:.9856192328063736,readme:'<h1>bs-glamor – <a href="https://github.com/bloomberg/bucklescript">BuckleScript</a> bindings for <a href="https://github.com/threepointone/glamor">glamor</a></h1>\n<p>The API is still <strong>experimental</strong>. Only the <code>css</code> function from glamor is exposed (with its result slightly incorrectly typed as a <code>string</code>); no other functions such as <code>renderStatic</code> are supported yet.</p>\n<h2>Installation</h2>\n<pre><code class="language-sh">npm install --save bs-glamor\n</code></pre>\n<p>In your <code>bsconfig.json</code>, include <code>"bs-glamor"</code> in the <code>bs-dependencies</code>.</p>\n<h2>Usage</h2>\n<p>The following examples (in <a href="https://facebook.github.io/reason">Reason</a> syntax) assume that <code>Glamor</code> is included in the namespace:</p>\n<pre><code class="language-reason">open Glamor;\n</code></pre>\n<ul>\n<li>\n<p>Simple styling:</p>\n<pre><code class="language-reason">css [\n    color "red",\n    border "1px solid black"\n]\n</code></pre>\n</li>\n<li>\n<p>Styling with selectors (<code>@media</code>, <code>:hover</code>, <code>&#x26;</code>, etc.):</p>\n<pre><code class="language-reason">css [\n    color "red",\n    Selector "@media (min-width: 300px)" [\n        color "green"\n    ]\n]\n</code></pre>\n</li>\n<li>\n<p>Selectors can be nested:</p>\n<pre><code class="language-reason">css [\n    color "red",\n    Selector "@media (min-width: 300px)" [\n        color "green",\n        Selector "&#x26; .foo" [\n            color "blue"\n        ]\n    ]\n]\n</code></pre>\n</li>\n</ul>\n<p>You can isolate inclusion of the <code>Glamor</code> namespace in the following way:</p>\n<pre><code class="language-reason">Glamor.(css [color "red"])\n</code></pre>\n<p>The result of the <code>css</code> function can be assigned to a class name, e.g. in JSX:</p>\n<pre><code class="language-reason">&#x3C;div className=(css [color "red"]) />\n</code></pre>\n<h2>Example</h2>\n<p>See <a href="https://github.com/poeschko/reason-react-tictactoe">reason-react-tictactoe</a> for a live example.</p>\n<h2>Development</h2>\n<pre><code class="language-sh">npm run start\n</code></pre>\n<h3>Tests</h3>\n<p>There are some simplistic tests using <a href="https://github.com/BuckleTypes/bs-jest">bs-jest</a>.</p>\n<pre><code class="language-sh">npm run test\n</code></pre>\n<h2>Thanks</h2>\n<p>Thanks to <a href="https://github.com/chenglou/reason-react-example">reason-react-example</a>, <a href="https://github.com/reasonml/reason-react">reason-react</a>, and <a href="https://github.com/BuckleTypes/bs-jest">bs-jest</a> for inspiration how to create a Reason library, and of course, thanks to <a href="https://github.com/threepointone/glamor">glamor</a>.</p>\n',homepageUrl:"https://github.com/poeschko/bs-glamor#readme",repositoryUrl:"https://github.com/poeschko/bs-glamor",npmUrl:"https://www.npmjs.com/package/bs-glamor",issuesUrl:"https://github.com/poeschko/bs-glamor/issues",slug:"packages/bs-glamor"}},pathContext:{id:"bs-glamor"}}}});
//# sourceMappingURL=path---packages-bs-glamor-e55a3c7cb85c206d6b98.js.map