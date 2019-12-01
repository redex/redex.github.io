webpackJsonp([96041596009105],{1441:function(s,a){s.exports={data:{package:{type:"unpublished",id:"unpublished/MargaretKrutikova/reason-react-elmish",name:"MargaretKrutikova/reason-react-elmish",version:"0.1.0",category:"library",flags:[],platforms:["browser"],description:"Elmish architecture for reason-react",keywords:["state management","react"],license:"MIT",updated:"2019-12-01T15:36:52.907Z",stars:5,score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="reason-react-elmish"><a href="#reason-react-elmish" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>reason-react-elmish</h1>\n<p>The library implements the "model-update" part of the "model-view-update" elm architecture, leveraging React as the "view" part and implementing the missing part of state and effect management.</p>\n<p>🚧 Not production ready (yet), but trying out is highly encouraged 🚧</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>Can be installed via:</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install --save <span class="hljs-string">"https://github.com/MargaretKrutikova/reason-react-elmish"</span></code></pre></div>\n<p>and added to bsconfig.json:</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code><span class="hljs-string">"bs-dependencies"</span>: [\n  <span class="hljs-string">"reason-react-elmish"</span>\n]</code></pre></div>\n<p>Peer dependencies are <code>react</code>, <code>reason-react</code> and <code>bs-platform</code>.</p>\n<h2 id="example-usage"><a href="#example-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example usage</h2>\n<p>First, define your types for message and model, implement the update function and effectful functions (if any).\nSetup your elmish store with all of the above and your initial state with initial effect (if any).</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">// AppStore.re</span>\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Config</span> = </span>{\n  <span class="hljs-keyword">type</span> message =\n    | <span class="hljs-type">Click</span>\n    | <span class="hljs-type">Success</span>\n    | <span class="hljs-type">Error</span>;\n\n  <span class="hljs-keyword">type</span> model = {\n    <span class="hljs-built_in">count</span>: int,\n    result: option(bool),\n  };\n\n  <span class="hljs-keyword">let</span> makeApiCall = dispatch =&gt; {\n    <span class="hljs-keyword">let</span> test = <span class="hljs-type">Js</span>.<span class="hljs-type">Math</span>.random_int(<span class="hljs-number">0</span>, <span class="hljs-number">2</span>);\n    <span class="hljs-keyword">if</span> (test == <span class="hljs-number">1</span>) {\n      dispatch(<span class="hljs-type">Success</span>);\n    } <span class="hljs-keyword">else</span> {\n      dispatch(<span class="hljs-type">Error</span>);\n    };\n    <span class="hljs-type">None</span>;\n  };\n\n  <span class="hljs-keyword">let</span> update = (model, message) =&gt; {\n    <span class="hljs-keyword">switch</span> (message) {\n    | <span class="hljs-type">Click</span> =&gt; ({...model, <span class="hljs-built_in">count</span>: model.<span class="hljs-built_in">count</span> + <span class="hljs-number">1</span>}, <span class="hljs-type">Some</span>(makeApiCall))\n    | <span class="hljs-type">Success</span> =&gt; ({...model, result: <span class="hljs-type">Some</span>(<span class="hljs-literal">true</span>)}, <span class="hljs-type">None</span>)\n    | <span class="hljs-type">Error</span> =&gt; ({...model, result: <span class="hljs-type">Some</span>(<span class="hljs-literal">false</span>)}, <span class="hljs-type">None</span>)\n    };\n  };\n\n  <span class="hljs-keyword">let</span> initialState = ({<span class="hljs-built_in">count</span>: <span class="hljs-number">0</span>, result: <span class="hljs-type">None</span>}, <span class="hljs-type">None</span>);\n};\n\n<span class="hljs-keyword">include</span> <span class="hljs-type">Elmish</span>.<span class="hljs-type">Make</span>({\n  <span class="hljs-keyword">type</span> model = <span class="hljs-type">Config</span>.model;\n  <span class="hljs-keyword">type</span> message = <span class="hljs-type">Config</span>.message;\n\n  <span class="hljs-keyword">let</span> update = <span class="hljs-type">Config</span>.update;\n  <span class="hljs-keyword">let</span> storeEnhancer = <span class="hljs-type">None</span>;\n  <span class="hljs-keyword">let</span> initialState = <span class="hljs-type">Config</span>.initialState;\n});</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">0</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<p>See example file <a href="./examples/AppStore.re"><code>./examples/AppStore.re</code></a>.</p>\n<p>Then hook in your store into the react component tree somewhere at the root:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">// Index.re</span>\n<span class="hljs-type">ReactDOMRe</span>.renderToElementWithId(\n  &lt;<span class="hljs-type">AppStore</span>.<span class="hljs-type">ElmishProvider</span>&gt; &lt;<span class="hljs-type">Root</span> /&gt; &lt;/<span class="hljs-type">AppStore</span>.<span class="hljs-type">ElmishProvider</span>&gt;,\n  <span class="hljs-string">"root"</span>,\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">0</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<p>and use the hooks to get access to the model and dispatch in your components:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> selector = (model: <span class="hljs-type">AppStore</span>.model) =&gt; model.result;\n\n[@react.component]\n<span class="hljs-keyword">let</span> make = () =&gt; {\n  <span class="hljs-keyword">let</span> dispatch = <span class="hljs-type">AppStore</span>.useDispatch();\n  <span class="hljs-keyword">let</span> result = <span class="hljs-type">AppStore</span>.useSelector(selector);\n\n  &lt;div&gt;\n    &lt;button onClick={_event =&gt; dispatch(<span class="hljs-type">Click</span>)}&gt;\n      {<span class="hljs-type">ReasonReact</span>.string(<span class="hljs-string">"Click"</span>)}\n    &lt;/button&gt;\n  &lt;/div&gt;;\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> selector (model : <span class="hljs-type">AppStore</span>.model) = model.result\n<span class="hljs-keyword">let</span> make <span class="hljs-literal">()</span> =\n  <span class="hljs-keyword">let</span> dispatch = <span class="hljs-type">AppStore</span>.useDispatch <span class="hljs-literal">()</span> <span class="hljs-keyword">in</span>\n  <span class="hljs-keyword">let</span> result = <span class="hljs-type">AppStore</span>.useSelector selector <span class="hljs-keyword">in</span>\n  ((div\n      ~children:[((button ~onClick:(<span class="hljs-keyword">fun</span> _event  -&gt; dispatch <span class="hljs-type">Click</span>)\n                     ~children:[<span class="hljs-type">ReasonReact</span>.<span class="hljs-built_in">string</span> <span class="hljs-string">"Click"</span>] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)\n    [@<span class="hljs-type">JSX</span> ])[@@react.component ]</code></pre>\n      </div>\n    </div>\n  \n<h2 id="run-examples"><a href="#run-examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Run examples</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install\nnpm start\n<span class="hljs-comment"># in another tab</span>\nnpm run watch:bs</code></pre></div>\n',homepageUrl:"https://github.com/MargaretKrutikova/reason-react-elmish",repositoryUrl:"https://github.com/MargaretKrutikova/reason-react-elmish",npmUrl:null,issuesUrl:"https://github.com/MargaretKrutikova/reason-react-elmish/issues",slug:"/package/unpublished/MargaretKrutikova/reason-react-elmish"}},pathContext:{id:"unpublished/MargaretKrutikova/reason-react-elmish"}}}});
//# sourceMappingURL=path---package-unpublished-margaret-krutikova-reason-react-elmish-0b93c0242bb2a00a03aa.js.map