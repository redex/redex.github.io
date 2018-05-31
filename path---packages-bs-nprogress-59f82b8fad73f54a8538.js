webpackJsonp([66789691484227],{1019:function(s,e){s.exports={data:{package:{id:"bs-nprogress",score:.484742146823783,name:"bs-nprogress",version:"0.0.1",description:"BuckleScript bindings to nprogress",keywords:["nprogress","ocaml","bucklescript","reason"],license:"MIT",updated:"2017-12-08T08:40:50.504Z",stars:1,type:"published",quality:.43005111057061224,popularity:.023475512010032215,maintenance:.9928868127116803,readme:'<h1>bs-nprogress</h1>\n<p>BuckleScript bindings to <a href="https://github.com/rstacruz/nprogress">nprogress</a>.</p>\n<h2>Installation</h2>\n<pre><code class="language-shell">yarn add bs-nprogress nprogress\nnpm install --save bs-nprogress nprogress\n</code></pre>\n<h2>Usage</h2>\n<p>Pretty much consistent with <a href="https://github.com/rstacruz/nprogress#basic-usage">original JS API</a>.</p>\n<pre><code class="language-reason">/* All arguments are optional */\nNProgress.configure(\n  ~minimum=0.2,\n  ~template="&#x3C;div />"\n  ~easing="ease",\n  ~speed=200,\n  ~trickle=true,\n  ~trickleSpeed=300,\n  ~showSpinner=false,\n  ~parent="#container",\n  () /* NB: Don\'t forget to apply unit! */\n);\n\nNProgress.start();\n\nNProgress.complete(); /* original: NProgress.done(); */\n\nNProgress.forceComplete(); /* original: NProgress.done(true); */\n\nNProgress.isStarted();\n\nNProgress.set(0.2);\n\nNProgress.inc();\n\nNProgress.remove();\n\nNProgress.status;\n</code></pre>\n',homepageUrl:"https://github.com/alexfedoseev/bs-nprogress#readme",repositoryUrl:"https://github.com/alexfedoseev/bs-nprogress",npmUrl:"https://www.npmjs.com/package/bs-nprogress",issuesUrl:"https://github.com/alexfedoseev/bs-nprogress/issues",slug:"packages/bs-nprogress"}},pathContext:{id:"bs-nprogress"}}}});
//# sourceMappingURL=path---packages-bs-nprogress-59f82b8fad73f54a8538.js.map