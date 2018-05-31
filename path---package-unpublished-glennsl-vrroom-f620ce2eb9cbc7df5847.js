webpackJsonp([23057019282905],{1159:function(s,e){s.exports={data:{package:{id:"unpublished/glennsl/vrroom",stars:4,name:"glennsl/vrroom",version:"0.1.0",category:"library",flags:[],platforms:["browser"],description:"A collection of mostly experimental tools and utilities for effective ReasonReact development",keywords:["react","utilities"],license:"MIT",updated:"2018-01-31T19:53:25.738Z",type:"unpublished",score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="vrroom---turbo-charged-reasonreact"><a href="#vrroom---turbo-charged-reasonreact" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>vRRoom - Turbo-charged ReasonReact!</h1>\n<p>A collection of mostly experimental tools and utilities for effective ReasonReact development.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>Run <code>npm install --save glennsl/vrroom</code> and add <code>vrroom</code> to <code>bs-dependencies</code> in <code>bsconfig.json</code>. </p>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<h4 id="controlmap"><a href="#controlmap" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Control.Map</h4>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* Without Control.Map */</span>\n{\n  <span class="hljs-keyword">switch</span> noItems {\n  | [||] =&gt; &lt;<span class="hljs-type">Item</span> label=<span class="hljs-string">"."</span> /&gt;\n  | items =&gt; \n    items |&gt; <span class="hljs-type">Array</span>.<span class="hljs-built_in">map</span>(name =&gt; &lt;<span class="hljs-type">Item</span> label=name /&gt;)\n          |&gt; <span class="hljs-type">ReasonReact</span>.arrayToElement\n  }  \n}\n\n<span class="hljs-comment">/* With Control.Map */</span>\n&lt;<span class="hljs-type">Map</span> items=noItems empty=&lt;<span class="hljs-type">Item</span> label=<span class="hljs-string">"-"</span>/&gt; &gt;\n  ...(name =&gt; &lt;<span class="hljs-type">Item</span> label=name /&gt;)\n&lt;/<span class="hljs-type">Map</span>&gt;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2122</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h4 id="controlifsome"><a href="#controlifsome" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Control.IfSome</h4>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* Without Control.IfSome */</span>\n{\n  <span class="hljs-keyword">switch</span> maybeError {\n  | <span class="hljs-type">Some</span>(error) =&gt; {error |&gt; text}\n  | <span class="hljs-type">None</span> =&gt; <span class="hljs-type">ReasonReact</span>.nullElement\n  }\n}\n\n<span class="hljs-comment">/* With Control.IfSome */</span>\n&lt;<span class="hljs-type">IfSome</span> option=maybeError&gt;\n  ...(error =&gt; error |&gt; text)\n&lt;/<span class="hljs-type">IfSome</span>&gt;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2122</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h4 id="pure"><a href="#pure" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>pure</h4>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* Without pure */</span>\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">ItemBefore</span> = </span>{\n  <span class="hljs-keyword">let</span> instance = <span class="hljs-type">ReasonReact</span>.statelessComponent(<span class="hljs-string">"Item"</span>);\n  <span class="hljs-keyword">let</span> make = (~label, _children) =&gt; {\n    ...instance,\n    render: _self =&gt;\n      &lt;li&gt; (label |&gt; text) &lt;/li&gt;\n  }\n};\n\n<span class="hljs-comment">/* With pure */</span>\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Item</span> = </span>{\n  <span class="hljs-keyword">let</span> make = <span class="hljs-type">Vrroom</span>.pure((render, ~label) =&gt; render(\n    &lt;li&gt; (label |&gt; text) &lt;/li&gt;\n  ));\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">ItemBefore</span> =\n  <span class="hljs-keyword">struct</span>\n    <span class="hljs-keyword">let</span> instance = <span class="hljs-type">ReasonReact</span>.statelessComponent <span class="hljs-string">"Item"</span>\n    <span class="hljs-keyword">let</span> make ~label  _children =\n      {\n        instance <span class="hljs-keyword">with</span>\n        render = (<span class="hljs-keyword">fun</span> _self  -&gt; ((li ~children:[label |&gt; text] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]))\n      }\n  <span class="hljs-keyword">end</span>\n<span class="hljs-keyword">module</span> <span class="hljs-type">Item</span> =\n  <span class="hljs-keyword">struct</span>\n    <span class="hljs-keyword">let</span> make =\n      <span class="hljs-type">Vrroom</span>.pure\n        (<span class="hljs-keyword">fun</span> render  -&gt;\n           <span class="hljs-keyword">fun</span> ~label  -&gt; render ((li ~children:[label |&gt; text] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]))\n  <span class="hljs-keyword">end</span></code></pre>\n      </div>\n    </div>\n  \n<p>See more examples in <a href="https://github.com/glennsl/vrroom/tree/master/examples">the examples folder</a></p>\n',homepageUrl:"https://github.com/glennsl/vrroom#readme",repositoryUrl:"https://github.com/glennsl/vrroom",npmUrl:null,issuesUrl:"https://github.com/glennsl/vrroom/issues",slug:"/package/unpublished/glennsl/vrroom"}},pathContext:{id:"unpublished/glennsl/vrroom"}}}});
//# sourceMappingURL=path---package-unpublished-glennsl-vrroom-f620ce2eb9cbc7df5847.js.map