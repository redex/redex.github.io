webpackJsonp([24466011031992],{1161:function(s,e){s.exports={data:{package:{id:"bs-react-native-paper",stars:9,name:"bs-react-native-paper",version:"4.0.1-beta.20",category:"binding",flags:[],platforms:["node"],description:"React Native Paper bindings for BS",keywords:["react","ui","react-native"],license:"MIT",updated:"2018-09-10T14:30:14.779Z",type:"published",score:.5436973054695626,quality:.5762704705014593,popularity:.05947479334098694,maintenance:.9999999618565125,readme:'<h1 id="bs-react-native-paper"><a href="#bs-react-native-paper" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-react-native-paper</h1>\n<p><a href="https://github.com/callstack/react-native-paper">React Native Paper bindings</a> for BS</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code>&lt;<span class="hljs-type">Paper</span>.<span class="hljs-type">Button</span> onPress=((_event) =&gt; yourAction<span class="hljs-literal">()</span>)&gt;\n  &lt;<span class="hljs-type">Paper</span>.<span class="hljs-type">Text</span>&gt;\n    (<span class="hljs-type">ReasonReact</span>.<span class="hljs-built_in">string</span>(<span class="hljs-string">"Click me"</span>))\n  &lt;/<span class="hljs-type">Paper</span>.<span class="hljs-type">Text</span>&gt;\n&lt;/<span class="hljs-type">Paper</span>.<span class="hljs-type">Button</span>&gt;</code></pre></div>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code>&lt;<span class="hljs-type">Paper</span>.<span class="hljs-type">FABGroup</span>\n  actions=<span class="hljs-type">Paper</span>.<span class="hljs-type">FABGroup</span>.[|\n    fabAction(~icon=<span class="hljs-string">"add"</span>, ~onPress=<span class="hljs-literal">()</span> =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"add"</span>), <span class="hljs-literal">()</span>),\n    fabAction(~icon=<span class="hljs-string">"star"</span>, ~onPress=<span class="hljs-literal">()</span> =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"start"</span>), <span class="hljs-literal">()</span>),\n    fabAction(~icon=<span class="hljs-string">"notifications"</span>,  ~onPress=<span class="hljs-literal">()</span> =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"notifications"</span>), <span class="hljs-literal">()</span>),\n  |]\n  onStateChange\n/&gt;</code></pre></div>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>Use yarn or npm</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>$ yarn add bs-react-native-paper react-native-paper rebolt</code></pre></div>\n<p>Then update your <code>bsconfig.json</code></p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code><span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"reason-react"</span>, <span class="hljs-string">"rebolt"</span>, <span class="hljs-string">"bs-react-native-paper"</span>]</code></pre></div>\n<h2 id="using-theme"><a href="#using-theme" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using theme</h2>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code>/* <span class="hljs-type">We</span> provide a help <span class="hljs-keyword">function</span> called `createTheme` that defaults <span class="hljs-keyword">with</span> <span class="hljs-type">DefaultTheme</span> */\n<span class="hljs-keyword">let</span> theme =\n  <span class="hljs-type">Paper</span>.<span class="hljs-type">ThemeProvider</span>.(\n    createTheme(\n      ~colors=\n        themeColors(\n          ~primary=<span class="hljs-string">"blue"</span>,\n          ~accent=<span class="hljs-string">"blue"</span>,\n          ~background=<span class="hljs-string">"white"</span>,\n          ~paper=<span class="hljs-string">"blue"</span>,\n          ~text=<span class="hljs-string">"black"</span>,\n          ~disabled=<span class="hljs-string">"gray"</span>,\n          ~placeholder=<span class="hljs-string">"gray"</span>,\n        ),\n      <span class="hljs-literal">()</span>,\n    )\n  );\n\n<span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent(<span class="hljs-string">"AppTheme"</span>);\n\n<span class="hljs-keyword">let</span> make = children =&gt; {\n  ...component,\n  render: _self =&gt;\n    &lt;<span class="hljs-type">Paper</span>.<span class="hljs-type">ThemeProvider</span> theme&gt;\n      (<span class="hljs-type">ReasonReact</span>.<span class="hljs-built_in">array</span>(children))\n    &lt;/<span class="hljs-type">Paper</span>.<span class="hljs-type">ThemeProvider</span>&gt;,\n};</code></pre></div>\n<h2 id="bindings"><a href="#bindings" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bindings</h2>\n<ul>\n<li class="task-list-item"><input type="checkbox" disabled> Icons (Use <a href="https://github.com/Astrocoders/bs-react-native-vector-icons">https://github.com/Astrocoders/bs-react-native-vector-icons</a> instead)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Chip</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> PaperProvider</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> List</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ListItem</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ListSection</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ListAccordion</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Button</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Caption</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Card</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> CardActions</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> CardContent</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> CardCover</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Checkbox</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Dialog</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> DialogActions</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> DialogContent</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> DialogScrollArea</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> DialogTitle</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Divider</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> DrawerItem</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> DrawerSection</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> FAB</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> FABGroup</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Headline</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> HelpText</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Modal</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Paper</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Paragraph</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ProgressBar</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> RadioButton</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> RadioButtonGroup</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> SearchBar</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Snackbar</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Subheading</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Switch</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Text</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> TextInput</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ThemeProvider</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Title</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Toolbar</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ToolbarAction</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ToolbarBackAction</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ToolbarContent</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> TouchableRipple</li>\n</ul>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>MIT</p>\n<h2 id="contributing"><a href="#contributing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributing</h2>\n<p>PR are welcome!</p>\n',homepageUrl:"https://github.com/Astrocoders/bs-react-native-paper",repositoryUrl:"https://github.com/Astrocoders/bs-react-native-paper",npmUrl:"https://www.npmjs.com/package/bs-react-native-paper",issuesUrl:"https://github.com/Astrocoders/bs-react-native-paper/issues",slug:"/package/bs-react-native-paper"}},pathContext:{id:"bs-react-native-paper"}}}});
//# sourceMappingURL=path---package-bs-react-native-paper-cb42091a0abf7d537e16.js.map