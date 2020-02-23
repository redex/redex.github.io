webpackJsonp([0x944d1015e1dc],{1262:function(e,s){e.exports={data:{package:{type:"published",id:"bs-randomcolor",name:"bs-randomcolor",version:"0.1.1",category:"binding",flags:[],platforms:["browser","node"],description:"BuckleScript bindings for randomColor",keywords:["utilities","graphics"],license:"MIT",updated:"2020-02-06T03:52:01.469Z",stars:3,score:.5215065744505816,quality:.7237662719056384,popularity:.02471161271661583,maintenance:.8449360812230702,readme:'<h1 id="bs-randomcolor"><a href="#bs-randomcolor" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-randomColor</h1>\n<p><a href="https://github.com/bloomberg/bucklescript">BuckleScript</a>\nbindings for <a href="https://github.com/davidmerfield/randomColor/">davidmerfield/randomColor</a>\n(library for generating attractive random colors). This implementation gives\ncouple functions:</p>\n<ul>\n<li><code>randomColor()</code><br />\nGenerate single color.</li>\n<li><code>randomColorMultiple()</code><br />\nGenerate multiple colors.</li>\n<li><code>randomColorHslArray()</code><br />\nGenerate single color with tuple as an output (<code>(int, int, int)</code>).</li>\n<li><code>randomColorRgbArray()</code><br />\nGenerate single color with tuple as an output (<code>(int, float, float)</code>).</li>\n</ul>\n<h2 id="how-to-install"><a href="#how-to-install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to install</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add bs-randomcolor</code></pre></div>\n<p>Then add <code>bs-randomcolor</code> as a dependency to <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-diff"><code><span class="hljs-string">"bs-dependencies"</span>: [\n+  <span class="hljs-string">"bs-randomcolor"</span>\n]</code></pre></div>\n<h2 id="supported-options"><a href="#supported-options" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Supported options</h2>\n<ul>\n<li>\n<p><strong>hue</strong><br />\nControls the hue of the generated color. Possible values:</p>\n<ul>\n<li><code>HueRed</code></li>\n<li><code>HueOrange</code></li>\n<li><code>HueYellow</code></li>\n<li><code>HueGreen</code></li>\n<li><code>HueBlue</code></li>\n<li><code>HuePurple</code></li>\n<li><code>HuePink</code></li>\n<li><code>HueMonochrome</code></li>\n</ul>\n</li>\n<li>\n<p><strong>hueHex</strong><br />\nHexadecimal value of any color which will be used instead of "hue" option. The randomColor will extract its hue value and use that to generate colors.</p>\n</li>\n<li>\n<p><strong>luminosity</strong><br />\nControls the luminosity of the generated color. Possible values:</p>\n<ul>\n<li><code>LuminosityBright</code> (default)</li>\n<li><code>LuminosityLight</code></li>\n<li><code>LuminosityDark</code></li>\n</ul>\n</li>\n<li>\n<p><strong>count</strong><br />\nAn integer which specifies the number of colors to generate.<br />\n<strong>Notice:</strong> option available only for <code>randomColorMultiple()</code>.</p>\n</li>\n<li>\n<p><strong>seed</strong><br />\nAn integer or string which when passed will cause randomColor to return the same color each time.</p>\n</li>\n<li>\n<p><strong>format</strong><br />\nSpecifies the format of the generated color. Possible values:</p>\n<ul>\n<li><code>FormatHex</code> (default)</li>\n<li><code>FormatRgb</code></li>\n<li><code>FormatRgba</code></li>\n<li><code>FormatHsl</code></li>\n<li><code>FormatHsla</code></li>\n<li><code>FormatRgbArray</code> (available only for <code>randomColorRgbArray()</code>)</li>\n<li><code>FormatHslArray</code> (available only for <code>randomColorHslArray()</code>)</li>\n</ul>\n</li>\n<li>\n<p><strong>alpha</strong><br />A decimal between 0 and 1. Only relevant when using a format with an alpha channel (<code>FormatRgba</code> and <code>FormatHsla</code>). Defaults to a random value.</p>\n</li>\n</ul>\n<h2 id="example-usages"><a href="#example-usages" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example usages:</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">RandomColorRe</span>;\n\nrandomColor(); <span class="hljs-comment">// "#f9a05c"</span>\nrandomColor(~seed=<span class="hljs-string">"test"</span>, ~format=<span class="hljs-type">FormatRgb</span>, ()); <span class="hljs-comment">// "rgb(249, 160, 92)"</span>\nrandomColor(~seed=<span class="hljs-string">"test"</span>, ~format=<span class="hljs-type">FormatRgba</span>, ~alpha=<span class="hljs-number">0.2</span>, ()) <span class="hljs-comment">// "rgba(249, 160, 92, 0.2)"</span>\nrandomColor(~seed=<span class="hljs-string">"test"</span>, ~hue=<span class="hljs-type">HuePurple</span>, ~luminosity=<span class="hljs-type">LuminosityDark</span>, ()) <span class="hljs-comment">// "#070707"</span>\nrandomColorMultiple(~seed=<span class="hljs-string">"test123"</span>, ~<span class="hljs-built_in">count</span>=<span class="hljs-number">3</span>, ()) <span class="hljs-comment">// [|"#b6f453", "#4cdbb2", "#f9d759"|]</span>\nrandomColorMultiple(~seed=<span class="hljs-string">"test123"</span>, ~<span class="hljs-built_in">count</span>=<span class="hljs-number">3</span>, ()) <span class="hljs-comment">// [|"#b6f453", "#4cdbb2", "#f9d759"|]</span>\nrandomColorRgbArray(~seed=<span class="hljs-string">"test"</span>, ~hue=<span class="hljs-type">HueRed</span>, ()) <span class="hljs-comment">// (137, 4, 44)</span>\nrandomColorHslArray(~seed=<span class="hljs-string">"test"</span>, ()) <span class="hljs-comment">// (71, 94.17, 23.69)</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2553</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<p>More examples in tests :).</p>\n',homepageUrl:"https://github.com/ktrzos/bs-randomColor#readme",repositoryUrl:"https://github.com/ktrzos/bs-randomColor",npmUrl:"https://www.npmjs.com/package/bs-randomcolor",issuesUrl:"https://github.com/ktrzos/bs-randomColor/issues",slug:"/package/bs-randomcolor"}},pathContext:{id:"bs-randomcolor"}}}});
//# sourceMappingURL=path---package-bs-randomcolor-318d296434bb16710051.js.map