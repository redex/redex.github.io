webpackJsonp([0x9d8005491a95],{1156:function(e,s){e.exports={data:{package:{id:"clj-collection-apis-reasonml",stars:4,name:"clj-collection-apis-reasonml",version:"1.1.0",category:"library",flags:[],platforms:["any"],description:"Adding common functions from Clojure to Reason",keywords:["collections"],license:"MIT",updated:"2018-04-17T07:43:47.010Z",type:"published",score:.6029425043741345,quality:.8019956677245164,popularity:.035386864559461544,maintenance:.9998811470313377,readme:'<h1 id="clojure-collection-apis-in-reason"><a href="#clojure-collection-apis-in-reason" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Clojure Collection APIs in Reason</h1>\n<p>This project aims to implement the Clojure collection APIs for Reason\'s Array and List types whenever they make sense.</p>\n<p>In addition, it provides ports of many of Clojure\'s predicates such as <code>even?</code> and the non-collection API of Scala\'s <code>Option</code> type.</p>\n<p>Reference the unit tests for examples on usage.</p>\n<h2 id="using-clj-collection-apis-reasonml"><a href="#using-clj-collection-apis-reasonml" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using clj-collection-apis-reasonml</h2>\n<p>First, add the dependency to your <code>package.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add clj-collection-apis-reasonml</code></pre></div>\n<p>Then add it to your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-string">"bs-dependencies"</span>: [\n  <span class="hljs-string">"clj-collection-apis-reasonml"</span>\n],</code></pre></div>\n<p>Finally, you\'re free to use it in your code:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-comment">/* test.re */</span>\n<span class="hljs-keyword">let</span> myVal = <span class="hljs-type">Clj</span>.<span class="hljs-type">Array</span>.drop(<span class="hljs-number">2</span>, [|<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>|]);\n<span class="hljs-comment">/* myVal is now [|3|] */</span></code></pre></div>\n<h2 id="api-reference"><a href="#api-reference" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a href="https://github.com/jasonrose/clj-collection-apis-reasonml/blob/master/API.md">API Reference</a></h2>\n',homepageUrl:"https://github.com/jasonrose/clj-collection-apis-reasonml",repositoryUrl:"https://github.com/jasonrose/clj-collection-apis-reasonml",npmUrl:"https://www.npmjs.com/package/clj-collection-apis-reasonml",issuesUrl:"https://github.com/jasonrose/clj-collection-apis-reasonml/issues",slug:"/package/clj-collection-apis-reasonml"}},pathContext:{id:"clj-collection-apis-reasonml"}}}});
//# sourceMappingURL=path---package-clj-collection-apis-reasonml-5312752f12dfa79bdc32.js.map