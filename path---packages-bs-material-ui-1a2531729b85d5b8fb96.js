webpackJsonp([0xf1f38a98115f],{1062:function(i,e){i.exports={data:{package:{id:"bs-material-ui",score:.5287618603351645,name:"bs-material-ui",version:"0.1.16",description:"Reason bindings for material-ui",keywords:["react","material design","react-component","material-ui","bucklescript"],license:"MIT",updated:"2018-01-07T07:17:08.047Z",stars:11,type:"published",quality:.5247193430701761,popularity:.06103019985127758,maintenance:.999958535617613,readme:'<h1 id="reason-bindings-for-material-ui"><a href="#reason-bindings-for-material-ui" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reason bindings for Material-UI</h1>\n<p><a href="https://www.npmjs.com/package/bs-material-ui"><img src="https://img.shields.io/npm/v/bs-material-ui.svg" alt="npm"></a>  </p>\n<p><a href="https://reasonml.github.io/">Reason</a> bindings for <a href="https://github.com/callemall/material-ui">material-ui</a>.</p>\n<h2 id="status"><a href="#status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Status</h2>\n<p>🚧 This is a WIP, not everything is supported yet. 🚧</p>\n<p>Feel free to create an issue or PR if you find anything missing.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-none"><code>yarn add bs-material-ui\nyarn add material-ui@1.0.0-beta.19</code></pre>\n      </div>\n<p>Then add <code>bs-material-ui</code> to <code>bs-dev-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-json"><code>{\n  ...\n  <span class="hljs-string">"bs-dev-dependencies"</span>: [<span class="hljs-string">"bs-material-ui"</span>]\n}</code></pre>\n      </div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent(<span class="hljs-string">"Header"</span>);\n\n<span class="hljs-keyword">let</span> make = (_children) =&gt; {\n  ...component,\n  render: (_self) =&gt;\n    <span class="hljs-type">MaterialUI</span>.(\n      &lt;<span class="hljs-type">AppBar</span> position=<span class="hljs-string">"static"</span> color=<span class="hljs-string">"default"</span>&gt;\n        &lt;<span class="hljs-type">Toolbar</span>&gt;\n          &lt;<span class="hljs-type">Typography</span> _type=<span class="hljs-string">"title"</span> color=<span class="hljs-string">"inherit"</span>&gt;\n            (<span class="hljs-type">ReasonReact</span>.stringToElement(<span class="hljs-string">"Title"</span>))\n          &lt;/<span class="hljs-type">Typography</span>&gt;\n        &lt;/<span class="hljs-type">Toolbar</span>&gt;\n      &lt;/<span class="hljs-type">AppBar</span>&gt;\n    )\n};</code></pre>\n      </div>\n<h2 id="bindings"><a href="#bindings" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bindings</h2>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> AppBar</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Avatar</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Badge</li>\n<li class="task-list-item"><input type="checkbox" disabled> BottomNavigationButton</li>\n<li class="task-list-item"><input type="checkbox" disabled> BottomNavigation</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ButtonBase</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Button</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> CardActions</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> CardContent</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> CardHeader</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> CardMedia</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Card</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Checkbox</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Chip</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> CircularProgress</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Collapse</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> DialogActions</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> DialogContentText</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> DialogContent</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> DialogTitle</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Dialog</li>\n<li class="task-list-item"><input type="checkbox" disabled> Divider</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Drawer</li>\n<li class="task-list-item"><input type="checkbox" disabled> Fade</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> FormControlLabel</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> FormControl</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> FormGroup</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> FormHelperText</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> FormLabel</li>\n<li class="task-list-item"><input type="checkbox" disabled> GridListTitleBar</li>\n<li class="task-list-item"><input type="checkbox" disabled> GridListTitle</li>\n<li class="task-list-item"><input type="checkbox" disabled> GridList</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Grid</li>\n<li class="task-list-item"><input type="checkbox" disabled> Grow</li>\n<li class="task-list-item"><input type="checkbox" disabled> Hidden</li>\n<li class="task-list-item"><input type="checkbox" disabled> IconButton</li>\n<li class="task-list-item"><input type="checkbox" disabled> Icon</li>\n<li class="task-list-item"><input type="checkbox" disabled> InputAdornment</li>\n<li class="task-list-item"><input type="checkbox" disabled> InputLabel</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Input</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> LinearProgress</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ListItemAvatar</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ListItemIcon</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ListItemSecondaryAction</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ListItemText</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ListItem</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ListSubheader</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> List</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> MenuItem</li>\n<li class="task-list-item"><input type="checkbox" disabled> MenuList</li>\n<li class="task-list-item"><input type="checkbox" disabled> Menu</li>\n<li class="task-list-item"><input type="checkbox" disabled> MobileStepper</li>\n<li class="task-list-item"><input type="checkbox" disabled> MuiThemeProvider</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Paper</li>\n<li class="task-list-item"><input type="checkbox" disabled> Popover</li>\n<li class="task-list-item"><input type="checkbox" disabled> RadioGroup</li>\n<li class="task-list-item"><input type="checkbox" disabled> Radio</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Select</li>\n<li class="task-list-item"><input type="checkbox" disabled> Slide</li>\n<li class="task-list-item"><input type="checkbox" disabled> SnackbarContent</li>\n<li class="task-list-item"><input type="checkbox" disabled> Snackbar</li>\n<li class="task-list-item"><input type="checkbox" disabled> SvgIcon</li>\n<li class="task-list-item"><input type="checkbox" disabled> Switch</li>\n<li class="task-list-item"><input type="checkbox" disabled> Tab</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> TableBody</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> TableCell</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> TableFooter</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> TableHead</li>\n<li class="task-list-item"><input type="checkbox" disabled> TablePagination</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> TableRow</li>\n<li class="task-list-item"><input type="checkbox" disabled> TableSortLabel</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Table</li>\n<li class="task-list-item"><input type="checkbox" disabled> Tabs</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> TextField</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Toolbar</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Tooltip</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Typography</li>\n</ul>\n',homepageUrl:"https://github.com/InsidersByte/bs-material-ui#readme",repositoryUrl:"https://github.com/InsidersByte/bs-material-ui",npmUrl:"https://www.npmjs.com/package/bs-material-ui",issuesUrl:"https://github.com/InsidersByte/bs-material-ui/issues",slug:"packages/bs-material-ui"}},pathContext:{id:"bs-material-ui"}}}});
//# sourceMappingURL=path---packages-bs-material-ui-1a2531729b85d5b8fb96.js.map