webpackJsonp([0xcf0ba9164c5c],{1039:function(s,a){s.exports={data:{package:{id:"bs-axios",score:.5192092502993731,name:"bs-axios",version:"0.0.22",description:"Axios bindings for Bucklescript",keywords:["axios","ocaml","bucklescript"],license:"MIT",updated:"2018-01-15T22:43:40.027Z",stars:14,type:"published",quality:.49596925873839404,popularity:.058798150254403915,maintenance:.999540343110896,readme:'<h1 id="bs-axios-npm-version"><a href="#bs-axios-npm-version" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-axios <a href="https://www.npmjs.com/package/bs-axios"><img src="https://img.shields.io/npm/v/bs-axios.svg?style=flat-square" alt="npm version"></a></h1>\n<p><a href="https://github.com/axios/axios">Axios</a> bindings for Bucklescript.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<ol>\n<li>Install bs-axios</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-bash"><code>$ yarn add bs-axios</code></pre>\n      </div>\n<p>or</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-bash"><code>$ npm install --save bs-axios</code></pre>\n      </div>\n<ol start="2">\n<li>Add "bs-axios" to "bs-dependencies" section of <code>bsconfig.json</code></li>\n</ol>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<h3 id="simple-request"><a href="#simple-request" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Simple request</h3>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.(\n  <span class="hljs-type">Axios</span>.<span class="hljs-keyword">get</span>(<span class="hljs-string">"/user?ID=12345"</span>)\n  |&gt; then_((response) =&gt; resolve(<span class="hljs-type">Js</span>.log(response##data)))\n  |&gt; catch((error) =&gt; resolve(<span class="hljs-type">Js</span>.log(error)))\n);</code></pre>\n      </div>\n<h3 id="post-requests"><a href="#post-requests" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Post requests</h3>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.(\n  <span class="hljs-type">Axios</span>.post(<span class="hljs-string">"/user"</span>)\n  |&gt; then_((response) =&gt; resolve(<span class="hljs-type">Js</span>.log(response##data)))\n  |&gt; catch((error) =&gt; resolve(<span class="hljs-type">Js</span>.log(error)))\n);</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> user = {\n  <span class="hljs-string">"username"</span>: <span class="hljs-string">"michel"</span>,\n  <span class="hljs-string">"password"</span>: <span class="hljs-string">"12345678"</span>\n};\n\n<span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.(\n  <span class="hljs-type">Axios</span>.postData(<span class="hljs-string">"/auth"</span>, {user})\n  |&gt; then_((response) =&gt; resolve(<span class="hljs-type">Js</span>.log(response##data)))\n  |&gt; catch((error) =&gt; resolve(<span class="hljs-type">Js</span>.log(error)))\n);</code></pre>\n      </div>\n<h3 id="concurrency"><a href="#concurrency" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Concurrency</h3>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.(\n  <span class="hljs-type">Axios</span>.all2((<span class="hljs-type">Axios</span>.<span class="hljs-keyword">get</span>(<span class="hljs-string">"/users/1"</span>), <span class="hljs-type">Axios</span>.<span class="hljs-keyword">get</span>(<span class="hljs-string">"/users/1/friends"</span>)))\n  |&gt; then_(((user, friends)) =&gt; resolve(<span class="hljs-type">Js</span>.log2(user##data, friends##data)))\n  |&gt; catch((error) =&gt; resolve(<span class="hljs-type">Js</span>.log(error)))\n);</code></pre>\n      </div>\n',homepageUrl:"https://github.com/meafmira/bs-axios#readme",repositoryUrl:"https://github.com/meafmira/bs-axios",npmUrl:"https://www.npmjs.com/package/bs-axios",issuesUrl:"https://github.com/meafmira/bs-axios/issues",slug:"packages/bs-axios"}},pathContext:{id:"bs-axios"}}}});
//# sourceMappingURL=path---packages-bs-axios-a5cfb94a6e773e2e3b42.js.map