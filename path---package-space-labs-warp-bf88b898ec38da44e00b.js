webpackJsonp([0xec94d920791c],{1439:function(s,a){s.exports={data:{package:{type:"published",id:"@space-labs/warp",name:"@space-labs/warp",version:"1.0.0",category:"library",flags:[],platforms:["browser"],description:"Warp is a Bucklescript library enabling http-requests over XHR",keywords:["http client"],license:"MIT",updated:"2020-09-22T08:45:12.866Z",stars:18,score:.5167855806855768,quality:.5115082755889844,popularity:.03824631479027915,maintenance:.9998482509493822,readme:'<h1 id="warp"><a href="#warp" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Warp</h1>\n<p>Warp is a Bucklescript library enabling http-requests over XHR.</p>\n<p>If you find a bug or think some feature is missing, don\'t hesitate to file an issue or even a pull request.</p>\n<p>Every little bit of help is very welcome!</p>\n<h1 id="table-of-contents"><a href="#table-of-contents" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Table of contents</h1>\n<ul>\n<li><a href="#how-do-i-install-it">How do I install it?</a></li>\n<li>\n<p><a href="#api">API</a></p>\n<ul>\n<li><a href="#methods">Methods</a></li>\n<li><a href="#settings">Settings</a></li>\n<li><a href="#query-strings">Query Strings</a></li>\n<li><a href="#form-data">Form Data</a></li>\n<li><a href="#headers">Headers</a></li>\n<li><a href="#events">Events</a></li>\n<li><a href="#response-types">Response Types</a></li>\n<li><a href="#sending-a-request">Sending a Request</a></li>\n<li><a href="#cancelling-requests">Cancelling Requests</a></li>\n<li><a href="#complete-example">Complete Example</a></li>\n</ul>\n</li>\n<li><a href="#what-state-is-it-in">What state is it in?</a></li>\n<li><a href="#credits">Credits</a></li>\n</ul>\n<h1 id="how-do-i-install-it"><a href="#how-do-i-install-it" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do I install it?</h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add @space-labs/warp</code></pre></div>\n<p>or</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install @space-labs/warp --save</code></pre></div>\n<p>Then add <code>@space-labs/warp</code> as a dependency to <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-diff"><code><span class="hljs-string">"bs-dependencies"</span>: [\n+  <span class="hljs-string">"@space-labs/warp"</span>\n]</code></pre></div>\n<h1 id="api"><a href="#api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API</h1>\n<h3 id="methods"><a href="#methods" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Methods</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Warp</span>.<span class="hljs-type">Method</span>.options(<span class="hljs-string">"https://domain.com/"</span>);\n<span class="hljs-type">Warp</span>.<span class="hljs-type">Method</span>.<span class="hljs-keyword">get</span>(<span class="hljs-string">"https://domain.com/"</span>);\n<span class="hljs-type">Warp</span>.<span class="hljs-type">Method</span>.head(<span class="hljs-string">"https://domain.com/"</span>);\n<span class="hljs-type">Warp</span>.<span class="hljs-type">Method</span>.post(<span class="hljs-string">"https://domain.com/"</span>);\n<span class="hljs-type">Warp</span>.<span class="hljs-type">Method</span>.put(<span class="hljs-string">"https://domain.com/"</span>);\n<span class="hljs-type">Warp</span>.<span class="hljs-type">Method</span>.delete(<span class="hljs-string">"https://domain.com/"</span>);\n<span class="hljs-type">Warp</span>.<span class="hljs-type">Method</span>.trace(<span class="hljs-string">"https://domain.com/"</span>);\n<span class="hljs-type">Warp</span>.<span class="hljs-type">Method</span>.connect(<span class="hljs-string">"https://domain.com/"</span>);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = <span class="hljs-type">Warp</span>.<span class="hljs-type">Method</span>.options <span class="hljs-string">"https://domain.com/"</span>\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">Warp</span>.<span class="hljs-type">Method</span>.get <span class="hljs-string">"https://domain.com/"</span>\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">Warp</span>.<span class="hljs-type">Method</span>.head <span class="hljs-string">"https://domain.com/"</span>\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">Warp</span>.<span class="hljs-type">Method</span>.post <span class="hljs-string">"https://domain.com/"</span>\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">Warp</span>.<span class="hljs-type">Method</span>.put <span class="hljs-string">"https://domain.com/"</span>\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">Warp</span>.<span class="hljs-type">Method</span>.delete <span class="hljs-string">"https://domain.com/"</span>\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">Warp</span>.<span class="hljs-type">Method</span>.trace <span class="hljs-string">"https://domain.com/"</span>\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">Warp</span>.<span class="hljs-type">Method</span>.connect <span class="hljs-string">"https://domain.com/"</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="settings"><a href="#settings" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Settings</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>client-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">Settings</span>.async(<span class="hljs-literal">false</span>);\nclient-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">Settings</span>.timeout(<span class="hljs-number">5000</span>);\nclient-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">Settings</span>.withCredentials(<span class="hljs-literal">true</span>);\nclient-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">Settings</span>.auth(<span class="hljs-string">"user"</span>, <span class="hljs-string">"password"</span>);\nclient-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">Settings</span>.overrideMimeType(<span class="hljs-string">"text/plain"</span>);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2310</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="query-strings"><a href="#query-strings" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Query Strings</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>client-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">QueryString</span>.<span class="hljs-keyword">set</span>([(<span class="hljs-string">"key"</span>, <span class="hljs-string">"value"</span>), (<span class="hljs-string">"key2"</span>, <span class="hljs-string">"value2"</span>)]);\nclient-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">QueryString</span>.add(<span class="hljs-string">"key"</span>, <span class="hljs-string">"value"</span>);\nclient-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">QueryString</span>.remove(<span class="hljs-string">"key"</span>);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2310</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="form-data"><a href="#form-data" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Form Data</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code> client-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">FormData</span>.<span class="hljs-keyword">set</span>([(<span class="hljs-string">"key"</span>, <span class="hljs-string">"value"</span>), (<span class="hljs-string">"key2"</span>, <span class="hljs-string">"value2"</span>)]);\n client-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">FormData</span>.add(<span class="hljs-string">"key"</span>, <span class="hljs-string">"value"</span>);\n client-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">FormData</span>.remove(<span class="hljs-string">"key"</span>);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2310</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="headers"><a href="#headers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Headers</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>client-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">Header</span>.<span class="hljs-keyword">set</span>([(<span class="hljs-string">"key"</span>, <span class="hljs-string">"value"</span>), (<span class="hljs-string">"key2"</span>, <span class="hljs-string">"value2"</span>)]);\nclient-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">Header</span>.add(<span class="hljs-string">"key"</span>, <span class="hljs-string">"value"</span>);\nclient-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">Header</span>.remove(<span class="hljs-string">"key"</span>);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2310</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="events"><a href="#events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Events</h3>\n<p><strong>onProgress</strong></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>client-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">Event</span>.onProgress(_event =&gt; {\n  <span class="hljs-type">Js</span>.<span class="hljs-type">Console</span>.log(<span class="hljs-string">"We are making progress!"</span>)\n});</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2310</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p><strong>onLoad</strong></p>\n<p>The datatype of the response is based on the currently set <code>ResponseType</code> (<code>option(string)</code> by default).</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>client-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">Event</span>.onLoad(response =&gt; {\n  <span class="hljs-keyword">switch</span> (response) {\n  | <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Ok</span>(<span class="hljs-type">Some</span>(data)) =&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Console</span>.log(data)\n  | <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Ok</span>(<span class="hljs-type">None</span>) =&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Console</span>.info(<span class="hljs-string">"Response was empty"</span>)\n  | <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Error</span>(message) =&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Console</span>.error(message)\n  }\n});</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2310</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p><strong>onLoadWithStatusCode</strong></p>\n<p>Same as <code>onLoad</code> but gets the requests statusCode as a second argument</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>client-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">Event</span>.onLoadWithStatusCode((response, statusCode) =&gt; {\n  <span class="hljs-keyword">switch</span> (response) {\n  | <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Ok</span>(<span class="hljs-type">Some</span>(data)) =&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Console</span>.log2(data, statusCode)\n  | <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Ok</span>(<span class="hljs-type">None</span>) =&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Console</span>.info2(<span class="hljs-string">"No Response!"</span>, statusCode)\n  | <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Error</span>(message) =&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Console</span>.error2(message, statusCode)\n  }\n});</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2310</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p><strong>onAbort</strong></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>client-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">Event</span>.onAbort(() =&gt; {\n  <span class="hljs-type">Js</span>.<span class="hljs-type">Console</span>.log(<span class="hljs-string">"The request got aborted :("</span>)\n});</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2310</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="response-types"><a href="#response-types" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Response Types</h3>\n<p>If you want to change the <code>ResponseType</code>, you have to do it <strong>before</strong> the <code>onLoad</code>. If you set it afterwards, your\n<code>onLoad</code> will be removed (because it would assume a wrong type signature).</p>\n<table>\n<thead>\n<tr>\n<th>ResponseType</th>\n<th>PayloadType</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Text</td>\n<td>option(string)</td>\n</tr>\n<tr>\n<td>Json</td>\n<td>option(Js.Json.t)</td>\n</tr>\n<tr>\n<td>Document</td>\n<td>option(Dom.document)</td>\n</tr>\n<tr>\n<td>ArrayBuffer</td>\n<td>option(Js.Typed_array.ArrayBuffer.t)</td>\n</tr>\n</tbody>\n</table>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>client-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">ResponseType</span>.setText; <span class="hljs-comment">// default</span>\nclient-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">ResponseType</span>.setJson;\nclient-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">ResponseType</span>.setDocument;\nclient-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">ResponseType</span>.setArrayBuffer;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2310</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="sending-a-request"><a href="#sending-a-request" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sending a Request</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>client-&gt;<span class="hljs-type">Warp</span>.send;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2310</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="cancelling-requests"><a href="#cancelling-requests" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cancelling Requests</h3>\n<p><code>Warp.send</code> returns a function, with which you may cancel the current request. It has a signature of\n<code>option(unit => unit)</code>, so you don\'t have to do anything when using it inside <code>React.useEffect</code>.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>  <span class="hljs-comment">/* React */</span>\n  <span class="hljs-type">React</span>.useEffect(() =&gt; {\n    <span class="hljs-type">Warp</span>.<span class="hljs-type">Method</span>.<span class="hljs-keyword">get</span>(<span class="hljs-string">"https://domain.com/"</span>)-&gt;<span class="hljs-type">Warp</span>.send\n  });\n\n  <span class="hljs-comment">/* Plain Reason */</span>\n  <span class="hljs-keyword">let</span> maybeCancel = <span class="hljs-type">Warp</span>.<span class="hljs-type">Method</span>.<span class="hljs-keyword">get</span>(<span class="hljs-string">"https://domain.com/"</span>)-&gt;<span class="hljs-type">Warp</span>.send;\n  <span class="hljs-keyword">switch</span>(maybeCancel) {\n    | <span class="hljs-type">Some</span>(cancel) =&gt; cancel();\n    | <span class="hljs-type">None</span> =&gt; ();\n  };</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">967</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h3>\n<p><strong>Basic</strong></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Warp</span>.<span class="hljs-type">Method</span>.<span class="hljs-keyword">get</span>(<span class="hljs-string">"http://localhost:8081/"</span>)\n-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">ResponseType</span>.setJson\n-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">QueryString</span>.<span class="hljs-keyword">set</span>([\n    (<span class="hljs-string">"firstname"</span>, <span class="hljs-string">"Max"</span>),\n    (<span class="hljs-string">"lastname"</span>, <span class="hljs-string">"Mustermann"</span>),\n    (<span class="hljs-string">"username"</span>, <span class="hljs-string">"max"</span>),\n    (<span class="hljs-string">"email"</span>, <span class="hljs-string">"max@mustermann.de"</span>),\n  ])\n-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">Header</span>.add(<span class="hljs-string">"authorization"</span>, <span class="hljs-string">"Bearer 123"</span>)\n-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">Event</span>.onLoad(response =&gt; {\n    <span class="hljs-keyword">switch</span> (response) {\n    | <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Ok</span>(<span class="hljs-type">Some</span>(data)) =&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Console</span>.log(data)\n    | <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Ok</span>(<span class="hljs-type">None</span>) =&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Console</span>.info(<span class="hljs-string">"No Response!"</span>)\n    | <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Error</span>(message) =&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Console</span>.error(message)\n    }\n  })\n-&gt;<span class="hljs-type">Warp</span>.send;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2310</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p><strong>Sending JSON</strong></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> stringifiedJson =\n  <span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.fromList([\n    (<span class="hljs-string">"query"</span>, <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.string(operation.text)),\n    (<span class="hljs-string">"variables"</span>, variables),\n  ])\n  -&gt;<span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.object_\n  -&gt;<span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.stringify;\n\n<span class="hljs-type">Warp</span>.<span class="hljs-type">Method</span>.post(<span class="hljs-string">"http://localhost:8081/"</span>)\n-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">ResponseType</span>.setJson\n-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">FormData</span>.setJson(stringifiedJson)\n-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">Header</span>.add(<span class="hljs-string">"authorization"</span>, <span class="hljs-string">"Bearer 123"</span>)\n-&gt;<span class="hljs-type">Warp</span>.<span class="hljs-type">Event</span>.onLoad(response =&gt; {\n    <span class="hljs-keyword">switch</span> (response) {\n    | <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Ok</span>(<span class="hljs-type">Some</span>(data)) =&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Console</span>.log(data)\n    | <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Ok</span>(<span class="hljs-type">None</span>) =&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Console</span>.info(<span class="hljs-string">"No Response!"</span>)\n    | <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Error</span>(message) =&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Console</span>.error(message)\n    }\n  })\n-&gt;<span class="hljs-type">Warp</span>.send;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">967</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h1 id="what-state-is-it-in"><a href="#what-state-is-it-in" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What state is it in?</h1>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> Url</li>\n<li class="task-list-item">\n<p><input type="checkbox" checked disabled> Methods</p>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> OPTIONS</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> GET</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> HEAD</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> POST</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> PUT</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> DELETE</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> TRACE</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> CONNECT</li>\n</ul>\n</li>\n<li class="task-list-item">\n<p><input type="checkbox" checked disabled> Headers</p>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> set</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> add</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> delete</li>\n</ul>\n</li>\n<li class="task-list-item">\n<p><input type="checkbox" checked disabled> Query Strings</p>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> set</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> add</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> delete</li>\n</ul>\n</li>\n<li class="task-list-item">\n<p><input type="checkbox" checked disabled> Form Data / Body</p>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> set</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> setJson</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> add</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> delete</li>\n</ul>\n</li>\n<li class="task-list-item">\n<p><input type="checkbox" checked disabled> Response Types</p>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> ArrayBuffer <code>Js.Typed_array.ArrayBuffer.t</code></li>\n<li class="task-list-item"><input type="checkbox" disabled> Blob</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Document <code>Dom.document</code></li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Json <code>Js.Json.t</code></li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Text <code>string</code></li>\n</ul>\n</li>\n<li class="task-list-item">\n<p><input type="checkbox" checked disabled> Events</p>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> <code>onLoad</code></li>\n<li class="task-list-item"><input type="checkbox" checked disabled> <code>onLoadWithStatusCode</code></li>\n<li class="task-list-item"><input type="checkbox" checked disabled> <code>onProgress</code></li>\n<li class="task-list-item"><input type="checkbox" checked disabled> <code>onAbort</code></li>\n</ul>\n</li>\n<li class="task-list-item">\n<p><input type="checkbox" checked disabled> Settings</p>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> async</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> timeout</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> withCredentials</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> auth (username / password)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> overrideMimeType</li>\n</ul>\n</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> send</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> abort</li>\n<li class="task-list-item"><input type="checkbox" disabled> upload</li>\n<li class="task-list-item"><input type="checkbox" disabled> tests</li>\n</ul>\n<h2 id="credits"><a href="#credits" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Credits</h2>\n<p><a href="https://github.com/request/request">Request - Simplified HTTP client</a> for inspiration</p>\n<p><strong>@hgiraud</strong> on Discord had some nice suggestions regarding the API</p>\n',
homepageUrl:"https://github.com/eWert-Online/warp#readme",repositoryUrl:"https://github.com/eWert-Online/warp",npmUrl:"https://www.npmjs.com/package/%40space-labs%2Fwarp",issuesUrl:"https://github.com/eWert-Online/warp/issues",slug:"/package/@space-labs/warp"}},pathContext:{id:"@space-labs/warp"}}}});
//# sourceMappingURL=path---package-space-labs-warp-bf88b898ec38da44e00b.js.map