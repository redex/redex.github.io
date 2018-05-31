webpackJsonp([0x95233af1c0a6],{1053:function(n,e){n.exports={data:{package:{id:"bs-luxon",score:.4454177831900242,name:"bs-luxon",version:"0.1.0",description:"Bucklescript bindings for Luxon, written in Reason.",keywords:["bucklescript","luxon"],license:"MIT",updated:"2018-01-06T19:52:05.145Z",stars:0,type:"published",quality:.7021187520763705,popularity:.009608859303320809,maintenance:.661197305174145,readme:'<h1>Luxon Bindings for ReasonML/Bucklescript</h1>\n<p>This repository contains in-progress Reason/Bucklescript bindings for <a href="https://github.com/moment/luxon">Luxon</a>.</p>\n<h2>Example</h2>\n<pre><code class="language-ocaml">open Luxon;\n\nJs.log(DateTime.local(~year=2017, ~month=5, ~day=15, ~hour=8, ~minute=30));\n\nlet dateObj: DateTime.objectDate = {\n  "year": 2017,\n  "month": 10,\n  "day": 2,\n  "hour": 3,\n  "minute": 1,\n  "second": 0,\n  "millisecond": 0\n};\n\nJs.log(DateTime.fromObject(dateObj)##toISODate());\n\nJs.log(DateTime.fromObject(dateObj)##day);\n\nJs.log(DateTime.dateTimeFull);\n</code></pre>\n<p>Look in the <code>example/</code> directory for an example of how to use the bindings.</p>\n<h2>Installation</h2>\n<ol>\n<li>Install the bindings using <code>npm install --save bs-luxon</code></li>\n<li>Add the bindings to <code>bsconfig.json</code>:</li>\n</ol>\n<pre><code class="language-json">{\n  "bs-dependencies": [\n      "bs-luxon"\n  ]\n}\n</code></pre>\n<h2>Build</h2>\n<pre><code>npm run build\n</code></pre>\n<h2>Build + Watch</h2>\n<pre><code>npm run start\n</code></pre>\n<h2>Current State &#x26; Todo</h2>\n<p>The API is still very complete and the bindings are not very "OCamly" yet. Use at your own risk.</p>\n',homepageUrl:"https://github.com/davidgomes/bs-luxon",repositoryUrl:"https://github.com/davidgomes/bs-luxon",npmUrl:"https://www.npmjs.com/package/bs-luxon",issuesUrl:"https://github.com/davidgomes/bs-luxon/issues",slug:"packages/bs-luxon"}},pathContext:{id:"bs-luxon"}}}});
//# sourceMappingURL=path---packages-bs-luxon-2f0a6d90213bc7eb7599.js.map