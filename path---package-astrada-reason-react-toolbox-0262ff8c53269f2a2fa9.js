webpackJsonp([0x82af021757d6],{1161:function(e,o){e.exports={data:{package:{type:"published",id:"@astrada/reason-react-toolbox",name:"@astrada/reason-react-toolbox",version:"0.6.1",category:"binding",flags:[],platforms:["browser"],description:"Reason bindings for react-toolbox",keywords:["react","ui"],license:"MIT",updated:"2019-09-03T12:22:23.023Z",stars:19,score:.3384722675427782,quality:.4020449793212426,popularity:.04138586877050795,maintenance:.5810677705049362,readme:'<h2 id="reason-bindings-for-react-toolbox"><a href="#reason-bindings-for-react-toolbox" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reason bindings for react-toolbox</h2>\n<p>This library provides Reason bindings for\n<a href="http://react-toolbox.io">react-toolbox</a>. It\'s automatically generated by\n<a href="https://github.com/astrada/reason-rt-binding-generator">reason-rt-binding-generator</a>.</p>\n<h3 id="prerequisites"><a href="#prerequisites" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Prerequisites</h3>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install --global bs-platform\nyarn install</code></pre></div>\n<h3 id="how-to-compile"><a href="#how-to-compile" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to compile</h3>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn build</code></pre></div>\n<h3 id="how-to-use-in-your-projects"><a href="#how-to-use-in-your-projects" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to use (in your projects)</h3>\n<p>Run:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add --dev @astrada/reason-react-toolbox</code></pre></div>\n<p>to add the library to your project dependencies. And add\n<code>@astrada/reason-react-toolbox</code> to <code>dependencies</code> node of your\n<code>bsconfig.json</code>.</p>\n<p><code>ReactToolbox</code> module provides <a href="https://github.com/react-toolbox/react-toolbox#raw-component">raw\ncomponents</a> that\ncan be used with <code>create-react-app</code> applications. See\n<a href="https://github.com/astrada/reason-react-toolbox-example.git">reason-react-toolbox-example</a>.</p>\n<p><code>ReactToolboxBundled</code> module provides <a href="https://github.com/react-toolbox/react-toolbox#bundled-component">bundled\ncomponents</a>\nthat can be customized with CSS Modules/cssnext, but cannot be used with\n<code>create-react-app</code> applications (because you need to configure PostCSS\nplugins). See\n<a href="https://github.com/astrada/reason-react-toolbox-example-theme.git">reason-react-toolbox-example-theme</a>.</p>\n',homepageUrl:"https://github.com/astrada/reason-react-toolbox#readme",repositoryUrl:"https://github.com/astrada/reason-react-toolbox",npmUrl:"https://www.npmjs.com/package/%40astrada%2Freason-react-toolbox",issuesUrl:"https://github.com/astrada/reason-react-toolbox/issues",slug:"/package/@astrada/reason-react-toolbox"}},pathContext:{id:"@astrada/reason-react-toolbox"}}}});
//# sourceMappingURL=path---package-astrada-reason-react-toolbox-0262ff8c53269f2a2fa9.js.map