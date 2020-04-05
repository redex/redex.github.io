webpackJsonp([0xecc11f1c67d6],{1214:function(s,a){s.exports={data:{package:{type:"published",id:"bs-enzyme",name:"bs-enzyme",version:"0.6.1",category:"binding",flags:[],platforms:["node"],description:"Bucklescript bindings for Enzyme",keywords:["react","testing"],license:"MIT",updated:"2020-04-01T00:02:03.293Z",stars:34,score:.4344277508721847,quality:.8546448958966498,popularity:.09073118361678252,maintenance:.41793819382090264,readme:'<h1 id="bs-enzyme"><a href="#bs-enzyme" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-enzyme</h1>\n<p><a href="https://travis-ci.org/rhysforyou/bs-enzyme"><img src="https://img.shields.io/travis/rhysforyou/bs-enzyme.svg?style=flat-square" alt="Travis"></a> <a href="https://www.npmjs.com/package/bs-enzyme"><img src="https://img.shields.io/npm/v/bs-enzyme.svg?style=flat-square" alt="npm (scoped)"></a></p>\n<p><a href="https://github.com/bucklescript/bucklescript">BuckleScript</a> bindings for <a href="https://github.com/airbnb/enzyme">Enzyme</a></p>\n<p>:construction: <strong>Note:</strong> This package is still <em>very</em> experimental. Expect\nfrequent, breaking changes right up until 1.0 is released. :construction:</p>\n<hr>\n<h2 id="status"><a href="#status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Status</h2>\n<ul>\n<li>Most of the <code>shallow</code> and <code>mount</code> APIs are implemented</li>\n<li>The <code>simulate</code> method is currently wrapped in multiple <code>simulateN</code> functions\nto handle mixed variadic arguments</li>\n<li>The <code>render</code> API isn\'t implemented</li>\n<li>I haven\'t extensively tested most of the functions, so some might be broken</li>\n</ul>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<p>Using the excellent <a href="https://github.com/reasonml-community/bs-jest">bs-jest</a> and Airbnb\'s official <a href="https://github.com/airbnb/enzyme">enzyme-adapter-react-16</a>.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">Jest</span>;\n\n<span class="hljs-type">Enzyme</span>.configureEnzyme(<span class="hljs-type">Enzyme</span>.react_16_adapter());\n\n<span class="hljs-keyword">let</span> setup = (~title=<span class="hljs-string">"Test"</span>, ~handleClick=(_evt) =&gt; (), ()) =&gt;\n  <span class="hljs-type">Enzyme</span>.shallow(&lt;<span class="hljs-type">DummyComponent</span> title handleClick /&gt;);\n\n<span class="hljs-keyword">let</span> header = (wrapper) =&gt;\nwrapper\n  |&gt; <span class="hljs-type">Enzyme</span>.<span class="hljs-type">Shallow</span>.<span class="hljs-built_in">find</span>(<span class="hljs-string">"#header"</span>)\n  |&gt; <span class="hljs-type">Enzyme</span>.<span class="hljs-type">Shallow</span>.first;\n\n<span class="hljs-keyword">let</span> listItems = (wrapper) =&gt;\n  wrapper\n  |&gt; <span class="hljs-type">Enzyme</span>.<span class="hljs-type">Shallow</span>.<span class="hljs-built_in">find</span>(<span class="hljs-string">"#list"</span>)\n  |&gt; <span class="hljs-type">Enzyme</span>.<span class="hljs-type">Shallow</span>.children;\n\ndescribe(<span class="hljs-string">"DummyComponent"</span>, () =&gt; {\n  open <span class="hljs-type">Expect</span>;\n\n  test(<span class="hljs-string">"renders a #header"</span>, () =&gt; {\n    <span class="hljs-keyword">let</span> title = <span class="hljs-string">"A test title"</span>;\n    <span class="hljs-keyword">let</span> wrapper = setup(~title, ());\n    <span class="hljs-keyword">let</span> headerNodes = wrapper |&gt; header;\n    expect(<span class="hljs-type">Enzyme</span>.<span class="hljs-type">Shallow</span>.length(headerNodes)) |&gt; toBe(<span class="hljs-number">1</span>)\n  });\n\n  test(<span class="hljs-string">"has the expected h1 tag in the #header"</span>, () =&gt; {\n    <span class="hljs-keyword">let</span> title = <span class="hljs-string">"A test title"</span>;\n    <span class="hljs-keyword">let</span> wrapper = setup(~title, ());\n    <span class="hljs-keyword">let</span> expectedNode = &lt;h1&gt; (<span class="hljs-type">ReasonReact</span>.stringToElement(title)) &lt;/h1&gt;;\n    expect(<span class="hljs-type">Enzyme</span>.<span class="hljs-type">Shallow</span>.<span class="hljs-built_in">contains</span>(expectedNode, wrapper)) |&gt; toBe(<span class="hljs-literal">true</span>)\n  });\n\n  test(<span class="hljs-string">"initially has its `clicked` state set to false"</span>, () =&gt; {\n    <span class="hljs-keyword">let</span> wrapper = setup();\n    <span class="hljs-keyword">let</span> {clicked}: <span class="hljs-type">DummyComponent</span>.state = <span class="hljs-type">Enzyme</span>.<span class="hljs-type">Shallow</span>.state(wrapper);\n    expect(clicked) |&gt; toBe(<span class="hljs-literal">false</span>)\n  });\n\n  test(<span class="hljs-string">"folds left properly"</span>, () =&gt; {\n    <span class="hljs-keyword">let</span> items = setup() |&gt; listItems;\n    <span class="hljs-keyword">let</span> result = <span class="hljs-type">Enzyme</span>.<span class="hljs-type">Shallow</span>.foldLeft((text, node) =&gt; text ++ <span class="hljs-type">Enzyme</span>.<span class="hljs-type">Shallow</span>.text(node), <span class="hljs-string">""</span>, items);\n    expect(result) |&gt; toBe(<span class="hljs-string">"OneTwoThree"</span>)\n  });\n\n  test(<span class="hljs-string">"maps properly"</span>, () =&gt; {\n    <span class="hljs-keyword">let</span> items = setup() |&gt; listItems;\n    <span class="hljs-keyword">let</span> result = <span class="hljs-type">Enzyme</span>.<span class="hljs-type">Shallow</span>.<span class="hljs-built_in">map</span>(node =&gt; <span class="hljs-type">Enzyme</span>.<span class="hljs-type">Shallow</span>.text(node), items);\n    expect(result) |&gt; toEqual([|<span class="hljs-string">"One"</span>, <span class="hljs-string">"Two"</span>, <span class="hljs-string">"Three"</span>|])\n  });\n});</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Jest</span>\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">Enzyme</span>.configureEnzyme (<span class="hljs-type">Enzyme</span>.react_16_adapter <span class="hljs-literal">()</span>)\n<span class="hljs-keyword">let</span> setup ?(title= <span class="hljs-string">"Test"</span>)  ?(handleClick= <span class="hljs-keyword">fun</span> _evt  -&gt; <span class="hljs-literal">()</span>)  <span class="hljs-literal">()</span> =\n  <span class="hljs-type">Enzyme</span>.shallow\n    ((<span class="hljs-type">DummyComponent</span>.createElement ~title ~handleClick ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)\n    [@<span class="hljs-type">JSX</span> ])\n<span class="hljs-keyword">let</span> header wrapper =\n  (wrapper |&gt; (<span class="hljs-type">Enzyme</span>.<span class="hljs-type">Shallow</span>.find <span class="hljs-string">"#header"</span>)) |&gt; <span class="hljs-type">Enzyme</span>.<span class="hljs-type">Shallow</span>.first\n<span class="hljs-keyword">let</span> listItems wrapper =\n  (wrapper |&gt; (<span class="hljs-type">Enzyme</span>.<span class="hljs-type">Shallow</span>.find <span class="hljs-string">"#list"</span>)) |&gt; <span class="hljs-type">Enzyme</span>.<span class="hljs-type">Shallow</span>.children\n<span class="hljs-keyword">let</span> _ =\n  describe <span class="hljs-string">"DummyComponent"</span>\n    (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n       <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Expect</span> <span class="hljs-keyword">in</span>\n         test <span class="hljs-string">"renders a #header"</span>\n           (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n              <span class="hljs-keyword">let</span> title = <span class="hljs-string">"A test title"</span> <span class="hljs-keyword">in</span>\n              <span class="hljs-keyword">let</span> wrapper = setup ~title <span class="hljs-literal">()</span> <span class="hljs-keyword">in</span>\n              <span class="hljs-keyword">let</span> headerNodes = wrapper |&gt; header <span class="hljs-keyword">in</span>\n              (expect (<span class="hljs-type">Enzyme</span>.<span class="hljs-type">Shallow</span>.length headerNodes)) |&gt; (toBe <span class="hljs-number">1</span>));\n         test <span class="hljs-string">"has the expected h1 tag in the #header"</span>\n           (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n              <span class="hljs-keyword">let</span> title = <span class="hljs-string">"A test title"</span> <span class="hljs-keyword">in</span>\n              <span class="hljs-keyword">let</span> wrapper = setup ~title <span class="hljs-literal">()</span> <span class="hljs-keyword">in</span>\n              <span class="hljs-keyword">let</span> expectedNode =\n                ((h1 ~children:[<span class="hljs-type">ReasonReact</span>.stringToElement title] <span class="hljs-literal">()</span>)\n                [@<span class="hljs-type">JSX</span> ]) <span class="hljs-keyword">in</span>\n              (expect (<span class="hljs-type">Enzyme</span>.<span class="hljs-type">Shallow</span>.contains expectedNode wrapper)) |&gt;\n                (toBe <span class="hljs-literal">true</span>));\n         test <span class="hljs-string">"initially has its `clicked` state set to false"</span>\n           (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n              <span class="hljs-keyword">let</span> wrapper = setup <span class="hljs-literal">()</span> <span class="hljs-keyword">in</span>\n              <span class="hljs-keyword">let</span> ({ clicked } :<span class="hljs-type">DummyComponent</span>.state)=\n                <span class="hljs-type">Enzyme</span>.<span class="hljs-type">Shallow</span>.state wrapper <span class="hljs-keyword">in</span>\n              (expect clicked) |&gt; (toBe <span class="hljs-literal">false</span>));\n         test <span class="hljs-string">"folds left properly"</span>\n           (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n              <span class="hljs-keyword">let</span> items = (setup <span class="hljs-literal">()</span>) |&gt; listItems <span class="hljs-keyword">in</span>\n              <span class="hljs-keyword">let</span> result =\n                <span class="hljs-type">Enzyme</span>.<span class="hljs-type">Shallow</span>.foldLeft\n                  (<span class="hljs-keyword">fun</span> text  -&gt;\n                     <span class="hljs-keyword">fun</span> node  -&gt; text ^ (<span class="hljs-type">Enzyme</span>.<span class="hljs-type">Shallow</span>.text node)) <span class="hljs-string">""</span> items <span class="hljs-keyword">in</span>\n              (expect result) |&gt; (toBe <span class="hljs-string">"OneTwoThree"</span>));\n         test <span class="hljs-string">"maps properly"</span>\n           (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n              <span class="hljs-keyword">let</span> items = (setup <span class="hljs-literal">()</span>) |&gt; listItems <span class="hljs-keyword">in</span>\n              <span class="hljs-keyword">let</span> result =\n                <span class="hljs-type">Enzyme</span>.<span class="hljs-type">Shallow</span>.map (<span class="hljs-keyword">fun</span> node  -&gt; <span class="hljs-type">Enzyme</span>.<span class="hljs-type">Shallow</span>.text node)\n                  items <span class="hljs-keyword">in</span>\n              (expect result) |&gt; (toEqual [|<span class="hljs-string">"One"</span>;<span class="hljs-string">"Two"</span>;<span class="hljs-string">"Three"</span>|])))</code></pre>\n      </div>\n    </div>\n  \n<p>See more examples in the project\'s\n<a href="https://github.com/rpowelll/bs-enzyme/tree/master/src/__tests__">tests directory</a>.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>With npm:</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install --save-dev bs-enzyme enzyme-adapter-react-<span class="hljs-number">16</span></code></pre></div>\n<p>With Yarn:</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>yarn add --dev bs-enzyme enzyme-adapter-react-<span class="hljs-number">16</span></code></pre></div>\n<p>Then add <code>bs-enzyme</code> to <code>bs-dev-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  ...\n  <span class="hljs-string">"bs-dev-dependencies"</span>: [<span class="hljs-string">"bs-enzyme"</span>]\n}</code></pre></div>\n<p><strong>Note:</strong> If you\'re using this package with <code>bs-jest</code>, be sure to list\n<code>bs-enzyme</code> first in your dependencies.</p>\n',homepageUrl:"https://github.com/rpowelll/bs-enzyme#readme",repositoryUrl:"https://github.com/rpowelll/bs-enzyme",npmUrl:"https://www.npmjs.com/package/bs-enzyme",issuesUrl:"https://github.com/rpowelll/bs-enzyme/issues",slug:"/package/bs-enzyme"}},pathContext:{id:"bs-enzyme"}}}});
//# sourceMappingURL=path---package-bs-enzyme-774cbd043bd498a73254.js.map