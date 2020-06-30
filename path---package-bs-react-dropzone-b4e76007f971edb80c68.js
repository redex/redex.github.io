webpackJsonp([0xf99200485e6],{1270:function(s,e){s.exports={data:{package:{type:"published",id:"bs-react-dropzone",name:"bs-react-dropzone",version:"0.5.3",category:"binding",flags:[],platforms:["browser"],description:"ReasonML bindings for react-dropzone library",keywords:["react","ui"],license:"MIT",updated:"2020-06-03T01:04:12.928Z",stars:4,score:.6189064608822346,quality:.838868129543539,popularity:.04932793255094791,maintenance:.9999464160752605,readme:'<h1 id="bs-react-dropzone"><a href="#bs-react-dropzone" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-react-dropzone</h1>\n<p><a href="https://travis-ci.com/erykpiast/bs-react-dropzone"><img src="https://travis-ci.com/erykpiast/bs-react-dropzone.svg?branch=master" alt="Build Status"></a>\n<a href="https://david-dm.org/erykpiast/bs-react-dropzone"><img src="https://david-dm.org/erykpiast/bs-react-dropzone/status.svg" alt="dependencies Status"></a>\n<a href="https://david-dm.org/erykpiast/bs-react-dropzone?type=dev"><img src="https://david-dm.org/erykpiast/bs-react-dropzone/dev-status.svg" alt="devDependencies Status"></a>\n<a href="https://david-dm.org/erykpiast/bs-react-dropzone?type=peer"><img src="https://david-dm.org/erykpiast/bs-react-dropzone/peer-status.svg" alt="peerDependencies Status"></a>\n<a href="https://greenkeeper.io/"><img src="https://badges.greenkeeper.io/erykpiast/bs-react-dropzone.svg" alt="Greenkeeper badge"></a></p>\n<p>ReasonML bindings for <a href="https://github.com/react-dropzone/react-dropzone">react-dropzone</a> library.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm i --save bs-react-dropzone react-dropzone</code></pre></div>\n<p>Then add <code>bs-react-dropzone</code> as a dependency to <code>bsconfig.json</code>.</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<div class="redex-codeblock"><pre class="hljs lang-reasonml"><code>[@react.component]\n<span class="hljs-keyword">let</span> make = <span class="hljs-literal">()</span> =&gt; {\n  &lt;<span class="hljs-type">ReactDropzone</span>\n    accept={<span class="hljs-type">ReactDropzone</span>.<span class="hljs-type">Single</span>(<span class="hljs-string">"application/json"</span>)}\n    multiple=<span class="hljs-literal">true</span>\n    onDrop={(acceptedFiles, _) =&gt;\n      <span class="hljs-type">Js</span>.log((<span class="hljs-string">"these files were dropped"</span>, acceptedFiles))\n    }&gt;\n    {({getInputProps, getRootProps}) =&gt; {\n      <span class="hljs-keyword">let</span> inputProps = getInputProps<span class="hljs-literal">()</span>;\n      <span class="hljs-keyword">let</span> rootProps = getRootProps<span class="hljs-literal">()</span>;\n\n      &lt;div\n        onBlur={rootProps.onBlur}\n        onDragEnter={rootProps.onDragEnter}\n        onDragLeave={rootProps.onDragLeave}\n        onDragOver={rootProps.onDragOver}\n        onDragStart={rootProps.onDragStart}\n        onDrop={rootProps.onDrop}\n        onFocus={rootProps.onFocus}\n        onKeyDown={rootProps.onKeyDown}\n        <span class="hljs-built_in">ref</span>={<span class="hljs-type">ReactDOMRe</span>.<span class="hljs-type">Ref</span>.callbackDomRef(rootProps.<span class="hljs-built_in">ref</span>)}\n        tabIndex={rootProps.tabIndex}&gt;\n        &lt;div&gt; {<span class="hljs-string">"Drop files here"</span> |&gt; <span class="hljs-type">React</span>.<span class="hljs-built_in">string</span>} &lt;/div&gt;\n        &lt;input\n          autoComplete={inputProps.autoComplete}\n          onChange={inputProps.onChange}\n          onClick={inputProps.onClick}\n          <span class="hljs-built_in">ref</span>={<span class="hljs-type">ReactDOMRe</span>.<span class="hljs-type">Ref</span>.callbackDomRef(inputProps.<span class="hljs-built_in">ref</span>)}\n          style={inputProps.style}\n          tabIndex={inputProps.tabIndex}\n          type_={inputProps.type_}\n          multiple={inputProps.multiple}\n        /&gt;\n      &lt;/div&gt;;\n    }}\n  &lt;/<span class="hljs-type">ReactDropzone</span>&gt;;\n};</code></pre></div>\n<h3 id="jsx-2"><a href="#jsx-2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX 2</h3>\n<p>The package provides fallback for projects using older version of JSX syntax.</p>\n<div class="redex-codeblock"><pre class="hljs lang-reasonml"><code><span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent(<span class="hljs-string">"Demo"</span>);\n\n<span class="hljs-keyword">let</span> make = <span class="hljs-literal">()</span> =&gt; {\n  ...component,\n  render: (_self) =&gt; {\n    &lt;<span class="hljs-type">ReactDropzone</span>.<span class="hljs-type">Jsx2</span>\n      accept={<span class="hljs-type">ReactDropzone</span>.<span class="hljs-type">Single</span>(<span class="hljs-string">"application/json"</span>)}\n      multiple=<span class="hljs-literal">true</span>\n      onDrop={(acceptedFiles, _) =&gt;\n        <span class="hljs-type">Js</span>.log((<span class="hljs-string">"these files were dropped"</span>, acceptedFiles))\n      }&gt;\n      ...{({getInputProps, getRootProps}) =&gt; {\n        <span class="hljs-keyword">let</span> inputProps = getInputProps<span class="hljs-literal">()</span>;\n        <span class="hljs-keyword">let</span> rootProps = getRootProps<span class="hljs-literal">()</span>;\n\n        &lt;div\n          onBlur={rootProps.onBlur}\n          onDragEnter={rootProps.onDragEnter}\n          onDragLeave={rootProps.onDragLeave}\n          onDragOver={rootProps.onDragOver}\n          onDragStart={rootProps.onDragStart}\n          onDrop={rootProps.onDrop}\n          onFocus={rootProps.onFocus}\n          onKeyDown={rootProps.onKeyDown}\n          <span class="hljs-built_in">ref</span>={rootProps.<span class="hljs-built_in">ref</span>}\n          tabIndex={rootProps.tabIndex}&gt;\n          &lt;div&gt; {<span class="hljs-string">"Drop files here"</span> |&gt; <span class="hljs-type">React</span>.<span class="hljs-built_in">string</span>} &lt;/div&gt;\n          &lt;input\n            autoComplete={inputProps.autoComplete}\n            onChange={inputProps.onChange}\n            onClick={inputProps.onClick}\n            <span class="hljs-built_in">ref</span>={inputProps.<span class="hljs-built_in">ref</span>}\n            style={inputProps.style}\n            tabIndex={inputProps.tabIndex}\n            type_={inputProps.type_}\n            multiple={inputProps.multiple}\n          /&gt;\n        &lt;/div&gt;;\n      }}\n    &lt;/<span class="hljs-type">ReactDropzone</span>.<span class="hljs-type">Jsx2</span>&gt;;\n  }\n};</code></pre></div>\n<h3 id="hooks"><a href="#hooks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Hooks</h3>\n<p>Hooks are not supported right now. There is <a href="https://github.com/erykpiast/bs-react-dropzone/issues/3">an issue open for that</a>. PRs are welcome!</p>\n',homepageUrl:"https://github.com/erykpiast/bs-react-dropzone#readme",repositoryUrl:"https://github.com/erykpiast/bs-react-dropzone",npmUrl:"https://www.npmjs.com/package/bs-react-dropzone",issuesUrl:"https://github.com/erykpiast/bs-react-dropzone/issues",slug:"/package/bs-react-dropzone"}},pathContext:{id:"bs-react-dropzone"}}}});
//# sourceMappingURL=path---package-bs-react-dropzone-b4e76007f971edb80c68.js.map