webpackJsonp([0xcbbe03b88a97],{1185:function(e,r){e.exports={data:{package:{id:"refmterr",stars:0,name:"refmterr",version:"3.0.7",category:"tool",flags:[],platforms:["native"],description:"Reason Formatting of Errors",keywords:["development tools"],license:null,updated:"2018-02-27T11:58:43.619Z",type:"published",score:.533396275989542,quality:.5234454066954777,popularity:.08050312506205654,maintenance:.9948187434547968,readme:'<h1 id="refmterr-reason-formatting-of-errors-for-native-builds"><a href="#refmterr-reason-formatting-of-errors-for-native-builds" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>refmterr</code>: Reason Formatting of Errors for Native Builds.</h1>\n<h4 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h4>\n<p><img src="https://raw.githubusercontent.com/esy-ocaml/BetterErrors/master/demo.png" alt="Demo"></p>\n<h2 id="support"><a href="#support" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Support</h2>\n<ul>\n<li>This is an <a href="https://github.com/esy-ocaml/esy"><code>esy</code></a> compatible package.</li>\n<li>Supports <code>ocamlopt/ocamlc</code> versions <code>4.02.3</code>-<code>4.05</code>.</li>\n</ul>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p><strong>Package Builds:</strong></p>\n<p>Add a dependency on <code>refmterr</code>, and <code>@opam/reason</code> in your <code>dependencies</code>, and\nthen you will be able to wrap your build commands with <code>refmterr</code>. For example,\ninstead of using <code>make build</code> as your build command, use <code>remfterr make build</code>.</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"esy"</span>: {\n    <span class="hljs-string">"build"</span>:  [\n      [<span class="hljs-string">"refmterr make build"</span>]\n    ],\n    ...\n  },\n\n  <span class="hljs-string">"dependencies"</span>: {\n    <span class="hljs-string">"refmterr"</span>: <span class="hljs-string">"^3.0.0"</span>,\n    <span class="hljs-string">"@opam/reason"</span>: <span class="hljs-string">"^3.0.0"</span>\n  }\n}</code></pre></div>\n<p><strong>Command Line Usage:</strong></p>\n<p>You can wrap any command that outputs <code>ocamlopt/ocamlc</code> error messages.  For\nexample, from your sandboxed project with the above <code>package.json</code>, you could\nrun:</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>esy refmterr ocamlopt -pp refmt someFile.re</code></pre></div>\n<p>and have any errors/warnings printed more readably.</p>\n<h2 id="contributing"><a href="#contributing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributing</h2>\n<ul>\n<li>Install the latest esy <code>npm install -g esy</code>.</li>\n<li><code>git clone</code> this repo, <code>cd</code> into it, then run:</li>\n</ul>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>esy install\nesy build\nesy ./runTests.sh</code></pre></div>\n',homepageUrl:"https://github.com/esy-ocaml/BetterErrors#readme",repositoryUrl:"https://github.com/esy-ocaml/BetterErrors",npmUrl:"https://www.npmjs.com/package/refmterr",issuesUrl:"https://github.com/esy-ocaml/BetterErrors/issues",slug:"/package/refmterr"}},pathContext:{id:"refmterr"}}}});
//# sourceMappingURL=path---package-refmterr-d560edbf66716125e270.js.map