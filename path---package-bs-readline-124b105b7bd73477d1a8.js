webpackJsonp([0xa652d4958bb0],{1289:function(e,s){e.exports={data:{package:{type:"published",id:"bs-readline",name:"bs-readline",version:"1.0.4",category:"binding",flags:[],platforms:["node"],description:"Node.js Readline for Reason",keywords:["cli"],license:"MIT",updated:"2020-07-16T10:20:22.966Z",stars:2,score:.3357564183728037,quality:.5115082755889844,popularity:.02086838770316679,maintenance:.5,readme:'<h1 id="bs-readline"><a href="#bs-readline" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-readline</h1>\n<p>A small package for reading from node.</p>\n<h1 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install --save bs-readline</code></pre></div>\n<p>or</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm i -S bs-readline</code></pre></div>\n<p>Then add bs-readline to bs-dependencies in your bsconfig.json:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>{\n  ...\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"bs-readline"</span>]\n}</code></pre></div>\n<h1 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h1>\n<p>Read a line:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-type">Readline</span>.readline((<span class="hljs-keyword">in</span>) =&gt; {\n    <span class="hljs-type">Js</span>.log(<span class="hljs-keyword">in</span>);\n});</code></pre></div>\n<p>Close(release the streams):</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-type">Readline</span>.close<span class="hljs-literal">()</span>;</code></pre></div>\n<p>Read a line and then close:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-type">Readline</span>.readline((<span class="hljs-keyword">in</span>) =&gt; {\n    <span class="hljs-type">Js</span>.log(<span class="hljs-keyword">in</span>);\n    <span class="hljs-type">Readline</span>.close<span class="hljs-literal">()</span>;\n});</code></pre></div>\n<h1 id="notes"><a href="#notes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Notes</h1>\n<p>When using bs-readline in your project, node will not exit until you have called <code>Readline.close()</code></p>\n',homepageUrl:"https://github.com/kfish610/bs-readline",repositoryUrl:"https://github.com/kfish610/bs-readline",npmUrl:"https://www.npmjs.com/package/bs-readline",issuesUrl:"https://github.com/kfish610/bs-readline/issues",slug:"/package/bs-readline"}},pathContext:{id:"bs-readline"}}}});
//# sourceMappingURL=path---package-bs-readline-124b105b7bd73477d1a8.js.map