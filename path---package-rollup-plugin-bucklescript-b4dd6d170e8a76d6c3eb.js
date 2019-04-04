webpackJsonp([0xff591fcfc844],{1334:function(e,s){e.exports={data:{package:{type:"published",id:"rollup-plugin-bucklescript",name:"rollup-plugin-bucklescript",version:"0.7.0",category:"tool",flags:[],platforms:["node"],description:"rollup plugin for using buckescript compiler",keywords:["development tools"],license:"MIT",updated:"2019-03-26T12:59:18.933Z",stars:17,score:.44246168355281623,quality:.5392142713818704,popularity:.08542972189167658,maintenance:.7165628556461954,readme:'<h1 id="rollup-plugin-bucklescript"><a href="#rollup-plugin-bucklescript" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>rollup-plugin-bucklescript</h1>\n<p><img src="https://david-dm.org/shrynx/rollup-plugin-bucklescript.svg" alt="dependency-status">\n<a href="https://badge.fury.io/js/rollup-plugin-bucklescript"><img src="https://badge.fury.io/js/rollup-plugin-bucklescript.svg" alt="npm version"></a></p>\n<blockquote>\n<p><a href="https://github.com/BuckleScript/bucklescript">bucklescript</a> compiler plugin for <a href="https://rollupjs.org/">rollup.js</a></p>\n</blockquote>\n<p>works with both <a href="https://reasonml.github.io/">ReasonML</a> and <a href="http://ocaml.org/">OCaml</a></p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h3>\n<p>First install <code>bs-platform</code> in your project</p>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code>npm i -D bs-platform</code></pre></div>\n<p>create a <code>bsconfig.json</code> for Bucklescript in the root directory of your project</p>\n<p>and remember to specify <code>"package-specs"</code> as <code>["es6"]</code>, so that rollup can consume it.</p>\n<div class="redex-codeblock"><pre class="hljs lang-javascript"><code>{\n  <span class="hljs-string">"name"</span>: <span class="hljs-string">"hello"</span>,\n  <span class="hljs-string">"sources"</span>: [<span class="hljs-string">"src"</span>],\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"reason-react"</span>],\n  <span class="hljs-string">"reason"</span>: {\n    <span class="hljs-string">"react-jsx"</span>: <span class="hljs-number">2</span>\n  },\n  <span class="hljs-string">"package-specs"</span>: [<span class="hljs-string">"es6"</span>],\n  <span class="hljs-string">"refmt"</span>: <span class="hljs-number">3</span>\n}</code></pre></div>\n<p>Finally, install <code>rollup-plugin-bucklescript</code></p>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code>npm i -D rollup-plugin-bucklescript</code></pre></div>\n<p>and add it to your rollup config.</p>\n<div class="redex-codeblock"><pre class="hljs lang-javascript"><code>import bucklescript from <span class="hljs-symbol">\'rollup</span>-plugin-bucklescript\'\n\nexport default {\n  input: <span class="hljs-symbol">\'src</span>/main.re\',\n  output: {\n    file: <span class="hljs-symbol">\'dist</span>/main.js\',\n    format: <span class="hljs-symbol">\'cjs\'</span>,\n  },\n  plugins: [\n    bucklescript<span class="hljs-literal">()</span>\n  ],\n}</code></pre></div>\n<h3 id="options"><a href="#options" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Options</h3>\n<p>All the settings are taken from <code>bsconfig.json</code>, but few options can be overridden.</p>\n<h3 id="include-and-exclude"><a href="#include-and-exclude" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>include</code> and <code>exclude</code></h3>\n<p> each a minimatch pattern, or array of minimatch patterns, which determines which files are complied by Bucklescript.\nBy default all  <code>.re</code> and <code>.ml</code> are included and all <code>.rei</code> and <code>.mli</code> are excluded.</p>\n<h3 id="module"><a href="#module" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>module</code></h3>\n<p>To specify bucklescript output type for rollup to consume.</p>\n<p><strong>Note: Please check the <a href="#caveats">Caveats</a> section</strong></p>\n<div class="redex-codeblock"><pre class="hljs lang-javascript"><code>...\n\nplugins: [\n  bucklescript({\n    <span class="hljs-keyword">module</span>: <span class="hljs-symbol">\'es6\'</span>\n  })\n]</code></pre></div>\n<h3 id="insource"><a href="#insource" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>inSource</code></h3>\n<p>To use bs-loader with <a href="https://bucklescript.github.io/bucklescript/Manual.html#_in_source_build_support_since_1_9_0">bsb\'s in-souce builds</a>,\nadd the <code>inSource</code> option to your loader config:</p>\n<div class="redex-codeblock"><pre class="hljs lang-javascript"><code>...\n\nplugins: [\n  bucklescript({\n    <span class="hljs-keyword">in</span>Source: <span class="hljs-literal">false</span>\n  })\n]</code></pre></div>\n<h3 id="cwd"><a href="#cwd" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>cwd</code></h3>\n<p>This option specifies what directory to run <code>bsb</code> from.</p>\n<div class="redex-codeblock"><pre class="hljs lang-javascript"><code>...\n\nplugins: [\n  bucklescript({\n    cwd: <span class="hljs-symbol">\'path</span>/<span class="hljs-keyword">to</span>/dir\'\n  })\n]</code></pre></div>\n<h3 id="showwarnings"><a href="#showwarnings" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>showWarnings</code></h3>\n<p>Controls whether <code>bsb</code> compile warnings are shown. Defaults to <code>true</code>.</p>\n<div class="redex-codeblock"><pre class="hljs lang-javascript"><code>...\n\nplugins: [\n  bucklescript({\n    showWarnings: <span class="hljs-literal">true</span>\n  })\n]</code></pre></div>\n<h3 id="includestandardlibrary"><a href="#includestandardlibrary" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>includeStandardLibrary</code></h3>\n<p><strong>Note: This is an advance feature and may not work as intended</strong>\nBucklescript comes with OCaml standard library complied to javascript.\nChoose whether to bundle functions from standard library.\nDefaults to <code>true</code>.</p>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<p>Check the <a href="https://github.com/shrynx/rollup-plugin-bucklescript/tree/master/examples">examples folder</a> in the github repo.</p>\n<h2 id="caveats"><a href="#caveats" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Caveats</h2>\n<p>Please use <code>es6</code> for <code>module</code> option as rollup works only with es modules.\nBut this breaks integration with with react,\nthought it can be easily solved by following the helpful error message provided by rollup.</p>\n<p>or check the <a href="https://github.com/shrynx/rollup-plugin-bucklescript/tree/master/examples/react">react example</a> folder.</p>\n<h2 id="acknowledgement"><a href="#acknowledgement" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Acknowledgement</h2>\n<ul>\n<li><a href="https://github.com/reasonml-community/bs-loader">bs-loader</a> - A webpack plugin for bucklescript,\nfor providing <code>bsb-js</code> and <code>read-bsconfig</code>.</li>\n<li>Reason team at facebook and all the project contributors for making ReasonML</li>\n<li><a href="https://github.com/bobzhang">@bobzhang</a> and all contributors of bucklescript.</li>\n</ul>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>MIT</p>\n',homepageUrl:"https://github.com/shrynx/rollup-plugin-bucklescript#readme",repositoryUrl:"https://github.com/shrynx/rollup-plugin-bucklescript",npmUrl:"https://www.npmjs.com/package/rollup-plugin-bucklescript",issuesUrl:"https://github.com/shrynx/rollup-plugin-bucklescript/issues",slug:"/package/rollup-plugin-bucklescript"}},pathContext:{id:"rollup-plugin-bucklescript"}}}});
//# sourceMappingURL=path---package-rollup-plugin-bucklescript-b4dd6d170e8a76d6c3eb.js.map