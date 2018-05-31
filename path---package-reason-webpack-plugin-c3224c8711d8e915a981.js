webpackJsonp([0xada1a171b515],{1121:function(s,a){s.exports={data:{package:{id:"reason-webpack-plugin",stars:null,name:"reason-webpack-plugin",version:"1.0.0",category:"library",flags:["neglected"],platforms:["node"],description:"Webpack plugin for ReasonML",keywords:["development tools"],license:"MIT",updated:"2018-01-22T01:22:34.304Z",type:"published",score:.1767744867166675,quality:.19913378409539614,popularity:.004414707304497402,maintenance:.3299691540899274,readme:'<h1 id="reason-webpack-plugin"><a href="#reason-webpack-plugin" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>reason-webpack-plugin</h1>\n<blockquote>\n<p><code>yarn add --dev reason-webpack-plugin</code></p>\n</blockquote>\n<h3 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h3>\n<p>Add the plugin to your webpack config</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code><span class="hljs-comment">// webpack.config.js</span>\nconst <span class="hljs-type">ReasonPlugin</span> = require(\'reason-webpack-plugin\')\n\n<span class="hljs-class"><span class="hljs-keyword">module</span>.<span class="hljs-title">exports</span> = </span>{\n  <span class="hljs-comment">// ...</span>\n  plugins: [\n    <span class="hljs-keyword">new</span> <span class="hljs-type">ReasonPlugin</span>({ sources: \'src\' })\n  ]\n}</code></pre></div>\n<p>ReasonPlugin will generate <code>.js.flow</code> files for you</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code><span class="hljs-comment">// @flow</span>\n\n<span class="hljs-keyword">import</span> { add } from \'./my_reason_file\'\n\n<span class="hljs-comment">// The `add` function is typed!</span>\nconst value = add(<span class="hljs-number">100</span>, <span class="hljs-number">200</span>)</code></pre></div>\n',homepageUrl:null,repositoryUrl:null,npmUrl:"https://www.npmjs.com/package/reason-webpack-plugin",issuesUrl:null,slug:"/package/reason-webpack-plugin"}},pathContext:{id:"reason-webpack-plugin"}}}});
//# sourceMappingURL=path---package-reason-webpack-plugin-c3224c8711d8e915a981.js.map