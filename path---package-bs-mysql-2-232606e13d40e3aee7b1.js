webpackJsonp([0xf003af889790],{1183:function(s,a){s.exports={data:{package:{type:"published",id:"bs-mysql2",name:"bs-mysql2",version:"8.2.1",category:"binding",flags:[],platforms:["node"],description:"ReasonML bindings to the mysql2 library.",keywords:["database","sql"],license:"MIT",updated:"2019-02-20T11:04:19.187Z",stars:5,score:.6467355169141644,quality:.9093646634545943,popularity:.06843246882186736,maintenance:.9999278679718071,readme:'<p><a href="https://nodei.co/npm/bs-mysql2/"><img src="https://nodei.co/npm/bs-mysql2.png" alt="NPM"></a>\n<a href="https://travis-ci.org/scull7/bs-mysql2"><img src="https://travis-ci.org/scull7/bs-mysql2.svg?branch=master" alt="Build Status"></a>\n<a href="https://coveralls.io/github/scull7/bs-mysql2"><img src="https://coveralls.io/repos/github/scull7/bs-mysql2/badge.svg" alt="Coverage Status"></a></p>\n<h1 id="bs-mysql2"><a href="#bs-mysql2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-mysql2</h1>\n<p>ReasonML bindings to the <a href="https://www.npmjs.com/package/mysql2">mysql2</a> library.</p>\n<p>This is a very rough implementation that will enable very simple use cases.</p>\n<p>Initially this was just a copy of <a href="https://github.com/davidgomes/bs-mysql">bs-mysql</a>.</p>\n<h2 id="why"><a href="#why" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why?</h2>\n<p>The main difference between these bindings and the <a href="https://github.com/davidgomes/bs-mysql">bs-mysql</a> bindings is the\nuse of the <a href="https://www.npmjs.com/package/mysql2">mysql2</a> library / driver over the <a href="https://www.npmjs.com/package/mysql">mysql</a> (version 1) driver. You\ncan see the reasoning behind the new <a href="https://www.npmjs.com/package/mysql2">mysql2</a> driver here:\n<a href="https://github.com/sidorares/node-mysql2#history-and-why-mysql2">History and Why MySQL2</a></p>\n<h3 id="version-2"><a href="#version-2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Version 2</h3>\n<p>Version 2 of this driver removed most of the API surface area.  This is now\nintended as a module which better interfaces are built on top of, yet it still\nquite usable.</p>\n<p>However, if you are looking for a higher level interface then you should look\nat the <a href="https://github.com/scull7/bs-sql-common">bs-sql-common</a> library. This library can be used along side\n<a href="https://github.com/scull7/bs-sql-common">bs-sql-common</a> as a data provider.</p>\n<h2 id="status"><a href="#status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Status</h2>\n<p>Not all of the <a href="https://www.npmjs.com/package/mysql2">mysql2</a> library <a href="https://github.com/sidorares/node-mysql2#history-and-why-mysql2">features</a> are implemented but\nthere is a usable implementation of the <a href="#promise-interface">Promise based wrapper</a>\nand <a href="#named-placeholders">Named Placeholders</a>.</p>\n<ul>\n<li class="task-list-item">\n<p><input type="checkbox" checked disabled> Faster / Better Performance (<em>kind of get this for free</em>)</p>\n</li>\n<li class="task-list-item">\n<p><input type="checkbox" checked disabled> <a href="https://github.com/sidorares/node-mysql2/tree/master/documentation/Prepared-Statements.md">Prepared Statements</a> - <a href="#prepared-statements">examples</a></p>\n</li>\n<li class="task-list-item">\n<p><input type="checkbox" disabled> MySQL Binary Log Protocol</p>\n</li>\n<li class="task-list-item">\n<p><input type="checkbox" disabled> <a href="https://github.com/sidorares/node-mysql2/tree/master/documentation/MySQL-Server.md">MySQL Server</a></p>\n</li>\n<li class="task-list-item">\n<p><input type="checkbox" disabled> Extended support for Encoding and Collation</p>\n</li>\n<li class="task-list-item">\n<p><input type="checkbox" disabled> <a href="https://github.com/sidorares/node-mysql2/tree/master/documentation/Promise-Wrapper.md">Promise Wrapper</a> - <a href="#promise-interface">examples</a></p>\n</li>\n<li class="task-list-item">\n<p><input type="checkbox" disabled> Compression</p>\n</li>\n<li class="task-list-item">\n<p><input type="checkbox" disabled> SSL and <a href="https://github.com/sidorares/node-mysql2/tree/master/documentation/Authentication-Switch.md">Authentication Switch</a></p>\n</li>\n<li class="task-list-item">\n<p><input type="checkbox" disabled> <a href="https://github.com/sidorares/node-mysql2/tree/master/documentation/Extras.md">Custom Streams</a></p>\n</li>\n<li class="task-list-item">\n<p><input type="checkbox" disabled> Pooling</p>\n<p><strong><em>NOTE:</em></strong> If you\'re trying to run the tests on macOS then you will need to:\n<code>brew install watchman</code></p>\n</li>\n</ul>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="standard-callback-interface"><a href="#standard-callback-interface" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Standard Callback Interface</h3>\n<h4 id="standard-query-method"><a href="#standard-query-method" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Standard Query Method</h4>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> conn\n  = <span class="hljs-type">MySql2</span>.<span class="hljs-type">Connection</span>.connect(~host=<span class="hljs-number">127.0</span>.<span class="hljs-number">0.1</span>, ~port=<span class="hljs-number">3306</span>, ~user=<span class="hljs-string">"root"</span>, ());\n\n<span class="hljs-type">MySql2</span>.execute(conn, <span class="hljs-string">"SHOW DATABASES"</span>, <span class="hljs-type">None</span>, res =&gt; {\n    <span class="hljs-keyword">switch</span> res {\n    | `<span class="hljs-type">Error</span>(e) =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"ERROR: "</span>, e)\n    | `<span class="hljs-type">Select</span>(select) =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"SELECT: "</span>, select)\n    | `<span class="hljs-type">Mutation</span>(mutation) =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"MUTATION: "</span>, mutation)\n    }\n  <span class="hljs-type">MySql2</span>.close(conn);\n});</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">3010</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h4 id="prepared-statements"><a href="#prepared-statements" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Prepared Statements</h4>\n<h5 id="named-placeholders"><a href="#named-placeholders" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Named Placeholders</h5>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> conn\n  = <span class="hljs-type">MySql2</span>.<span class="hljs-type">Connect</span>.connect(~host=<span class="hljs-number">127.0</span>.<span class="hljs-number">0.1</span>, ~port=<span class="hljs-number">3306</span>, ~user=<span class="hljs-string">"root"</span>, ());\n\n<span class="hljs-keyword">let</span> named = <span class="hljs-type">MySql2</span>.<span class="hljs-type">Params</span>.named(\n  <span class="hljs-type">Json</span>.<span class="hljs-type">Encode</span>.object_([\n    (<span class="hljs-string">"x"</span>, <span class="hljs-type">Json</span>.<span class="hljs-type">Encode</span>.int(<span class="hljs-number">1</span>)),\n    (<span class="hljs-string">"y"</span>, <span class="hljs-type">Json</span>.<span class="hljs-type">Encode</span>.int(<span class="hljs-number">2</span>)),\n  ])\n);\n\n<span class="hljs-type">MySql2</span>.execute(conn, <span class="hljs-string">"SELECT :x + :y AS result"</span>, <span class="hljs-type">Some</span>(named), res =&gt; {\n    <span class="hljs-keyword">switch</span> res {\n    | `<span class="hljs-type">Error</span>(e) =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"ERROR: "</span>, e)\n    | `<span class="hljs-type">Select</span>(select) =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"SELECT: "</span>, select)\n    | `<span class="hljs-type">Mutation</span>(mutation) =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"MUTATION: "</span>, mutation)\n    }\n  }\n  <span class="hljs-type">MySql2</span>.close(conn);\n});</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">3010</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h5 id="unnamed-placeholders"><a href="#unnamed-placeholders" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Unnamed Placeholders</h5>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> conn\n  = <span class="hljs-type">MySql2</span>.<span class="hljs-type">Connection</span>.connect(~host=<span class="hljs-number">127.0</span>.<span class="hljs-number">0.1</span>, ~port=<span class="hljs-number">3306</span>, ~user=<span class="hljs-string">"root"</span>, ());\n\n<span class="hljs-keyword">let</span> positional = <span class="hljs-type">MySql2</span>.<span class="hljs-type">Params</span>.positional(\n  <span class="hljs-type">Belt_Array</span>.<span class="hljs-built_in">map</span>([|<span class="hljs-number">5</span>, <span class="hljs-number">6</span>|], <span class="hljs-type">Json</span>.<span class="hljs-type">Encode</span>.int) |&gt; <span class="hljs-type">Json</span>.<span class="hljs-type">Encode</span>.jsonArray\n);\n\n<span class="hljs-type">MySql2</span>.execute(conn, <span class="hljs-string">"SELECT 1 + ? + ? AS result"</span>, <span class="hljs-type">Some</span>(positional), res =&gt; {\n    <span class="hljs-keyword">switch</span> res {\n    | `<span class="hljs-type">Error</span>(e) =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"ERROR: "</span>, e)\n    | `<span class="hljs-type">Select</span>(rows, meta) =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"SELECT: "</span>, rows, meta)\n    | `<span class="hljs-type">Mutation</span>(<span class="hljs-built_in">count</span>, id) =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"MUTATION: "</span>, <span class="hljs-built_in">count</span>, id)\n    }\n  }\n  <span class="hljs-type">MySql2</span>.close(conn);\n});</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">3010</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h2 id="how-do-i-install-it"><a href="#how-do-i-install-it" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do I install it?</h2>\n<p>Inside of a BuckleScript project:</p>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code>yarn install --save bs-mysql2 @glennsl/bs-json</code></pre></div>\n<p>Then add <code>bs-mysql2</code> and <code>@glennsl/bs-json</code> to your <code>bs-dependencies</code> in <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"bs-mysql2"</span>, <span class="hljs-string">"@glennsl/bs-json"</span>]\n}</code></pre></div>\n<h2 id="how-do-i-use-it"><a href="#how-do-i-use-it" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do I use it?</h2>\n<h3 id="use-it-in-your-project"><a href="#use-it-in-your-project" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Use it in your project</h3>\n<p>See the <a href="#usage">Usage</a> section above...</p>\n<h3 id="run-the-examples"><a href="#run-the-examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Run the examples</h3>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code>yarn run examples:simple</code></pre></div>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code>yarn run examples:prepared-statements</code></pre></div>\n<h2 id="whats-missing"><a href="#whats-missing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What\'s missing?</h2>\n<p>Mostly everything...</p>\n',homepageUrl:"https://github.com/scull7/bs-mysql2",repositoryUrl:"https://github.com/scull7/bs-mysql2",npmUrl:"https://www.npmjs.com/package/bs-mysql2",issuesUrl:"https://github.com/scull7/bs-mysql2/issues",slug:"/package/bs-mysql2"}},pathContext:{id:"bs-mysql2"}}}});
//# sourceMappingURL=path---package-bs-mysql-2-232606e13d40e3aee7b1.js.map