webpackJsonp([40757249101207],{1123:function(s,a){s.exports={data:{package:{type:"published",id:"bs-css-core",name:"bs-css-core",version:"0.2.2",category:"library",flags:["neglected","deprecated"],platforms:["browser","node"],description:"BuckleScript statically typed DSL for CSS",keywords:["css"],license:"ISC",updated:"2018-10-26T08:28:51.429Z",stars:8,score:.513792976884502,quality:.49199519100604355,popularity:.05679763780915594,maintenance:.9894721324270983,readme:'<h1 id="bs-css-core"><a href="#bs-css-core" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-css-core</h1>\n<p>Statically typed DSL for writing CSS in ReasonML.</p>\n<p>This is a fork of <a href="https://github.com/SentiaAnalytics/bs-css">bs-css</a> that\nextracts the Css module, so that it can be used by various CSS-in-JS bindings.\nSee <a href="https://github.com/astrada/bs-react-fela-examples">bs-react-fela-examples</a>\nand\n<a href="https://github.com/astrada/bs-styletron-react-examples">bs-styletron-react-examples</a>\nfor practical examples of usage.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>yarn add --dev bs-css-core</code></pre></div>\n<p>In your <code>bsconfig.json</code>, include <code>"bs-css-core"</code> in the <code>bs-dependencies</code>.</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> theme = {\n  textColor: <span class="hljs-type">Css</span>.color,\n  basePadding: <span class="hljs-type">Css</span>.cssunit\n};\n\n<span class="hljs-keyword">let</span> makeStyle = (theme) =&gt;\n  <span class="hljs-type">Css</span>.(\n    style([\n      backgroundColor(white),\n      boxShadow(shadow(~y=<span class="hljs-number">3</span>, ~blur=<span class="hljs-number">5</span>, rgba(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.3</span>))),\n      padding(theme.basePadding),\n      fontSize(rem(<span class="hljs-number">1.5</span>)),\n      color(theme.textColor),\n      marginBottom(theme.basePadding)\n    ])\n  );</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> theme = {\n  textColor: <span class="hljs-type">Css</span>.color;\n  basePadding: <span class="hljs-type">Css</span>.cssunit;}\n<span class="hljs-keyword">let</span> makeStyle theme =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Css</span> <span class="hljs-keyword">in</span>\n    style\n      [backgroundColor white;\n      boxShadow (shadow ~y:<span class="hljs-number">3</span> ~blur:<span class="hljs-number">5</span> (rgba <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0.3</span>));\n      padding theme.basePadding;\n      fontSize (rem <span class="hljs-number">1.5</span>);\n      color theme.textColor;\n      marginBottom theme.basePadding]</code></pre>\n      </div>\n    </div>\n  \n<p><strong>Keyframes</strong></p>\n<p>Define animation keyframes;</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> bounce =\n  <span class="hljs-type">Css</span>.(\n    keyframes([\n      (<span class="hljs-string">"0%"</span>, [transform(scale(<span class="hljs-number">0.1</span>, <span class="hljs-number">0.1</span>)), opacity(<span class="hljs-number">0.0</span>)]),\n      (<span class="hljs-string">"60%"</span>, [transform(scale(<span class="hljs-number">1.2</span>, <span class="hljs-number">1.2</span>)), opacity(<span class="hljs-number">1.0</span>)]),\n      (<span class="hljs-string">"100%"</span>, [transform(scale(<span class="hljs-number">1.0</span>, <span class="hljs-number">1.0</span>)), opacity(<span class="hljs-number">1.0</span>)])\n    ])\n  );\n\n<span class="hljs-keyword">let</span> makeStyle = (_theme) =&gt;\n  <span class="hljs-type">Css</span>.(\n    style([\n      animationName(bounce),\n      animationDuration(<span class="hljs-number">2000</span>),\n      width(px(<span class="hljs-number">50</span>)),\n      height(px(<span class="hljs-number">50</span>)),\n      backgroundColor(rgb(<span class="hljs-number">255</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>))\n    ])\n  );</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> bounce =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Css</span> <span class="hljs-keyword">in</span>\n    keyframes\n      [(<span class="hljs-string">"0%"</span>, [transform (scale <span class="hljs-number">0.1</span> <span class="hljs-number">0.1</span>); opacity <span class="hljs-number">0.0</span>]);\n      (<span class="hljs-string">"60%"</span>, [transform (scale <span class="hljs-number">1.2</span> <span class="hljs-number">1.2</span>); opacity <span class="hljs-number">1.0</span>]);\n      (<span class="hljs-string">"100%"</span>, [transform (scale <span class="hljs-number">1.0</span> <span class="hljs-number">1.0</span>); opacity <span class="hljs-number">1.0</span>])]\n<span class="hljs-keyword">let</span> makeStyle _theme =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Css</span> <span class="hljs-keyword">in</span>\n    style\n      [animationName bounce;\n      animationDuration <span class="hljs-number">2000</span>;\n      width (px <span class="hljs-number">50</span>);\n      height (px <span class="hljs-number">50</span>);\n      backgroundColor (rgb <span class="hljs-number">255</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span>)]</code></pre>\n      </div>\n    </div>\n  \n<h2 id="development"><a href="#development" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Development</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>yarn start</code></pre></div>\n<h2 id="where-is-the-documentation"><a href="#where-is-the-documentation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Where is the documentation?</h2>\n<p>Check out <a href="./src/Css.rei">css.rei</a>.</p>\n<h2 id="thanks"><a href="#thanks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thanks</h2>\n<p>Thanks to <a href="https://github.com/SentiaAnalytics/bs-css">bs-css</a> that introduced\nthe DSL. Thanks to <a href="https://github.com/poeschko/bs-glamor">bs-glamor</a> which\nbs-css was forked from. Thanks to\n<a href="https://github.com/rtfeldman/elm-css">elm-css</a> for DSL design inspiration.</p>\n',homepageUrl:"https://github.com/astrada/bs-css-core#readme",repositoryUrl:"https://github.com/astrada/bs-css-core",npmUrl:"https://www.npmjs.com/package/bs-css-core",issuesUrl:"https://github.com/astrada/bs-css-core/issues",slug:"/package/bs-css-core"}},pathContext:{id:"bs-css-core"}}}});
//# sourceMappingURL=path---package-bs-css-core-9714392767ffa5a52176.js.map