webpackJsonp([62873017841951],{1301:function(e,s){e.exports={data:{package:{type:"published",id:"@cnguy/bs-react-highlight",name:"@cnguy/bs-react-highlight",version:"0.1.0",category:"binding",flags:[],platforms:["browser"],description:"ReasonReact bindings for akiran/react-highlight",keywords:["react","ui"],license:"MIT",updated:"2019-11-15T18:51:52.026Z",stars:0,score:.3976648027895164,quality:.43028229207204705,popularity:.018045847409976112,maintenance:.7493259102126019,readme:'<h1 id="bs-react-highlight"><a href="#bs-react-highlight" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-react-highlight</h1>\n<h2 id="introduction"><a href="#introduction" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Introduction</h2>\n<p>ReasonReact bindings for <a href="https://github.com/akiran/react-highlight">react-highlight</a>.</p>\n<p><strong>State</strong>: Published</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<h3 id="1"><a href="#1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1</h3>\n<ul>\n<li>With <code>yarn</code></li>\n</ul>\n<p><code>yarn add @cnguy/bs-react-highlight</code></p>\n<ul>\n<li>With <code>npm</code></li>\n</ul>\n<p><code>npm install --save @cnguy/bs-react-highlight</code></p>\n<h3 id="2"><a href="#2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2</h3>\n<p>Add <code>@cnguy/bs-react-highlight</code> to <code>bsconfig.json</code> <code>bs-dependencies</code>.</p>\n<h3 id="3"><a href="#3" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3</h3>\n<p>Add a <code>highlight.js</code> theme.</p>\n<p>For example:</p>\n<div class="redex-codeblock"><pre class="hljs lang-html"><code>&lt;html&gt;\n&lt;head&gt;\n  &lt;link\n    rel=<span class="hljs-string">"stylesheet"</span>\n    <span class="hljs-built_in">type</span>=<span class="hljs-string">"text/css"</span>\n    href=<span class="hljs-string">"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-dark.min.css"</span>\n  /&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;div id=<span class="hljs-string">"root"</span> /&gt;\n  &lt;script src=<span class="hljs-string">"bundle.js"</span>&gt;&lt;/script&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>Implicit:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>let component = ReasonReact.statelessComponent("App");\n\nlet code = "\n  function helloWorld() {\n    console.log(\'Hello, world!\')\n  }\n";\n\nlet make = _children =&gt; {\n  ...component,\n  render: _self =&gt; &lt;Highlight&gt; ...code &lt;/Highlight&gt;\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent <span class="hljs-string">"App"</span>\n<span class="hljs-keyword">let</span> code =\n  <span class="hljs-string">"\\n  function helloWorld() {\\n    console.log(\'Hello, world!\')\\n  }\\n"</span>\n<span class="hljs-keyword">let</span> make _children =\n  {\n    component <span class="hljs-keyword">with</span>\n    render =\n      (<span class="hljs-keyword">fun</span> _self  -&gt; ((<span class="hljs-type">Highlight</span>.createElement ~children:code <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]))\n  }</code></pre>\n      </div>\n    </div>\n  \n<p>Explicit:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>let component = ReasonReact.statelessComponent("App");\n\nlet code = "\n    print(\\"Hello, world!\\")\n  ";\n\nlet make = _children =&gt; {\n  ...component,\n  render: _self =&gt; &lt;Highlight className="python"&gt; ...code &lt;/Highlight&gt;,\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent <span class="hljs-string">"App"</span>\n<span class="hljs-keyword">let</span> code = <span class="hljs-string">"\\n    print(\\"Hello, world!\\")\\n  "</span>\n<span class="hljs-keyword">let</span> make _children =\n  {\n    component <span class="hljs-keyword">with</span>\n    render =\n      (<span class="hljs-keyword">fun</span> _self  -&gt;\n         ((<span class="hljs-type">Highlight</span>.createElement ~className:<span class="hljs-string">"python"</span> ~children:code <span class="hljs-literal">()</span>)\n         [@<span class="hljs-type">JSX</span> ]))\n  }</code></pre>\n      </div>\n    </div>\n  \n<p>innerHTML:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>let component = ReasonReact.statelessComponent("App");\n\nlet code = "\n    &lt;h1&gt;Hello, world!&lt;/h1&gt;\n  ";\n\nlet make = _children =&gt; {\n  ...component,\n  render: _self =&gt; &lt;Highlight innerHTML=true&gt; ...code &lt;/Highlight&gt;,\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent <span class="hljs-string">"App"</span>\n<span class="hljs-keyword">let</span> code = <span class="hljs-string">"\\n    &lt;h1&gt;Hello, world!&lt;/h1&gt;\\n  "</span>\n<span class="hljs-keyword">let</span> make _children =\n  {\n    component <span class="hljs-keyword">with</span>\n    render =\n      (<span class="hljs-keyword">fun</span> _self  -&gt;\n         ((<span class="hljs-type">Highlight</span>.createElement ~innerHTML:<span class="hljs-literal">true</span> ~children:code <span class="hljs-literal">()</span>)\n         [@<span class="hljs-type">JSX</span> ]))\n  }</code></pre>\n      </div>\n    </div>\n  \n<h2 id="changes"><a href="#changes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changes</h2>\n<h3 id="010"><a href="#010" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.1.0</h3>\n<p>Release</p>\n<h2 id="contributing"><a href="#contributing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributing</h2>\n<h3 id="development"><a href="#development" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Development</h3>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>yarn start <span class="hljs-comment"># npm run start</span></code></pre></div>\n',homepageUrl:"https://github.com/cnguy/bs-react-highlight#readme",repositoryUrl:"https://github.com/cnguy/bs-react-highlight",npmUrl:"https://www.npmjs.com/package/%40cnguy%2Fbs-react-highlight",issuesUrl:"https://github.com/cnguy/bs-react-highlight/issues",slug:"/package/@cnguy/bs-react-highlight"}},pathContext:{id:"@cnguy/bs-react-highlight"}}}});
//# sourceMappingURL=path---package-cnguy-bs-react-highlight-c397c0da0a14abae4747.js.map