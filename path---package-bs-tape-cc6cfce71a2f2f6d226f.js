webpackJsonp([64227111591240],{1161:function(e,t){e.exports={data:{package:{id:"bs-tape",stars:2,name:"bs-tape",version:"0.3.0",category:"binding",flags:[],platforms:["node"],description:"BuckleScript bindings for tape",keywords:["testing"],license:"ISC",updated:"2018-06-05T16:48:26.457Z",type:"published",score:.5846088118195983,quality:.7535466735469895,popularity:.029218702008696727,maintenance:.9951950401498791,readme:'<h1 id="bs-tape"><a href="#bs-tape" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-tape</h1>\n<p><a href="https://circleci.com/gh/jeffreywescott/bs-tape"><img src="https://circleci.com/gh/jeffreywescott/bs-tape.svg?style=svg" alt="CircleCI"></a> <a href="https://coveralls.io/github/jeffreywescott/bs-tape?branch=master"><img src="https://coveralls.io/repos/github/jeffreywescott/bs-tape/badge.svg?branch=master" alt="Coverage Status"></a></p>\n<p><a href="https://bucklescript.github.io/">BuckleScript</a> bindings for <a href="https://github.com/substack/tape">tape</a>.</p>\n<p>There were already <a href="https://github.com/glennsl/bs-jest">bindings</a> for <a href="https://github.com/facebook/jest">jest</a>, but I find Jest to be pretty annoying to use, and a bit "too magical". So, I made this one.</p>\n<p>Please be warned that I\'m new to ReasonML / BuckleScript / OCaml, so there may be things herein that are non-idiomatic. PRs encouraged and welcomed!</p>\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting Started</h2>\n<p>First, install the package:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add --dev bs-tape</code></pre></div>\n<p>Then, add <code>bs-tape</code> to your <code>bs-dev-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-javascript"><code>{\n  <span class="hljs-comment">// ...</span>\n  <span class="hljs-string">"bs-dev-dependencies"</span>: [\n    <span class="hljs-comment">// ...</span>\n    <span class="hljs-string">"bs-tape"</span>\n  ],\n  <span class="hljs-comment">// ...</span>\n}</code></pre></div>\n<h2 id="known-limitations-and-differences-from-tape"><a href="#known-limitations-and-differences-from-tape" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Known Limitations and Differences from <a href="https://github.com/substack/tape">tape</a></h2>\n<ul>\n<li><code>equal</code> has been decomposed into typesafe: <code>equalStr</code>, <code>equalInt</code>, and <code>equalFloat</code></li>\n<li><code>endTest</code> replaces <code>end</code> (which is a reserved keyword)</li>\n<li><code>end</code> has been decomposed into typesafe: <code>endTest</code> and <code>endTestIfNoErr</code></li>\n<li>\n<p>Given that "arbitrarily shaped" data structures are non-idiomatic in ReasonML (and OCaml), the following tape assertions are not supported, but can be effectively simulated by creating the appropriate expression with the <code>==</code> and <code>!</code> operators, then invoking the <code>ok</code> assertion.</p>\n<ul>\n<li><code>deepEqual</code></li>\n<li><code>notDeepEqual</code></li>\n<li><code>deepLooseEqual</code></li>\n<li><code>notDeepLooseEqual</code></li>\n</ul>\n</li>\n</ul>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>ISC. See the <a href="./LICENSE">LICENSE</a> file.</p>\n<!-- links -->\n',homepageUrl:"https://github.com/jeffreywescott/bs-tape#readme",repositoryUrl:"https://github.com/jeffreywescott/bs-tape",npmUrl:"https://www.npmjs.com/package/bs-tape",issuesUrl:"https://github.com/jeffreywescott/bs-tape/issues",slug:"/package/bs-tape"}},pathContext:{id:"bs-tape"}}}});
//# sourceMappingURL=path---package-bs-tape-cc6cfce71a2f2f6d226f.js.map