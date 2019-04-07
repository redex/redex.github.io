webpackJsonp([0x83c672fa0105],{1405:function(s,e){s.exports={data:{package:{type:"unpublished",id:"unpublished/theatlasroom/bs-parse-color",name:"theatlasroom/bs-parse-color",version:"0.5.1",category:"binding",flags:[],platforms:["browser","node"],description:"BuckleScript bindings for the parse-color js library",keywords:["utilities","graphics"],license:"MIT",updated:"2019-04-07T11:53:28.896Z",stars:0,score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="bs-parse-color"><a href="#bs-parse-color" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-parse-color</h1>\n<p><a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/github/license/mashape/apistatus.svg?style=flat" alt="License: MIT"></a>\n<a href="https://circleci.com/gh/theatlasroom/bs-parse-color"><img src="https://circleci.com/gh/theatlasroom/bs-parse-color.svg?style=svg" alt="CircleCI"></a></p>\n<p>Pretty naive BuckleScript bindings for <a href="https://github.com/substack/parse-color">parse-color</a></p>\n<p>I\'m very new to Reason, so i do not recommend using this for anything more than a toy, please open an issue / leave comments if you have a better ideas on some of the parts.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>With yarn</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add bs-parse-color</code></pre></div>\n<p>Or with npm</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install bs-parse-color</code></pre></div>\n<p>Then add <code>bs-parse-color</code> to your <code>bsconfig.json</code> file as a dependency</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>{\n  ...\n  <span class="hljs-string">"bs-dependencies"</span>: [ <span class="hljs-string">"bs-parse-color"</span> ]\n  ...\n}</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-comment">/* call .parse with an argument of any color type */</span>\n<span class="hljs-keyword">let</span> col = <span class="hljs-string">"orange"</span> | <span class="hljs-string">"#FF6600"</span> | <span class="hljs-string">"rgb(10,20,30)"</span> | <span class="hljs-string">"rgba(10,20,20,0.5)"</span> ...\n<span class="hljs-keyword">let</span> parsed = <span class="hljs-type">ParseColor</span>.parse(col);\n\n<span class="hljs-comment">/* convert the parsed color into another type */</span>\nparsed |&gt; asHex;\nparsed |&gt; asRgba;\nparsed |&gt; asCmkya;\n\n<span class="hljs-comment">/* access a color mode */</span>\nparsed.rgba</code></pre></div>\n',homepageUrl:"https://github.com/theatlasroom/bs-parse-color#readme",repositoryUrl:"https://github.com/theatlasroom/bs-parse-color",npmUrl:null,issuesUrl:"https://github.com/theatlasroom/bs-parse-color/issues",slug:"/package/unpublished/theatlasroom/bs-parse-color"}},pathContext:{id:"unpublished/theatlasroom/bs-parse-color"}}}});
//# sourceMappingURL=path---package-unpublished-theatlasroom-bs-parse-color-6d71c846af341345cfa8.js.map