webpackJsonp([21465332111969],{1104:function(s,a){s.exports={data:{package:{id:"re-spring",stars:null,name:"re-spring",version:"0.2.0",category:"library",flags:["neglected"],platforms:["browser"],description:"A basic animation spring",keywords:["animation"],license:"MIT",updated:"2018-01-22T21:57:52.628Z",type:"published",score:.2507332996228562,quality:.42128497643792195,popularity:.02272980869142681,maintenance:.3325496389985149,readme:'<h1 id="respring"><a href="#respring" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ReSpring</h1>\n<blockquote>\n<p>A basic animation spring</p>\n</blockquote>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-console"><code>npm install --save re-spring</code></pre></div>\n<h2 id="example-usage"><a href="#example-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example usage</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> Reason\n        <li class="ml"> OCaml\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> animation =\n  <span class="hljs-type">Animation</span>.spring\n  from::<span class="hljs-number">10.0</span>\n  toValue::<span class="hljs-number">0.0</span>\n  onChange::(<span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> (value,<span class="hljs-params"> <span class="hljs-number">_</span>)<span class="hljs-params"> </span></span></span></span>=&gt; {\n    <span class="hljs-type">CssStyleDeclarationRe</span>.setProperty <span class="hljs-string">"top"</span> (string_of_int (float_of_int value) ^ <span class="hljs-string">"px"</span>) <span class="hljs-string">""</span> style\n  })\n  ();\n\nanimation.start ();</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">883</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:null,repositoryUrl:null,npmUrl:"https://www.npmjs.com/package/re-spring",issuesUrl:null,slug:"/package/re-spring"}},pathContext:{id:"re-spring"}}}});
//# sourceMappingURL=path---package-re-spring-8fbc11e8af54e38328d4.js.map