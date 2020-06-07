webpackJsonp([82043089047356],{1412:function(e,s){e.exports={data:{package:{type:"published",id:"@rejs/re-future",name:"@rejs/re-future",version:"0.2.3",category:"library",flags:[],platforms:["browser","node"],description:"Future and ResultFuture library for ReasonML",keywords:["async"],license:"MIT",updated:"2020-05-10T17:25:08.544Z",stars:1,score:.6190977723489406,quality:.8782428686744759,popularity:.019895895274806234,maintenance:.9961752811440449,readme:'<h1 id="re-future"><a href="#re-future" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>re-future</h1>\n<p><a href="https://www.npmjs.com/package/@rejs/re-future"><img src="https://img.shields.io/npm/v/@rejs/re-future.svg" alt="npm version"></a>\n<a href="https://travis-ci.org/seprich/re-future"><img src="https://travis-ci.org/seprich/re-future.svg?branch=master" alt="Build Status"></a>\n<a href="https://coveralls.io/github/seprich/re-future?branch=master"><img src="https://coveralls.io/repos/github/seprich/re-future/badge.svg?branch=master" alt="Coverage Status"></a>\n<a href="https://snyk.io/test/github/seprich/re-future"><img src="https://snyk.io/test/github/seprich/re-future/badge.svg" alt="Known Vulnerabilities"></a></p>\n<p>ReasonML library to provide <code>Future</code> and <code>ResultFuture</code> monads as an alternative to Js.Promise.</p>\n<p>The <code>Future</code> is the most simple unit of evaluable value which can resolve at some point in the future. <code>ResultFuture</code> is a future that eventually contains <code>Belt.Result.t</code> result inside. This is the most useful replacement for Js.Promise because Js.Promise also contains the possibility of resolving to Ok value or rejection to Error value.</p>\n<p>Special focus has been given to provide complete and yet compact set of utility functions to work with both Future and ResultFuture entities. Besides test coverage this library also contains a very basic memory performance test to ensure that memory gets freed (garbage collected) when Future has used the binded functions and evaluation is done.</p>\n<h2 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install @rejs/re-future</code></pre></div>\n<p>Edit to <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-string">"bs-dependencies"</span>: [..., <span class="hljs-string">"@rejs/re-future"</span>, ...],</code></pre></div>\n<p>This library is namespaced; to simplify access do:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">ResultFuture</span> = <span class="hljs-title">RejsReFuture</span>.<span class="hljs-title">ResultFuture</span>;\n// <span class="hljs-title">or</span>\n<span class="hljs-title">open</span> <span class="hljs-title">RejsReFuture</span>;</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2553</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<p>Or you can open globally in your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-string">"bsc-flags"</span>: [ <span class="hljs-string">"-open RejsReFuture"</span> ]</code></pre></div>\n<h2 id="sdk-documentation-and-examples"><a href="#sdk-documentation-and-examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>SDK Documentation and Examples</h2>\n<ul>\n<li><a href="./doc/Future.md">Future</a></li>\n<li><a href="./doc/ResultFuture.md">ResultFuture</a></li>\n</ul>\n<p>More usage examples also in the __tests__/</p>\n<p>The most compact references of <code>Future</code> and <code>ResultFuture</code> are the interface files:</p>\n<ul>\n<li><a href="./src/Future.rei">Future.rei</a></li>\n<li><a href="./src/ResultFuture.rei">ResultFuture.rei</a></li>\n</ul>\n',homepageUrl:"https://github.com/seprich/re-future#readme",repositoryUrl:"https://github.com/seprich/re-future",npmUrl:"https://www.npmjs.com/package/%40rejs%2Fre-future",issuesUrl:"https://github.com/seprich/re-future/issues",slug:"/package/@rejs/re-future"}},pathContext:{id:"@rejs/re-future"}}}});
//# sourceMappingURL=path---package-rejs-re-future-0f3711899a8586418763.js.map