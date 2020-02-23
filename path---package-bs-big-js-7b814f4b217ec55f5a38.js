webpackJsonp([0xefb26a8cc3ac],{1188:function(s,a){s.exports={data:{package:{type:"published",id:"bs-big.js",name:"bs-big.js",version:"1.0.3",category:"binding",flags:[],platforms:["browser","node"],description:"Bucklescript bindings to big.js.",keywords:["math","utilities"],license:"MIT",updated:"2020-02-22T16:15:54.525Z",stars:0,score:.5990946828208716,quality:.8169020165190424,popularity:.011591522363971481,maintenance:.999905842965054,readme:'<h1 id="bs-bigjs"><a href="#bs-bigjs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-big.js</h1>\n<p>Bucklescript bindings to <a href="https://github.com/MikeMcl/big.js/">big.js</a>, a library for arbitrary-precision decimal arithmetic. All methods are supported.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<ol>\n<li>Make sure big.js is installed: <code>npm install big.js</code></li>\n<li>Install the bindings: <code>npm install bs-big.js</code></li>\n<li>Add the bindings to bs-config.json:</li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>{\n  <span class="hljs-string">"bs-dependencies"</span>: [\n      <span class="hljs-string">"bs-big.js"</span>\n  ]\n}</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>Big numbers of type <code>Big.t</code> can be created using <code>Big.fromInt</code>, <code>Big.fromString</code> or <code>Big.fromFloat</code>. Arithmetic can\nthen be done using the pipe-first <code>|.</code> syntax. For example:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Big</span>.setDP(<span class="hljs-number">10</span>); <span class="hljs-comment">//set decimal places</span>\n<span class="hljs-type">Big</span>.setRM(<span class="hljs-number">1</span>); <span class="hljs-comment">//set rounding mode</span>\n<span class="hljs-keyword">let</span> x = <span class="hljs-type">Big</span>.fromInt(<span class="hljs-number">2</span>);\n<span class="hljs-keyword">let</span> y = <span class="hljs-type">Big</span>.fromInt(<span class="hljs-number">3</span>);\n<span class="hljs-keyword">let</span> z = x |. <span class="hljs-type">Big</span>.div(y);\n<span class="hljs-keyword">let</span> <span class="hljs-number">_</span> = z |. <span class="hljs-type">Big</span>.<span class="hljs-built_in">toString</span> <span class="hljs-comment">// "0.6666666667"</span>\n<span class="hljs-keyword">let</span> <span class="hljs-number">_</span> = z |. <span class="hljs-type">Big</span>.sqrt |. <span class="hljs-type">Big</span>.<span class="hljs-built_in">toString</span> <span class="hljs-comment">// "0.8164965809"</span>\n<span class="hljs-keyword">let</span> <span class="hljs-number">_</span> = z |. <span class="hljs-type">Big</span>.pow(-<span class="hljs-number">3</span>) |. <span class="hljs-type">Big</span>.<span class="hljs-built_in">toString</span> <span class="hljs-comment">// "3.3749999995"</span>\n<span class="hljs-keyword">let</span> <span class="hljs-number">_</span> = z |. <span class="hljs-type">Big</span>.times(z) |. <span class="hljs-type">Big</span>.<span class="hljs-built_in">toString</span> <span class="hljs-comment">// "0.44444444448888888889"</span>\n<span class="hljs-keyword">let</span> <span class="hljs-number">_</span> = z |. <span class="hljs-type">Big</span>.times(z) |. <span class="hljs-type">Big</span>.round(~dp=<span class="hljs-number">10</span>, ()) |. <span class="hljs-type">Big</span>.<span class="hljs-built_in">toString</span> <span class="hljs-comment">// "0.4444444445"</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2553</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h2 id="documentation"><a href="#documentation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Documentation</h2>\n<p>See <a href="https://github.com/alexchang8/bs-big.js/blob/master/src/Big.mli">Big.mli</a> and the <a href="http://mikemcl.github.io/big.js/">big.js documentation</a></p>\n<h2 id="testing"><a href="#testing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Testing</h2>\n<p>Very extensive testing was done by porting most of the tests from big.js. To run the tests:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm <span class="hljs-built_in">test</span></code></pre></div>\n<h2 id="things-to-note"><a href="#things-to-note" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Things to note</h2>\n<ul>\n<li>The method<code>Big.mod_</code> has an underscore because <code>mod</code> is a reserved keyword in OCaml/Reason</li>\n<li>The last parameter of all methods with optional parameters is <code>unit</code>. This is because the last parameter would be optional, <a href="https://ocaml.org/learn/tutorials/labels.html#quot-Warning-This-optional-argument-cannot-be-erased-quot">which don\'t work properly in OCaml</a>. Keeping the parameter order allows consistent use of the pipe-first syntax <code>|.</code>, so it is better to end with <code>unit</code> than swap order.</li>\n<li>OCaml does not have <code>-0</code> but Javascript does</li>\n</ul>\n',homepageUrl:"https://github.com/alexchang8/bs-big.js#readme",repositoryUrl:"https://github.com/alexchang8/bs-big.js",npmUrl:"https://www.npmjs.com/package/bs-big.js",issuesUrl:"https://github.com/alexchang8/bs-big.js/issues",slug:"/package/bs-big.js"}},pathContext:{id:"bs-big.js"}}}});
//# sourceMappingURL=path---package-bs-big-js-7b814f4b217ec55f5a38.js.map