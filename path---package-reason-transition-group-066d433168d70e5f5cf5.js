webpackJsonp([46242702384691],{1387:function(s,n){s.exports={data:{package:{type:"published",id:"reason-transition-group",name:"reason-transition-group",version:"2.1.0",category:"binding",flags:[],platforms:["browser"],description:"Bucklescript bindings for react-transition-group",keywords:["react"],license:"MIT",updated:"2020-02-02T15:45:47.663Z",stars:3,score:.5180321796712044,quality:.5230153191037745,popularity:.04764826898275748,maintenance:.9841448279888769,readme:'<h1 id="reason-transition-group"><a href="#reason-transition-group" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>reason-transition-group</h1>\n<p>This is <a href="https://bucklescript.github.io/">Bucklescript</a> bindings for <a href="https://github.com/reactjs/react-transition-group">react-transition-group</a>.</p>\n<p>versions @2.x.x are written for jsx3\nversions @1.x.x are written for jsx2</p>\n<h1 id="install-npm"><a href="#install-npm" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install, <a href="https://www.npmjs.com/package/reason-transition-group">npm</a></h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add reason-transition-group</code></pre></div>\n<h1 id="setup"><a href="#setup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setup</h1>\n<p>Add reason-transition-group to <code>bs-depenencies</code> in your <code>bsconfig.json</code>!</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>{\n  <span class="hljs-comment">/* ... */</span>\n  <span class="hljs-string">"bs-dependencies"</span>: [\n    <span class="hljs-string">"reason-transition-group"</span>\n  ],\n  <span class="hljs-comment">/* ... */</span>\n}</code></pre></div>\n<h1 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h1>\n<p>Folow official docs of <a href="https://reactcommunity.org/react-transition-group/">React Transition Group</a>.</p>\n<p>jsx2</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">ReasonTransitionGroup</span>\n\n<span class="hljs-comment">/* ... */</span>\n&lt;<span class="hljs-type">Transition</span> _in={inState} timeout=`int(<span class="hljs-number">500</span>)&gt;\n...{state =&gt; &lt;div&gt;{state |&gt; <span class="hljs-type">ReasonReact</span>.string}&lt;/div&gt;}\n&lt;/<span class="hljs-type">Transiton</span>&gt;\n<span class="hljs-comment">/* ... */</span>\n\n<span class="hljs-comment">/* ... */</span>\n&lt;<span class="hljs-type">CSSTransition</span> _in={inState} timeout=`obj(<span class="hljs-type">CSSTransition</span>.timeoutFull(~enter: <span class="hljs-number">500</span>, ~exit:<span class="hljs-number">0</span>, ())) classNames=`string(myClassName)&gt;\n...{state =&gt; &lt;div&gt;{state |&gt; <span class="hljs-type">ReasonReact</span>.string}&lt;/div&gt;}\n&lt;/<span class="hljs-type">CSSTransiton</span>&gt;\n<span class="hljs-comment">/* ... */</span>\n\n\n<span class="hljs-comment">/* ... */</span>\n&lt;<span class="hljs-type">CSSTransition</span> _in={inState} timeout=`obj(<span class="hljs-type">CSSTransition</span>.timeoutFull(~enter: int, ~exit:int, ())) classNames=`obj(<span class="hljs-type">CSSTransition</span>.classFull(~appear: str, ~exit: str, ()))&gt;\n...{state =&gt; &lt;div&gt;{state |&gt; <span class="hljs-type">ReasonReact</span>.string}&lt;/div&gt;}\n&lt;/<span class="hljs-type">CSSTransiton</span>&gt;\n<span class="hljs-comment">/* ... */</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">976</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p>jsx3</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">ReasonTransitionGroup</span>\n\n<span class="hljs-comment">/* ... */</span>\n&lt;<span class="hljs-type">Transition</span> _in={inState} timeout=`int(<span class="hljs-number">500</span>)&gt;\n{state =&gt; &lt;div&gt;{state |&gt; <span class="hljs-type">ReasonReact</span>.string}&lt;/div&gt;}\n&lt;/<span class="hljs-type">Transiton</span>&gt;\n<span class="hljs-comment">/* ... */</span>\n\n<span class="hljs-comment">/* ... */</span>\n&lt;<span class="hljs-type">CSSTransition</span> _in={inState} timeout=`obj(<span class="hljs-type">CSSTransition</span>.timeoutFull(~enter: <span class="hljs-number">500</span>, ~exit:<span class="hljs-number">0</span>, ())) classNames=`string(myClassName)&gt;\n{state =&gt; &lt;div&gt;{state |&gt; <span class="hljs-type">ReasonReact</span>.string}&lt;/div&gt;}\n&lt;/<span class="hljs-type">CSSTransiton</span>&gt;\n<span class="hljs-comment">/* ... */</span>\n\n\n<span class="hljs-comment">/* ... */</span>\n&lt;<span class="hljs-type">CSSTransition</span> _in={inState} timeout=`obj(<span class="hljs-type">CSSTransition</span>.timeoutFull(~enter: int, ~exit:int, ())) classNames=`obj(<span class="hljs-type">CSSTransition</span>.classFull(~appear: str, ~exit: str, ()))&gt;\n{state =&gt; &lt;div&gt;{state |&gt; <span class="hljs-type">ReasonReact</span>.string}&lt;/div&gt;}\n&lt;/<span class="hljs-type">CSSTransiton</span>&gt;\n<span class="hljs-comment">/* ... */</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">976</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p>Also check react-transition-group examples translated to reason-react <a href="./EXAMPLE.md">here for jsx2</a>, <a href="./EXAMPLEJSX3.md">here for jsx3</a></p>\n<p>Feel free to post issues.</p>\n',homepageUrl:"https://github.com/JakubMarkiewicz/reason-transition-group#readme",repositoryUrl:"https://github.com/JakubMarkiewicz/reason-transition-group",npmUrl:"https://www.npmjs.com/package/reason-transition-group",issuesUrl:"https://github.com/JakubMarkiewicz/reason-transition-group/issues",slug:"/package/reason-transition-group"}},pathContext:{id:"reason-transition-group"}}}});
//# sourceMappingURL=path---package-reason-transition-group-066d433168d70e5f5cf5.js.map