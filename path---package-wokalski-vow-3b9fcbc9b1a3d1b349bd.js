webpackJsonp([0xdee91ae0095d],{1344:function(s,a){s.exports={data:{package:{type:"published",id:"@wokalski/vow",name:"@wokalski/vow",version:"0.0.3",category:"library",flags:[],platforms:["browser","node"],description:"Almost sound Promises for Bucklescript",keywords:["async"],license:"MIT",updated:"2018-10-15T03:26:59.978Z",stars:null,score:.10529608706029156,quality:.10329873140250101,popularity:.0028647872904606192,maintenance:.20943940596537156,readme:'<h1 id="vow"><a href="#vow" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Vow</h1>\n<p><code>Vow</code> is a tiny library which allows you to handle promises more safely in your Bucklescript application.</p>\n<p>A <code>Vow</code> can be either <code>handled</code> and <code>unhandled</code>. All promises of type <code>vow \'a handled</code> make sure that you handled Promise rejections. Thanks to that you will avoid the Uncaught promise error.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install --save @wokalski/vow</code></pre></div>\n<p>Then add <code>vow</code> to <code>bs-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>{\n  ...\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"@wokalski/vow"</span>]\n}</code></pre></div>\n<h2 id="side-effects"><a href="#side-effects" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Side effects</h2>\n<p>After series of operations you usually want to "consume" a promise. <code>Vow.sideEffect</code> should be used for that.</p>\n<p>It only accepts promises which are properly handled.</p>\n<h2 id="unwrapping"><a href="#unwrapping" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Unwrapping</h2>\n<p>You can unwrap a handled promise using <code>Vow.unwrap</code>.</p>\n<h2 id="nesting-vows"><a href="#nesting-vows" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Nesting vows</h2>\n<p><code>Js.Promise.t</code> is unsafe when you nest promises. i.e. <code>Js.Promise.t (Js.Promise.t \'a)</code> is unsound. In the runtime it\'s <code>Js.Promise.t</code>.</p>\n<p>This is resolved with <code>vow</code>s. If you nest <code>vow</code>s they behave as expected.</p>\n<p>However if you put a <code>Js.Promise.t</code> inside a <code>vow</code> (which are boxed <code>Js.Promise.t</code> under the scenes) you\'re gonna get a <code>vow</code> of the following type:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* in Reason syntax */</span>\n\nvow (<span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.t \'a) \'status</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">964</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p>However, under the scenes it\'ll really be</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>vow \'a \'status</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2310</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p>Therefore <code>vow</code> is not sound.</p>\n<h2 id="binding"><a href="#binding" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Binding</h2>\n<p>In order to use vows you have to bind to your existing APIs using <code>Vow.wrap</code>/<code>Vow.unsafeWrap</code>.</p>\n<p>If you <code>unsafeWrap</code> a promise which does throw your code will be unsound.</p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<p>Let\'s see a real world example of vows with some comments:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> login <span class="hljs-number">_</span>: <span class="hljs-type">Vow</span>.<span class="hljs-type">Result</span>.t authenticationState error <span class="hljs-type">Vow</span>.handled =&gt;\n  <span class="hljs-comment">/* Returns a handled Vow.Result.t */</span>\n  <span class="hljs-type">Login</span>.logIn () |&gt;\n  <span class="hljs-comment">/* Validates the returned value. Since the vow is handled we don\'t need to catch*/</span>\n  <span class="hljs-type">Vow</span>.<span class="hljs-type">Result</span>.<span class="hljs-built_in">map</span> (\n    <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> x<span class="hljs-params"> </span></span></span>=&gt;\n      <span class="hljs-keyword">if</span> x##isCancelled {\n        <span class="hljs-type">Vow</span>.<span class="hljs-type">Result</span>.fail <span class="hljs-type">LoginRequestCancelled</span>\n      } <span class="hljs-keyword">else</span> {\n        <span class="hljs-type">Vow</span>.<span class="hljs-type">Result</span>.<span class="hljs-keyword">return</span> ()\n      }\n  ) |&gt;\n  <span class="hljs-comment">/* Another handled Vow.Result.t */</span>\n  <span class="hljs-type">Vow</span>.<span class="hljs-type">Result</span>.<span class="hljs-built_in">map</span> <span class="hljs-type">Login</span>.getCurrentAccessToken () |&gt;\n  <span class="hljs-type">Vow</span>.<span class="hljs-type">Result</span>.<span class="hljs-built_in">map</span> (\n    <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> x<span class="hljs-params"> </span></span></span>=&gt; {\n      <span class="hljs-keyword">let</span> token = x##accessToken;\n      <span class="hljs-comment">/* This returns an unhandled Vow.Result.t.\n       * Note that the \'error types have to match\n       * Because after one error the subsequent operations\n       * Are not performed.\n       */</span>\n      <span class="hljs-type">Queries</span>.login ::token\n    }\n  ) |&gt;\n  <span class="hljs-comment">/* Ooops, the `Queries.login` might reject.\n   * We are forced to handle it in the compile time.\n   */</span>\n  <span class="hljs-type">Vow</span>.<span class="hljs-type">Result</span>.onError (<span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> <span class="hljs-number">_</span><span class="hljs-params"> </span></span></span>=&gt; <span class="hljs-type">Vow</span>.<span class="hljs-type">Result</span>.fail <span class="hljs-type">GraphQlSignInError</span>) |&gt;\n  <span class="hljs-type">Vow</span>.<span class="hljs-type">Result</span>.<span class="hljs-built_in">map</span> (\n    <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> x<span class="hljs-params"> </span></span></span>=&gt;\n      <span class="hljs-keyword">switch</span> x {\n      | <span class="hljs-type">Authenticated</span> {token, userId} =&gt;\n        <span class="hljs-comment">/* The promise we wrap is never rejected */</span>\n        <span class="hljs-type">Vow</span>.unsafeWrap\n          <span class="hljs-type">KeyChain</span>.(\n            <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.all2 (\n              setGenericPassword username::<span class="hljs-string">"userId"</span> password::userId service::<span class="hljs-string">"userId"</span>,\n              setGenericPassword username::<span class="hljs-string">"token"</span> password::token service::<span class="hljs-string">"token"</span>\n            )\n          ) |&gt;\n        <span class="hljs-type">Vow</span>.<span class="hljs-built_in">map</span> (<span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> <span class="hljs-number">_</span><span class="hljs-params"> </span></span></span>=&gt; <span class="hljs-type">Vow</span>.<span class="hljs-type">Result</span>.<span class="hljs-keyword">return</span> x)\n      | <span class="hljs-number">_</span> =&gt; <span class="hljs-type">Vow</span>.<span class="hljs-type">Result</span>.<span class="hljs-keyword">return</span> x\n      }\n  );</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">1525</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h2 id="author"><a href="#author" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Author</h2>\n<p><a href="http://twitter.com/wokalski">@wokalski</a></p>\n',homepageUrl:"https://github.com/wokalski/vow#readme",repositoryUrl:"https://github.com/wokalski/vow",npmUrl:"https://www.npmjs.com/package/%40wokalski%2Fvow",issuesUrl:"https://github.com/wokalski/vow/issues",slug:"/package/@wokalski/vow"}},pathContext:{id:"@wokalski/vow"}}}});
//# sourceMappingURL=path---package-wokalski-vow-3b9fcbc9b1a3d1b349bd.js.map