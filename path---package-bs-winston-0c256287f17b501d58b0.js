webpackJsonp([0xc7cc274a8384],{1287:function(e,s){e.exports={data:{package:{type:"published",id:"bs-winston",name:"bs-winston",version:"0.6.1",category:"binding",flags:[],platforms:["node"],description:"Winston for ReasonML",keywords:["logging"],license:"MIT",updated:"2019-10-19T13:55:53.845Z",stars:1,score:.6015565622080155,quality:.80857180750752,popularity:.029508591302804876,maintenance:.9961628942850795,readme:'<p><a href="https://www.npmjs.com/package/bs-winston"><img src="https://img.shields.io/npm/v/bs-winston.svg" alt="npm"></a></p>\n<h1 id="bswinston"><a href="#bswinston" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>BsWinston</h1>\n<p>This is adapter of <a href="https://github.com/winstonjs/winston">winston</a> for ReasonML. Because ReasonML is significantly different from js the API here is decidedly different from vanilla winston API. See the API section and examples below.</p>\n<h1 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install bs-winston</code></pre></div>\n<p>And to <code>bsconfig.json</code>: <code>"bs-dependencies": [..., "bs-winston", ...]</code></p>\n<h1 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h1>\n<p>Initialize/Setup a logger e.g. in MyLogger.re you write:</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">Format</span> = <span class="hljs-type">BsWinston</span>.<span class="hljs-type">Format</span>;\n<span class="hljs-keyword">module</span> <span class="hljs-type">Transport</span> = <span class="hljs-type">BsWinston</span>.<span class="hljs-type">Transport</span>;\n\n<span class="hljs-keyword">let</span> logger =\n  <span class="hljs-type">BsWinston</span>.<span class="hljs-type">Builder</span>.(\n    create<span class="hljs-literal">()</span>\n    -&gt; setLevel(<span class="hljs-type">Debug</span>)\n    -&gt; addFormat(<span class="hljs-type">Format</span>.createSimple<span class="hljs-literal">()</span>)\n    -&gt; addTransport(<span class="hljs-type">Transport</span>.createConsole(<span class="hljs-literal">()</span>))\n    -&gt; build);</code></pre></div>\n<p>Use the logger above in another module:</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">L</span> = <span class="hljs-type">BsWinston</span>.<span class="hljs-type">Logger</span>;\n<span class="hljs-keyword">let</span> logger = <span class="hljs-type">MyLogger</span>.logger;\n\n<span class="hljs-type">L</span>.logInfoMsg(logger, <span class="hljs-string">"This is info message"</span>);\n<span class="hljs-type">L</span>.logWarnMsg(logger, <span class="hljs-string">"This messege is sent at warn level"</span>);\n\n<span class="hljs-keyword">try</span> (<span class="hljs-type">Js</span>.<span class="hljs-type">Exn</span>.raiseError(<span class="hljs-string">"log this"</span>)) {\n  | error =&gt; <span class="hljs-type">L</span>.logErrorExn(logger, <span class="hljs-string">"Never fails to fail"</span>, error)\n}\n\n/* <span class="hljs-type">In</span> a complicated case you may want <span class="hljs-keyword">to</span> send extra json keys. <span class="hljs-type">It</span> is possible: */\nlogger\n-&gt; <span class="hljs-type">L</span>.info\n-&gt; <span class="hljs-type">L</span>.withMessage(<span class="hljs-string">"the usual"</span>)\n-&gt; <span class="hljs-type">L</span>.withJson(<span class="hljs-string">"keyX"</span>, <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.<span class="hljs-built_in">string</span>(<span class="hljs-string">"valueX"</span>))\n-&gt; <span class="hljs-type">L</span>.withJson(<span class="hljs-string">"keyY"</span>, <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.number(float_of_int(<span class="hljs-number">42</span>)))\n-&gt; <span class="hljs-type">L</span>.log;</code></pre></div>\n<h1 id="api"><a href="#api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API</h1>\n<h2 id="logger-smallmodule-bswinstonloggersmall"><a href="#logger-smallmodule-bswinstonloggersmall" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Logger <small>(module <code>BsWinston.Logger</code>)</small></h2>\n<ul>\n<li>\n<p>Logger instance is of type <code>BsWinston.Logger.t</code></p>\n</li>\n<li>\n<p>Set level:</p>\n<ul>\n<li><code>error: t => t</code></li>\n<li><code>warn: t => t</code></li>\n<li><code>info: t => t</code></li>\n<li><code>verbose: t => t</code></li>\n<li><code>debug: t => t</code></li>\n<li><code>silly: t => t</code></li>\n</ul>\n<p>The functions do not mutate but rather create a new logger with the requested level.</p>\n</li>\n<li>\n<p>Combinators:</p>\n<ul>\n<li>\n<p><code>withMessage: t => \'a => t</code></p>\n<p>Converts the message (2nd arg) into string (with Js.String.make) and combines it with the possible message in the logger (1st arg) (with one space " " in between to avoid clumping)</p>\n</li>\n<li>\n<p><code>withExn: t => exn => t</code></p>\n<p>Converts the exception to Js.Json.t if it is Js.Exn.t or just stringifies other ocaml exceptions and sets the result to a field ("error" by default) which can be defined on logger options. (This function does not combine with itself i.e. latter usage overwrites the previous)</p>\n</li>\n<li>\n<p><code>withJson: t => string => Js.Json.t => t</code></p>\n<p>Sets the json to a field named with the string parameter.</p>\n</li>\n</ul>\n</li>\n<li>\n<p>Output</p>\n<ul>\n<li>\n<p><code>log: t => unit</code></p>\n<p>Produces the side-effect of logging to the logger transport.</p>\n</li>\n</ul>\n</li>\n<li>\n<p>Convenience functions to make some common use cases less verbose:</p>\n<ul>\n<li><code>logErrorMsg</code> = <code>(logger, msg) => logger -> error -> withMessage(msg) -> log</code></li>\n<li><code>logErrorExn</code> = <code>(logger, msg, error) => logger -> error -> withMessage(msg) -> withExn(error) -> log</code></li>\n<li><code>logWarnMsg</code>  = <code>(logger, msg) => logger -> warn -> withMessage(msg) -> log</code></li>\n<li><code>logInfoMsg</code>  = <code>(logger, msg) => logger -> info -> withMessage(msg) -> log</code></li>\n<li><code>logDebugMsg</code> = <code>(logger, msg) => logger -> debug -> withMessage(msg) -> log</code></li>\n</ul>\n</li>\n</ul>\n<h2 id="builder-smallmodule-bswinstonbuildersmall"><a href="#builder-smallmodule-bswinstonbuildersmall" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Builder <small>(module <code>BsWinston.Builder</code>)</small></h2>\n<p>Loggers can be build either with Builder functions or directly with <code>Logger.create</code> (which is sligthly more lower level).</p>\n<ul>\n<li><code>create: unit => t</code> Create a builder. ! This is without trasport and you need at least one transport to create a valid logger.</li>\n<li><code>setLevel: t => level => t</code> Logger wide max level to output.</li>\n<li><code>setSilent: t => bool => t</code></li>\n<li><code>addFormat: t => Format.t => t</code>  (See Formats) (The list will be auto-combined for winston)</li>\n<li><code>addTransport: t => Transport.t => t</code> (See Transports)</li>\n<li><code>errorKey: t => string => t</code> Set field for error content</li>\n<li><code>build: t => Logger.t</code> Create the logger instance.</li>\n</ul>\n<h2 id="format-smallmodule-bswinstonformatsmall"><a href="#format-smallmodule-bswinstonformatsmall" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Format <small>(module <code>BsWinston.Format</code>)</small></h2>\n<p>Create winston formats with functions:</p>\n<ul>\n<li><code>createAlign</code></li>\n<li><code>createCli</code></li>\n<li><code>createColorize</code></li>\n<li><code>createJson</code></li>\n<li><code>createLabel</code></li>\n<li><code>createLogstash</code></li>\n<li><code>createMetadata</code></li>\n<li><code>createMs</code></li>\n<li><code>createPadLevels</code></li>\n<li><code>createPrettyPrint</code></li>\n<li><code>createPrintf</code></li>\n<li><code>createSimple</code></li>\n<li><code>createSplat</code></li>\n<li><code>createTimestamp</code></li>\n<li><code>createUncolorize</code></li>\n</ul>\n<p>See the <a href="https://github.com/veikkaus/bs-winston/blob/master/src/Format.rei">src/Format.rei</a> file for function argument details and the <a href="https://github.com/winstonjs/logform">logform</a> for further explanations.</p>\n<p>Simple custom filters (without Symbol manipulation) can be created with:</p>\n<ul>\n<li>\n<p><code>fromMapFn: (Js.Dict.t(Js.Json.t) => Js.Dict.t(Js.Json.t)) => t</code></p>\n<p>The function given as argument takes the info object and returns manipulated info object which is then forwarded in the formatting chain.</p>\n</li>\n</ul>\n<h2 id="transport-smallmodule-bswinstontransportsmall"><a href="#transport-smallmodule-bswinstontransportsmall" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Transport <small>(module <code>BsWinston.Transport</code>)</small></h2>\n<p>Create winston transports with functions:</p>\n<ul>\n<li><code>createConsole</code></li>\n<li><code>createFile</code></li>\n<li><code>createHttp</code></li>\n<li><code>createStream</code></li>\n</ul>\n<p>See the <a href="https://github.com/veikkaus/bs-winston/blob/master/src/Transport.rei">src/Transport.rei</a> file for function argument details and the <a href="https://github.com/winstonjs/winston/blob/master/docs/transports.md#winston-core">winston</a> for further explanations.</p>\n<p>Other transports:</p>\n<ul>\n<li><a href="https://github.com/veikkaus/bs-winston-cloudwatch">AWS Cloudwatch</a></li>\n</ul>\n',homepageUrl:"https://github.com/veikkaus/bs-winston#readme",repositoryUrl:"https://github.com/veikkaus/bs-winston",npmUrl:"https://www.npmjs.com/package/bs-winston",issuesUrl:"https://github.com/veikkaus/bs-winston/issues",slug:"/package/bs-winston"}},pathContext:{id:"bs-winston"}}}});
//# sourceMappingURL=path---package-bs-winston-0c256287f17b501d58b0.js.map