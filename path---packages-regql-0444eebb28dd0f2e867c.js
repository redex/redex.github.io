webpackJsonp([0x9384d5a19a2],{1066:function(e,n){e.exports={data:{package:{id:"regql",score:.5205060613840027,name:"regql",version:"0.3.1",description:"reason graphql",keywords:[],license:"MIT",updated:"2017-12-21T23:14:37.677Z",stars:11,type:"published",quality:.5063994743637147,popularity:.05362386068342816,maintenance:.9994796223876814,readme:'<h1>Regql</h1>\n<p><a href="http://npm.im/regql"><img src="https://img.shields.io/npm/v/regql.svg?style=flat-square" alt="version"></a>\n<a href="http://opensource.org/licenses/MIT"><img src="https://img.shields.io/npm/l/regql.svg?style=flat-square" alt="MIT License"></a></p>\n<p>GraphQL Client in Pure <a href="https://reasonml.github.io">ReasonML</a>. Stupid simple,\nmagic-free client backed by plain-old fetch. Inspired by\n<a href="https://github.com/Gregoirevda/reason-apollo">reason-apollo</a>.</p>\n<h2>RoadMap</h2>\n<p>In the near future these are the planned additional features:</p>\n<ul>\n<li class="task-list-item"><input type="checkbox" disabled> integration with <a href="https://github.com/mhallin/graphql_ppx">graphql_ppx</a></li>\n<li class="task-list-item"><input type="checkbox" disabled> Cache queries/requests</li>\n<li class="task-list-item"><input type="checkbox" disabled> Optimistic Updates</li>\n</ul>\n<h2>Install</h2>\n<pre><code class="language-bash">yarn add regql\n</code></pre>\n<h2>bsconfig</h2>\n<pre><code class="language-json">"bs-dependencies": [\n  "reason-react",\n  "bs-fetch",\n  "bs-json",\n  "regql"\n]\n</code></pre>\n<h2>Usage</h2>\n<h4>Instantiate the client and pass it configuration:</h4>\n<pre><code class="language-reason">// Gql.re\nmodule Client = Regql.Create({\n  let uri = "http://localhost:8000/graphql"\n});\n</code></pre>\n<h4>Create a query</h4>\n<pre><code class="language-reason">let query = {|\n    query getUser {\n      name\n    }\n  |};\n</code></pre>\n<h4>Define the response shape</h4>\n<pre><code class="language-reason">type user = {name: string};\ntype data = {user: user};\n</code></pre>\n<h4>Define Decoder for your response</h4>\n<pre><code class="language-reason">let user = (json) =>\n  Json.Decode.{\n    name: json |> field("name", string),\n  };\n\nlet data = (json) =>\n  Json.Decode.{\n    user: json |> field("user", user)\n  };\n</code></pre>\n<h4>Define Container configuration</h4>\n<pre><code class="language-reason">module Container = {\n  type shape = data;\n  type variables; /* or some type `type variables = {"one": 1};` if used */\n  let decoder = data;\n};\n</code></pre>\n<h3>Pass Container configuration to Gql.Client</h3>\n<pre><code class="language-reason">module FetchUserName = Gql.Client(Container);\n</code></pre>\n<h3>Use the FetchUserName Component</h3>\n<pre><code class="language-reason">render: (_) =>\n&#x3C;FetchUserName query>\n  ((response) => {\n    switch response {\n       | Loading => &#x3C;div> (ReasonReact.stringToElement("Loading")) &#x3C;/div>\n       | Failed(error) => &#x3C;div> (ReasonReact.stringToElement(error)) &#x3C;/div>\n       | Loaded(result) =>&#x3C;div> (ReasonReact.stringToElement(result.user.name)) &#x3C;/div>\n  })\n&#x3C;/FetchUserName>\n</code></pre>\n',homepageUrl:"https://github.com/kennetpostigo/regql#readme",repositoryUrl:"https://github.com/kennetpostigo/regql",npmUrl:"https://www.npmjs.com/package/regql",issuesUrl:"https://github.com/kennetpostigo/regql/issues",slug:"packages/regql"}},pathContext:{id:"regql"}}}});
//# sourceMappingURL=path---packages-regql-0444eebb28dd0f2e867c.js.map