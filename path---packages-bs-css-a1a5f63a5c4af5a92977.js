webpackJsonp([0xaffc8276fd56],{1037:function(e,s){e.exports={data:{package:{id:"bs-css",score:.5420520392548751,name:"bs-css",version:"5.3.0",description:"BuckleScript bindings for glamor",keywords:["css","glamor","bucklescript"],license:"ISC",updated:"2017-12-27T16:08:06.454Z",stars:50,type:"published",quality:.5399818864661798,popularity:.08587849518577488,maintenance:1,readme:'<h1>bs-css</h1>\n<p>statically typed DSL for writing css in reason.</p>\n<p>Bs-css is a statically typed interface to <a href="https://github.com/threepointone/glamor">Glamor</a></p>\n<h2>Installation</h2>\n<pre><code class="language-sh">npm install --save bs-css\n</code></pre>\n<p>In your <code>bsconfig.json</code>, include <code>"bs-css"</code> in the <code>bs-dependencies</code>.</p>\n<h2>Usage</h2>\n<pre><code class="language-reason">module Theme = {\n  open Css;\n  let textColor = hex("333");\n  let basePadding = px(15);\n};\n\nlet styles = Css.({\n  "card": style([\n    backgroundColor(white),\n    boxShadow(~y=3, ~blur=5, rgba(0, 0, 0, 0.3)),\n    padding(Theme.basePadding)\n  ]),\n  "title": style([\n    fontSize(rem(1.5)),\n    color(Theme.textColor),\n    marginBottom(Theme.basePadding)\n  ])\n});\n\n&#x3C;div className=styles##card>\n  &#x3C;h1 className=styles##title> (ReasonReact.stringToElement("Hello")) &#x3C;/h1>\n&#x3C;/div>\n</code></pre>\n<p><strong>Merging css rules</strong></p>\n<p>You can merge css rules using <code>merge</code></p>\n<pre><code class="language-reason">let text_primary = style([ color(white) ]);\nlet small = style([ fontSize(px(10)) ]);\n\n\n&#x3C;p className=merge([ text_primary, small ])> ...\n</code></pre>\n<p>bs-css will make sure that rules are merged in the correct order, managing nesting and precedence for you.</p>\n<p><strong>Global css</strong></p>\n<p> You can defined global css rules with <code>global</code></p>\n<pre><code class="language-reason">Css.(\n  global("body", [margin(px(0))])\n);\n\nCss.(\n  global("h1, h2, h3", [color(rgb(33, 33, 33))])\n);\n</code></pre>\n<p><strong>Keyframes</strong></p>\n<p>define animation keyframes;</p>\n<pre><code class="language-reason">let bounce = Css.keyframes([\n  ("0%", [ transform( scale(0.1, 0.1) ),  opacity(0.0) ]),\n  ("60%", [ transform( scale(1.2, 1.2) ),  opacity(1.0) ]),\n  ("100%", [ transform( scale(1.0,1.0) ), opacity(1.0) ])\n]);\n\nlet styles = css([\n  animationName(bounce),\n  animationDuration(2000),\n  width(px(50)),\n  height(px(50)),\n  backgroundColor(rgb(255, 0, 0))\n]);\n\n// ...\n&#x3C;div className=styles>\n  (ReasonReact.stringToElement("bounce!"))\n&#x3C;/div>\n</code></pre>\n<h2>Development</h2>\n<pre><code class="language-sh">npm run start\n</code></pre>\n<h2>Where is the documentation?</h2>\n<p>Its on its way!\nuntil then you can check out <a href="./src/Css.rei">css.rei</a>.</p>\n<h2>Thanks</h2>\n<p>Thanks to <a href="https://github.com/threepointone/glamor">glamor</a> which is doing all the heavi lifting.\nThanks to <a href="https://github.com/poeschko/bs-glamor">bs-glamor</a> which this repo was forked from.\nThanks to <a href="https://github.com/rtfeldman/elm-css">elm-css</a> for dsl design inspiration.</p>\n',homepageUrl:"https://github.com/SentiaAnalytics/bs-css#readme",repositoryUrl:"https://github.com/SentiaAnalytics/bs-css",npmUrl:"https://www.npmjs.com/package/bs-css",issuesUrl:"https://github.com/SentiaAnalytics/bs-css/issues",slug:"packages/bs-css"}},pathContext:{id:"bs-css"}}}});
//# sourceMappingURL=path---packages-bs-css-a1a5f63a5c4af5a92977.js.map