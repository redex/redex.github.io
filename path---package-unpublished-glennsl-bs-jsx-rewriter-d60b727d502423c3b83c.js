webpackJsonp([0x601bb3627dfe],{1307:function(s,e){s.exports={data:{package:{type:"unpublished",id:"unpublished/glennsl/bs-jsx-rewriter",name:"glennsl/bs-jsx-rewriter",version:"0.1.0",category:"binding",flags:[],platforms:["browser","node"],description:"Bindings to Reason's React JSX PPX",keywords:["utilities"],license:"MIT",updated:"2019-01-08T23:46:37.083Z",stars:2,score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="bs-react-jsx"><a href="#bs-react-jsx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-react-jsx</h1>\n<p>BuckleScript bindings to Reason\'s JSX PPX rewriter.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>Run <code>npm install --save glennsl/bs-jsx-rewriter</code> and add <code>bs-jsx-rewriter</code> to the <code>bs-dependencies</code> in <code>bsconfig.json</code>. </p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> code = {|\n  <span class="hljs-keyword">let</span> <span class="hljs-number">_</span> =\n    ((div ~children:[\n      ((span ~children:[<span class="hljs-type">ReasonReact</span>.stringToElement <span class="hljs-string">"hello"</span>] ()) [@<span class="hljs-type">JSX</span>])\n    ] ()) [@<span class="hljs-type">JSX</span>])\n|};\n\n<span class="hljs-keyword">let</span> () =\n  code |&gt; <span class="hljs-type">Jsx</span>.rewrite\n       |&gt; <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> |<span class="hljs-params"> Ok({<span class="hljs-params"> code<span class="hljs-params"> })<span class="hljs-params"> </span></span></span></span></span></span>=&gt; <span class="hljs-type">Js</span>.log(code)\n              | <span class="hljs-type">Error</span>(<span class="hljs-number">_</span>) =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"error"</span>);\n\n<span class="hljs-comment">/* Output:\n\nlet _ =\n  ReactDOMRe.createElement "div"\n    [|(ReactDOMRe.createElement "span"\n         [|(ReasonReact.stringToElement "hello")|])|]\n*/</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> code =\n  {|\n  <span class="hljs-keyword">let</span> _ =\n    ((div ~children:[\n      ((span ~children:[<span class="hljs-type">ReasonReact</span>.stringToElement <span class="hljs-string">"hello"</span>] <span class="hljs-literal">()</span>) [@<span class="hljs-type">JSX</span>])\n    ] <span class="hljs-literal">()</span>) [@<span class="hljs-type">JSX</span>])\n|}\n<span class="hljs-keyword">let</span> <span class="hljs-literal">()</span> =\n  (code |&gt; <span class="hljs-type">Jsx</span>.rewrite) |&gt;\n    (<span class="hljs-keyword">function</span>\n     | ((<span class="hljs-type">Ok</span> ({ code }))[@explicit_arity ]) -&gt; <span class="hljs-type">Js</span>.log code\n     | <span class="hljs-type">Error</span> _ -&gt; <span class="hljs-type">Js</span>.log <span class="hljs-string">"error"</span>)</code></pre>\n      </div>\n    </div>\n  \n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="bundling"><a href="#bundling" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bundling</h3>\n<p>The package has been tested to work with <code>webpack</code>, but requires a tiny bit of configuration because it depends on a few\nndoe modules in code paths that aren\'t actually used in practice. To stub these out, just put the following in your\n<code>webpack.config.js</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-javascript"><code>  node: {\n    fs: <span class="hljs-string">\'empty\'</span>,\n    child_process: <span class="hljs-string">\'empty\'</span>\n  }</code></pre></div>\n<p>##Licensing</p>\n<p>The vendor directory contains files built from code in the BuckleScript repository, but which originates from the Reason repository, which is licensed under the MIT license. The rest of this repostiory is also licensed under the MIT license.</p>\n<h2 id="acknowledgement"><a href="#acknowledgement" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Acknowledgement</h2>\n<p><a href="https://github.com/facebook/reason/graphs/contributors">The Reason team</a> for creating the PPX (and, you know, Reason and all that), and <a href="https://github.com/astrada">Alessandro Strada</a> for adding the JS API and build process.</p>\n',homepageUrl:"https://github.com/glennsl/bs-jsx-rewriter#readme",repositoryUrl:"https://github.com/glennsl/bs-jsx-rewriter",npmUrl:null,issuesUrl:"https://github.com/glennsl/bs-jsx-rewriter/issues",slug:"/package/unpublished/glennsl/bs-jsx-rewriter"}},pathContext:{id:"unpublished/glennsl/bs-jsx-rewriter"}}}});
//# sourceMappingURL=path---package-unpublished-glennsl-bs-jsx-rewriter-d60b727d502423c3b83c.js.map