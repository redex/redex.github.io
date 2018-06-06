webpackJsonp([74120018824650],{1193:function(e,s){e.exports={data:{package:{id:"ppx_bsx",stars:24,name:"ppx_bsx",version:"1.0.5",category:"tool",flags:[],platforms:["any"],description:"OCaml JSX for ReasonReact",keywords:["react","ppx"],license:"MIT",updated:"2018-05-25T03:45:12.693Z",type:"published",score:.5902766663216225,quality:.7429499488866094,popularity:.05499323107256012,maintenance:.9946972879435532,readme:'<h1 id="ppx_bsx"><a href="#ppx_bsx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ppx_bsx</h1>\n<p>OCaml JSX for <a href="https://github.com/reasonml/reason-react/">ReasonReact</a>.</p>\n<h2 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h2>\n<ul>\n<li><code>yarn add -D ppx_bsx</code> or <code>npm i --save-dev ppx_bsx</code></li>\n<li>add <code>"ppx-flags": ["./node_modules/ppx_bsx/bin/ppx_bsx.exe"]</code> to <code>bsconfig.json</code></li>\n</ul>\n<p>👉 <a href="https://github.com/cxa/ppx_bsx_example">https://github.com/cxa/ppx_bsx_example</a></p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>This is how it feel:</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code>[%bsx <span class="hljs-string">"\n  &lt;Container&gt;\n    &lt;h1&gt;Nice example&lt;/h1&gt;\n    &lt;nav className="</span>(styles <span class="hljs-string">"sidebar"</span>)<span class="hljs-string">"&gt;\n      &lt;Router.Route path=\'/\' component="</span>sidebar<span class="hljs-string">" /&gt;\n    &lt;/nav&gt;\n    &lt;div className="</span>(styles <span class="hljs-string">"content"</span>)<span class="hljs-string">"&gt;\n      &lt;Router.Switch&gt;"</span>(mk_switches link_groups)<span class="hljs-string">"&lt;/Router.Switch&gt;\n    &lt;/div&gt;\n  &lt;/Container&gt;\n"</span>]</code></pre></div>\n<h3 id="simple-rules"><a href="#simple-rules" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Simple rules</h3>\n<ul>\n<li>When you need OCaml expression, wrap it with double quotation marks, otherwise</li>\n<li>For string literal value, just use single quotation marks</li>\n<li>For singe text node, you don\'t need to wrap it to <code>ReasonReact.stringToElement</code>, (surprisedly) <code>&#x3C;div>Hello, World&#x3C;/div></code> is accepted</li>\n</ul>\n<h3 id="bonus"><a href="#bonus" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bonus</h3>\n<p>For non-ascii string, you can simply use string literal like <code>{|中文|}</code>, <code>ppx_bsx</code> will convert to <code>{j|中文|j}</code> automatically.</p>\n',homepageUrl:"https://github.com/cxa/ppx_bsx#readme",repositoryUrl:"https://github.com/cxa/ppx_bsx",npmUrl:"https://www.npmjs.com/package/ppx_bsx",issuesUrl:"https://github.com/cxa/ppx_bsx/issues",slug:"/package/ppx_bsx"}},pathContext:{id:"ppx_bsx"}}}});
//# sourceMappingURL=path---package-ppx-bsx-ae35d3458e350316bd5b.js.map