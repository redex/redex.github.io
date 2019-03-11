webpackJsonp([0x7f7741ae8c80],{1216:function(s,a){s.exports={data:{package:{type:"published",id:"bs-sql-composer",name:"bs-sql-composer",version:"3.2.2",category:"library",flags:[],platforms:["node"],description:"A library for SQL composition in BuckleScript",keywords:["database","sql"],license:"MIT",updated:"2019-02-20T11:08:02.140Z",stars:11,score:.6612558472567032,quality:.956365240556217,popularity:.0697304482460183,maintenance:.9998303377249478,readme:'<p><a href="https://www.travis-ci.org/scull7/bs-sql-composer"><img src="https://www.travis-ci.org/scull7/bs-sql-composer.svg?branch=master" alt="Build Status"></a>\n<a href="https://coveralls.io/github/scull7/bs-sql-composer?branch=master"><img src="https://coveralls.io/repos/github/scull7/bs-sql-composer/badge.svg?branch=master" alt="Coverage Status"></a></p>\n<h1 id="bs-sql-composer"><a href="#bs-sql-composer" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-sql-composer</h1>\n<p>A library for SQL composition in BucklesScript</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="basic-select"><a href="#basic-select" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Select</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>  <span class="hljs-type">SqlComposer</span>.<span class="hljs-type">Select</span>.(\n    make()\n    |. field(<span class="hljs-string">"*"</span>)\n    |. from(<span class="hljs-string">"test"</span>)\n    |. toSql\n    |. <span class="hljs-type">Js</span>.log\n  );</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">SqlComposer</span>.<span class="hljs-type">Select</span> <span class="hljs-keyword">in</span>\n    ((((make <span class="hljs-literal">()</span>) |. (field <span class="hljs-string">"*"</span>)) |. (from <span class="hljs-string">"test"</span>)) |. toSql) |. <span class="hljs-type">Js</span>.log</code></pre>\n      </div>\n    </div>\n  \n<div class="redex-codeblock"><pre class="hljs lang-sql"><code>SELECT\n  *\nFROM <span class="hljs-built_in">test</span>\nWHERE <span class="hljs-number">1</span>=<span class="hljs-number">1</span></code></pre></div>\n<h3 id="where-clause"><a href="#where-clause" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Where Clause</h3>\n<p>There is an implicit <code>WHERE 1=1</code> added to every query.  This is done to\neliminate confusion with compound queries regarding the concatenation of\nwhere clauses.  </p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>  <span class="hljs-type">SqlComposer</span>.<span class="hljs-type">Select</span>.(\n    make()\n    |. field(<span class="hljs-string">"*"</span>)\n    |. from(<span class="hljs-string">"test"</span>)\n    |. <span class="hljs-keyword">where</span>(<span class="hljs-string">"AND test.foo = ?"</span>)\n    |. toSql\n    |. <span class="hljs-type">Js</span>.log\n  );</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">SqlComposer</span>.<span class="hljs-type">Select</span> <span class="hljs-keyword">in</span>\n    (((((make <span class="hljs-literal">()</span>) |. (field <span class="hljs-string">"*"</span>)) |. (from <span class="hljs-string">"test"</span>)) |.\n        (where <span class="hljs-string">"AND test.foo = ?"</span>))\n       |. toSql)\n      |. <span class="hljs-type">Js</span>.log</code></pre>\n      </div>\n    </div>\n  \n<div class="redex-codeblock"><pre class="hljs lang-sql"><code>SELECT\n  *\nFROM <span class="hljs-built_in">test</span>\nWHERE <span class="hljs-number">1</span>=<span class="hljs-number">1</span>\nAND test.foo = ?</code></pre></div>\n<h3 id="join-clause"><a href="#join-clause" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Join Clause</h3>\n<div class="redex-codeblock"><pre class="hljs lang-reasons"><code>  <span class="hljs-type">SqlComposer</span>.<span class="hljs-type">Select</span>.(\n    make<span class="hljs-literal">()</span>\n    |. field(<span class="hljs-string">"*"</span>)\n    |. from(<span class="hljs-string">"test"</span>)\n    |. join(<span class="hljs-string">"JOIN foo ON test.foo_id = foo.id"</span>)\n    |. toSql\n    |. <span class="hljs-type">Js</span>.log\n  )</code></pre></div>\n<div class="redex-codeblock"><pre class="hljs lang-sql"><code>SELECT\n  *\nFROM <span class="hljs-built_in">test</span>\nJOIN foo ON test.foo_id = foo.id\nWHERE <span class="hljs-number">1</span>=<span class="hljs-number">1</span></code></pre></div>\n<h3 id="adding-to-a-base-query"><a href="#adding-to-a-base-query" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding to a base query</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>  <span class="hljs-keyword">let</span> base_query = <span class="hljs-type">SqlComposer</span>.<span class="hljs-type">Select</span>.(\n    make()\n    |. from(<span class="hljs-string">"test"</span>)\n    |. field(<span class="hljs-string">"foo"</span>)\n    |. field(<span class="hljs-string">"bar"</span>)\n  );\n\n  <span class="hljs-type">SqlComposer</span>.<span class="hljs-type">Select</span>.(\n    base_query\n    |. <span class="hljs-keyword">where</span>(<span class="hljs-string">"AND test.foo = ?"</span>)\n    |. toSql\n    |. <span class="hljs-type">Js</span>.log\n  );</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> base_query =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">SqlComposer</span>.<span class="hljs-type">Select</span> <span class="hljs-keyword">in</span>\n    (((make <span class="hljs-literal">()</span>) |. (from <span class="hljs-string">"test"</span>)) |. (field <span class="hljs-string">"foo"</span>)) |. (field <span class="hljs-string">"bar"</span>)\n<span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">SqlComposer</span>.<span class="hljs-type">Select</span> <span class="hljs-keyword">in</span>\n    ((base_query |. (where <span class="hljs-string">"AND test.foo = ?"</span>)) |. toSql) |. <span class="hljs-type">Js</span>.log</code></pre>\n      </div>\n    </div>\n  \n<div class="redex-codeblock"><pre class="hljs lang-sql"><code>SELECT\n  foo\n, bar\nFROM <span class="hljs-built_in">test</span>\nWHERE <span class="hljs-number">1</span>=<span class="hljs-number">1</span>\nAND test.foo = ?</code></pre></div>\n<h3 id="alias-a-field"><a href="#alias-a-field" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Alias a field</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">SqlComposer</span>.<span class="hljs-type">Select</span>.(\n  make()\n  |. from(<span class="hljs-string">"test"</span>)\n  |. field(<span class="hljs-string">"foo AS bar"</span>)\n  |. toSql\n  |. <span class="hljs-type">Js</span>.log\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">SqlComposer</span>.<span class="hljs-type">Select</span> <span class="hljs-keyword">in</span>\n    ((((make <span class="hljs-literal">()</span>) |. (from <span class="hljs-string">"test"</span>)) |. (field <span class="hljs-string">"foo AS bar"</span>)) |. toSql) |.\n      <span class="hljs-type">Js</span>.log</code></pre>\n      </div>\n    </div>\n  \n<div class="redex-codeblock"><pre class="hljs lang-sql"><code>SELECT\n  foo AS bar\nFROM <span class="hljs-built_in">test</span>\nWHERE <span class="hljs-number">1</span>=<span class="hljs-number">1</span></code></pre></div>\n<h3 id="order-by"><a href="#order-by" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Order By</h3>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-type">SqlComposer</span>.<span class="hljs-type">Select</span>.(\n  make<span class="hljs-literal">()</span>\n  |. from(<span class="hljs-string">"test"</span>)\n  |. field(<span class="hljs-string">"*"</span>)\n  |. orderBy(<span class="hljs-tag">`Asc</span>(<span class="hljs-string">"foo"</span>))\n  |. orderBy(<span class="hljs-tag">`Desc</span>(<span class="hljs-string">"bar"</span>))\n  |. toSql\n  |. <span class="hljs-type">Js</span>.log\n);</code></pre></div>\n<div class="redex-codeblock"><pre class="hljs lang-sql"><code>SELECT\n  *\nFROM <span class="hljs-built_in">test</span>\nWHERE <span class="hljs-number">1</span>=<span class="hljs-number">1</span>\nORDER BY\n  foo ASC\n, bar DESC</code></pre></div>\n<h3 id="group-by"><a href="#group-by" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Group By</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">SqlComposer</span>.<span class="hljs-type">Select</span>.(\n  make()\n  |. from(<span class="hljs-string">"test"</span>)\n  |. field(<span class="hljs-string">"foo AS bar"</span>)\n  |. groupBy(<span class="hljs-string">"foo"</span>)\n  |. groupBy(<span class="hljs-string">"thing"</span>)\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">SqlComposer</span>.<span class="hljs-type">Select</span> <span class="hljs-keyword">in</span>\n    ((((make <span class="hljs-literal">()</span>) |. (from <span class="hljs-string">"test"</span>)) |. (field <span class="hljs-string">"foo AS bar"</span>)) |.\n       (groupBy <span class="hljs-string">"foo"</span>))\n      |. (groupBy <span class="hljs-string">"thing"</span>)</code></pre>\n      </div>\n    </div>\n  \n<div class="redex-codeblock"><pre class="hljs lang-sql"><code>SELECT\n  foo AS bar\nFROM <span class="hljs-built_in">test</span>\nWHERE <span class="hljs-number">1</span>=<span class="hljs-number">1</span>\nGROUP BY\n  foo\n, thing</code></pre></div>\n<h3 id="select-distinct"><a href="#select-distinct" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Select Distinct</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">SqlComposer</span>.<span class="hljs-type">Select</span>.(\n  make()\n  |. field(<span class="hljs-string">"foo"</span>)\n  |. from(<span class="hljs-string">"test"</span>)\n  |. modifier(`<span class="hljs-type">Distinct</span>)\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">SqlComposer</span>.<span class="hljs-type">Select</span> <span class="hljs-keyword">in</span>\n    (((make <span class="hljs-literal">()</span>) |. (field <span class="hljs-string">"foo"</span>)) |. (from <span class="hljs-string">"test"</span>)) |. (modifier <span class="hljs-tag">`Distinct</span>)</code></pre>\n      </div>\n    </div>\n  \n<div class="redex-codeblock"><pre class="hljs lang-sql"><code>SELECT DISTINCT\n  foo\nFROM <span class="hljs-built_in">test</span>\nWHERE <span class="hljs-number">1</span>=<span class="hljs-number">1</span></code></pre></div>\n<h2 id="how-do-i-install-it"><a href="#how-do-i-install-it" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do I install it?</h2>\n<p>Inside of a BuckleScript project:</p>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code>yarn install --save bs-sql-composer</code></pre></div>\n<p>Then add <code>bs-sql-composer</code> to your <code>bs-dependencies</code> in <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"bs-dependencies"</span>: [ <span class="hljs-string">"bs-sql-composer"</span> ]\n}</code></pre></div>\n',homepageUrl:"https://github.com/scull7/bs-sql-composer",repositoryUrl:"https://github.com/scull7/bs-sql-composer",npmUrl:"https://www.npmjs.com/package/bs-sql-composer",issuesUrl:"https://github.com/scull7/bs-sql-composer/issues",slug:"/package/bs-sql-composer"}},pathContext:{id:"bs-sql-composer"}}}});
//# sourceMappingURL=path---package-bs-sql-composer-85aa35372adc9556344b.js.map