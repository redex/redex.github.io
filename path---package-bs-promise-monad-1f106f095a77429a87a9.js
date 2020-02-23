webpackJsonp([64160360599056],{1259:function(s,n){s.exports={data:{package:{type:"published",id:"bs-promise-monad",name:"bs-promise-monad",version:"0.4.0",category:"library",flags:[],platforms:["browser","node"],description:"A monadic syntax to work with Promise.",keywords:["async","utilities"],license:"MIT",updated:"2020-02-05T13:16:56.057Z",stars:32,score:.43709978404525707,quality:.4298795744903705,popularity:.05888703081321911,maintenance:.8215012883243407,readme:'<h1 id="bs-promise-monad"><a href="#bs-promise-monad" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-promise-monad</h1>\n<p>Monadic syntax to work with promise in ReasonML</p>\n<p>This project is a minimal syntax extension that help you to be more happy, and keep every promise in a way.</p>\n<h2 id="status"><a href="#status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>status</h2>\n<p>This module is simple and self-completed. It means that you can use it with confidence that it won\'t bring any breaking changes in a subsequent update.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>installation</h2>\n<p><code>npm install bs-promise-monad --save</code></p>\n<p>and add</p>\n<p><code>bs-promise-monad</code> into bsconfig.json.</p>\n<p>You also need to install bs-webapi.</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>simply</p>\n<p><code>open PromiseMonad;</code></p>\n<p>and enjoy life.</p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-keyword">let</span> mySweetenPromise = <span class="hljs-keyword">return</span>(<span class="hljs-number">2</span>);\n\nmySweetenPromise\n&gt;&gt;= (value =&gt; {\n    <span class="hljs-type">Js</span>.log(value);\n    <span class="hljs-keyword">return</span>(value + <span class="hljs-number">2</span>);\n  })\n&gt;&gt;= (value =&gt; {\n    <span class="hljs-type">Js</span>.log(value);\n    <span class="hljs-keyword">return</span>(value + <span class="hljs-number">3</span>);\n  })\n&gt;&gt;| (err =&gt; {\n    <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"Failure!!"</span>, err);\n    <span class="hljs-keyword">return</span>(-<span class="hljs-number">2</span>);\n  });\n\n<span class="hljs-comment">/* With auto binding */</span>\nmySweetenPromise\n&gt;&gt;- (value =&gt; {<span class="hljs-type">Js</span>.log2(<span class="hljs-string">"from first promise:"</span>,value); value+<span class="hljs-number">2</span>})\n&gt;&gt;- (value =&gt; {<span class="hljs-type">Js</span>.log2(<span class="hljs-string">"from second promise:"</span>, value); value+<span class="hljs-number">3</span>})\n&gt;&gt;- (err =&gt; {<span class="hljs-type">Js</span>.log2(<span class="hljs-string">"Handled error"</span>, err); err})</code></pre></div>\n<p>Reject the promise</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>exception Sorry;\n\nerror(Sorry)\n&gt;&gt;= (x =&gt; Js.log(<span class="hljs-string">"do it "</span> ++ x) |&gt; <span class="hljs-built_in">return</span>)\n&gt;&gt;| (err =&gt; <span class="hljs-built_in">return</span>(Js.log2(<span class="hljs-string">"I handled this"</span>, err)));</code></pre></div>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>exception Sorry;\n<span class="hljs-built_in">let</span> <span class="hljs-built_in">break</span>Promise = <span class="hljs-built_in">return</span>(<span class="hljs-string">"I\'m trying..."</span>);\n\n<span class="hljs-built_in">break</span>Promise \n&gt;&gt;= ( x =&gt; Js.log(<span class="hljs-string">"Program: "</span> ++ x) |&gt; <span class="hljs-built_in">return</span> )\n&gt;&gt;= ( y =&gt; error(Sorry) )   /* Reject here */\n&gt;&gt;= ( z =&gt; Js.log(<span class="hljs-string">"this is skipped"</span>)|&gt;<span class="hljs-built_in">return</span>)\n&gt;&gt;| ( err =&gt; Js.log2(<span class="hljs-string">"Handled error!!"</span>, err)|&gt;<span class="hljs-built_in">return</span>); /* Error handling here */\n\n<span class="hljs-built_in">break</span>Promise \n&gt;&gt;- ( x =&gt; Js.log(<span class="hljs-string">"Program: "</span> ++ x))\n&gt;&gt;- ( y =&gt; error(Sorry) )\n&gt;&gt;- ( z =&gt; Js.log(<span class="hljs-string">"this will be skipped"</span>))\n&gt;&gt;/ ( err =&gt; Js.log2(<span class="hljs-string">"Handled error!! without explicit return"</span>, err));</code></pre></div>\n<h2 id="change"><a href="#change" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Change</h2>\n<ul>\n<li>v0.4.0 : Update bs-platform, bs-webapi. Add auto-catch(>>/) from @rolandpeelen . Many thanks!!</li>\n<li>v0.3.3 : fix module dependencies</li>\n<li>v0.3.0 : merge in auto-return(>>-) from @baldurh . Thanks!!</li>\n<li>v0.2.9 : fix type signature.</li>\n<li>v0.2.6 : update example on error handling</li>\n<li>v0.2.5 : add error handling (>>|)</li>\n<li>v0.2.0 : add Promise.reject by <code>error</code></li>\n</ul>\n',homepageUrl:"https://github.com/digitake/bs-promise-monad#bs-promise-monad",repositoryUrl:"https://github.com/digitake/bs-promise-monad",npmUrl:"https://www.npmjs.com/package/bs-promise-monad",issuesUrl:"https://github.com/digitake/bs-promise-monad/issues",slug:"/package/bs-promise-monad"}},pathContext:{id:"bs-promise-monad"}}}});
//# sourceMappingURL=path---package-bs-promise-monad-1f106f095a77429a87a9.js.map