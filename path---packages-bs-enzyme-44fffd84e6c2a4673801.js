webpackJsonp([76067603543503],{1053:function(s,e){s.exports={data:{package:{id:"bs-enzyme",score:.6033607788750995,name:"bs-enzyme",version:"0.3.0",description:"Bucklescript bindings for Enzyme",keywords:["bucklescript","testing","enzyme"],license:"MIT",updated:"2018-01-14T17:48:45.441Z",stars:15,type:"published",quality:.7861546909568331,popularity:.05023764681286326,maintenance:.9998034148672785,readme:'<h1 id="bs-enzyme---bucklescript-bindings-for-enzyme-npm-scoped"><a href="#bs-enzyme---bucklescript-bindings-for-enzyme-npm-scoped" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-enzyme - <a href="https://github.com/bucklescript/bucklescript">BuckleScript</a> bindings for <a href="https://github.com/airbnb/enzyme">Enzyme</a> <a href="https://www.npmjs.com/package/bs-enzyme"><img src="https://img.shields.io/npm/v/bs-enzyme.svg?style=flat-square" alt="npm (scoped)"></a></h1>\n<p>:construction: <strong>Note:</strong> This package is still <em>very</em> experimental. Expect\nfrequent, breaking changes right up until 1.0 is released. :construction:</p>\n<hr>\n<h2 id="status"><a href="#status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Status</h2>\n<ul>\n<li>Most of the <code>shallow</code> API is implemented</li>\n<li>The <code>simulate</code> method is currently wrapped in multiple <code>simulateN</code> functions\nto handle mixed variadic arguments</li>\n<li>Neither the <code>render</code> nor <code>mount</code> APIs are implemented</li>\n<li>I haven\'t extensively tested most of the functions, so some might be broken</li>\n</ul>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<p>Using the excellent <a href="https://github.com/reasonml-community/bs-jest">bs-jest</a></p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code>open <span class="hljs-type">Jest</span>;\n\n<span class="hljs-type">Enzyme</span>.configureEnzyme(<span class="hljs-type">Enzyme</span>.react_16_adapter());\n\n<span class="hljs-keyword">let</span> setup = (~title=<span class="hljs-string">"Test"</span>, ~handleClick=(_evt) =&gt; (), ()) =&gt;\n  <span class="hljs-type">Enzyme</span>.shallow(&lt;<span class="hljs-type">DummyComponent</span> title handleClick /&gt;);\n\n<span class="hljs-keyword">let</span> header = (wrapper) =&gt;\nwrapper\n  |&gt; <span class="hljs-type">Enzyme</span>.<span class="hljs-built_in">find</span>(<span class="hljs-string">"#header"</span>)\n  |&gt; <span class="hljs-type">Enzyme</span>.first;\n\n<span class="hljs-keyword">let</span> listItems = (wrapper) =&gt;\n  wrapper\n  |&gt; <span class="hljs-type">Enzyme</span>.<span class="hljs-built_in">find</span>(<span class="hljs-string">"#list"</span>)\n  |&gt; <span class="hljs-type">Enzyme</span>.children;\n\ndescribe(<span class="hljs-string">"DummyComponent"</span>, () =&gt; {\n  open <span class="hljs-type">Expect</span>;\n\n  test(<span class="hljs-string">"renders a #header"</span>, () =&gt; {\n    <span class="hljs-keyword">let</span> title = <span class="hljs-string">"A test title"</span>;\n    <span class="hljs-keyword">let</span> wrapper = setup(~title, ());\n    <span class="hljs-keyword">let</span> headerNodes = wrapper |&gt; header;\n    expect(<span class="hljs-type">Enzyme</span>.length(headerNodes)) |&gt; toBe(<span class="hljs-number">1</span>)\n  });\n\n  test(<span class="hljs-string">"has the expected h1 tag in the #header"</span>, () =&gt; {\n    <span class="hljs-keyword">let</span> title = <span class="hljs-string">"A test title"</span>;\n    <span class="hljs-keyword">let</span> wrapper = setup(~title, ());\n    <span class="hljs-keyword">let</span> expectedNode = &lt;h1&gt; (<span class="hljs-type">ReasonReact</span>.stringToElement(title)) &lt;/h1&gt;;\n    expect(<span class="hljs-type">Enzyme</span>.<span class="hljs-built_in">contains</span>(expectedNode, wrapper)) |&gt; toBe(<span class="hljs-literal">true</span>)\n  });\n\n  test(<span class="hljs-string">"initially has its `clicked` state set to false"</span>, () =&gt; {\n    <span class="hljs-keyword">let</span> wrapper = setup();\n    <span class="hljs-keyword">let</span> {clicked}: <span class="hljs-type">DummyComponent</span>.state = <span class="hljs-type">Enzyme</span>.state(wrapper);\n    expect(clicked) |&gt; toBe(<span class="hljs-literal">false</span>)\n  });\n\n  test(<span class="hljs-string">"folds left properly"</span>, () =&gt; {\n    <span class="hljs-keyword">let</span> items = setup() |&gt; listItems;\n    <span class="hljs-keyword">let</span> result = <span class="hljs-type">Enzyme</span>.foldLeft((text, node) =&gt; text ++ <span class="hljs-type">Enzyme</span>.text(node), <span class="hljs-string">""</span>, items);\n    expect(result) |&gt; toBe(<span class="hljs-string">"OneTwoThree"</span>)\n  });\n});</code></pre>\n      </div>\n<p>See more examples in the project\'s\n<a href="https://github.com/rpowelll/bs-enzyme/tree/master/src/__tests__">tests directory</a>.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-none"><code>$ npm install --save-dev bs-enzyme</code></pre>\n      </div>\n<p>Then add <code>bs-enzyme</code> to <code>bs-dev-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-json"><code>{\n  ...\n  <span class="hljs-string">"bs-dev-dependencies"</span>: [<span class="hljs-string">"bs-enzyme"</span>]\n}</code></pre>\n      </div>\n<p><strong>Note:</strong> If you\'re using this package with <code>bs-jest</code>, be sure to list\n<code>bs-enzyme</code> first in your dependencies.</p>\n',homepageUrl:"https://github.com/rpowelll/bs-enzyme#readme",repositoryUrl:"https://github.com/rpowelll/bs-enzyme",npmUrl:"https://www.npmjs.com/package/bs-enzyme",issuesUrl:"https://github.com/rpowelll/bs-enzyme/issues",slug:"packages/bs-enzyme"}},pathContext:{id:"bs-enzyme"}}}});
//# sourceMappingURL=path---packages-bs-enzyme-44fffd84e6c2a4673801.js.map