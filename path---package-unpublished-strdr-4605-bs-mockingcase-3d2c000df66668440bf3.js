webpackJsonp([0x6399d06eacf9],{1474:function(s,n){s.exports={data:{package:{type:"unpublished",id:"unpublished/strdr4605/bs-mockingcase",name:"strdr4605/bs-mockingcase",version:"2.0.0",category:"binding",flags:[],platforms:["node","browser"],description:"Convert a string to mOcKiNgCaSe",keywords:["string manipulation"],license:"ISC",updated:"2020-02-23T16:13:52.425Z",stars:0,score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="bs-mockingcase"><a href="#bs-mockingcase" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-mockingcase</h1>\n<blockquote>\n<p>Convert a string to mOcKiNgCaSe.</p>\n</blockquote>\n<p><a href="https://github.com/strdr4605/mockingcase">mockingcase</a> bindings in <a href="https://reasonml.github.io">ReasonML</a>.</p>\n<h2 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install https:<span class="hljs-comment">//github.com/strdr4605/bs-mockingcase.git --save</span></code></pre></div>\n<p>Then add <code>bs-mockingcase</code> to <code>bs-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>{\n  ...\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"bs-mockingcase"</span>]\n}</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Mockingcase</span>.convertString1(<span class="hljs-string">"mockingcase"</span>);\n<span class="hljs-comment">// mOcKiNgCaSe</span>\n<span class="hljs-type">Mockingcase</span>.convertArray1([|<span class="hljs-string">"reasonml"</span>, <span class="hljs-string">" "</span>, <span class="hljs-string">"mockingcase"</span>|]);\n<span class="hljs-comment">// rEaSoNmL MoCkInGcAsE</span>\n<span class="hljs-type">Mockingcase</span>.convertString2(<span class="hljs-string">"mockingcase"</span>, <span class="hljs-type">Mockingcase</span>.options(~random=<span class="hljs-literal">true</span>, ()));\n<span class="hljs-comment">// mOCKIngCAse</span>\n<span class="hljs-type">Mockingcase</span>.convertArray2(\n  [|<span class="hljs-string">"reasonml"</span>, <span class="hljs-string">" 2 "</span>, <span class="hljs-string">"mockingcase"</span>|],\n  <span class="hljs-type">Mockingcase</span>.options(~random=<span class="hljs-literal">true</span>, ~onlyLetters=<span class="hljs-literal">true</span>, ~firstUpper=<span class="hljs-literal">true</span>, ()),\n  );\n<span class="hljs-comment">// ReAsOnMl  MoCkInGcAsE</span>\n\n<span class="hljs-type">Mockingcase</span>.logFromString1(<span class="hljs-string">"logging"</span>);\n<span class="hljs-comment">// Js.log("lOgGiNg");</span>\n<span class="hljs-type">Mockingcase</span>.logFromString2(<span class="hljs-string">"random logging"</span>, <span class="hljs-type">Mockingcase</span>.options(~random=<span class="hljs-literal">true</span>, ()));\n<span class="hljs-comment">// Js.log("RAndOM LoGgiNg");</span>\n<span class="hljs-type">Mockingcase</span>.logFromString2(\n  <span class="hljs-string">"upper LOwer logging"</span>,\n  <span class="hljs-type">Mockingcase</span>.options(~lower=<span class="hljs-string">"lower"</span>, ~upper=<span class="hljs-string">"upper"</span>, ()),\n);\n<span class="hljs-comment">// Js.log("UPPER lower lOgGiNg");</span>\n<span class="hljs-type">Mockingcase</span>.logFromArray1([|<span class="hljs-string">"array"</span>, <span class="hljs-string">" "</span>, <span class="hljs-string">"logging"</span>|]);\n<span class="hljs-comment">// Js.log("aRrAy lOgGiNg");</span>\n<span class="hljs-type">Mockingcase</span>.logFromArray2([|<span class="hljs-string">"array"</span>, <span class="hljs-string">" "</span>, <span class="hljs-string">"random logging"</span>|], <span class="hljs-type">Mockingcase</span>.options(~random=<span class="hljs-literal">true</span>, ()));\n<span class="hljs-comment">// Js.log("ARray raNdOm loGGiNg");</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2553</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/strdr4605/bs-mockingcase.git",repositoryUrl:"https://github.com/strdr4605/bs-mockingcase",npmUrl:null,issuesUrl:"https://github.com/strdr4605/bs-mockingcase/issues",slug:"/package/unpublished/strdr4605/bs-mockingcase"}},pathContext:{id:"unpublished/strdr4605/bs-mockingcase"}}}});
//# sourceMappingURL=path---package-unpublished-strdr-4605-bs-mockingcase-3d2c000df66668440bf3.js.map