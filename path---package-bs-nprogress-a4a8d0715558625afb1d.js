webpackJsonp([0x6a103698db7b],{1244:function(s,e){s.exports={data:{package:{type:"published",id:"bs-nprogress",name:"bs-nprogress",version:"5.0.0",category:"binding",flags:[],platforms:["browser"],description:"BuckleScript bindings to nprogress",keywords:["ui"],license:"MIT",updated:"2019-12-20T23:31:54.026Z",stars:4,score:.5192115145370397,quality:.5336165466457623,popularity:.02614056289386489,maintenance:.9999352958013095,readme:'<h1 id="bs-nprogress"><a href="#bs-nprogress" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-nprogress</h1>\n<p>BuckleScript bindings to <a href="https://github.com/rstacruz/nprogress">nprogress</a>.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code>yarn add bs-nprogress nprogress\nnpm install --save bs-nprogress nprogress</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>Pretty much consistent with <a href="https://github.com/rstacruz/nprogress#basic-usage">original JS API</a>.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* All arguments are optional */</span>\n<span class="hljs-type">NProgress</span>.configure(\n  ~minimum=<span class="hljs-number">0.2</span>,\n  ~template=<span class="hljs-string">"&lt;div /&gt;"</span>\n  ~easing=<span class="hljs-string">"ease"</span>,\n  ~speed=<span class="hljs-number">200</span>,\n  ~trickle=<span class="hljs-literal">true</span>,\n  ~trickleSpeed=<span class="hljs-number">300</span>,\n  ~showSpinner=<span class="hljs-literal">false</span>,\n  ~parent=<span class="hljs-string">"#container"</span>,\n  () <span class="hljs-comment">/* NB: Don\'t forget to apply unit! */</span>\n);\n\n<span class="hljs-type">NProgress</span>.start();\n\n<span class="hljs-type">NProgress</span>.complete(); <span class="hljs-comment">/* original: NProgress.done(); */</span>\n\n<span class="hljs-type">NProgress</span>.forceComplete(); <span class="hljs-comment">/* original: NProgress.done(true); */</span>\n\n<span class="hljs-type">NProgress</span>.isStarted();\n\n<span class="hljs-type">NProgress</span>.<span class="hljs-keyword">set</span>(<span class="hljs-number">0.2</span>);\n\n<span class="hljs-type">NProgress</span>.inc();\n\n<span class="hljs-type">NProgress</span>.remove();\n\n<span class="hljs-type">NProgress</span>.status;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">964</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/alexfedoseev/bs-nprogress#readme",repositoryUrl:"https://github.com/alexfedoseev/bs-nprogress",npmUrl:"https://www.npmjs.com/package/bs-nprogress",issuesUrl:"https://github.com/alexfedoseev/bs-nprogress/issues",slug:"/package/bs-nprogress"}},pathContext:{id:"bs-nprogress"}}}});
//# sourceMappingURL=path---package-bs-nprogress-a4a8d0715558625afb1d.js.map