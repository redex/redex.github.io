webpackJsonp([0xcf2d015b5144],{1211:function(s,n){s.exports={data:{package:{id:"rex-json",stars:22,name:"rex-json",version:"1.3.0",category:"library",flags:[],platforms:["any"],description:"> A simple cross-target JSON library for Reason/OCaml",keywords:["json","parsing"],license:"MIT",updated:"2018-04-07T17:54:19.608Z",type:"published",score:.6346287865525293,quality:.8400068334202084,popularity:.09329542938562496,maintenance:.9999238178328518,readme:'<h1 id="rex-json"><a href="#rex-json" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Rex Json</h1>\n<blockquote>\n<p>A simple cross-target JSON library for Reason/OCaml</p>\n</blockquote>\n<p>Works with both native and js targets (compiled with bsb-native).</p>\n<p>Why would you want this library?</p>\n<ul>\n<li>you want minimal dependencies</li>\n<li>you want forgiving json parsing (comments, trailing commas allowed)</li>\n<li>you\'re fine with "good enough" performance</li>\n</ul>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>Add <code>rex-json</code> to your <code>package.json</code> and your <code>bsconfig.json</code>.</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage:</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> data = {|\n{\n  <span class="hljs-string">"some"</span>: <span class="hljs-string">"json"</span>, <span class="hljs-comment">// with a comment!</span>\n  <span class="hljs-string">"more"</span>: [<span class="hljs-number">1</span>,<span class="hljs-number">3</span>,],\n  <span class="hljs-comment">/* also\n  multi-line comment */</span>\n  <span class="hljs-string">"this"</span>: {\n    <span class="hljs-string">"object"</span>: {\n      <span class="hljs-string">"is"</span>: {\n        <span class="hljs-string">"really"</span>: <span class="hljs-string">"nested"</span>\n      }\n    }\n  },\n  <span class="hljs-string">"nested"</span>: [{\n    <span class="hljs-string">"and"</span>: [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,{<span class="hljs-string">"stuff"</span>: <span class="hljs-number">5</span>}]\n  }], <span class="hljs-comment">// trailing commas!</span>\n}\n|};\n<span class="hljs-keyword">let</span> json = <span class="hljs-type">Json</span>.parse(data);\n<span class="hljs-keyword">let</span> simple = <span class="hljs-type">Json</span>.<span class="hljs-keyword">get</span>(<span class="hljs-string">"some"</span>, json); <span class="hljs-comment">/* == Some(String("json")) */</span>\n\nopen <span class="hljs-type">Json</span>.<span class="hljs-type">Infix</span>;\n\n<span class="hljs-keyword">let</span> stuff = json\n  |&gt; <span class="hljs-type">Json</span>.<span class="hljs-keyword">get</span>(<span class="hljs-string">"nested"</span>)\n  |?&gt; <span class="hljs-type">Json</span>.nth(<span class="hljs-number">0</span>)\n  |?&gt; <span class="hljs-type">Json</span>.<span class="hljs-keyword">get</span>(<span class="hljs-string">"and"</span>)\n  |?&gt; <span class="hljs-type">Json</span>.nth(<span class="hljs-number">2</span>)\n  |?&gt; <span class="hljs-type">Json</span>.<span class="hljs-keyword">get</span>(<span class="hljs-string">"stuff"</span>)\n  |?&gt; <span class="hljs-type">Json</span>.number; <span class="hljs-comment">/* == Some(5.) */</span>\n\n<span class="hljs-comment">/** Using a json path for nested objects */</span>\n<span class="hljs-keyword">let</span> nestedObj = json |&gt; <span class="hljs-type">Json</span>.getPath(<span class="hljs-string">"this.object.is.really"</span>); <span class="hljs-comment">/* Some(String("nested")) */</span>\n\n<span class="hljs-keyword">let</span> str = <span class="hljs-type">Json</span>.stringify(json); <span class="hljs-comment">/* back to a string */</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code>let data =\n  {|\n{\n  "some": "json", // with a comment!\n  "more": [1,3,],\n  /* also\n  multi-line comment */\n  "this": {\n    "object": {\n      "is": {\n        "really": "nested"\n      }\n    }\n  },\n  "nested": [{\n    "and": [1,2,{"stuff": 5}]\n  }], // trailing commas!\n}\n|}\nlet json = Json.parse data\nlet simple = Json.get "some" json\nopen Json.Infix\nlet stuff =\n  (((((json |&gt; (Json.get "nested")) |?&gt; (Json.nth 0)) |?&gt; (Json.get "and"))\n      |?&gt; (Json.nth 2))\n     |?&gt; (Json.get "stuff"))\n    |?&gt; Json.number\nlet nestedObj = json |&gt; (Json.getPath "this.object.is.really")[@@ocaml.doc\n                                                                " Using a json path for nested objects "]\nlet str = Json.stringify json</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/jaredly/rex-json#readme",repositoryUrl:"https://github.com/jaredly/rex-json",npmUrl:"https://www.npmjs.com/package/rex-json",issuesUrl:"https://github.com/jaredly/rex-json/issues",slug:"/package/rex-json"}},pathContext:{id:"rex-json"}}}});
//# sourceMappingURL=path---package-rex-json-cc746a2c6b7e6daf6579.js.map