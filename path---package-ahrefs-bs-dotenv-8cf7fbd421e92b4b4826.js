webpackJsonp([0xbd9f5ee28413],{1173:function(e,s){e.exports={data:{package:{type:"published",id:"@ahrefs/bs-dotenv",name:"@ahrefs/bs-dotenv",version:"2.0.0",category:"binding",flags:[],platforms:["node"],description:"bucklescript bindings to dotenv",keywords:["development tools"],license:"MIT",updated:"2020-06-20T04:27:19.298Z",stars:14,score:.6085301054121902,quality:.8060719416803905,popularity:.04784361847675926,maintenance:.9998950184034496,readme:'<h1 id="bs-dotenv"><a href="#bs-dotenv" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-dotenv</h1>\n<p><code>bs-dotenv</code> is a package for bucklescript bindings to\n<a href="https://github.com/motdotla/dotenv">dotenv</a>.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add @ahrefs/bs-dotenv</code></pre></div>\n<p>or to follow master version:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add https:<span class="hljs-comment">//github.com/ahrefs/bs-dotenv.git</span></code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>Add <code>@ahrefs/bs-dotenv</code> to the <code>bs-dependencies</code> of <code>bsconfig.json</code>.</p>\n<p>See original <a href="https://github.com/motdotla/dotenv#usage">dotenv usage</a>.</p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<p>Create a <code>.env</code> file:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>VALUE1=demo1\nVALUE2=demo2</code></pre></div>\n<p>Create a <code>demo.re</code> file:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Dotenv</span>.config();\n\n<span class="hljs-keyword">let</span> <span class="hljs-number">_</span> =\n  <span class="hljs-type">Js</span>.log(<span class="hljs-type">Node</span>.<span class="hljs-type">Process</span>.process##env);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = <span class="hljs-type">Dotenv</span>.config <span class="hljs-literal">()</span>\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">Js</span>.log (## <span class="hljs-type">Node</span>.<span class="hljs-type">Process</span>.process env)</code></pre>\n      </div>\n    </div>\n  \n<p>more examples <a href="./examples/">here</a></p>\n<p>Add the package as a dependency in <code>bsconfig.json</code>.</p>\n<p>Run it:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>$ nodejs src/demo.bs.js | grep demo\n  VALUE1: <span class="hljs-string">\'demo1\'</span>,\n  VALUE2: <span class="hljs-string">\'demo2\'</span>,</code></pre></div>\n',homepageUrl:"https://github.com/ahrefs/bs-dotenv#readme",repositoryUrl:"https://github.com/ahrefs/bs-dotenv",npmUrl:"https://www.npmjs.com/package/%40ahrefs%2Fbs-dotenv",issuesUrl:"https://github.com/ahrefs/bs-dotenv/issues",slug:"/package/@ahrefs/bs-dotenv"}},pathContext:{id:"@ahrefs/bs-dotenv"}}}});
//# sourceMappingURL=path---package-ahrefs-bs-dotenv-8cf7fbd421e92b4b4826.js.map