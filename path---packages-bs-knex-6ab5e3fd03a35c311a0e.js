webpackJsonp([0xb2ad09963d7a],{1048:function(e,n){e.exports={data:{package:{id:"bs-knex",score:.4912742535704201,name:"bs-knex",version:"0.9.0",description:"BuckleScript interface to the node 'knex' library",keywords:["knex","sql","database","node","bucklescript"],license:"BSD-2-Clause",updated:"2018-01-04T20:31:38.394Z",stars:1,type:"published",quality:.4335743593610548,popularity:.0320055593202963,maintenance:1,readme:'<h1>bs-knex</h1>\n<p>BuckleScript utilities for working with the Node <a href="http://knexjs.org/">knex</a> library.</p>\n<h2>Example</h2>\n<pre><code class="language-reason">let knex = Knex.make({\n  "client": "pg",\n  "connection": {\n    "user": Config.Database.username,\n    "password": Config.Database.password,\n    "host": Config.Database.hostname,\n    "port": Config.Database.port,\n    "database": Config.Database.name\n  },\n  "pool": {\n    "min": Config.Database.poolMin,\n    "max": Config.Database.poolMax,\n    "idleTimeoutMillis": Config.Database.poolIdle\n  },\n  "acquireConnectionTimeout": 2000\n});\n\nlet users = [@bs] knex("users", Js.Nullable.null);\n\nlet promise = (user: Js.t(\'a)) =>\n  users\n  |> insert({\n        "user_name": user##userName,\n        "display_name": user##displayName,\n        "email": user##email\n      })\n  |> returning("*")\n  |> toPromise\n  |> then_(handleResponse(~error="Unable to add User."))\n  |> then_(pickFirst)\n  |> handleUniqueError(\n        ~name="users_email_unique",\n        ~message="That email address is already in use."\n      )\n  |> handleUniqueError(\n        ~name="users_user_name_unique",\n        ~message="That user name is already in use."\n      )\n  |> handleDbErrors;\n</code></pre>\n',homepageUrl:"https://github.com/ecliptic/bucklescript-tools#readme",repositoryUrl:"https://github.com/ecliptic/bucklescript-tools",npmUrl:"https://www.npmjs.com/package/bs-knex",issuesUrl:"https://github.com/ecliptic/bucklescript-tools/issues",slug:"packages/bs-knex"}},pathContext:{id:"bs-knex"}}}});
//# sourceMappingURL=path---packages-bs-knex-6ab5e3fd03a35c311a0e.js.map