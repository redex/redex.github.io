webpackJsonp([0xaced8f08941b],{1256:function(s,n){s.exports={data:{package:{type:"published",id:"reason-cli-tools",name:"reason-cli-tools",version:"1.0.4",category:"library",flags:["neglected"],platforms:["native"],description:"## `Files` module",keywords:["filesystem","cli"],license:"MIT",updated:"2018-10-24T13:47:01.576Z",stars:null,score:.3361247531380313,quality:.724264755373857,popularity:.039164935445415106,maintenance:.3003931403427969,readme:'<h1 id="reason-cli-tools"><a href="#reason-cli-tools" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reason CLI Tools</h1>\n<h2 id="files-module"><a href="#files-module" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>Files</code> module</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-keyword">let</span> exists: <span class="hljs-built_in">string</span> =&gt; <span class="hljs-built_in">bool</span>;\n<span class="hljs-keyword">let</span> isFile: <span class="hljs-built_in">string</span> =&gt; <span class="hljs-built_in">bool</span>;\n<span class="hljs-keyword">let</span> isDirectory: <span class="hljs-built_in">string</span> =&gt; <span class="hljs-built_in">bool</span>;\n<span class="hljs-keyword">let</span> mkdirp: <span class="hljs-built_in">string</span> =&gt; <span class="hljs-built_in">unit</span>;\n\n<span class="hljs-keyword">let</span> readDirectory: <span class="hljs-built_in">string</span> =&gt; <span class="hljs-built_in">list</span>(<span class="hljs-built_in">string</span>);\n<span class="hljs-keyword">let</span> readFile: <span class="hljs-built_in">string</span> =&gt; option(<span class="hljs-built_in">string</span>);\n<span class="hljs-keyword">let</span> writeFile: (<span class="hljs-built_in">string</span>, <span class="hljs-built_in">string</span>) =&gt; <span class="hljs-built_in">bool</span>;\n<span class="hljs-keyword">let</span> removeDeep: <span class="hljs-built_in">string</span> =&gt; <span class="hljs-built_in">unit</span>;\n\n<span class="hljs-keyword">let</span> copy: (~source: <span class="hljs-built_in">string</span>, ~dest: <span class="hljs-built_in">string</span>) =&gt; <span class="hljs-built_in">bool</span>;\n<span class="hljs-keyword">let</span> copyDeep: (~source: <span class="hljs-built_in">string</span>, ~dest: <span class="hljs-built_in">string</span>) =&gt; <span class="hljs-built_in">unit</span>;</code></pre></div>\n<h2 id="commands-module"><a href="#commands-module" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>Commands</code> module</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>/**\n * <span class="hljs-type">Get</span> the output <span class="hljs-keyword">of</span> a command, <span class="hljs-keyword">in</span> lines, <span class="hljs-keyword">and</span> whether it succeeded.\n */\n<span class="hljs-keyword">let</span> execSync: (~cmd: <span class="hljs-built_in">string</span>, ~onOut: <span class="hljs-built_in">string</span> =&gt; <span class="hljs-built_in">unit</span>=?, <span class="hljs-built_in">unit</span>) =&gt; (<span class="hljs-built_in">list</span>(<span class="hljs-built_in">string</span>), <span class="hljs-built_in">bool</span>);\n\n<span class="hljs-keyword">let</span> exec: (~cmd: <span class="hljs-built_in">string</span>, ~onOut: <span class="hljs-built_in">string</span> =&gt; <span class="hljs-built_in">unit</span>) =&gt; job;\n\n/**\n * <span class="hljs-type">Checks</span> every `checkInterval`\n * <span class="hljs-keyword">to</span> see <span class="hljs-keyword">if</span> the command has died, <span class="hljs-keyword">and</span> <span class="hljs-keyword">if</span> so it restarts it, calling `onStart`.\n * <span class="hljs-type">It</span> also calls `onStart` initially.\n *\n * `checkInterval` defaults <span class="hljs-keyword">to</span> <span class="hljs-number">1.0</span> (one second).\n */\n<span class="hljs-keyword">let</span> keepAlive:\n  (\n    ~cmd: <span class="hljs-built_in">string</span>,\n    ~onOut: <span class="hljs-built_in">string</span> =&gt; <span class="hljs-built_in">unit</span>=?,\n    ~onErr: <span class="hljs-built_in">string</span> =&gt; <span class="hljs-built_in">unit</span>=?,\n    ~onStart: <span class="hljs-built_in">unit</span> =&gt; <span class="hljs-built_in">unit</span>=?,\n    ~checkInterval: <span class="hljs-built_in">float</span>=?,\n    <span class="hljs-built_in">unit</span>\n  ) =&gt; job;\n\n<span class="hljs-keyword">let</span> kill: job =&gt; <span class="hljs-built_in">unit</span>;\n<span class="hljs-keyword">let</span> poll: job =&gt; <span class="hljs-built_in">unit</span>;\n\n/**\n * <span class="hljs-type">Run</span> an async command until it exits.\n */\n<span class="hljs-keyword">let</span> run: job =&gt; <span class="hljs-built_in">unit</span>;\n\n/**\n * <span class="hljs-type">Run</span> multiple async commands <span class="hljs-keyword">in</span> parallel until they all exit.\n */\n<span class="hljs-keyword">let</span> runAll: <span class="hljs-built_in">list</span>(job) =&gt; <span class="hljs-built_in">unit</span>;</code></pre></div>\n<h2 id="utils-module"><a href="#utils-module" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>Utils</code> module</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>/** <span class="hljs-type">Current</span> time <span class="hljs-keyword">in</span> seconds */\n<span class="hljs-keyword">let</span> now: <span class="hljs-built_in">unit</span> =&gt; <span class="hljs-built_in">float</span>;</code></pre></div>\n',homepageUrl:null,repositoryUrl:null,npmUrl:"https://www.npmjs.com/package/reason-cli-tools",issuesUrl:null,slug:"/package/reason-cli-tools"}},pathContext:{id:"reason-cli-tools"}}}});
//# sourceMappingURL=path---package-reason-cli-tools-2f36bc777a0d40f633e1.js.map