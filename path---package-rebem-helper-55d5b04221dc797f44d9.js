webpackJsonp([0xe41575b92c86],{1395:function(s,e){s.exports={data:{package:{type:"published",id:"rebem-helper",name:"rebem-helper",version:"2.1.0",category:"library",flags:[],platforms:["any"],description:"Simple BEM helper with ReasonMl",keywords:["css","utilities"],license:"MIT",updated:"2020-03-24T10:40:34.156Z",stars:3,score:.6489430975236663,quality:.9680101845763571,popularity:.024461649216918395,maintenance:.9999384712138222,readme:'<h1 id="rebem-helper-circleci"><a href="#rebem-helper-circleci" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>reBEM Helper <a href="https://circleci.com/gh/remithomas/rebem-helper"><img src="https://circleci.com/gh/remithomas/rebem-helper.svg?style=svg" alt="CircleCI"></a></h1>\n<p><a href="https://www.npmjs.com/package/rebem-helper"><img src="https://img.shields.io/npm/v/rebem-helper.svg?style=flat-square" alt="npm version"></a> <a href="https://coveralls.io/github/remithomas/rebem-helper?branch=reorder_readme"><img src="https://coveralls.io/repos/github/remithomas/rebem-helper/badge.svg?branch=reorder_readme" alt="Coverage Status"></a></p>\n<blockquote>\n<p>A simple BEM helper using <a href="http://reasonml.github.io">ReasonMl</a></p>\n</blockquote>\n<h2 id="how-to-install"><a href="#how-to-install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to install</h2>\n<ol>\n<li>Install <code>reBEM Helper</code></li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>npm install rebem-helper</code></pre></div>\n<p>or</p>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>yarn add rebem-helper</code></pre></div>\n<ol start="2">\n<li>Add <code>rebem-helper</code> to "bs-dependencies" section of bsconfig.json</li>\n</ol>\n<h2 id="how-to-use"><a href="#how-to-use" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to use</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">ReBemHelper</span>;\n\n<span class="hljs-comment">/* Write my-block my-block--active */</span>\n<span class="hljs-keyword">let</span> isActive = <span class="hljs-literal">true</span>;\n<span class="hljs-keyword">let</span> myBemClassNames = bem(~block=<span class="hljs-string">"my-block"</span>, ~modifiers=[<span class="hljs-type">Boolean</span>(<span class="hljs-string">"active"</span>, isActive)], ());</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">ReBemHelper</span>\n<span class="hljs-keyword">let</span> isActive = <span class="hljs-literal">true</span>\n<span class="hljs-keyword">let</span> myBemClassNames =\n  bem ~block:<span class="hljs-string">"my-block"</span>\n    ~modifiers:[((<span class="hljs-type">Boolean</span> (<span class="hljs-string">"active"</span>, isActive))[@explicit_arity ])] <span class="hljs-literal">()</span></code></pre>\n      </div>\n    </div>\n  \n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">ReBemHelper</span>;\n\n<span class="hljs-comment">/* Write class names: my-block my-block--small */</span>\n<span class="hljs-keyword">let</span> mySizeBemClassNames = bem(~block=<span class="hljs-string">"my-block"</span>, ~modifiers=[<span class="hljs-type">String</span>(<span class="hljs-string">"small"</span>)], ());</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">ReBemHelper</span>\n<span class="hljs-keyword">let</span> mySizeBemClassNames =\n  bem ~block:<span class="hljs-string">"my-block"</span> ~modifiers:[((<span class="hljs-type">String</span> (<span class="hljs-string">"small"</span>))[@explicit_arity ])]\n    <span class="hljs-literal">()</span></code></pre>\n      </div>\n    </div>\n  \n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">ReBemHelper</span>;\n<span class="hljs-comment">/* Write class names: my-block my-block--active my-block--small my-block--disable */</span>\n<span class="hljs-keyword">let</span> mySizeBemClassNames = bem(\n  ~block=<span class="hljs-string">"my-block"</span>,\n  ~modifiers=[\n    <span class="hljs-type">String</span>(<span class="hljs-string">"small"</span>),\n    <span class="hljs-type">Boolean</span>(<span class="hljs-string">"active"</span>, isActive),\n    <span class="hljs-type">Switch</span>(<span class="hljs-string">"enable"</span>, <span class="hljs-string">"disable"</span>, <span class="hljs-literal">false</span>)\n  ],\n  ()\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">ReBemHelper</span>\n<span class="hljs-keyword">let</span> mySizeBemClassNames =\n  bem ~block:<span class="hljs-string">"my-block"</span>\n    ~modifiers:[((<span class="hljs-type">String</span> (<span class="hljs-string">"small"</span>))[@explicit_arity ]);\n               ((<span class="hljs-type">Boolean</span> (<span class="hljs-string">"active"</span>, isActive))[@explicit_arity ]);\n               ((<span class="hljs-type">Switch</span> (<span class="hljs-string">"enable"</span>, <span class="hljs-string">"disable"</span>, <span class="hljs-literal">false</span>))[@explicit_arity ])] <span class="hljs-literal">()</span></code></pre>\n      </div>\n    </div>\n  \n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">ReBemHelper</span>;\n<span class="hljs-comment">/* Write class names: my-block__element my-block__element--small some-other-class */</span>\n<span class="hljs-keyword">let</span> mySizeBemClassNames = bem(~block=<span class="hljs-string">"my-block"</span>, ~element=<span class="hljs-string">"element"</span>, ~modifiers=[<span class="hljs-type">String</span>(<span class="hljs-string">"small"</span>)], ~others=<span class="hljs-string">"some-other-class"</span>, ());</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">ReBemHelper</span>\n<span class="hljs-keyword">let</span> mySizeBemClassNames =\n  bem ~block:<span class="hljs-string">"my-block"</span> ~element:<span class="hljs-string">"element"</span>\n    ~modifiers:[((<span class="hljs-type">String</span> (<span class="hljs-string">"small"</span>))[@explicit_arity ])]\n    ~others:<span class="hljs-string">"some-other-class"</span> <span class="hljs-literal">()</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="modifier-list"><a href="#modifier-list" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Modifier list</h3>\n<ul>\n<li><code>String(modifierName)</code> String(string)</li>\n<li><code>Boolean(modifierName, shouldShowModifierName)</code> Boolean(string, bool)</li>\n<li><code>Switch(activeModifierName, unactiveModifierName, isActiveModifierName)</code> Switch(string, string, bool)</li>\n</ul>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<p>See more examples in <a href="./examples">examples folder</a>:</p>\n<h2 id="development"><a href="#development" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Development</h2>\n<p>Install and code.</p>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>yarn install\nyarn start</code></pre></div>\n<p>Run tests</p>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>yarn <span class="hljs-built_in">test</span></code></pre></div>\n<p>Run tests (on watch)</p>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>yarn <span class="hljs-built_in">test</span>:dev</code></pre></div>\n<h2 id="how-to-contribute"><a href="#how-to-contribute" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to contribute</h2>\n<p>Please feel free to write an issue/PR if you see/want somethings.</p>\n',homepageUrl:null,repositoryUrl:null,npmUrl:"https://www.npmjs.com/package/rebem-helper",issuesUrl:null,slug:"/package/rebem-helper"}},pathContext:{id:"rebem-helper"}}}});
//# sourceMappingURL=path---package-rebem-helper-55d5b04221dc797f44d9.js.map