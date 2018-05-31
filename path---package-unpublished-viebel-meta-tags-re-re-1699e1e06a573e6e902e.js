webpackJsonp([1234017640300],{1263:function(e,s){e.exports={data:{package:{id:"unpublished/viebel/MetaTagsReRe",stars:3,name:"viebel/MetaTagsReRe",version:"0.1.6",category:"library",flags:["neglected"],platforms:["browser","node"],description:"",keywords:["react"],license:"MIT",updated:"2018-04-22T17:30:03.854Z",type:"unpublished",score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="metatagsrere"><a href="#metatagsrere" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>MetaTagsReRe</h1>\n<p>Meta tags reason react components.\nIt works both in client side and server side rendering</p>\n<h1 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-keyword">module</span> <span class="hljs-type">MetaTags</span> = <span class="hljs-type">MetaTags</span>.<span class="hljs-type">Make</span> <span class="hljs-literal">()</span>;\nmoudule <span class="hljs-type">Title</span> = <span class="hljs-type">MetaTags_Title</span>.<span class="hljs-type">Make</span> <span class="hljs-type">MetaTags</span>;\n&lt;<span class="hljs-type">Title</span> title=<span class="hljs-string">"awesome article"</span> /&gt;</code></pre></div>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-keyword">module</span> <span class="hljs-type">MetaTags</span> = <span class="hljs-type">MetaTags</span>.<span class="hljs-type">Make</span> <span class="hljs-literal">()</span>;\nmoudule <span class="hljs-type">Description</span> = <span class="hljs-type">MetaTags_Description</span>.<span class="hljs-type">Make</span> <span class="hljs-type">MetaTags</span>;\n&lt;<span class="hljs-type">Description</span> description=<span class="hljs-string">"awesome article about reason react meta tags"</span> /&gt;</code></pre></div>\n<h1 id="server-side-rendering"><a href="#server-side-rendering" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Server side rendering</h1>\n<p>Somewhere you need to add the static meta tags for description and title.\nYou can retrieve the description value with <code>MetaTags.description()</code> and the title value with <code>MetaTags.title()</code></p>\n<h1 id="internals"><a href="#internals" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Internals</h1>\n<p>For client side rendering, the components update the corresponding meta tag with javascript code.\nFor server side rendering, the components update some value in <code>MetaTags</code> module. This value can be retrieved from anywhere.</p>\n<h1 id="contributing"><a href="#contributing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributing</h1>\n<h2 id="run-tests"><a href="#run-tests" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Run tests</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn <span class="hljs-built_in">test</span></code></pre></div>\n<p>or watch with:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn <span class="hljs-built_in">test</span>:watch</code></pre></div>\n',homepageUrl:null,repositoryUrl:"https://github.com/viebel/MetaTagsReRe",npmUrl:null,issuesUrl:null,slug:"/package/unpublished/viebel/MetaTagsReRe"}},pathContext:{id:"unpublished/viebel/MetaTagsReRe"}}}});
//# sourceMappingURL=path---package-unpublished-viebel-meta-tags-re-re-1699e1e06a573e6e902e.js.map