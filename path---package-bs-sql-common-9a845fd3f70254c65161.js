webpackJsonp([0xfa4fb2bb0988],{1152:function(s,a){s.exports={data:{package:{id:"bs-sql-common",stars:4,name:"bs-sql-common",version:"1.0.2",category:"library",flags:[],platforms:["node"],description:"A common interface common for SQL drivers.",keywords:["database","sql"],license:"MIT",updated:"2018-05-30T04:48:36.909Z",type:"published",score:.6499829508999581,quality:.9226920378522099,popularity:.06626929406691583,maintenance:.9999459617739275,readme:'<p><a href="https://nodei.co/npm/bs-sql-common/"><img src="https://nodei.co/npm/bs-sql-common.png" alt="NPM"></a>\n<a href="https://www.travis-ci.org/scull7/bs-sql-common"><img src="https://www.travis-ci.org/scull7/bs-sql-common.svg?branch=master" alt="Build Status"></a>\n<a href="https://coveralls.io/github/scull7/bs-sql-common?branch=master"><img src="https://coveralls.io/repos/github/scull7/bs-sql-common/badge.svg?branch=master" alt="Coverage Status"></a></p>\n<h1 id="bs-sql-common"><a href="#bs-sql-common" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-sql-common</h1>\n<p>A common interface for SQL-based Node.js drivers.</p>\n<h2 id="why"><a href="#why" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why?</h2>\n<p>To provide a common interface for MySQL, PostgreSQL and sqlite\nimplementations.  </p>\n<h3 id="version-2"><a href="#version-2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Version 2</h3>\n<p>A rewrite of the entire package to expose it as a Functor that can accept\nany module which implements the <code>Queryable</code> interface.</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">module</span> <span class="hljs-keyword">type</span> <span class="hljs-type">Queryable</span> = <span class="hljs-keyword">sig</span>\n  <span class="hljs-keyword">type</span> t\n  <span class="hljs-keyword">type</span> meta\n  <span class="hljs-keyword">type</span> rows = <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.t <span class="hljs-built_in">array</span>\n\n  <span class="hljs-keyword">type</span> params =\n    [ <span class="hljs-tag">`Named</span> <span class="hljs-keyword">of</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.t\n    | <span class="hljs-tag">`Positional</span> <span class="hljs-keyword">of</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.t\n    ] option\n\n  <span class="hljs-keyword">type</span> callback = <span class="hljs-built_in">exn</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.t -&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.t -&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.t <span class="hljs-built_in">array</span> -&gt; <span class="hljs-built_in">unit</span>\n\n  <span class="hljs-keyword">val</span> close : t -&gt; <span class="hljs-built_in">unit</span>\n\n  <span class="hljs-keyword">val</span> parse_response :\n    <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.t -&gt;\n    <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.t <span class="hljs-built_in">array</span> -&gt;\n    [&gt; <span class="hljs-tag">`Error</span> <span class="hljs-keyword">of</span> <span class="hljs-built_in">exn</span>\n    |  <span class="hljs-tag">`Mutation</span> <span class="hljs-keyword">of</span> <span class="hljs-built_in">int</span> * <span class="hljs-built_in">int</span>\n    |  <span class="hljs-tag">`Select</span> <span class="hljs-keyword">of</span> rows * meta\n    ]\n\n  <span class="hljs-keyword">val</span> execute : t -&gt; <span class="hljs-built_in">string</span> -&gt; params -&gt; callback -&gt; <span class="hljs-built_in">unit</span>\n<span class="hljs-keyword">end</span></code></pre></div>\n<p>The new interface provided through the Functor is simplified as it only contains\nsix methods and uses Polymorphic variants for return states so that the user no\nlonger requires structural knowledge of the SqlCommon package for response\nparsing.</p>\n<h2 id="status"><a href="#status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Status</h2>\n<p>The standard things are there and this library is being used live within\nseveral production projects.</p>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> Query parameter substitution</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Named parameters</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Promise based interface.</li>\n<li class="task-list-item"><input type="checkbox" disabled> Connection pooling</li>\n<li class="task-list-item"><input type="checkbox" disabled> <a href="https://github.com/sidorares/node-mysql2/tree/master/documentation/Extras.md">Custom Streams</a></li>\n</ul>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>Inside of a BuckleScript project:</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>yarn install --save bs-sql-common</code></pre></div>\n<p>Then add <code>bs-sql-common</code> to your <code>bs-dependencies</code> in your <code>bsconfig.json</code></p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"bs-dependencies"</span>: [ <span class="hljs-string">"bs-sql-common"</span> ]\n}</code></pre></div>\n<p>Then add a <code>bs-sql-common</code> compatible package to your repository or create your\nown. All of the examples use the <a href="https://github.com/scull7/bs-mysql2"><code>bs-mysql2</code></a> package, here are the\nrequirements to use that package:</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>yarn install --save bs-mysql2Â</code></pre></div>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"bs-dependencies"</span>: [ <span class="hljs-string">"bs-sql-common"</span>, <span class="hljs-string">"bs-mysql2"</span> ]\n}</code></pre></div>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code>  <span class="hljs-keyword">module</span> <span class="hljs-type">Db</span> = <span class="hljs-type">SqlCommon</span>.<span class="hljs-type">Make_store</span>(<span class="hljs-type">MySql</span>.<span class="hljs-type">Connection</span>)\n\n  <span class="hljs-keyword">let</span> conn = <span class="hljs-type">MySql</span>.<span class="hljs-type">Connection</span>.make ~host=<span class="hljs-string">"127.0.0.1"</span> ~port=<span class="hljs-number">3306</span> ~user=<span class="hljs-string">"root"</span> <span class="hljs-literal">()</span>\n\n  <span class="hljs-type">Db</span>.query conn ~sql:<span class="hljs-string">"SHOW DATABASES"</span> (<span class="hljs-keyword">fun</span> res -&gt;\n    <span class="hljs-keyword">match</span> res <span class="hljs-keyword">with</span>\n    | <span class="hljs-tag">`Error</span> e -&gt; <span class="hljs-type">Js</span>.log2 <span class="hljs-string">"ERROR: "</span> e\n    | <span class="hljs-tag">`Select</span> (rows, meta) -&gt; <span class="hljs-type">Js</span>.log3 <span class="hljs-string">"SELECT: "</span> rows meta\n  )</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p><strong><em>Note:</em></strong> All of the examples use the <a href="https://github.com/scull7/bs-mysql2"><code>bs-mysql2</code></a> package as the\nconnection provider. Any other provider should have the same behavior with\ndiffering connection creation requirements.</p>\n<h3 id="create-a-connection-and-customized-module"><a href="#create-a-connection-and-customized-module" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Create a connection and customized module</h3>\n<p>The following connection and module will be use within the rest of the examples.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Db</span> = <span class="hljs-title">SqlCommon</span>.<span class="hljs-title">Make_store</span>(<span class="hljs-title">MySql</span>.<span class="hljs-title">Connection</span>);\n\n<span class="hljs-title">let</span> <span class="hljs-title">conn</span> = <span class="hljs-title">MySql</span>.<span class="hljs-title">Connection</span>.<span class="hljs-title">make</span>(~<span class="hljs-title">host</span>="127.0.0.1", ~<span class="hljs-title">port</span>=3306, ~<span class="hljs-title">user</span>="<span class="hljs-title">root</span>", ());</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">Db</span> = <span class="hljs-type">SqlCommon</span>.<span class="hljs-type">Make_store</span>(<span class="hljs-type">MySql</span>.<span class="hljs-type">Connection</span>)\n<span class="hljs-keyword">let</span> conn = <span class="hljs-type">MySql</span>.<span class="hljs-type">Connection</span>.make ~host:<span class="hljs-string">"127.0.0.1"</span> ~port:<span class="hljs-number">3306</span> ~user:<span class="hljs-string">"root"</span> <span class="hljs-literal">()</span></code></pre>\n      </div>\n    </div>\n  \n<p>Assume the following statement occurs at the end of each example.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Db</span>.close(conn);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = <span class="hljs-type">Db</span>.close conn</code></pre>\n      </div>\n    </div>\n  \n<h3 id="standard-callback-interface"><a href="#standard-callback-interface" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Standard Callback Interface</h3>\n<h4 id="standard-query-method"><a href="#standard-query-method" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Standard Query Method</h4>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Db</span>.query(~sql=<span class="hljs-string">"SHOW DATABASES"</span>, (res) =&gt;\n  <span class="hljs-keyword">switch</span> res {\n  | `<span class="hljs-type">Error</span> e =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"ERROR; "</span>, e)\n  | `<span class="hljs-type">Select</span> (rows, meta) =&gt; <span class="hljs-type">Js</span>.log3(<span class="hljs-string">"SELECT: "</span>, rows, meta)\n  }\n);\n\n<span class="hljs-type">Db</span>.mutate(~sql=<span class="hljs-string">"INSERT INTO test (foo) VALUES (\\"bar\\")"</span>, (res) =&gt;\n  <span class="hljs-keyword">switch</span> res {\n  | `<span class="hljs-type">Error</span> e =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"ERROR; "</span>, e)\n  | `<span class="hljs-type">Mutation</span> (<span class="hljs-built_in">count</span>, id) =&gt; <span class="hljs-type">Js</span>.log3(<span class="hljs-string">"MUTATION: "</span>, <span class="hljs-built_in">count</span>, id)\n  }\n)</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  <span class="hljs-type">Db</span>.query ~sql:<span class="hljs-string">"SHOW DATABASES"</span>\n    (<span class="hljs-keyword">fun</span> res  -&gt;\n       <span class="hljs-keyword">match</span> res <span class="hljs-keyword">with</span>\n       | <span class="hljs-tag">`Error</span> e -&gt; <span class="hljs-type">Js</span>.log2 <span class="hljs-string">"ERROR; "</span> e\n       | <span class="hljs-tag">`Select</span> (rows,meta) -&gt; <span class="hljs-type">Js</span>.log3 <span class="hljs-string">"SELECT: "</span> rows meta)\n<span class="hljs-keyword">let</span> _ =\n  <span class="hljs-type">Db</span>.mutate ~sql:<span class="hljs-string">"INSERT INTO test (foo) VALUES (\\"bar\\")"</span>\n    (<span class="hljs-keyword">fun</span> res  -&gt;\n       <span class="hljs-keyword">match</span> res <span class="hljs-keyword">with</span>\n       | <span class="hljs-tag">`Error</span> e -&gt; <span class="hljs-type">Js</span>.log2 <span class="hljs-string">"ERROR; "</span> e\n       | <span class="hljs-tag">`Mutation</span> (count,id) -&gt; <span class="hljs-type">Js</span>.log3 <span class="hljs-string">"MUTATION: "</span> count id)</code></pre>\n      </div>\n    </div>\n  \n<h4 id="prepared-statements---named-placeholders"><a href="#prepared-statements---named-placeholders" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Prepared Statements - Named Placeholders</h4>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> json = <span class="hljs-type">Some</span>(`<span class="hljs-type">Named</span>(\n  <span class="hljs-type">Json</span>.<span class="hljs-type">Encode</span>.(object_([\n  (<span class="hljs-string">"x"</span>, int(<span class="hljs-number">1</span>)),\n  (<span class="hljs-string">"y"</span>, int(<span class="hljs-number">2</span>)),\n  ]))\n));\n\n<span class="hljs-type">Db</span>.query(~sql:<span class="hljs-string">"SELECT :x + :y AS z"</span>, ?params, (res) =&gt;\n  <span class="hljs-keyword">switch</span> res {\n  | `<span class="hljs-type">Error</span> e =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"ERROR; "</span>, e)\n  | `<span class="hljs-type">Select</span> (rows, meta) =&gt; <span class="hljs-type">Js</span>.log3(<span class="hljs-string">"SELECT: "</span>, rows, meta)\n  }\n);\n\n<span class="hljs-type">Db</span>.mutate(~sql:<span class="hljs-string">"INSERT INTO test (foo, bar) VALUES (:x, :y)"</span>, ?params, (res) =&gt;\n  <span class="hljs-keyword">switch</span> res {\n  | `<span class="hljs-type">Error</span> e =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"ERROR; "</span>, e)\n  | `<span class="hljs-type">Mutation</span> (<span class="hljs-built_in">count</span>, id) =&gt; <span class="hljs-type">Js</span>.log3(<span class="hljs-string">"MUTATION: "</span>, <span class="hljs-built_in">count</span>, id)\n  }\n)</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">904</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h4 id="prepared-statements---positional-placeholders"><a href="#prepared-statements---positional-placeholders" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Prepared Statements - Positional Placeholders</h4>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> params = <span class="hljs-type">Some</span>(`<span class="hljs-type">Positional</span>(\n  <span class="hljs-type">Json</span>.<span class="hljs-type">Encode</span>.(array(int, [|<span class="hljs-number">5</span>,<span class="hljs-number">6</span>|]))\n));\n\n<span class="hljs-type">Db</span>.query(~sql:<span class="hljs-string">"SELECT 1 + ? + ? AS result"</span>, ?params, (res) =&gt;\n  <span class="hljs-keyword">switch</span> res {\n  | `<span class="hljs-type">Error</span> e =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"ERROR; "</span>, e)\n  | `<span class="hljs-type">Select</span> (rows, meta) =&gt; <span class="hljs-type">Js</span>.log3(<span class="hljs-string">"SELECT: "</span>, rows, meta)\n  }\n);\n\n<span class="hljs-type">Db</span>.mutate(~sql:<span class="hljs-string">"INSERT INTO test (foo, bar) VALUES (?, ?)"</span>, ?params, (res) =&gt;\n  <span class="hljs-keyword">switch</span> res {\n  | `<span class="hljs-type">Error</span> e =&gt; <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"ERROR; "</span>, e)\n  | `<span class="hljs-type">Mutation</span> (<span class="hljs-built_in">count</span>, id) =&gt; <span class="hljs-type">Js</span>.log3(<span class="hljs-string">"MUTATION: "</span>, <span class="hljs-built_in">count</span>, id)\n  }\n)</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">904</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h3 id="promise-interface"><a href="#promise-interface" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Promise Interface</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> params = <span class="hljs-type">Some</span>(`<span class="hljs-type">Positional</span>(\n  <span class="hljs-type">Json</span>.<span class="hljs-type">Encode</span>.(array(int, [|<span class="hljs-string">"%schema"</span>|]))\n));\n<span class="hljs-type">Db</span>.query(conn, ~sql=<span class="hljs-string">"SELECT ? AS search"</span>, ?params)\n|&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.then_(((rows, meta)) =&gt; {\n  <span class="hljs-type">Js</span>.log3(<span class="hljs-string">"SELECT: "</span>, rows, meta);\n  <span class="hljs-type">Db</span>.close(conn);\n  <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve(<span class="hljs-number">1</span>);\n})\n|&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.catch((err) =&gt; {\n  <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"Failure!!!"</span>, err);\n  <span class="hljs-type">Db</span>.close(conn);\n  <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve(-<span class="hljs-number">1</span>);\n});</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">950</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/scull7/bs-sql-common",repositoryUrl:"https://github.com/scull7/bs-sql-common",npmUrl:"https://www.npmjs.com/package/bs-sql-common",issuesUrl:"https://github.com/scull7/bs-sql-common/issues",slug:"/package/bs-sql-common"}},pathContext:{id:"bs-sql-common"}}}});
//# sourceMappingURL=path---package-bs-sql-common-9a845fd3f70254c65161.js.map