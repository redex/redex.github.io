webpackJsonp([0x5dcd88f9bff6],{1010:function(e,r){e.exports={data:{package:{id:"bs-director",score:.26402370461003005,name:"bs-director",version:"0.0.6",description:"BuckleScript bindings to the Director router",keywords:["ocaml","bucklescript","reason"],license:"MIT",updated:"2017-12-08T08:26:26.347Z",stars:null,type:"published",quality:.43004907553107313,popularity:.05240661509726133,maintenance:.3333333333333333,readme:'<h1>bs-director</h1>\n<p><a href="https://github.com/bloomberg/bucklescript">BuckleScript</a> bindings to the <a href="https://github.com/flatiron/director">Director</a> router.</p>\n<pre><code>npm i bs-director\n</code></pre>\n<h2>Usage</h2>\n<pre><code class="language-reason">let router =\n  DirectorRe.makeRouter {\n    "/": fun () => Js.log "Navigated to tasks list",\n    "/active": fun () => Js.log "Navigated active tasks list",\n    "/profile/:userid": fun (userid: string) => Js.log ("Navigated to profile for: " ^ userid)\n    "/completed": fun () => Js.log "Completed a task",\n  };\n\n/* Optional configuration */ \nDirectorRe.configure router {"foo": "bar"};\n\nDirectorRe.init router "/";\n</code></pre>\n',homepageUrl:null,repositoryUrl:null,npmUrl:"https://www.npmjs.com/package/bs-director",issuesUrl:null,slug:"packages/bs-director"}},pathContext:{id:"bs-director"}}}});
//# sourceMappingURL=path---packages-bs-director-a449d4a876d3a21f9454.js.map