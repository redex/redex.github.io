webpackJsonp([35267224245727],{1204:function(s,n){s.exports={data:{package:{type:"published",id:"bs-cors",name:"bs-cors",version:"0.0.4",category:"binding",flags:[],platforms:["node"],description:"Buckelscript bindings to cors middleware",keywords:["express"],license:"MPL-2.0",updated:"2020-09-20T19:09:16.480Z",stars:0,score:.4788168432030253,quality:.42985340926390553,popularity:.01607349302986357,maintenance:.9835288510382898,readme:'<h1 id="bs-cors"><a href="#bs-cors" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-cors</h1>\n<p>bs-cors is a Buckelscript binding to <a href="https://github.com/expressjs/cors">cors</a>, made by <a href="https://twitter.com/intent/user?screen_name=troygoode">Troy Goode</a>, an expressjs middleware that can be used to enable <a href="https://developer.mozilla.org/fr/docs/Web/HTTP/CORS">Cross-origin resource sharing</a> with various options.</p>\n<ul>\n<li><a href="#installation">Installation</a></li>\n<li>\n<p><a href="#usage">Usage</a></p>\n<ul>\n<li><a href="#simple-usage-enable-all-cors-requests">Simple Usage</a></li>\n<li><a href="#enable-cors-for-a-single-route">Enable CORS for a Single Route</a></li>\n<li><a href="#configuring-cors">Configuring CORS</a></li>\n<li><a href="#configuring-cors-w-dynamic-origin">Configuring CORS w/ Dynamic Origin</a></li>\n<li><a href="#enabling-cors-pre-flight">Enabling CORS Pre-Flight</a></li>\n<li><a href="#configuring-cors-asynchronously">Configuring CORS Asynchronously</a></li>\n</ul>\n</li>\n<li><a href="#configuration-options">Configuration Options</a></li>\n<li><a href="#license">License</a></li>\n<li><a href="#author">Author</a></li>\n</ul>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>This is a <a href="https://nodejs.org/en/">Node.js</a> module available through the\n<a href="https://www.npmjs.com/">npm registry</a>. Installation is done using the\n<a href="https://docs.npmjs.com/getting-started/installing-npm-packages-locally"><code>npm install</code> command</a>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>$ npm install bs-cors</code></pre></div>\n<p>then add it as a dependency to your <strong>bs-config.json</strong> :</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>...\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"bs-express"</span>, <span class="hljs-string">"bs-cors"</span>, ...],\n...</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="simple-usage-enable-all-cors-requests"><a href="#simple-usage-enable-all-cors-requests" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Simple Usage (Enable <em>All</em> CORS Requests)</h3>\n<div class="redex-codeblock"><pre class="hljs lang-reasonml"><code><span class="hljs-keyword">open</span>  <span class="hljs-type">Express</span>;\n<span class="hljs-keyword">let</span> app = express<span class="hljs-literal">()</span>;\n\n<span class="hljs-type">App</span>.use(app,<span class="hljs-type">Cors</span>.cors<span class="hljs-literal">()</span>);\n\n\n<span class="hljs-type">Middleware</span>.from((_next, _req) =&gt; {\n      [(<span class="hljs-string">"msg"</span>, <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.<span class="hljs-built_in">string</span>(<span class="hljs-string">"This is CORS-enabled for only example.com !"</span>))]\n    |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.fromList\n    |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.object_\n    |&gt; <span class="hljs-type">Response</span>.sendJson\n})\n|&gt; <span class="hljs-type">App</span>.get(app, ~path=<span class="hljs-string">"/products/:id"</span>);\n\n<span class="hljs-keyword">let</span> onListen = e =&gt;\n  switch (e) {\n  | <span class="hljs-keyword">exception</span> (<span class="hljs-type">Js</span>.<span class="hljs-type">Exn</span>.<span class="hljs-type">Error</span>(e)) =&gt;\n    (\n      switch (<span class="hljs-type">Js</span>.<span class="hljs-type">Exn</span>.message(e)) {\n      | <span class="hljs-type">None</span> =&gt; <span class="hljs-string">"UNKNOWN ERROR"</span>\n      | <span class="hljs-type">Some</span>(msg) =&gt; msg\n      }\n    )\n    |&gt; <span class="hljs-type">Js</span>.log;\n    <span class="hljs-type">Node</span>.<span class="hljs-type">Process</span>.exit(<span class="hljs-number">1</span>);\n  | _ =&gt; <span class="hljs-string">"CORS-enabled web server listening on port 8080"</span> |&gt; <span class="hljs-type">Js</span>.log\n  };\n\n<span class="hljs-keyword">let</span> server = <span class="hljs-type">App</span>.listen(app, ~port=<span class="hljs-number">8080</span>, ~onListen, <span class="hljs-literal">()</span>);</code></pre></div>\n<h3 id="enable-cors-for-a-single-route"><a href="#enable-cors-for-a-single-route" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Enable CORS for a Single Route</h3>\n<div class="redex-codeblock"><pre class="hljs lang-reasonml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Express</span>;\n<span class="hljs-keyword">let</span> app = express<span class="hljs-literal">()</span>;\n\n[|\n  <span class="hljs-type">Cors</span>.cors<span class="hljs-literal">()</span>,\n  <span class="hljs-type">Middleware</span>.from((_next, _req) =&gt; {\n    [(<span class="hljs-string">"msg"</span>, <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.<span class="hljs-built_in">string</span>(<span class="hljs-string">"This is CORS-enabled for only example.com !"</span>))]\n    |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.fromList\n    |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.object_\n    |&gt; <span class="hljs-type">Response</span>.sendJson\n  }),\n|]\n|&gt; <span class="hljs-type">App</span>.getWithMany(app, ~path=<span class="hljs-string">"/products/:id"</span>);\n\n<span class="hljs-keyword">let</span> onListen = e =&gt;\n  switch (e) {\n  | <span class="hljs-keyword">exception</span> (<span class="hljs-type">Js</span>.<span class="hljs-type">Exn</span>.<span class="hljs-type">Error</span>(e)) =&gt;\n    (\n      switch (<span class="hljs-type">Js</span>.<span class="hljs-type">Exn</span>.message(e)) {\n      | <span class="hljs-type">None</span> =&gt; <span class="hljs-string">"UNKNOWN ERROR"</span>\n      | <span class="hljs-type">Some</span>(msg) =&gt; msg\n      }\n    )\n    |&gt; <span class="hljs-type">Js</span>.log;\n    <span class="hljs-type">Node</span>.<span class="hljs-type">Process</span>.exit(<span class="hljs-number">1</span>);\n  | _ =&gt; <span class="hljs-string">"CORS-enabled web server listening on port 8080"</span> |&gt; <span class="hljs-type">Js</span>.log\n  };\n\n<span class="hljs-keyword">let</span> server = <span class="hljs-type">App</span>.listen(app, ~port=<span class="hljs-number">8080</span>, ~onListen, <span class="hljs-literal">()</span>);</code></pre></div>\n<h3 id="configuring-cors"><a href="#configuring-cors" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Configuring CORS</h3>\n<div class="redex-codeblock"><pre class="hljs lang-reasonml"><code>open <span class="hljs-type">Express</span>;\n<span class="hljs-keyword">let</span> app = express();\n\n[|\n  <span class="hljs-type">Cors</span>.cors(\n    ~origin=<span class="hljs-type">Cors</span>.<span class="hljs-type">String</span>(<span class="hljs-string">"example.com"</span>),\n    ~optionsSuccessStatus=<span class="hljs-type">Response</span>.<span class="hljs-type">StatusCode</span>.<span class="hljs-type">Accepted</span>,\n    (),\n  ), <span class="hljs-comment">// some legacy browsers (IE11, various SmartTVs) choke on 204</span>\n  <span class="hljs-type">Middleware</span>.from((_next, _req) =&gt; {\n    [(<span class="hljs-string">"msg"</span>, <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.string(<span class="hljs-string">"This is CORS-enabled for only example.com !"</span>))]\n    |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.fromList\n    |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.object_\n    |&gt; <span class="hljs-type">Response</span>.sendJson\n  }),\n|]\n|&gt; <span class="hljs-type">App</span>.getWithMany(app, ~path=<span class="hljs-string">"/products/:id"</span>);\n\n\n<span class="hljs-keyword">let</span> onListen = e =&gt;\n  <span class="hljs-keyword">switch</span> (e) {\n  | exception (<span class="hljs-type">Js</span>.<span class="hljs-type">Exn</span>.<span class="hljs-type">Error</span>(e)) =&gt;\n    (\n      <span class="hljs-keyword">switch</span> (<span class="hljs-type">Js</span>.<span class="hljs-type">Exn</span>.message(e)) {\n      | <span class="hljs-type">None</span> =&gt; <span class="hljs-string">"UNKNOWN ERROR"</span>\n      | <span class="hljs-type">Some</span>(msg) =&gt; msg\n      }\n    )\n    |&gt; <span class="hljs-type">Js</span>.log;\n    <span class="hljs-type">Node</span>.<span class="hljs-type">Process</span>.exit(<span class="hljs-number">1</span>);\n  | <span class="hljs-number">_</span> =&gt; <span class="hljs-string">"CORS-enabled web server listening on port 8080"</span> |&gt; <span class="hljs-type">Js</span>.log\n  };\n\n<span class="hljs-keyword">let</span> server = <span class="hljs-type">App</span>.listen(app, ~port=<span class="hljs-number">8080</span>, ~onListen, ());</code></pre></div>\n<h3 id="configuring-cors-w-dynamic-origin"><a href="#configuring-cors-w-dynamic-origin" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Configuring CORS w/ Dynamic Origin</h3>\n<div class="redex-codeblock"><pre class="hljs lang-reasonml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Express</span>;\n<span class="hljs-keyword">let</span> app = express<span class="hljs-literal">()</span>;\n\n<span class="hljs-keyword">let</span> whitelist = [|<span class="hljs-string">"http:\\/\\/example1.com"</span>, <span class="hljs-string">"http:\\/\\/example2.com"</span>|];\n<span class="hljs-keyword">let</span> originFunction:\n  (option(<span class="hljs-built_in">string</span>), (option(<span class="hljs-type">Js</span>.<span class="hljs-type">Exn</span>.t), <span class="hljs-built_in">bool</span>) =&gt; <span class="hljs-built_in">unit</span>) =&gt; <span class="hljs-built_in">unit</span> =\n  (origin, callback) =&gt;\n    switch (origin) {\n    /* <span class="hljs-type">If</span> you <span class="hljs-keyword">do</span> not want <span class="hljs-keyword">to</span> block <span class="hljs-type">REST</span> tools <span class="hljs-keyword">or</span> server-<span class="hljs-keyword">to</span>-server requests */\n    | <span class="hljs-type">None</span> =&gt; callback(<span class="hljs-type">None</span>, <span class="hljs-literal">true</span>)\n    | <span class="hljs-type">Some</span>(o) =&gt;\n      <span class="hljs-keyword">if</span> (<span class="hljs-type">Array</span>.exists(item =&gt; item === o, whitelist)) {\n        callback(<span class="hljs-type">None</span>, <span class="hljs-literal">true</span>);\n      } <span class="hljs-keyword">else</span> {\n        callback(<span class="hljs-type">Js</span>.<span class="hljs-type">Exn</span>.raiseError(<span class="hljs-string">"Not allowed by CORS"</span>), <span class="hljs-literal">false</span>);\n      }\n    };\n\n[|\n  <span class="hljs-type">Cors</span>.cors(~origin=<span class="hljs-type">Function</span>(originFunction), <span class="hljs-literal">()</span>),\n  <span class="hljs-type">Middleware</span>.from((_next, _req) =&gt; {\n    [(<span class="hljs-string">"msg"</span>, <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.<span class="hljs-built_in">string</span>(<span class="hljs-string">"This is CORS-enabled for only example.com !"</span>))]\n    |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.fromList\n    |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.object_\n    |&gt; <span class="hljs-type">Response</span>.sendJson\n  }),\n|]\n|&gt; <span class="hljs-type">App</span>.getWithMany(app, ~path=<span class="hljs-string">"/products/:id"</span>);\n\n<span class="hljs-keyword">let</span> onListen = e =&gt;\n  switch (e) {\n  | <span class="hljs-keyword">exception</span> (<span class="hljs-type">Js</span>.<span class="hljs-type">Exn</span>.<span class="hljs-type">Error</span>(e)) =&gt;\n    (\n      switch (<span class="hljs-type">Js</span>.<span class="hljs-type">Exn</span>.message(e)) {\n      | <span class="hljs-type">None</span> =&gt; <span class="hljs-string">"UNKNOWN ERROR"</span>\n      | <span class="hljs-type">Some</span>(msg) =&gt; msg\n      }\n    )\n    |&gt; <span class="hljs-type">Js</span>.log;\n    <span class="hljs-type">Node</span>.<span class="hljs-type">Process</span>.exit(<span class="hljs-number">1</span>);\n  | _ =&gt; <span class="hljs-string">"CORS-enabled web server listening on port 8080"</span> |&gt; <span class="hljs-type">Js</span>.log\n  };\n\n<span class="hljs-keyword">let</span> server = <span class="hljs-type">App</span>.listen(app, ~port=<span class="hljs-number">8080</span>, ~onListen, <span class="hljs-literal">()</span>);</code></pre></div>\n<h3 id="enabling-cors-pre-flight"><a href="#enabling-cors-pre-flight" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Enabling CORS Pre-Flight</h3>\n<p>Certain CORS requests are considered \'complex\' and require an initial\n<code>OPTIONS</code> request (called the "pre-flight request"). An example of a\n\'complex\' CORS request is one that uses an HTTP verb other than\nGET/HEAD/POST (such as DELETE) or that uses custom headers. To enable\npre-flighting, you must add a new OPTIONS handler for the route you want\nto support:</p>\n<div class="redex-codeblock"><pre class="hljs lang-reasonml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Express</span>;\n<span class="hljs-keyword">let</span> app = express<span class="hljs-literal">()</span>;\n\n<span class="hljs-type">App</span>.options(app, ~path=<span class="hljs-string">"/products/:id"</span>, <span class="hljs-type">Cors</span>.cors<span class="hljs-literal">()</span>);\n[|\n  <span class="hljs-type">Cors</span>.cors<span class="hljs-literal">()</span>,\n  <span class="hljs-type">Middleware</span>.from((_next, _req) =&gt; {\n    [(<span class="hljs-string">"msg"</span>, <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.<span class="hljs-built_in">string</span>(<span class="hljs-string">"This is CORS-enabled for all origins!"</span>))]\n    |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.fromList\n    |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.object_\n    |&gt; <span class="hljs-type">Response</span>.sendJson\n  }),\n|]\n|&gt; <span class="hljs-type">App</span>.deleteWithMany(app, ~path=<span class="hljs-string">"/products/:id"</span>);\n\n\n<span class="hljs-keyword">let</span> onListen = e =&gt;\n  switch (e) {\n  | <span class="hljs-keyword">exception</span> (<span class="hljs-type">Js</span>.<span class="hljs-type">Exn</span>.<span class="hljs-type">Error</span>(e)) =&gt;\n    (\n      switch (<span class="hljs-type">Js</span>.<span class="hljs-type">Exn</span>.message(e)) {\n      | <span class="hljs-type">None</span> =&gt; <span class="hljs-string">"UNKNOWN ERROR"</span>\n      | <span class="hljs-type">Some</span>(msg) =&gt; msg\n      }\n    )\n    |&gt; <span class="hljs-type">Js</span>.log;\n    <span class="hljs-type">Node</span>.<span class="hljs-type">Process</span>.exit(<span class="hljs-number">1</span>);\n  | _ =&gt; <span class="hljs-string">"CORS-enabled web server listening on port 8080"</span> |&gt; <span class="hljs-type">Js</span>.log\n  };</code></pre></div>\n<p>You can also enable pre-flight across-the-board like so:</p>\n<div class="redex-codeblock"><pre class="hljs lang-reasonml"><code>/* <span class="hljs-keyword">include</span> before other routes */\n<span class="hljs-type">App</span>.options(app, ~path=<span class="hljs-string">"*"</span>, <span class="hljs-type">Cors</span>.cors<span class="hljs-literal">()</span>);</code></pre></div>\n<h3 id="configuring-cors-asynchronously"><a href="#configuring-cors-asynchronously" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Configuring CORS Asynchronously</h3>\n<p>TODO</p>\n<h2 id="configuration-options"><a href="#configuration-options" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Configuration Options</h2>\n<p>The type of the <code>cors</code> middleware function is :</p>\n<div class="redex-codeblock"><pre class="hljs lang-reasonml"><code><span class="hljs-keyword">let</span> cors:\n  (\n    ~origin: origin=?,\n    ~methods: <span class="hljs-built_in">array</span>(<span class="hljs-type">Express</span>.<span class="hljs-type">Request</span>.httpMethod)=?,\n    ~allowedHeaders: option(<span class="hljs-built_in">array</span>(<span class="hljs-built_in">string</span>))=?,\n    ~exposedHeaders: option(<span class="hljs-built_in">array</span>(<span class="hljs-built_in">string</span>))=?,\n    ~credentials: <span class="hljs-built_in">bool</span>=?,\n    ~maxAge: option(<span class="hljs-built_in">int</span>)=?,\n    ~preflightContinue: <span class="hljs-built_in">bool</span>=?,\n    ~optionsSuccessStatus: <span class="hljs-type">Express</span>.<span class="hljs-type">Response</span>.<span class="hljs-type">StatusCode</span>.t=?,\n    <span class="hljs-built_in">unit</span>\n  ) =&gt;\n  <span class="hljs-type">Express</span>.<span class="hljs-type">Middleware</span>.t;</code></pre></div>\n<ul>\n<li>\n<p><code>origin</code>: Configures the <strong>Access-Control-Allow-Origin</strong> CORS header. It is a variant with thoses constructors:</p>\n<ul>\n<li><code>Boolean(bool)</code> - set <code>origin</code> to <code>Boolean(true)</code> to reflect the <a href="http://tools.ietf.org/html/draft-abarth-origin-09">request origin</a>, as defined by <code>req.header(\'Origin\')</code>, or set it to <code>Boolean(false)</code> to disable CORS.</li>\n<li><code>String(string)</code> - set <code>origin</code> to a specific origin. For example if you set it to <code>String("http:\\/\\/example.com")</code> only requests from "<a href="http://example.com">http://example.com</a>" will be allowed.</li>\n<li><code>RegExp(Js.Re.t)</code> - set <code>origin</code> to a regular expression pattern which will be used to test the request origin. If it\'s a match, the request origin will be reflected. For example the pattern <code>RegExp([%re "/example\\.com$/"])</code> will reflect any request that is coming from an origin ending with "example.com".</li>\n<li><code>Array(array(string))</code> - set <code>origin</code> to an array of valid origins using strings.</li>\n<li><code>Array(array(Js.Re.t))</code> - set <code>origin</code> to an array of valid origins using RegExp.</li>\n<li><code>Function((option(string), (option(Js.Exn.t), bool) => unit) => unit)</code> - set <code>origin</code> to a function implementing some custom logic. The function takes the request origin as the first parameter and a callback</li>\n</ul>\n</li>\n<li><code>methods</code>: Configures the <strong>Access-Control-Allow-Methods</strong> CORS header. Expects an array (ex: <code>Express.Request.([|Get, Put, Post|])</code>).</li>\n<li><code>allowedHeaders</code>: Configures the <strong>Access-Control-Allow-Headers</strong> CORS header. Expects an optional array (ex: <code>Some([|"Content-Type", "Authorization"|])</code>). If not specified, defaults to reflecting the headers specified in the request\'s <strong>Access-Control-Request-Headers</strong> header.</li>\n<li><code>exposedHeaders</code>: Configures the <strong>Access-Control-Expose-Headers</strong> CORS header. Expects an optional array (ex: <code>Some(["Content-Range", "X-Content-Range"])</code>). If not specified, no custom headers are exposed.</li>\n<li><code>credentials</code>: Configures the <strong>Access-Control-Allow-Credentials</strong> CORS header. Set to <code>true</code> to pass the header, or <code>false</code> to be omitted.</li>\n<li><code>maxAge</code>: Configures the <strong>Access-Control-Max-Age</strong> CORS header. Set to an optional integer to pass the header, otherwise it is omitted.</li>\n<li><code>preflightContinue</code>: Pass the CORS preflight response to the next handler.</li>\n<li><code>optionsSuccessStatus</code>: Provides a status code to use for successful <code>OPTIONS</code> requests, since some legacy browsers (IE11, various SmartTVs) choke on <code>204</code>.</li>\n</ul>\n<p>The default configuration is the equivalent of:</p>\n<div class="redex-codeblock"><pre class="hljs lang-reasonml"><code>cors( ~origin=<span class="hljs-type">String</span>(<span class="hljs-string">"*"</span>),\n      ~methods=[|\n                 <span class="hljs-type">Request</span>.<span class="hljs-type">Get</span>,\n                 <span class="hljs-type">Request</span>.<span class="hljs-type">Head</span>,\n                 <span class="hljs-type">Request</span>.<span class="hljs-type">Put</span>,\n                 <span class="hljs-type">Request</span>.<span class="hljs-type">Patch</span>,\n                 <span class="hljs-type">Request</span>.<span class="hljs-type">Post</span>,\n                 <span class="hljs-type">Request</span>.<span class="hljs-type">Delete</span>,\n               |],\n      ~allowedHeaders=<span class="hljs-type">None</span>,\n      ~exposedHeaders=<span class="hljs-type">None</span>,\n      ~credentials=<span class="hljs-literal">false</span>,\n      ~maxAge=<span class="hljs-type">None</span>,\n      ~preflightContinue=<span class="hljs-literal">false</span>,\n      ~optionsSuccessStatus=<span class="hljs-type">Response</span>.<span class="hljs-type">StatusCode</span>.<span class="hljs-type">NoContent</span>,\n      <span class="hljs-literal">()</span>\n);</code></pre></div>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p><a href="https://opensource.org/licenses/MPL-2.0">MPL-2.0</a></p>\n<h2 id="author"><a href="#author" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Author</h2>\n<p><a href="https://github.com/oteku">Thomas Haessle</a></p>\n<h2 id="thanks-to"><a href="#thanks-to" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thanks to</h2>\n<p><a href="https://github.com/TroyGoode">Troy Goode</a> for building cors !!!</p>\n',homepageUrl:"https://github.com/oteku/bs-cors#readme",repositoryUrl:"https://github.com/oteku/bs-cors",npmUrl:"https://www.npmjs.com/package/bs-cors",issuesUrl:"https://github.com/oteku/bs-cors/issues",slug:"/package/bs-cors"}},pathContext:{id:"bs-cors"}}}});
//# sourceMappingURL=path---package-bs-cors-bedb629cc75e9dd75960.js.map