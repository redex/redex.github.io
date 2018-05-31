webpackJsonp([0xde350cf39f4c],{1139:function(e,s){e.exports={data:{package:{id:"bs-webapi",stars:111,name:"bs-webapi",version:"0.8.3",category:"binding",flags:[],platforms:["browser"],description:"Reason + BuckleScript bindings to DOM",keywords:["dom"],license:"MIT",updated:"2018-02-28T07:33:36.753Z",type:"published",score:.6524019254337278,quality:.8534534457786132,popularity:.14346002997321072,maintenance:.9890139463129146,readme:'<h1 id="bs-webapi"><a href="#bs-webapi" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-webapi</h1>\n<p>Experimental bindings to the DOM and other Web APIs.</p>\n<p><a href="https://npmjs.org/bs-webapi"><img src="https://img.shields.io/npm/v/bs-webapi.svg" alt="npm"></a>\n<a href="https://travis-ci.org/reasonml-community/bs-webapi-incubator"><img src="https://img.shields.io/travis/reasonml-community/bs-webapi-incubator/master.svg" alt="Travis"></a>\n<a href="https://github.com/reasonml-community/bs-webapi-incubator/issues"><img src="https://img.shields.io/github/issues/reasonml-community/bs-webapi-incubator.svg" alt="Issues"></a>\n<a href="https://github.com/reasonml-community/bs-webapi-incubator/commits/master"><img src="https://img.shields.io/github/last-commit/reasonml-community/bs-webapi-incubator.svg" alt="Last Commit"></a></p>\n<p>The bindings are currently undocumented, but as the code mostly just consists of external declarations with type signatures, the code itself is fairly self-documenting. The bindings generally also correspond very well to the Web APIs they bind to, so using MDN along with GitHub should go a long way.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install bs-webapi</code></pre></div>\n<p>Then add <code>bs-webapi</code> to <code>bs-dependencies</code> in your <code>bsconfig.json</code>. A minimal example:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>{\n  <span class="hljs-string">"name"</span>: <span class="hljs-string">"my-thing"</span>,\n  <span class="hljs-string">"sources"</span>: <span class="hljs-string">"src"</span>,\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"bs-webapi"</span>]\n}</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>See the <a href="https://github.com/reasonml-community/bs-webapi-incubator/blob/master/examples/">examples folder</a></p>\n<h2 id="some-notes-on-the-dom-api"><a href="#some-notes-on-the-dom-api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Some notes on the DOM API</h2>\n<p>The DOM API is mostly organized into interfaces and relies heavily on inheritance. The ergonomics of the API is also heavily dependent on dynamic typing, which makes it somewhat challenging to implement a thin binding layer that is both safe and ergonomic. To achieve this we employ subtyping and implementation inheritance, concepts which aren\'t very idiomatic to OCaml (or Reason), but all the more beneficial to understand in order to be able to use these bindings effectively.</p>\n<h3 id="subtyping"><a href="#subtyping" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Subtyping</h3>\n<p>The Dom types, and the relationships between them, are actually defined in the <code>Dom</code> module that ships with <code>bs-platform</code> (<a href="https://github.com/glennsl/bucklescript/blob/master/jscomp/others/dom.mli">Source code</a>), where you\'ll find a bunch of types that look like this:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> _element(\'a);\n<span class="hljs-keyword">type</span> element_like(\'a) = node_like(_element(\'a));\n<span class="hljs-keyword">type</span> element = element_like(_baseClass);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> <span class="hljs-symbol">\'a</span> _element\n<span class="hljs-keyword">type</span> <span class="hljs-symbol">\'a</span> element_like = <span class="hljs-symbol">\'a</span> _element node_like\n<span class="hljs-keyword">type</span> element = _baseClass element_like</code></pre>\n      </div>\n    </div>\n  \n<p>This is subtyping implemented with abstract types and phantom arguments. The details of how this works isn\'t very important (but see <a href="https://github.com/reasonml-community/bs-webapi-incubator/pull/23">#23</a> for a detailed explanation of how exactly this trickery works) in order to just use them, but there are a few things you should know:</p>\n<ul>\n<li>If you expand the alias of a concrete DOM type, you\'ll discover it\'s actually a list of abstract types. e.g. <code>element</code> expands to <code>_baseClass _element _node _eventTarget_like</code> This means <code>element</code> is a subtype of <code>_element</code>, <code>_node</code> and <code>_eventTarget_like</code>.</li>\n<li>The <code>_like</code> type are "open" (because they have a type variable). This means that a function accepting an <code>\'a element_like</code> will accept any "supertype" of <code>element_like</code>. A function accepting just an <code>element</code> will only accept an <code>element</code> (Technically <code>element</code> is actually a "supertype" of <code>element_like</code> too).</li>\n</ul>\n<p>This system works exceptionally well, but has one significant flaw: It makes type errors even more complicated than they normally are. If you know what to look for it\'s not that bad, but unfortunately the formatting of these errors don\'t make looking for it any easier. We hope to improve that in other ways (see <a href="https://github.com/reasonml/BetterErrors">BetterErrors</a>)</p>\n<h3 id="implementation-inheritance"><a href="#implementation-inheritance" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Implementation inheritance</h3>\n<p>If you\'ve looked through the source code a bit, you\'ve likely come across code like this:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">include</span> <span class="hljs-type">EventTargetRe</span>.<span class="hljs-type">Impl</span>({ <span class="hljs-keyword">type</span> nonrec t = t });\n<span class="hljs-keyword">include</span> <span class="hljs-type">NodeRe</span>.<span class="hljs-type">Impl</span>({ <span class="hljs-keyword">type</span> nonrec t = t });\n<span class="hljs-keyword">include</span> <span class="hljs-type">ParentNodeRe</span>.<span class="hljs-type">Impl</span>({ <span class="hljs-keyword">type</span> nonrec t = t });\n<span class="hljs-keyword">include</span> <span class="hljs-type">NonDocumentTypeChildNodeRe</span>.<span class="hljs-type">Impl</span>({ <span class="hljs-keyword">type</span> nonrec t = t });\n<span class="hljs-keyword">include</span> <span class="hljs-type">ChildNodeRe</span>.<span class="hljs-type">Impl</span>({ <span class="hljs-keyword">type</span> nonrec t = t });\n<span class="hljs-keyword">include</span> <span class="hljs-type">SlotableRe</span>.<span class="hljs-type">Impl</span>({ <span class="hljs-keyword">type</span> nonrec t = t });\n<span class="hljs-keyword">include</span> <span class="hljs-type">Impl</span>({ <span class="hljs-keyword">type</span> nonrec t = t });</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">include</span> <span class="hljs-type">EventTargetRe</span>.<span class="hljs-type">Impl</span>(<span class="hljs-keyword">struct</span> <span class="hljs-keyword">type</span> nonrec t = t[@@nonrec ] <span class="hljs-keyword">end</span>)\n<span class="hljs-keyword">include</span> <span class="hljs-type">NodeRe</span>.<span class="hljs-type">Impl</span>(<span class="hljs-keyword">struct</span> <span class="hljs-keyword">type</span> nonrec t = t[@@nonrec ] <span class="hljs-keyword">end</span>)\n<span class="hljs-keyword">include</span> <span class="hljs-type">ParentNodeRe</span>.<span class="hljs-type">Impl</span>(<span class="hljs-keyword">struct</span> <span class="hljs-keyword">type</span> nonrec t = t[@@nonrec ] <span class="hljs-keyword">end</span>)\n<span class="hljs-keyword">include</span>\n  <span class="hljs-type">NonDocumentTypeChildNodeRe</span>.<span class="hljs-type">Impl</span>(<span class="hljs-keyword">struct</span> <span class="hljs-keyword">type</span> nonrec t = t[@@nonrec ] <span class="hljs-keyword">end</span>)\n<span class="hljs-keyword">include</span> <span class="hljs-type">ChildNodeRe</span>.<span class="hljs-type">Impl</span>(<span class="hljs-keyword">struct</span> <span class="hljs-keyword">type</span> nonrec t = t[@@nonrec ] <span class="hljs-keyword">end</span>)\n<span class="hljs-keyword">include</span> <span class="hljs-type">SlotableRe</span>.<span class="hljs-type">Impl</span>(<span class="hljs-keyword">struct</span> <span class="hljs-keyword">type</span> nonrec t = t[@@nonrec ] <span class="hljs-keyword">end</span>)\n<span class="hljs-keyword">include</span> <span class="hljs-type">Impl</span>(<span class="hljs-keyword">struct</span> <span class="hljs-keyword">type</span> nonrec t = t[@@nonrec ] <span class="hljs-keyword">end</span>)</code></pre>\n      </div>\n    </div>\n  \n<p>This is the implementation inheritance. Each "inheritable" module defines an "Impl" module where all its exported functions are defined. <code>include NodeRe.Impl { type nonrec t = t };</code> means that all the functions in <code>NodeRe.Impl</code> should be included in this module, but with the <code>t</code> type of that module replaced by the <code>t</code> type of this one. And that\'s it, it now has all the functions.</p>\n<p>Implementation inheritance is used instead of subtyping to make it easier to understand which functions operate on any given "subject". If you have an <code>element</code> and you need to use a function defined in <code>Node</code>, let\'s say <code>removeChild</code> you cannot just use <code>Node.removeChild</code>. Instead you need to use <code>Element.removeChild</code>, which you can since <code>Element</code> inherits from <code>Node</code>. As a general rule, always use the function in the module corresponding to the type you have. You\'ll find this makes it very easy to see what types you\'re dealing with just by reading the code.</p>\n<h2 id="changes"><a href="#changes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changes</h2>\n<h3 id="080"><a href="#080" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.8.0</h3>\n<ul>\n<li>Added <code>EventTarget.unsafeAsDocument</code>, <code>EventTarget.unsafeAsElement</code> and <code>EventTarget.unsafeAsWindow</code> functions</li>\n<li>Removed deprecated <code>Bs_webapi</code> module`</li>\n<li>Added event-specific listener APIs to <code>EventTarget</code>, e.g. <code>EventTarget.addMouseMoveListener(mouseEvent => ...)</code></li>\n<li>Added <code>requestCancellableAnimationFrame</code> and <code>cancelAnimationFrame</code></li>\n<li>Fixed msising <code>@bs.return</code> annotations causing type unsoundness</li>\n<li>Fixed typo in encoding of <code>insertPosition</code> type</li>\n<li>Added <code>Dom.HtmlImageElement</code>, <code>File</code> and <code>File.Url</code></li>\n<li>Fixed <code>HtmlElement.offsetParent</code> returning <code>int</code> instead of <code>Dom.Element</code></li>\n</ul>\n<h3 id="070"><a href="#070" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.7.0</h3>\n<ul>\n<li>Added <code>Webapi</code> module, Deprecated <code>Bs_webapi</code></li>\n<li>Removed deprecated Storage API</li>\n<li>Add <code>Document.unsafeAshtmlDocument</code>, <code>Element.unsafeAsHtmlElement</code>. Deprecated <code>Document.asHtmlDocument</code>, <code>Element.asHtmlElement</code>, <code>HtmlEleement.ofElement</code>.</li>\n<li>Changed <code>Dom.history</code> and <code>Dom.location</code> to use <code>window</code> instead of <code>document</code></li>\n</ul>\n<h3 id="061"><a href="#061" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.6.1</h3>\n<ul>\n<li>Fix incorrect heuristic in <code>HtmlElement.ofElement</code></li>\n</ul>\n<h3 id="060"><a href="#060" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.6.0</h3>\n<ul>\n<li>Renamed createText to CreateTextNode, according to spec</li>\n<li>Deprecated Storage API, it\'s been upstreamed to <code>bs-platform</code> as <code>Dom.Storage</code></li>\n<li>Removed <code>ReasonJs</code>  namespace. Use <code>Bs_webapi</code>  instead</li>\n</ul>\n',homepageUrl:"https://github.com/reasonml-community/bs-webapi-incubator#readme",repositoryUrl:"https://github.com/reasonml-community/bs-webapi-incubator",npmUrl:"https://www.npmjs.com/package/bs-webapi",issuesUrl:"https://github.com/reasonml-community/bs-webapi-incubator/issues",slug:"/package/bs-webapi"}},pathContext:{id:"bs-webapi"}}}});
//# sourceMappingURL=path---package-bs-webapi-8b09736803cc3eb72192.js.map