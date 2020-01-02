webpackJsonp([0x69b89ebc4e60],{1190:function(s,e){s.exports={data:{package:{type:"published",id:"bs-compression",name:"bs-compression",version:"0.0.3",category:"binding",flags:[],platforms:["node"],description:"Bucklescript bindings for Compression middlewaare",keywords:["utilities"],license:"MIT",updated:"2019-12-13T02:18:30.639Z",stars:0,score:.14951608749710005,quality:.41192318558985097,popularity:.014548011703450204,maintenance:.05956379349696342,readme:'<h1 id="bs-compression"><a href="#bs-compression" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-compression</h1>\n<p>Bucklescript Bindings for <a href="https://github.com/expressjs/compression">compression</a> express middleware.\n<code>compression</code> is a Node.js compression middleware.</p>\n<h1 id="prerequisites"><a href="#prerequisites" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Prerequisites</h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install --global bs-platform\nyarn install</code></pre></div>\n<h1 id="how-to-compile"><a href="#how-to-compile" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to compile</h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn build</code></pre></div>\n<h1 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h1>\n<p>This package can be used only with <code>bs-express</code>. Make sure you already have <code>bs-express</code> as a dependency in your project.</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add bs-compression</code></pre></div>\n<p>And add <code>bs-compression</code> to <code>dependencies</code> node of your <code>bsconfig.json</code>.</p>\n<h1 id="code-snippets"><a href="#code-snippets" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Code snippets</h1>\n<p>For instance, here is the code to serve static files from <code>public</code> folder and compress them.\nRemark: The compression middleware must be passed first in the array of middlewares.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> app = express();\n<span class="hljs-type">App</span>.useOnPathWithMany(\n  app,\n  ~path=<span class="hljs-string">"/public"</span>,\n  [|\n  <span class="hljs-type">Compression</span>.compression(),\n  {\n    <span class="hljs-keyword">let</span> options = <span class="hljs-type">Static</span>.defaultOptions();\n    <span class="hljs-type">Static</span>.make(<span class="hljs-string">"public"</span>, options) |&gt; <span class="hljs-type">Static</span>.asMiddleware\n  }\n  |]\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> app = express <span class="hljs-literal">()</span>\n<span class="hljs-keyword">let</span> _ =\n  <span class="hljs-type">App</span>.useOnPathWithMany app ~path:<span class="hljs-string">"/public"</span>\n    [|(<span class="hljs-type">Compression</span>.compression <span class="hljs-literal">()</span>);((<span class="hljs-keyword">let</span> options = <span class="hljs-type">Static</span>.defaultOptions <span class="hljs-literal">()</span> <span class="hljs-keyword">in</span>\n                                     (<span class="hljs-type">Static</span>.make <span class="hljs-string">"public"</span> options) |&gt;\n                                       <span class="hljs-type">Static</span>.asMiddleware))|]</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/viebel/bs-compression#readme",repositoryUrl:"https://github.com/viebel/bs-compression",npmUrl:"https://www.npmjs.com/package/bs-compression",issuesUrl:"https://github.com/viebel/bs-compression/issues",slug:"/package/bs-compression"}},pathContext:{id:"bs-compression"}}}});
//# sourceMappingURL=path---package-bs-compression-f4512f9f1f4c0663dd6b.js.map