webpackJsonp([0xd0de687222aa],{1379:function(e,n){e.exports={data:{package:{type:"published",id:"reason-react-document-title",name:"reason-react-document-title",version:"2.1.0",category:"library",flags:[],platforms:["browser"],description:"Reason component to manage document title",keywords:["react"],license:"MIT",updated:"2020-03-27T07:17:54.112Z",stars:7,score:.6037681266089505,quality:.8056658620334236,popularity:.03459281770954238,maintenance:.9998882337159533,readme:'<h1 id="reason-react-document-title"><a href="#reason-react-document-title" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reason React Document Title</h1>\n<p>Provide reason react hook and component for manage page title (document.title)</p>\n<h3 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h3>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code><span class="hljs-comment"># yarn</span>\nyarn add reason-react-document-title\n\n<span class="hljs-comment"># npm</span>\nnpm install reason-react-document-title --save</code></pre></div>\n<p>Remeber, add to <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"reason-react-document-title"</span>]\n}</code></pre></div>\n<h3 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h3>\n<p>You can use one of three implementations: hook, component in Jsx3, component in Jsx2.\nHook usage is recomended.</p>\n<h4 id="hook"><a href="#hook" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Hook</h4>\n<p>For example:</p>\n<div class="redex-codeblock"><pre class="hljs lang-javascript"><code>[@react.component]\n<span class="hljs-keyword">let</span> make = <span class="hljs-literal">()</span> =&gt; {\n  <span class="hljs-type">DocumentTitle</span>.useTitle(<span class="hljs-string">"My title"</span>);\n\n  &lt;div&gt;\n    ... some stuff\n  &lt;/div&gt;\n};</code></pre></div>\n<h4 id="component-jsx3"><a href="#component-jsx3" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Component (Jsx3)</h4>\n<div class="redex-codeblock"><pre class="hljs lang-javascript"><code>[@react.component]\n<span class="hljs-keyword">let</span> make = <span class="hljs-literal">()</span> =&gt; {\n  &lt;div&gt;\n    &lt;<span class="hljs-type">DocumentTitle</span> title=<span class="hljs-string">"My title"</span> /&gt;\n    ... some stuff\n  &lt;/div&gt;\n};</code></pre></div>\n<p>Or if you like:</p>\n<div class="redex-codeblock"><pre class="hljs lang-javascript"><code>[@react.component]\n<span class="hljs-keyword">let</span> make = <span class="hljs-literal">()</span> =&gt; {\n  &lt;<span class="hljs-type">DocumentTitle</span> title=<span class="hljs-string">"My title"</span>&gt;\n    &lt;div&gt;\n      ... some stuff\n    &lt;/div&gt;\n  &lt;/<span class="hljs-type">DocumentTitle</span>&gt;,\n};</code></pre></div>\n<h4 id="component-jsx2"><a href="#component-jsx2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Component (Jsx2)</h4>\n<p>Library also provide component for older Jsx2 version. If you must, use it like this:</p>\n<div class="redex-codeblock"><pre class="hljs lang-javascript"><code>&lt;DocumentTitleJsx2 title=<span class="hljs-string">"My title"</span> /&gt;</code></pre></div>\n<p>It also supports children.</p>\n<h3 id="how-it-works"><a href="#how-it-works" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How it works?</h3>\n<p>Changing title parameter will affect on page title (document.title) automatically.\nWhen component is unmounted, document.title value will be set to empty string.</p>\n<p>If find any problems or have improvement idea, feel free to create issue :)</p>\n',homepageUrl:null,repositoryUrl:null,npmUrl:"https://www.npmjs.com/package/reason-react-document-title",issuesUrl:null,slug:"/package/reason-react-document-title"}},pathContext:{id:"reason-react-document-title"}}}});
//# sourceMappingURL=path---package-reason-react-document-title-62fdf2b2061be716722c.js.map