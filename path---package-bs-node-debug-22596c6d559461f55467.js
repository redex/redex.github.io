webpackJsonp([0xea5f8aed4f41],{1057:function(s,e){s.exports={data:{package:{id:"bs-node-debug",stars:4,name:"bs-node-debug",version:"0.2.0",category:"binding",flags:["neglected"],platforms:["node"],description:"BuckleScript interface to the node 'debug' library",keywords:["development tools"],license:"BSD-2-Clause",updated:"2018-02-03T20:01:03.834Z",type:"published",score:.5704667458194878,quality:.7156543784826616,popularity:.07022151088691557,maintenance:.9462654384693396,readme:'<h1 id="bs-node-debug"><a href="#bs-node-debug" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-node-debug</h1>\n<p>A temporary interface to <code>debug</code>, to be used until the <code>rebug</code> Node backend is ready.</p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> debug = <span class="hljs-type">Debug</span>.make(<span class="hljs-string">"my-app"</span>, <span class="hljs-string">"MyModule"</span>);\n\n<span class="hljs-keyword">let</span> debugExn = <span class="hljs-type">Debug</span>.make(<span class="hljs-string">"my-app"</span>, <span class="hljs-string">"MyModule:exn"</span>);\n\n<span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.catch((exn) =&gt; {\n  debug(<span class="hljs-string">"Unhandled error:"</span>);\n  debugExn(exn);\n  resolve(<span class="hljs-type">None</span>)\n})</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> debug = <span class="hljs-type">Debug</span>.make <span class="hljs-string">"my-app"</span> <span class="hljs-string">"MyModule"</span>\n<span class="hljs-keyword">let</span> debugExn = <span class="hljs-type">Debug</span>.make <span class="hljs-string">"my-app"</span> <span class="hljs-string">"MyModule:exn"</span>\n<span class="hljs-keyword">let</span> _ =\n  <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.catch\n    (<span class="hljs-keyword">fun</span> <span class="hljs-built_in">exn</span>  -&gt; debug <span class="hljs-string">"Unhandled error:"</span>; debugExn <span class="hljs-built_in">exn</span>; resolve <span class="hljs-type">None</span>)</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/ecliptic/bucklescript-tools#readme",repositoryUrl:"https://github.com/ecliptic/bucklescript-tools",npmUrl:"https://www.npmjs.com/package/bs-node-debug",issuesUrl:"https://github.com/ecliptic/bucklescript-tools/issues",slug:"/package/bs-node-debug"}},pathContext:{id:"bs-node-debug"}}}});
//# sourceMappingURL=path---package-bs-node-debug-22596c6d559461f55467.js.map