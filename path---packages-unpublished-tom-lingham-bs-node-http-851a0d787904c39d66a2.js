webpackJsonp([0x6e0ed6d70fb3],{1141:function(s,e){s.exports={data:{package:{id:"unpublished/TomLingham/bs-node-http",score:0,name:"TomLingham/bs-node-http",version:"0.2.0",description:"BuckleScript bindings for Node http in Reason",keywords:["http","node","bucklescript"],license:"MIT",updated:"2018-01-16T07:17:12.771Z",stars:2,type:"unpublished",quality:0,popularity:0,maintenance:0,readme:'<h1 id="bs-node-http"><a href="#bs-node-http" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-node-http</h1>\n<p><a href="https://www.npmjs.com/package/bs-node-http"><img src="https://img.shields.io/npm/v/bs-node-http.svg" alt="npm"></a>\n<a href="https://www.npmjs.com/package/bs-node-http"><img src="https://img.shields.io/npm/dw/bs-node-http.svg" alt="npm"></a></p>\n<p>Node <code>http</code> bindings for\n<a href="https://github.com/BuckleScript/bucklescript">Bucklescript</a> in\n<a href="https://github.com/facebook/reason">Reason</a></p>\n<h2 id="status"><a href="#status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Status</h2>\n<p>Obligatory "this is just a WIP" section. Feel free to pull down and extend\nthe API and/or make it better ... I don\'t pretend to be a ReasonML wizard.</p>\n<p>I will be accepting PR\'s. Node HTTP is one of my most used modules and I\'m\nsurprised this wasn\'t done yet. A good alternative, though, is the\n<a href="https://github.com/reasonml-community/bs-express">bs-express</a> project if\nyou are after routing as well.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>Install <code>bs-node-http</code> from npm. <code>npm i -S bs-node-http</code>.</p>\n<p>Then, add <code>bs-node-http</code> to yor <code>bs-dependencies</code> in your <code>bsconfig.json</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"bs-node-http"</span>]\n}</code></pre>\n      </div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>The api is modified to favour piping the response so doesn\'t map 1 to 1 with\nthe Node API. It\'s very minimal at the moment - if what you want isn\'t added\nfeel free to add a binding in <code>src/NodeHTTP.re</code> then implement the API in\n<code>src/Http.re</code></p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-java"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Http</span>;\n\n<span class="hljs-keyword">let</span> server =\n  create_server((~request <span class="hljs-keyword">as</span> _, ~response) =&gt;\n    switch (<span class="hljs-type">ClientRequest</span>.getMethod(request)) {\n    | <span class="hljs-tag">`GET</span> =&gt; print_string(<span class="hljs-string">"GET money, GET paid"</span>)\n    | <span class="hljs-tag">`POST</span> =&gt; print_string(<span class="hljs-string">"POSTman Pat"</span>)\n    | <span class="hljs-tag">`PUT</span> =&gt; print_string(<span class="hljs-string">"PUTting the tee-pee in HTTP"</span>)\n    | _ =&gt; print_string(<span class="hljs-string">"We don\'t accept other methods..."</span>)\n    };\n\n    <span class="hljs-type">Response</span>.(\n      response\n      |&gt; setStatusCode(<span class="hljs-number">200</span>)\n      |&gt; setHeader(<span class="hljs-string">"x-reason"</span>, <span class="hljs-string">"reason-ml"</span>)\n      |&gt; write(<span class="hljs-string">"Hello, world!"</span>)\n      |&gt; write(<span class="hljs-string">"UmVhc29uTUwgaXMgcHJldHR5IGdyZWF0IQ=="</span>, ~encoding=`base64)\n      |&gt; end_\n    )\n  );\n\n<span class="hljs-type">Server</span>.(\n  server\n  |&gt; listen(~port=<span class="hljs-number">3000</span>)\n  |&gt; on(`request((~request <span class="hljs-keyword">as</span> _, ~response <span class="hljs-keyword">as</span> _) =&gt; print_string(<span class="hljs-string">"Request event fired!"</span>)))\n  |&gt; on(`close(<span class="hljs-literal">()</span> =&gt; print_string(<span class="hljs-string">"Whoops, the server was closed :("</span>)))\n);</code></pre>\n      </div>\n',homepageUrl:"https://github.com/TomLingham/bs-node-http#readme",repositoryUrl:"https://github.com/TomLingham/bs-node-http",npmUrl:null,issuesUrl:"https://github.com/TomLingham/bs-node-http/issues",slug:"packages/unpublished/TomLingham/bs-node-http"}},pathContext:{id:"unpublished/TomLingham/bs-node-http"}}}});
//# sourceMappingURL=path---packages-unpublished-tom-lingham-bs-node-http-851a0d787904c39d66a2.js.map