webpackJsonp([0xcc991ba259f3],{1044:function(e,t){e.exports={data:{package:{id:"bs-webapi",score:.6215335632281267,name:"bs-webapi",version:"0.7.0",description:"Reason + BuckleScript bindings to DOM",keywords:[],license:"MIT",updated:"2017-12-23T21:28:33.970Z",stars:95,type:"published",quality:.7581602874498703,popularity:.13664278664106108,maintenance:.9893157190536978,readme:'<h1>bs-webapi</h1>\n<p>Experimental bindings to the DOM and other Web APIs.</p>\n<p>The bindings are currently undocumented, but as the code mostly just consists of external declarations with type signatures, the code itself is fairly self-documenting. The bindings generally also correspond very well to the Web APIs they bind to, so using MDN along with GitHub should go a long way.</p>\n<h2>Installation</h2>\n<pre><code>npm install bs-webapi\n</code></pre>\n<p>Then add <code>bs-webapi</code> to <code>bs-dependencies</code> in your <code>bsconfig.json</code>. A minimal example:</p>\n<pre><code>{\n  "name": "my-thing",\n  "sources": "src",\n  "bs-dependencies": ["bs-webapi"]\n}\n</code></pre>\n<h2>Usage</h2>\n<p>See the <a href="https://github.com/reasonml-community/bs-webapi-incubator/tree/eb5f71847848a3e896733017fde00eee7fb5edf5/examples">examples folder</a></p>\n<h2>Some notes on the DOM API</h2>\n<p>The DOM API is mostly organized into interfaces and relies heavily on inheritance. The ergonomics of the API is also heavily dependent on dynamic typing, which makes it somewhat challenging to implement a thin binding layer that is both safe and ergonomic. To achieve this we employ subtyping and implementation inheritance, concepts which aren\'t very idiomatic to OCaml (or Reason), but all the more beneficial to understand in order to be able to use these bindings effectively.</p>\n<h3>Subtyping</h3>\n<p>The Dom types, and the relationships between them, are actually defined in the <code>Dom</code> module that ships with <code>bs-platform</code> (<a href="https://github.com/glennsl/bucklescript/blob/master/jscomp/others/dom.mli">Source code</a>), where you\'ll find a bunch of types that look like this:</p>\n<pre><code class="language-ml">type \'a _element\ntype \'a element_like = \'a _element node_like\ntype element = _baseClass element_like\n</code></pre>\n<p>This is subtyping implemented with abstract types and phantom arguments. The details of how this works isn\'t very important (but see <a href="https://github.com/reasonml-community/bs-webapi-incubator/pull/23">#23</a> for a detailed explanation of how exactly this trickery works) in order to just use them, but there are a few things you should know:</p>\n<ul>\n<li>If you expand the alias of a concrete DOM type, you\'ll discover it\'s actually a list of abstract types. e.g. <code>element</code> expands to <code>_baseClass _element _node _eventTarget_like</code> This means <code>element</code> is a subtype of <code>_element</code>, <code>_node</code> and <code>_eventTarget_like</code>.</li>\n<li>The <code>_like</code> type are "open" (because they have a type variable). This means that a function accepting an <code>\'a element_like</code> will accept any "supertype" of <code>element_like</code>. A function accepting just an <code>element</code> will only accept an <code>element</code> (Technically <code>element</code> is actually a "supertype" of <code>element_like</code> too).</li>\n</ul>\n<p>This system works exceptionally well, but has one significant flaw: It makes type errors even more complicated than they normally are. If you know what to look for it\'s not that bad, but unfortunately the formatting of these errors don\'t make looking for it any easier. We hope to improve that in other ways (see <a href="https://github.com/reasonml/BetterErrors">BetterErrors</a>)</p>\n<h3>Implementation inheritance</h3>\n<p>If you\'ve looked through the source code a bit, you\'ve likely come across code like this:</p>\n<pre><code class="language-reason">include EventTargetRe.Impl { type nonrec t = t };\ninclude NodeRe.Impl { type nonrec t = t };\ninclude ParentNodeRe.Impl { type nonrec t = t };\ninclude NonDocumentTypeChildNodeRe.Impl { type nonrec t = t };\ninclude ChildNodeRe.Impl { type nonrec t = t };\ninclude SlotableRe.Impl { type nonrec t = t };\ninclude Impl { type nonrec t = t };\n</code></pre>\n<p>This is the implementation inheritance. Each "inheritable" module defines an "Impl" module where all its exported functions are defined. <code>include NodeRe.Impl { type nonrec t = t };</code> means that all the functions in <code>NodeRe.Impl</code> should be included in this module, but with the <code>t</code> type of that module replaced by the <code>t</code> type of this one. And that\'s it, it now has all the functions.</p>\n<p>Implementation inheritance is used instead of subtyping to make it easier to understand which functions operate on any given "subject". If you have an <code>element</code> and you need to use a function defined in <code>Node</code>, let\'s say <code>removeChild</code> you cannot just use <code>Node.removeChild</code>. Instead you need to use <code>Element.removeChild</code>, which you can since <code>Element</code> inherits from <code>Node</code>. As a general rule, always use the function in the module corresponding to the type you have. You\'ll find this makes it very easy to see what types you\'re dealing with just by reading the code.</p>\n<h2>Changes</h2>\n<h3>0.7.0</h3>\n<ul>\n<li>Added <code>Webapi</code> module, Deprecated <code>Bs_webapi</code></li>\n<li>Removed deprecated Storage API</li>\n<li>Add <code>Document.unsafeAshtmlDocument</code>, <code>Element.unsafeAsHtmlElement</code>. Deprecated <code>Document.asHtmlDocument</code>, <code>Element.asHtmlElement</code>, <code>HtmlEleement.ofElement</code>.</li>\n<li>Changed <code>Dom.history</code> and <code>Dom.location</code> to use <code>window</code> instead of <code>document</code></li>\n</ul>\n<h3>0.6.1</h3>\n<ul>\n<li>Fix incorrect heuristic in <code>HtmlElement.ofElement</code></li>\n</ul>\n<h3>0.6.0</h3>\n<ul>\n<li>Renamed createText to CreateTextNode, according to spec</li>\n<li>Deprecated Storage API, it\'s been upstreamed to <code>bs-platform</code> as <code>Dom.Storage</code></li>\n<li>Removed <code>ReasonJs</code>  namespace. Use <code>Bs_webapi</code>  instead</li>\n</ul>\n',homepageUrl:"https://github.com/reasonml-community/bs-webapi-incubator#readme",repositoryUrl:"https://github.com/reasonml-community/bs-webapi-incubator",npmUrl:"https://www.npmjs.com/package/bs-webapi",issuesUrl:"https://github.com/reasonml-community/bs-webapi-incubator/issues",slug:"packages/bs-webapi"}},pathContext:{id:"bs-webapi"}}}});
//# sourceMappingURL=path---packages-bs-webapi-d82d4a0a6a2086efa00e.js.map