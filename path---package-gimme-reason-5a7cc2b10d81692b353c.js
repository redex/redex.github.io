webpackJsonp([0xe7450829235f],{1090:function(e,a){e.exports={data:{package:{id:"gimme-reason",stars:0,name:"gimme-reason",version:"0.0.1",category:"tool",flags:[],platforms:["node"],description:"Gimme A Reason App.",keywords:["boilerplate"],license:"MIT",updated:"2018-01-25T22:48:23.265Z",type:"published",score:.3861832203688603,quality:.67880762716301,popularity:.02673240343738308,maintenance:.49481311719106635,readme:'<h1 id="gimme-reason"><a href="#gimme-reason" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Gimme Reason</h1>\n<h2 id="just-give-me-a-reason-application"><a href="#just-give-me-a-reason-application" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Just Give Me A <a href="http://facebook.github.io/reason">Reason</a> Application</h2>\n<p><a href="https://travis-ci.org/Pitzcarraldo/gimme-reason"><img src="https://travis-ci.org/Pitzcarraldo/gimme-reason.svg?branch=master" alt="Build Status"></a></p>\n<blockquote>\n<p><em>Gimme a Reason - Raven</em></p>\n</blockquote>\n<p><a href="https://www.youtube.com/watch?v=T8Lq7lOm4OY"><img src="https://img.youtube.com/vi/T8Lq7lOm4OY/0.jpg" alt="Gimme A Reason"></a></p>\n<h3 id="need-any-reason"><a href="#need-any-reason" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Need Any Reason?</h3>\n<p><a href="http://facebook.github.io/reason">Reason</a> is a cool interface to build fast and concise functional application. And there are <a href="https://github.com/facebook/reason/blob/master/README.md#install-stable">several ways</a> to use it.<br>\n<a href="https://github.com/reasonml/ExampleProject">ExampleProject</a> is a nice project to start Reason with Node.js. So I wrapped it with CLI to build new Reason Applications.<br>\nDo you need a new Reason Application? Just say it. <code>gimme-reason</code></p>\n<h3 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>USAGE</h3>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>$ npm install -g gimme-reason\n$ gimme-reason\n? Project Name New Reason App\n? Project Description New Application using Reason\n? Version <span class="hljs-number">0.0</span>.<span class="hljs-number">1</span>\n? Author Reason User\n? Github Username reason-user\n\nThis will walk you through creating a new Reason project <span class="hljs-keyword">in</span> /path/of/new-reason-app\ncreate .gitignore\ncreate .merlin\ncreate .travis.yml\ncreate LICENSE\ncreate README-Yarn.md\ncreate README.md\ncreate package.json\ncreate src/App.re\ncreate tags\n\nTo run your Reason App:\n    <span class="hljs-built_in">cd</span> /path/of/new-reason-app\n    npm install\n    npm start\nIf you want to use Reason with yarn, please <span class="hljs-built_in">read</span> README-Yarn.md</code></pre></div>\n<h3 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h3>\n<p>This software is free to use under the Minkyu Cho. MIT license.\nSee the <a href="https://github.com/Pitzcarraldo/gimme-reason/blob/master/LICENSE">LICENSE file</a> for license text and copyright information.</p>\n<h3 id="contributing"><a href="#contributing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributing</h3>\n<p><strong>Please don\'t hesitate to send a small pull-request or just leave anything you want as an issue.</strong></p>\n<ol>\n<li>Fork it!</li>\n<li>Create your feature branch: <code>git checkout -b feature/my-new-feature</code></li>\n<li>Commit your changes: <code>git commit -am \'Add some feature\'</code></li>\n<li>Push to the branch: <code>git push origin feature/my-new-feature</code></li>\n<li>Submit a pull request :D</li>\n</ol>\n',homepageUrl:"https://github.com/Pitzcarraldo/gimme-reason#readme",repositoryUrl:"https://github.com/Pitzcarraldo/gimme-reason",npmUrl:"https://www.npmjs.com/package/gimme-reason",issuesUrl:"https://github.com/Pitzcarraldo/gimme-reason/issues",slug:"/package/gimme-reason"}},pathContext:{id:"gimme-reason"}}}});
//# sourceMappingURL=path---package-gimme-reason-5a7cc2b10d81692b353c.js.map