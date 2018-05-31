webpackJsonp([77830940738407],{1182:function(s,a){s.exports={data:{package:{id:"reason_async",stars:null,name:"reason_async",version:"0.2.1",category:"library",flags:["neglected"],platforms:["any"],description:"[Clone the example repo](https://github.com/jaredly/reason_async_example) to get started quickly.",keywords:["async","ppx"],license:"ISC",updated:"2018-04-04T19:35:47.897Z",type:"published",score:.3075911434185751,quality:.6231883287563563,popularity:.011368534286740686,maintenance:.33330187940373984,readme:'<h1 id="asyncawait-for-reasonocaml"><a href="#asyncawait-for-reasonocaml" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Async/await for Reason/OCaml!</h1>\n<p><a href="https://github.com/jaredly/reason_async_example">Clone the example repo</a> to get started quickly.</p>\n<h2 id="example-usage"><a href="#example-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example usage</h2>\n<p>With promises</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-keyword">let</span> doSomething = <span class="hljs-literal">()</span> =&gt; {\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">module</span> <span class="hljs-type">Let_syntax</span> = <span class="hljs-type">Reason_async</span>.<span class="hljs-type">Promise</span>;\n  [%await <span class="hljs-keyword">let</span> x = somethingPromisy\n  <span class="hljs-keyword">and</span> y = anotherPromise];\n  /* ... */\n  [%awaitWrap <span class="hljs-keyword">let</span> z = getFileContents<span class="hljs-literal">()</span>];\n  x + y + z\n};</code></pre></div>\n<h2 id="installation--setup"><a href="#installation--setup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation / setup</h2>\n<p>NOTE: You currently need to be using <code>bsb-native</code> in your project in order for weird bugs not to happen on recompilation. You\'ll want <code>"bs-platform": "git+https://github.com/bsansouci/bsb-native"</code> in your package.json.</p>\n<ul>\n<li><code>yarn add reason_async</code> (or npm)</li>\n<li>add <code>reason_async</code> to your bs-dependencies in <code>bsconfig.json</code></li>\n<li>add <code>reason_async</code> to your <code>ppx-flags</code> in <code>bsconfig.json</code></li>\n</ul>\n<p>Example <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"name"</span>: <span class="hljs-string">"myapp"</span>,\n  <span class="hljs-string">"refmt"</span>: <span class="hljs-number">3</span>,\n  <span class="hljs-string">"sources"</span>: <span class="hljs-string">"./src"</span>,\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"reason_async"</span>],\n  <span class="hljs-string">"ppx-flags"</span>: [<span class="hljs-string">"reason_async"</span>]\n}</code></pre></div>\n',homepageUrl:null,repositoryUrl:null,npmUrl:"https://www.npmjs.com/package/reason_async",issuesUrl:null,slug:"/package/reason_async"}},pathContext:{id:"reason_async"}}}});
//# sourceMappingURL=path---package-reason-async-6e062775249e47f2c0fe.js.map