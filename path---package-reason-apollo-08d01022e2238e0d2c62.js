webpackJsonp([3046832801524],{1111:function(s,a){s.exports={data:{package:{id:"reason-apollo",stars:151,name:"reason-apollo",version:"0.6.14",category:"binding",flags:[],platforms:["node"],description:"Using Apollo client 2 with Reason",keywords:["data fetching","react","graphql"],license:"MIT",updated:"2018-02-09T20:14:07.938Z",type:"published",score:.515833707747144,quality:.4119057981904978,popularity:.12074848082855606,maintenance:1,readme:'<h1 id="reason-apollo"><a href="#reason-apollo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reason-apollo</h1>\n<p><a href="https://badge.fury.io/js/reason-apollo"><img src="https://badge.fury.io/js/reason-apollo.svg" alt="npm version"></a>\n<a href="http://www.apollostack.com/#slack"><img src="https://img.shields.io/badge/slack-join-orange.svg" alt="Get on Slack"></a></p>\n<p>Easily use the Apollo Client 2 with Reason</p>\n<h2 id="install-and-setup"><a href="#install-and-setup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install and setup</h2>\n<h4 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h4>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add reason-apollo\n\n<span class="hljs-comment"># Add graphql_ppx</span>\nopam install graphql_ppx\nyarn add --dev graphql_ppx</code></pre></div>\n<h4 id="bsconfig"><a href="#bsconfig" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bsconfig</h4>\n<p>Add <code>reason-apollo</code> to your <code>bs-dependencies</code> and\n<code>graphql_ppx/ppx</code> to your <code>ppx_flags</code></p>\n<p><strong>bsconfig.json</strong></p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-string">"bs-dependencies"</span>: [\n  <span class="hljs-string">"reason-react"</span>,\n  <span class="hljs-string">"reason-apollo"</span>\n],\n<span class="hljs-string">"ppx-flags"</span>: [\n    <span class="hljs-string">"graphql_ppx/ppx"</span>\n]</code></pre></div>\n<h4 id="send-introspection-query"><a href="#send-introspection-query" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>send introspection query</h4>\n<p>This will generate a <code>graphql_schema.json</code> which will be used to safely type your GraphQL queries/mutations.</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn send-introspection-query http:<span class="hljs-comment">//my-api.example.com/api</span></code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="create-the-apollo-client"><a href="#create-the-apollo-client" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Create the Apollo Client</h3>\n<p> <strong>Apollo.re</strong></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">ApolloLinks</span>;\nopen <span class="hljs-type">ApolloInMemoryCache</span>;\n\n<span class="hljs-keyword">type</span> dataObject = {. <span class="hljs-string">"__typename"</span>: string, <span class="hljs-string">"id"</span>: string, <span class="hljs-string">"key"</span>: string};\n\n<span class="hljs-comment">/* Create an InMemoryCache */</span>\n<span class="hljs-keyword">let</span> inMemoryCache = createInMemoryCache(~dataIdFromObject=(obj: dataObject) =&gt; obj##id, ());\n\n<span class="hljs-comment">/* Create an HTTP Link */</span>\n<span class="hljs-keyword">let</span> httpLink =\n <span class="hljs-type">ApolloLinks</span>.createHttpLink(~uri=<span class="hljs-string">"http://localhost:3010/graphql"</span>, ());\n\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Client</span> =\n <span class="hljs-title">ReasonApollo</span>.<span class="hljs-title">CreateClient</span>(\n   </span>{\n     <span class="hljs-keyword">let</span> apolloClient =\n       <span class="hljs-type">ReasonApollo</span>.createApolloClient(\n         ~cache=inMemoryCache <span class="hljs-comment">/* restore method can be piped e.g. inMemoryCache |&gt; restore(window.__APOLLO__) */</span>,\n         ~link=httpLink,\n         ()\n       );\n   }\n );</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">ApolloLinks</span>\n<span class="hljs-keyword">open</span> <span class="hljs-type">ApolloInMemoryCache</span>\n<span class="hljs-keyword">type</span> dataObject = &lt; __typename :<span class="hljs-built_in">string</span> ;id :<span class="hljs-built_in">string</span> ;key :<span class="hljs-built_in">string</span>  &gt; <span class="hljs-type">Js</span>.t\n<span class="hljs-keyword">let</span> inMemoryCache =\n  createInMemoryCache\n    ~dataIdFromObject:(<span class="hljs-keyword">fun</span> (obj : dataObject)  -&gt; ## obj id) <span class="hljs-literal">()</span>\n<span class="hljs-keyword">let</span> httpLink =\n  <span class="hljs-type">ApolloLinks</span>.createHttpLink ~uri:<span class="hljs-string">"http://localhost:3010/graphql"</span> <span class="hljs-literal">()</span>\n<span class="hljs-keyword">module</span> <span class="hljs-type">Client</span> =\n  <span class="hljs-type">ReasonApollo</span>.<span class="hljs-type">CreateClient</span>(<span class="hljs-keyword">struct</span>\n                              <span class="hljs-keyword">let</span> apolloClient =\n                                <span class="hljs-type">ReasonApollo</span>.createApolloClient\n                                  ~cache:inMemoryCache ~link:httpLink <span class="hljs-literal">()</span>\n                            <span class="hljs-keyword">end</span>)</code></pre>\n      </div>\n    </div>\n  \n<h2 id="query"><a href="#query" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Query</h2>\n<p>  <strong>MyComponent.re</strong></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* Create a GraphQL Query by using the graphql_ppx */</span> \n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">PokemonQuery</span> = [%<span class="hljs-title">graphql</span> </span>{|\n  query getPokemon($name: <span class="hljs-type">String</span>!){\n      pokemon(name: $name) {\n          name\n      }\n  }\n|}]; \n\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Query</span> = <span class="hljs-title">Client</span>.<span class="hljs-title">Instance</span>.<span class="hljs-title">Query</span>;\n\n<span class="hljs-title">let</span> <span class="hljs-title">make</span> = (<span class="hljs-title">_children</span>) =&gt; </span>{\n<span class="hljs-comment">/* ... */</span>\nrender: (<span class="hljs-number">_</span>) =&gt; {\n  <span class="hljs-keyword">let</span> pokemonQuery = <span class="hljs-type">PokemonQuery</span>.make(~name=<span class="hljs-string">"Pikachu"</span>, ());\n  &lt;<span class="hljs-type">Query</span> query=pokemonQuery&gt;\n    ...(response, parse) =&gt; {\n      <span class="hljs-keyword">switch</span> response {\n         | <span class="hljs-type">Loading</span> =&gt; &lt;div&gt; (<span class="hljs-type">Utils</span>.ste(<span class="hljs-string">"Loading"</span>)) &lt;/div&gt;\n         | <span class="hljs-type">Failed</span>(error) =&gt; &lt;div&gt; (<span class="hljs-type">Utils</span>.ste(error)) &lt;/div&gt;\n         | <span class="hljs-type">Loaded</span>(result) =&gt; &lt;div&gt; (<span class="hljs-type">Utils</span>.ste(parse(result)##user##name)) &lt;/div&gt;\n    }})\n  &lt;/<span class="hljs-type">Query</span>&gt;\n}\n}</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">1205</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h2 id="mutation"><a href="#mutation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mutation</h2>\n<p>  <strong>MyMutation.re</strong></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">PokemonMutation</span> = [%<span class="hljs-title">graphql</span> </span>{|\n  mutation addPokemon($name: <span class="hljs-type">String</span>!) {\n      addPokemon(name: $name) {\n          name\n      }\n  }\n|}];\n\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Mutation</span> = <span class="hljs-title">Client</span>.<span class="hljs-title">Instance</span>.<span class="hljs-title">Mutation</span>;\n\n<span class="hljs-title">let</span> <span class="hljs-title">make</span> = (<span class="hljs-title">_children</span>) =&gt; </span>{\n<span class="hljs-comment">/* ... */</span>\ninitialState: {\n  parse\n},\nreducer: (action, state) =&gt;\n  <span class="hljs-keyword">switch</span> (action) {\n  | <span class="hljs-type">AddParser</span>(parse) =&gt; <span class="hljs-type">ReasonReact</span>.<span class="hljs-type">Update</span>({...state, parse})\n},\nrender: ({<span class="hljs-built_in">reduce</span>, state: {parse}}) =&gt; {  \n  &lt;<span class="hljs-type">Mutation</span>&gt;\n    ...((\n      mutate <span class="hljs-comment">/* Mutation to call */</span>, \n      result <span class="hljs-comment">/* Result of your mutation */</span>\n    ) =&gt; {\n        <span class="hljs-keyword">let</span> mutationResponse = <span class="hljs-keyword">switch</span> result {\n          | <span class="hljs-type">NotCalled</span> =&gt; &lt;div&gt;  (<span class="hljs-type">Utils</span>.ste(<span class="hljs-string">"Not Called"</span>)) &lt;/div&gt;\n          | <span class="hljs-type">Loading</span> =&gt; &lt;div&gt; (<span class="hljs-type">Utils</span>.ste(<span class="hljs-string">"Loading"</span>)) &lt;/div&gt;\n          | <span class="hljs-type">Loaded</span>(response) =&gt; &lt;div&gt; (<span class="hljs-type">Utils</span>.ste(parse(result)##addPokemon##name ++ <span class="hljs-string">" addded"</span>)) &lt;/div&gt;\n          | <span class="hljs-type">Failed</span>(error) =&gt; &lt;div&gt; (<span class="hljs-type">Utils</span>.ste(error)) &lt;/div&gt;\n        };\n      &lt;div&gt;\n        &lt;button onClick=((_mouseEvent) =&gt; {\n            <span class="hljs-keyword">let</span> pokemonMutation = <span class="hljs-type">PokemonMutation</span>.make(~name=<span class="hljs-string">"Reason"</span>, ());\n            mutate(pokemonMutation);\n            <span class="hljs-built_in">reduce</span>(() =&gt; <span class="hljs-type">AddParser</span>(pokemonMutation##parse), ());\n          })&gt; \n          (<span class="hljs-type">Utils</span>.ste(<span class="hljs-string">"Add Pokemon"</span>)) \n        &lt;/button&gt;\n        &lt;div&gt; (mutationResponse) &lt;/div&gt;\n      &lt;/div&gt;\n    })\n  &lt;/<span class="hljs-type">Mutation</span>&gt;\n}\n}</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">PokemonMutation</span> =\n  [%graphql\n    {|\n  mutation addPokemon($name: <span class="hljs-type">String</span>!) {\n      addPokemon(name: $name) {\n          name\n      }\n  }\n|}]\n<span class="hljs-keyword">module</span> <span class="hljs-type">Mutation</span> = <span class="hljs-type">Client</span>.<span class="hljs-type">Instance</span>.<span class="hljs-type">Mutation</span>\n<span class="hljs-keyword">let</span> make _children =\n  {\n    initialState = parse;\n    reducer =\n      (<span class="hljs-keyword">fun</span> action  -&gt;\n         <span class="hljs-keyword">fun</span> state  -&gt;\n           <span class="hljs-keyword">match</span> action <span class="hljs-keyword">with</span>\n           | ((<span class="hljs-type">AddParser</span> (parse))[@explicit_arity ]) -&gt;\n               ((<span class="hljs-type">ReasonReact</span>.<span class="hljs-type">Update</span> ({ state <span class="hljs-keyword">with</span> parse }))[@explicit_arity ]));\n    render =\n      (<span class="hljs-keyword">fun</span> { reduce; state = { parse } }  -&gt;\n         ((<span class="hljs-type">Mutation</span>.createElement\n             ~children:(<span class="hljs-keyword">fun</span> mutate  -&gt;\n                          <span class="hljs-keyword">fun</span> result  -&gt;\n                            <span class="hljs-keyword">let</span> mutationResponse =\n                              <span class="hljs-keyword">match</span> result <span class="hljs-keyword">with</span>\n                              | <span class="hljs-type">NotCalled</span>  -&gt;\n                                  ((div ~children:[<span class="hljs-type">Utils</span>.ste <span class="hljs-string">"Not Called"</span>] <span class="hljs-literal">()</span>)\n                                  [@<span class="hljs-type">JSX</span> ])\n                              | <span class="hljs-type">Loading</span>  -&gt;\n                                  ((div ~children:[<span class="hljs-type">Utils</span>.ste <span class="hljs-string">"Loading"</span>] <span class="hljs-literal">()</span>)\n                                  [@<span class="hljs-type">JSX</span> ])\n                              | ((<span class="hljs-type">Loaded</span> (response))[@explicit_arity ]) -&gt;\n                                  ((div\n                                      ~children:[<span class="hljs-type">Utils</span>.ste\n                                                   ((##\n                                                       (## (parse result)\n                                                          addPokemon) name)\n                                                      ^ <span class="hljs-string">" addded"</span>)] <span class="hljs-literal">()</span>)\n                                  [@<span class="hljs-type">JSX</span> ])\n                              | ((<span class="hljs-type">Failed</span> (error))[@explicit_arity ]) -&gt;\n                                  ((div ~children:[<span class="hljs-type">Utils</span>.ste error] <span class="hljs-literal">()</span>)\n                                  [@<span class="hljs-type">JSX</span> ]) <span class="hljs-keyword">in</span>\n                            ((div\n                                ~children:[((button\n                                               ~onClick:(<span class="hljs-keyword">fun</span> _mouseEvent  -&gt;\n                                                           <span class="hljs-keyword">let</span> pokemonMutation\n                                                             =\n                                                             <span class="hljs-type">PokemonMutation</span>.make\n                                                               ~name:<span class="hljs-string">"Reason"</span>\n                                                               <span class="hljs-literal">()</span> <span class="hljs-keyword">in</span>\n                                                           mutate\n                                                             pokemonMutation;\n                                                           reduce\n                                                             (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n                                                                ((<span class="hljs-type">AddParser</span>\n                                                                    ((##\n                                                                    pokemonMutation\n                                                                    parse)))\n                                                                [@explicit_arity\n                                                                  ])) <span class="hljs-literal">()</span>)\n                                               ~children:[<span class="hljs-type">Utils</span>.ste\n                                                            <span class="hljs-string">"Add Pokemon"</span>] <span class="hljs-literal">()</span>)\n                                          [@<span class="hljs-type">JSX</span> ]);\n                                          ((div ~children:[mutationResponse]\n                                              <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])) <span class="hljs-literal">()</span>)\n         [@<span class="hljs-type">JSX</span> ]))\n  }</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/apollographql/reason-apollo#readme",repositoryUrl:"https://github.com/apollographql/reason-apollo",npmUrl:"https://www.npmjs.com/package/reason-apollo",issuesUrl:"https://github.com/apollographql/reason-apollo/issues",slug:"/package/reason-apollo"}},pathContext:{id:"reason-apollo"}}}});
//# sourceMappingURL=path---package-reason-apollo-08d01022e2238e0d2c62.js.map