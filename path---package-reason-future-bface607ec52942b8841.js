webpackJsonp([0x82e6faf7ac15],{1307:function(e,s){e.exports={data:{package:{type:"published",id:"reason-future",name:"reason-future",version:"2.4.0",category:"library",flags:[],platforms:["browser","node"],description:"A Js.Promise alternative for ReasonML.",keywords:["async"],license:"MIT",updated:"2019-03-19T00:40:09.093Z",stars:120,score:.6844435068136151,quality:.9695784436002907,popularity:.12459557623634562,maintenance:.9998900630023055,readme:'<p><a href="https://www.npmjs.com/package/reason-future"><img src="https://img.shields.io/npm/v/reason-future.svg" alt="npm"></a>\n<a href="https://travis-ci.org/RationalJS/future"><img src="https://travis-ci.org/RationalJS/future.svg?branch=master" alt="Build Status"></a>\n<a href="https://coveralls.io/github/RationalJS/future?branch=test-coverage"><img src="https://coveralls.io/repos/github/RationalJS/future/badge.svg?branch=test-coverage" alt="Coverage Status"></a></p>\n<h1 id="the-future-is-now"><a href="#the-future-is-now" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Future is Now</h1>\n<p>Future is a <code>Js.Promise</code> alternative. It is written in ReasonML.</p>\n<p>Compared to a promise, a future is:</p>\n<ul>\n<li><strong>Lighter weight</strong> – Only ~25 lines of implementation.</li>\n<li><strong>Simpler</strong> – Futures only resolve to a single type (as opposed to resolve and reject types), giving you more flexibility on your error handling.</li>\n<li><strong>More robust</strong> – Futures have sound typing (unlike JS promises).</li>\n</ul>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>First make sure you have bs-platform <code>>= 3.1.0</code>. Then install with npm:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>$ npm install --save reason-future</code></pre></div>\n<p>Then add <code>"reason-future"</code> to your <code>bsconfig.json</code> dev dependencies:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>{\n  ...\n  <span class="hljs-string">"bs-dependencies"</span>: [\n    <span class="hljs-string">"reason-future"</span>\n  ]\n}</code></pre></div>\n<h2 id="basic-usage"><a href="#basic-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Usage</h2>\n<p>To create a task, use <code>Future.make</code>. It provides a single <code>resolve</code> function, like a promise with no <code>reject</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code><span class="hljs-keyword">let</span> futureGreeting = <span class="hljs-type">Future</span>.make(resolve =&gt; resolve(<span class="hljs-string">"hi"</span>));</code></pre></div>\n<p>To get the value of a future, use <code>Future.get</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code><span class="hljs-keyword">let</span> futureGreeting = <span class="hljs-type">Future</span>.make(resolve =&gt; resolve(<span class="hljs-string">"hi"</span>));\nfutureGreeting-&gt;<span class="hljs-type">Future</span>.get(x =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"Got value: "</span> ++ x));\n\n/* <span class="hljs-type">Alternatively</span>: */\n\n<span class="hljs-type">Future</span>.make(resolve =&gt; resolve(<span class="hljs-string">"hi"</span>))\n-&gt;<span class="hljs-type">Future</span>.get(x =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"Got value: "</span> ++ x));</code></pre></div>\n<p><code>Future.get</code> only <em>retrieves</em> the future value. If you want to <strong>transform</strong> it to a <em>different</em> value, then you should use <code>Future.map</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>/* <span class="hljs-type">Shortcut</span> <span class="hljs-keyword">for</span>: <span class="hljs-keyword">let</span> future_A = <span class="hljs-type">Future</span>.make(resolve =&gt; resolve(<span class="hljs-number">99</span>)); */\n<span class="hljs-keyword">let</span> future_A = <span class="hljs-type">Future</span>.<span class="hljs-keyword">value</span>(<span class="hljs-number">99</span>);\n\n<span class="hljs-keyword">let</span> future_B = future_A-&gt;<span class="hljs-type">Future</span>.map(n =&gt; n + <span class="hljs-number">1</span>);\n\n\nfuture_A-&gt;<span class="hljs-type">Future</span>.get(n =&gt; <span class="hljs-type">Js</span>.log(n)); /* logs: <span class="hljs-number">99</span> */\n\nfuture_B-&gt;<span class="hljs-type">Future</span>.get(n =&gt; <span class="hljs-type">Js</span>.log(n)); /* logs: <span class="hljs-number">100</span> */</code></pre></div>\n<p>And finally, if you <code>map</code> a future and return <strong>another</strong> future, you probably want to <code>flatMap</code> instead:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code><span class="hljs-keyword">let</span> futureNum = <span class="hljs-type">Future</span>.<span class="hljs-keyword">value</span>(<span class="hljs-number">50</span>);\n\n<span class="hljs-keyword">let</span> ft_a = futureNum-&gt;<span class="hljs-type">Future</span>.map(n =&gt; <span class="hljs-type">Future</span>.<span class="hljs-keyword">value</span>(n + <span class="hljs-number">10</span>));\n<span class="hljs-keyword">let</span> ft_b = futureNum-&gt;<span class="hljs-type">Future</span>.flatMap(n =&gt; <span class="hljs-type">Future</span>.<span class="hljs-keyword">value</span>(n + <span class="hljs-number">20</span>));\n\n/* ft_a has <span class="hljs-keyword">type</span> future(future(<span class="hljs-built_in">int</span>)) – probably not what you want. */\n/* ft_b has <span class="hljs-keyword">type</span> future(<span class="hljs-built_in">int</span>) */</code></pre></div>\n<h2 id="api"><a href="#api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API</h2>\n<p>Core functions. <strong>Note:</strong> <code>_</code> represents the future itself as inserted by <code>-></code> (the <a href="https://bucklescript.github.io/docs/en/fast-pipe.html">fast pipe</a> operator).</p>\n<ul>\n<li><code>Future.make(resolver)</code> - Create a new, potentially-async future.</li>\n<li><code>Future.value(x)</code> - Create a new future with a plain value (synchronous).</li>\n<li><code>Future.map(_,fn)</code> - Transform a future value into another value</li>\n<li><code>Future.flatMap(_,fn)</code> - Transform a future value into another future value</li>\n<li><code>Future.get(_,fn)</code> - Get the value of a future</li>\n<li><code>Future.tap(_,fn)</code> - Do something with the value of a future without changing it. Returns the same future so you can continue using it in a pipeline. Convenient for side effects such as console logging.</li>\n</ul>\n<h3 id="beltresult"><a href="#beltresult" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Belt.Result</h3>\n<p>Convenience functions when working with a future <code>Belt.Result</code>. <strong>Note:</strong> <code>_</code> represents the future itself as inserted by <code>-></code> (the <a href="https://bucklescript.github.io/docs/en/fast-pipe.html">fast pipe</a> operator).</p>\n<p><strong>Note 2</strong>: The terms <code>Result.Ok</code> and <code>Result.Error</code> in this context are expected to be read as <code>Belt.Result.Ok</code> and <code>Belt.Result.Error</code>.</p>\n<ul>\n<li><code>Future.mapOk(_,fn)</code> - Transform a future value into another value, but only if the value is an <code>Result.Ok</code>. Similar to <code>Promise.prototype.then</code></li>\n<li><code>Future.mapError(_,fn)</code> - Transform a future value into another value, but only if the value is an <code>Result.Error</code>. Similar to <code>Promise.prototype.catch</code></li>\n<li><code>Future.tapOk(_,fn)</code> - Do something with the value of a future without changing it, but only if the value is a <code>Belt.Result.Ok</code>. Returns the same future. Convenience for side effects such as console logging.</li>\n<li><code>Future.tapError(_,fn)</code> - Same as <code>tapOk</code> but for <code>Result.Error</code></li>\n</ul>\n<p>The following are more situational:</p>\n<ul>\n<li><code>Future.flatMapOk(_, fn)</code> - Transform a future <code>Result.Ok</code> into\na future <code>Result</code>. Flattens the inner future.</li>\n<li><code>Future.flatMapError(_, fn)</code> - Transform a future <code>Result.Error</code> into\na future <code>Result</code>. Flattens the inner future.</li>\n</ul>\n<h3 id="futurejs"><a href="#futurejs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>FutureJs</h3>\n<p>Convenience functions for interop with JavaScript land.</p>\n<ul>\n<li>\n<p><code>FutureJs.fromPromise(promise, errorTransformer)</code></p>\n<ul>\n<li><code>promise</code> is the <code>Js.Promise.t(\'a)</code> that will be transformed into a\n<code>Future.t(Belt.Result.t(\'a, \'e))</code></li>\n<li><code>errorTransformer</code> allows you to determine how <code>Js.Promise.error</code>\nobjects will be transformed before they are returned wrapped within\na <code>Belt.Result.Error</code>.  This allows you to implement the error handling\nmethod which best meets your application\'s needs.</li>\n</ul>\n</li>\n<li>\n<p><code>FutureJs.toPromise(future)</code></p>\n<ul>\n<li><code>future</code> is any <code>Future.t(\'a)</code> which is transformed into a\n<code>Js.Promise.t(\'a)</code>. Always resolves, never rejects the promise.</li>\n</ul>\n</li>\n<li>\n<p><code>FutureJs.resultToPromise(future)</code></p>\n<ul>\n<li><code>future</code> is the <code>Future.t(Belt.Result(\'a, \'e))</code> which is transformed into a\n<code>Js.Promise.t(\'a)</code>. Resolves the promise on Ok result and rejects on Error result.</li>\n</ul>\n</li>\n</ul>\n<p>Example use:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>/*\n  <span class="hljs-type">This</span> error handler is super simple; you will probably want\n  <span class="hljs-keyword">to</span> write something more sophisticated <span class="hljs-keyword">in</span> your app.\n*/\n<span class="hljs-keyword">let</span> handleError = <span class="hljs-type">Js</span>.<span class="hljs-type">String</span>.make;\n\nsomePromiseGetter<span class="hljs-literal">()</span>\n-&gt;<span class="hljs-type">FutureJs</span>.fromPromise(handleError)\n-&gt;<span class="hljs-type">Future</span>.map(<span class="hljs-keyword">value</span> =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"It worked!"</span>, <span class="hljs-keyword">value</span>))\n-&gt;<span class="hljs-type">Future</span>.mapError(err =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"uh on"</span>, err));</code></pre></div>\n<p>See <a href="http://keleshev.com/composable-error-handling-in-ocaml">Composible Error Handling in OCaml</a> for several strategies that you may employ.</p>\n<h2 id="todo"><a href="#todo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>TODO</h2>\n<ul>\n<li class="task-list-item"><input type="checkbox" disabled> Implement cancellation tokens</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Interop with <code>Js.Promise</code></li>\n<li class="task-list-item"><input type="checkbox" checked disabled> <code>flatMapOk</code> / <code>flatMapError</code> (with <a href="http://keleshev.com/composable-error-handling-in-ocaml">composable error handling</a>)</li>\n</ul>\n<h2 id="build"><a href="#build" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm run build</code></pre></div>\n<h2 id="build--watch"><a href="#build--watch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build + Watch</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm run start</code></pre></div>\n<h2 id="test"><a href="#test" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Test</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm <span class="hljs-built_in">test</span></code></pre></div>\n<h2 id="editor"><a href="#editor" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Editor</h2>\n<p>If you use <code>vscode</code>, Press <code>Windows + Shift + B</code> it will build automatically</p>\n',homepageUrl:"https://github.com/rationaljs/future#readme",repositoryUrl:"https://github.com/rationaljs/future",npmUrl:"https://www.npmjs.com/package/reason-future",issuesUrl:"https://github.com/rationaljs/future/issues",slug:"/package/reason-future"}},pathContext:{id:"reason-future"}}}});
//# sourceMappingURL=path---package-reason-future-bface607ec52942b8841.js.map