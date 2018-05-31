webpackJsonp([0xec0f310136cc],{1119:function(s,n){s.exports={data:{package:{id:"bs-next",stars:16,name:"bs-next",version:"2.0.0",category:"binding",flags:[],platforms:["node"],description:"Reason bindings for Next.js",keywords:["react","ssr"],license:"MIT",updated:"2018-03-16T10:28:13.990Z",type:"published",score:.5030754331042853,quality:.455516380076707,popularity:.04706769316487237,maintenance:.9998480756387655,readme:'<h1 id="bs-next"><a href="#bs-next" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-next</h1>\n<p><a href="https://reasonml.github.io">Reason</a> bindings for\n<a href="https://github.com/zeit/next.js">Next.js</a> 4.</p>\n<h2 id="api"><a href="#api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API</h2>\n<p>Bindings are provided for the only two components provided by Next.js:</p>\n<ul>\n<li><a href="https://github.com/zeit/next.js/tree/4.1.4#populating-head"><code>Next.Head</code></a></li>\n<li><a href="https://github.com/zeit/next.js/tree/4.1.4#with-link"><code>Next.Link</code></a></li>\n</ul>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent(<span class="hljs-string">"Index"</span>);\n\n<span class="hljs-keyword">let</span> make = (_children) =&gt; {\n  ...component,\n  render: (_self) =&gt;\n    &lt;div&gt;\n      &lt;<span class="hljs-type">Next</span>.<span class="hljs-type">Head</span>&gt;\n        &lt;title&gt; (<span class="hljs-type">ReasonReact</span>.stringToElement(<span class="hljs-string">"My Page Title"</span>)) &lt;/title&gt;\n      &lt;/<span class="hljs-type">Next</span>.<span class="hljs-type">Head</span>&gt;\n\n      &lt;<span class="hljs-type">Next</span>.<span class="hljs-type">Link</span> href=<span class="hljs-string">"/about"</span>&gt;\n        &lt;a&gt; (<span class="hljs-type">ReasonReact</span>.stringToElement(<span class="hljs-string">"About"</span>)) &lt;/a&gt;\n      &lt;/<span class="hljs-type">Next</span>.<span class="hljs-type">Link</span>&gt;\n    &lt;/div&gt;\n}</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent <span class="hljs-string">"Index"</span>\n<span class="hljs-keyword">let</span> make _children =\n  {\n    component <span class="hljs-keyword">with</span>\n    render =\n      (<span class="hljs-keyword">fun</span> _self  -&gt;\n         ((div\n             ~children:[((<span class="hljs-type">Next</span>.<span class="hljs-type">Head</span>.createElement\n                            ~children:[((title\n                                           ~children:[<span class="hljs-type">ReasonReact</span>.stringToElement\n                                                        <span class="hljs-string">"My Page Title"</span>] <span class="hljs-literal">()</span>)\n                                      [@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]);\n                       ((<span class="hljs-type">Next</span>.<span class="hljs-type">Link</span>.createElement ~href:<span class="hljs-string">"/about"</span>\n                           ~children:[((a\n                                          ~children:[<span class="hljs-type">ReasonReact</span>.stringToElement\n                                                       <span class="hljs-string">"About"</span>] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])]\n                           <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]))\n  }</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/ulrikstrid/bs-next#readme",repositoryUrl:"https://github.com/ulrikstrid/bs-next",npmUrl:"https://www.npmjs.com/package/bs-next",issuesUrl:"https://github.com/ulrikstrid/bs-next/issues",slug:"/package/bs-next"}},pathContext:{id:"bs-next"}}}});
//# sourceMappingURL=path---package-bs-next-952bae8b93ae5cefb9dc.js.map