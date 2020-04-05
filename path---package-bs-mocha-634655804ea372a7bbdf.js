webpackJsonp([99028486583022],{1239:function(s,a){s.exports={data:{package:{type:"published",id:"bs-mocha",name:"bs-mocha",version:"1.0.0",category:"binding",flags:["neglected"],platforms:["node"],description:"Bucklescript bindings for mocha",keywords:["testing"],license:"MIT",updated:"2020-03-19T08:03:55.409Z",stars:5,score:.6131363906384286,quality:.7961496134988599,popularity:.06946583332552268,maintenance:.9999384712138222,readme:'<h1 id="bs-mocha"><a href="#bs-mocha" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-mocha</h1>\n<p>Bucklescript bindings for mocha</p>\n<h2 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install bs-mocha --save-dev </code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> (it\', it_skip\') = <span class="hljs-type">Async</span>.(it, it_skip);\nopen <span class="hljs-type">Mocha</span>;\n\ndescribe(<span class="hljs-string">"Some Test Suite"</span>, () =&gt; {\n  describe(<span class="hljs-string">"List.map"</span>, () =&gt; {\n    it(<span class="hljs-string">"should map the values"</span>, () =&gt;\n      <span class="hljs-type">Assert</span>.deep_equal(<span class="hljs-type">List</span>.<span class="hljs-built_in">map</span>(( * )(<span class="hljs-number">2</span>), [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]), [<span class="hljs-number">2</span>, <span class="hljs-number">4</span>, <span class="hljs-number">6</span>])\n    );\n\n    it(<span class="hljs-string">"should work with an empty list"</span>, () =&gt;\n      <span class="hljs-type">Assert</span>.<span class="hljs-built_in">equal</span>(<span class="hljs-type">List</span>.<span class="hljs-built_in">map</span>(( * )(<span class="hljs-number">2</span>), []), [])\n    );\n  })\n});</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> (it\',it_skip\') = <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Async</span> <span class="hljs-keyword">in</span> (it, it_skip)\n<span class="hljs-keyword">open</span> <span class="hljs-type">Mocha</span>\n<span class="hljs-keyword">let</span> _ =\n  describe <span class="hljs-string">"Some Test Suite"</span>\n    (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n       describe <span class="hljs-string">"List.map"</span>\n         (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n            it <span class="hljs-string">"should map the values"</span>\n              (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n                 <span class="hljs-type">Assert</span>.deep_equal (<span class="hljs-type">List</span>.map (( * ) <span class="hljs-number">2</span>) [<span class="hljs-number">1</span>; <span class="hljs-number">2</span>; <span class="hljs-number">3</span>]) [<span class="hljs-number">2</span>; <span class="hljs-number">4</span>; <span class="hljs-number">6</span>]);\n            it <span class="hljs-string">"should work with an empty list"</span>\n              (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt; <span class="hljs-type">Assert</span>.equal (<span class="hljs-type">List</span>.map (( * ) <span class="hljs-number">2</span>) <span class="hljs-literal">[]</span>) <span class="hljs-literal">[]</span>)))</code></pre>\n      </div>\n    </div>\n  \n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>See <code>LICENSE</code></p>\n',homepageUrl:"https://github.com/reasonml-community/bs-mocha",repositoryUrl:"https://github.com/reasonml-community/bs-mocha",npmUrl:"https://www.npmjs.com/package/bs-mocha",issuesUrl:"https://github.com/reasonml-community/bs-mocha/issues",slug:"/package/bs-mocha"}},pathContext:{id:"bs-mocha"}}}});
//# sourceMappingURL=path---package-bs-mocha-634655804ea372a7bbdf.js.map