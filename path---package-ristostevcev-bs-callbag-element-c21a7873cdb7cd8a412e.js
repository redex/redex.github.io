webpackJsonp([0xbd177ecfc40],{1387:function(e,a){e.exports={data:{package:{type:"published",id:"@ristostevcev/bs-callbag-element",name:"@ristostevcev/bs-callbag-element",version:"1.2.0",category:"binding",flags:[],platforms:["browser"],description:"Callbag elements for declaredom",keywords:["callbag","dom"],license:"BSD-3-Clause",updated:"2019-11-07T20:30:51.631Z",stars:0,score:.4716305340156278,quality:.6066845896723899,popularity:.011888218329659247,maintenance:.8156122305672291,readme:'<h1 id="bs-callbag-element"><a href="#bs-callbag-element" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-callbag-element</h1>\n<p><a href="https://www.npmjs.com/package/@ristostevcev/bs-callbag-element"><img src="https://img.shields.io/npm/v/@ristostevcev/bs-callbag-element.svg?style=flat" alt="Latest release"></a>\n<a href="https://github.com/Risto-Stevcev/bs-callbag-element/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@ristostevcev/bs-callbag-element.svg?style=flat" alt="License"></a></p>\n<p>Callbag elements for declaredom</p>\n<h2 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm i --save @ristostevcev/bs-callbag-element</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>Callbag elements provide a way to create dynamically updated elements using\ncallbags. This approach is declarative - it uses callbag streams and morphdom\'s\nvirtual dom for fast and efficient updating.</p>\n<p>The following example creates a clock by mapping a 1-second callbag interval to\nthe current date:</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> clock =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">CallbagBasics</span> <span class="hljs-keyword">in</span>\n  interval <span class="hljs-number">1000</span>\n  |&gt; map (<span class="hljs-keyword">fun</span> _ -&gt; span [|text @@ <span class="hljs-type">Js</span>.<span class="hljs-type">Date</span>.toString (<span class="hljs-type">Js</span>.<span class="hljs-type">Date</span>.make <span class="hljs-literal">()</span>)|])\n  |&gt; <span class="hljs-type">CallbagElement</span>.make</code></pre></div>\n<p>The advantage of this approach for frontend web app development is simplicity\nand interop since callbag elements are just plain DOM elements. And it gives\ndevs the ability to further optimize by batching updates with\n<code>requestAnimationFrame</code> to avoid unnecessary repaints.</p>\n<p>This element is a web component so make sure to include a webcomponents\npolyfill.</p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<p>See <code>example.html</code></p>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>See LICENSE</p>\n',homepageUrl:"https://github.com/Risto-Stevcev/bs-callbag-element",repositoryUrl:"https://github.com/Risto-Stevcev/bs-callbag-element",npmUrl:"https://www.npmjs.com/package/%40ristostevcev%2Fbs-callbag-element",issuesUrl:"https://github.com/Risto-Stevcev/bs-callbag-element/issues",slug:"/package/@ristostevcev/bs-callbag-element"}},pathContext:{id:"@ristostevcev/bs-callbag-element"}}}});
//# sourceMappingURL=path---package-ristostevcev-bs-callbag-element-c21a7873cdb7cd8a412e.js.map