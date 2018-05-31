webpackJsonp([0x95639e09890],{1144:function(e,i){e.exports={data:{package:{id:"unpublished/af/bs-d3",stars:8,name:"af/bs-d3",version:"0.1.0",category:"binding",flags:["neglected"],platforms:["browser"],description:"Experimental d3 4.x bindings for BuckleScript",keywords:["graphics","svg"],license:"MIT",updated:"2018-02-05T20:15:42.750Z",type:"unpublished",score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="bs-d3"><a href="#bs-d3" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-d3</h1>\n<p>WIP <a href="https://github.com/d3/d3">d3</a> 4.x bindings for <a href="https://github.com/bucklescript/bucklescript/">Bucklescript</a>.</p>\n<p>Extremely incomplete and experimental; contributions welcome!</p>\n<h2 id="build"><a href="#build" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm run build</code></pre></div>\n<h2 id="build--watch"><a href="#build--watch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build + Watch</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm run start</code></pre></div>\n<h2 id="current-status"><a href="#current-status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Current status</h2>\n<p>d3 has a large <a href="https://github.com/d3/d3/blob/master/API.md#paths-d3-path">API surface</a>, so there\'s still a lot to do! However, the pieces are already in place to <a href="https://github.com/af/bs-d3/blob/master/examples/lineChart.re">draw line and area charts</a></p>\n<p>Currently some of the typings are still quite loose/permissive, if you have any suggestions to tighten them up in an idiomatic OCaml way, please file an issue or PR.</p>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> Axes</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Arrays (about 50%)</li>\n<li class="task-list-item"><input type="checkbox" disabled> Brushes</li>\n<li class="task-list-item"><input type="checkbox" disabled> Chords</li>\n<li class="task-list-item"><input type="checkbox" disabled> Brushes</li>\n<li class="task-list-item"><input type="checkbox" disabled> Collections</li>\n<li class="task-list-item"><input type="checkbox" disabled> Colors</li>\n<li class="task-list-item"><input type="checkbox" disabled> Dispatches</li>\n<li class="task-list-item"><input type="checkbox" disabled> Dragging</li>\n<li class="task-list-item"><input type="checkbox" disabled> Easings</li>\n<li class="task-list-item"><input type="checkbox" disabled> Forces</li>\n<li class="task-list-item"><input type="checkbox" disabled> Number formatting</li>\n<li class="task-list-item"><input type="checkbox" disabled> Geo</li>\n<li class="task-list-item"><input type="checkbox" disabled> Hierarchies</li>\n<li class="task-list-item"><input type="checkbox" disabled> Interpolators</li>\n<li class="task-list-item"><input type="checkbox" disabled> Paths</li>\n<li class="task-list-item"><input type="checkbox" disabled> Polygons</li>\n<li class="task-list-item"><input type="checkbox" disabled> Quadtrees</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Scales (partially)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Selections (mostly)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Shapes (lines &#x26; areas only at the moment)</li>\n<li class="task-list-item"><input type="checkbox" disabled> Time Intervals</li>\n<li class="task-list-item"><input type="checkbox" disabled> Timers</li>\n<li class="task-list-item"><input type="checkbox" disabled> Transitions</li>\n<li class="task-list-item"><input type="checkbox" disabled> Voronoi</li>\n<li class="task-list-item"><input type="checkbox" disabled> Zooming</li>\n</ul>\n<h2 id="known-issues"><a href="#known-issues" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Known Issues</h2>\n<p>When building this project for the first time, you\'ll get some "value x can\'t be found" errors in\nthe example files. Just re-build a couple of times and they\'ll be resolved automatically. If anyone\nknows why this happens, please file an issue or PR!</p>\n',homepageUrl:"https://github.com/af/bs-d3",repositoryUrl:"https://github.com/af/bs-d3",npmUrl:null,issuesUrl:"https://github.com/af/bs-d3/issues",slug:"/package/unpublished/af/bs-d3"}},pathContext:{id:"unpublished/af/bs-d3"}}}});
//# sourceMappingURL=path---package-unpublished-af-bs-d-3-9ce3a7e793bcf1a88bd3.js.map