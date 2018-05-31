webpackJsonp([23115309707782],{1118:function(s,e){s.exports={data:{package:{id:"bs-most",stars:28,name:"bs-most",version:"0.1.2",category:"binding",flags:[],platforms:["browser","node"],description:"Reason/BuckleScript bindings for the Most.js reactive toolkit Edit",keywords:["reactive programming"],license:"MIT",updated:"2018-05-17T06:09:55.043Z",type:"published",score:.5772063932767717,quality:.6958291802329263,popularity:.07484086383642605,maintenance:.9778952481832708,readme:'<h1 id="bs-most"><a href="#bs-most" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-most</h1>\n<p>BuckleScript bindings for <a href="https://github.com/cujojs/most">Most.js</a>.</p>\n<p>In <a href="https://reasonml.github.io/">Reason</a>:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> add = (x, y) =&gt; x + y;\n\n<span class="hljs-keyword">let</span> isEven = x =&gt; x mod <span class="hljs-number">2</span> === <span class="hljs-number">0</span> |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Boolean</span>.to_js_boolean;\n\n<span class="hljs-type">Most</span>.(\n  fromList([<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>])\n  |&gt; <span class="hljs-built_in">map</span>(add(<span class="hljs-number">2</span>))\n  |&gt; <span class="hljs-built_in">filter</span>(isEven)\n  |&gt; observe(x =&gt; <span class="hljs-type">Js</span>.log(x))\n  |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.then_((<span class="hljs-number">_</span>) =&gt; {\n       <span class="hljs-type">Js</span>.log(<span class="hljs-string">"Stream completed"</span>);\n       <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve();\n     })\n);\n\n\n<span class="hljs-comment">/**\n * Logs:\n * 2\n * 4\n * 6\n * 8\n * 10\n * Stream completed\n **/</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> add x y = x + y\n<span class="hljs-keyword">let</span> isEven x = ((x <span class="hljs-keyword">mod</span> <span class="hljs-number">2</span>) == <span class="hljs-number">0</span>) |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Boolean</span>.to_js_boolean\n<span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Most</span> <span class="hljs-keyword">in</span>\n    ((((fromList [<span class="hljs-number">0</span>; <span class="hljs-number">1</span>; <span class="hljs-number">2</span>; <span class="hljs-number">3</span>; <span class="hljs-number">4</span>; <span class="hljs-number">5</span>; <span class="hljs-number">6</span>; <span class="hljs-number">7</span>; <span class="hljs-number">8</span>]) |&gt; (map (add <span class="hljs-number">2</span>))) |&gt;\n        (filter isEven))\n       |&gt; (observe (<span class="hljs-keyword">fun</span> x  -&gt; <span class="hljs-type">Js</span>.log x)))\n      |&gt;\n      (<span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.then_\n         (<span class="hljs-keyword">fun</span> _  -&gt; <span class="hljs-type">Js</span>.log <span class="hljs-string">"Stream completed"</span>; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve <span class="hljs-literal">()</span>))\n[@@@ocaml.doc\n  <span class="hljs-string">"\\n * Logs:\\n * 2\\n * 4\\n * 6\\n * 8\\n * 10\\n * Stream completed\\n *"</span>]</code></pre>\n      </div>\n    </div>\n  \n<p>An example of implementing the Redux architecture in a ReasonReact project can be <a href="https://github.com/Lokeh/reason-autocomplete">seen here</a>.</p>\n<h2 id="how-do-i-install-it"><a href="#how-do-i-install-it" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do I install it?</h2>\n<p>Inside of a BuckleScript project:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install --save bs-most</code></pre></div>\n<p>Then add <code>bs-most</code> to your <code>bs-dependencies</code> in <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>{\n  ...\n  <span class="hljs-string">"bs-dependencies"</span>: [\n    <span class="hljs-string">"bs-most"</span>\n  ]\n}</code></pre></div>\n<h2 id="how-do-i-use-it"><a href="#how-do-i-use-it" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do I use it?</h2>\n<p>The Most.js <a href="https://github.com/cujojs/most/blob/master/docs/api.md">API docs</a> are probably the best source of information about each method. This library attempts to provide very low-level bindings, except for what\'s noted in the <strong>What\'s different</strong> section.</p>\n<p>The bindings are a single file in <code>src/most.re</code>. I try to provide comments next to each binding and am working on flushing out tests so that users can refer to them.</p>\n<p>I am also available by e-mail or DM on the Reason discord (username: @lilactown). </p>\n<h2 id="whats-missing"><a href="#whats-missing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What\'s missing</h2>\n<ol>\n<li><code>generate</code> - Reason doesn\'t have generator support yet</li>\n<li><code>transduce</code> - Awkward to use in Reason/OCaml without a solid transducer impl (maybe coming soon?? 😉)</li>\n<li><code>combineArray</code> - the callback for this is variadic (depending on how many streams you have in the array), not sure how to type it yet 😞</li>\n</ol>\n<h2 id="whats-different"><a href="#whats-different" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What\'s different</h2>\n<ol>\n<li>Predicates that normally return "truthy" values, now only accept returning booleans</li>\n<li><code>sample</code> is variadic so we offer <code>sample1</code>, <code>sample2</code>, <code>sample3</code>... <code>sample6</code></li>\n<li><code>fromEvent</code> - DOM events are supported, but generic <code>EventEmitter</code>\'s are not yet</li>\n<li><code>from</code> only works on arrays right now; generic iterators must be coerced</li>\n<li><code>fromList</code> is a function that creates a stream from a Reason <code>List</code> type, e.g. <code>fromList([1, 2, 3])</code></li>\n<li><code>unfold</code> is modeled a bit differently - instead of taking in a JS object <code>{ done, value, seed }</code>, it takes an <code>option (value, seed)</code>.\nExample:</li>\n</ol>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* emits 2,4,6 then completes */</span>\n<span class="hljs-type">Most</span>.unfold(\n  (seed) =&gt;\n    <span class="hljs-keyword">if</span> (seed &lt; <span class="hljs-number">4</span>) {\n      <span class="hljs-keyword">let</span> nextSeed = seed + <span class="hljs-number">1</span>;\n      <span class="hljs-type">Some</span>((seed * <span class="hljs-number">2</span>, nextSeed));\n    } <span class="hljs-keyword">else</span> {\n      <span class="hljs-type">None</span>;\n    },\n  <span class="hljs-number">1</span>\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  <span class="hljs-type">Most</span>.unfold\n    (<span class="hljs-keyword">fun</span> seed  -&gt;\n       <span class="hljs-keyword">if</span> seed &lt; <span class="hljs-number">4</span>\n       <span class="hljs-keyword">then</span>\n         <span class="hljs-keyword">let</span> nextSeed = seed + <span class="hljs-number">1</span> <span class="hljs-keyword">in</span>\n         ((<span class="hljs-type">Some</span> (((seed * <span class="hljs-number">2</span>), nextSeed)))[@explicit_arity ])\n       <span class="hljs-keyword">else</span> <span class="hljs-type">None</span>) <span class="hljs-number">1</span></code></pre>\n      </div>\n    </div>\n  \n<h1 id="subjects"><a href="#subjects" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Subjects</h1>\n<p>This library also includes some bindings for <a href="https://github.com/mostjs-community/subject">Subjects</a>. Subjects are very useful for e.g. implementing a state store/dispatch system. The API is a little bit different from the raw <code>most-subject</code> library:</p>\n<ul>\n<li><code>Subject.make</code>: creates an <a href="https://github.com/mostjs-community/subject#asynct-subjectt">asynchronous Subject</a></li>\n<li><code>Subject.asStream</code>: casts a subject to a stream, to be used by the rest of the <code>Most</code> module</li>\n<li><code>Subject.next</code>: emits a value on a subject</li>\n<li><code>Subject.error</code>: emits an error on a subject</li>\n<li><code>Subject.complete</code>: completes a subject with no value</li>\n<li><code>Subject.completeWith</code>: completes a subject with a value</li>\n</ul>\n<h2 id="build"><a href="#build" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm run build</code></pre></div>\n<h2 id="build--watch"><a href="#build--watch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build + Watch</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm run watch</code></pre></div>\n<h2 id="testing"><a href="#testing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Testing</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm run <span class="hljs-built_in">test</span></code></pre></div>\n',homepageUrl:"https://github.com/Lokeh/bs-most#readme",repositoryUrl:"https://github.com/Lokeh/bs-most",npmUrl:"https://www.npmjs.com/package/bs-most",issuesUrl:"https://github.com/Lokeh/bs-most/issues",slug:"/package/bs-most"}},pathContext:{id:"bs-most"}}}});
//# sourceMappingURL=path---package-bs-most-6d2867801d6e82a58c57.js.map