webpackJsonp([0xa4d2737910fc],{1006:function(s,a){s.exports={data:{package:{id:"bs-apollo-server-express",stars:null,name:"bs-apollo-server-express",version:"0.3.1",category:"binding",flags:["neglected"],platforms:["node"],description:"BuckleScript binding for apollo-server-express",keywords:["graphql"],license:"MIT",updated:"2018-01-21T17:16:26.352Z",type:"published",score:.3297322657843925,quality:.6945171308098057,popularity:.013657518543859219,maintenance:.3331342715745716,readme:'<h1 id="bs-apollo-server-express"><a href="#bs-apollo-server-express" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-apollo-server-express</h1>\n<p><a href="https://bucklescript.github.io/">BuckleScript</a> binding for <a href="https://github.com/apollographql/apollo-server">apollo-server-express</a>.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install --save graphql express body-<span class="hljs-keyword">parser</span> bs-express bs-graphql bs-apollo-server-express\n# <span class="hljs-keyword">or</span>\nyarn add graphql express body-<span class="hljs-keyword">parser</span> bs-express bs-graphql bs-apollo-server-express</code></pre></div>\n<p>As always, you will need to indicate to BuckleScript that the binding is available.</p>\n<p><code>bsconfig.json</code></p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  ...\n  <span class="hljs-string">"bs-dependencies"</span>: [\n    <span class="hljs-string">"bs-express"</span>,\n    <span class="hljs-string">"bs-graphql"</span>,\n    <span class="hljs-string">"bs-apollo-server-express"</span>\n  ]\n}</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>You can start a GraphQL server using bs-graphql, bs-express and this binding:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> app = <span class="hljs-type">Express</span>.<span class="hljs-type">App</span>.make ();\n<span class="hljs-keyword">let</span> schema = <span class="hljs-type">GraphQL</span>.<span class="hljs-type">Utilities</span>.buildSchema <span class="hljs-string">"type Query { hello: String }"</span>;\n<span class="hljs-keyword">let</span> rootValue = {<span class="hljs-string">"hello"</span>: <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> ()<span class="hljs-params"> </span></span></span>=&gt; <span class="hljs-string">"world"</span>};\nexternal bodyParserJson : unit =&gt; <span class="hljs-type">Express</span>.<span class="hljs-type">Middleware</span>.t = <span class="hljs-string">"json"</span> [@@bs.<span class="hljs-keyword">module</span> <span class="hljs-string">"body-parser"</span>];\n<span class="hljs-type">Express</span>.<span class="hljs-type">App</span>.use app (bodyParserJson ());\n<span class="hljs-keyword">let</span> graphqlMiddleware = <span class="hljs-type">ApolloServerExpress</span>.createGraphQLExpressMiddleware schema ::rootValue;\n<span class="hljs-keyword">let</span> graphiqlMiddleware = <span class="hljs-type">ApolloServerExpress</span>.createGraphiQLExpressMiddleware <span class="hljs-string">"/graphql"</span>;\n<span class="hljs-type">Express</span>.<span class="hljs-type">App</span>.useOnPath app graphqlMiddleware path::<span class="hljs-string">"/graphql"</span>;\n<span class="hljs-type">Express</span>.<span class="hljs-type">App</span>.useOnPath app graphiqlMiddleware path::<span class="hljs-string">"/graphiql"</span>;\n<span class="hljs-type">Express</span>.<span class="hljs-type">App</span>.listen app port::<span class="hljs-number">8080</span>;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">883</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p>Now you can make GraphQL queries to <code>http://localhost:8080</code>.</p>\n',homepageUrl:null,repositoryUrl:null,npmUrl:"https://www.npmjs.com/package/bs-apollo-server-express",issuesUrl:null,slug:"/package/bs-apollo-server-express"}},pathContext:{id:"bs-apollo-server-express"}}}});
//# sourceMappingURL=path---package-bs-apollo-server-express-b9ec1041beac7ced5c6a.js.map