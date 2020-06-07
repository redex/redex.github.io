webpackJsonp([0xc66d12ff1fd6],{1441:function(s,a){s.exports={data:{package:{type:"published",id:"@tatchi/bs-react-virtual",name:"@tatchi/bs-react-virtual",version:"0.1.0",category:"binding",flags:[],platforms:["browser"],description:"BuckleScript bindings for react-virtual",keywords:["react"],license:"MIT",updated:"2020-05-17T07:12:39.917Z",stars:0,score:.36432496739641496,quality:.4298756329093969,popularity:.008974681111986066,maintenance:.6634889689554309,readme:'<h1 id="bs-react-virtual"><a href="#bs-react-virtual" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-react-virtual</h1>\n<p><a href="https://github.com/bucklescript/bucklescript">BuckleScript</a> bindings for <a href="https://github.com/tannerlinsley/react-virtual">react-virtual</a></p>\n<p><img src="https://github.com/tatchi/bs-react-virtual/workflows/Build/badge.svg" alt="Build"></p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install --save @tatchi/bs-react-virtual</code></pre></div>\n<p>Then add <code>@tatchi/bs-react-virtual</code> to <code>bs-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>{\n  ...\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"@tatchi/bs-react-virtual"</span>]\n}</code></pre></div>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>[@react.component]\n<span class="hljs-keyword">let</span> make = () =&gt; {\n  <span class="hljs-keyword">let</span> parentRef = <span class="hljs-type">React</span>.useRef(<span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.null);\n\n  <span class="hljs-keyword">let</span> rowVirtualizer =\n    <span class="hljs-type">ReactVirtual</span>.useVirtual(\n      <span class="hljs-type">ReactVirtual</span>.options(\n        ~size=<span class="hljs-number">10000</span>,\n        ~parentRef,\n        ~estimateSize=<span class="hljs-type">React</span>.useCallback0(<span class="hljs-number">_</span> =&gt; <span class="hljs-number">35</span>),\n        ~scrollToFn=(offset, defaultScrollToFn) =&gt; defaultScrollToFn(offset),\n        (),\n      ),\n    );\n\n  &lt;div&gt;\n    &lt;button\n      onClick={<span class="hljs-number">_</span> =&gt;\n        rowVirtualizer.scrollToIndex(.\n          ~index=<span class="hljs-number">0</span>,\n          ~options=<span class="hljs-type">Some</span>({align: <span class="hljs-type">ReactVirtual</span>.<span class="hljs-type">Align</span>.auto}),\n        )\n      }&gt;\n      {<span class="hljs-type">React</span>.string(<span class="hljs-string">"ScrollToIndex"</span>)}\n    &lt;/button&gt;\n    &lt;button\n      onClick={<span class="hljs-number">_</span> =&gt;\n        rowVirtualizer.scrollToOffset(. ~offset=<span class="hljs-number">100</span>, ~options=<span class="hljs-type">None</span>)\n      }&gt;\n      {<span class="hljs-type">React</span>.string(<span class="hljs-string">"ScrollToOffset"</span>)}\n    &lt;/button&gt;\n    &lt;div\n      <span class="hljs-keyword">ref</span>={<span class="hljs-type">ReactDOMRe</span>.<span class="hljs-type">Ref</span>.domRef(parentRef)}\n      style={<span class="hljs-type">ReactDOMRe</span>.<span class="hljs-type">Style</span>.make(\n        ~height=<span class="hljs-string">"150px"</span>,\n        ~width=<span class="hljs-string">"300px"</span>,\n        ~overflow=<span class="hljs-string">"auto"</span>,\n        (),\n      )}&gt;\n      &lt;div\n        style={<span class="hljs-type">ReactDOMRe</span>.<span class="hljs-type">Style</span>.make(\n          ~height={string_of_int(rowVirtualizer.totalSize) ++ <span class="hljs-string">"px"</span>},\n          ~width=<span class="hljs-string">"100%"</span>,\n          ~position=<span class="hljs-string">"relative"</span>,\n          (),\n        )}&gt;\n        {rowVirtualizer.virtualItems\n         -&gt;<span class="hljs-type">Belt</span>.<span class="hljs-type">Array</span>.<span class="hljs-built_in">map</span>(virtualRow =&gt;\n             &lt;div\n               <span class="hljs-keyword">ref</span>={<span class="hljs-type">ReactDOMRe</span>.<span class="hljs-type">Ref</span>.domRef(virtualRow.measureRef)}\n               key={string_of_int(virtualRow.index)}\n               style={<span class="hljs-type">ReactDOMRe</span>.<span class="hljs-type">Style</span>.make(\n                 ~position=<span class="hljs-string">"absolute"</span>,\n                 ~top=<span class="hljs-string">"0px"</span>,\n                 ~<span class="hljs-keyword">left</span>=<span class="hljs-string">"0px"</span>,\n                 ~width=<span class="hljs-string">"100%"</span>,\n                 ~height={string_of_int(virtualRow.size) ++ <span class="hljs-string">"px"</span>},\n                 ~transform=\n                   {<span class="hljs-string">"translateY("</span> ++ string_of_int(virtualRow.start) ++ <span class="hljs-string">"px)"</span>},\n                 (),\n               )}&gt;\n               {<span class="hljs-type">React</span>.string(<span class="hljs-string">"Row "</span> ++ string_of_int(virtualRow.index))}\n             &lt;/div&gt;\n           )\n         -&gt;<span class="hljs-type">ReasonReact</span>.array}\n      &lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;;\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">3092</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/tatchi/bs-react-virtual#readme",repositoryUrl:"https://github.com/tatchi/bs-react-virtual",npmUrl:"https://www.npmjs.com/package/%40tatchi%2Fbs-react-virtual",issuesUrl:"https://github.com/tatchi/bs-react-virtual/issues",slug:"/package/@tatchi/bs-react-virtual"}},pathContext:{id:"@tatchi/bs-react-virtual"}}}});
//# sourceMappingURL=path---package-tatchi-bs-react-virtual-cbe96c772685b9131a28.js.map