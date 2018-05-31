webpackJsonp([6874394494743],{1089:function(e,s){e.exports={data:{package:{id:"@glennsl/bs-revamp",stars:3,name:"@glennsl/bs-revamp",version:"0.1.1",category:"library",flags:[],platforms:["browser","node"],description:"A safe and functional API for JavaScript regexes",keywords:["utilities","string manipulation","regular expressions"],license:"MIT",updated:"2018-01-19T08:19:50.355Z",type:"published",score:.6226217359891925,quality:.879490135993972,popularity:.030257319942225025,maintenance:.994813237746349,readme:'<h1 id="bs-revamp"><a href="#bs-revamp" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-re:vamp</h1>\n<p>An experimental safe and functional API for JavaScript regexes</p>\n<p><a href="https://npmjs.org/@glennsl/bs-revamp"><img src="https://img.shields.io/npm/v/@glennsl/bs-revamp.svg" alt="npm"></a>\n<a href="https://travis-ci.org/glennsl/bs-revamp"><img src="https://img.shields.io/travis/glennsl/bs-revamp/master.svg" alt="Travis"></a>\n<a href="https://coveralls.io/github/glennsl/bs-revamp?branch=master"><img src="https://img.shields.io/coveralls/glennsl/bs-revamp/master.svg" alt="Coveralls"></a>\n<a href="https://github.com/glennsl/bs-revamp/network/dependencies"><img src="https://img.shields.io/david/glennsl/bs-revamp.svg" alt="Dependencies"></a>\n<a href="https://github.com/glennsl/bs-revamp/issues"><img src="https://img.shields.io/github/issues/glennsl/bs-revamp.svg" alt="Issues"></a>\n<a href="https://github.com/glennsl/bs-revamp/commits/master"><img src="https://img.shields.io/github/last-commit/glennsl/bs-revamp.svg" alt="Last Commit"></a>\n<a href="https://github.com/glennsl/bs-revamp/blob/master/lib/js/src/Revamp.js"><img src="https://img.shields.io/github/size/glennsl/bs-revamp/lib/js/src/Revamp.js.svg" alt="Size"></a></p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> Reason\n        <li class="ml"> OCaml\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>/**\n * Reason\n *\n * Dasherize camelCased identifiers inside string literals\n */\n\nlet code = {|\n  let borderLeftColor = "borderLeftColor";\n  let borderRightColor = "borderRightColor";\n|};\n\ncode |&gt; Revamp.replace({|"([^"]+)"|},                /* Matches the content of string literals */\n          Revamp.replace("[A-Z]", letter =&gt;          /* Matches uppercase letters */\n            "-" ++ letter |&gt; Js.String.toLowerCase)) /* Convert to lower case and prefix with a dash */\n     |&gt; Js.log;\n\n/* Outputs:\n\n  let borderLeftColor = "border-left-color";\n  let borderRightColor = "border-right-color";\n*/</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> code =\n  {|\n  <span class="hljs-keyword">let</span> borderLeftColor = <span class="hljs-string">"borderLeftColor"</span>;\n  <span class="hljs-keyword">let</span> borderRightColor = <span class="hljs-string">"borderRightColor"</span>;\n|}\n  [@@ocaml.doc\n    <span class="hljs-string">"\\n * Reason\\n *\\n * Dasherize camelCased identifiers inside string literals\\n "</span>]\n<span class="hljs-keyword">let</span> _ =\n  (code |&gt;\n     (<span class="hljs-type">Revamp</span>.replace {|<span class="hljs-string">"([^"</span>]+)<span class="hljs-string">"|}\n        (Revamp.replace "</span>[<span class="hljs-type">A</span>-<span class="hljs-type">Z</span>]<span class="hljs-string">"\n           (fun letter  -&gt; ("</span>-<span class="hljs-string">" ^ letter) |&gt; Js.String.toLowerCase))))\n    |&gt; Js.log</span></code></pre>\n      </div>\n    </div>\n  \n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> Reason\n        <li class="ml"> OCaml\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>/**\n * OCaml\n *\n * Dasherize camelCased identifiers inside string literals\n */;\n\nlet code = {|\n  let borderLeftColor = "borderLeftColor";\n  let borderRightColor = "borderRightColor";\n|};\n\nlet () =\n  code\n  |&gt; Revamp.replace(\n       {|"([^"]*)"|}, /* Matches the content of string literals */\n       Revamp.replace(\n         "[A-Z]",\n         (letter) =&gt;\n           /* Matches uppercase letters */\n           "-" ++ letter |&gt; Js.String.toLowerCase\n       ) /* Convert to lower case and prefix with a dash */\n     )\n  |&gt; Js.log;\n/* Outputs:\n\n     let borderLeftColor = "border-left-color";\n     let borderRightColor = "border-right-color";\n   */\n</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-comment">(**\n * OCaml\n *\n * Dasherize camelCased identifiers inside string literals\n *)</span>\n\n<span class="hljs-keyword">let</span> code = {|\n  <span class="hljs-keyword">let</span> borderLeftColor = <span class="hljs-string">"borderLeftColor"</span>;\n  <span class="hljs-keyword">let</span> borderRightColor = <span class="hljs-string">"borderRightColor"</span>;\n|}\n\n<span class="hljs-keyword">let</span> <span class="hljs-literal">()</span> =\n  code |&gt; <span class="hljs-type">Revamp</span>.replace {|<span class="hljs-string">"([^"</span>]*)<span class="hljs-string">"|}                (* Matches the content of string literals *)\n            (Revamp.replace "</span>[<span class="hljs-type">A</span>-<span class="hljs-type">Z</span>]<span class="hljs-string">" (fun letter -&gt;    (* Matches uppercase letters *)\n              "</span>-<span class="hljs-string">" ^ letter |&gt; Js.String.toLowerCase)) (* Convert to lower case and prefix with a dash *)\n       |&gt; Js.log\n\n(* Outputs:\n\n  let borderLeftColor = "</span>border-left-color<span class="hljs-string">";\n  let borderRightColor = "</span>border-right-color<span class="hljs-string">";\n*)</span></code></pre>\n      </div>\n    </div>\n  \n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install --save @glennsl/bs-revamp</code></pre></div>\n<p>Then add <code>@glennsl/bs-revamp</code> to <code>bs-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>{\n  ...\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"@glennsl/bs-revamp"</span>]\n}</code></pre></div>\n<h2 id="goals"><a href="#goals" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Goals</h2>\n<ul>\n<li>A sane, safe API</li>\n<li>Low performance overhead (secondary)</li>\n</ul>\n<h2 id="non-goals"><a href="#non-goals" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Non-goals</h2>\n<ul>\n<li>Full feature parity</li>\n</ul>\n<h2 id="documentation"><a href="#documentation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Documentation</h2>\n<p>For the moment, please see the interface file, <a href="https://github.com/glennsl/bs-revamp/blob/master/src/Revamp.rei">Revamp.rei</a>.</p>\n<h2 id="changes"><a href="#changes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changes</h2>\n<h3 id="010"><a href="#010" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.1.0</h3>\n<ul>\n<li>Changed type of <code>captures</code> from <code>Sequence.t(array(string))</code> to <code>Sequence.t(list(option(string)))</code> because the former was unsound.</li>\n<li>Added <code>Match.match</code> and <code>Match.captures</code></li>\n<li>Deprecated <code>Match.matches</code> due to being unsound</li>\n</ul>\n',homepageUrl:"https://github.com/glennsl/bs-revamp#readme",repositoryUrl:"https://github.com/glennsl/bs-revamp",npmUrl:"https://www.npmjs.com/package/%40glennsl%2Fbs-revamp",issuesUrl:"https://github.com/glennsl/bs-revamp/issues",slug:"/package/@glennsl/bs-revamp"}},pathContext:{id:"@glennsl/bs-revamp"}}}});
//# sourceMappingURL=path---package-glennsl-bs-revamp-3ec1a596083c1e0b5a2e.js.map