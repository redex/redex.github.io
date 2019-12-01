webpackJsonp([0x7d111581e2ea],{1414:function(s,n){s.exports={data:{package:{type:"published",id:"stylite-re",name:"stylite-re",version:"0.1.0",category:"library",flags:["neglected"],platforms:["browser"],description:"The core of `Stylite` is the ability to express CSS rules using `Reason` syntax.",keywords:["css"],license:"MIT",updated:"2019-11-27T12:18:47.578Z",stars:null,score:.2344146085915155,quality:.6958894545955303,popularity:.002860202738400961,maintenance:.07041914644118877,readme:'<h1 id="the-core"><a href="#the-core" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The core</h1>\n<p>The core of <code>Stylite</code> is the ability to express CSS rules using <code>Reason</code> syntax.</p>\n<p>A <code>selector</code> is a string of a CSS selector.\nA <code>declaration</code> is a reason constuctor that corresponds to a css declaration e.g. <code>BackgroundColor "red"</code> or <code>PaddingTop "10px"</code>.</p>\n<p>A <code>rule</code> is a couple made of:\n1. a list of selectors\n2. a list of declarations</p>\n<p>A <code>mediaQuery</code> is a couple made of:\n1. optional media query\n2. a list of rules</p>\n<p>Here is an example of a <code>rule</code> and <code>mediaQuery</code>:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> my_rule = ([<span class="hljs-string">"#button-1"</span>, <span class="hljs-string">".big-rectangle"</span>], [<span class="hljs-type">BackgroundColor</span>(<span class="hljs-string">"red"</span>), <span class="hljs-type">PaddingTop</span>(<span class="hljs-string">"10px"</span>)]);\n<span class="hljs-keyword">let</span> my_media_query = (<span class="hljs-type">Some</span>(<span class="hljs-string">"screen and (max-width: 664px)"</span>), [my_rules]);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> my_rule =\n  ([<span class="hljs-string">"#button-1"</span>; <span class="hljs-string">".big-rectangle"</span>],\n    [((<span class="hljs-type">BackgroundColor</span> (<span class="hljs-string">"red"</span>))[@explicit_arity ]);\n    ((<span class="hljs-type">PaddingTop</span> (<span class="hljs-string">"10px"</span>))[@explicit_arity ])])\n<span class="hljs-keyword">let</span> my_media_query =\n  (((<span class="hljs-type">Some</span> (<span class="hljs-string">"screen and (max-width: 664px)"</span>))[@explicit_arity ]), [my_rules])</code></pre>\n      </div>\n    </div>\n  \n<p>We can convert a <code>rule</code> to a CSS statement with <code>print_rule</code>:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-built_in">print</span>(my_rule);\n<span class="hljs-comment">/*\n"#button-1, .big-rectangle {\n  background-color: red;\n  padding-top: 10px;\n}";\n*/</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = print my_rule</code></pre>\n      </div>\n    </div>\n  \n<p>And convert a <code>mediaQuery</code> to a CSS statement with <code>print_media_query</code>:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-built_in">print</span>(my_media_query);\n<span class="hljs-comment">/*\n"@media screen and (max-width: 664px) {\n  #button-1, .big-rectangle {\n    background-color: red;\n    padding-top: 10px;\n  }\n}";\n*/</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = print my_media_query</code></pre>\n      </div>\n    </div>\n  \n<h1 id="integration-in-an-application"><a href="#integration-in-an-application" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Integration in an application</h1>\n<p>In order to integrate <code>Stylite</code> rules in an application one has to:\n1. Create a <code>Stylite</code> instance with <code>Stylite.Make()</code>\n2. Register the rules into a class with <code>register_rules</code>\n3. Apply the class to an element\n4. Load all the class rules (this is done differently for client side and server side rendering (<code>print_all_rules</code>))</p>\n<h1 id="register-rules-into-a-class"><a href="#register-rules-into-a-class" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Register rules into a class</h1>\n<p>We can register </p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> wrap_image_cls =\n  <span class="hljs-type">StyliteRe</span>.<span class="hljs-type">Rules</span>.(\n    <span class="hljs-type">Stylite</span>.register_rules(\n      ~cls=<span class="hljs-string">"wrap_image"</span>,\n      ~declaration=[\n        <span class="hljs-type">BorderRadius</span>(<span class="hljs-string">"30px"</span>),\n        <span class="hljs-type">Border</span>(<span class="hljs-string">"1px solid"</span>),\n        <span class="hljs-type">BorderColor</span>(<span class="hljs-string">"#19c0ff"</span>),\n        <span class="hljs-type">MarginRight</span>(<span class="hljs-string">"15px"</span>),\n        <span class="hljs-type">Cursor</span>(<span class="hljs-string">"pointer"</span>)\n      ],\n      ()\n    )\n  );</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> wrap_image_cls =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">StyliteRe</span>.<span class="hljs-type">Rules</span> <span class="hljs-keyword">in</span>\n    <span class="hljs-type">Stylite</span>.register_rules ~cls:<span class="hljs-string">"wrap_image"</span>\n      ~declaration:[((<span class="hljs-type">BorderRadius</span> (<span class="hljs-string">"30px"</span>))[@explicit_arity ]);\n                   ((<span class="hljs-type">Border</span> (<span class="hljs-string">"1px solid"</span>))[@explicit_arity ]);\n                   ((<span class="hljs-type">BorderColor</span> (<span class="hljs-string">"#19c0ff"</span>))[@explicit_arity ]);\n                   ((<span class="hljs-type">MarginRight</span> (<span class="hljs-string">"15px"</span>))[@explicit_arity ]);\n                   ((<span class="hljs-type">Cursor</span> (<span class="hljs-string">"pointer"</span>))[@explicit_arity ])] <span class="hljs-literal">()</span></code></pre>\n      </div>\n    </div>\n  \n<h1 id="pseudo-selector-and-nested-selector"><a href="#pseudo-selector-and-nested-selector" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Pseudo selector and nested selector</h1>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">StyliteRe</span>.<span class="hljs-type">Rules</span>;\n\n<span class="hljs-keyword">let</span> image_cls = <span class="hljs-type">Stylite</span>.register_rules(~cls=<span class="hljs-string">"image"</span>, ~decl=[<span class="hljs-type">Margin</span>(<span class="hljs-string">"15px"</span>)]);\n\n<span class="hljs-keyword">let</span> wrap_image_cls =\n  <span class="hljs-type">Stylite</span>.register_rules(\n    ~cls=<span class="hljs-string">"wrap_image"</span>,\n    ~rules=[\n      ([<span class="hljs-string">"&amp;:hover &gt; ."</span> ++ image_cls], [<span class="hljs-type">Border</span>(<span class="hljs-string">"solid 1px red"</span>)]),\n      ([<span class="hljs-string">"&amp; &gt; ."</span> ++ image_cls], [<span class="hljs-type">Border</span>(<span class="hljs-string">"solid 1px black"</span>)])\n    ],\n    ()\n  );\n\n<span class="hljs-keyword">let</span> css = <span class="hljs-type">Stylite</span>.print_all();\n\n<span class="hljs-comment">// Css is</span>\n<span class="hljs-comment">// .image {</span>\n<span class="hljs-comment">//   margin 15px;</span>\n<span class="hljs-comment">// }</span>\n<span class="hljs-comment">//</span>\n<span class="hljs-comment">// .wrap_image:hover .image {</span>\n<span class="hljs-comment">//   border: solid 1px red;</span>\n<span class="hljs-comment">// }</span>\n<span class="hljs-comment">//</span>\n<span class="hljs-comment">// .wrap_image .image {</span>\n<span class="hljs-comment">//   border: solid 1px black;</span>\n<span class="hljs-comment">// }</span>\n<span class="hljs-comment">//</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2553</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h1 id="use-media-query"><a href="#use-media-query" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Use media query</h1>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">StyliteRe</span>.<span class="hljs-type">Rules</span>;\n\n<span class="hljs-keyword">let</span> image_cls = <span class="hljs-type">Stylite</span>.register_rules(~cls=<span class="hljs-string">"image"</span>, ~decl=[<span class="hljs-type">Margin</span>(<span class="hljs-string">"15px"</span>)]);\n\n<span class="hljs-keyword">let</span> wrap_image_cls =\n  <span class="hljs-type">Stylite</span>.register_rules(\n    ~cls=<span class="hljs-string">"wrap_image"</span>,\n    ~mediaQueries=[\n      (<span class="hljs-type">None</span>, [([<span class="hljs-string">"&amp;"</span>], [<span class="hljs-type">Color</span>(<span class="hljs-string">"blue"</span>)])]),\n      (\n        <span class="hljs-type">Some</span>(<span class="hljs-string">"screen and (max-width: 664px)"</span>),\n        [\n          ([<span class="hljs-string">"&amp;:hover &gt; ."</span> ++ image_cls], [<span class="hljs-type">Border</span>(<span class="hljs-string">"solid 1px red"</span>)]),\n          ([<span class="hljs-string">"&amp; &gt; ."</span> ++ image_cls], [<span class="hljs-type">Border</span>(<span class="hljs-string">"solid 1px black"</span>)]),\n        ],\n      ),\n    ],\n    (),\n  );\n\n\n<span class="hljs-keyword">let</span> css = <span class="hljs-type">Stylite</span>.print_all();\n\n<span class="hljs-comment">// Css is</span>\n<span class="hljs-comment">// </span>\n<span class="hljs-comment">// .image {</span>\n<span class="hljs-comment">//   margin 15px;</span>\n<span class="hljs-comment">// }</span>\n<span class="hljs-comment">//</span>\n<span class="hljs-comment">// .wrap_image {</span>\n<span class="hljs-comment">//   color: blue;</span>\n<span class="hljs-comment">// } </span>\n<span class="hljs-comment">//</span>\n<span class="hljs-comment">// @media screen and (max-width: 664px) {</span>\n<span class="hljs-comment">//   .wrap_image:hover .image {</span>\n<span class="hljs-comment">//     border: solid 1px red;</span>\n<span class="hljs-comment">//   }</span>\n<span class="hljs-comment">//</span>\n<span class="hljs-comment">//   .wrap_image .image {</span>\n<span class="hljs-comment">//     border: solid 1px black;</span>\n<span class="hljs-comment">//   }</span>\n<span class="hljs-comment">// }</span>\n<span class="hljs-comment">//</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2553</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h1 id="server-side-rendering"><a href="#server-side-rendering" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Server side rendering</h1>\n<p>retrieve the CSS string with <code>print_all</code> and put it into a <code>&#x3C;style></code> element</p>\n<h1 id="client-side-rendering"><a href="#client-side-rendering" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Client side rendering</h1>\n<p>Once the first page of the app is created, inject the CSS into a tag and follow style changes with <code>inject_in_tag_and_follow_changes</code>.</p>\n',homepageUrl:null,repositoryUrl:null,npmUrl:"https://www.npmjs.com/package/stylite-re",issuesUrl:null,slug:"/package/stylite-re"}},pathContext:{id:"stylite-re"}}}});
//# sourceMappingURL=path---package-stylite-re-c3f111ad0b0707eab6b7.js.map