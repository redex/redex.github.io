webpackJsonp([0xca3b3be30f1f],{1324:function(s,a){s.exports={data:{package:{type:"published",id:"graphql-to-reason",name:"graphql-to-reason",version:"1.0.0-alpha.0",category:"tool",flags:[],platforms:["node"],description:"Converts Graphql schema to ReasonML types",keywords:["code generation","development tools","graphql"],license:"MIT",updated:"2020-02-07T04:30:48.851Z",stars:50,score:.5175319949563928,quality:.8272317296042075,popularity:.05553674652659607,maintenance:.7140703279737768,readme:'<h1 id="graphql-to-reason"><a href="#graphql-to-reason" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>graphql-to-reason</h1>\n<p>This tool will transform existing GraphQL schema to ReasonML types to be used on server side.</p>\n<p><a href="https://travis-ci.org/Coobaha/graphql-to-reason"><img src="https://travis-ci.org/Coobaha/graphql-to-reason.svg?branch=master" alt="Build Status"></a>\n<a href="https://www.npmjs.com/package/graphql-to-reason"><img src="https://img.shields.io/npm/v/graphql-to-reason.svg" alt="npm"></a></p>\n<details>\n  <summary>\n    <b>Examples</b>\n  </summary>\n  <ul>\n    <li><a href="/examples/basic">Basic example</a></li>\n  </ul>\n</details>\n<p></p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>First, add this package as a dependency to your package.json</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add --dev graphql-<span class="hljs-keyword">to</span>-reason\n# <span class="hljs-keyword">or</span>, <span class="hljs-keyword">if</span> you use npm:\nnpm install -<span class="hljs-type">D</span> graphql-<span class="hljs-keyword">to</span>-reason</code></pre></div>\n<p><code>graphql-to-reason</code> requires json variant (aka introspection query) of <code>schema.graphql</code>.</p>\n<p><code>schema.json</code> can be generated with <code>npx graphql-to-reason-schema schema.graphql schema.json</code>.</p>\n<p>Integration with Bucklescript can be done via <a href="https://bucklescript.github.io/docs/en/build-advanced#customize-rules-generators-support">generators</a></p>\n<p>a) With already introspected schema</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"generators"</span>: [\n    {\n      <span class="hljs-string">"name"</span>: <span class="hljs-string">"generate-schematypes"</span>,\n      <span class="hljs-string">"command"</span>: <span class="hljs-string">"npx graphql-to-reason <span class="hljs-variable">$in</span> <span class="hljs-variable">$out</span>"</span>\n    }\n  ],\n  <span class="hljs-string">"sources"</span>: [\n    {\n      <span class="hljs-string">"dir"</span>: <span class="hljs-string">"src"</span>,\n      <span class="hljs-string">"generators"</span>: [\n        {\n          <span class="hljs-string">"name"</span>: <span class="hljs-string">"generate-schematypes"</span>,\n          <span class="hljs-string">"edge"</span>: [ <span class="hljs-string">"SchemaTypes_builder.re"</span>, <span class="hljs-string">":"</span>, <span class="hljs-string">"schema.json"</span>]\n        }\n      ]\n    }\n  ]\n}</code></pre></div>\n<p>b) From <code>.graphql</code></p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"generators"</span>: [\n    {\n      <span class="hljs-string">"name"</span>: <span class="hljs-string">"generate-schematypes"</span>,\n      <span class="hljs-string">"command"</span>: <span class="hljs-string">"npx graphql-to-reason-schema <span class="hljs-variable">$in</span> <span class="hljs-variable">$in</span>.json  &amp;&amp; npx graphql-to-reason <span class="hljs-variable">$in</span>.json <span class="hljs-variable">$out</span>"</span>\n    }\n  ],\n  <span class="hljs-string">"sources"</span>: [\n    {\n      <span class="hljs-string">"dir"</span>: <span class="hljs-string">"src"</span>,\n      <span class="hljs-string">"generators"</span>: [\n        {\n          <span class="hljs-string">"name"</span>: <span class="hljs-string">"generate-schematypes"</span>,\n          <span class="hljs-string">"edge"</span>: [<span class="hljs-string">"SchemaTypes_builder.re"</span>, <span class="hljs-string">"schema.graphql.json"</span>, <span class="hljs-string">":"</span>, <span class="hljs-string">"schema.graphql"</span>]\n        }\n      ]\n    }\n  ]\n}</code></pre></div>\n<h3 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h3>\n<p>Simple <code>schema.graphql</code></p>\n<div class="redex-codeblock"><pre class="hljs lang-graphql"><code>scalar Click\n\n<span class="hljs-built_in">type</span> Query {\n    clicks: Click!\n}\n\n<span class="hljs-built_in">type</span> Mutation {\n    click(payload: String!): Click!\n}</code></pre></div>\n<p>Next we generate ReasonML code from it:\n<code>npx graphql-to-reason schema.json SchemaTypes_builder.re</code></p>\n<p>It will output <code>SchemaTypes_builder.re</code> to use it in other modules:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">include</span> <span class="hljs-type">SchemaTypes_builder</span>.<span class="hljs-type">MakeSchema</span>({\n  <span class="hljs-comment">/* we need to configure our server types:\n      - all scalar types\n      - resolver type\n      - custom directive resolver type  */</span>\n  <span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Scalars</span> = </span>{\n    <span class="hljs-keyword">type</span> click = int;\n  };\n\n  <span class="hljs-comment">/* args - our arguments Array\n     fieldType - original field type\n     result - resoved value (for example Js.Nullable.t(fieldType)) */</span>\n  <span class="hljs-keyword">type</span> resolver(\'args, \'fieldType, \'result) =\n    (\n      unit,\n      \'args,\n      <span class="hljs-comment">/*context args depend on your graphql setup*/</span>\n      <span class="hljs-type">ServerContext</span>.t,\n      <span class="hljs-type">ServerContext</span>.<span class="hljs-type">ResolveInfo</span>.t,\n      <span class="hljs-type">ServerContext</span>.<span class="hljs-type">FieldInfo</span>.t(\'fieldType)\n    ) =&gt;\n    <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.t(\'result);\n  <span class="hljs-keyword">type</span> directiveResolver(\'payload);\n});\n\n\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Clicks</span> = </span>{\n  <span class="hljs-keyword">let</span> <span class="hljs-built_in">count</span> = <span class="hljs-keyword">ref</span>(<span class="hljs-number">0</span>);\n  <span class="hljs-comment">/* No need to explicitly type resolver, it will infer correct type later */</span>\n  <span class="hljs-keyword">let</span> resolver = (_node, _args, _context, _resolveInfo, _fieldInfo) =&gt;\n    <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.make((~resolve, ~reject) =&gt; {\n      <span class="hljs-built_in">count</span> := <span class="hljs-built_in">count</span>^ + <span class="hljs-number">1</span>;\n      resolve(<span class="hljs-built_in">count</span>^);\n    });\n};\n\n\n<span class="hljs-comment">/* Clicks.resolver now infers SchemaTypes.Mutation.clicksCount type */</span>\n<span class="hljs-keyword">let</span> mutationResolvers =\n  <span class="hljs-type">SchemaTypes</span>.<span class="hljs-type">Mutation</span>.t(~clicksCount=<span class="hljs-type">Clicks</span>.resolver, ());\n\n<span class="hljs-keyword">let</span> resolvers = <span class="hljs-type">SchemaTypes</span>.t(~mutation, ());\n\ncreateMyGraphqlServer(resolvers);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">include</span>\n  <span class="hljs-type">SchemaTypes_builder</span>.<span class="hljs-type">MakeSchema</span>(<span class="hljs-keyword">struct</span>\n                                   <span class="hljs-keyword">module</span> <span class="hljs-type">Scalars</span> =\n                                     <span class="hljs-keyword">struct</span> <span class="hljs-keyword">type</span> click = <span class="hljs-built_in">int</span> <span class="hljs-keyword">end</span>\n                                   <span class="hljs-keyword">type</span> (<span class="hljs-symbol">\'args</span>,<span class="hljs-symbol">\'fieldType</span>,<span class="hljs-symbol">\'result</span>) resolver =\n                                     <span class="hljs-built_in">unit</span> -&gt;\n                                       <span class="hljs-symbol">\'args</span> -&gt;\n                                         <span class="hljs-type">ServerContext</span>.t -&gt;\n                                           <span class="hljs-type">ServerContext</span>.<span class="hljs-type">ResolveInfo</span>.t -&gt;\n                                             <span class="hljs-symbol">\'fieldType</span>\n                                               <span class="hljs-type">ServerContext</span>.<span class="hljs-type">FieldInfo</span>.t -&gt;\n                                               <span class="hljs-symbol">\'result</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.t\n                                   <span class="hljs-keyword">type</span> <span class="hljs-symbol">\'payload</span> directiveResolver\n                                 <span class="hljs-keyword">end</span>)\n<span class="hljs-keyword">module</span> <span class="hljs-type">Clicks</span> =\n  <span class="hljs-keyword">struct</span>\n    <span class="hljs-keyword">let</span> count = <span class="hljs-built_in">ref</span> <span class="hljs-number">0</span>\n    <span class="hljs-keyword">let</span> resolver _node _args _context _resolveInfo _fieldInfo =\n      <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.make\n        (<span class="hljs-keyword">fun</span> ~resolve  -&gt;\n           <span class="hljs-keyword">fun</span> ~reject  -&gt; count := ((!count) + <span class="hljs-number">1</span>); resolve (!count))\n  <span class="hljs-keyword">end</span>\n<span class="hljs-keyword">let</span> mutationResolvers =\n  <span class="hljs-type">SchemaTypes</span>.<span class="hljs-type">Mutation</span>.t ~clicksCount:<span class="hljs-type">Clicks</span>.resolver <span class="hljs-literal">()</span>\n<span class="hljs-keyword">let</span> resolvers = <span class="hljs-type">SchemaTypes</span>.t ~mutation <span class="hljs-literal">()</span>\n<span class="hljs-keyword">let</span> _ = createMyGraphqlServer resolvers</code></pre>\n      </div>\n    </div>\n  \n<h3 id="developing"><a href="#developing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Developing</h3>\n<p>Install <a href="https://github.com/esy/esy">esy</a>:</p>\n<p><code>npm install -g esy@latest</code></p>\n<p>Install dependencies:</p>\n<p><code>make install</code></p>\n<p>To build executables:</p>\n<p><code>make build</code></p>\n<p>To run tests:</p>\n<p><code>make test</code></p>\n',homepageUrl:"https://github.com/Coobaha/graphql-to-reason#readme",repositoryUrl:"https://github.com/Coobaha/graphql-to-reason",npmUrl:"https://www.npmjs.com/package/graphql-to-reason",issuesUrl:"https://github.com/Coobaha/graphql-to-reason/issues",slug:"/package/graphql-to-reason"}},pathContext:{id:"graphql-to-reason"}}}});
//# sourceMappingURL=path---package-graphql-to-reason-467f249429ba9c2e459c.js.map