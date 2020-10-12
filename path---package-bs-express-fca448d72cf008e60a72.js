webpackJsonp([0xbeb04da06017],{1221:function(e,s){e.exports={data:{package:{type:"published",id:"bs-express",name:"bs-express",version:"1.0.2",category:"binding",flags:["neglected"],platforms:["node"],description:"Express bindings in Reason",keywords:["web framework","express"],license:"MIT",updated:"2020-08-30T05:47:13.573Z",stars:197,score:.6589469789307184,quality:.8529026433872668,popularity:.15175122706666005,maintenance:.9998950184034496,readme:'<h1 id="bs-express"><a href="#bs-express" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-express</h1>\n<p>Express bindings for <a href="https://github.com/bloomberg/bucklescript">BuckleScript</a> in <a href="https://github.com/facebook/reason">Reason</a>.</p>\n<h2 id="installing"><a href="#installing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing</h2>\n<ol>\n<li>Install <code>bs-express</code> using npm:</li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install --save bs-express</code></pre></div>\n<ol start="2">\n<li>Add bs-express as a dependency to your <code>bsconfig.json</code>:</li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"name"</span>: <span class="hljs-string">"your-project"</span>,\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"bs-express"</span>]\n}</code></pre></div>\n<hr>\n<p>Right now the library is somewhat underdocumented, so please view the interface file <a href="./src/Express.rei"><code>Express.rei</code></a> or the <a href="./example/">example folder</a> to see library usage.</p>\n<hr>\n<h2 id="contributing"><a href="#contributing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributing</h2>\n<p>If you\'d like to contribute, you can follow the instructions below to get things working locally.</p>\n<h3 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting Started</h3>\n<ol>\n<li>After cloning the repo, install the dependencies</li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code>npm install</code></pre></div>\n<ol start="2">\n<li>Build and start the example server:</li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code>npm start</code></pre></div>\n<h3 id="running-the-tests"><a href="#running-the-tests" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Running the tests</h3>\n<p>To run tests, run the command:</p>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code>npm <span class="hljs-built_in">test</span></code></pre></div>\n',homepageUrl:"https://github.com/reasonml-community/bs-express#readme",repositoryUrl:"https://github.com/reasonml-community/bs-express",npmUrl:"https://www.npmjs.com/package/bs-express",issuesUrl:"https://github.com/reasonml-community/bs-express/issues",slug:"/package/bs-express"}},pathContext:{id:"bs-express"}}}});
//# sourceMappingURL=path---package-bs-express-fca448d72cf008e60a72.js.map