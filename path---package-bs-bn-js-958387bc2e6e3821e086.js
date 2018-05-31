webpackJsonp([0xef83d748356b],{1059:function(s,a){s.exports={data:{package:{id:"bs-bn.js",stars:9,name:"bs-bn.js",version:"0.0.2",category:"binding",flags:[],platforms:["browser","node"],description:"BuckleScript bindings to bn.js",keywords:["math","utilities"],license:"MIT",updated:"2018-02-14T19:06:29.780Z",type:"published",score:.5832511857666136,quality:.7367857786648843,popularity:.04030808379751407,maintenance:.994593208108624,readme:'<h1 id="bs-bnjs"><a href="#bs-bnjs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-bn.js</h1>\n<p><a href="https://bucklescript.github.io/">BuckleScript</a> bindings for <a href="https://github.com/indutny/bn.js/">bn.js</a>.</p>\n<h3 id="state"><a href="#state" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>State</h3>\n<p>This is a work in progress, so proceed with caution. However, 90% of the tests in the original library have been migrated to Reason, so the coverage is mostly complete.</p>\n<p>Constructors, binary ops, arithmetic ops, and reduction ops are available. There are some functions related to prime numbers that have not been bound yet. Feel free to open an issue / PR if you need them.</p>\n<h3 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h3>\n<ol>\n<li>Make sure you have <code>bn.js</code> installed. If not, run <code>npm install bn.js --save</code></li>\n<li>Install the bindings: <code>npm install bs-bn.js --save</code></li>\n<li>Add the bindings to <code>bsconfig.json</code></li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"bs-dependencies"</span>: [\n      <span class="hljs-string">"bs-bn.js"</span>\n  ]\n}</code></pre></div>\n<h3 id="using-it"><a href="#using-it" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using it</h3>\n<p>Create new big numbers from float numbers:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> a = <span class="hljs-type">Bn</span>.fromFloat(<span class="hljs-number">12345</span>.);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> a = <span class="hljs-type">Bn</span>.fromFloat <span class="hljs-number">12345.</span></code></pre>\n      </div>\n    </div>\n  \n<p>You can use <code>float_of_int</code> if you prefer to use ints. The main reason why floats were selected is that ints are trimmed to 32 bits in BuckleScript, so float is a safer choice.</p>\n<p>You can create big numbers also from other types:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> s = <span class="hljs-type">Bn</span>.fromString(~base=<span class="hljs-number">16</span>, ~endian=`le, <span class="hljs-string">"1A6B765D8CDF"</span>);\n<span class="hljs-keyword">let</span> a = <span class="hljs-type">Bn</span>.fromArray([|<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>|]);\n<span class="hljs-keyword">let</span> b = <span class="hljs-type">Bn</span>.fromBuffer(<span class="hljs-type">Node</span>.<span class="hljs-type">Buffer</span>.fromString(<span class="hljs-string">"12345"</span>));</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> s = <span class="hljs-type">Bn</span>.fromString ~base:<span class="hljs-number">16</span> ~endian:`le <span class="hljs-string">"1A6B765D8CDF"</span>\n<span class="hljs-keyword">let</span> a = <span class="hljs-type">Bn</span>.fromArray [|<span class="hljs-number">1</span>;<span class="hljs-number">2</span>;<span class="hljs-number">3</span>|]\n<span class="hljs-keyword">let</span> b = <span class="hljs-type">Bn</span>.fromBuffer (<span class="hljs-type">Node</span>.<span class="hljs-type">Buffer</span>.fromString <span class="hljs-string">"12345"</span>)</code></pre>\n      </div>\n    </div>\n  \n<p>Operations always keep the affected big number as the last param to enable piping:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> a = <span class="hljs-type">Bn</span>.fromString(~base=<span class="hljs-number">16</span>, <span class="hljs-string">"ffffffff"</span>);\n<span class="hljs-keyword">let</span> b = a |&gt; <span class="hljs-type">Bn</span>.<span class="hljs-built_in">abs</span> |&gt; <span class="hljs-type">Bn</span>.mul(<span class="hljs-type">Bn</span>.fromFloat(<span class="hljs-number">3</span>.));</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> a = <span class="hljs-type">Bn</span>.fromString ~base:<span class="hljs-number">16</span> <span class="hljs-string">"ffffffff"</span>\n<span class="hljs-keyword">let</span> b = (a |&gt; <span class="hljs-type">Bn</span>.abs) |&gt; (<span class="hljs-type">Bn</span>.mul (<span class="hljs-type">Bn</span>.fromFloat <span class="hljs-number">3.</span>))</code></pre>\n      </div>\n    </div>\n  \n<h3 id="full-api"><a href="#full-api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Full API</h3>\n<p>Check the interface file <a href="https://github.com/jchavarri/bs-bn.js/blob/master/src/Bn.rei"><code>Bn.rei</code></a>.</p>\n<h3 id="todo"><a href="#todo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>TODO</h3>\n<ul>\n<li>Explore adding infix operators: <code>let result = Bn.Infix.(bn1 + bn2);</code></li>\n</ul>\n',homepageUrl:"https://github.com/jchavarri/bs-bn.js",repositoryUrl:"https://github.com/jchavarri/bs-bn.js",npmUrl:"https://www.npmjs.com/package/bs-bn.js",issuesUrl:"https://github.com/jchavarri/bs-bn.js/issues",slug:"/package/bs-bn.js"}},pathContext:{id:"bs-bn.js"}}}});
//# sourceMappingURL=path---package-bs-bn-js-958387bc2e6e3821e086.js.map