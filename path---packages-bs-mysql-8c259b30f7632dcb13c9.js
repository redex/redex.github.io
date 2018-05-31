webpackJsonp([91760665394868],{1066:function(s,n){s.exports={data:{package:{id:"bs-mysql",score:.4797410901354529,name:"bs-mysql",version:"0.1.4",description:"Bucklescript bindings for mysql.js, written in Reason.",keywords:["databases","mysql","node","bucklescript"],license:"MIT",updated:"2018-01-15T21:07:06.099Z",stars:1,type:"published",quality:.41186920142516775,popularity:.023270439866978708,maintenance:.994387645012743,readme:'<h1 id="mysqljs-bindings-for-reasonbucklescript"><a href="#mysqljs-bindings-for-reasonbucklescript" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>MySQL.js Bindings for Reason/Bucklescript</h1>\n<p>This repository contains in-progress Reason/Bucklescript bindings for <a href="https://github.com/mysqljs/mysql">mysql</a>.</p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> conn = <span class="hljs-type">Mysql</span>.connect(~host=<span class="hljs-string">"127.0.0.1"</span>, ~port=<span class="hljs-number">3306</span>, ~user=<span class="hljs-string">"root"</span>);\n\n<span class="hljs-type">Mysql</span>.query(\n  conn,\n  <span class="hljs-string">"SHOW DATABASES"</span>,\n  (error, results, fields) =&gt;\n    switch (<span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.to_opt(error)) {\n    | <span class="hljs-type">None</span> =&gt;\n      <span class="hljs-type">Js</span>.log(results);\n      <span class="hljs-type">Js</span>.log(fields)\n    | <span class="hljs-type">Some</span>(error) =&gt; <span class="hljs-type">Js</span>.log(error##message)\n    }\n);\n\n<span class="hljs-type">Mysql</span>.endConnection(conn);</code></pre>\n      </div>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<ol>\n<li>Install the bindings using <code>npm install --save bs-mysql</code></li>\n<li>Add the bindings to <code>bsconfig.json</code>:</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"bs-dependencies"</span>: [\n      <span class="hljs-string">"bs-mysql"</span>\n  ]\n}</code></pre>\n      </div>\n<h2 id="build"><a href="#build" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build</h2>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-none"><code>npm run build</code></pre>\n      </div>\n<h2 id="build--watch"><a href="#build--watch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build + Watch</h2>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-none"><code>npm run start</code></pre>\n      </div>\n<h2 id="current-state--todo"><a href="#current-state--todo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Current State &#x26; Todo</h2>\n<p>The API is still very incomplete. Use at your own risk, contributions are welcome!</p>\n',homepageUrl:"https://github.com/davidgomes/bs-mysql",repositoryUrl:"https://github.com/davidgomes/bs-mysql",npmUrl:"https://www.npmjs.com/package/bs-mysql",issuesUrl:"https://github.com/davidgomes/bs-mysql/issues",slug:"packages/bs-mysql"}},pathContext:{id:"bs-mysql"}}}});
//# sourceMappingURL=path---packages-bs-mysql-8c259b30f7632dcb13c9.js.map