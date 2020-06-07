webpackJsonp([0x93e21b1eefbc],{1235:function(s,e){s.exports={data:{package:{type:"published",id:"bs-jest-dom",name:"bs-jest-dom",version:"4.0.0",category:"binding",flags:[],platforms:["node"],description:"BuckleScript bindings for jest-dom.",keywords:["dom","testing"],license:"MIT",updated:"2020-05-10T02:11:50.503Z",stars:9,score:.6598826919193981,quality:.9613039253459232,popularity:.061460567400349934,maintenance:.9999437592157105,readme:'<h1 id="bs-jest-dom-·-build-status-npm-codecov"><a href="#bs-jest-dom-%C2%B7-build-status-npm-codecov" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-jest-dom · <a href="https://github.com/wyze/bs-jest-dom/actions"><img src="https://img.shields.io/github/workflow/status/wyze/bs-jest-dom/CI.svg?style=flat-square" alt="Build Status"></a> <a href="https://npm.im/bs-jest-dom"><img src="https://img.shields.io/npm/v/bs-jest-dom.svg?style=flat-square" alt="npm"></a> <a href="https://codecov.io/github/wyze/bs-jest-dom"><img src="https://img.shields.io/codecov/c/github/wyze/bs-jest-dom.svg?style=flat-square" alt="Codecov"></a></h1>\n<blockquote>\n<p><a href="//github.com/BuckleScript/bucklescript">BuckleScript</a> bindings for <a href="//github.com/testing-library/jest-dom">jest-dom</a>.</p>\n</blockquote>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>$ yarn add --dev bs-jest-dom\n\n<span class="hljs-comment"># or..</span>\n\n$ npm install --save-dev bs-jest-dom</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h4 id="add-to-bsconfigjson"><a href="#add-to-bsconfigjson" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Add to <code>bsconfig.json</code></h4>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"bs-dev-dependencies"</span>: [<span class="hljs-string">"bs-jest-dom"</span>]\n}</code></pre></div>\n<h4 id="with-bs-jest-and-bs-react-testing-library"><a href="#with-bs-jest-and-bs-react-testing-library" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>With <a href="//github.com/glennsl/bs-jest"><code>bs-jest</code></a> and <a href="//github.com/wyze/bs-react-testing-library"><code>bs-react-testing-library</code></a></h4>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code>/* <span class="hljs-type">Heading_test</span>.re */\n\n<span class="hljs-keyword">open</span> <span class="hljs-type">Jest</span>;\n<span class="hljs-keyword">open</span> <span class="hljs-type">JestDom</span>;\n<span class="hljs-keyword">open</span> <span class="hljs-type">ReactTestingLibrary</span>;\n\n<span class="hljs-keyword">module</span> <span class="hljs-type">Heading</span> = {\n  [@react.component]\n  <span class="hljs-keyword">let</span> make = (~text) =&gt; &lt;h1&gt; {<span class="hljs-type">ReasonReact</span>.<span class="hljs-built_in">string</span>(text)} &lt;/h1&gt;;\n};\n\ntest(<span class="hljs-string">"renders in the document"</span>, <span class="hljs-literal">()</span> =&gt;\n  &lt;<span class="hljs-type">Heading</span> text=<span class="hljs-string">"Hello, World!"</span> /&gt;\n  |&gt; render\n  |&gt; getByText(~matcher=<span class="hljs-tag">`Str</span>(<span class="hljs-string">"Hello, World!"</span>))\n  |&gt; expect\n  |&gt; toBeInTheDocument\n);</code></pre></div>\n<h4 id="with-bs-jest-and-bs-webapi"><a href="#with-bs-jest-and-bs-webapi" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>With <a href="//github.com/glennsl/bs-jest"><code>bs-jest</code></a> and <a href="//github.com/reasonml-community/bs-webapi-incubator"><code>bs-webapi</code></a></h4>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code>/* <span class="hljs-type">Heading_test</span>.re */\n\n<span class="hljs-keyword">open</span> <span class="hljs-type">Jest</span>;\n<span class="hljs-keyword">open</span> <span class="hljs-type">JestDom</span>;\n<span class="hljs-keyword">open</span> <span class="hljs-type">Webapi</span>.<span class="hljs-type">Dom</span>;\n<span class="hljs-keyword">open</span> <span class="hljs-type">Webapi</span>.<span class="hljs-type">Dom</span>.<span class="hljs-type">Element</span>;\n\ntest(<span class="hljs-string">"heading is visible"</span>, <span class="hljs-literal">()</span> =&gt; {\n  <span class="hljs-keyword">let</span> div = <span class="hljs-type">Document</span>.createElement(<span class="hljs-string">"div"</span>, document);\n\n  div-&gt;setInnerHTML(<span class="hljs-string">"&lt;h1&gt;Hello, World!&lt;/h1&gt;"</span>);\n\n  div\n  |&gt; querySelector(<span class="hljs-string">"h1"</span>)\n  |&gt; expect\n  |&gt; toBeVisible;\n});</code></pre></div>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<p>See <a href="src/__tests__"><code>src/__tests__</code></a> for some examples.</p>\n<h2 id="development"><a href="#development" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Development</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>$ git <span class="hljs-built_in">clone</span> https://github.com/wyze/bs-jest-dom.git\n$ <span class="hljs-built_in">cd</span> bs-jest-dom\n$ yarn <span class="hljs-comment"># or `npm install`</span></code></pre></div>\n<h2 id="build"><a href="#build" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>$ yarn build</code></pre></div>\n<h2 id="test"><a href="#test" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Test</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>$ yarn <span class="hljs-built_in">test</span></code></pre></div>\n<h2 id="change-log"><a href="#change-log" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Change Log</h2>\n<blockquote>\n<p><a href="changelog.md">Full Change Log</a></p>\n</blockquote>\n<h3 id="v400-2020-04-21"><a href="#v400-2020-04-21" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a href="https://github.com/wyze/bs-jest-dom/releases/tag/v4.0.0">v4.0.0</a> (2020-04-21)</h3>\n<ul>\n<li>Update readme.md (<a href="https://github.com/wyze">@wyze</a> in <a href="https://github.com/wyze/bs-jest-dom/commit/40ba55b">40ba55b</a>)</li>\n<li>Convert matchers to externals (<a href="https://github.com/wyze">@wyze</a> in <a href="https://github.com/wyze/bs-jest-dom/pull/17">#17</a>)</li>\n</ul>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>MIT © <a href="https://neilkistner.com">Neil Kistner</a></p>\n',homepageUrl:"https://github.com/wyze/bs-jest-dom#readme",repositoryUrl:"https://github.com/wyze/bs-jest-dom",npmUrl:"https://www.npmjs.com/package/bs-jest-dom",issuesUrl:"https://github.com/wyze/bs-jest-dom/issues",slug:"/package/bs-jest-dom"}},pathContext:{id:"bs-jest-dom"}}}});
//# sourceMappingURL=path---package-bs-jest-dom-e0942dbb97fe5e9956d6.js.map