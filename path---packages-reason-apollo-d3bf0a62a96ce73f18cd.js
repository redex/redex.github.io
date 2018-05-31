webpackJsonp([0xc569381f0db1],{984:function(e,n){e.exports={data:{package:{id:"reason-apollo",updated:"2017-12-05T20:37:58.494Z",name:"reason-apollo",version:"0.5.6",description:"Using Apollo client 2 with Reason",keywords:["reason","apollo","react","graphql"],license:"MIT",type:"published",stars:27,readme:'<h2>Reason-apollo</h2>\n<p>Easily use the Apollo Client 2 with ReasonML</p>\n<h4>Install</h4>\n<h5>npm || yarn</h5>\n<pre><code>yarn add reason-apollo\nor\nnpm install reason-apollo\n</code></pre>\n<h5>bsconfig</h5>\n<p>In bsconfig.json, add <code>reason-apollo</code> to your <code>bs-dependencies</code>:</p>\n<pre><code>"bs-dependencies": [\n  "reason-react",\n  "reason-apollo"\n]\n</code></pre>\n<h4>Usage</h4>\n<p> <a href="https://github.com/Gregoirevda/reason-apollo-test-usage">here</a> is a repository showing the usage of the package.</p>\n<h5>Create your Client</h5>\n<p> Apollo.re</p>\n<pre><code class="language-reason">module Client = ReasonApollo.Create({ let uri = "http://localhost:3010/graphql" });\n</code></pre>\n<h5>Fetching data</h5>\n<h6>Query</h6>\n<p>  Create a query with the <code>graphql-tag</code></p>\n<pre><code class="language-reason">let query =\n  gql {|\n    query getUser {\n      name\n    }\n  |} [@bs];\n</code></pre>\n<h5>Defining the data structure of the result</h5>\n<pre><code class="language-reason">type user = {. "name": string};\ntype data = {. "user": user};\n</code></pre>\n<h5>Optional variables passed to the query</h5>\n<pre><code class="language-reason">let variables = {\n  "limit": 2\n};\n</code></pre>\n<h5>All in a module</h5>\n<p>  data structure of the response and optional variables should be represented in a module </p>\n<pre><code class="language-reason">module Config = {\n  type responseType = data;\n  type variables = {. limit: int}; /* or `type variables;` if none are used */\n};\n</code></pre>\n<h5>Passing the configuration to the Apollo Client</h5>\n<pre><code class="language-reason">module FetchUserName = Apollo.Client.Query(Config);\n</code></pre>\n<h5>Executing the query</h5>\n<p>  someFile.re</p>\n<pre><code class="language-reason">render: (_) =>\n&#x3C;FetchUserName query variables>\n  ((response) => {\n    switch response {\n       | Loading => &#x3C;div> (Utils.ste("Loading")) &#x3C;/div>\n       | Failed(error) => &#x3C;div> (Utils.ste(error)) &#x3C;/div>\n       | Loaded(result) =>&#x3C;div> (Utils.ste(result##user##name)) &#x3C;/div>\n  })\n&#x3C;/FetchUserName>\n</code></pre>\n',homepageUrl:"https://github.com/Gregoirevda/reason-apollo#readme",repositoryUrl:"https://github.com/Gregoirevda/reason-apollo",npmUrl:"https://www.npmjs.com/package/reason-apollo",issuesUrl:"https://github.com/Gregoirevda/reason-apollo/issues",slug:"packages/reason-apollo"}},pathContext:{id:"reason-apollo"}}}});
//# sourceMappingURL=path---packages-reason-apollo-d3bf0a62a96ce73f18cd.js.map