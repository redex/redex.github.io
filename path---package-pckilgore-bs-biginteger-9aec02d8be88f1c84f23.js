webpackJsonp([0x6d76cff94772],{1353:function(s,n){s.exports={data:{package:{type:"published",id:"@pckilgore/bs-biginteger",name:"@pckilgore/bs-biginteger",version:"1.0.1",category:"binding",flags:[],platforms:["node","browser"],description:"Bucklescript bindings for BigInteger.js",keywords:["math"],license:"Unlicense",updated:"2020-08-22T13:21:26.273Z",stars:6,score:.49559040894085765,quality:.5115082755889844,popularity:.028213963813414254,maintenance:.9493229683699067,readme:'<h2 id="bs-bigintegerjs"><a href="#bs-bigintegerjs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-BigInteger.js</h2>\n<p><a href="https://badge.fury.io/js/%40pckilgore%2Fbs-biginteger"><img src="https://badge.fury.io/js/%40pckilgore%2Fbs-biginteger.svg" alt="npm version"></a></p>\n<p><a href="https://github.com/bloomberg/bucklescript">BuckleScript</a> bindings over <a href="https://github.com/peterolson/BigInteger.js">BigInteger.js</a>@1.6.x</p>\n<h2 id="how-do-i-use-this"><a href="#how-do-i-use-this" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do I use this?</h2>\n<p>For specifics, see the <a href="https://www.npmjs.com/package/big-integer/v/1.6.47">documentation for BigInteger@1.6.47, from which this library was based</a>.</p>\n<h2 id="status"><a href="#status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Status</h2>\n<p>As far as I am aware, all methods from version 1.6.47 are supported, to some extent.</p>\n<p>Notable omissions are:</p>\n<ul>\n<li><em>the constructor</em> (does not support alphabet or caseSensitive arguments).</li>\n<li><code>isProbablePrime</code> (does not support iterations or rng arguments)</li>\n<li><code>isInstance</code> (we have a type checker!!!!)</li>\n<li><code>randBetween</code> (does not support rng argument)</li>\n<li><code>toString</code> (does not support alphabet argument)</li>\n</ul>\n<p>There are even some minor improvements, such as variant types for comparison operations, rather than <code>-1</code>, <code>0</code>, <code>1</code>.</p>\n<p>However, there is no in-library error handling! In particular, if you do something crazy with the `String(string) polymorphic argument, you may see runtime errors unless you catch and handle them:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> x = <span class="hljs-type">BigInteger</span>.bigInt(`<span class="hljs-type">String</span>(<span class="hljs-string">"IAmNotANumber"</span>));\n<span class="hljs-type">Js</span>.log(<span class="hljs-string">"I am unreachable due to an unhandled type error above"</span>);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> x = <span class="hljs-type">BigInteger</span>.bigInt (<span class="hljs-tag">`String</span> <span class="hljs-string">"IAmNotANumber"</span>)\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">Js</span>.log <span class="hljs-string">"I am unreachable due to an unhandled type error above"</span></code></pre>\n      </div>\n    </div>\n  \n<p>Add as much error handling to your own code as you think appropriate given your use case, for example:</p>\n<h3 id="option-variant"><a href="#option-variant" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Option variant</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> x =\n  try (<span class="hljs-type">Some</span>(<span class="hljs-type">BigInteger</span>.bigInt(`<span class="hljs-type">String</span>(<span class="hljs-string">"IAmNotAValidNumber"</span>)))) {\n  | <span class="hljs-number">_</span> =&gt; <span class="hljs-type">None</span>\n  };\n\n<span class="hljs-keyword">switch</span> (x) {\n| <span class="hljs-type">Some</span>(bigInteger) =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"I\'m a bigInt"</span>, bigInteger)\n| <span class="hljs-type">None</span> =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"Oh no, there was an error"</span>)\n};\n<span class="hljs-comment">// Logs "Oh no, there was an error".</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2553</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h3 id="beltresult-polymorphic-variant-error-type"><a href="#beltresult-polymorphic-variant-error-type" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Belt.Result (polymorphic variant error type)</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> suspiciousFunction = stringOfInt =&gt;\n  try (<span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Ok</span>(<span class="hljs-type">BigInteger</span>.bigInt(`<span class="hljs-type">String</span>(stringOfInt)))) {\n  | <span class="hljs-type">Js</span>.<span class="hljs-type">Exn</span>.<span class="hljs-type">Error</span>(e) =&gt;\n    <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Error</span>(\n      <span class="hljs-keyword">switch</span> (<span class="hljs-type">Js</span>.<span class="hljs-type">Exn</span>.name(e)) {\n      | <span class="hljs-type">Some</span>(error) =&gt;\n        <span class="hljs-keyword">switch</span> (error) {\n        | <span class="hljs-string">"Error"</span> =&gt; `<span class="hljs-type">BigIntegerError</span>(e)\n        | <span class="hljs-number">_</span> =&gt; `<span class="hljs-type">UnmatchedError</span>(e)\n        }\n      | <span class="hljs-type">None</span> =&gt; `<span class="hljs-type">SomeUnknownError</span>\n      },\n    )\n  };\n\n<span class="hljs-keyword">let</span> handleResult =\n  <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params">\n<span class="hljs-params"> <span class="hljs-params"> |<span class="hljs-params"> Belt.Result.Ok(bigInteger)<span class="hljs-params"> </span></span></span></span></span></span>=&gt; <span class="hljs-type">Js</span>.log(bigInteger)\n  | <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Error</span>(err) =&gt;\n    <span class="hljs-keyword">switch</span> (err) {\n    | `<span class="hljs-type">BigIntegerError</span>(<span class="hljs-number">_</span>) =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"1"</span>)\n    | `<span class="hljs-type">UnmatchedError</span>(<span class="hljs-number">_</span>) =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"2"</span>)\n    | `<span class="hljs-type">SomeUnknownError</span> =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"3"</span>)\n    };\n\nsuspiciousFunction(<span class="hljs-string">"IamNotValid"</span>)-&gt;handleResult;\n<span class="hljs-comment">// ^^ Logs 1</span>\nsuspiciousFunction(<span class="hljs-string">"777"</span>)-&gt;handleResult;\n<span class="hljs-comment">// ^^ Logs "Integer { value: 777n }"</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2310</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="exception"><a href="#exception" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Exception</h3>\n<p>For convenience, this library exports <code>exception BigIntegerException</code>. You should prefer the other options above though!</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> suspiciousFunction = stringOfInt =&gt;\n  try (<span class="hljs-type">BigInteger</span>.bigInt(`<span class="hljs-type">String</span>(stringOfInt))) {\n  | <span class="hljs-number">_</span> =&gt; raise(<span class="hljs-type">BigInteger</span>.<span class="hljs-type">BigIntegerException</span>)\n  };\n\n<span class="hljs-keyword">switch</span> (suspiciousFunction(<span class="hljs-string">"I am not a valid number"</span>)) {\n| bigInteger =&gt; <span class="hljs-type">Js</span>.log(bigInteger)\n| exception <span class="hljs-type">BigInteger</span>.<span class="hljs-type">BigIntegerException</span> =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"There was an error!"</span>)\n};\n<span class="hljs-comment">// ^^ Logs "error"</span>\n\n<span class="hljs-keyword">switch</span> (suspiciousFunction(<span class="hljs-string">"777"</span>)) {\n| bigInteger =&gt; <span class="hljs-type">Js</span>.log(bigInteger)\n| exception <span class="hljs-type">BigInteger</span>.<span class="hljs-type">BigIntegerException</span> =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"There was an error!"</span>)\n};\n<span class="hljs-comment">// ^^ Logs "Integer { value: 777n }"</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2553</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-console"><code>$ yarn add @pckilgore/bs-biginteger</code></pre></div>\n<p>or</p>\n<div class="redex-codeblock"><pre class="hljs lang-console"><code>$ npm install @pckilgore/bs-biginteger</code></pre></div>\n<p>Then add @pckilgore/bs-biginteger to bs-dependencies in your bsconfig.json:</p>\n<div class="redex-codeblock"><pre class="hljs lang-jsonc"><code>{\n  /* rest <span class="hljs-keyword">of</span> file ... */\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"@pckilgore/bs-biginteger"</span>]\n}</code></pre></div>\n<h1 id="contributing"><a href="#contributing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributing</h1>\n<p>Contributions are welcome, especially for the small portions of this library that lacks coverage by typings.</p>\n',homepageUrl:"https://github.com/pckilgore/bs-biginteger#readme",repositoryUrl:"https://github.com/pckilgore/bs-biginteger",npmUrl:"https://www.npmjs.com/package/%40pckilgore%2Fbs-biginteger",issuesUrl:"https://github.com/pckilgore/bs-biginteger/issues",slug:"/package/@pckilgore/bs-biginteger"}},pathContext:{id:"@pckilgore/bs-biginteger"}}}});
//# sourceMappingURL=path---package-pckilgore-bs-biginteger-9aec02d8be88f1c84f23.js.map