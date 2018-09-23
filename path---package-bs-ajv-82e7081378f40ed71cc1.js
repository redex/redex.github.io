webpackJsonp([0x6da0546c8c03],{1089:function(s,a){s.exports={data:{package:{id:"bs-ajv",stars:1,name:"bs-ajv",version:"1.0.1",category:"binding",flags:[],platforms:["any"],description:"BucklesScript bindings to Ajv (Another JSON Validator)",keywords:["json"],license:"MIT",updated:"2018-09-20T13:07:36.284Z",type:"published",score:.63335463296879,quality:.912381585110613,popularity:.027621845539599992,maintenance:.9999214614192748,readme:'<p><a href="https://www.travis-ci.org/scull7/bs-ajv"><img src="https://www.travis-ci.org/scull7/bs-ajv.svg?branch=master" alt="Build Status"></a>\n<a href="https://coveralls.io/github/scull7/bs-ajv?branch=master"><img src="https://coveralls.io/repos/github/scull7/bs-ajv/badge.svg?branch=master" alt="Coverage Status"></a></p>\n<h1 id="bs-ajv"><a href="#bs-ajv" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-ajv</h1>\n<p>BuckleScript bindings to <a href="http://epoberezkin.github.io/ajv/">Ajv</a> (Another JSON Validator)</p>\n<h2 id="why"><a href="#why" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why?</h2>\n<p>To be able to use standardized validation schemas across our JavaScript and\nBuckleScript based code.</p>\n<h2 id="how-do-i-install"><a href="#how-do-i-install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do I install?</h2>\n<ol>\n<li>\n<p>Add the <a href="https://www.npmjs.com/package/bs-ajv">bs-ajv</a> package to your project via yarn/npm</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>yarn add bs-ajv</code></pre></div>\n</li>\n<li>\n<p>Add <a href="https://www.npmjs.com/package/bs-ajv">bs-ajv</a> to your <code>bsconfig.json</code></p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"dependencies"</span>: [ <span class="hljs-string">"bs-ajv"</span> ]\n}</code></pre></div>\n</li>\n<li>\n<p>Enjoy!</p>\n</li>\n</ol>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>The interface here is a bit rough, but it is usable and is used within\nproduction.  Here are a few examples pulled from the <a href="http://epoberezkin.github.io/ajv/">Ajv</a> docs.</p>\n<h3 id="basic-first-example"><a href="#basic-first-example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic first example</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> schema = <span class="hljs-type">Json</span>.<span class="hljs-type">Encode</span>.(object_([\n  (<span class="hljs-string">"properties"</span>, object_([\n    (<span class="hljs-string">"smaller"</span>, object_([\n      (<span class="hljs-string">"type"</span>, string(<span class="hljs-string">"number"</span>)),\n      (<span class="hljs-string">"maximum"</span>, object_([\n        (<span class="hljs-string">"$data"</span>, string(<span class="hljs-string">"1/larger"</span>)),\n      ])),\n    ])),\n    (<span class="hljs-string">"larger"</span>, object_([\n      (<span class="hljs-string">"type"</span>, string(<span class="hljs-string">"number"</span>)),\n    ])),\n  ])),\n]));\n\n<span class="hljs-keyword">let</span> validData = <span class="hljs-type">Json</span>.<span class="hljs-type">Encode</span>.(object_([\n  (<span class="hljs-string">"smaller"</span>, int(<span class="hljs-number">5</span>)),\n  (<span class="hljs-string">"larger"</span>, int(<span class="hljs-number">7</span>)),\n]));\n\n<span class="hljs-type">AjvOptions</span>.make()\n|&gt; <span class="hljs-type">AjvOptions</span>.setData(<span class="hljs-number">_</span>, <span class="hljs-type">Js</span>.true_)\n|&gt; <span class="hljs-type">Ajv</span>.ajv\n|&gt; <span class="hljs-type">Ajv</span>.validate(`<span class="hljs-type">Schema</span>(schema), validData)\n<span class="hljs-comment">/* This will return `Js.true_` */</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> schema =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Json</span>.<span class="hljs-type">Encode</span> <span class="hljs-keyword">in</span>\n    object_\n      [(<span class="hljs-string">"properties"</span>,\n         (object_\n            [(<span class="hljs-string">"smaller"</span>,\n               (object_\n                  [(<span class="hljs-string">"type"</span>, (<span class="hljs-built_in">string</span> <span class="hljs-string">"number"</span>));\n                  (<span class="hljs-string">"maximum"</span>, (object_ [(<span class="hljs-string">"$data"</span>, (<span class="hljs-built_in">string</span> <span class="hljs-string">"1/larger"</span>))]))]));\n            (<span class="hljs-string">"larger"</span>, (object_ [(<span class="hljs-string">"type"</span>, (<span class="hljs-built_in">string</span> <span class="hljs-string">"number"</span>))]))]))]\n<span class="hljs-keyword">let</span> validData =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Json</span>.<span class="hljs-type">Encode</span> <span class="hljs-keyword">in</span> object_ [(<span class="hljs-string">"smaller"</span>, (<span class="hljs-built_in">int</span> <span class="hljs-number">5</span>)); (<span class="hljs-string">"larger"</span>, (<span class="hljs-built_in">int</span> <span class="hljs-number">7</span>))]\n<span class="hljs-keyword">let</span> _ =\n  (((<span class="hljs-type">AjvOptions</span>.make <span class="hljs-literal">()</span>) |&gt; (<span class="hljs-keyword">fun</span> __x  -&gt; <span class="hljs-type">AjvOptions</span>.setData __x <span class="hljs-type">Js</span>.true_)) |&gt;\n     <span class="hljs-type">Ajv</span>.ajv)\n    |&gt; (<span class="hljs-type">Ajv</span>.validate (<span class="hljs-tag">`Schema</span> schema) validData)</code></pre>\n      </div>\n    </div>\n  \n<h3 id="example-with-a-self-reference"><a href="#example-with-a-self-reference" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example with a self reference</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> schema = <span class="hljs-type">Json</span>.<span class="hljs-type">Encode</span>.(object_([\n  (<span class="hljs-string">"additionalProperties"</span>, object_([\n    (<span class="hljs-string">"type"</span>, string(<span class="hljs-string">"string"</span>)),\n    (<span class="hljs-string">"format"</span>, object_([ (<span class="hljs-string">"$data"</span>, string(<span class="hljs-string">"0#"</span>)) ]))\n  ])),\n]));\n\n<span class="hljs-keyword">let</span> validData = <span class="hljs-type">Json</span>.<span class="hljs-type">Encode</span>.(object_([\n  (<span class="hljs-string">"date-time"</span>, string(<span class="hljs-string">"1963-06-19T08:30:06.283185Z"</span>)),\n  (<span class="hljs-string">"email"</span>, string(<span class="hljs-string">"joe.bloggs@example.com"</span>)),\n]));\n\n<span class="hljs-type">AjvOptions</span>.make()\n|&gt; <span class="hljs-type">AjvOptions</span>.setData(<span class="hljs-number">_</span>, <span class="hljs-type">Js</span>.true_)\n|&gt; <span class="hljs-type">Ajv</span>.ajv\n|&gt; <span class="hljs-type">Ajv</span>.validate(`<span class="hljs-type">Schema</span>(schema), validData)\n<span class="hljs-comment">/* This will return `Js.true_` */</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> schema =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Json</span>.<span class="hljs-type">Encode</span> <span class="hljs-keyword">in</span>\n    object_\n      [(<span class="hljs-string">"additionalProperties"</span>,\n         (object_\n            [(<span class="hljs-string">"type"</span>, (<span class="hljs-built_in">string</span> <span class="hljs-string">"string"</span>));\n            (<span class="hljs-string">"format"</span>, (object_ [(<span class="hljs-string">"$data"</span>, (<span class="hljs-built_in">string</span> <span class="hljs-string">"0#"</span>))]))]))]\n<span class="hljs-keyword">let</span> validData =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Json</span>.<span class="hljs-type">Encode</span> <span class="hljs-keyword">in</span>\n    object_\n      [(<span class="hljs-string">"date-time"</span>, (<span class="hljs-built_in">string</span> <span class="hljs-string">"1963-06-19T08:30:06.283185Z"</span>));\n      (<span class="hljs-string">"email"</span>, (<span class="hljs-built_in">string</span> <span class="hljs-string">"joe.bloggs@example.com"</span>))]\n<span class="hljs-keyword">let</span> _ =\n  (((<span class="hljs-type">AjvOptions</span>.make <span class="hljs-literal">()</span>) |&gt; (<span class="hljs-keyword">fun</span> __x  -&gt; <span class="hljs-type">AjvOptions</span>.setData __x <span class="hljs-type">Js</span>.true_)) |&gt;\n     <span class="hljs-type">Ajv</span>.ajv)\n    |&gt; (<span class="hljs-type">Ajv</span>.validate (<span class="hljs-tag">`Schema</span> schema) validData)</code></pre>\n      </div>\n    </div>\n  \n<h3 id="example-using-schema-compilation-and-additional-property-filtering"><a href="#example-using-schema-compilation-and-additional-property-filtering" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example using schema compilation and additional property filtering</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> schema = <span class="hljs-type">Json</span>.<span class="hljs-type">Encode</span>.(object_([\n  (<span class="hljs-string">"additionalProperties"</span>, bool(<span class="hljs-literal">false</span>)),\n  (<span class="hljs-string">"properties"</span>, object_([\n    (<span class="hljs-string">"foo"</span>, object_([\n      (<span class="hljs-string">"type"</span>, string(<span class="hljs-string">"number"</span>)),\n    ])),\n    (<span class="hljs-string">"bar"</span>, object_([\n      (<span class="hljs-string">"baz"</span>, object_([\n        (<span class="hljs-string">"type"</span>, string(<span class="hljs-string">"string"</span>)),\n      ])),\n    ])),\n  ])),\n]));\n\n<span class="hljs-keyword">let</span> validData = <span class="hljs-type">Json</span>.<span class="hljs-type">Encode</span>.(object_([\n  (<span class="hljs-string">"foo"</span>, int(<span class="hljs-number">0</span>)),\n  (<span class="hljs-string">"additional1"</span>, int(<span class="hljs-number">1</span>)),\n  (<span class="hljs-string">"bar"</span>, object_([\n    (<span class="hljs-string">"baz"</span>, string(<span class="hljs-string">"abc"</span>)),\n    (<span class="hljs-string">"additional2"</span>, int(<span class="hljs-number">2</span>)),\n  ])),\n]));\n\n<span class="hljs-type">AjvOptions</span>.make()\n|&gt; <span class="hljs-type">AjvOptions</span>.removeAdditional(<span class="hljs-number">_</span>, <span class="hljs-type">Js</span>.true_)\n|&gt; <span class="hljs-type">Ajv</span>.ajv\n|&gt; <span class="hljs-type">Ajv</span>.compile(schema)\n|&gt; (<span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params">\n<span class="hljs-params"> <span class="hljs-params"> |<span class="hljs-params"> `Sync(fn)<span class="hljs-params"> </span></span></span></span></span></span>=&gt; fn\n  | `<span class="hljs-type">Async</span>(<span class="hljs-number">_</span>) =&gt; failwith(<span class="hljs-string">"unexpected_async_mode"</span>)\n  )\n|&gt; (v) =&gt; validate(validData)\n|&gt; (<span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params">\n<span class="hljs-params"> <span class="hljs-params"> |<span class="hljs-params"> `Valid(<span class="hljs-number">_</span>)<span class="hljs-params"> </span></span></span></span></span></span>=&gt; <span class="hljs-type">Js</span>.true_\n  | `<span class="hljs-type">Invalid</span>(<span class="hljs-number">_</span>) =&gt; <span class="hljs-type">Js</span>.false_\n  )\n<span class="hljs-comment">/* This will return `Js.true_`</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code>unknown refmt error</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/scull7/bs-ajv",repositoryUrl:"https://github.com/scull7/bs-ajv",npmUrl:"https://www.npmjs.com/package/bs-ajv",issuesUrl:"https://github.com/scull7/bs-ajv/issues",slug:"/package/bs-ajv"}},pathContext:{id:"bs-ajv"}}}});
//# sourceMappingURL=path---package-bs-ajv-82e7081378f40ed71cc1.js.map