webpackJsonp([0xf1f38a98115f],{1051:function(e,i){e.exports={data:{package:{id:"bs-material-ui",score:.5285218291969999,name:"bs-material-ui",version:"0.1.16",description:"Reason bindings for material-ui",keywords:["react","material design","react-component","material-ui","bucklescript"],license:"MIT",updated:"2018-01-07T07:17:08.047Z",stars:11,type:"published",quality:.5248234785650856,popularity:.06025533302759188,maintenance:.999958340193763,readme:'<h1>Reason bindings for Material-UI</h1>\n<p><a href="https://www.npmjs.com/package/bs-material-ui"><img src="https://img.shields.io/npm/v/bs-material-ui.svg" alt="npm"></a>  </p>\n<p><a href="https://reasonml.github.io/">Reason</a> bindings for <a href="https://github.com/callemall/material-ui">material-ui</a>.</p>\n<h2>Status</h2>\n<p>🚧 This is a WIP, not everything is supported yet. 🚧</p>\n<p>Feel free to create an issue or PR if you find anything missing.</p>\n<h2>Installation</h2>\n<pre><code>yarn add bs-material-ui\nyarn add material-ui@1.0.0-beta.19\n</code></pre>\n<p>Then add <code>bs-material-ui</code> to <code>bs-dev-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<pre><code class="language-json">{\n  ...\n  "bs-dev-dependencies": ["bs-material-ui"]\n}\n</code></pre>\n<h2>Usage</h2>\n<pre><code class="language-reason">let component = ReasonReact.statelessComponent("Header");\n\nlet make = (_children) => {\n  ...component,\n  render: (_self) =>\n    MaterialUI.(\n      &#x3C;AppBar position="static" color="default">\n        &#x3C;Toolbar>\n          &#x3C;Typography _type="title" color="inherit">\n            (ReasonReact.stringToElement("Title"))\n          &#x3C;/Typography>\n        &#x3C;/Toolbar>\n      &#x3C;/AppBar>\n    )\n};\n</code></pre>\n<h2>Bindings</h2>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> AppBar</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Avatar</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Badge</li>\n<li class="task-list-item"><input type="checkbox" disabled> BottomNavigationButton</li>\n<li class="task-list-item"><input type="checkbox" disabled> BottomNavigation</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ButtonBase</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Button</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> CardActions</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> CardContent</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> CardHeader</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> CardMedia</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Card</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Checkbox</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Chip</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> CircularProgress</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Collapse</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> DialogActions</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> DialogContentText</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> DialogContent</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> DialogTitle</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Dialog</li>\n<li class="task-list-item"><input type="checkbox" disabled> Divider</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Drawer</li>\n<li class="task-list-item"><input type="checkbox" disabled> Fade</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> FormControlLabel</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> FormControl</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> FormGroup</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> FormHelperText</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> FormLabel</li>\n<li class="task-list-item"><input type="checkbox" disabled> GridListTitleBar</li>\n<li class="task-list-item"><input type="checkbox" disabled> GridListTitle</li>\n<li class="task-list-item"><input type="checkbox" disabled> GridList</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Grid</li>\n<li class="task-list-item"><input type="checkbox" disabled> Grow</li>\n<li class="task-list-item"><input type="checkbox" disabled> Hidden</li>\n<li class="task-list-item"><input type="checkbox" disabled> IconButton</li>\n<li class="task-list-item"><input type="checkbox" disabled> Icon</li>\n<li class="task-list-item"><input type="checkbox" disabled> InputAdornment</li>\n<li class="task-list-item"><input type="checkbox" disabled> InputLabel</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Input</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> LinearProgress</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ListItemAvatar</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ListItemIcon</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ListItemSecondaryAction</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ListItemText</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ListItem</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ListSubheader</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> List</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> MenuItem</li>\n<li class="task-list-item"><input type="checkbox" disabled> MenuList</li>\n<li class="task-list-item"><input type="checkbox" disabled> Menu</li>\n<li class="task-list-item"><input type="checkbox" disabled> MobileStepper</li>\n<li class="task-list-item"><input type="checkbox" disabled> MuiThemeProvider</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Paper</li>\n<li class="task-list-item"><input type="checkbox" disabled> Popover</li>\n<li class="task-list-item"><input type="checkbox" disabled> RadioGroup</li>\n<li class="task-list-item"><input type="checkbox" disabled> Radio</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Select</li>\n<li class="task-list-item"><input type="checkbox" disabled> Slide</li>\n<li class="task-list-item"><input type="checkbox" disabled> SnackbarContent</li>\n<li class="task-list-item"><input type="checkbox" disabled> Snackbar</li>\n<li class="task-list-item"><input type="checkbox" disabled> SvgIcon</li>\n<li class="task-list-item"><input type="checkbox" disabled> Switch</li>\n<li class="task-list-item"><input type="checkbox" disabled> Tab</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> TableBody</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> TableCell</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> TableFooter</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> TableHead</li>\n<li class="task-list-item"><input type="checkbox" disabled> TablePagination</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> TableRow</li>\n<li class="task-list-item"><input type="checkbox" disabled> TableSortLabel</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Table</li>\n<li class="task-list-item"><input type="checkbox" disabled> Tabs</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> TextField</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Toolbar</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Tooltip</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Typography</li>\n</ul>\n',homepageUrl:"https://github.com/InsidersByte/bs-material-ui#readme",repositoryUrl:"https://github.com/InsidersByte/bs-material-ui",npmUrl:"https://www.npmjs.com/package/bs-material-ui",issuesUrl:"https://github.com/InsidersByte/bs-material-ui/issues",slug:"packages/bs-material-ui"}},pathContext:{id:"bs-material-ui"}}}});
//# sourceMappingURL=path---packages-bs-material-ui-4e6e4440a39a6d5c99cc.js.map