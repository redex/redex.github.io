webpackJsonp([0x68d5b716ab63],{1271:function(s,a){s.exports={data:{package:{type:"published",id:"bs-react-dropdown",name:"bs-react-dropdown",version:"1.0.4",category:"binding",flags:[],platforms:["browser"],description:"BuckleScript binding to react-dropdown",keywords:["react","ui"],license:"MIT",updated:"2020-08-29T03:57:37.530Z",stars:1,score:.36364289930782767,quality:.50251989311091,popularity:.018639237906646507,maintenance:.589609137449224,readme:'<p>This is <a href="https://bucklescript.github.io/">Bucklescript</a> bindings for <a href="https://github.com/fraserxu/react-dropdown">react-dropdown</a>.</p>\n<h1 id="install-npm"><a href="#install-npm" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install, <a href="https://www.npmjs.com/package/bs-react-dropdown">npm</a></h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install --save bs-react-dropdown</code></pre></div>\n<h1 id="setup"><a href="#setup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setup</h1>\n<p>Add bs-react-dropdown to <code>bs-depenencies</code> in your <code>bsconfig.json</code>!</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>{\n  <span class="hljs-comment">/* ... */</span>\n  <span class="hljs-string">"bs-dependencies"</span>: [\n    <span class="hljs-string">"bs-react-dropdown"</span>\n  ],\n  <span class="hljs-comment">/* ... */</span>\n}</code></pre></div>\n<h1 id="dropdown-option-type"><a href="#dropdown-option-type" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dropdown option type</h1>\n<div class="redex-codeblock"><pre class="hljs lang-re"><code><span class="hljs-keyword">type</span> dropdownOption = {\n  label: <span class="hljs-built_in">string</span>,\n  <span class="hljs-keyword">value</span>: <span class="hljs-built_in">string</span>,\n  className: option(<span class="hljs-built_in">string</span>),\n};</code></pre></div>\n<h1 id="basic-usage"><a href="#basic-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic usage</h1>\n<div class="redex-codeblock"><pre class="hljs lang-re"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Dropdown</span>;\n\n<span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent(__MODULE__);\n\n<span class="hljs-keyword">let</span> options: dropdownOptions = [|\n  {label: <span class="hljs-string">"label1"</span>, <span class="hljs-keyword">value</span>: <span class="hljs-string">"value1"</span>, className: <span class="hljs-type">Some</span>(<span class="hljs-string">"class1"</span>)},\n  {label: <span class="hljs-string">"label2"</span>, <span class="hljs-keyword">value</span>: <span class="hljs-string">"value2"</span>, className: <span class="hljs-type">Some</span>(<span class="hljs-string">"class2"</span>)},\n|];\n\n<span class="hljs-keyword">let</span> make = _children =&gt; {\n  ...component,\n  render: self =&gt; {\n    &lt;<span class="hljs-type">Dropdown</span> options /&gt;;\n  },\n};</code></pre></div>\n<p>Check reducer component <a href="https://github.com/ixzzd/bs-react-dropdown/tree/master/examples/reducer_component.re">example</a></p>\n',homepageUrl:"https://github.com/ixzzd/bs-react-dropdown#readme",repositoryUrl:"https://github.com/ixzzd/bs-react-dropdown",npmUrl:"https://www.npmjs.com/package/bs-react-dropdown",issuesUrl:null,slug:"/package/bs-react-dropdown"}},pathContext:{id:"bs-react-dropdown"}}}});
//# sourceMappingURL=path---package-bs-react-dropdown-a528347ae797cc161be8.js.map