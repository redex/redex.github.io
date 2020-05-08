webpackJsonp([0xa57bf1241612],{1222:function(s,a){s.exports={data:{package:{type:"published",id:"bs-fluture",name:"bs-fluture",version:"0.5.0",category:"binding",flags:[],platforms:["browser","node"],description:"Reason bindings for Fluture.js",keywords:["async"],license:"MIT",updated:"2020-05-04T13:05:36.918Z",stars:9,score:.46033530165160963,quality:.7595474111142078,popularity:.035999867165345964,maintenance:.6282032137413607,readme:'<h1 id="bs-fluture"><a href="#bs-fluture" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-fluture</h1>\n<p><a href="https://reasonml.github.io/">ReasonML</a> bindings for <a href="https://github.com/fluture-js/Fluture">Fluture</a>.</p>\n<p>This library of bindings is currently a work in progress. Please file an issue if one of the bindings is wrong or it isn\'t working for you in general.</p>\n<h2 id="justification"><a href="#justification" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Justification</h2>\n<p>Futures, as provided by Fluture, give the following benefits over Promises:</p>\n<ul>\n<li>Futures are lazy, rather than eager. Creating a future doesn\'t actually perform the async task – that only happens when you consume the future with e.g. <code>fork()</code>. Promises, on the other hand, perform their async task as soon as they are created. If you want a Promise that you can pass around without actually running it, you have to wrap it in a function, introducing more boilerplate.</li>\n<li>Cancellation is a built-in feature of futures.</li>\n<li>Unlike Promises (even in Reason!), Futures explicitly type their error states.</li>\n</ul>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install --save bs-fluture</code></pre></div>\n<p>Then add bs-fluture to bs-dependencies in your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"bs-fluture"</span>]\n}</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> future =\n  <span class="hljs-type">BsFluture</span>.make((reject, resolve) =&gt; {\n    <span class="hljs-keyword">let</span> timeoutId =\n      <span class="hljs-type">Js</span>.<span class="hljs-type">Global</span>.setTimeout(\n        () =&gt;\n          <span class="hljs-keyword">if</span> (<span class="hljs-type">Random</span>.bool()) {\n            resolve(<span class="hljs-string">"success"</span>);\n          } <span class="hljs-keyword">else</span> {\n            reject(<span class="hljs-string">"error"</span>);\n          },\n        <span class="hljs-number">30</span>,\n      );\n\n    <span class="hljs-comment">/* EITHER return a wrapped cancellation function ... */</span>\n    <span class="hljs-type">BsFluture</span>.<span class="hljs-type">Cancel</span>(() =&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Global</span>.clearTimeout(timeoutId));\n    <span class="hljs-comment">/* ... OR return NoCancel */</span>\n    <span class="hljs-type">BsFluture</span>.<span class="hljs-type">NoCancel</span>;\n  });\n\n<span class="hljs-keyword">let</span> cancelFuture =\n  future\n  |&gt; <span class="hljs-type">BsFluture</span>.fork(error =&gt; <span class="hljs-type">Js</span>.log(error), response =&gt; <span class="hljs-type">Js</span>.log(response));\n\n<span class="hljs-comment">/* Cancels a Future only if a cancellation function was provided */</span>\n<span class="hljs-type">BsFluture</span>.safeCancel(cancelFuture);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> future =\n  <span class="hljs-type">BsFluture</span>.make\n    (<span class="hljs-keyword">fun</span> reject  -&gt;\n       <span class="hljs-keyword">fun</span> resolve  -&gt;\n         <span class="hljs-keyword">let</span> timeoutId =\n           <span class="hljs-type">Js</span>.<span class="hljs-type">Global</span>.setTimeout\n             (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n                <span class="hljs-keyword">if</span> <span class="hljs-type">Random</span>.<span class="hljs-built_in">bool</span> <span class="hljs-literal">()</span> <span class="hljs-keyword">then</span> resolve <span class="hljs-string">"success"</span> <span class="hljs-keyword">else</span> reject <span class="hljs-string">"error"</span>)\n             <span class="hljs-number">30</span> <span class="hljs-keyword">in</span>\n         ((<span class="hljs-type">BsFluture</span>.<span class="hljs-type">Cancel</span> (((<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Global</span>.clearTimeout timeoutId))))\n         [@explicit_arity ]);\n         <span class="hljs-type">BsFluture</span>.<span class="hljs-type">NoCancel</span>)\n<span class="hljs-keyword">let</span> cancelFuture =\n  future |&gt;\n    (<span class="hljs-type">BsFluture</span>.fork (<span class="hljs-keyword">fun</span> error  -&gt; <span class="hljs-type">Js</span>.log error)\n       (<span class="hljs-keyword">fun</span> response  -&gt; <span class="hljs-type">Js</span>.log response))\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">BsFluture</span>.safeCancel cancelFuture</code></pre>\n      </div>\n    </div>\n  \n<h2 id="let-anything"><a href="#let-anything" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>let-anything</h2>\n<p>This package is compatible with <a href="https://github.com/jaredly/let-anything">let-anything</a> – use it like this:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> getDefaultUsername = (futureEmail: <span class="hljs-type">BsFluture</span>.t(<span class="hljs-type">Js</span>.<span class="hljs-type">Exn</span>.t, string)) =&gt; {\n  <span class="hljs-keyword">let</span>%<span class="hljs-type">BsFluture</span> email = futureEmail;\n  <span class="hljs-keyword">let</span> name = <span class="hljs-type">Js</span>.<span class="hljs-type">String</span>.<span class="hljs-built_in">split</span>(email, <span class="hljs-string">"@"</span>)[<span class="hljs-number">0</span>];\n  <span class="hljs-type">BsFluture</span>.resolve(name);\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> getDefaultUsername (futureEmail : (<span class="hljs-type">Js</span>.<span class="hljs-type">Exn</span>.t,<span class="hljs-built_in">string</span>) <span class="hljs-type">BsFluture</span>.t) =\n  [%<span class="hljs-type">BsFluture</span>\n    <span class="hljs-keyword">let</span> email = futureEmail <span class="hljs-keyword">in</span>\n    <span class="hljs-keyword">let</span> name = (<span class="hljs-type">Js</span>.<span class="hljs-type">String</span>.split email <span class="hljs-string">"@"</span>).(<span class="hljs-number">0</span>) <span class="hljs-keyword">in</span> <span class="hljs-type">BsFluture</span>.resolve name]</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/benadamstyles/bs-fluture",repositoryUrl:"https://github.com/benadamstyles/bs-fluture",npmUrl:"https://www.npmjs.com/package/bs-fluture",issuesUrl:"https://github.com/benadamstyles/bs-fluture/issues",slug:"/package/bs-fluture"}},pathContext:{id:"bs-fluture"}}}});
//# sourceMappingURL=path---package-bs-fluture-4edf91f1c562082f9501.js.map