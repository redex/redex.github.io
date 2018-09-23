webpackJsonp([31526903590819],{1281:function(s,a){s.exports={data:{package:{id:"unpublished/glennsl/bs-refmt",stars:4,name:"glennsl/bs-refmt",version:"0.3.0",category:"binding",flags:[],platforms:["browser","node"],description:"BuckleScript bindings to refmt.js",keywords:["utilities"],license:"MIT",updated:"2018-09-23T22:17:01.170Z",type:"unpublished",score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="bs-refmt"><a href="#bs-refmt" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-refmt</h1>\n<p>Proof that Reason can consume OCaml by way of compiling to JavaScript. As a side-effect it also reformats things, without any need for IO monads™, which shows conclusively that OCaml and Reason are superior to Haskell in every way. Q.E.D. ∎</p>\n<p>Or just BuckleScript bindings to <a href="https://github.com/facebook/reason/#javascript-api">refmt.js</a></p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>Run <code>npm install --save glennsl/bs-refmt</code> and add <code>bs-refmt</code> to the <code>bs-dependencies</code> in <code>bsconfig.json</code>. </p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> ocamlCode  = {|\n  <span class="hljs-keyword">let</span> hello thing =\n    <span class="hljs-type">Js</span>.log {j|<span class="hljs-type">Hello</span> $thing!|j}\n\n  <span class="hljs-keyword">let</span> () =\n    hello <span class="hljs-string">"world"</span>\n|};\n\n<span class="hljs-keyword">let</span> reasonCode =\n  ocamlCode |&gt; <span class="hljs-type">Refmt</span>.parseML\n            |&gt; <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> |<span class="hljs-params"> Ok(ast)<span class="hljs-params"> <span class="hljs-params"> </span></span></span></span></span>=&gt;\n                     ast |&gt; <span class="hljs-type">Refmt</span>.printRE |&gt; <span class="hljs-type">Js</span>.log\n\n                   | <span class="hljs-type">Error</span>(`<span class="hljs-type">RefmtParseError</span>({ message })) =&gt;\n                     <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"Error: "</span>, message)</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> ocamlCode =\n  {|\n  <span class="hljs-keyword">let</span> hello thing =\n    <span class="hljs-type">Js</span>.log {j|<span class="hljs-type">Hello</span> $thing!|j}\n\n  <span class="hljs-keyword">let</span> <span class="hljs-literal">()</span> =\n    hello <span class="hljs-string">"world"</span>\n|}\n<span class="hljs-keyword">let</span> reasonCode =\n  (ocamlCode |&gt; <span class="hljs-type">Refmt</span>.parseML) |&gt;\n    (<span class="hljs-keyword">function</span>\n     | ((<span class="hljs-type">Ok</span> (ast))[@explicit_arity ]) -&gt; (ast |&gt; <span class="hljs-type">Refmt</span>.printRE) |&gt; <span class="hljs-type">Js</span>.log\n     | ((<span class="hljs-type">Error</span> (<span class="hljs-tag">`RefmtParseError</span> { message }))[@explicit_arity ]) -&gt;\n         <span class="hljs-type">Js</span>.log2 <span class="hljs-string">"Error: "</span> message)</code></pre>\n      </div>\n    </div>\n  \n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="bundling"><a href="#bundling" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bundling</h3>\n<p>The package has been tested to work with <code>webpack</code>, but requires a tiny bit of configuration because it depends on a few\nndoe modules in code paths that aren\'t actually used in practice. To stub these out, just put the following in your\n<code>webpack.config.js</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-javascript"><code>  node: {\n    fs: <span class="hljs-string">\'empty\'</span>,\n    child_process: <span class="hljs-string">\'empty\'</span>\n  }</code></pre></div>\n',homepageUrl:"https://github.com/glennsl/bs-refmt#readme",repositoryUrl:"https://github.com/glennsl/bs-refmt",npmUrl:null,issuesUrl:"https://github.com/glennsl/bs-refmt/issues",slug:"/package/unpublished/glennsl/bs-refmt"}},pathContext:{id:"unpublished/glennsl/bs-refmt"}}}});
//# sourceMappingURL=path---package-unpublished-glennsl-bs-refmt-0d40eae40f60bef17d55.js.map