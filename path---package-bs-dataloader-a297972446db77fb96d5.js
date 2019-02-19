webpackJsonp([89403558182195],{1135:function(s,a){s.exports={data:{package:{type:"published",id:"bs-dataloader",name:"bs-dataloader",version:"1.0.2",category:"binding",flags:["neglected"],platforms:["browser"],description:"This is a rewrite in reasonml of https://github.com/facebook/dataloader/blob/master/src/index.js",keywords:["data fetching"],license:"MIT",updated:"2019-02-08T21:31:02.528Z",stars:41,score:.646037944923951,quality:.9249464886512561,popularity:.05318345395180904,maintenance:.9998279698441173,readme:'<h1 id="bs-dataloader"><a href="#bs-dataloader" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-dataloader</h1>\n<p><a href="https://circleci.com/gh/ulrikstrid/bs-dataloader"><img src="https://circleci.com/gh/ulrikstrid/bs-dataloader.svg?style=svg" alt="CircleCI"></a></p>\n<p>This is a rewrite of <a href="https://github.com/facebook/dataloader">dataloader js lib</a> in reasonml for use with BuckleScript. I have a goal to make it work with native OCaml in the future but I still rely on some JavaScript structures.</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">UserLoaderImpl</span> = {\n  <span class="hljs-keyword">type</span> <span class="hljs-keyword">value</span> = user;\n  <span class="hljs-keyword">type</span> key = userId;\n\n  /* <span class="hljs-type">The</span> batchLoadFun needs <span class="hljs-keyword">to</span> wrap the returned values <span class="hljs-keyword">in</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Result</span>.t so that we can reject each promise instead <span class="hljs-keyword">of</span> all */\n  <span class="hljs-keyword">let</span> batchLoadFun = userIds =&gt; batchGetUsers(userIds);\n  <span class="hljs-keyword">let</span> options: options = {batch: <span class="hljs-literal">true</span>, maxBatchSize: <span class="hljs-number">256</span>, cache: <span class="hljs-literal">true</span>};\n};\n\n<span class="hljs-keyword">module</span> <span class="hljs-type">UserLoader</span> = <span class="hljs-type">DataLoader</span>.<span class="hljs-type">Make</span>(<span class="hljs-type">UserLoaderImpl</span>);\n\n<span class="hljs-type">UserLoader</span>.load(<span class="hljs-string">"1"</span>)\n|&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.then_(\n  user =&gt; {\n    displayUser user;\n    <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve <span class="hljs-literal">()</span>;\n  }\n);\n\n/* elsewhere <span class="hljs-keyword">in</span> your app */\n\n<span class="hljs-type">UserLoader</span>.load(<span class="hljs-string">"2"</span>)\n|&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.then_(\n  user =&gt; {\n    interactWithUser user;\n    <span class="hljs-type">Js</span>.<span class="hljs-type">Promsie</span>.resolve<span class="hljs-literal">()</span>;\n  }\n);</code></pre></div>\n<p>The example above will load both users at the same time with 1 request. If we later need one of the loaded users again we will get a cached version of the promise, if you need a new version from the server you can clear the key.</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code>updateUser(~userId, ~userPatch)\n|&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.then_(_ =&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve(<span class="hljs-type">UserLoader</span>.clear userId))\n|&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.then_(_ =&gt; <span class="hljs-type">UserLoader</span>.load(<span class="hljs-string">"1"</span>))\n|&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.then_(user =&gt; {\n  displayUser user;\n  <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve <span class="hljs-literal">()</span>;\n});</code></pre></div>\n<h2 id="development"><a href="#development" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Development</h2>\n<h3 id="build"><a href="#build" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build</h3>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm run build</code></pre></div>\n<h3 id="build--watch"><a href="#build--watch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build + Watch</h3>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm run watch</code></pre></div>\n<h3 id="test"><a href="#test" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Test</h3>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm run <span class="hljs-built_in">test</span></code></pre></div>\n<h3 id="editor"><a href="#editor" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Editor</h3>\n<p>If you use <code>vscode</code>, Press <code>Windows + Shift + B</code> it will build automatically</p>\n',homepageUrl:"https://github.com/ulrikstrid/bs-dataloader#readme",repositoryUrl:"https://github.com/ulrikstrid/bs-dataloader",npmUrl:"https://www.npmjs.com/package/bs-dataloader",issuesUrl:"https://github.com/ulrikstrid/bs-dataloader/issues",slug:"/package/bs-dataloader"}},pathContext:{id:"bs-dataloader"}}}});
//# sourceMappingURL=path---package-bs-dataloader-a297972446db77fb96d5.js.map