webpackJsonp([0x660148b52fef],{1200:function(s,a){s.exports={data:{package:{id:"unpublished/AndrewKvalheim/bs-geofire",stars:2,name:"AndrewKvalheim/bs-geofire",version:"0.2.0",category:"binding",flags:[],platforms:["browser"],description:"BuckleScript bindings to GeoFire",keywords:["geolocation","database","cloud service api"],license:"MIT",updated:"2018-03-07T00:02:39.781Z",type:"unpublished",score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="bs-geofire"><a href="#bs-geofire" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-geofire</h1>\n<p><a href="https://bucklescript.github.io/">BuckleScript</a> bindings to <a href="https://github.com/firebase/geofire-js/">GeoFire</a>, written in <a href="https://reasonml.github.io/">Reason</a>.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>Install NPM packages <a href="https://github.com/viskahq/bs-firebase">bs-firebase</a> and <a href="https://github.com/AndrewKvalheim/bs-geofire">bs-geofire</a>—</p>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code>yarn add <span class="hljs-string">\'bs-firebase\'</span> <span class="hljs-string">\'https://github.com/AndrewKvalheim/bs-geofire\'</span></code></pre></div>\n<p>—and register both in <a href="https://bucklescript.github.io/bucklescript/Manual.html#_build_with_other_bucklescript_dependencies"><code>bsconfig.json</code></a>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-diff"><code>-  <span class="hljs-string">"bs-dependencies"</span>: <span class="hljs-literal">[]</span>\n+  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"bs-firebase"</span>, <span class="hljs-string">"bs-geofire"</span>]</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>Refer to the <a href="./src/GeoFire.rei">module interface</a> and <a href="https://github.com/firebase/geofire-js/blob/v4.1.2/docs/reference.md">GeoFire API</a>.</p>\n<h3 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* Initialize GeoFire. */</span>\n<span class="hljs-keyword">let</span> app = <span class="hljs-type">ReasonFirebase</span>.initializeApp(~options);\n<span class="hljs-keyword">let</span> database = <span class="hljs-type">ReasonFirebase</span>.<span class="hljs-type">App</span>.database(app);\n<span class="hljs-keyword">let</span> reference = <span class="hljs-type">ReasonFirebase</span>.<span class="hljs-type">Database</span>.<span class="hljs-keyword">ref</span>(database, ~path=<span class="hljs-string">"example"</span>, ());\n<span class="hljs-keyword">let</span> geoFire = <span class="hljs-type">GeoFire</span>.make(reference);\n\n<span class="hljs-comment">/* Start a query. */</span>\n<span class="hljs-keyword">let</span> geoQuery = <span class="hljs-type">GeoFire</span>.query(geoFire, ~center=(<span class="hljs-number">49.304</span>, -<span class="hljs-number">123.145</span>), ~radius=<span class="hljs-number">2.0</span>);\n\n<span class="hljs-comment">/* Subscribe to nearby moved locations. */</span>\n<span class="hljs-keyword">let</span> callback = (key, location, <span class="hljs-built_in">distance</span>) =&gt;\n  <span class="hljs-type">Js</span>.log({j|$key moved <span class="hljs-keyword">to</span> $location, which <span class="hljs-keyword">is</span> $<span class="hljs-built_in">distance</span> km away.|j});\n<span class="hljs-keyword">let</span> registration = <span class="hljs-type">GeoFire</span>.<span class="hljs-type">GeoQuery</span>.on(geoQuery, `key_moved(callback));\n\n<span class="hljs-comment">/* Add a location, */</span>\n<span class="hljs-type">GeoFire</span>.<span class="hljs-keyword">set</span>(geoFire, <span class="hljs-string">"foo"</span>, (<span class="hljs-number">49.306</span>, -<span class="hljs-number">123.156</span>))\n<span class="hljs-comment">/* then move it, */</span>\n|&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.then_(() =&gt; <span class="hljs-type">GeoFire</span>.<span class="hljs-keyword">set</span>(geoFire, <span class="hljs-string">"foo"</span>, (<span class="hljs-number">49.313</span>, -<span class="hljs-number">123.148</span>)))\n<span class="hljs-comment">/* then unsubscribe and stop the query. */</span>\n|&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.then_(() =&gt; {\n     <span class="hljs-type">GeoFire</span>.<span class="hljs-type">GeoCallbackRegistration</span>.cancel(registration);\n     <span class="hljs-type">GeoFire</span>.<span class="hljs-type">GeoQuery</span>.cancel(geoQuery);\n     <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve()\n   })</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> app = <span class="hljs-type">ReasonFirebase</span>.initializeApp ~options\n<span class="hljs-keyword">let</span> database = <span class="hljs-type">ReasonFirebase</span>.<span class="hljs-type">App</span>.database app\n<span class="hljs-keyword">let</span> reference = <span class="hljs-type">ReasonFirebase</span>.<span class="hljs-type">Database</span>.<span class="hljs-built_in">ref</span> database ~path:<span class="hljs-string">"example"</span> <span class="hljs-literal">()</span>\n<span class="hljs-keyword">let</span> geoFire = <span class="hljs-type">GeoFire</span>.make reference\n<span class="hljs-keyword">let</span> geoQuery = <span class="hljs-type">GeoFire</span>.query geoFire ~center:(<span class="hljs-number">49.304</span>, (-<span class="hljs-number">123.145</span>)) ~radius:<span class="hljs-number">2.0</span>\n<span class="hljs-keyword">let</span> callback key location distance =\n  <span class="hljs-type">Js</span>.log {j|$key moved <span class="hljs-keyword">to</span> $location, which is $distance km away.|j}\n<span class="hljs-keyword">let</span> registration = <span class="hljs-type">GeoFire</span>.<span class="hljs-type">GeoQuery</span>.on geoQuery (`key_moved callback)\n<span class="hljs-keyword">let</span> _ =\n  ((<span class="hljs-type">GeoFire</span>.set geoFire <span class="hljs-string">"foo"</span> (<span class="hljs-number">49.306</span>, (-<span class="hljs-number">123.156</span>))) |&gt;\n     (<span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.then_\n        (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt; <span class="hljs-type">GeoFire</span>.set geoFire <span class="hljs-string">"foo"</span> (<span class="hljs-number">49.313</span>, (-<span class="hljs-number">123.148</span>)))))\n    |&gt;\n    (<span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.then_\n       (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n          <span class="hljs-type">GeoFire</span>.<span class="hljs-type">GeoCallbackRegistration</span>.cancel registration;\n          <span class="hljs-type">GeoFire</span>.<span class="hljs-type">GeoQuery</span>.cancel geoQuery;\n          <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve <span class="hljs-literal">()</span>))</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/AndrewKvalheim/bs-geofire#readme",repositoryUrl:"https://github.com/AndrewKvalheim/bs-geofire",npmUrl:null,issuesUrl:"https://github.com/AndrewKvalheim/bs-geofire/issues",slug:"/package/unpublished/AndrewKvalheim/bs-geofire"}},pathContext:{id:"unpublished/AndrewKvalheim/bs-geofire"}}}});
//# sourceMappingURL=path---package-unpublished-andrew-kvalheim-bs-geofire-cd9e0d0601689591da19.js.map