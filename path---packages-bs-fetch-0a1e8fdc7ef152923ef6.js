webpackJsonp([42251463360473],{1041:function(e,s){e.exports={data:{package:{id:"bs-fetch",score:.5118027477087299,name:"bs-fetch",version:"0.2.0",description:"Fetch bindings for BuckleScript",keywords:["browser","fetch","bucklescript","xhr"],license:"MIT",updated:"2017-12-22T23:43:18.645Z",stars:41,type:"published",quality:.41157699648462687,popularity:.11832310463222792,maintenance:.9911901775487488,readme:'<h1>Bindings to fetch for <a href="https://github.com/bucklescript/bucklescript">BuckleScript</a>.</h1>\n<h2>Example</h2>\n<pre><code class="language-ml">(* OCaml *)\nlet _ =\n  Js.Promise.(\n    fetch "/api/hellos/1"\n    |> then_ Response.text\n    |> then_ (fun text -> print_endline text |> resolve)\n  )\n</code></pre>\n<pre><code class="language-reason">/* Reason */\nJs.Promise.(\n  fetch "/api/hellos/1"\n  |> then_ Response.text\n  |> then_ (fun text => print_endline text |> resolve)\n);\n</code></pre>\n<h2>Installation</h2>\n<pre><code class="language-sh">npm install --save bs-fetch\n</code></pre>\n<p>Then add <code>bs-fetch</code> to <code>bs-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<pre><code class="language-js">{\n  ...\n  "bs-dependencies": ["bs-fetch"]\n}\n</code></pre>\n<h2>Usage</h2>\n<p>See usage examples in <a href="https://github.com/reasonml-community/bs-fetch/blob/master/examples/examples.ml"><code>examples/examples.ml</code></a>. The source is a <a href="https://github.com/reasonml-community/bs-fetch/blob/master/src/bs_fetch.ml">single file</a>!</p>\n<h2>Changes</h2>\n<h3>0.2.0</h3>\n<ul>\n<li>Rename <code>Bs_fetch</code> module to <code>Fetch</code>. <code>Bs_fetch</code> is kept around as an alias for backwards compatibility, but should be considered deprecated.</li>\n</ul>\n',homepageUrl:"https://github.com/reasonml-community/bs-fetch#readme",repositoryUrl:"https://github.com/reasonml-community/bs-fetch",npmUrl:"https://www.npmjs.com/package/bs-fetch",issuesUrl:"https://github.com/reasonml-community/bs-fetch/issues",slug:"packages/bs-fetch"}},pathContext:{id:"bs-fetch"}}}});
//# sourceMappingURL=path---packages-bs-fetch-0a1e8fdc7ef152923ef6.js.map