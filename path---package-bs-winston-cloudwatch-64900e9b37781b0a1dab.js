webpackJsonp([0x854326d95a9f],{1234:function(s,a){s.exports={data:{package:{type:"published",id:"bs-winston-cloudwatch",name:"bs-winston-cloudwatch",version:"0.3.0",category:"binding",flags:[],platforms:["node"],description:"Winston Cloudwatch Transport for ReasonML",keywords:["logging"],license:"MIT",updated:"2019-02-15T12:33:09.202Z",stars:0,score:.5081544343450873,quality:.5030089451849055,popularity:.025850926713716648,maintenance:.9948683612566139,readme:'<p><a href="https://www.npmjs.com/package/bs-winston-cloudwatch"><img src="https://img.shields.io/npm/v/bs-winston-cloudwatch.svg" alt="npm"></a></p>\n<h1 id="bswinstoncloudwatch"><a href="#bswinstoncloudwatch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>BsWinstonCloudwatch</h1>\n<p>Adapter of <a href="https://github.com/lazywithclass/winston-cloudwatch">winston-cloudwatch</a> winston transport plugin for ReasonML. Used with <a href="https://github.com/veikkaus/bs-winston">BsWinston</a>.</p>\n<h1 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install bs-winston-cloudwatch</code></pre></div>\n<p>And to <code>bsconfig.json</code>: <code>"bs-dependencies": [..., "bs-winston-cloudwatch", ...]</code></p>\n<p><code>bs-winston</code> must naturally be installed also.</p>\n<h1 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-keyword">let</span> (cloudwatchTransport, kthxbyeFn) = <span class="hljs-type">BsWinstonCloudwatch</span>.<span class="hljs-type">Transport</span>.createCloudwatch(\n  ~logGroupName = <span class="hljs-string">"xxxx"</span>,\n  ~logStreamName = <span class="hljs-string">"yyyy"</span>,\n);\n\n<span class="hljs-keyword">let</span> logger = <span class="hljs-type">Builder</span>.create<span class="hljs-literal">()</span>\n  -&gt; <span class="hljs-type">Builder</span>.addTransport(cloudwatchTransport)\n  -&gt; <span class="hljs-type">Builder</span>.build;\n\n/*  ... after logging <span class="hljs-keyword">done</span>, flush <span class="hljs-keyword">and</span> close:  */\nkthxbye(cb);</code></pre></div>\n',homepageUrl:"https://github.com/veikkaus/bs-winston-cloudwatch#readme",repositoryUrl:"https://github.com/veikkaus/bs-winston-cloudwatch",npmUrl:"https://www.npmjs.com/package/bs-winston-cloudwatch",issuesUrl:"https://github.com/veikkaus/bs-winston-cloudwatch/issues",slug:"/package/bs-winston-cloudwatch"}},pathContext:{id:"bs-winston-cloudwatch"}}}});
//# sourceMappingURL=path---package-bs-winston-cloudwatch-64900e9b37781b0a1dab.js.map