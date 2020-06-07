webpackJsonp([0xe1cf724d573a],{1283:function(s,a){s.exports={data:{package:{type:"published",id:"bs-react-syntax-highlighter",name:"bs-react-syntax-highlighter",version:"0.2.2",category:"binding",flags:[],platforms:["browser"],description:"ReasonML bindings for react-syntax-highlighter library",keywords:["react","ui"],license:"MIT",updated:"2020-06-03T01:03:51.659Z",stars:3,score:.6181775663843863,quality:.8388257772299876,popularity:.04722900753523164,maintenance:.9999990873658826,readme:'<h1 id="bs-react-syntax-highlighter"><a href="#bs-react-syntax-highlighter" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-react-syntax-highlighter</h1>\n<p><a href="https://travis-ci.com/erykpiast/bs-react-syntax-highlighter"><img src="https://travis-ci.com/erykpiast/bs-react-syntax-highlighter.svg?branch=master" alt="Build Status"></a>\n<a href="https://david-dm.org/erykpiast/bs-react-syntax-highlighter"><img src="https://david-dm.org/erykpiast/bs-react-syntax-highlighter/status.svg" alt="dependencies Status"></a>\n<a href="https://david-dm.org/erykpiast/bs-react-syntax-highlighter?type=dev"><img src="https://david-dm.org/erykpiast/bs-react-syntax-highlighter/dev-status.svg" alt="devDependencies Status"></a>\n<a href="https://david-dm.org/erykpiast/bs-react-syntax-highlighter?type=peer"><img src="https://david-dm.org/erykpiast/bs-react-syntax-highlighter/peer-status.svg" alt="peerDependencies Status"></a>\n<a href="https://greenkeeper.io/"><img src="https://badges.greenkeeper.io/erykpiast/bs-react-syntax-highlighter.svg" alt="Greenkeeper badge"></a></p>\n<p>ReasonML bindings for <a href="https://github.com/conorhastings/react-syntax-highlighter">react-syntax-highlighter</a> library.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm i --save bs-react-syntax-highlighter react-syntax-highlighter</code></pre></div>\n<p>Then add <code>bs-react-syntax-highlighter</code> as a dependency to <code>bsconfig.json</code>.</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>Unlike in the JavaScript counterpart, there is no default highlighter - you have to choose Hljs or Prism explicitly.</p>\n<div class="redex-codeblock"><pre class="hljs lang-reasonml"><code>[@react.component]\n<span class="hljs-keyword">let</span> make = <span class="hljs-literal">()</span> =&gt; {\n  &lt;<span class="hljs-type">ReactSyntaxHighlighter</span>.<span class="hljs-type">Prism</span> style={<span class="hljs-type">ReactSyntaxHighlighter</span>.<span class="hljs-type">Prism</span>.<span class="hljs-type">Style</span>.darcula}&gt;\n    {<span class="hljs-string">"A code to highlight"</span>}\n  &lt;/<span class="hljs-type">ReactSyntaxHighlighter</span>.<span class="hljs-type">Prism</span>&gt;;\n};</code></pre></div>\n<div class="redex-codeblock"><pre class="hljs lang-reasonml"><code>[@react.component]\n<span class="hljs-keyword">let</span> make = <span class="hljs-literal">()</span> =&gt; {\n  &lt;<span class="hljs-type">ReactSyntaxHighlighter</span>.<span class="hljs-type">Hljs</span> language={<span class="hljs-tag">`JavaScript</span>}&gt;\n    {<span class="hljs-string">"const foo = () =&gt; {};"</span>}\n  &lt;/<span class="hljs-type">ReactSyntaxHighlighter</span>.<span class="hljs-type">Hljs</span>&gt;;\n};</code></pre></div>\n<h3 id="props-spread"><a href="#props-spread" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props spread</h3>\n<p>In JavaScript, there is a possibility to put any property you like on the root element rendered by the component,\nby simply putting it on a component. It\'s called "props spread". <code>react-syntax-highlighter</code> supports that pattern as well.\nReasonML <a href="https://github.com/reasonml/reason-react/blob/master/docs/props-spread.md">simply can\'t do it</a>.</p>\n<p>Quite nice escape hatch is wrapping the component you wish to spread props on in another\ncomponent (HOC or High-Order Component), which will inject all passed properties to its child in a not type-safe, but quite an efficient way. <a href="https://twitter.com/yawaramin/status/1190120664830816256">source</a>. There is a runtime cost for this operation, though, so I\'ve decided to not include such code in this library. Pay the cost only when you need to.</p>\n<div class="redex-codeblock"><pre class="hljs lang-reasonml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">Spread</span> = {\n  [@react.component]\n  <span class="hljs-keyword">let</span> make = (~props, ~children) =&gt;\n    <span class="hljs-type">ReasonReact</span>.cloneElement(children, ~props, <span class="hljs-literal">[||]</span>);\n};\n\n&lt;<span class="hljs-type">Spread</span> props={<span class="hljs-string">"id"</span>: <span class="hljs-string">"foobar"</span>}&gt;\n  &lt;<span class="hljs-type">ReactSyntaxHighlighter</span>.<span class="hljs-type">Hljs</span> language={<span class="hljs-tag">`JavaScript</span>}&gt;\n    {<span class="hljs-string">"const foo = () =&gt; {};"</span>}\n  &lt;/<span class="hljs-type">ReactSyntaxHighlighter</span>.<span class="hljs-type">Hljs</span>&gt;;\n&lt;/<span class="hljs-type">Spread</span>&gt;</code></pre></div>\n<p>For convenience I\'ve included just one such a generic property in component bindings: <code>className</code>.</p>\n<h3 id="jsx-2"><a href="#jsx-2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX 2</h3>\n<p>The package provides fallback for projects using older version of JSX syntax.</p>\n<div class="redex-codeblock"><pre class="hljs lang-reasonml"><code>[@react.component]\n<span class="hljs-keyword">let</span> make = <span class="hljs-literal">()</span> =&gt; {\n  &lt;<span class="hljs-type">ReactSyntaxHighlighter</span>.<span class="hljs-type">Hljs</span>.<span class="hljs-type">Jsx2</span> language={<span class="hljs-tag">`JavaScript</span>}&gt;\n    ...{<span class="hljs-string">"const foo = () =&gt; {};"</span>}\n  &lt;/<span class="hljs-type">ReactSyntaxHighlighter</span>.<span class="hljs-type">Hljs</span>.<span class="hljs-type">Jsx2</span>&gt;;\n};</code></pre></div>\n<h2 id="notes"><a href="#notes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Notes</h2>\n<p>An <strong>async build</strong> and a <strong>light build</strong> are not currently supported. PRs are welcome!</p>\n',homepageUrl:"https://github.com/erykpiast/bs-react-syntax-highlighter#readme",repositoryUrl:"https://github.com/erykpiast/bs-react-syntax-highlighter",npmUrl:"https://www.npmjs.com/package/bs-react-syntax-highlighter",issuesUrl:"https://github.com/erykpiast/bs-react-syntax-highlighter/issues",slug:"/package/bs-react-syntax-highlighter"}},pathContext:{id:"bs-react-syntax-highlighter"}}}});
//# sourceMappingURL=path---package-bs-react-syntax-highlighter-67d8f8219d3ef79aaa75.js.map