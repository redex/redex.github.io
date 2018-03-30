webpackJsonp([0x7ccf7a7ed868],{1226:function(e,a){e.exports={data:{package:{id:"unpublished/drejohnson/reason-webpack-ssr",stars:8,name:"drejohnson/reason-webpack-ssr",version:"0.1.0",category:"boilerplate",flags:["neglected"],platforms:["node"],description:"",keywords:["boilerplate"],license:"MIT",updated:"2018-03-30T12:26:21.730Z",type:"unpublished",score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="reasonreact--webpack-v4-beta--loadable-components--ssr"><a href="#reasonreact--webpack-v4-beta--loadable-components--ssr" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ReasonReact + Webpack v4-beta + Loadable Components + SSR</h1>\n<blockquote>\n<p>A basic starting point for building universal web apps with ReasonReact.</p>\n<p>Far from refined. Used as a basis to learn ReasonML and POC for server side rendering and code-spliting with ReasonReact</p>\n</blockquote>\n<h2 id="features"><a href="#features" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Features</h2>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> <a href="https://reasonml.github.io/reason-react/">ReasonReact</a></li>\n<li class="task-list-item"><input type="checkbox" checked disabled> <a href="https://webpack.js.org/">Webpack - v4.0.0-beta*</a></li>\n<li class="task-list-item"><input type="checkbox" checked disabled> <a href="https://github.com/NYTimes/react-helmet-async">React Helmet Async</a></li>\n<li class="task-list-item"><input type="checkbox" checked disabled> <a href="https://github.com/smooth-code/loadable-components">Loadable Components</a></li>\n<li class="task-list-item"><input type="checkbox" checked disabled> SSR - Server side rendering</li>\n<li class="task-list-item"><input type="checkbox" disabled> PWA - <a href="https://developers.google.com/web/tools/workbox/">Workbox</a></li>\n<li class="task-list-item"><input type="checkbox" disabled> <a href="https://github.com/apollographql/reason-apollo">Reason-Apollo</a></li>\n</ul>\n<h2 id="quick-start"><a href="#quick-start" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Quick start</h2>\n<ul>\n<li>Use install dependencies: <code>yarn</code></li>\n<li>For dev mode without ssr run <code>yarn dev</code> or <code>npm run dev</code>, open browser, the app should be running at: <a href="http://localhost:8080">http://localhost:8080</a>.</li>\n<li>To build run: <code>yarn build</code> or <code>npm run build</code></li>\n<li>To build and run use: <code>yarn build</code> or <code>npm run build</code> followed by <code>yarn start</code> or <code>npm start</code>.</li>\n</ul>\n<h2 id="todo"><a href="#todo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>TODO</h2>\n<ul>\n<li class="task-list-item"><input type="checkbox" disabled> Add <a href="https://developers.google.com/web/tools/workbox/">Workbox</a></li>\n<li class="task-list-item"><input type="checkbox" disabled> Add <a href="https://github.com/apollographql/reason-apollo">Reason-Apollo</a></li>\n<li class="task-list-item"><input type="checkbox" disabled> Add styling via <a href="https://github.com/SentiaAnalytics/bs-css">bs-css</a> or <a href="https://github.com/astrada/bs-react-fela">bs-react-fela</a>.</li>\n</ul>\n',homepageUrl:null,repositoryUrl:"https://github.com/drejohnson/reason-webpack-ssr",npmUrl:null,issuesUrl:null,slug:"/package/unpublished/drejohnson/reason-webpack-ssr"}},pathContext:{id:"unpublished/drejohnson/reason-webpack-ssr"}}}});
//# sourceMappingURL=path---package-unpublished-drejohnson-reason-webpack-ssr-897fe77bd0ea8b4b1dd8.js.map