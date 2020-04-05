webpackJsonp([0x70bf625cad28],{1343:function(s,e){s.exports={data:{package:{type:"published",id:"@moox/bs-react-helmet",name:"@moox/bs-react-helmet",version:"2.1.0",category:"binding",flags:[],platforms:["browser","node"],description:"Reason / BuckleScript bindings for React Helmet, a document head manager for React",keywords:["react"],license:"MIT",updated:"2020-03-19T10:50:34.300Z",stars:4,score:.6262019664086746,quality:.863298997073926,popularity:.049239435319025894,maintenance:.9999384712138222,readme:'<h1 id="mooxbs-react-helmet"><a href="#mooxbs-react-helmet" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>@moox/bs-react-helmet</h1>\n<blockquote>\n<p><a href="https://reasonml.github.io">Reason</a> / <a href="https://bucklescript.github.io">BuckleScript</a> bindings for <a href="https://github.com/nfl/react-helmet">React Helmet</a>, a document head manager for React.</p>\n</blockquote>\n<h2 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h2>\n<div class="redex-codeblock"><pre class="hljs lang-console"><code>yarn add react-helmet @moox/bs-react-helmet</code></pre></div>\n<p>Note that you need <code>react</code>, <code>react-dom</code>, <code>reason-react</code> and <code>react-helmet</code>\nas peer dependencies.</p>\n<p>Adjust your <code>bsconfig.js</code> by adding this package:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>  <span class="hljs-string">"bs-dependencies"</span>: [\n    <span class="hljs-string">"reason-react"</span>,\n    <span class="hljs-string">"@moox/bs-react-helmet"</span>\n  ]</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent(<span class="hljs-string">"CommonThings"</span>);\n\n<span class="hljs-keyword">let</span> make = (<span class="hljs-number">_</span>) =&gt; {\n  ...component,\n  render: _self =&gt;\n    &lt;<span class="hljs-type">BsReactHelmet</span> defaultTitle=<span class="hljs-string">"This is a title"</span>&gt;\n      &lt;style&gt;\n        (\n          {j|\nhtml {\n  height: <span class="hljs-number">100</span>%;\n  font-family: -apple-system, <span class="hljs-type">BlinkMacSystemFont</span>, <span class="hljs-string">"Segoe UI"</span>, <span class="hljs-type">Roboto</span>, <span class="hljs-type">Ubuntu</span>, <span class="hljs-string">"Helvetica Neue"</span>, sans-serif;\n}\n|j}\n          |&gt; <span class="hljs-type">ReasonReact</span>.string\n        )\n      &lt;/style&gt;\n    &lt;/<span class="hljs-type">BsReactHelmet</span>&gt;\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent <span class="hljs-string">"CommonThings"</span>\n<span class="hljs-keyword">let</span> make _ =\n  {\n    component <span class="hljs-keyword">with</span>\n    render =\n      (<span class="hljs-keyword">fun</span> _self  -&gt;\n         ((<span class="hljs-type">BsReactHelmet</span>.createElement ~defaultTitle:<span class="hljs-string">"This is a title"</span>\n             ~children:[((style\n                            ~children:[{j|\nhtml {\n  height: <span class="hljs-number">100</span>%;\n  font-family: -apple-system, <span class="hljs-type">BlinkMacSystemFont</span>, <span class="hljs-string">"Segoe UI"</span>, <span class="hljs-type">Roboto</span>, <span class="hljs-type">Ubuntu</span>, <span class="hljs-string">"Helvetica Neue"</span>, sans-serif;\n}\n|j}\n                                         |&gt; <span class="hljs-type">ReasonReact</span>.<span class="hljs-built_in">string</span>] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])]\n             <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]))\n  }</code></pre>\n      </div>\n    </div>\n  \n<h3 id="server-side-static-rendering"><a href="#server-side-static-rendering" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Server-side static rendering</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> helmet = <span class="hljs-type">BsReactHelmet</span>.renderStatic();\n<span class="hljs-keyword">let</span> title = helmet##title##<span class="hljs-built_in">toString</span>();</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> helmet = <span class="hljs-type">BsReactHelmet</span>.renderStatic <span class="hljs-literal">()</span>\n<span class="hljs-keyword">let</span> title = (## (## helmet title) toString) <span class="hljs-literal">()</span></code></pre>\n      </div>\n    </div>\n  \n<p>Follow official documentation for all methods available.</p>\n<hr>\n<h2 id="changelog"><a href="#changelog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a href="CHANGELOG.md">CHANGELOG</a></h2>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a href="LICENSE">LICENSE</a></h2>\n',homepageUrl:"https://github.com/MoOx/bs-react-helmet",repositoryUrl:"https://github.com/MoOx/bs-react-helmet",npmUrl:"https://www.npmjs.com/package/%40moox%2Fbs-react-helmet",issuesUrl:"https://github.com/MoOx/bs-react-helmet/issues",slug:"/package/@moox/bs-react-helmet"}},pathContext:{id:"@moox/bs-react-helmet"}}}});
//# sourceMappingURL=path---package-moox-bs-react-helmet-0505fa4bf33505fa1114.js.map