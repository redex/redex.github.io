webpackJsonp([0xf8106bb22192],{1209:function(s,e){s.exports={data:{package:{type:"published",id:"bs-decode",name:"bs-decode",version:"0.11.2",category:"library",flags:[],platforms:["browser","node"],description:"Type-safe JSON decoding for ReasonML and OCaml",keywords:["json","data serialization"],license:"MIT",updated:"2020-06-28T18:20:55.798Z",stars:104,score:.6514177536474091,quality:.8958665754232077,popularity:.10638027548438758,maintenance:.9869276702883176,readme:'<h1 id="bs-decode"><a href="#bs-decode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-decode</h1>\n<p><a href="https://circleci.com/gh/mlms13/bs-decode"><img src="https://img.shields.io/circleci/build/github/mlms13/bs-decode.svg?style=flat-square" alt="build status"></a>\n<a href="https://coveralls.io/github/mlms13/bs-decode"><img src="https://img.shields.io/coveralls/github/mlms13/bs-decode.svg?style=flat-square" alt="test coverage"></a>\n<a href="https://www.npmjs.com/package/bs-decode"><img src="https://img.shields.io/npm/v/bs-decode.svg?style=flat-square" alt="npm version"></a>\n<a href="https://github.com/mlms13/bs-decode/blob/master/LICENSE"><img src="https://img.shields.io/github/license/mlms13/bs-decode.svg?style=flat-square" alt="license"></a></p>\n<p><a href="https://mlms13.github.io/bs-decode/docs/">Read the Documentation</a></p>\n<p>Decode JSON values into structured ReasonML and OCaml types. Inspired by Elm\'s <a href="https://package.elm-lang.org/packages/elm-lang/core/5.1.1/Json-Decode">Json.Decode</a> and the <a href="https://package.elm-lang.org/packages/NoRedInk/elm-decode-pipeline/3.0.1/Json-Decode-Pipeline">Decode Pipeline</a>, <code>bs-decode</code> is an alternative to <a href="https://github.com/glennsl/bs-json">bs-json</a> that focuses on structured, type-safe error handling, rather than exceptions. Additionally, <code>bs-decode</code> collects up <em>everything</em> that went wrong while parsing the JSON, rather than failing on the first error.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p><strong>Install via npm:</strong></p>\n<p><code>npm install --save bs-decode relude bs-bastet</code></p>\n<p><strong>Update your bsconfig.json</strong></p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-string">"bs-dependencies"</span>: [\n  <span class="hljs-string">"bs-bastet"</span>,\n  <span class="hljs-string">"bs-decode"</span>,\n  <span class="hljs-string">"relude"</span>\n],</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>The following is available to give you an idea of how the library works, but <a href="https://mlms13.github.io/bs-decode/docs/simple-example">the complete documentation</a> will probably be more useful if you want to write your own decoders.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">// imagine you have a `user` type and `make` function to construct one</span>\n<span class="hljs-keyword">type</span> user = {\n  name: string,\n  age: int,\n  isAdmin: bool,\n  lastLogin: option(<span class="hljs-type">Js</span>.<span class="hljs-type">Date</span>.t)\n};\n\n<span class="hljs-keyword">let</span> make = (name, age, isAdmin, lastLogin) =&gt;\n  { name, age, isAdmin, lastLogin };\n\n<span class="hljs-comment">/**\n * Given a JSON value that looks like:\n * { "name": "Michael", "age": 32, "roles": ["admin"] }\n *\n * you can write a function to convert this JSON into a value of type `user`\n */</span>\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Decode</span> = <span class="hljs-title">Decode</span>.<span class="hljs-title">AsResult</span>.<span class="hljs-title">OfParseError</span>; // <span class="hljs-title">module</span> <span class="hljs-title">alias</span> <span class="hljs-title">for</span> <span class="hljs-title">brevity</span>\n\n<span class="hljs-title">let</span> <span class="hljs-title">decode</span> = <span class="hljs-title">json</span> =&gt;\n  <span class="hljs-title">Decode</span>.<span class="hljs-title">Pipeline</span>.(\n    <span class="hljs-title">succeed</span>(<span class="hljs-title">make</span>)\n    |&gt; <span class="hljs-title">field</span>("<span class="hljs-title">name</span>", <span class="hljs-title">string</span>)\n    |&gt; <span class="hljs-title">field</span>("<span class="hljs-title">age</span>", <span class="hljs-title">intFromNumber</span>)\n    |&gt; <span class="hljs-title">field</span>("<span class="hljs-title">roles</span>", <span class="hljs-title">map</span>(<span class="hljs-title">List</span>.<span class="hljs-title">contains</span>("<span class="hljs-title">admin</span>"), <span class="hljs-title">list</span>(<span class="hljs-title">string</span>)))\n    |&gt; <span class="hljs-title">optionalField</span>("<span class="hljs-title">lastLogin</span>", <span class="hljs-title">date</span>)\n    |&gt; <span class="hljs-title">run</span>(<span class="hljs-title">json</span>)\n  );\n\n<span class="hljs-title">let</span> <span class="hljs-title">myUser</span> = <span class="hljs-title">decode</span>(<span class="hljs-title">json</span>); /* <span class="hljs-title">Ok</span>(</span>{ name: <span class="hljs-string">"Michael"</span>, ...}) */</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">0</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h2 id="contributing"><a href="#contributing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributing</h2>\n<p>All contributions are welcome! This obviously includes code changes and documentation improvements (<a href="https://github.com/mlms13/bs-decode/blob/master/CONTRIBUTING.md">see CONTRIBUTING</a>), but we also appreciate any feedback you want to provide (in the form of <a href="https://github.com/mlms13/bs-decode/issues">Github issues</a>) about concepts that are confusing or poorly explained in <a href="https://mlms13.github.io/bs-decode/docs/what-and-why">the docs</a>.</p>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>Released under the <a href="https://github.com/mlms13/bs-decode/blob/master/LICENSE">MIT license</a>.</p>\n',homepageUrl:"https://mlms13.github.io/bs-decode/docs",repositoryUrl:"https://github.com/mlms13/bs-decode",npmUrl:"https://www.npmjs.com/package/bs-decode",issuesUrl:"https://github.com/mlms13/bs-decode/issues",slug:"/package/bs-decode"}},pathContext:{id:"bs-decode"}}}});
//# sourceMappingURL=path---package-bs-decode-93c68525b4c76ad61466.js.map