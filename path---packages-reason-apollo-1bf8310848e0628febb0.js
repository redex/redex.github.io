webpackJsonp([0xc569381f0db1],{1094:function(e,n){e.exports={data:{package:{id:"reason-apollo",score:.5680557167293154,name:"reason-apollo",version:"0.5.7",description:"Using Apollo client 2 with Reason",keywords:["react","graphql","apollo"],license:"MIT",updated:"2018-01-03T23:06:01.102Z",stars:57,type:"published",quality:.6072166116659661,popularity:.1025449520843589,maintenance:1,readme:'<h1>Reason-apollo</h1>\n<p><a href="https://badge.fury.io/js/reason-apollo"><img src="https://badge.fury.io/js/reason-apollo.svg" alt="npm version"></a>\n<a href="http://www.apollostack.com/#slack"><img src="https://img.shields.io/badge/slack-join-orange.svg" alt="Get on Slack"></a></p>\n<p>Easily use the Apollo Client 2 with Reason</p>\n<h2>Install and setup</h2>\n<h4>yarn</h4>\n<pre><code>yarn add reason-apollo\n</code></pre>\n<h4>bsconfig</h4>\n<p>Add <code>reason-apollo</code> to your <code>bs-dependencies</code>:\n<strong>bsconfig.json</strong></p>\n<pre><code>"bs-dependencies": [\n  "reason-react",\n  "reason-apollo"\n]\n</code></pre>\n<h2>Usage</h2>\n<p> <a href="https://github.com/Gregoirevda/reason-apollo-test-usage">here</a> is a repository showing the usage of the package.</p>\n<h3>Create the Apollo Client</h3>\n<p> <strong>Apollo.re</strong></p>\n<pre><code class="language-reason">module Client = ReasonApollo.Create({ let uri = "http://localhost:3010/graphql" });\n</code></pre>\n<h2>Query</h2>\n<h3>Query Configuration</h3>\n<p>  <strong>QueryConfig.re</strong></p>\n<pre><code class="language-reason">/* Create a query with the `graphql-tag` */\n\nlet query = [@bs] gql({|\n  query getUser {\n    name\n  }\n|});  \n\n/* Describe the result type */\n  type user = {. "name": string};\n  type data = {. "user": user};\n  type response = data;\n  \n/* Optional variables passed to the query */\n  type variables = {. "limit": int}; /* or `type variables;` if none */\n</code></pre>\n<h4>Executing the Query</h4>\n<p>  <strong>YourQuery.re</strong></p>\n<pre><code class="language-reason">module FetchUserName = Apollo.Client.Query(QueryConfig);\n\nlet variables = {\n  "limit": 2\n};\n\nlet make = (_children) => {\n/* ... */\nrender: (_) =>\n  &#x3C;FetchUserName variables>\n    (response => {\n      switch response {\n         | Loading => &#x3C;div> (Utils.ste("Loading")) &#x3C;/div>\n         | Failed(error) => &#x3C;div> (Utils.ste(error)) &#x3C;/div>\n         | Loaded(result) => &#x3C;div> (Utils.ste(result##user##name)) &#x3C;/div>\n    })\n  &#x3C;/FetchUserName>\n}\n</code></pre>\n<h2>Mutation</h2>\n<h3>Mutation Configuration</h3>\n<p>  <strong>MutationConfig.re</strong></p>\n<pre><code class="language-reason">/* Create a mutation with the `graphql-tag` */\n\nlet mutation = [@bs] gql({|\n  mutation deleteTodo($id: ID!) {\n      deleteTodo(id: $id) {\n        id\n        name\n      }\n    }\n|});  \n\n/* Describe the result type */\ntype todo = {. "name": string, "id": string};\ntype data = {. "deleteTodo": todo};\ntype response = data;\n  \n/* Optional variables passed to the mutation */\n  type variables = {. "id": string}; /* or `type variables;` if none */\n</code></pre>\n<h3>Executing the Mutation</h3>\n<p>  <strong>YourMutation.re</strong></p>\n<pre><code class="language-reason">module DeleteTodo = Apollo.Client.Mutation(MutationConfig);\n\nlet variables = {\n  "id": "uuid-1"\n};\n\nlet make = (_children) => {\n/* ... */\nrender: (_) =>\n  &#x3C;DeleteTodo>\n    ((\n      deleteTodo /* Mutation to call */, \n      result /* Result of your mutation */\n    ) => {\n        let mutationResponse = switch result {\n          | NotCalled => &#x3C;div>  (Utils.ste("Not Called")) &#x3C;/div>\n          | Loading => &#x3C;div> (Utils.ste("Loading")) &#x3C;/div>\n          | Loaded(response) => &#x3C;div> (Utils.ste(response##deleteTodo##name ++ " deleted")) &#x3C;/div>\n          | Failed(error) => &#x3C;div> (Utils.ste(error)) &#x3C;/div>\n        };\n      &#x3C;div>\n        &#x3C;button onClick=((_mouseEvent) => deleteTodo(~variables, ()))> \n          (Utils.ste("Delete Todo")) \n        &#x3C;/button>\n        &#x3C;div> (mutationResponse) &#x3C;/div>\n      &#x3C;/div>\n    })\n  &#x3C;/DeleteTodo>\n}\n</code></pre>\n',homepageUrl:"https://github.com/apollographql/reason-apollo#readme",repositoryUrl:"https://github.com/apollographql/reason-apollo",npmUrl:"https://www.npmjs.com/package/reason-apollo",issuesUrl:"https://github.com/apollographql/reason-apollo/issues",slug:"packages/reason-apollo"}},pathContext:{id:"reason-apollo"}}}});
//# sourceMappingURL=path---packages-reason-apollo-1bf8310848e0628febb0.js.map