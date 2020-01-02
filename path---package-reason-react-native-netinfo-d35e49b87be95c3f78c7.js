webpackJsonp([0xf552b8a3b98a],{1365:function(n,s){n.exports={data:{package:{type:"published",id:"@reason-react-native/netinfo",name:"@reason-react-native/netinfo",version:"4.1.0",category:"binding",flags:[],platforms:["node"],description:"[![Version](https://img.shields.io/npm/v/@reason-react-native/netinfo.svg)](https://www.npmjs.com/@reason-react-native/netinfo)",keywords:["react-native"],license:"MIT",updated:"2019-11-12T23:54:31.243Z",stars:null,score:.17712020972450668,quality:.19944396389541702,popularity:.004353222972154044,maintenance:.3307525500446505,readme:'<h1 id="bucklescript-bindings-to-react-native-communitynetinfo"><a href="#bucklescript-bindings-to-react-native-communitynetinfo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>BuckleScript bindings to <code>@react-native-community/netinfo</code></h1>\n<p><a href="https://www.npmjs.com/@reason-react-native/netinfo"><img src="https://img.shields.io/npm/v/@reason-react-native/netinfo.svg" alt="Version"></a></p>\n<p>Reason / BuckleScript bindings for\n<a href="https://github.com/react-native-community/react-native-netinfo"><code>@react-native-community/netinfo</code></a>\n(exposed as <code>ReactNativeNetInfo</code>).</p>\n<h2 id="support"><a href="#support" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Support</h2>\n<p><code>@reason-react-native/netinfo</code> X.y.<em> means it\'s compatible with\n<code>@react-native-community/netinfo</code> X.y.</em></p>\n<table>\n<thead>\n<tr>\n<th>version</th>\n<th>react-native version</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>4.1.0+</td>\n<td>0.60.0+</td>\n</tr>\n</tbody>\n</table>\n<p>For 0.59-, you should use\n<a href="https://github.com/mikehardy/jetifier/blob/master/README.md#to-reverse-jetify--convert-node_modules-dependencies-to-support-libraries"><code>jetify -r</code></a>.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>With <code>yarn</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-console"><code>yarn add @reason-react-native/netinfo</code></pre></div>\n<p>With <code>npm</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-console"><code>npm install @reason-react-native/netinfo</code></pre></div>\n<p>If you use React Native 0.60, <code>@react-native-community/netinfo</code> should be linked\nto your project:</p>\n<div class="redex-codeblock"><pre class="hljs lang-console"><code>react-native link @react-native-community/netinfo</code></pre></div>\n<p>Finally, <code>@reason-react-native/netinfo</code> should be added to <code>bs-dependencies</code> in\n<code>BuckleScript</code> configuration of the project (<code>bsconfig.json</code>). For example:</p>\n<div class="redex-codeblock"><pre class="hljs lang-diff"><code>{\n  <span class="hljs-comment">//...</span>\n  <span class="hljs-string">"bs-dependencies"</span>: [\n    <span class="hljs-string">"reason-react"</span>,\n    <span class="hljs-string">"reason-react-native"</span>,\n+    <span class="hljs-string">"@reason-react-native/netinfo"</span>\n  ],\n  <span class="hljs-comment">//...</span>\n}</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="types"><a href="#types" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Types</h3>\n<h4 id="netinfostatetype"><a href="#netinfostatetype" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>netInfoStateType</code></h4>\n<p>Kind of the current network connection. Valid values are:</p>\n<table>\n<thead>\n<tr>\n<th>Value</th>\n<th>Platforms</th>\n<th>Connection State</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>none</code></td>\n<td>Android, iOS, Windows</td>\n<td>Not active</td>\n</tr>\n<tr>\n<td><code>unknown</code></td>\n<td>Android, iOS, Windows</td>\n<td>Undetermined</td>\n</tr>\n<tr>\n<td><code>cellular</code></td>\n<td>Android, iOS, Windows</td>\n<td>Active</td>\n</tr>\n<tr>\n<td><code>wifi</code></td>\n<td>Android, iOS, Windows</td>\n<td>Active</td>\n</tr>\n<tr>\n<td><code>bluetooth</code></td>\n<td>Android</td>\n<td>Active</td>\n</tr>\n<tr>\n<td><code>ethernet</code></td>\n<td>Android, Windows</td>\n<td>Active</td>\n</tr>\n<tr>\n<td><code>wimax</code></td>\n<td>Android</td>\n<td>Active</td>\n</tr>\n<tr>\n<td><code>vpn</code></td>\n<td>Android</td>\n<td>Active</td>\n</tr>\n<tr>\n<td><code>other</code></td>\n<td>Android, iOS, Windows</td>\n<td>Active</td>\n</tr>\n</tbody>\n</table>\n<h4 id="netinfocellulargeneration"><a href="#netinfocellulargeneration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>netInfoCellularGeneration</code></h4>\n<p>Cellular generation of the current network connection. Valid values are:</p>\n<table>\n<thead>\n<tr>\n<th>Value</th>\n<th>Notes</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>net2g</code></td>\n<td>Inlined as "2g". Returned for CDMA, EDGE, GPRS and IDEN connections</td>\n</tr>\n<tr>\n<td><code>net3g</code></td>\n<td>Inlined as "3g". Returned for EHRPD, EVDO, HSPA, HSUPA, HSDPA and UTMS connections.</td>\n</tr>\n<tr>\n<td><code>net4g</code></td>\n<td>Inlined as "4g". Returned for HSPAP and LTE connections</td>\n</tr>\n</tbody>\n</table>\n<h4 id="details"><a href="#details" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>details</code></h4>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> details = {\n  .\n  <span class="hljs-string">"isConnectionExpensive"</span>: bool,\n  <span class="hljs-string">"cellularGeneration"</span>: <span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.t(netInfoCellularGeneration),\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> details =\n  &lt;\n    isConnectionExpensive :<span class="hljs-built_in">bool</span> ;cellularGeneration\n                                   :netInfoCellularGeneration <span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.t \n    &gt; <span class="hljs-type">Js</span>.t</code></pre>\n      </div>\n    </div>\n  \n<h4 id="netinfostate"><a href="#netinfostate" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>netInfoState</code></h4>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> netInfoState = {\n  .\n  <span class="hljs-string">"_type"</span>: netInfoStateType,\n  <span class="hljs-string">"isConnected"</span>: bool,\n  <span class="hljs-string">"details"</span>: <span class="hljs-type">Js</span>.<span class="hljs-type">Null</span>.t(details),\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> netInfoState =\n  &lt; _type :netInfoStateType ;isConnected :<span class="hljs-built_in">bool</span> ;details :details <span class="hljs-type">Js</span>.<span class="hljs-type">Null</span>.t  &gt;\n    <span class="hljs-type">Js</span>.t</code></pre>\n      </div>\n    </div>\n  \n<p><code>details</code> key will have value <code>Js.Null.empty</code> (<code>null</code>) when <code>_type</code> is <code>null</code> or\n<code>unknown</code>.</p>\n<p>If the <code>details</code> objects is not <code>null</code>, the <code>cellularGeneration</code> key within will</p>\n<ul>\n<li>have value <code>Js.Nullable.undefined</code> when <code>_type</code> is <code>wifi</code>, <code>bluetooth</code>,\n<code>ethernet</code>, <code>wimax</code>, <code>vpn</code> or <code>other</code>.</li>\n<li>have value <code>Js.Nullable.null</code> if the connection is not cellular or its\ngeneration cannot be determined.</li>\n<li>be of type <code>netInfoCellularGeneration</code> only when <code>_type</code> is <code>cellular</code> and its\ngeneration can be determined.</li>\n</ul>\n<h3 id="methods"><a href="#methods" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Methods</h3>\n<h4 id="fetch"><a href="#fetch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>fetch</code></h4>\n<p>To query the connection state, returns <code>netInfoState</code> wrapped in a <code>Promise</code>.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>fetch: unit =&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.t(netInfoState) = <span class="hljs-string">""</span>;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">967</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p>Below example demonstrates determination of the cellular connection generation,\nusing this method.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">React</span>.useEffect0(() =&gt; {\n  <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.(\n    <span class="hljs-type">ReactNativeNetInfo</span>.fetch()\n    |&gt; then_(w =&gt;\n         {\n           <span class="hljs-keyword">switch</span> (w##details-&gt;<span class="hljs-type">Js</span>.<span class="hljs-type">Null</span>.toOption) {\n           | <span class="hljs-type">None</span> =&gt; <span class="hljs-string">"Connection type is none or unknown"</span>-&gt;<span class="hljs-type">Js</span>.<span class="hljs-type">Console</span>.warn\n           | <span class="hljs-type">Some</span>(x) =&gt;\n             <span class="hljs-keyword">let</span> y = x##cellularGeneration;\n             <span class="hljs-keyword">switch</span> (y-&gt;<span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.toOption) {\n             | <span class="hljs-type">None</span> =&gt;\n               <span class="hljs-keyword">if</span> (y == <span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.undefined) {\n                 <span class="hljs-string">"Connection type is wifi, bluetooth, ethernet, wimax, vpn or other"</span>\n                 -&gt;<span class="hljs-type">Js</span>.<span class="hljs-type">Console</span>.warn;\n               } <span class="hljs-keyword">else</span> {\n                 <span class="hljs-string">"Connection generation unknown"</span>-&gt;<span class="hljs-type">Js</span>.<span class="hljs-type">Console</span>.warn;\n               }\n             | <span class="hljs-type">Some</span>(z) =&gt;\n               <span class="hljs-keyword">if</span> (z == <span class="hljs-type">ReactNativeNetInfo</span>.net2G) {\n                 <span class="hljs-string">"2G connection"</span>-&gt;<span class="hljs-type">Js</span>.<span class="hljs-type">Console</span>.warn;\n               } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (z == <span class="hljs-type">ReactNativeNetInfo</span>.net3G) {\n                 <span class="hljs-string">"3G connection"</span>-&gt;<span class="hljs-type">Js</span>.<span class="hljs-type">Console</span>.warn;\n               } <span class="hljs-keyword">else</span> {\n                 <span class="hljs-string">"4G connection"</span>-&gt;<span class="hljs-type">Js</span>.<span class="hljs-type">Console</span>.warn;\n               }\n             };\n           };\n         }\n         -&gt;resolve\n       )\n    |&gt; catch(err =&gt; <span class="hljs-string">"error"</span>-&gt;<span class="hljs-type">Js</span>.<span class="hljs-type">Console</span>.warn-&gt;resolve)\n    |&gt; ignore\n  );\n  <span class="hljs-type">None</span>;\n});</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">3195</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h4 id="addeventlistener"><a href="#addeventlistener" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>addEventListener</code></h4>\n<p>To subscribe to the connection state; accepts a listener of type\n<code>netInfoState => unit</code> and returns an unsubscribe method of type <code>unit => unit</code>.\nThe listener will be called once following subscription and each time connection\nstate changes.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>addEventListener: (netInfoState =&gt; unit) =&gt; t;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = <span class="hljs-keyword">fun</span> addEventListener  -&gt; (t : netInfoState -&gt; <span class="hljs-built_in">unit</span>)</code></pre>\n      </div>\n    </div>\n  \n<p>where</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> t = unit =&gt; unit</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> t = <span class="hljs-built_in">unit</span> -&gt; <span class="hljs-built_in">unit</span></code></pre>\n      </div>\n    </div>\n  \n<p>Below example demonstrates subscribing to changes in connection state:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">React</span>.useEffect0(() =&gt; {\n  <span class="hljs-keyword">let</span> remove =\n    <span class="hljs-type">ReactNativeNetInfo</span>.addEventListener(w =&gt;\n      (\n        <span class="hljs-keyword">switch</span> (w##details-&gt;<span class="hljs-type">Js</span>.<span class="hljs-type">Null</span>.toOption) {\n        | <span class="hljs-type">None</span> =&gt; <span class="hljs-string">"Connection type is none or unknown"</span>\n        | <span class="hljs-type">Some</span>(x) =&gt;\n          <span class="hljs-keyword">let</span> y = x##cellularGeneration;\n          <span class="hljs-keyword">switch</span> (y-&gt;<span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.toOption) {\n          | <span class="hljs-type">None</span> =&gt;\n            <span class="hljs-keyword">if</span> (y == <span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.undefined) {\n              <span class="hljs-string">"Connection type is wifi, bluetooth, ethernet, wimax, vpn or other"</span>;\n            } <span class="hljs-keyword">else</span> {\n              <span class="hljs-string">"Connection generation unknown"</span>;\n            }\n          | <span class="hljs-type">Some</span>(z) =&gt;\n            <span class="hljs-keyword">if</span> (z == <span class="hljs-type">ReactNativeNetInfo</span>.net2G) {\n              <span class="hljs-string">"2G connection"</span>;\n            } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (z == <span class="hljs-type">ReactNativeNetInfo</span>.net3G) {\n              <span class="hljs-string">"3G connection"</span>;\n            } <span class="hljs-keyword">else</span> {\n              <span class="hljs-string">"4G connection"</span>;\n            }\n          };\n        }\n      )\n      -&gt;<span class="hljs-type">Js</span>.<span class="hljs-type">Console</span>.warn\n    );\n  <span class="hljs-type">Js</span>.<span class="hljs-type">Console</span>.warn(remove);\n  <span class="hljs-type">Some</span>(() =&gt; remove());\n});</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">3195</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h4 id="usenetinfo"><a href="#usenetinfo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>useNetInfo</code></h4>\n<p>This method returns a React Hook with type <code>netInfoState</code></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>useNetInfo: unit =&gt; netInfoState</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = <span class="hljs-keyword">fun</span> useNetInfo  -&gt; (netInfoState : <span class="hljs-built_in">unit</span>)</code></pre>\n      </div>\n    </div>\n  \n<p>Below example demonstrates its use within a <code>Text</code> component:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>&lt;<span class="hljs-type">Text</span>&gt;\n  (\n    <span class="hljs-keyword">switch</span> (<span class="hljs-type">ReactNativeNetInfo</span>.useNetInfo()##details-&gt;<span class="hljs-type">Js</span>.<span class="hljs-type">Null</span>.toOption) {\n    | <span class="hljs-type">None</span> =&gt; <span class="hljs-string">"Connection type is none or unknown"</span>\n    | <span class="hljs-type">Some</span>(x) =&gt;\n      <span class="hljs-keyword">let</span> y = x##cellularGeneration;\n      <span class="hljs-keyword">switch</span> (y-&gt;<span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.toOption) {\n      | <span class="hljs-type">None</span> =&gt;\n        <span class="hljs-keyword">if</span> (y == <span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.undefined) {\n          <span class="hljs-string">"Connection type is wifi, bluetooth, ethernet, wimax, vpn or other"</span>;\n        } <span class="hljs-keyword">else</span> {\n          <span class="hljs-string">"Connection generation unknown"</span>;\n        }\n      | <span class="hljs-type">Some</span>(z) =&gt;\n        <span class="hljs-keyword">if</span> (z == <span class="hljs-type">ReactNativeNetInfo</span>.net2G) {\n          <span class="hljs-string">"2G connection"</span>;\n        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (z == <span class="hljs-type">ReactNativeNetInfo</span>.net3G) {\n          <span class="hljs-string">"3G connection"</span>;\n        } <span class="hljs-keyword">else</span> {\n          <span class="hljs-string">"4G connection"</span>;\n        }\n      };\n    }\n  )\n  -&gt;<span class="hljs-type">React</span>.string\n&lt;/<span class="hljs-type">Text</span>&gt;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">3195</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/reasonml-community/reason-react-native#readme",repositoryUrl:"https://github.com/reasonml-community/reason-react-native",npmUrl:"https://www.npmjs.com/package/%40reason-react-native%2Fnetinfo",issuesUrl:"https://github.com/reasonml-community/reason-react-native/issues",slug:"/package/@reason-react-native/netinfo"}},pathContext:{id:"@reason-react-native/netinfo"}}}});
//# sourceMappingURL=path---package-reason-react-native-netinfo-d35e49b87be95c3f78c7.js.map