webpackJsonp([0xf329296ca24d],{1279:function(s,a){s.exports={data:{package:{type:"published",id:"bs-react-trello",name:"bs-react-trello",version:"0.1.59",category:"binding",flags:[],platforms:["browser"],description:"Bucklescript bindings for react-trello",keywords:["react"],license:"MIT",updated:"2020-02-21T20:45:41.873Z",stars:1,score:.4185349761473016,quality:.42036189813156066,popularity:.022179634299311784,maintenance:.8133243848659266,readme:'<h1 id="bs-react-trello"><a href="#bs-react-trello" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a href="https://www.npmjs.com/package/bs-react-trello">bs-react-trello</a></h1>\n<p>This is <a href="https://bucklescript.github.io/">Bucklescript</a> bindings for <a href="https://github.com/rcdexta/react-trello">react-trello</a>.</p>\n<h1 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add bs-react-trello</code></pre></div>\n<h1 id="setup"><a href="#setup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setup</h1>\n<p>Add bs-react-trello to <code>bs-depenencies</code> in your <code>bsconfig.json</code>!</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>{\n  <span class="hljs-comment">/* ... */</span>\n  <span class="hljs-string">"bs-dependencies"</span>: [\n    <span class="hljs-string">"bs-react-trello"</span>\n  ],\n  <span class="hljs-comment">/* ... */</span>\n}</code></pre></div>\n<h1 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h1>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> data = [|\n  <span class="hljs-type">ReactTrello</span>.<span class="hljs-type">Lane</span>.t(\n    ~id=<span class="hljs-string">"title1"</span>,\n    ~label=<span class="hljs-string">"title1 label"</span>,\n    ~addCardLink=<span class="hljs-type">React</span>.string(<span class="hljs-string">"title 1 addCardLink"</span>),\n    ~cards=[|\n      <span class="hljs-type">ReactTrello</span>.<span class="hljs-type">Card</span>.t(\n        ~id=<span class="hljs-string">"t1 card1"</span>,\n        ~title=<span class="hljs-string">"t1 title1"</span>,\n        ~description=<span class="hljs-string">"t1 description"</span>,\n        (),\n      ),\n      <span class="hljs-type">ReactTrello</span>.<span class="hljs-type">Card</span>.t(\n        ~id=<span class="hljs-string">"t2 card1"</span>,\n        ~title=<span class="hljs-string">"t2 title1"</span>,\n        ~description=<span class="hljs-string">"t2 description"</span>,\n        (),\n      ),\n    |],\n    (),\n  ),\n  <span class="hljs-type">ReactTrello</span>.<span class="hljs-type">Lane</span>.t(\n    ~id=<span class="hljs-string">"title2"</span>,\n    ~label=<span class="hljs-string">"title2 label"</span>,\n    ~addCardLink=<span class="hljs-type">React</span>.string(<span class="hljs-string">"title 2 addCardLink"</span>),\n    ~cards=[||],\n    (),\n  ),\n|];\n\n[@react.component]\n<span class="hljs-keyword">let</span> make = () =&gt;\n  &lt;div className=<span class="hljs-string">"container"</span>&gt; &lt;<span class="hljs-type">ReactTrello</span> data={<span class="hljs-string">"lanes"</span>: data} /&gt; &lt;/div&gt;;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> data =\n  [|(<span class="hljs-type">ReactTrello</span>.<span class="hljs-type">Lane</span>.t ~id:<span class="hljs-string">"title1"</span> ~label:<span class="hljs-string">"title1 label"</span>\n       ~addCardLink:(<span class="hljs-type">React</span>.<span class="hljs-built_in">string</span> <span class="hljs-string">"title 1 addCardLink"</span>)\n       ~cards:[|(<span class="hljs-type">ReactTrello</span>.<span class="hljs-type">Card</span>.t ~id:<span class="hljs-string">"t1 card1"</span> ~title:<span class="hljs-string">"t1 title1"</span>\n                   ~description:<span class="hljs-string">"t1 description"</span> <span class="hljs-literal">()</span>);(<span class="hljs-type">ReactTrello</span>.<span class="hljs-type">Card</span>.t\n                                                        ~id:<span class="hljs-string">"t2 card1"</span>\n                                                        ~title:<span class="hljs-string">"t2 title1"</span>\n                                                        ~description:<span class="hljs-string">"t2 description"</span>\n                                                        <span class="hljs-literal">()</span>)|] <span class="hljs-literal">()</span>);(<span class="hljs-type">ReactTrello</span>.<span class="hljs-type">Lane</span>.t\n                                                                    ~id:<span class="hljs-string">"title2"</span>\n                                                                    ~label:<span class="hljs-string">"title2 label"</span>\n                                                                    ~addCardLink:(\n                                                                    <span class="hljs-type">React</span>.<span class="hljs-built_in">string</span>\n                                                                    <span class="hljs-string">"title 2 addCardLink"</span>)\n                                                                    ~cards:\n                                                                    <span class="hljs-literal">[||]</span> <span class="hljs-literal">()</span>)|]\n<span class="hljs-keyword">let</span> make <span class="hljs-literal">()</span> =\n  ((div ~className:<span class="hljs-string">"container"</span>\n      ~children:[((<span class="hljs-type">ReactTrello</span>.createElement\n                     ~data:([%bs.obj { lanes = data }]) ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)\n                [@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])[@@react.component ]</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/JakubMarkiewicz/bs-react-trello",repositoryUrl:"https://github.com/JakubMarkiewicz/bs-react-trello",npmUrl:"https://www.npmjs.com/package/bs-react-trello",issuesUrl:"https://github.com/JakubMarkiewicz/bs-react-trello/issues",slug:"/package/bs-react-trello"}},pathContext:{id:"bs-react-trello"}}}});
//# sourceMappingURL=path---package-bs-react-trello-23d389e79f8cf93d2832.js.map