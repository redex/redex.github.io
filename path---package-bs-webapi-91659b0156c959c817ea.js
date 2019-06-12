webpackJsonp([0xde350cf39f4c],{1264:function(e,n){e.exports={data:{package:{type:"published",id:"bs-webapi",name:"bs-webapi",version:"0.15.2",category:"binding",flags:[],platforms:["browser"],description:"Reason + BuckleScript bindings to DOM",keywords:["dom"],license:"MIT",updated:"2019-05-25T14:56:31.812Z",stars:203,score:.6626903615156972,quality:.8288188007259518,popularity:.18885994805904102,maintenance:.9941249699349923,readme:'<h1 id="bs-webapi"><a href="#bs-webapi" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-webapi</h1>\n<p>Experimental bindings to the DOM and other Web APIs.</p>\n<p><a href="https://npmjs.org/bs-webapi"><img src="https://img.shields.io/npm/v/bs-webapi.svg" alt="npm"></a>\n<a href="https://travis-ci.org/reasonml-community/bs-webapi-incubator"><img src="https://img.shields.io/travis/reasonml-community/bs-webapi-incubator/master.svg" alt="Travis"></a>\n<a href="https://github.com/reasonml-community/bs-webapi-incubator/issues"><img src="https://img.shields.io/github/issues/reasonml-community/bs-webapi-incubator.svg" alt="Issues"></a>\n<a href="https://github.com/reasonml-community/bs-webapi-incubator/commits/master"><img src="https://img.shields.io/github/last-commit/reasonml-community/bs-webapi-incubator.svg" alt="Last Commit"></a></p>\n<p>The bindings are currently undocumented, but as the code mostly just consists of external declarations with type signatures, the code itself is fairly self-documenting. The bindings generally also correspond very well to the Web APIs they bind to, so using MDN along with GitHub should go a long way.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install bs-webapi</code></pre></div>\n<p>Then add <code>bs-webapi</code> to <code>bs-dependencies</code> in your <code>bsconfig.json</code>. A minimal example:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>{\n  <span class="hljs-string">"name"</span>: <span class="hljs-string">"my-thing"</span>,\n  <span class="hljs-string">"sources"</span>: <span class="hljs-string">"src"</span>,\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"bs-webapi"</span>]\n}</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>See the <a href="https://github.com/reasonml-community/bs-webapi-incubator/blob/master/examples/">examples folder</a></p>\n<p>Please only use the modules exposed through the toplevel module <code>Webapi</code>, for example <code>Webapi.Dom.Element</code>. In particular, don\'t use the \'flat\' modules like <code>Webapi__Dom__Element</code> as these are considered private and are not guaranteed to be backwards-compatible.</p>\n<h2 id="some-notes-on-the-dom-api"><a href="#some-notes-on-the-dom-api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Some notes on the DOM API</h2>\n<p>The DOM API is mostly organized into interfaces and relies heavily on inheritance. The ergonomics of the API is also heavily dependent on dynamic typing, which makes it somewhat challenging to implement a thin binding layer that is both safe and ergonomic. To achieve this we employ subtyping and implementation inheritance, concepts which aren\'t very idiomatic to OCaml (or Reason), but all the more beneficial to understand in order to be able to use these bindings effectively.</p>\n<h3 id="subtyping"><a href="#subtyping" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Subtyping</h3>\n<p>The Dom types, and the relationships between them, are actually defined in the <code>Dom</code> module that ships with <code>bs-platform</code> (<a href="https://github.com/glennsl/bucklescript/blob/master/jscomp/others/dom.mli">Source code</a>), where you\'ll find a bunch of types that look like this:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> _element(\'a);\n<span class="hljs-keyword">type</span> element_like(\'a) = node_like(_element(\'a));\n<span class="hljs-keyword">type</span> element = element_like(_baseClass);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> <span class="hljs-symbol">\'a</span> _element\n<span class="hljs-keyword">type</span> <span class="hljs-symbol">\'a</span> element_like = <span class="hljs-symbol">\'a</span> _element node_like\n<span class="hljs-keyword">type</span> element = _baseClass element_like</code></pre>\n      </div>\n    </div>\n  \n<p>This is subtyping implemented with abstract types and phantom arguments. The details of how this works isn\'t very important (but see <a href="https://github.com/reasonml-community/bs-webapi-incubator/pull/23">#23</a> for a detailed explanation of how exactly this trickery works) in order to just use them, but there are a few things you should know:</p>\n<ul>\n<li>If you expand the alias of a concrete DOM type, you\'ll discover it\'s actually a list of abstract types. e.g. <code>element</code> expands to <code>_baseClass _element _node _eventTarget_like</code> This means <code>element</code> is a subtype of <code>_element</code>, <code>_node</code> and <code>_eventTarget_like</code>.</li>\n<li>The <code>_like</code> type are "open" (because they have a type variable). This means that a function accepting an <code>\'a element_like</code> will accept any "supertype" of <code>element_like</code>. A function accepting just an <code>element</code> will only accept an <code>element</code> (Technically <code>element</code> is actually a "supertype" of <code>element_like</code> too).</li>\n</ul>\n<p>This system works exceptionally well, but has one significant flaw: It makes type errors even more complicated than they normally are. If you know what to look for it\'s not that bad, but unfortunately the formatting of these errors don\'t make looking for it any easier. We hope to improve that in other ways (see <a href="https://github.com/reasonml/BetterErrors">BetterErrors</a>)</p>\n<h3 id="implementation-inheritance"><a href="#implementation-inheritance" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Implementation inheritance</h3>\n<p>If you\'ve looked through the source code a bit, you\'ve likely come across code like this:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">include</span> <span class="hljs-type">Webapi__Dom__EventTarget</span>.<span class="hljs-type">Impl</span>({ <span class="hljs-keyword">type</span> nonrec t = t });\n<span class="hljs-keyword">include</span> <span class="hljs-type">Webapi__Dom__Node</span>.<span class="hljs-type">Impl</span>({ <span class="hljs-keyword">type</span> nonrec t = t });\n<span class="hljs-keyword">include</span> <span class="hljs-type">Webapi__Dom__ParentNode</span>.<span class="hljs-type">Impl</span>({ <span class="hljs-keyword">type</span> nonrec t = t });\n<span class="hljs-keyword">include</span> <span class="hljs-type">Webapi__Dom__NonDocumentTypeChildNode</span>.<span class="hljs-type">Impl</span>({ <span class="hljs-keyword">type</span> nonrec t = t });\n<span class="hljs-keyword">include</span> <span class="hljs-type">Webapi__Dom__ChildNode</span>.<span class="hljs-type">Impl</span>({ <span class="hljs-keyword">type</span> nonrec t = t });\n<span class="hljs-keyword">include</span> <span class="hljs-type">Webapi__Dom__Slotable</span>.<span class="hljs-type">Impl</span>({ <span class="hljs-keyword">type</span> nonrec t = t });\n<span class="hljs-keyword">include</span> <span class="hljs-type">Impl</span>({ <span class="hljs-keyword">type</span> nonrec t = t });</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">include</span>\n  <span class="hljs-type">Webapi__Dom__EventTarget</span>.<span class="hljs-type">Impl</span>(<span class="hljs-keyword">struct</span> <span class="hljs-keyword">type</span> nonrec t = t[@@nonrec ] <span class="hljs-keyword">end</span>)\n<span class="hljs-keyword">include</span> <span class="hljs-type">Webapi__Dom__Node</span>.<span class="hljs-type">Impl</span>(<span class="hljs-keyword">struct</span> <span class="hljs-keyword">type</span> nonrec t = t[@@nonrec ] <span class="hljs-keyword">end</span>)\n<span class="hljs-keyword">include</span> <span class="hljs-type">Webapi__Dom__ParentNode</span>.<span class="hljs-type">Impl</span>(<span class="hljs-keyword">struct</span> <span class="hljs-keyword">type</span> nonrec t = t[@@nonrec ] <span class="hljs-keyword">end</span>)\n<span class="hljs-keyword">include</span>\n  <span class="hljs-type">Webapi__Dom__NonDocumentTypeChildNode</span>.<span class="hljs-type">Impl</span>(<span class="hljs-keyword">struct</span>\n                                               <span class="hljs-keyword">type</span> nonrec t = t[@@nonrec ]\n                                             <span class="hljs-keyword">end</span>)\n<span class="hljs-keyword">include</span> <span class="hljs-type">Webapi__Dom__ChildNode</span>.<span class="hljs-type">Impl</span>(<span class="hljs-keyword">struct</span> <span class="hljs-keyword">type</span> nonrec t = t[@@nonrec ] <span class="hljs-keyword">end</span>)\n<span class="hljs-keyword">include</span> <span class="hljs-type">Webapi__Dom__Slotable</span>.<span class="hljs-type">Impl</span>(<span class="hljs-keyword">struct</span> <span class="hljs-keyword">type</span> nonrec t = t[@@nonrec ] <span class="hljs-keyword">end</span>)\n<span class="hljs-keyword">include</span> <span class="hljs-type">Impl</span>(<span class="hljs-keyword">struct</span> <span class="hljs-keyword">type</span> nonrec t = t[@@nonrec ] <span class="hljs-keyword">end</span>)</code></pre>\n      </div>\n    </div>\n  \n<p>This is the implementation inheritance. Each "inheritable" module defines an "Impl" module where all its exported functions are defined. <code>include Webapi__Dom__Node.Impl { type nonrec t = t };</code> means that all the functions in <code>Webapi__Dom__Node.Impl</code> should be included in this module, but with the <code>t</code> type of that module replaced by the <code>t</code> type of this one. And that\'s it, it now has all the functions.</p>\n<p>Implementation inheritance is used instead of subtyping to make it easier to understand which functions operate on any given "subject". If you have an <code>element</code> and you need to use a function defined in <code>Node</code>, let\'s say <code>removeChild</code> you cannot just use <code>Node.removeChild</code>. Instead you need to use <code>Element.removeChild</code>, which you can since <code>Element</code> inherits from <code>Node</code>. As a general rule, always use the function in the module corresponding to the type you have. You\'ll find this makes it very easy to see what types you\'re dealing with just by reading the code.</p>\n<h2 id="changes"><a href="#changes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changes</h2>\n<h3 id="0152"><a href="#0152" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.15.2</h3>\n<ul>\n<li>Added <code>File.size</code></li>\n</ul>\n<h3 id="0151"><a href="#0151" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.15.1</h3>\n<ul>\n<li>Added <code>URLSearchParams.forEach</code></li>\n<li>Added <code>Element.scrollBy</code> and <code>Element.srollByWithOptions</code></li>\n</ul>\n<h3 id="0150"><a href="#0150" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.15.0</h3>\n<ul>\n<li>(Breaking) Changed <code>DomRect</code> coordinates to use <code>float</code> instead of <code>int</code></li>\n</ul>\n<h3 id="0144"><a href="#0144" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.14.4</h3>\n<ul>\n<li>Added <code>File.name</code></li>\n</ul>\n<h3 id="0143"><a href="#0143" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.14.3</h3>\n<ul>\n<li>Added <code>width</code>, <code>height</code>, <code>setWidth</code> and <code>setHeight</code> to <code>CanvasElement</code></li>\n</ul>\n<h3 id="0140"><a href="#0140" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.14.0</h3>\n<ul>\n<li>Removed deprecated <code>Webapi.Dom.onload</code> function</li>\n<li>Removed deprecated <code>Webapi.File.Url</code> module alias</li>\n<li>Restructured internal module layout (non-breaking for modules accessed through the <code>Webapi</code> top-level module, but breaking if internal <code>*Re</code> modules have been accessed directly)</li>\n<li>Enforce private modules (effectively a formality and non-breaking)</li>\n</ul>\n<h3 id="0136"><a href="#0136" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.13.6</h3>\n<ul>\n<li>Added <code>HtmlElement.focusPreventScroll</code></li>\n<li>Refined return type of <code>Node.cloneNode</code> and <code>Node.cloneDeepNode</code> so it now returns the specific type of the cloned node.</li>\n</ul>\n<h3 id="0135"><a href="#0135" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.13.5</h3>\n<ul>\n<li>Added <code>Element.scrollTo</code>, <code>Element.scrollToWithOptions</code></li>\n</ul>\n<h3 id="0134"><a href="#0134" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.13.4</h3>\n<ul>\n<li>Added <code>URLSearchParams.makeWithDict</code> and <code>URLSearchParams.makeWithArray</code></li>\n</ul>\n<h3 id="0133"><a href="#0133" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.13.3</h3>\n<ul>\n<li>Added <code>bs.return nullable</code> to <code>URLSearchParams.get</code> since it returns <code>null</code>, not <code>undefined</code> and therefore does not autmatically conform to the runtime representation of <code>option</code> as previosuly assumed.</li>\n</ul>\n<h3 id="0132"><a href="#0132" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.13.2</h3>\n<ul>\n<li>Fixed signature of <code>NamedNodeMap.toArray</code>, which returned <code>element</code> but should return <code>attr</code> (considere non-breaking since it was just plain wrong)</li>\n<li>Added <code>add...</code> and <code>removePopStateEventListener</code> to <code>Window</code></li>\n<li>Added <code>add...</code> and <code>remove...</code> functions for touch and animation event listeners to <code>EventTarget</code></li>\n</ul>\n<h3 id="0131"><a href="#0131" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.13.1</h3>\n<ul>\n<li>Added <code>add...</code> and <code>remove...</code> functions for drag event listeners to <code>EventTarget</code></li>\n</ul>\n<h3 id="0130"><a href="#0130" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.13.0</h3>\n<ul>\n<li>(Breaking) Requires bs-platform > 4.0.0</li>\n<li>(Breaking) Changed <code>FocusEvent.relatedTarget</code> to return <code>option</code></li>\n<li>Added <code>HtmlFormElement</code> and <code>HtmlInputElement</code></li>\n</ul>\n<h3 id="0120"><a href="#0120" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.12.0</h3>\n<ul>\n<li>(Breaking) Fixed return type if <code>StorageEvent.oldValue</code> and <code>StorageEvent.newValue</code>. They should be <code>nullable</code>, but were not.</li>\n<li>Added <code>Url</code> and <code>UrlSearchParams</code></li>\n<li>Deprecated <code>Webapi.File.Url</code> in favor of <code>Webapi.Url</code></li>\n</ul>\n<h3 id="0110"><a href="#0110" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.11.0</h3>\n<ul>\n<li><code>EventTarget.dispatchEvent</code> now take a <code>Dom.event_like(_)</code> instead of just <code>Dom.event</code>, so it will accept any event subtype.</li>\n<li><code>Window.pageXOffset</code>, <code>pageYOffset</code>, <code>scrollX</code>, <code>scrollY</code>, <code>scrollLeft</code> and <code>scrollTop</code> now return <code>float</code>s instead of <code>int</code>s, and <code>Window.scroll</code>, <code>scrollBy</code>, <code>scrollTo</code>, <code>setScrollLeft</code> and <code>setScrollTop</code> take <code>float</code>s instead of <code>int</code>s</li>\n<li><code>HtmlElement.offsetParent</code> now returns an <code>option</code></li>\n<li><code>Selection.anchorNode</code> and <code>Selection.focusNode</code> now return <code>option</code>s</li>\n<li><code>Element.closest</code> now returns an <code>option</code></li>\n</ul>\n<h3 id="0100"><a href="#0100" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.10.0</h3>\n<ul>\n<li>Added inheritance of <code>HtmlElement</code> and its ancestors to <code>HtmlImageElement</code></li>\n<li>Deprecated <code>HtmlImageElement.onload</code></li>\n<li>Fixed inconsistencies with <code>HtmlImageElement.src</code> and <code>HtmlImageElement.getSrc</code>, breaking the API</li>\n<li>Fleshed out <code>HtmlImageElement</code></li>\n</ul>\n<h3 id="091"><a href="#091" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.9.1</h3>\n<ul>\n<li>Renamed <code>Document.docType</code> to <code>Document.doctype</code> to fix #95</li>\n</ul>\n<h3 id="090"><a href="#090" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.9.0</h3>\n<ul>\n<li>Support <code>bs-platform@3.0.0</code>. If your app isn\'t using that version, then don\'t upgrade to <code>0.9.0</code>; otherwise, please do!</li>\n</ul>\n<h3 id="080"><a href="#080" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.8.0</h3>\n<ul>\n<li>Added <code>EventTarget.unsafeAsDocument</code>, <code>EventTarget.unsafeAsElement</code> and <code>EventTarget.unsafeAsWindow</code> functions</li>\n<li>Removed deprecated <code>Bs_webapi</code> module`</li>\n<li>Added event-specific listener APIs to <code>EventTarget</code>, e.g. <code>EventTarget.addMouseMoveListener(mouseEvent => ...)</code></li>\n<li>Added <code>requestCancellableAnimationFrame</code> and <code>cancelAnimationFrame</code></li>\n<li>Fixed msising <code>@bs.return</code> annotations causing type unsoundness</li>\n<li>Fixed typo in encoding of <code>insertPosition</code> type</li>\n<li>Added <code>Dom.HtmlImageElement</code>, <code>File</code> and <code>File.Url</code></li>\n<li>Fixed <code>HtmlElement.offsetParent</code> returning <code>int</code> instead of <code>Dom.Element</code></li>\n</ul>\n<h3 id="070"><a href="#070" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.7.0</h3>\n<ul>\n<li>Added <code>Webapi</code> module, Deprecated <code>Bs_webapi</code></li>\n<li>Removed deprecated Storage API</li>\n<li>Add <code>Document.unsafeAshtmlDocument</code>, <code>Element.unsafeAsHtmlElement</code>. Deprecated <code>Document.asHtmlDocument</code>, <code>Element.asHtmlElement</code>, <code>HtmlEleement.ofElement</code>.</li>\n<li>Changed <code>Dom.history</code> and <code>Dom.location</code> to use <code>window</code> instead of <code>document</code></li>\n</ul>\n<h3 id="061"><a href="#061" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.6.1</h3>\n<ul>\n<li>Fix incorrect heuristic in <code>HtmlElement.ofElement</code></li>\n</ul>\n<h3 id="060"><a href="#060" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.6.0</h3>\n<ul>\n<li>Renamed createText to CreateTextNode, according to spec</li>\n<li>Deprecated Storage API, it\'s been upstreamed to <code>bs-platform</code> as <code>Dom.Storage</code></li>\n<li>Removed <code>ReasonJs</code>  namespace. Use <code>Bs_webapi</code>  instead</li>\n</ul>\n',
homepageUrl:"https://github.com/reasonml-community/bs-webapi-incubator#readme",repositoryUrl:"https://github.com/reasonml-community/bs-webapi-incubator",npmUrl:"https://www.npmjs.com/package/bs-webapi",issuesUrl:"https://github.com/reasonml-community/bs-webapi-incubator/issues",slug:"/package/bs-webapi"}},pathContext:{id:"bs-webapi"}}}});
//# sourceMappingURL=path---package-bs-webapi-91659b0156c959c817ea.js.map