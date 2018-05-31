webpackJsonp([0x5e90a680377c],{998:function(e,t){e.exports={data:{package:{id:"@astrada/bs-styletron-react",stars:1,name:"@astrada/bs-styletron-react",version:"0.1.3",category:"binding",flags:[],platforms:["browser"],description:"BuckleScript bindings for styletron-react",keywords:["css","react"],license:"MIT",updated:"2018-01-15T22:08:52.914Z",type:"published",score:.36101119069934007,quality:.41154633259087947,popularity:.01746084341324873,maintenance:.6612457020783977,readme:'<h1 id="bs-styletron-react"><a href="#bs-styletron-react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-styletron-react</h1>\n<p>Reason/BuckleScript bindings for\n<a href="https://github.com/rtsao/styletron/tree/master/packages/styletron-react">styletron-react</a>.\nSee also\n<a href="https://github.com/astrada/bs-styletron-react-examples">bs-styletron-react-examples</a>.</p>\n<p>From Styletron <a href="http://styletron.js.org/">documentation</a>:</p>\n<p>Styletron is a universal CSS-in-JS engine built from the ground up for\nhigh-performance. Features include:</p>\n<h5 id="advanced-critical-rendering-path-optimization-of-server-rendered-pages"><a href="#advanced-critical-rendering-path-optimization-of-server-rendered-pages" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Advanced critical rendering path optimization of server-rendered pages</h5>\n<ul>\n<li>\n<p>Dynamic generation of inlineable critical stylesheets with minimum possible\nsize and parse times</p>\n<ul>\n<li>Automatic generation of maximally compressed "atomic" critical CSS via\ndeclaration-level deduplication</li>\n<li>Automatic declaration-level dead CSS elimination - only actually used\ndeclarations get included in output</li>\n</ul>\n</li>\n<li>Native media query and pseudo selector support for full critical CSS\nwithout JavaScript</li>\n</ul>\n<h5 id="efficient-dynamic-client-side-styles"><a href="#efficient-dynamic-client-side-styles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Efficient dynamic client-side styles</h5>\n<ul>\n<li>Hyper-granular memoization to avoid making unnecessary modifications to\nstylesheet</li>\n<li>Fast cache hydration of server-rendered styles to prevent re-rendering of\nserver-rendered styles</li>\n<li>Use of <code>CSSStyleSheet</code> rule injection ensuring only new styles get parsed</li>\n</ul>\n<h3 id="prerequisites"><a href="#prerequisites" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Prerequisites</h3>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install --global bs-platform\nyarn install</code></pre></div>\n<h3 id="how-to-compile"><a href="#how-to-compile" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to compile</h3>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn build</code></pre></div>\n<h3 id="how-to-use-in-your-projects"><a href="#how-to-use-in-your-projects" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to use (in your projects)</h3>\n<p>Run:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add --dev @astrada/bs-styletron-react</code></pre></div>\n<p>to add the library to your project dependencies. And add\n<code>@astrada/bs-styletron-react</code> to <code>dependencies</code> node of your <code>bsconfig.json</code>.</p>\n',homepageUrl:"https://github.com/astrada/bs-styletron-react",repositoryUrl:"https://github.com/astrada/bs-styletron-react",npmUrl:"https://www.npmjs.com/package/%40astrada%2Fbs-styletron-react",issuesUrl:"https://github.com/astrada/bs-styletron-react/issues",slug:"/package/@astrada/bs-styletron-react"}},pathContext:{id:"@astrada/bs-styletron-react"}}}});
//# sourceMappingURL=path---package-astrada-bs-styletron-react-f751b1afd739c4206ae7.js.map