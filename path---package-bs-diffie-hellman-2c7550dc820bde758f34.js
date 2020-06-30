webpackJsonp([21403281062116],{1210:function(e,i){e.exports={data:{package:{type:"published",id:"bs-diffie-hellman",name:"bs-diffie-hellman",version:"0.1.1",category:"binding",flags:[],platforms:["node"],description:"Bindings of https://www.npmjs.com/package/diffie-hellman for ReasonML",keywords:["cryptography"],license:"MIT",updated:"2020-06-22T01:28:29.273Z",stars:0,score:.49416199207196676,quality:.7242462055366379,popularity:.01780076572295748,maintenance:.7733081783084008,readme:'<h1 id="bs-diffiehellman"><a href="#bs-diffiehellman" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-diffiehellman</h1>\n<p>Binding of <a href="https://github.com/crypto-browserify/diffie-hellman">diffie-hellman</a> for ReasonML.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>installation</h2>\n<p>Install the npm package</p>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code>$ npm i bs-diffie-hellman</code></pre></div>\n<p>Add it to the dependencies in your <code>bsconfig.json</code></p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code><span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"bs-diffie-hellman"</span>]</code></pre></div>\n<p>Don\'t forget to build your app</p>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code>$ bsb -make-world</code></pre></div>\n<h2 id="design-decisions"><a href="#design-decisions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Design decisions</h2>\n<ol>\n<li>string enums -> polymorphic variants</li>\n<li>labeled arguments in constructors</li>\n</ol>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<p>In the <a href="https://github.com/DerivedMate/bs-diffie-hellman/tree/master/example">example</a> folder you can find an example in ReasonML, which practically <strong>directly translates to typescript / javascript</strong> :ok_hand: (example from <a href="https://nodejs.org/api/crypto.html#crypto_class_diffiehellman">node docs</a>)</p>\n<h2 id="contribution"><a href="#contribution" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contribution</h2>\n<p>Any contribution is welcome. Especially because I\'m still learning Reason and I might have missed some good practises :sweat_smile:\nThank you in advance :wink:</p>\n',homepageUrl:"https://github.com/DerivedMate/bs-diffie-hellman",repositoryUrl:"https://github.com/DerivedMate/bs-diffie-hellman",npmUrl:"https://www.npmjs.com/package/bs-diffie-hellman",issuesUrl:"https://github.com/DerivedMate/bs-diffie-hellman/issues",slug:"/package/bs-diffie-hellman"}},pathContext:{id:"bs-diffie-hellman"}}}});
//# sourceMappingURL=path---package-bs-diffie-hellman-2c7550dc820bde758f34.js.map