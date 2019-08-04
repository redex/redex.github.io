webpackJsonp([5789540667887],{1200:function(s,a){s.exports={data:{package:{type:"published",id:"bs-guid",name:"bs-guid",version:"1.0.0",category:"binding",flags:[],platforms:["node"],description:"BuckleScript bindings for node-uuid",keywords:["utilities"],license:"Unlicense",updated:"2019-05-21T00:21:28.873Z",stars:0,score:.43259654101784517,quality:.5230730970042821,popularity:.023019387740019815,maintenance:.7646223605930105,readme:'<h1 id="bs-guid"><a href="#bs-guid" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-guid</h1>\n<p>Simple, fast generation of <a href="http://www.ietf.org/rfc/rfc4122.txt">RFC4122</a> UUIDs for Reason.</p>\n<p>bs-guid is a statically typed interface to <a href="https://github.com/kelektiv/node-uuid">node-uuid</a>.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>yarn add bs-guid</code></pre></div>\n<p>In your <code>bsconfig.json</code>, include <code>"bs-guid"</code> in the <code>bs-dependencies</code>.</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="version-1-timestamp"><a href="#version-1-timestamp" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Version 1 (timestamp)</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> uuidv1 = <span class="hljs-type">Uuid</span>.<span class="hljs-type">V1</span>.uuidv1();</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> uuidv1 = <span class="hljs-type">Uuid</span>.<span class="hljs-type">V1</span>.uuidv1 <span class="hljs-literal">()</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="version-3-namespace"><a href="#version-3-namespace" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Version 3 (namespace)</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* ...using predefined DNS namespace */</span>\n<span class="hljs-keyword">let</span> uuidv3_1 = <span class="hljs-type">Uuid</span>.<span class="hljs-type">V3</span>.uuidv3(<span class="hljs-string">"hello.example.com"</span>, <span class="hljs-type">Uuid</span>.<span class="hljs-type">DNS</span>);\n\n<span class="hljs-comment">/* ...using predefined URL namespace */</span>\n<span class="hljs-keyword">let</span> uuidv3_2 = <span class="hljs-type">Uuid</span>.<span class="hljs-type">V3</span>.uuidv3(<span class="hljs-string">"http://example.com/hello"</span>, <span class="hljs-type">Uuid</span>.<span class="hljs-type">URL</span>);\n\n<span class="hljs-comment">/* ...using a custom namespace */</span>\n<span class="hljs-keyword">let</span> namespace = <span class="hljs-string">"1b671a64-40d5-491e-99b0-da01ff1f3341"</span>;\n<span class="hljs-keyword">let</span> uuidv3_3 = <span class="hljs-type">Uuid</span>.<span class="hljs-type">V3</span>.uuidv3(<span class="hljs-string">"Hello, world!"</span>, <span class="hljs-type">Uuid</span>.<span class="hljs-type">Custom</span>(namespace));</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> uuidv3_1 = <span class="hljs-type">Uuid</span>.<span class="hljs-type">V3</span>.uuidv3 <span class="hljs-string">"hello.example.com"</span> <span class="hljs-type">Uuid</span>.<span class="hljs-type">DNS</span>\n<span class="hljs-keyword">let</span> uuidv3_2 = <span class="hljs-type">Uuid</span>.<span class="hljs-type">V3</span>.uuidv3 <span class="hljs-string">"http://example.com/hello"</span> <span class="hljs-type">Uuid</span>.<span class="hljs-type">URL</span>\n<span class="hljs-keyword">let</span> namespace = <span class="hljs-string">"1b671a64-40d5-491e-99b0-da01ff1f3341"</span>\n<span class="hljs-keyword">let</span> uuidv3_3 =\n  <span class="hljs-type">Uuid</span>.<span class="hljs-type">V3</span>.uuidv3 <span class="hljs-string">"Hello, world!"</span>\n    ((<span class="hljs-type">Uuid</span>.<span class="hljs-type">Custom</span> (namespace))[@explicit_arity ])</code></pre>\n      </div>\n    </div>\n  \n<h3 id="version-4-random"><a href="#version-4-random" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Version 4 (random)</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> uuidv4 = <span class="hljs-type">Uuid</span>.<span class="hljs-type">V4</span>.uuidv4();</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> uuidv4 = <span class="hljs-type">Uuid</span>.<span class="hljs-type">V4</span>.uuidv4 <span class="hljs-literal">()</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="version-5-namespace"><a href="#version-5-namespace" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Version 5 (namespace)</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* ...using predefined DNS namespace */</span>\n<span class="hljs-keyword">let</span> uuidv5_1 = <span class="hljs-type">Uuid</span>.<span class="hljs-type">V5</span>.uuidv5(<span class="hljs-string">"hello.example.com"</span>, <span class="hljs-type">Uuid</span>.<span class="hljs-type">DNS</span>);\n\n<span class="hljs-comment">/* ...using predefined URL namespace */</span>\n<span class="hljs-keyword">let</span> uuidv5_2 = <span class="hljs-type">Uuid</span>.<span class="hljs-type">V5</span>.uuidv5(<span class="hljs-string">"http://example.com/hello"</span>, <span class="hljs-type">Uuid</span>.<span class="hljs-type">URL</span>);\n\n<span class="hljs-comment">/* ...using a custom namespace */</span>\n<span class="hljs-keyword">let</span> namespace = <span class="hljs-string">"1b671a64-40d5-491e-99b0-da01ff1f3341"</span>;\n<span class="hljs-keyword">let</span> uuidv5_3 = <span class="hljs-type">Uuid</span>.<span class="hljs-type">V5</span>.uuidv5(<span class="hljs-string">"Hello, world!"</span>, <span class="hljs-type">Uuid</span>.<span class="hljs-type">Custom</span>(namespace)));</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2540</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h2 id="development"><a href="#development" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Development</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>yarn run start</code></pre></div>\n',homepageUrl:"https://github.com/aszecsei/bs-guid#readme",repositoryUrl:"https://github.com/aszecsei/bs-guid",npmUrl:"https://www.npmjs.com/package/bs-guid",issuesUrl:"https://github.com/aszecsei/bs-guid/issues",slug:"/package/bs-guid"}},pathContext:{id:"bs-guid"}}}});
//# sourceMappingURL=path---package-bs-guid-3a4c4518768f220e2572.js.map