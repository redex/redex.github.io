webpackJsonp([35115168060308],{1138:function(s,a){s.exports={data:{package:{id:"bs-react-on-rails",stars:1,name:"bs-react-on-rails",version:"0.2.0",category:"binding",flags:[],platforms:["browser"],description:"BuckleScript bindings to react-on-rails",keywords:["react"],license:"MIT",updated:"2018-05-20T12:52:54.762Z",type:"published",score:.5525951488958706,quality:.643769948808312,popularity:.027804966535547253,maintenance:.9992355027598157,readme:'<h1 id="bs-react-on-rails"><a href="#bs-react-on-rails" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-react-on-rails</h1>\n<p>BuckleScript bindings to <a href="https://github.com/shakacode/react_on_rails">react-on-rails</a>.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code><span class="hljs-comment"># yarn</span>\nyarn add bs-react-on-rails\n\n<span class="hljs-comment"># or npm</span>\nnpm install --save bs-react-on-rails</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> props = {. <span class="hljs-string">"name"</span>: string};\n\n<span class="hljs-keyword">type</span> context = {. <span class="hljs-string">"host"</span>: string};\n\n<span class="hljs-keyword">let</span> component = (props: props, context: context) =&gt;\n  &lt;<span class="hljs-type">Page</span> name=props##name host=context##host /&gt;;\n\n<span class="hljs-type">ReactOnRails</span>.register(<span class="hljs-string">"App"</span>, component);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> props = &lt; name :<span class="hljs-built_in">string</span>  &gt; <span class="hljs-type">Js</span>.t\n<span class="hljs-keyword">type</span> context = &lt; host :<span class="hljs-built_in">string</span>  &gt; <span class="hljs-type">Js</span>.t\n<span class="hljs-keyword">let</span> component (props : props) (context : context) =\n  ((<span class="hljs-type">Page</span>.createElement ~name:(## props name) ~host:(## context host)\n      ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">ReactOnRails</span>.register <span class="hljs-string">"App"</span> component</code></pre>\n      </div>\n    </div>\n  \n<p>See <a href="https://github.com/shakacode/reason-react-on-rails-example">example Rails app</a> and <a href="https://github.com/shakacode/reason-react-on-rails-example/commit/e69bed7cb5141a87edafef1b67fca1b69a48e481">implementation commit</a>.</p>\n<h2 id="api"><a href="#api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* ReactOnRails.register */</span>\n<span class="hljs-type">ReactOnRails</span>.register(<span class="hljs-string">"App"</span>, component);\n\n<span class="hljs-comment">/* ReactOnRails.registerWithOptions */</span>\n<span class="hljs-type">ReactOnRails</span>.registerWithOptions(<span class="hljs-string">"App"</span>, component, {traceTurbolinks: <span class="hljs-literal">true</span>});\n\n<span class="hljs-comment">/* ReactOnRails.registerWithOptions */</span>\n<span class="hljs-keyword">let</span> csrfToken: option(string) = <span class="hljs-type">ReactOnRails</span>.authenticityToken();\n\n<span class="hljs-comment">/* ReactOnRails.reactOnRailsPageLoaded */</span>\n<span class="hljs-type">ReactOnRails</span>.reactOnRailsPageLoaded();</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = <span class="hljs-type">ReactOnRails</span>.register <span class="hljs-string">"App"</span> component\n<span class="hljs-keyword">let</span> _ =\n  <span class="hljs-type">ReactOnRails</span>.registerWithOptions <span class="hljs-string">"App"</span> component { traceTurbolinks = <span class="hljs-literal">true</span> }\n<span class="hljs-keyword">let</span> csrfToken: <span class="hljs-built_in">string</span> option = <span class="hljs-type">ReactOnRails</span>.authenticityToken <span class="hljs-literal">()</span>\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">ReactOnRails</span>.reactOnRailsPageLoaded <span class="hljs-literal">()</span></code></pre>\n      </div>\n    </div>\n  \n<p>No <code>redux</code> related methods are exposed as there\'re no <code>redux</code> bindings exist and it\'s not idiomatic way to manage state in <code>ReasonReact</code> apps.</p>\n<p>See <a href="https://github.com/shakacode/react_on_rails/blob/master/docs/api/javascript-api.md"><code>react-on-rails</code> JS API</a> for more details.</p>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>MIT.</p>\n',homepageUrl:"https://github.com/shakacode/bs-react-on-rails",repositoryUrl:"https://github.com/shakacode/bs-react-on-rails",npmUrl:"https://www.npmjs.com/package/bs-react-on-rails",issuesUrl:"https://github.com/shakacode/bs-react-on-rails/issues",slug:"/package/bs-react-on-rails"}},pathContext:{id:"bs-react-on-rails"}}}});
//# sourceMappingURL=path---package-bs-react-on-rails-70c154e0b5331f3db954.js.map