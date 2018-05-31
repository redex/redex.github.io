webpackJsonp([61368674885089],{1044:function(e,n){e.exports={data:{package:{id:"re-classnames",score:.5866687632748199,name:"re-classnames",version:"0.0.3",description:"Simple reimplementation of classnames in ReasonML",keywords:["reason-react","react","classnames","ocaml","bucklescript","reason"],license:"MIT",updated:"2017-12-20T03:32:51.127Z",stars:3,type:"published",quality:.7582192529331346,popularity:.0320553420556356,maintenance:.9942389076440201,readme:'<h1>re-classnames</h1>\n<p>Simple reimplementation of <a href="https://github.com/JedWatson/classnames">classnames</a> in <a href="https://reasonml.github.io">ReasonML</a>.</p>\n<h2>Installation</h2>\n<pre><code class="language-shell"># yarn / npm\nyarn add re-classnames\nnpm install --save re-classnames\n</code></pre>\n<h2>Usage</h2>\n<pre><code class="language-reason">Cn.make(["one", "two"]) /* => "one two" */\n</code></pre>\n<h3><code>Cn.ifBool</code></h3>\n<pre><code class="language-reason">Cn.make(["one", "two" |> Cn.ifBool(true)]) /* => "one two" */\nCn.make(["one", "two" |> Cn.ifBool(false)]) /* => "one" */\n</code></pre>\n<h3><code>Cn.ifOpt</code></h3>\n<pre><code class="language-reason">/* Cn.ifOpt */\nCn.make(["one", Some("two") |> Cn.ifOpt]) /* => "one two" */\nCn.make(["one", None |> Cn.ifOpt]) /* => "one" */\n</code></pre>\n<h3><code>Cn.mapOpt</code></h3>\n<pre><code class="language-reason">type t =\n  | One\n  | Two\n  | Tree;\n\nCn.make([\n  "one",\n  Cn.mapOpt(\n    Some(Two),\n    (v) =>\n      switch v {\n      | One => "one"\n      | Two => "two"\n      | Tree => "three"\n      }\n  )\n]) /* => "one two" */\n\nCn.make([\n  "one",\n  Cn.mapOpt(\n    None,\n    (v) =>\n      switch v {\n      | One => "one"\n      | Two => "two"\n      | Tree => "three"\n      }\n  )\n]) /* => "one" */\n</code></pre>\n<h2>License</h2>\n<p>It\'s MIT.</p>\n',homepageUrl:"https://github.com/alexfedoseev/re-classnames#readme",repositoryUrl:"https://github.com/alexfedoseev/re-classnames",npmUrl:"https://www.npmjs.com/package/re-classnames",issuesUrl:"https://github.com/alexfedoseev/re-classnames/issues",slug:"packages/re-classnames"}},pathContext:{id:"re-classnames"}}}});
//# sourceMappingURL=path---packages-re-classnames-fcf717a92708834e0e09.js.map