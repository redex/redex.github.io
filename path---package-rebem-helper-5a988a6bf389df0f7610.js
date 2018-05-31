webpackJsonp([0xe41575b92c86],{1218:function(e,s){e.exports={data:{package:{id:"rebem-helper",stars:1,name:"rebem-helper",version:"1.1.2",category:"library",flags:[],platforms:["any"],description:"Simple BEM helper with ReasonMl",keywords:["css","utilities"],license:"MIT",updated:"2018-05-26T16:16:31.654Z",type:"published",score:.6554750715333676,quality:.9863107335187484,popularity:.027392221213739736,maintenance:.9999844972940977,readme:'<h1 id="rebem-helper-circleci"><a href="#rebem-helper-circleci" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>reBEM Helper <a href="https://circleci.com/gh/remithomas/rebem-helper"><img src="https://circleci.com/gh/remithomas/rebem-helper.svg?style=svg" alt="CircleCI"></a></h1>\n<p><a href="https://www.npmjs.com/package/rebem-helper"><img src="https://img.shields.io/npm/v/rebem-helper.svg?style=flat-square" alt="npm version"></a> <a href="https://coveralls.io/github/remithomas/rebem-helper?branch=reorder_readme"><img src="https://coveralls.io/repos/github/remithomas/rebem-helper/badge.svg?branch=reorder_readme" alt="Coverage Status"></a></p>\n<blockquote>\n<p>A simple BEM helper using <a href="http://reasonml.github.io">ReasonMl</a></p>\n</blockquote>\n<h2 id="how-to-install"><a href="#how-to-install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to install</h2>\n<ol>\n<li>Install <code>reBEM Helper</code></li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>npm install rebem-helper</code></pre></div>\n<p>or</p>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>yarn add rebem-helper</code></pre></div>\n<ol start="2">\n<li>Add <code>rebem-helper</code> to "bs-dependencies" section of bsconfig.json</li>\n</ol>\n<h2 id="how-to-use"><a href="#how-to-use" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to use</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">ReBemHelper</span>;\n\n<span class="hljs-comment">/* Write my-block my-block--active */</span>\n<span class="hljs-keyword">let</span> isActive = <span class="hljs-literal">true</span>;\n<span class="hljs-keyword">let</span> myBemClassNames = bem(~block=<span class="hljs-string">"my-block"</span>, ~modifiers=[<span class="hljs-type">Boolean</span>(<span class="hljs-string">"active"</span>, isActive)], ());</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">ReBemHelper</span>\n<span class="hljs-keyword">let</span> isActive = <span class="hljs-literal">true</span>\n<span class="hljs-keyword">let</span> myBemClassNames =\n  bem ~block:<span class="hljs-string">"my-block"</span>\n    ~modifiers:[((<span class="hljs-type">Boolean</span> (<span class="hljs-string">"active"</span>, isActive))[@explicit_arity ])] <span class="hljs-literal">()</span></code></pre>\n      </div>\n    </div>\n  \n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">ReBemHelper</span>;\n\n<span class="hljs-comment">/* Write class names: my-block my-block--small */</span>\n<span class="hljs-keyword">let</span> mySizeBemClassNames = bem(~block=<span class="hljs-string">"my-block"</span>, ~modifiers=[<span class="hljs-type">String</span>(<span class="hljs-string">"small"</span>)], ());</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">ReBemHelper</span>\n<span class="hljs-keyword">let</span> mySizeBemClassNames =\n  bem ~block:<span class="hljs-string">"my-block"</span> ~modifiers:[((<span class="hljs-type">String</span> (<span class="hljs-string">"small"</span>))[@explicit_arity ])]\n    <span class="hljs-literal">()</span></code></pre>\n      </div>\n    </div>\n  \n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<p>See more examples in <a href="./examples">examples folder</a>:</p>\n<h2 id="development"><a href="#development" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Development</h2>\n<p>Install and code.</p>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>yarn install\nyarn start</code></pre></div>\n<p>Run tests</p>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>yarn <span class="hljs-built_in">test</span></code></pre></div>\n<h2 id="how-to-contribute"><a href="#how-to-contribute" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to contribute</h2>\n<p>Please feel free to write an issue/PR if you see/want somethings.</p>\n',homepageUrl:"https://github.com/remithomas/rebem-helper#readme",repositoryUrl:"https://github.com/remithomas/rebem-helper",npmUrl:"https://www.npmjs.com/package/rebem-helper",issuesUrl:"https://github.com/remithomas/rebem-helper/issues",slug:"/package/rebem-helper"}},pathContext:{id:"rebem-helper"}}}});
//# sourceMappingURL=path---package-rebem-helper-5a988a6bf389df0f7610.js.map