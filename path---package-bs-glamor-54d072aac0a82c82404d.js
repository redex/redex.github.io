webpackJsonp([60489678114862],{1033:function(s,e){s.exports={data:{package:{id:"bs-glamor",stars:46,name:"bs-glamor",version:"0.1.3",category:"binding",flags:["neglected"],platforms:["browser"],description:"BuckleScript bindings for glamor",keywords:["css"],license:"ISC",updated:"2018-01-13T16:52:49.521Z",type:"published",score:.5782293746760278,quality:.7455326093053085,popularity:.0960127498615915,maintenance:.9170432269510806,readme:'<h1 id="bs-glamor--bucklescript-bindings-for-glamor"><a href="#bs-glamor--bucklescript-bindings-for-glamor" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-glamor – <a href="https://github.com/bloomberg/bucklescript">BuckleScript</a> bindings for <a href="https://github.com/threepointone/glamor">glamor</a></h1>\n<p>The API is still <strong>experimental</strong>. Only the <code>css</code> function from glamor is exposed (with its result slightly incorrectly typed as a <code>string</code>); no other functions such as <code>renderStatic</code> are supported yet.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install --save bs-glamor</code></pre></div>\n<p>In your <code>bsconfig.json</code>, include <code>"bs-glamor"</code> in the <code>bs-dependencies</code>.</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>The following examples (in <a href="https://facebook.github.io/reason">Reason</a> syntax) assume that <code>Glamor</code> is included in the namespace:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> Reason\n        <li class="ml"> OCaml\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">Glamor</span>;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Glamor</span></code></pre>\n      </div>\n    </div>\n  \n<ul>\n<li>\n<p>Simple styling:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> Reason\n        <li class="ml"> OCaml\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>css [\n    color <span class="hljs-string">"red"</span>,\n    border <span class="hljs-string">"1px solid black"</span>\n]</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">883</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n</li>\n<li>\n<p>Styling with selectors (<code>@media</code>, <code>:hover</code>, <code>&#x26;</code>, etc.):</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> Reason\n        <li class="ml"> OCaml\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>css [\n    color <span class="hljs-string">"red"</span>,\n    <span class="hljs-type">Selector</span> <span class="hljs-string">"@media (min-width: 300px)"</span> [\n        color <span class="hljs-string">"green"</span>\n    ]\n]</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">883</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n</li>\n<li>\n<p>Selectors can be nested:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> Reason\n        <li class="ml"> OCaml\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>css [\n    color <span class="hljs-string">"red"</span>,\n    <span class="hljs-type">Selector</span> <span class="hljs-string">"@media (min-width: 300px)"</span> [\n        color <span class="hljs-string">"green"</span>,\n        <span class="hljs-type">Selector</span> <span class="hljs-string">"&amp; .foo"</span> [\n            color <span class="hljs-string">"blue"</span>\n        ]\n    ]\n]</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">883</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n</li>\n</ul>\n<p>You can isolate inclusion of the <code>Glamor</code> namespace in the following way:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> Reason\n        <li class="ml"> OCaml\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Glamor</span>.(css [color <span class="hljs-string">"red"</span>])</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">883</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p>The result of the <code>css</code> function can be assigned to a class name, e.g. in JSX:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> Reason\n        <li class="ml"> OCaml\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>&lt;div className=(css [color <span class="hljs-string">"red"</span>]) /&gt;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">883</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<p>See <a href="https://github.com/poeschko/reason-react-tictactoe">reason-react-tictactoe</a> for a live example.</p>\n<h2 id="development"><a href="#development" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Development</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm run start</code></pre></div>\n<h3 id="tests"><a href="#tests" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tests</h3>\n<p>There are some simplistic tests using <a href="https://github.com/BuckleTypes/bs-jest">bs-jest</a>.</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm run <span class="hljs-built_in">test</span></code></pre></div>\n<h2 id="thanks"><a href="#thanks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thanks</h2>\n<p>Thanks to <a href="https://github.com/chenglou/reason-react-example">reason-react-example</a>, <a href="https://github.com/reasonml/reason-react">reason-react</a>, and <a href="https://github.com/BuckleTypes/bs-jest">bs-jest</a> for inspiration how to create a Reason library, and of course, thanks to <a href="https://github.com/threepointone/glamor">glamor</a>.</p>\n',homepageUrl:"https://github.com/poeschko/bs-glamor#readme",repositoryUrl:"https://github.com/poeschko/bs-glamor",npmUrl:"https://www.npmjs.com/package/bs-glamor",issuesUrl:"https://github.com/poeschko/bs-glamor/issues",slug:"/package/bs-glamor"}},pathContext:{id:"bs-glamor"}}}});
//# sourceMappingURL=path---package-bs-glamor-54d072aac0a82c82404d.js.map