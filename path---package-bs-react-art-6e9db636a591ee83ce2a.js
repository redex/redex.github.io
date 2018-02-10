webpackJsonp([0xa278199ec0ed],{1063:function(s,a){s.exports={data:{package:{id:"bs-react-art",stars:null,name:"bs-react-art",version:"0.3.1",category:"binding",flags:["neglected"],platforms:["browser"],description:"Reason bindings for ReactART",keywords:["react","graphics"],license:"MIT",updated:"2018-02-06T20:56:02.924Z",type:"published",score:.20474261947994804,quality:.267030480480244,popularity:.023227362584754264,maintenance:.33286828123203094,readme:'<h1 id="bs-react-art"><a href="#bs-react-art" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-react-art</h1>\n<blockquote>\n<p>Reason bindings for ReactART</p>\n</blockquote>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-console"><code>$ npm install --save bs-react-art</code></pre></div>\n<p>then <code>bs-react-art</code> to <code>bs-dependencies</code> in your <code>bsconfig.json</code></p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>&lt;<span class="hljs-type">ReactArt</span>.<span class="hljs-type">Surface</span> width=<span class="hljs-number">100</span> height=<span class="hljs-number">100</span>&gt;\n  &lt;<span class="hljs-type">ReactArt</span>.<span class="hljs-type">Shape</span>\n    x=<span class="hljs-number">50</span>\n    y=<span class="hljs-number">300</span>\n    d=<span class="hljs-type">ReactArt</span>.<span class="hljs-type">Path</span>.(\n        make ()\n          |&gt; moveTo x::<span class="hljs-number">0</span> y::<span class="hljs-number">50</span>\n          |&gt; line x::<span class="hljs-number">10</span> y::<span class="hljs-number">10</span>\n          |&gt; arc x::<span class="hljs-number">50</span> y::<span class="hljs-number">50</span> rx::<span class="hljs-number">10</span> ry::<span class="hljs-number">50</span> outer::<span class="hljs-number">10</span> counterClockwise::<span class="hljs-literal">false</span> rotation::<span class="hljs-number">300</span>\n          |&gt; close\n      )\n    fill=(<span class="hljs-type">String</span> <span class="hljs-string">"#c40"</span>)\n  /&gt;\n&lt;/<span class="hljs-type">ReactArt</span>.<span class="hljs-type">Surface</span>&gt;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">883</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:null,repositoryUrl:null,npmUrl:"https://www.npmjs.com/package/bs-react-art",issuesUrl:null,slug:"/package/bs-react-art"}},pathContext:{id:"bs-react-art"}}}});
//# sourceMappingURL=path---package-bs-react-art-6e9db636a591ee83ce2a.js.map