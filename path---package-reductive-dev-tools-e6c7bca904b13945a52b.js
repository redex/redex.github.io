webpackJsonp([0x759d1c50d05a],{1403:function(s,e){s.exports={data:{package:{type:"published",id:"reductive-dev-tools",name:"reductive-dev-tools",version:"2.0.0",category:"tool",flags:[],platforms:["browser"],description:"reductive and reason-react reducer component integration with Redux DevTools",keywords:["development tools"],license:"MIT",updated:"2020-05-12T17:43:50.897Z",stars:17,score:.516459110484137,quality:.5230146890953506,popularity:.054170468192112096,maintenance:.9731286853951215,readme:'<h2 id="reductive-dev-tools"><a href="#reductive-dev-tools" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>reductive-dev-tools</h2>\n<p><a href="https://www.npmjs.com/package/reductive-dev-tools"><img src="https://img.shields.io/npm/v/reductive-dev-tools" alt="VERSION"></a>\n<a href="https://github.com/ambientlight/reductive-dev-tools/blob/master/LICENSE"><img src="https://img.shields.io/github/license/ambientlight/reductive-dev-tools" alt="LICENSE"></a>\n<a href="https://github.com/ambientlight/reductive-dev-tools/issues"><img src="https://img.shields.io/github/issues/ambientlight/reductive-dev-tools" alt="ISSUES"></a></p>\n<p><a href="https://github.com/reasonml-community/reductive">reductive</a> and <a href="https://github.com/reasonml/reason-react">reason-react</a> reducer component integration with <a href="https://github.com/zalmoxisus/redux-devtools-extension">redux-devtools-extension</a></p>\n<p><img src="assets/demo.gif" alt="image"></p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<ol>\n<li>\n<p>with npm: </p>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>npm install --save-dev reductive-dev-tools</code></pre></div>\n</li>\n<li>\n<p>add <code>reductive-dev-tools</code> to your "bs-dependencies" inside <code>bsconfig.json</code>.</p>\n</li>\n<li>\n<p>add <code>-bs-g</code> into <code>"bsc-flags"</code> of your <strong>bsconfig.json</strong> to have variant and record field names available inside extension.</p>\n</li>\n</ol>\n<p><strong>Peer depedencies</strong><br>\nreason-react, reductive, redux-devtools-extension, redux (redux-devtools-extension\'s peer dep.) should be also installed.</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>Utilize provided store enhancer <code>ReductiveDevTools.Connectors.enhancer</code> for <strong>reductive</strong> or <code>ReductiveDevTools.Connectors.useReducer</code> for <strong>reason-react hooks</strong> (jsx3). </p>\n<p>You need to pass devtools extension <a href="#options">options</a> as <code>~options</code> and action creator that builds action when state update is dispatched from the monitor as <code>~devToolsUpdateActionCreator</code>. Additionally you can also pass <code>~stateSerializer</code> and <code>~actionSerializer</code> to override default serialization behaviour. Take a look at <a href="#serialization">Serialization</a> to see if you need it.</p>\n<h4 id="reductive"><a href="#reductive" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>reductive</h4>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> storeCreator = \n  <span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Connectors</span>.enhancer(\n    ~options=<span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Extension</span>.enhancerOptions(\n      ~name=__MODULE__, \n      ~actionCreators={\n        <span class="hljs-string">"actionYouCanDispatchFromMonitor"</span>: (value: int) =&gt; `<span class="hljs-type">YourActionOfChoice</span>(value)\n          |. <span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Utilities</span>.<span class="hljs-type">Serializer</span>.serializeAction\n      },\n      ()),\n    ~devToolsUpdateActionCreator=(devToolsState) =&gt; `<span class="hljs-type">DevToolsUpdate</span>(devToolsState),\n    ()\n  ) \n  @@ <span class="hljs-type">Reductive</span>.<span class="hljs-type">Store</span>.create;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> storeCreator =\n  (<span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Connectors</span>.enhancer\n     ~options:(<span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Extension</span>.enhancerOptions ~name:__MODULE__\n                 ~actionCreators:([%bs.obj\n                                    {\n                                      actionYouCanDispatchFromMonitor =\n                                        (<span class="hljs-keyword">fun</span> (<span class="hljs-keyword">value</span> : <span class="hljs-built_in">int</span>)  -&gt;\n                                           (<span class="hljs-tag">`YourActionOfChoice</span> <span class="hljs-keyword">value</span>) |.\n                                             <span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Utilities</span>.<span class="hljs-type">Serializer</span>.serializeAction)\n                                    }]) <span class="hljs-literal">()</span>)\n     ~devToolsUpdateActionCreator:(<span class="hljs-keyword">fun</span> devToolsState  -&gt;\n                                     <span class="hljs-tag">`DevToolsUpdate</span> devToolsState) <span class="hljs-literal">()</span>)\n    @@ <span class="hljs-type">Reductive</span>.<span class="hljs-type">Store</span>.create</code></pre>\n      </div>\n    </div>\n  \n<h4 id="react-hooks-usereducer-jsx3"><a href="#react-hooks-usereducer-jsx3" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Hooks useReducer (jsx3)</h4>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> (state, send) = <span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Connectors</span>.useReducer(\n  ~options=<span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Extension</span>.enhancerOptions(\n    ~name=__MODULE__, \n    ~actionCreators={\n      <span class="hljs-string">"actionYouCanDispatchFromMonitor"</span>: (value: int) =&gt; `<span class="hljs-type">YourActionOfChoice</span>(value)\n        |. <span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Utilities</span>.<span class="hljs-type">Serializer</span>.serializeAction\n    },\n    ()),\n  ~devToolsUpdateActionCreator=(devToolsState) =&gt; `<span class="hljs-type">DevToolsUpdate</span>(devToolsState),\n  ~reducer,\n  ~initial=yourInitialState,\n  ());</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> (state,send) =\n  <span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Connectors</span>.useReducer\n    ~options:(<span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Extension</span>.enhancerOptions ~name:__MODULE__\n                ~actionCreators:([%bs.obj\n                                   {\n                                     actionYouCanDispatchFromMonitor =\n                                       (<span class="hljs-keyword">fun</span> (<span class="hljs-keyword">value</span> : <span class="hljs-built_in">int</span>)  -&gt;\n                                          (<span class="hljs-tag">`YourActionOfChoice</span> <span class="hljs-keyword">value</span>) |.\n                                            <span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Utilities</span>.<span class="hljs-type">Serializer</span>.serializeAction)\n                                   }]) <span class="hljs-literal">()</span>)\n    ~devToolsUpdateActionCreator:(<span class="hljs-keyword">fun</span> devToolsState  -&gt;\n                                    <span class="hljs-tag">`DevToolsUpdate</span> devToolsState) ~reducer\n    ~initial:yourInitialState <span class="hljs-literal">()</span></code></pre>\n      </div>\n    </div>\n  \n<h4 id="usage-with-reactreason-legacy-reducer-component-jsx2"><a href="#usage-with-reactreason-legacy-reducer-component-jsx2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage with ReactReason legacy reducer component (jsx2)</h4>\n<p>No longer supported. Please install latest from 0.x:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install --save-dev reductive-dev-tools@0.2.6</code></pre></div>\n<p>And refer to <a href="https://github.com/ambientlight/reductive-dev-tools/blob/dac77af64763d1aaed584a405c8caeb8b8597272/README.md#usage-with-reactreason-reducer-component">old documentation</a>.</p>\n<h2 id="serialization"><a href="#serialization" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Serialization</h2>\n<h3 id="actions"><a href="#actions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Actions</h3>\n<p><a href="https://github.com/zalmoxisus/redux-devtools-extension">redux-devtools-extension</a> uses value under <code>type</code> key of action object for its name in the monitor. Most likely you are going to use <a href="https://reasonml.github.io/docs/en/variant">variants</a> for actions, which need to be serialized into js objects to be usefully displayed inside the extension. Actions serialization is built-in. As an alternative, you can override default serializer by passing <code>~actionSerializer</code> like:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Connectors</span>.enhancer(\n  ~options=<span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Extension</span>.enhancerOptions(\n    ~name=__MODULE__, \n    ()),\n  ~actionSerializer={\n    serialize: obj =&gt; {\n      <span class="hljs-comment">// your serialization logic</span>\n      obj\n    },\n    deserialize: obj =&gt; {\n      <span class="hljs-comment">// your deserialization logic</span>\n      obj\n    }\n  },\n  ())</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">3321</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<p>There are few caveats that apply to default serialization though.</p>\n<ol>\n<li>Make sure to add <code>-bs-g</code> into <code>"bsc-flags"</code> of your <strong>bsconfig.json</strong> to have variant names available.</li>\n<li>Variants with constructors should be prefered to plain (<code>SomeAction(unit)</code> to <code>SomeAction</code>) since plain varaints do no carry debug metedata(in symbols) with them (represented as numbers in js).</li>\n<li>Action names won\'t be displayed when using <a href="https://caml.inria.fr/pub/docs/manual-ocaml/manual037.html#sec269">extensible variants</a>, they also do not carry debug metadata. <a href="https://github.com/ambientlight/reductive-dev-tools/issues/2">Extensible variant name becomes "update"</a></li>\n<li>Records inside variants do not carry debug metadata in bucklescript yet, if needed you can tag them manually. See <a href="#additional-tagging">Additional Tagging</a>.</li>\n</ol>\n<h3 id="state"><a href="#state" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>State</h3>\n<p>There is no serialization applied to state by default. If you are on <a href="https://github.com/BuckleScript/bucklescript/releases/tag/7.0.1">bs-platform 7.0</a>, most likely you do not need it, since <a href="https://bucklescript.github.io/blog/2019/11/18/whats-new-in-7">ocaml records are compiled to js objects</a>. For earlier versions of <a href="https://www.npmjs.com/package/bs-platform">bs-platform</a>, please pass the next <code>~stateSerializer</code>:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Connectors</span>.enhancer(\n  ~options=<span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Extension</span>.enhancerOptions(\n    ~name=__MODULE__, \n    ()),\n  ~stateSerializer={\n    serialize: <span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Utilities</span>.<span class="hljs-type">Serializer</span>.serializeObject,\n    deserialize: <span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Utilities</span>.<span class="hljs-type">Serializer</span>.deserializeObject\n  },\n  ())</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  <span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Connectors</span>.enhancer\n    ~options:(<span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Extension</span>.enhancerOptions ~name:__MODULE__ <span class="hljs-literal">()</span>)\n    ~stateSerializer:{\n                       serialize =\n                         <span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Utilities</span>.<span class="hljs-type">Serializer</span>.serializeObject;\n                       deserialize =\n                         <span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Utilities</span>.<span class="hljs-type">Serializer</span>.deserializeObject\n                     } <span class="hljs-literal">()</span></code></pre>\n      </div>\n    </div>\n  \n<h2 id="options"><a href="#options" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Options</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Extension</span>.enhancerOptions(\n  <span class="hljs-comment">/* the instance name to be showed on the monitor page */</span>\n  ~name=<span class="hljs-string">"SomeTest"</span>,\n  \n  <span class="hljs-comment">/* action creators functions to be available in the Dispatcher. */</span>\n  ~actionCreators={\n    <span class="hljs-string">"increment"</span>: () =&gt; `<span class="hljs-type">Increment</span>(()) |. <span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Utilities</span>.<span class="hljs-type">Serializer</span>.serializeAction,\n    <span class="hljs-string">"decrement"</span>: () =&gt; `<span class="hljs-type">Decrement</span>(()) |. <span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Utilities</span>.<span class="hljs-type">Serializer</span>.serializeAction\n  },\n  \n  <span class="hljs-comment">/* if more than one action is dispatched in the indicated interval, all new actions will be collected and sent at once */</span>\n  ~latency=<span class="hljs-number">500</span>,\n  \n  <span class="hljs-comment">/* maximum allowed actions to be stored in the history tree. */</span>\n  ~maxAge=<span class="hljs-number">50</span>,\n  \n  <span class="hljs-comment">/* actions types to be hidden / shown in the monitors (while passed to the reducers), If `actionsWhitelist` specified, `actionsBlacklist` is ignored. */</span>\n  ~actionsBlacklist=[|<span class="hljs-string">"StringAction"</span>|],\n  \n  <span class="hljs-comment">/* actions types to be hidden / shown in the monitors (while passed to the reducers), If `actionsWhitelist` specified, `actionsBlacklist` is ignored. */</span>\n  ~actionsWhitelist=[|<span class="hljs-string">"CounterAction"</span>|],\n  \n  <span class="hljs-comment">/* if specified as `true`, whenever there\'s an exception in reducers, the monitors will show the error message, and next actions will not be dispatched. */</span>\n  ~shouldCatchErrors=<span class="hljs-literal">false</span>,\n  \n  <span class="hljs-comment">/* If you want to restrict the extension, specify the features you allow. */</span>\n  ~features=<span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Extension</span>.enhancerFeatures(\n    ~pause=<span class="hljs-literal">true</span>,\n    ~persist=<span class="hljs-literal">true</span>,\n    ~export=<span class="hljs-literal">true</span>,\n    ~<span class="hljs-keyword">import</span>=<span class="hljs-type">Obj</span>.magic(<span class="hljs-string">"custom"</span>),\n    ~jump=<span class="hljs-literal">true</span>,\n    ~dispatch=<span class="hljs-literal">true</span>,\n    ()),\n\n  <span class="hljs-comment">/* if set to true, will include stack trace for every dispatched action, so you can see it in trace tab */</span>\n  ~trace=<span class="hljs-literal">true</span>,\n\n  <span class="hljs-comment">/* maximum stack trace frames to be stored (in case trace option was provided as true) */</span>\n  ~traceLimit=<span class="hljs-number">50</span>\n  ())</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  <span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Extension</span>.enhancerOptions ~name:<span class="hljs-string">"SomeTest"</span>\n    ~actionCreators:([%bs.obj\n                       {\n                         increment =\n                           (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n                              (<span class="hljs-tag">`Increment</span> <span class="hljs-literal">()</span>) |.\n                                <span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Utilities</span>.<span class="hljs-type">Serializer</span>.serializeAction);\n                         decrement =\n                           (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n                              (<span class="hljs-tag">`Decrement</span> <span class="hljs-literal">()</span>) |.\n                                <span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Utilities</span>.<span class="hljs-type">Serializer</span>.serializeAction)\n                       }]) ~latency:<span class="hljs-number">500</span> ~maxAge:<span class="hljs-number">50</span>\n    ~actionsBlacklist:[|<span class="hljs-string">"StringAction"</span>|]\n    ~actionsWhitelist:[|<span class="hljs-string">"CounterAction"</span>|] ~shouldCatchErrors:<span class="hljs-literal">false</span>\n    ~features:(<span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Extension</span>.enhancerFeatures ~pause:<span class="hljs-literal">true</span>\n                 ~persist:<span class="hljs-literal">true</span> ~export:<span class="hljs-literal">true</span> ~import:(<span class="hljs-type">Obj</span>.magic <span class="hljs-string">"custom"</span>)\n                 ~jump:<span class="hljs-literal">true</span> ~dispatch:<span class="hljs-literal">true</span> <span class="hljs-literal">()</span>) ~trace:<span class="hljs-literal">true</span>\n    ~traceLimit:(<span class="hljs-number">50</span> <span class="hljs-literal">()</span>)</code></pre>\n      </div>\n    </div>\n  \n<h2 id="additional-tagging"><a href="#additional-tagging" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Additional Tagging</h2>\n<p>You can also manually customize serialized objects keys and action names displayed inside extension.\nTwo common usecases:</p>\n<ol>\n<li>\n<p>Labeling variants with constructors.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> routerActions = [\n  | `<span class="hljs-type">RouterLocationChanged</span>(list(string), string, string)\n];\n\nopen <span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Utilities</span>;\n<span class="hljs-type">Reductive</span>.<span class="hljs-type">Store</span>.dispatch(store, \n  `<span class="hljs-type">RouterLocationChanged</span>(url.path, url.hash, url.search)\n    |. labelVariant([|<span class="hljs-string">"path"</span>, <span class="hljs-string">"hash"</span>, <span class="hljs-string">"search"</span>|]));</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> routerActions =\n  [ <span class="hljs-tag">`RouterLocationChanged</span> <span class="hljs-keyword">of</span> (<span class="hljs-built_in">string</span> <span class="hljs-built_in">list</span>* <span class="hljs-built_in">string</span>* <span class="hljs-built_in">string</span>) ]\n<span class="hljs-keyword">open</span> <span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Utilities</span>\n<span class="hljs-keyword">let</span> _ =\n  <span class="hljs-type">Reductive</span>.<span class="hljs-type">Store</span>.dispatch store\n    ((<span class="hljs-tag">`RouterLocationChanged</span> ((url.path), (url.hash), (url.search))) |.\n       (labelVariant [|<span class="hljs-string">"path"</span>;<span class="hljs-string">"hash"</span>;<span class="hljs-string">"search"</span>|]))</code></pre>\n      </div>\n    </div>\n  \n</li>\n<li>\n<p>Labeling record keys for records inside variants (since Records inside variants do not carry debug metadata in bucklescript yet).</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> url = {\n  path: list(string),\n  hash: string,\n  search: string,\n};\n<span class="hljs-keyword">type</span> routerActions = [\n  | `<span class="hljs-type">RouterLocationChanged</span>(url)\n];\n\nopen <span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Utilities</span>;\n<span class="hljs-type">Reductive</span>.<span class="hljs-type">Store</span>.dispatch(store, \n  `<span class="hljs-type">RouterLocationChanged</span>(url\n    |. tagRecord([|<span class="hljs-string">"path"</span>, <span class="hljs-string">"hash"</span>, <span class="hljs-string">"search"</span>|]));</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">949</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n</li>\n</ol>\n<p>This can also be used to override bucklescript debug metadata(if really needed). Definitions are at: <a href="https://github.com/ambientlight/reductive-dev-tools/blob/a530ea6d09d7facad2b70c061703eff52cfa80b4/src/utilities.rei#L63-L67">utilities.rei</a></p>\n',homepageUrl:"https://github.com/ambientlight/reductive-dev-tools#readme",repositoryUrl:"https://github.com/ambientlight/reductive-dev-tools",npmUrl:"https://www.npmjs.com/package/reductive-dev-tools",issuesUrl:"https://github.com/ambientlight/reductive-dev-tools/issues",slug:"/package/reductive-dev-tools"}},pathContext:{id:"reductive-dev-tools"}}}});
//# sourceMappingURL=path---package-reductive-dev-tools-e6c7bca904b13945a52b.js.map