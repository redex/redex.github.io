webpackJsonp([0xeceff44eda0b],{1399:function(e,s){e.exports={data:{package:{type:"published",id:"@reasonql/core",name:"@reasonql/core",version:"0.3.1",category:"library",flags:[],platforms:["browser","node"],description:"Type-safe and simple GraphQL client for ReasonML",keywords:["data fetching","graphql"],license:"MIT",updated:"2020-06-13T20:37:49.726Z",stars:92,score:.4208223806665311,quality:.6780741522041465,popularity:.06326027094893656,maintenance:.5578829719233125,readme:'<h1 id="reasonql-graphql-in-reasonml-way"><a href="#reasonql-graphql-in-reasonml-way" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ReasonQL: GraphQL in ReasonML way.</h1>\n<p>ReasonQL is a type-safe and simple GraphQL library for ReasonML developers.</p>\n<p>ReasonQL does 2 things for you: </p>\n<ul>\n<li>fetch GraphQL data from server. </li>\n<li>and decode that data and error messages from JSON to ReasonML record. </li>\n</ul>\n<p>You might think it\'s too simple and you\'re now finding cool features like cache, "fetch more", reload, auth, etc.\n==> If so, please check <a href="../../WHY.md">"Why I started this project"</a>.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation.</h2>\n<p>You need 2 packages: <code>@reasonql/core</code> and <code>@reasonql/compiler</code>. Install it with npm like below: </p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm i @reasonql/core\nnpm i -D @reasonql/compiler</code></pre></div>\n<p>or with yarn</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add @reasonql/core\nyarn add @reasonql/compiler --dev</code></pre></div>\n<p>And add @reasonql/core in <code>bs-dependencies</code> under bsconfig.json.</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code><span class="hljs-string">"bs-dependencies"</span>: [\n  <span class="hljs-string">"@reasonql/core"</span>,\n  <span class="hljs-string">"reason-react"</span>,\n]</code></pre></div>\n<h2 id="how-to-use-reasonql"><a href="#how-to-use-reasonql" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to use ReasonQL.</h2>\n<p>This document assumes that you\'re familiar with ReasonML and GraphQL. If you\'re not sure what GraphQL is, <a href="https://graphql.org/learn/">check the offical documentation</a>. </p>\n<p>1. Write Query in a Reason file. </p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> query = <span class="hljs-type">ReasonQL</span>.gql({|\n  query <span class="hljs-type">AppQuery</span> {\n    hello {\n      message\n    }\n  }\n|})</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> query =\n  <span class="hljs-type">ReasonQL</span>.gql {|\n  query <span class="hljs-type">AppQuery</span> {\n    hello {\n      message\n    }\n  }\n|}</code></pre>\n      </div>\n    </div>\n  \n<p>Don\'t forget to use <code>ReasonQL.gql</code> function and <code>{||}</code> multiline string. ReasonQL compiler uses them to find if a file has graphql code or not. </p>\n<p><strong>WARNING:</strong> The query name (<code>AppQuery</code> above) is used for the name of the file generated by the compiler. So, do not use duplicate query names. Compiler doesn\'t warn this and multiple queries will try to overwrite a single type file. </p>\n<p>2. Set up compiler.</p>\n<p>To compile GraphQL queries, we need the path to the GraphQL schema file. Create <code>reasonql.config.js</code> at the project root and fill it like below: </p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code><span class="hljs-class"><span class="hljs-keyword">module</span>.<span class="hljs-title">exports</span> = </span>{\n  schema: <span class="hljs-string">"path/to/schema.js"</span>,\n}</code></pre></div>\n<p>3. Compile the query.</p>\n<p>Add the below command to <code>package.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code><span class="hljs-string">"scripts"</span>: {\n  <span class="hljs-string">"reasonql"</span>: <span class="hljs-string">"reasonql-compiler"</span>\n}</code></pre></div>\n<p>And run the command with <code>npm run reasonql</code>.</p>\n<p>You can find AppQuery.re under <code>src/.reasonql</code>. </p>\n<p><strong>Note:</strong> As the files under <code>src/.reasonql</code> are generated by the ReasonQL Compiler, it is recommended to ignore the folder in .gitignore. </p>\n<p><strong>Note2:</strong> It is a really tedious job to type in <code>npm run reasonql</code> each time when queries are changed. So, when in development, use the option, <code>-w</code>, like below:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code><span class="hljs-string">"scripts"</span>: {\n  <span class="hljs-string">"reasonql"</span>: <span class="hljs-string">"reasonql-compiler"</span>,\n  <span class="hljs-string">"reasonql:dev"</span>: <span class="hljs-string">"reasonql-compiler -w"</span>\n}</code></pre></div>\n<p>It watches reason files and regenerate files <strong>only when</strong> the GraphQL queries are changed. </p>\n<p>4. Create <code>Request</code> module. </p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Request</span> = <span class="hljs-title">ReasonQL</span>.<span class="hljs-title">MakeRequest</span>(<span class="hljs-title">AppQuery</span>, </span>{\n  <span class="hljs-keyword">let</span> url = <span class="hljs-string">"http://localhost:4000"</span>;\n});</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">Request</span> =\n  <span class="hljs-type">ReasonQL</span>.<span class="hljs-type">MakeRequest</span>(<span class="hljs-type">AppQuery</span>)(<span class="hljs-keyword">struct</span> <span class="hljs-keyword">let</span> url = <span class="hljs-string">"http://localhost:4000"</span> <span class="hljs-keyword">end</span>)</code></pre>\n      </div>\n    </div>\n  \n<p><code>MakeRequest</code> functor receives 2 arguments: a module generated by the ReasonQL compiler and a module that contains the link to the server. </p>\n<p>5. Send request and handle the response. </p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Request</span>.send(<span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.empty())\n-&gt;<span class="hljs-type">Request</span>.finished(data =&gt; {\n  <span class="hljs-type">Js</span>.log(<span class="hljs-string">"Data fetched."</span>);\n})\n<span class="hljs-type">Js</span>.log(<span class="hljs-string">"Loading data..."</span>);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2310</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p>All you need to remember are these 3 functions: </p>\n<ul>\n<li><code>send(argumentRecord)</code></li>\n<li><code>finished(promise, data => unit)</code></li>\n<li><code>finishedWithError(promise, (data, option(error)) => unit)</code></li>\n</ul>\n<p>As <code>send</code> returns a <code>Js.Promise</code> and <code>finished</code> and <code>finishedWithError</code> have promise as their first argument, we can use <a href="https://reasonml.github.io/docs/en/pipe-first">the pipe syntax</a> here. </p>\n<p>You learned the basics of ReasonQL. Unlike other libraries like Apollo or Relay, you don\'t need to create React components to use GraphQL. </p>\n<p>If you want to know how to make "hello world" with ReasonQL, <a href="../snippets/hello-world">check the example.</a> </p>\n<h2 id="other-features"><a href="#other-features" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Other Features</h2>\n<h3 id="type-conversions"><a href="#type-conversions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Type Conversions</h3>\n<p>5 scalar types (<code>ID</code>, <code>Int</code>, <code>Float</code>, <code>String</code>, <code>Boolean</code>) of GraphQL are converted into appropriate ReasonML types(<code>string</code>, <code>int</code>, <code>float</code>, <code>string</code>, <code>bool</code>). (<a href="https://graphql.org/learn/schema/#scalar-types">By definition</a>, <code>ID</code> type is serialized into <code>STRING</code>.)</p>\n<p>Object types are compiled into ReasonML types. </p>\n<div class="redex-codeblock"><pre class="hljs lang-graphql"><code><span class="hljs-comment"># Schema</span>\n<span class="hljs-built_in">type</span> Greeting {\n  hello: String!\n}\n\n<span class="hljs-built_in">type</span> Test1 {\n  a: Greeting!\n}\n\n<span class="hljs-comment"># Query</span>\nquery AppQuery {\n  a {\n    hello\n  }\n}</code></pre></div>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> a = {\n  hello: string,\n};\n\n<span class="hljs-keyword">type</span> queryResult = {\n  a: a,\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> a = {\n  hello: <span class="hljs-built_in">string</span>;}\n<span class="hljs-keyword">type</span> queryResult = {\n  a: a;}</code></pre>\n      </div>\n    </div>\n  \n<p><strong>Note:</strong> As you can see, object type name doesn\'t follow the actual name(<code>greeting</code>) in the type definition, but uses the variable name(<code>a</code>) to avoid type name conflict. More about name conflict below.</p>\n<h3 id="nullability"><a href="#nullability" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Nullability</h3>\n<p>In GraphQL, the field types without <code>!</code> are nullable. So, they\'re translated into <code>option</code>-ed types in ReasonML.</p>\n<p>Example:</p>\n<div class="redex-codeblock"><pre class="hljs lang-graphql"><code><span class="hljs-comment"># Schema</span>\n<span class="hljs-built_in">type</span> Query {\n  a: String\n  b: String!\n}\n\n<span class="hljs-comment"># Query</span>\nquery Test1 {\n  a\n  b\n}</code></pre></div>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> queryResult = {\n  a: option(string),\n  b: string,\n}</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> queryResult = {\n  a: <span class="hljs-built_in">string</span> option;\n  b: <span class="hljs-built_in">string</span>;}</code></pre>\n      </div>\n    </div>\n  \n<p><strong>Note:</strong> When a type is an <code>option</code>, we need to use pattern matching to cover all cases. In ReasonML, it\'s tedious and sometimes meaningless. So, when you define the schema for your app, always consider when <code>null</code> should be used. If you cannot find the meaningful case, add <code>!</code>. (Unlike many JavaScript examples, you\'ll find yourself adding many non-null types in ReasonML apps.)</p>\n<h3 id="enum-types"><a href="#enum-types" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Enum types</h3>\n<p>Conventionally, GraphQL enum values are written in all capital with underscores like <code>EXTRA_LARGE</code>. And they\'re strings internally. </p>\n<p>However, ReasonML uses camel case with the first letter capital-cased. And they\'re compiled into numbers. </p>\n<p>ReasonQL compiler translates that perfectly. </p>\n<div class="redex-codeblock"><pre class="hljs lang-graphql"><code><span class="hljs-class"><span class="hljs-keyword">enum</span> <span class="hljs-title">PatchSize</span> </span>{\n  <span class="hljs-type">SMALL</span>\n  <span class="hljs-type">MEDIUM</span>\n  <span class="hljs-type">LARGE</span>\n  <span class="hljs-type">EXTRA_LARGE</span>\n}</code></pre></div>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> patchSize = \n  | <span class="hljs-type">Small</span>\n  | <span class="hljs-type">Medium</span>\n  | <span class="hljs-type">Large</span>\n  | <span class="hljs-type">ExtraLarge</span>\n  ;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> patchSize =\n  | <span class="hljs-type">Small</span>\n  | <span class="hljs-type">Medium</span>\n  | <span class="hljs-type">Large</span>\n  | <span class="hljs-type">ExtraLarge</span></code></pre>\n      </div>\n    </div>\n  \n<p>Unlike other types, encoders and decoders of enum types are defined in <code>EnumTypes.re</code> file. And the functions are imported to each type file. </p>\n<h3 id="name-conflict-and-renaming-types"><a href="#name-conflict-and-renaming-types" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Name conflict and renaming types</h3>\n<p>Sometimes, field names of object types can conflict like below: </p>\n<div class="redex-codeblock"><pre class="hljs lang-graphql"><code><span class="hljs-comment"># Schema</span>\n<span class="hljs-built_in">type</span> Query {\n  hero: Person!\n  villain: Person!\n}\n\n<span class="hljs-built_in">type</span> Person {\n  name: Name!\n  ship: Ship\n}\n\n<span class="hljs-built_in">type</span> Name {\n  first: String!\n  last: String\n}\n\n<span class="hljs-built_in">type</span> Ship {\n  name: String!\n}\n\n<span class="hljs-comment"># Query</span>\nquery AppQuery {\n  hero {\n    name @reasontype(name:<span class="hljs-string">"heroName"</span>) {\n      first\n      last\n    }\n    ship {\n      name\n    }\n  }\n  villain {\n    name {\n      first\n    }\n    ship @reasontype(name:<span class="hljs-string">"villainShip"</span>) {\n      name\n    }\n  }\n}</code></pre></div>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> heroName = {\n  first: string,\n  last: option(string),\n};\n\n<span class="hljs-keyword">type</span> hero_ship_Ship = {\n  name: string,\n};\n\n<span class="hljs-keyword">type</span> hero = {\n  name: heroName,\n  ship: option(hero_ship_Ship),\n};\n\n<span class="hljs-keyword">type</span> villain_name_Name = {\n  first: string,\n};\n\n<span class="hljs-keyword">type</span> villainShip = {\n  name: string,\n};\n\n<span class="hljs-keyword">type</span> villain = {\n  name: villain_name_Name,\n  ship: option(villainShip),\n};\n\n<span class="hljs-keyword">type</span> queryResult = {\n  hero: hero,\n  villain: villain,\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> heroName = {\n  first: <span class="hljs-built_in">string</span>;\n  last: <span class="hljs-built_in">string</span> option;}\n<span class="hljs-keyword">type</span> hero_ship_Ship = {\n  name: <span class="hljs-built_in">string</span>;}\n<span class="hljs-keyword">type</span> hero = {\n  name: heroName;\n  ship: hero_ship_Ship option;}\n<span class="hljs-keyword">type</span> villain_name_Name = {\n  first: <span class="hljs-built_in">string</span>;}\n<span class="hljs-keyword">type</span> villainShip = {\n  name: <span class="hljs-built_in">string</span>;}\n<span class="hljs-keyword">type</span> villain = {\n  name: villain_name_Name;\n  ship: villainShip option;}\n<span class="hljs-keyword">type</span> queryResult = {\n  hero: hero;\n  villain: villain;}</code></pre>\n      </div>\n    </div>\n  \n<p>Both hero and villain have <code>name</code> and <code>ship</code>. In those cases, the type names are generated with the list of the names in the path and schema type name(i.e. <code>hero_ship_Ship</code>, <code>villain_name_Name</code>).</p>\n<p>To avoid this, you can use <code>@reasontype</code> directive like <code>@reasontype(name:"villainShip")</code>. </p>\n<h3 id="define-singular-name"><a href="#define-singular-name" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Define singular name.</h3>\n<p>Sometimes, it is logical to name a variable in plural and its type in singular like below: </p>\n<div class="redex-codeblock"><pre class="hljs lang-graphql"><code><span class="hljs-comment"># Schema</span>\n<span class="hljs-built_in">type</span> Query {\n  posts: [Post!]!\n}\n\n<span class="hljs-built_in">type</span> Post {\n  title: String!\n  slug: String!\n  content: String!\n  summary: String\n}\n\n<span class="hljs-comment"># Query</span>\nquery AppQuery {\n  posts @singular(name:<span class="hljs-string">"post"</span>) {\n    title\n    slug\n    content\n    summary\n  }\n}</code></pre></div>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> post = {\n  title: string,\n  slug: string,\n  content: string,\n  summary: option(string),\n};\n\n<span class="hljs-keyword">type</span> queryResult = {\n  posts: array(post),\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> post =\n  {\n  title: <span class="hljs-built_in">string</span>;\n  slug: <span class="hljs-built_in">string</span>;\n  content: <span class="hljs-built_in">string</span>;\n  summary: <span class="hljs-built_in">string</span> option;}\n<span class="hljs-keyword">type</span> queryResult = {\n  posts: post <span class="hljs-built_in">array</span>;}</code></pre>\n      </div>\n    </div>\n  \n<h3 id="automatically-merges-fragments-into-the-main-query"><a href="#automatically-merges-fragments-into-the-main-query" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Automatically merges fragments into the main query.</h3>\n<p>Borrowed the idea from Relay. When writing code, it is always a good idea to put related things together in one place. With <code>fragment</code>s, you can define the data a component needs in the same file like below: </p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> query = <span class="hljs-type">ReasonQL</span>.gql({|\n  fragment <span class="hljs-type">PostFragment_post</span> on <span class="hljs-type">Post</span> {\n    title\n    summary\n    slug\n    ...<span class="hljs-type">ButtonFragment_post</span>\n  }\n|})\n\n<span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent(<span class="hljs-string">"Post"</span>)\n\n<span class="hljs-keyword">let</span> make = (\n  ~post: <span class="hljs-type">PostFragment</span>.post,\n  _children\n) =&gt; {\n  ...component,\n  <span class="hljs-comment">/* Code here */</span>\n}</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">967</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p><a href="../snippets/fragments/client/src/Post.re">You can read the full code here.</a></p>\n<p>Then, ReasonQL compiler magically merges fragments into the main query. </p>\n<h3 id="mutation-and-arguments"><a href="#mutation-and-arguments" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mutation and Arguments</h3>\n<p>Mutations work in the same way like queries. Use <code>MakeRequest</code> functor and <code>send</code>, <code>finished</code> functions. But in mutations, you need to use arguments a lot. </p>\n<p>When there are arguments, the type of the argument of <code>send</code> function changes from <code>Js.Dict</code> to a specific variables. </p>\n<p>So, we need to write code like below: </p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> saveTweet = <span class="hljs-type">ReasonQL</span>.gql({|\n  mutation <span class="hljs-type">SaveTweetMutation</span>($tweet: <span class="hljs-type">TweetInput</span>!) {\n    saveTweet(tweet: $tweet) {\n      success\n      id\n      tempId\n      text\n    }\n  }\n|})\n\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">SaveTweet</span> = <span class="hljs-title">ReasonQL</span>.<span class="hljs-title">MakeRequest</span>(<span class="hljs-title">SaveTweetMutation</span>, <span class="hljs-title">Client</span>);\n\n<span class="hljs-title">SaveTweet</span>.<span class="hljs-title">send</span>(</span>{\n  tweet: {\n    text: tweet.text,\n    tempId: tweet.id,\n  }\n})\n-&gt;<span class="hljs-type">SaveTweet</span>.finished(data =&gt; {\n  <span class="hljs-type">Js</span>.log(<span class="hljs-string">"data recieved"</span>);\n})</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">967</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p><a href="../snippets/mutation/client/src/App.re">You can read the full code here.</a></p>\n<h3 id="errors"><a href="#errors" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Errors</h3>\n<p>Apollo Server provides a lot of <a href="https://blog.apollographql.com/full-stack-error-handling-with-graphql-apollo-5c12da407210">error types</a>. Among them, you need to provide your own type definition for <code>UserInputError</code>. So, we need decoders for those errors.</p>\n<p>To do so, create special GraphQL schema file: <code>errors.graphql</code>.</p>\n<p>And write down error types like below: </p>\n<div class="redex-codeblock"><pre class="hljs lang-graphql"><code><span class="hljs-built_in">type</span> LoginFormError {\n  code: String!\n  email: String\n  password: String\n}</code></pre></div>\n<p>And add the path to <code>errors.graphql</code> to <code>reasonql.config.js</code> like below: </p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code><span class="hljs-class"><span class="hljs-keyword">module</span>.<span class="hljs-title">exports</span> = </span>{\n  schema: <span class="hljs-string">"../server/src/schema.js"</span>,\n  errors: <span class="hljs-string">"../server/src/errors.graphql"</span>,\n}</code></pre></div>\n<p>Then, the decoder will be generated at <code>.reasonql/QueryErrors.re</code>. Now, you can decode error contents like below: </p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Login</span>.send({ email, password })\n-&gt;<span class="hljs-type">Login</span>.finishedWithError((result, errors) =&gt; {\n  <span class="hljs-keyword">switch</span>(errors) {\n  | <span class="hljs-type">None</span> =&gt; {\n    login(<span class="hljs-type">Belt</span>.<span class="hljs-type">Option</span>.getExn(result.login));\n    <span class="hljs-type">ReasonReact</span>.<span class="hljs-type">Router</span>.push(<span class="hljs-string">"/"</span>);\n  }\n  | <span class="hljs-type">Some</span>(errors) =&gt; {\n    <span class="hljs-keyword">let</span> {email, password}: <span class="hljs-type">QueryErrors</span>.loginFormError \n      = <span class="hljs-type">QueryErrors</span>.decodeLoginFormError(errors[<span class="hljs-number">0</span>].extensions);\n    <span class="hljs-keyword">self</span>.send(<span class="hljs-type">ShowError</span>(email, password));\n  }\n  }\n})</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2310</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h2 id="compiler-options"><a href="#compiler-options" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Compiler options</h2>\n<ul>\n<li>Commandline options</li>\n</ul>\n<ul>\n<li><code>-w</code>, <code>--watch</code>: watch reason files and generate reasonql type files only when query code changes. </li>\n</ul>\n<ul>\n<li>Config file options</li>\n</ul>\n<ul>\n<li><code>schema</code>: <strong>required</strong>. The path to the GraphQL schema file. </li>\n<li><code>errors</code>: The path to the error schema file. </li>\n<li><code>src</code>: The root path of the reasonml files. Default: <code>./src</code>.</li>\n<li><code>include</code>: The files should be included from compilation. Default: <code>**</code>.</li>\n<li><code>exclude</code>: The files should be excluded from compilation. Default: <code>[ \'**/node_modules/**\', \'**/__mocks__/**\', \'**/__tests__/**\', \'**/.*/**\', ]</code></li>\n<li><code>watch</code>: Watch files. Default: <code>false</code>.</li>\n</ul>\n<h2 id="contribution"><a href="#contribution" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contribution</h2>\n<p>Helps are always welcome. If you want to check how to contribute to the project, <a href="../../CONTRIBUTION.md">check this document</a>.</p>\n',
homepageUrl:"https://github.com/sainthkh/reasonql",repositoryUrl:"https://github.com/sainthkh/reasonql",npmUrl:"https://www.npmjs.com/package/%40reasonql%2Fcore",issuesUrl:"https://github.com/sainthkh/reasonql/issues",slug:"/package/@reasonql/core"}},pathContext:{id:"@reasonql/core"}}}});
//# sourceMappingURL=path---package-reasonql-core-69dcec261492f7fdb3ba.js.map