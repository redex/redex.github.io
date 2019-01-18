webpackJsonp([0x9f105b54698b],{1226:function(e,s){e.exports={data:{package:{type:"published",id:"@j3a/bs-xstream",name:"@j3a/bs-xstream",version:"0.7.0",category:"binding",flags:[],platforms:["any"],description:"Bucklescript bindings for xstream",keywords:["reactive programming"],license:"LGPL-3.0",updated:"2018-11-06T23:34:29.421Z",stars:null,score:.2894410278866599,quality:.5263375362400075,popularity:.04249457242283138,maintenance:.3333333333333333,readme:'<h1 id="bs-xstream"><a href="#bs-xstream" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-xstream</h1>\n<p>Bucklescript/ReasonML bindings for <a href="https://github.com/staltz/xstream">xstream</a>.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install --save @j3a/bs-xstream</code></pre></div>\n<p>Then add <code>@j3a/bs-xstream</code> to <code>bs-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>{\n  ...\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"@j3a/bs-xstream"</span>]\n}</code></pre></div>\n<h2 id="differences-with-js-version"><a href="#differences-with-js-version" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Differences with JS version</h2>\n<p>No runtime code is included in this package. Only bindings are provided.</p>\n<p>Having said that, there are a few differences that come from using ocaml\'s type system:</p>\n<ul>\n<li>If your stream emits integers, Typescript version picks up on that, but methods like <code>throw</code> and <code>replaceError</code> do not offer safe types. This is because in the JS/TS version, streams are generically typed for ok messages (aka: right branch, result ok type, etc.). In this version, both ok and error messages are typed. This leads to a much stronger typed usage of streams.</li>\n<li>Instead of generics, this package uses ocaml functors. If you\'re starting your streams from scratch, create your module first using <code>Stream.Make_stream</code> and <code>Memory.Make_memory_stream</code>. By creating a module you\'re not creating a constructor in JS sense. These are type factories. For an in-depth explanation of how functors work read <a href="http://reasonmlhub.com/exploring-reasonml/ch_functors.html">this</a>. See the <a href="examples/demo.re">demo module</a> to see a couple of simple examples.</li>\n<li>As a more basic alternative to the functor approach, if you are consuming external streams, it may be enough to use the <code>Operators</code> modules in either <code>Stream</code> or <code>Memory</code>.</li>\n<li>In bs, array elements must all be of the same type. This poses a limitation fot the <code>merge</code> method. However, full polymorphism of streams can be achieved with <code>combine</code>.</li>\n<li>Stream and memory streams are treated as two completely different types. You may have to start a new pipe after using methods like <code>remember</code>.</li>\n</ul>\n<p>For anything else, check the documentation of <a href="https://github.com/staltz/xstream">xstream</a>.</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>Xstream heavily relies on fluent interfaces for streams due. Due to the OOP class interfaces in the JS module xstream is often used as chains of methods. These bindings try to be as close to the JS version as possible by using <code>[@bs.send]</code>. Feel free to choose between a fluent or a more functional approach. As per the examples given in <code>examples</code> folder:</p>\n<h3 id="functional-style"><a href="#functional-style" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Functional style</h3>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Xstream</span>.<span class="hljs-type">Stream</span>;\n\n<span class="hljs-keyword">let</span> producer = fromArray([|<span class="hljs-number">1</span>|]);\n<span class="hljs-keyword">let</span> transformed = map(producer, x =&gt; x + <span class="hljs-number">5</span>);\n<span class="hljs-keyword">let</span> transformedMemo = remember(transformed);</code></pre></div>\n<h3 id="fluent-style-with-pipes"><a href="#fluent-style-with-pipes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Fluent style with pipes</h3>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Xstream</span>.<span class="hljs-type">Stream</span>;\n\n<span class="hljs-keyword">let</span> producer = fromArray([<span class="hljs-number">1</span>]);\n<span class="hljs-keyword">let</span> piped = producer\n  -&gt; map(x =&gt; x + <span class="hljs-number">5</span>)\n  -&gt; filter(x =&gt; x &gt; <span class="hljs-number">5</span>)\n  -&gt; remember<span class="hljs-literal">()</span>;</code></pre></div>\n<h1 id="build"><a href="#build" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build</h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm run build</code></pre></div>\n<h1 id="build--watch"><a href="#build--watch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build + Watch</h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm run start</code></pre></div>\n<h1 id="editor"><a href="#editor" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Editor</h1>\n<p>If you use <code>vscode</code>, Press <code>Windows + Shift + B</code> it will build automatically</p>\n',homepageUrl:"http://staltz.github.io/xstream/",repositoryUrl:"https://gitlab.com/j3a-solutions/bs-xstream",npmUrl:"https://www.npmjs.com/package/%40j3a%2Fbs-xstream",issuesUrl:"https://gitlab.com/j3a-solutions/bs-xstream/issues",slug:"/package/@j3a/bs-xstream"}},pathContext:{id:"@j3a/bs-xstream"}}}});
//# sourceMappingURL=path---package-j-3-a-bs-xstream-413403559e3bd3edc204.js.map