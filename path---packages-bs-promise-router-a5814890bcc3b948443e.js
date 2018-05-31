webpackJsonp([0x89569aedc41e],{1030:function(e,r){e.exports={data:{package:{id:"bs-promise-router",score:.4893577444588999,name:"bs-promise-router",version:"0.1.2",description:"BuckleScript interface to express-promise-router",keywords:["scalar","node","graphql","bucklescript","apollo"],license:"BSD-2-Clause",updated:"2017-12-19T04:48:10.693Z",stars:0,type:"published",quality:.44037793138618453,popularity:.020700072751089725,maintenance:.9999981130861806,readme:'<h1>bs-promise-router</h1>\n<p>A BuckleScript interface to <a href="https://www.npmjs.com/package/express-promise-router">express-promise-router</a>.</p>\n<h2>Example</h2>\n<pre><code class="language-reason">let heartbeat = (_, res: Express.Response.t) => {\n  Express.Response.sendString(res, "ok") |> ignore;\n  Js.Promise.resolve(Js.undefined)\n};\n\nlet router = PromiseRouter.make();\n\nPromiseRouter.get(router, ~path="/", heartbeat);\n\nExpress.App.use(app, asMiddleware(router));\n</code></pre>\n',homepageUrl:"https://github.com/ecliptic/bucklescript-tools#readme",repositoryUrl:"https://github.com/ecliptic/bucklescript-tools",npmUrl:"https://www.npmjs.com/package/bs-promise-router",issuesUrl:"https://github.com/ecliptic/bucklescript-tools/issues",slug:"packages/bs-promise-router"}},pathContext:{id:"bs-promise-router"}}}});
//# sourceMappingURL=path---packages-bs-promise-router-a5814890bcc3b948443e.js.map