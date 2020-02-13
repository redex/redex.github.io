webpackJsonp([55117325394868],{1421:function(e,s){e.exports={data:{package:{type:"published",id:"@ryb73/bs-superagent",name:"@ryb73/bs-superagent",version:"0.4.0",category:"binding",flags:[],platforms:["browser","node"],description:"BuckleScript bindings for superagent",keywords:["http client"],license:"MIT",updated:"2020-01-29T12:30:45.948Z",stars:0,score:.5960766633742332,quality:.7595942802687818,popularity:.05230276144259299,maintenance:.9996926079676889,readme:'<h1 id="bs-superagent"><a href="#bs-superagent" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-superagent</h1>\n<h2 id="what-is-it"><a href="#what-is-it" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What is it?</h2>\n<p>BuckleScript bindings for <a href="https://visionmedia.github.io/superagent/">SuperAgent</a>.</p>\n<h2 id="what-state-is-it-in"><a href="#what-state-is-it-in" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What state is it in?</h2>\n<p>Incomplete. The published version may lag behind the GitHub repo – feel free to file a bug if this is the case.</p>\n<h2 id="how-do-i-install-it"><a href="#how-do-i-install-it" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do I install it?</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm i @ryb73/bs-superagent</code></pre></div>\n<h2 id="how-do-i-use-it"><a href="#how-do-i-use-it" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do I use it?</h2>\n<p>Example:</p>\n<div class="redex-codeblock"><pre class="hljs lang-reasonml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Superagent</span>;\n<span class="hljs-keyword">open</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>;\n\nget(<span class="hljs-string">"api/"</span>)\n|&gt; withCredentials\n|&gt; query(<span class="hljs-string">"key"</span>, <span class="hljs-string">"value"</span>)\n|&gt; end_\n|&gt; then_((resp) =&gt; {\n    switch (resp.body) {\n        | <span class="hljs-type">None</span> =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"No Body"</span>)\n        | <span class="hljs-type">Some</span>(body) =&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.decodeObject(body) |&gt; doSomething\n    };\n\n    resolve<span class="hljs-literal">()</span>;\n});</code></pre></div>\n<p>See <a href="test/index.re"><code>test/index.re</code></a> and <a href="https://visionmedia.github.io/superagent/">https://visionmedia.github.io/superagent/</a> for more.</p>\n',homepageUrl:"https://github.com/ryb73/bs-superagent#readme",repositoryUrl:"https://github.com/ryb73/bs-superagent",npmUrl:"https://www.npmjs.com/package/%40ryb73%2Fbs-superagent",issuesUrl:"https://github.com/ryb73/bs-superagent/issues",slug:"/package/@ryb73/bs-superagent"}},pathContext:{id:"@ryb73/bs-superagent"}}}});
//# sourceMappingURL=path---package-ryb-73-bs-superagent-c0f581e90241964f00a3.js.map