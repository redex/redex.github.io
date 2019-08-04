webpackJsonp([42288603504571],{1223:function(s,n){s.exports={data:{package:{type:"published",id:"bs-nonempty",name:"bs-nonempty",version:"1.3.0",category:"library",flags:[],platforms:["any"],description:"NonEmpty type with Array and List implementations for ReasonML and OCaml",keywords:["utilities","collections"],license:"MIT",updated:"2019-05-21T01:04:20.737Z",stars:5,score:.6108841770567824,quality:.8065250223887123,popularity:.05415381394153648,maintenance:.9999223870303744,readme:'<h1 id="bs-nonempty"><a href="#bs-nonempty" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-nonempty</h1>\n<p>This small library provides implementations of <code>NonEmptyList</code> and <code>NonEmptyArray</code>: collection structures that guarantee you\'ll have at least one value. Additionally, you can build on top of the <code>NonEmptyBase</code> module to make a <code>NonEmpty*</code> version of your own collection type.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p><strong>Install via npm:</strong></p>\n<p><code>npm install --save bs-nonempty</code></p>\n<p><strong>Update your bsconfig.json</strong></p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-string">"bs-dependencies"</span>: [\n  <span class="hljs-string">"bs-nonempty"</span>\n],</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>The following demonstrates the API for using this library with <code>List</code>, but from these examples, it should be pretty easy to figure out how the <code>NonEmptyArray</code> version works.</p>\n<p><strong>Construct a NonEmptyList</strong></p>\n<p>For constructing a new <code>NonEmptyList.t</code>, you can use <code>make</code>, <code>pure</code>, <code>cons</code>, and <code>fromT</code>. You can turn your <code>NonEmptyList.t</code> into a <code>list</code> using <code>toT</code>. The signatures of those functions look like:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> make: (\'a, list(\'a)) =&gt; <span class="hljs-type">NonEmptyList</span>.t(\'a);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">958</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> pure: (\'a) =&gt; <span class="hljs-type">NonEmptyList</span>.t(\'a);\n<span class="hljs-keyword">let</span> cons: (\'a, <span class="hljs-type">NonEmptyList</span>.t(\'a)) =&gt; <span class="hljs-type">NonEmptyList</span>.t(\'a);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">958</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> fromT: list(\'a) =&gt; option(<span class="hljs-type">NonEmptyList</span>.t(\'a));\n<span class="hljs-keyword">let</span> toT: <span class="hljs-type">NonEmptyList</span>.t(\'a) =&gt; list(\'a);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">958</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<p>You can use those functions like this:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* "import" from NonEmptyList */</span>\n<span class="hljs-keyword">let</span> (make, pure, cons, head, tail, fromT, toT) =\n  <span class="hljs-type">NonEmptyList</span>(make, pure, cons, head, tail, fromT, toT);\n\n<span class="hljs-keyword">let</span> myNel = pure(<span class="hljs-number">3</span>);\nhead(myNel); <span class="hljs-comment">/* 3 -- Note that this is not Some(3) */</span>\ntail(myNel); <span class="hljs-comment">/* [] */</span>\n\nmake(<span class="hljs-number">3</span>, [<span class="hljs-number">2</span>, <span class="hljs-number">1</span>]) == cons(<span class="hljs-number">3</span>, cons(<span class="hljs-number">2</span>, pure(<span class="hljs-number">1</span>)));\ntoT(make(<span class="hljs-number">3</span>, [<span class="hljs-number">2</span>, <span class="hljs-number">1</span>])) == [<span class="hljs-number">3</span>, <span class="hljs-number">2</span>, <span class="hljs-number">1</span>];\n\nfromT([<span class="hljs-string">"A"</span>]) == <span class="hljs-type">Some</span>(make(<span class="hljs-string">"A"</span>, [])) == <span class="hljs-type">Some</span>(pure(<span class="hljs-string">"A"</span>));\nfromT([]) == <span class="hljs-type">None</span>;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> (make,pure,cons,head,tail,fromT,toT) =\n  ((<span class="hljs-type">NonEmptyList</span> (make, pure, cons, head, tail, fromT, toT))[@explicit_arity\n                                                              ])\n<span class="hljs-keyword">let</span> myNel = pure <span class="hljs-number">3</span>\n<span class="hljs-keyword">let</span> _ = head myNel\n<span class="hljs-keyword">let</span> _ = tail myNel\n<span class="hljs-keyword">let</span> _ = (make <span class="hljs-number">3</span> [<span class="hljs-number">2</span>; <span class="hljs-number">1</span>]) = (cons <span class="hljs-number">3</span> (cons <span class="hljs-number">2</span> (pure <span class="hljs-number">1</span>)))\n<span class="hljs-keyword">let</span> _ = (toT (make <span class="hljs-number">3</span> [<span class="hljs-number">2</span>; <span class="hljs-number">1</span>])) = [<span class="hljs-number">3</span>; <span class="hljs-number">2</span>; <span class="hljs-number">1</span>]\n<span class="hljs-keyword">let</span> _ =\n  ((fromT [<span class="hljs-string">"A"</span>]) = ((<span class="hljs-type">Some</span> ((make <span class="hljs-string">"A"</span> <span class="hljs-literal">[]</span>)))[@explicit_arity ])) =\n    ((<span class="hljs-type">Some</span> ((pure <span class="hljs-string">"A"</span>)))[@explicit_arity ])\n<span class="hljs-keyword">let</span> _ = (fromT <span class="hljs-literal">[]</span>) = <span class="hljs-type">None</span></code></pre>\n      </div>\n    </div>\n  \n<p><strong>Map, fold (reduce), and more</strong></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> <span class="hljs-built_in">map</span>: (\'a =&gt; \'b, <span class="hljs-type">NonEmptyList</span>.t(\'a)) =&gt; <span class="hljs-type">NonEmptyList</span>.t(\'b);\n<span class="hljs-keyword">let</span> fold_left: ((\'a, \'b) =&gt; \'a, \'a, <span class="hljs-type">NonEmptyList</span>.t(\'b)) =&gt; \'a;\n<span class="hljs-keyword">let</span> foldl1: ((\'a, \'a) =&gt; \'a, <span class="hljs-type">NonEmptyList</span>.t(\'a)) =&gt; \'a;\n\n<span class="hljs-keyword">let</span> myNel = make(<span class="hljs-number">0</span>, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>]);\n<span class="hljs-built_in">map</span>(string_of_int, myNel); <span class="hljs-comment">/* == make("0", ["1", "2", "3", "4"]) */</span>\nfold_left((+), <span class="hljs-number">0</span>, myNel); <span class="hljs-comment">/* 10 */</span>\nfoldl1((+), myNel); <span class="hljs-comment">/* 10 */</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">958</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> append: (<span class="hljs-type">NonEmptyList</span>.t(\'a), <span class="hljs-type">NonEmptyList</span>.t(\'a)) =&gt; <span class="hljs-type">NonEmptyList</span>.t(\'a);\n<span class="hljs-keyword">let</span> <span class="hljs-built_in">join</span>: (<span class="hljs-type">NonEmptyList</span>.t(<span class="hljs-type">NonEmptyList</span>.t(\'a))) =&gt; <span class="hljs-type">NonEmptyList</span>.t(\'a);\n<span class="hljs-keyword">let</span> <span class="hljs-built_in">reverse</span>: <span class="hljs-type">NonEmptyList</span>.t(\'a) =&gt; <span class="hljs-type">NonEmptyList</span>.t(\'a);\n<span class="hljs-keyword">let</span> length: <span class="hljs-type">NonEmptyList</span>.t(\'a) =&gt; int;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">958</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h2 id="typeclasses"><a href="#typeclasses" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Typeclasses</h2>\n<p>Note: If "semigroup" is a word that freaks you out, you can ignore this entire section. You already know more than enough to use this library. But if you\'re already familiar with <code>bs-abstract</code>, the following might come in handy.</p>\n<p><code>NonEmpty</code> is built on top of the great work in <a href="https://github.com/Risto-Stevcev/bs-abstract">bs-abstract</a>. Every <code>NonEmpty*</code> implementation (currently List and Array) is a member of the following typeclasses (which can be accessed like <code>NonEmptyList.Functor.map</code>):</p>\n<ul>\n<li><a href="https://github.com/Risto-Stevcev/bs-abstract/blob/v0.16.0/src/interfaces/Interface.re#L18-L21">MAGMA_ANY</a> and <a href="https://github.com/Risto-Stevcev/bs-abstract/blob/v0.16.0/src/interfaces/Interface.re#L25">SEMIGROUP_ANY</a> with infix <code>append</code> (e.g. <code>NonEmptyList.Infix.(&#x3C;:>)</code>)</li>\n<li><a href="https://github.com/Risto-Stevcev/bs-abstract/blob/v0.16.0/src/interfaces/Interface.re#L78-L81">FUNCTOR</a> with infix <code>map</code> (e.g. <code>NonEmptyList.Infix.(&#x3C;$>)</code>)</li>\n<li><a href="https://github.com/Risto-Stevcev/bs-abstract/blob/v0.16.0/src/interfaces/Interface.re#L83-L86">APPLY</a> and <a href="https://github.com/Risto-Stevcev/bs-abstract/blob/v0.16.0/src/interfaces/Interface.re#L88-L91">APPLICATIVE</a> with infix <code>apply</code> (e.g. <code>NonEmptyList.Infix.(&#x3C;*>)</code>)</li>\n<li><a href="https://github.com/Risto-Stevcev/bs-abstract/blob/v0.16.0/src/interfaces/Interface.re#L93-L96">MONAD</a> with infix <code>flat_map</code> (e.g. <code>NonEmptyList.Infix.(>>=)</code>)</li>\n</ul>\n<p>Additionally, to roll your own <code>NonEmpty*</code> type, the underlying container type needs to be a member of <a href="https://github.com/Risto-Stevcev/bs-abstract/blob/v0.16.0/src/interfaces/Interface.re#L33-L36">MONOID_ANY</a>, <a href="https://github.com/Risto-Stevcev/bs-abstract/blob/v0.16.0/src/interfaces/Interface.re#L88-L91">APPLICATIVE</a>, and <a href="https://github.com/Risto-Stevcev/bs-abstract/blob/v0.16.0/src/interfaces/Interface.re#L113-L122">FOLDABLE</a> (as well as provide implementations for <code>head</code>, <code>tail</code>, and <code>length</code> functions). See the implementations of <code>NonEmptyList</code> and <code>NonEmptyArray</code> for examples.</p>\n<h2 id="contributing"><a href="#contributing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributing</h2>\n<ol>\n<li>Fork and clone this repository</li>\n<li><code>npm install</code> to grab <code>bs-abstract</code> and any dev dependencies</li>\n<li>Add features (and tests!) as appropriate</li>\n<li><code>npm run test</code></li>\n</ol>\n<p>Here are some things worth contributing:</p>\n<ul>\n<li><code>fold_right</code> implementation so we can be a member of <code>FOLDABLE</code></li>\n<li><code>EQ</code> if the underlying <code>\'a</code> is a member of <code>EQ</code></li>\n<li><code>TRAVERSABLE</code> if the underlying <code>\'a</code> is a member of <code>APPLICATIVE</code></li>\n<li>docblock comments so we can automate the documentation</li>\n<li>Any extra utility functions or <code>NonEmptyOtherCollectionType</code> implementations</li>\n</ul>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>Released under the MIT license. See <code>LICENSE</code>.</p>\n',homepageUrl:"https://github.com/mlms13/bs-nonempty",repositoryUrl:"https://github.com/mlms13/bs-nonempty",npmUrl:"https://www.npmjs.com/package/bs-nonempty",issuesUrl:"https://github.com/mlms13/bs-nonempty/issues",slug:"/package/bs-nonempty"}},pathContext:{id:"bs-nonempty"}}}});
//# sourceMappingURL=path---package-bs-nonempty-30c640bef488ef00d1b2.js.map