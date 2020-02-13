webpackJsonp([83195047078382],{1173:function(e,s){e.exports={data:{package:{type:"published",id:"babel-plugin-bucklescript",name:"babel-plugin-bucklescript",version:"0.5.3",category:"tool",flags:[],platforms:["node"],description:"Write ReasonML and Bucklescript in your existing babel projects",keywords:["development tools"],license:"MIT",updated:"2020-01-04T22:09:22.362Z",stars:78,score:.37073267874829574,quality:.8179541426380392,popularity:.09354640272404521,maintenance:.26458627143848057,readme:'<h1 id="babel-plugin-bucklescript"><a href="#babel-plugin-bucklescript" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>babel-plugin-bucklescript</h1>\n<blockquote>\n<p>Write ReasonML and Bucklescript in your existing babel projects</p>\n</blockquote>\n<p>Functional programming is cool. <a href="https://reasonml.github.io/">ReasonML</a> is cool. <a href="http://bucklescript.github.io/bucklescript/">Bucklescript</a> is cool. But you may not have the opportunity to start a new project or rewrite an existing one in those languages. In that case, <code>babel-plugin-bucklescript</code> is here for you!</p>\n<p><code>babel-plugin-bucklescript</code> lets you easily add ReasonML or Bucklescript projects to your existing codebases via a babel plugin. It relies on existing tools like <code>bs-platform</code> to work. And since <code>bs-platform</code> is amazingly fast, so is this plugin. It works for node-style <code>require</code> calls as well as ES2015 <code>import</code> statements.</p>\n<h1 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h1>\n<p>To get started, add <code>babel-plugin-bucklescript</code> and <code>bs-platform</code> to your project\'s dev dependencies.</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code><span class="hljs-comment"># with good ol\' npm</span>\nnpm install -D babel-plugin-bucklescript bs-platform\n\n<span class="hljs-comment"># with yarn</span>\nyarn add -D babel-plugin-bucklescript bs-platform</code></pre></div>\n<p>After that\'s finished, add the plugin to your babel dependencies. By default, this plugin will assume you\'re using the <code>js</code> package spec. For more information, see the <a href="http://bucklescript.github.io/bucklescript/Manual.html#_a_real_world_example_of_using_code_bsb_code">bucklescript manual on using bsb</a>.</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"plugins"</span>: [<span class="hljs-string">"babel-plugin-bucklescript"</span>]\n}</code></pre></div>\n<p>If, however, you want to compile to <code>amdjs</code> or <code>es6</code>, you can pass that in as an option.</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"plugins"</span>: [\n    [<span class="hljs-string">"babel-plugin-bucklescript"</span>, { <span class="hljs-string">"module"</span>: <span class="hljs-string">"es6"</span> }]\n  ]\n}</code></pre></div>\n<p>Finally, you\'ll want to add a <code>bsconfig.json</code> file in the root of your project. Note that by default, <code>bsb</code> will compile to a folder called <code>lib</code> in the root of your project, no matter where your source code is. Take that into account when building your project. As of right now, this plugin only supports that compilation directory.</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"name"</span>: <span class="hljs-string">"your-cool-project"</span>,\n  <span class="hljs-string">"sources"</span>: [<span class="hljs-string">"src"</span>],\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"reason-react"</span>],\n  <span class="hljs-string">"reason"</span>: {\n    <span class="hljs-string">"react-jsx"</span>: <span class="hljs-number">2</span>\n  },\n  <span class="hljs-string">"package-specs"</span>: [<span class="hljs-string">"commonjs"</span>]\n}</code></pre></div>\n<h1 id="basic-example"><a href="#basic-example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic example</h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-comment">/* In a file called test.re */</span>\n<span class="hljs-keyword">let</span> add x y =&gt; x + y</code></pre></div>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code><span class="hljs-comment">// In a file called index.js</span>\nconst { add } = require(<span class="hljs-string">"./test.re"</span>);\n\nconsole.log(add(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>)) <span class="hljs-comment">// -&gt; 3</span></code></pre></div>\n<h1 id="todo"><a href="#todo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>TODO</h1>\n<ul>\n<li>Full examples</li>\n<li>Tests</li>\n<li>Integration testing with multiple types of projects</li>\n</ul>\n<h1 id="contributing"><a href="#contributing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributing</h1>\n<p>Issues and Pull requests are both welcomed! Prettier is enabled by default as a pre-commit hook, but feel free to add it to your editor.</p>\n<h1 id="code-of-conduct"><a href="#code-of-conduct" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a href="CODE_OF_CONDUCT.md">Code of Conduct</a></h1>\n<p>Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.</p>\n<h1 id="changelog"><a href="#changelog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a href="CHANGELOG.md">Changelog</a></h1>\n<h1 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a href="LICENSE.md">License</a></h1>\n',homepageUrl:"https://github.com/mike-engel/babel-plugin-bucklescript#readme",repositoryUrl:"https://github.com/mike-engel/babel-plugin-bucklescript",npmUrl:"https://www.npmjs.com/package/babel-plugin-bucklescript",issuesUrl:"https://github.com/mike-engel/babel-plugin-bucklescript/issues",slug:"/package/babel-plugin-bucklescript"}},pathContext:{id:"babel-plugin-bucklescript"}}}});
//# sourceMappingURL=path---package-babel-plugin-bucklescript-9e272980d11b053b8380.js.map