webpackJsonp([0xaced52275012],{1125:function(s,a){s.exports={data:{package:{id:"bs-graphql-tools",stars:null,name:"bs-graphql-tools",version:"0.3.1",category:"binding",flags:["neglected"],platforms:["node"],description:"BuckleScript binding for graphql-tools",keywords:["graphql"],license:"MIT",updated:"2018-09-04T19:16:34.719Z",type:"published",score:.2107352498132441,quality:.6961943985604653,popularity:.005362657843155791,maintenance:0,readme:'<h1 id="bs-graphql-tools"><a href="#bs-graphql-tools" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-graphql-tools</h1>\n<p><a href="https://badge.fury.io/js/bs-graphql-tools"><img src="https://badge.fury.io/js/bs-graphql-tools.svg" alt="npm version"></a></p>\n<p><a href="https://bucklescript.github.io/">BuckleScript</a> binding for <a href="https://github.com/apollographql/graphql-tools/">graphql-tools</a>.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install --save graphql bs-graphql bs-graphql-tools\n<span class="hljs-comment"># or</span>\nyarn add graphql bs-graphql bs-graphql-tools</code></pre></div>\n<p>As always, you will need to indicate to BuckleScript that the binding is available.</p>\n<p><code>bsconfig.json</code></p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  ...\n  <span class="hljs-string">"bs-dependencies"</span>: [\n    <span class="hljs-string">"bs-graphql"</span>,\n    <span class="hljs-string">"bs-graphql-tools"</span>\n  ]\n}</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<blockquote>\n<p><strong>WARNING</strong>: Only <code>makeExecutableSchema</code> is implemented for now. More is coming soon but you can always contribute!</p>\n</blockquote>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> typeDefs = <span class="hljs-string">"type Query { me: User } type User { name: String }"</span>;\n<span class="hljs-keyword">let</span> queryResolvers = {<span class="hljs-string">"me"</span>: <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> ()<span class="hljs-params"> </span></span></span>=&gt; {<span class="hljs-string">"name"</span>: <span class="hljs-string">"reason"</span>}};\n<span class="hljs-keyword">let</span> userResolvers = {<span class="hljs-string">"name"</span>: <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> user<span class="hljs-params"> </span></span></span>=&gt; user##name};\n<span class="hljs-keyword">let</span> resolvers = {<span class="hljs-string">"Query"</span>: queryResolvers, <span class="hljs-string">"User"</span>: userResolvers};\n<span class="hljs-keyword">let</span> schema = <span class="hljs-type">GraphQLTools</span>.makeExecutableSchema {<span class="hljs-string">"typeDefs"</span>: typeDefs, <span class="hljs-string">"resolvers"</span>: resolvers};\n<span class="hljs-type">Js</span>.log (<span class="hljs-type">GraphQL</span>.run schema ::rootValue <span class="hljs-string">"{ me { name } }"</span>);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">583</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:null,repositoryUrl:null,npmUrl:"https://www.npmjs.com/package/bs-graphql-tools",issuesUrl:null,slug:"/package/bs-graphql-tools"}},pathContext:{id:"bs-graphql-tools"}}}});
//# sourceMappingURL=path---package-bs-graphql-tools-6309b9317d23feafa41e.js.map