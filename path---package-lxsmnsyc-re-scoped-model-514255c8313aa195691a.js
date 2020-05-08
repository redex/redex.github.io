webpackJsonp([0x82727e649dd5],{1342:function(s,n){s.exports={data:{package:{type:"published",id:"@lxsmnsyc/re-scoped-model",name:"@lxsmnsyc/re-scoped-model",version:"0.4.0",category:"library",flags:[],platforms:["browser"],description:"Scoped Model pattern in ReasonReact (but with Hooks)",keywords:["state management","react"],license:"MIT",updated:"2020-05-06T15:10:32.096Z",stars:6,score:.42888194846703254,quality:.43511271520091105,popularity:.02749248815053444,maintenance:.8249307515830635,readme:'<h1 id="lxsmnsycre-scoped-model"><a href="#lxsmnsycre-scoped-model" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>@lxsmnsyc/re-scoped-model</h1>\n<blockquote>\n<p>Scoped Model pattern in React (but with Hooks), a pure ReasonML implementation of <a href="https://github.com/LXSMNSYC/react-scoped-model">react-scoped-model</a></p>\n</blockquote>\n<p><a href="https://www.npmjs.com/package/@lxsmnsyc/re-scoped-model"><img src="https://img.shields.io/npm/v/@lxsmnsyc/re-scoped-model.svg" alt="NPM"></a> <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="JavaScript Style Guide"></a></p>\n<h2 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h2>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>npm install --save @lxsmnsyc/re-scoped-model</code></pre></div>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>yarn add @lxsmnsyc/re-scoped-model</code></pre></div>\n<h3 id="bsconfigjson"><a href="#bsconfigjson" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bsconfig.json</h3>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>  <span class="hljs-string">"bs-dependencies"</span>: [\n    <span class="hljs-string">"@lxsmnsyc/re-scoped-model"</span>\n  ],</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="creating-your-model"><a href="#creating-your-model" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Creating your Model</h3>\n<p>Models are created by using a hook function that is always called whenever its Provider renders, and must return an object that represents the models\' state:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">CounterHook</span> </span>{\n  <span class="hljs-keyword">type</span> t = {\n    increment: unit =&gt; unit,\n    decrement: unit =&gt; unit,\n    <span class="hljs-built_in">count</span>: int,\n  };\n\n  <span class="hljs-keyword">type</span> props = int;\n\n  <span class="hljs-keyword">let</span> call = (initial: props): t =&gt; {\n    <span class="hljs-keyword">let</span> (<span class="hljs-built_in">count</span>, setCount) = <span class="hljs-type">React</span>.useState(() =&gt; initial);\n\n    <span class="hljs-keyword">let</span> increment = <span class="hljs-type">React</span>.useCallback1(() =&gt; setCount(<span class="hljs-built_in">c</span> =&gt; <span class="hljs-built_in">c</span> + <span class="hljs-number">1</span>), [||]);\n    <span class="hljs-keyword">let</span> decrement = <span class="hljs-type">React</span>.useCallback1(() =&gt; setCount(<span class="hljs-built_in">c</span> =&gt; <span class="hljs-built_in">c</span> - <span class="hljs-number">1</span>), [||]);\n\n    {\n      increment,\n      decrement,\n      <span class="hljs-built_in">count</span>,\n    }\n  };\n};\n\n<span class="hljs-comment">/**\n * Create our model\n */</span>\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Counter</span> = <span class="hljs-title">ReScopedModel</span>.<span class="hljs-title">ScopedModel</span>.<span class="hljs-title">Make</span>(<span class="hljs-title">CounterHook</span>);</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">CounterHook</span> =\n  <span class="hljs-keyword">struct</span>\n    <span class="hljs-keyword">type</span> t = {\n      increment: <span class="hljs-built_in">unit</span> -&gt; <span class="hljs-built_in">unit</span>;\n      decrement: <span class="hljs-built_in">unit</span> -&gt; <span class="hljs-built_in">unit</span>;\n      count: <span class="hljs-built_in">int</span>;}\n    <span class="hljs-keyword">type</span> props = <span class="hljs-built_in">int</span>\n    <span class="hljs-keyword">let</span> call (initial : props) =\n      (<span class="hljs-keyword">let</span> (count,setCount) = <span class="hljs-type">React</span>.useState (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt; initial) <span class="hljs-keyword">in</span>\n       <span class="hljs-keyword">let</span> increment =\n         <span class="hljs-type">React</span>.useCallback1 (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt; setCount (<span class="hljs-keyword">fun</span> c  -&gt; c + <span class="hljs-number">1</span>)) <span class="hljs-literal">[||]</span> <span class="hljs-keyword">in</span>\n       <span class="hljs-keyword">let</span> decrement =\n         <span class="hljs-type">React</span>.useCallback1 (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt; setCount (<span class="hljs-keyword">fun</span> c  -&gt; c - <span class="hljs-number">1</span>)) <span class="hljs-literal">[||]</span> <span class="hljs-keyword">in</span>\n       { increment; decrement; count } : t)\n  <span class="hljs-keyword">end</span>\n<span class="hljs-keyword">module</span> <span class="hljs-type">Counter</span> = <span class="hljs-type">ReScopedModel</span>.<span class="hljs-type">ScopedModel</span>.<span class="hljs-type">Make</span>(<span class="hljs-type">CounterHook</span>)[@@ocaml.doc\n                                                              <span class="hljs-string">"\\n * Create our model\\n "</span>]</code></pre>\n      </div>\n    </div>\n  \n<h3 id="adding-to-your-component-tree"><a href="#adding-to-your-component-tree" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding to your component tree</h3>\n<p>To add the Model to your component tree, simply use the <code>Provider</code> component property:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">App</span> </span>{\n  [@react.component]\n  <span class="hljs-keyword">let</span> make = () =&gt; \n    &lt;<span class="hljs-type">Counter</span>.<span class="hljs-type">Provider</span> value=<span class="hljs-number">0</span>&gt;\n      &lt;<span class="hljs-type">Count</span> /&gt;\n      &lt;<span class="hljs-type">Increment</span> /&gt;\n      &lt;<span class="hljs-type">Decrement</span> /&gt;\n      &lt;<span class="hljs-type">Counter</span>.<span class="hljs-type">Provider</span> value=<span class="hljs-number">100</span>&gt;\n        &lt;<span class="hljs-type">Count</span> /&gt;\n        &lt;<span class="hljs-type">IncDec</span> /&gt;\n      &lt;/<span class="hljs-type">Counter</span>.<span class="hljs-type">Provider</span>&gt;\n    &lt;/<span class="hljs-type">Counter</span>.<span class="hljs-type">Provider</span>&gt;\n  ;\n}</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">App</span> =\n  <span class="hljs-keyword">struct</span>\n    <span class="hljs-keyword">let</span> make <span class="hljs-literal">()</span> =\n      ((<span class="hljs-type">Counter</span>.<span class="hljs-type">Provider</span>.createElement ~<span class="hljs-keyword">value</span>:<span class="hljs-number">0</span>\n          ~children:[((<span class="hljs-type">Count</span>.createElement ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]);\n                    ((<span class="hljs-type">Increment</span>.createElement ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]);\n                    ((<span class="hljs-type">Decrement</span>.createElement ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]);\n                    ((<span class="hljs-type">Counter</span>.<span class="hljs-type">Provider</span>.createElement ~<span class="hljs-keyword">value</span>:<span class="hljs-number">100</span>\n                        ~children:[((<span class="hljs-type">Count</span>.createElement ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)\n                                  [@<span class="hljs-type">JSX</span> ]);\n                                  ((<span class="hljs-type">IncDec</span>.createElement ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)\n                                  [@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])[@@react.component\n                                                                    ]\n  <span class="hljs-keyword">end</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="useselector-hook"><a href="#useselector-hook" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>useSelector Hook</h3>\n<p>To access our model\'s state, we can use the <code>useSelector</code> hook which accepts a function that receives the current model state, and returns a new optional value that is derived from the given state. This allows fine-grained and reasonable re-render for the listening component.</p>\n<p>For example, in our <code>Count</code> component, we only <code>select</code> the <code>count</code> field of our model record.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Count</span> </span>{\n  [@react.component]\n  <span class="hljs-keyword">let</span> make = () =&gt; {\n    <span class="hljs-keyword">let</span> <span class="hljs-built_in">count</span> = <span class="hljs-type">Counter</span>.useSelector(state =&gt; state.<span class="hljs-built_in">count</span>, <span class="hljs-literal">true</span>);\n\n    <span class="hljs-type">Js</span>.log(<span class="hljs-string">"Count"</span>);\n\n    <span class="hljs-keyword">switch</span> (<span class="hljs-built_in">count</span>) {\n      | <span class="hljs-type">Some</span>(value) =&gt; &lt;p&gt;{ <span class="hljs-type">ReasonReact</span>.string(string_of_int(value)) }&lt;/p&gt;;\n      | <span class="hljs-number">_</span> =&gt; <span class="hljs-type">ReasonReact</span>.null;\n    }\n  }\n}</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">Count</span> =\n  <span class="hljs-keyword">struct</span>\n    <span class="hljs-keyword">let</span> make <span class="hljs-literal">()</span> =\n      <span class="hljs-keyword">let</span> count = <span class="hljs-type">Counter</span>.useSelector (<span class="hljs-keyword">fun</span> state  -&gt; state.count) <span class="hljs-literal">true</span> <span class="hljs-keyword">in</span>\n      <span class="hljs-type">Js</span>.log <span class="hljs-string">"Count"</span>;\n      (<span class="hljs-keyword">match</span> count <span class="hljs-keyword">with</span>\n       | ((<span class="hljs-type">Some</span> (<span class="hljs-keyword">value</span>))[@explicit_arity ]) -&gt;\n           ((p ~children:[<span class="hljs-type">ReasonReact</span>.<span class="hljs-built_in">string</span> (string_of_int <span class="hljs-keyword">value</span>)] <span class="hljs-literal">()</span>)\n           [@<span class="hljs-type">JSX</span> ])\n       | _ -&gt; <span class="hljs-type">ReasonReact</span>.null)[@@react.component ]\n  <span class="hljs-keyword">end</span></code></pre>\n      </div>\n    </div>\n  \n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Increment</span> </span>{\n  [@react.component]\n  <span class="hljs-keyword">let</span> make = () =&gt; {\n    <span class="hljs-keyword">let</span> increment = <span class="hljs-type">Counter</span>.useSelector(state =&gt; state.increment, <span class="hljs-literal">true</span>);\n\n    <span class="hljs-type">Js</span>.log(<span class="hljs-string">"Increment"</span>);\n\n    <span class="hljs-keyword">switch</span> (increment) {\n      | <span class="hljs-type">Some</span>(value) =&gt; \n        &lt;button onClick={<span class="hljs-number">_</span> =&gt; value()}&gt;\n          { <span class="hljs-type">ReasonReact</span>.string(<span class="hljs-string">"Increment"</span>) }\n        &lt;/button&gt;;\n      | <span class="hljs-number">_</span> =&gt; <span class="hljs-type">ReasonReact</span>.null;\n    }\n  }\n}</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">3731</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Decrement</span> </span>{\n  [@react.component]\n  <span class="hljs-keyword">let</span> make = () =&gt; {\n    <span class="hljs-keyword">let</span> decrement = <span class="hljs-type">Counter</span>.useSelector(state =&gt; state.decrement, <span class="hljs-literal">true</span>);\n\n    <span class="hljs-type">Js</span>.log(<span class="hljs-string">"Decrement"</span>);\n\n    <span class="hljs-keyword">switch</span> (decrement) {\n      | <span class="hljs-type">Some</span>(value) =&gt; \n        &lt;button onClick={<span class="hljs-number">_</span> =&gt; value()}&gt;\n          { <span class="hljs-type">ReasonReact</span>.string(<span class="hljs-string">"Decrement"</span>) }\n        &lt;/button&gt;;\n      | <span class="hljs-number">_</span> =&gt; <span class="hljs-type">ReasonReact</span>.null;\n    }\n  }\n}</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">3731</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<p>In our Counter app, only the Count component re-renders whenever any of the Model actions are called.</p>\n<p>To transform the state and listen to multiple values, you can use <code>.useSelectors</code> function, which returns the values of the transformed state in an array.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">IncDec</span> </span>{\n  [@react.component]\n  <span class="hljs-keyword">let</span> make = () =&gt; {\n    <span class="hljs-keyword">let</span> actions = <span class="hljs-type">Counter</span>.useSelector(state =&gt; {\n      [|\n        state.increment,\n        state.decrement,\n      |]\n    }, <span class="hljs-literal">true</span>);\n\n    <span class="hljs-type">Js</span>.log(<span class="hljs-string">"IncDec"</span>);\n\n    <span class="hljs-keyword">switch</span> (actions) {\n      | <span class="hljs-type">Some</span>([| increment, decrement |]) =&gt; \n        &lt;<span class="hljs-type">React</span>.<span class="hljs-type">Fragment</span>&gt;\n          &lt;button onClick={<span class="hljs-number">_</span> =&gt; increment()}&gt;\n            { <span class="hljs-type">ReasonReact</span>.string(<span class="hljs-string">"Increment"</span>) }\n          &lt;/button&gt;\n          &lt;button onClick={<span class="hljs-number">_</span> =&gt; decrement()}&gt;\n            { <span class="hljs-type">ReasonReact</span>.string(<span class="hljs-string">"Decrement"</span>) }\n          &lt;/button&gt;\n        &lt;/<span class="hljs-type">React</span>.<span class="hljs-type">Fragment</span>&gt;\n      | <span class="hljs-number">_</span> =&gt; <span class="hljs-type">ReasonReact</span>.null;\n    }\n  }\n}</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">3731</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h3 id="shadowing-context"><a href="#shadowing-context" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Shadowing Context</h3>\n<p>The concept of Scoped Model is that, unlike the Global state which all components have access to the state, Scoped Models only allows access within its component tree, this is comparable as to how "global variables vs local variables" work.</p>\n<p>However, if we use the same Provider within the same tree, the model instance will be shadowed, which is similar to how scoped-based variables in JavaScript work:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code><span class="hljs-built_in">let</span> x = <span class="hljs-number">10</span>;\n<span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {\n  <span class="hljs-built_in">let</span> x = <span class="hljs-number">20</span>;\n  console.log(<span class="hljs-string">\'Shadowed X: \'</span>, x); // Shadowed X: <span class="hljs-number">20</span>\n}\n<span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {\n  console.log(<span class="hljs-string">\'Unshadowed X: \'</span>, x); // Unshadowed X: <span class="hljs-number">10</span>\n}\nconsole.log(<span class="hljs-string">\'Same-level X:\'</span>, x); // Same-level X: <span class="hljs-number">10</span></code></pre></div>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>MIT © <a href="https://github.com/lxsmnsyc">lxsmnsyc</a></p>\n',homepageUrl:"https://github.com/LXSMNSYC/re-scoped-model",repositoryUrl:"https://github.com/lxsmnsyc/re-scoped-model",npmUrl:"https://www.npmjs.com/package/%40lxsmnsyc%2Fre-scoped-model",issuesUrl:"https://github.com/LXSMNSYC/re-scoped-model/issues",slug:"/package/@lxsmnsyc/re-scoped-model"}},pathContext:{id:"@lxsmnsyc/re-scoped-model"}}}});
//# sourceMappingURL=path---package-lxsmnsyc-re-scoped-model-514255c8313aa195691a.js.map