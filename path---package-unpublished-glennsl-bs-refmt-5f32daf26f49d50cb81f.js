webpackJsonp([31526903590819],{1154:function(s,e){s.exports={data:{package:{id:"unpublished/glennsl/bs-refmt",stars:0,name:"glennsl/bs-refmt",version:"0.1.0",category:"binding",flags:[],platforms:["browser","node"],description:"BuckleScript bindings to refmt.js",keywords:["utilities"],license:"MIT",updated:"2018-02-02T20:46:18.290Z",type:"unpublished",score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="bs-refmt"><a href="#bs-refmt" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-refmt</h1>\n<p>Proof that Reason can consume OCaml by way of compiling to JavaScript. As a side-effect it also reformats things, without any need for IO monads™, which shows conclusively that OCaml and Reason are superior to Haskell in every way. Q.E.D. ∎</p>\n<p>Or just BuckleScript bindings to <a href="https://github.com/facebook/reason/#javascript-api">refmt.js</a></p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>Run <code>npm install --save glennsl/bs-refmt</code> and add <code>bs-refmt</code> to the <code>bs-dependencies</code> in <code>bsconfig.json</code>. </p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>[@bs.<span class="hljs-keyword">val</span>] external eval : string =&gt; \'a = <span class="hljs-string">""</span>;\n\n<span class="hljs-keyword">let</span> ocamlCode  = {|\n  <span class="hljs-keyword">let</span> hello thing =\n    <span class="hljs-type">Js</span>.log {j|<span class="hljs-type">Hello</span> $thing!|j}\n\n  <span class="hljs-keyword">let</span> () =\n    hello <span class="hljs-string">"world"</span>\n|};\n\n<span class="hljs-keyword">let</span> reasonCode =\n  ocamlCode |&gt; <span class="hljs-type">Refmt</span>.parseML\n            |&gt; <span class="hljs-type">Refmt</span>.printRE;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">external</span> eval : <span class="hljs-built_in">string</span> -&gt; <span class="hljs-symbol">\'a</span> = <span class="hljs-string">""</span>[@@bs.<span class="hljs-keyword">val</span> ]\n<span class="hljs-keyword">let</span> ocamlCode =\n  {|\n  <span class="hljs-keyword">let</span> hello thing =\n    <span class="hljs-type">Js</span>.log {j|<span class="hljs-type">Hello</span> $thing!|j}\n\n  <span class="hljs-keyword">let</span> <span class="hljs-literal">()</span> =\n    hello <span class="hljs-string">"world"</span>\n|}\n<span class="hljs-keyword">let</span> reasonCode = (ocamlCode |&gt; <span class="hljs-type">Refmt</span>.parseML) |&gt; <span class="hljs-type">Refmt</span>.printRE</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/glennsl/bs-refmt#readme",repositoryUrl:"https://github.com/glennsl/bs-refmt",npmUrl:null,issuesUrl:"https://github.com/glennsl/bs-refmt/issues",slug:"/package/unpublished/glennsl/bs-refmt"}},pathContext:{id:"unpublished/glennsl/bs-refmt"}}}});
//# sourceMappingURL=path---package-unpublished-glennsl-bs-refmt-5f32daf26f49d50cb81f.js.map