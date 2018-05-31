webpackJsonp([0xc18740550434],{1159:function(s,a){s.exports={data:{package:{id:"rationale",stars:74,name:"rationale",version:"0.1.3",category:"library",flags:[],platforms:["any"],description:"Rationale is a collection of helper utility functions that are absent in the OCaml/ReasonML standard library.",keywords:["utilities"],license:"MIT",updated:"2018-03-08T09:52:30.789Z",type:"published",score:.5787119147793629,quality:.6467356507933611,popularity:.10416481378177998,maintenance:.9949529563363761,readme:'<h1 id="rationale"><a href="#rationale" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Rationale</h1>\n<p>Rationale is inspired by <a href="http://ramdajs.com/">RamdaJS</a>. It is a collection of helper utility functions that are absent in the OCaml/ReasonML standard library.</p>\n<p>Note that not all of Ramda was ported over, as many of Ramda\'s utilities are making up for deficits in Javascript, which Reason doesn\'t have. Furthermore, many of the functions that operate on objects, simply don\'t make sense in Reason.</p>\n<h2 id="features"><a href="#features" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Features</h2>\n<h3 id="exception-free-list-operations"><a href="#exception-free-list-operations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Exception-free List operations</h3>\n<p>In the OCaml/ReasonML standard library, many of the common List operations throw exceptions if there\'s a problem. Rationale\'s utilities do not throw exceptions, and instead return <code>options</code>.</p>\n<ul>\n<li>head</li>\n<li>tail</li>\n<li>init</li>\n<li>last</li>\n<li>nth</li>\n<li>etc</li>\n</ul>\n<h3 id="monadic-options-and-jsresults"><a href="#monadic-options-and-jsresults" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Monadic Options and Js.Results</h3>\n<p>Rationale includes monadic and functor operations ala Haskell for the <code>option</code> and <code>Js.Result</code> types.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">Rationale</span>.<span class="hljs-type">Option</span>.<span class="hljs-type">Infix</span>;\nopen <span class="hljs-type">Rationale</span>.<span class="hljs-type">Function</span>;\n\n<span class="hljs-type">RList</span>.<span class="hljs-keyword">init</span>(a)\n  &gt;&gt;= ((x) =&gt; <span class="hljs-type">RList</span>.last(a) &lt;$&gt; f &lt;$&gt; flip(<span class="hljs-type">RList</span>.append, x))\n  &lt;$&gt; <span class="hljs-type">RList</span>.concat(b)\n  |&gt; <span class="hljs-type">Option</span>.<span class="hljs-keyword">default</span>(xs);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code>open Rationale.Option.Infix\nopen Rationale.Function\nlet _ =\n  (((RList.init a) &gt;&gt;=\n      (fun x  -&gt; ((RList.last a) &lt;$&gt; f) &lt;$&gt; (flip RList.append x)))\n     &lt;$&gt; (RList.concat b))\n    |&gt; (Option.default xs)</code></pre>\n      </div>\n    </div>\n  \n<h3 id="support-for-point-free-style"><a href="#support-for-point-free-style" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Support for Point-free style</h3>\n<p>Rationale has <code>compose</code> and <code>pipe</code> functions, as well as supporting infix operators: <code>&#x3C;||</code> and <code>||></code> respectively.</p>\n<h3 id="infix-lens-composition"><a href="#infix-lens-composition" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Infix Lens composition</h3>\n<p>Rationale also allows for fluid lens composition via infix operators: <code>-&#x3C;&#x3C;</code> and <code>>>-</code>.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Lens</span>.view(aLens &gt;&gt;- bLens &gt;&gt;- optional(<span class="hljs-number">0</span>), { a: { b: <span class="hljs-type">Some</span>(<span class="hljs-number">3</span>) } });</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code>let _ =\n  Lens.view ((aLens &gt;&gt;- bLens) &gt;&gt;- (optional 0))\n    { a = { b = ((Some (3))[@explicit_arity ]) } }</code></pre>\n      </div>\n    </div>\n  \n<h3 id="function-signatures-for-composition"><a href="#function-signatures-for-composition" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Function signatures for composition</h3>\n<p>Like in Ramda, functions always keep their data at the end making piping and composing a breeze:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>list\n  |&gt; take(<span class="hljs-number">9</span>)\n  |&gt; drop(<span class="hljs-number">3</span>)\n  |&gt; splitAt(<span class="hljs-number">4</span>);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = ((<span class="hljs-built_in">list</span> |&gt; (take <span class="hljs-number">9</span>)) |&gt; (drop <span class="hljs-number">3</span>)) |&gt; (splitAt <span class="hljs-number">4</span>)</code></pre>\n      </div>\n    </div>\n  \n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="using-optional-returns-in-rlist-and-dict"><a href="#using-optional-returns-in-rlist-and-dict" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using Optional Returns in RList and Dict</h3>\n<p>Returning <code>option(\'a)</code> from functions is generally preferred to throwing an exception.\nIt protects you from runtime errors, and forces you to deal with potential errors at\ncompile time. However, if you\'re not used to doing it, things can get a little\nconfusing.</p>\n<p>Pattern matching for errors all the time would be extremely cumbersome. Fortunately,\nwe provide a host of useful methods to working with optional returns. Hopefully,\nthis doc will show you that you don\'t need to use excessive pattern matching to\nwork with optional returns.</p>\n<h4 id="default"><a href="#default" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Default</h4>\n<p>The most straight forward way to get out of an <code>option</code> is by calling <code>default</code>.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Option</span>.<span class="hljs-keyword">default</span>(<span class="hljs-number">0</span>, <span class="hljs-type">Some</span>(<span class="hljs-number">1</span>)); <span class="hljs-comment">/* 1 */</span>\n\n<span class="hljs-type">Option</span>.<span class="hljs-keyword">default</span>(<span class="hljs-number">0</span>, <span class="hljs-type">None</span>); <span class="hljs-comment">/* 0 */</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = <span class="hljs-type">Option</span>.default <span class="hljs-number">0</span> ((<span class="hljs-type">Some</span> (<span class="hljs-number">1</span>))[@explicit_arity ])\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">Option</span>.default <span class="hljs-number">0</span> <span class="hljs-type">None</span></code></pre>\n      </div>\n    </div>\n  \n<h4 id="monads"><a href="#monads" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Monads</h4>\n<p>Calling <code>default</code> will definitely get you out of the <code>option</code>, but what if you want\nto do some things to it first? What if you need other funtions that also return <code>option</code>?</p>\n<p>the Option module includes monadic operations for <code>option</code>, so you can take a <em>railway oriented</em>\napproach to working with them.</p>\n<p>First, let\'s check if the last item of a list is equal to a certain value:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> lastEquals = (a, xs) =&gt; <span class="hljs-type">Option</span>.fmap(<span class="hljs-type">Util</span>.eq(a), <span class="hljs-type">RList</span>.last(xs)) |&gt; <span class="hljs-type">Option</span>.<span class="hljs-keyword">default</span>(<span class="hljs-literal">false</span>);\n\nlastEquals(<span class="hljs-number">3</span>, [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>]); <span class="hljs-comment">/* true */</span>\nlastEquals(<span class="hljs-number">3</span>, [<span class="hljs-number">4</span>,<span class="hljs-number">5</span>,<span class="hljs-number">6</span>]); <span class="hljs-comment">/* false */</span>\nlastEquals(<span class="hljs-number">3</span>, []); <span class="hljs-comment">/* false */</span>\n\n<span class="hljs-comment">/* Or, with infix operators */</span>\nopen <span class="hljs-type">Option</span>.<span class="hljs-type">Infix</span>;\n\n<span class="hljs-keyword">let</span> lastEquals = (a, xs) =&gt; <span class="hljs-type">RList</span>.last(xs) &lt;$&gt; <span class="hljs-type">Util</span>.eq(a) |&gt; <span class="hljs-type">Option</span>.<span class="hljs-keyword">default</span>(<span class="hljs-literal">false</span>);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> lastEquals a xs =\n  (<span class="hljs-type">Option</span>.fmap (<span class="hljs-type">Util</span>.eq a) (<span class="hljs-type">RList</span>.last xs)) |&gt; (<span class="hljs-type">Option</span>.default <span class="hljs-literal">false</span>)\n<span class="hljs-keyword">let</span> _ = lastEquals <span class="hljs-number">3</span> [<span class="hljs-number">1</span>; <span class="hljs-number">2</span>; <span class="hljs-number">3</span>]\n<span class="hljs-keyword">let</span> _ = lastEquals <span class="hljs-number">3</span> [<span class="hljs-number">4</span>; <span class="hljs-number">5</span>; <span class="hljs-number">6</span>]\n<span class="hljs-keyword">let</span> _ = lastEquals <span class="hljs-number">3</span> <span class="hljs-literal">[]</span>\n<span class="hljs-keyword">open</span> <span class="hljs-type">Option</span>.<span class="hljs-type">Infix</span>\n<span class="hljs-keyword">let</span> lastEquals a xs =\n  ((<span class="hljs-type">RList</span>.last xs) &lt;$&gt; (<span class="hljs-type">Util</span>.eq a)) |&gt; (<span class="hljs-type">Option</span>.default <span class="hljs-literal">false</span>)</code></pre>\n      </div>\n    </div>\n  \n<p>Here we used <code>fmap</code> and its infix variation <code>&#x3C;$></code> to apply a function to the value <em>inside</em> the option.\nNote that, <code>Util.eq</code> returns a <code>bool</code> not an <code>option</code>. So what if the next function also returns an\n<code>option</code>? Well you\'d get nested options, which doesn\'t really help anyone. So, instead, we would\nuse <code>bind</code>.</p>\n<p>Now let\'s replace the last item of one list with the last item of another. Note that both <code>last</code> and\n<code>init</code> return <code>option</code>:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> swapLast = (xs, ys) =&gt;\n  <span class="hljs-type">Option</span>.(bind(<span class="hljs-type">RList</span>.last(xs), ((x) =&gt; fmap(<span class="hljs-type">RList</span>.append(x), <span class="hljs-type">RList</span>.<span class="hljs-keyword">init</span>(ys)))) |&gt; <span class="hljs-keyword">default</span>(ys));\n\nswapLast([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>], [<span class="hljs-number">4</span>,<span class="hljs-number">5</span>,<span class="hljs-number">6</span>]); <span class="hljs-comment">/* [4,5,3] */</span>\nswapLast([], [<span class="hljs-number">4</span>,<span class="hljs-number">5</span>,<span class="hljs-number">6</span>]); <span class="hljs-comment">/* [4,5,6] */</span>\n\n<span class="hljs-comment">/* Or, with infix operators */</span>\nopen <span class="hljs-type">Option</span>.<span class="hljs-type">Infix</span>;\n\n<span class="hljs-keyword">let</span> swapLast = (xs, ys) =&gt;\n  <span class="hljs-type">RList</span>.last(xs) &gt;&gt;= ((x) =&gt; <span class="hljs-type">RList</span>.<span class="hljs-keyword">init</span>(ys) &lt;$&gt; <span class="hljs-type">RList</span>.append(x)) |&gt; <span class="hljs-type">Option</span>.<span class="hljs-keyword">default</span>(ys);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code>let swapLast xs ys =\n  let open Option in\n    (bind (RList.last xs) (fun x  -&gt; fmap (RList.append x) (RList.init ys)))\n      |&gt; (default ys)\nlet _ = swapLast [1; 2; 3] [4; 5; 6]\nlet _ = swapLast [] [4; 5; 6]\nopen Option.Infix\nlet swapLast xs ys =\n  ((RList.last xs) &gt;&gt;= (fun x  -&gt; (RList.init ys) &lt;$&gt; (RList.append x))) |&gt;\n    (Option.default ys)</code></pre>\n      </div>\n    </div>\n  \n<p>Here we used <code>bind</code> and its infix variation <code>>>=</code> to apply a function that also returned an <code>option</code>.</p>\n<h4 id="applicatives"><a href="#applicatives" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Applicatives</h4>\n<p>Let\'s try checking if the last elements of two lists are equal. We could accomplish this using <code>bind</code>,\nbut that can be a little awkward.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> lastEqual = (xs, ys) =&gt;\n  <span class="hljs-type">Option</span>.(apply(apply(<span class="hljs-type">Some</span>(<span class="hljs-type">Util</span>.eq), <span class="hljs-type">RList</span>.last(xs), <span class="hljs-type">RList</span>.last(ys))) |&gt; <span class="hljs-keyword">default</span>(<span class="hljs-literal">false</span>));\n\nlastEqual([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>], [<span class="hljs-number">4</span>,<span class="hljs-number">5</span>,<span class="hljs-number">3</span>]); <span class="hljs-comment">/* true */</span>\nlastEqual([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>], [<span class="hljs-number">4</span>,<span class="hljs-number">5</span>,<span class="hljs-number">6</span>]); <span class="hljs-comment">/* false */</span>\nlastEqual([], [<span class="hljs-number">4</span>,<span class="hljs-number">5</span>,<span class="hljs-number">6</span>]); <span class="hljs-comment">/* false */</span>\nlastEqual([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>], []); <span class="hljs-comment">/* false */</span>\n\n<span class="hljs-comment">/* Or, with infix operators */</span>\nopen <span class="hljs-type">Option</span>.<span class="hljs-type">Infix</span>;\n\n<span class="hljs-keyword">let</span> lastEqual = (xs, ys) =&gt;\n  <span class="hljs-type">Some</span>(<span class="hljs-type">Util</span>.eq) &lt;*&gt; <span class="hljs-type">RList</span>.last(xs) &lt;*&gt; <span class="hljs-type">RList</span>.last(ys) |&gt; <span class="hljs-type">Option</span>.<span class="hljs-keyword">default</span>(<span class="hljs-literal">false</span>);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> lastEqual xs ys =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Option</span> <span class="hljs-keyword">in</span>\n    (apply\n       (apply ((<span class="hljs-type">Some</span> (<span class="hljs-type">Util</span>.eq))[@explicit_arity ]) (<span class="hljs-type">RList</span>.last xs)\n          (<span class="hljs-type">RList</span>.last ys)))\n      |&gt; (default <span class="hljs-literal">false</span>)\n<span class="hljs-keyword">let</span> _ = lastEqual [<span class="hljs-number">1</span>; <span class="hljs-number">2</span>; <span class="hljs-number">3</span>] [<span class="hljs-number">4</span>; <span class="hljs-number">5</span>; <span class="hljs-number">3</span>]\n<span class="hljs-keyword">let</span> _ = lastEqual [<span class="hljs-number">1</span>; <span class="hljs-number">2</span>; <span class="hljs-number">3</span>] [<span class="hljs-number">4</span>; <span class="hljs-number">5</span>; <span class="hljs-number">6</span>]\n<span class="hljs-keyword">let</span> _ = lastEqual <span class="hljs-literal">[]</span> [<span class="hljs-number">4</span>; <span class="hljs-number">5</span>; <span class="hljs-number">6</span>]\n<span class="hljs-keyword">let</span> _ = lastEqual [<span class="hljs-number">1</span>; <span class="hljs-number">2</span>; <span class="hljs-number">3</span>] <span class="hljs-literal">[]</span>\n<span class="hljs-keyword">open</span> <span class="hljs-type">Option</span>.<span class="hljs-type">Infix</span>\n<span class="hljs-keyword">let</span> lastEqual xs ys =\n  ((((<span class="hljs-type">Some</span> (<span class="hljs-type">Util</span>.eq))[@explicit_arity ]) &lt;*&gt; (<span class="hljs-type">RList</span>.last xs)) &lt;*&gt;\n     (<span class="hljs-type">RList</span>.last ys))\n    |&gt; (<span class="hljs-type">Option</span>.default <span class="hljs-literal">false</span>)</code></pre>\n      </div>\n    </div>\n  \n<h3 id="translating-js-idioms"><a href="#translating-js-idioms" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Translating JS Idioms</h3>\n<h4 id="or-chains"><a href="#or-chains" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Or chains</h4>\n<p>Take the following example in Javascript:</p>\n<div class="redex-codeblock"><pre class="hljs lang-javascript"><code><span class="hljs-keyword">let</span> x = a || b || <span class="hljs-built_in">c</span> || d;</code></pre></div>\n<p>We can\'t translate that directly to Reason, because there is no <code>null</code> or <code>undefined</code> in Reason.\nThe closest approximation would be <code>option</code>, in which we can string together <code>Some</code> and <code>None</code>\nto get the first one that is <code>Some</code>.</p>\n<p>There is a helper function called <code>firstSome</code> and its infix variation <code>|?</code> that do exactly this.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* a, b, and c are all options, but d is not */</span>\n<span class="hljs-keyword">let</span> x = a |? b |? <span class="hljs-built_in">c</span> |&gt; <span class="hljs-keyword">default</span>(d);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> x = ((a |? b) |? c) |&gt; (default d)</code></pre>\n      </div>\n    </div>\n  \n<h2 id="reference"><a href="#reference" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reference</h2>\n<h3 id="infix-operators"><a href="#infix-operators" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Infix Operators</h3>\n<ul>\n<li><code>>>=</code>: Monadic Bind</li>\n<li><code>&#x3C;$></code>: Functor Fmap</li>\n<li><code>&#x3C;*></code>: Applicative Apply</li>\n<li><code>&#x3C;||</code>: Point-free Function Compose</li>\n<li><code>||></code>: Point-free Function Pipe</li>\n<li><code>-&#x3C;&#x3C;</code>: Lens Compose</li>\n<li><code>>>-</code>: Lens Pipe</li>\n<li><code>|?</code>: Optional Or</li>\n</ul>\n',homepageUrl:"https://github.com/jonlaing/rationale#readme",repositoryUrl:"https://github.com/jonlaing/rationale",npmUrl:"https://www.npmjs.com/package/rationale",issuesUrl:"https://github.com/jonlaing/rationale/issues",slug:"/package/rationale"}},pathContext:{id:"rationale"}}}});
//# sourceMappingURL=path---package-rationale-5aae6220bb040a684aa0.js.map