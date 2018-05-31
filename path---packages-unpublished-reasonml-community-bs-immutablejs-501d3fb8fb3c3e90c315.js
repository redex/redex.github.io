webpackJsonp([0xceaaa2c2e643],{1118:function(t,e){t.exports={data:{package:{id:"unpublished/reasonml-community/bs-immutablejs",score:0,name:"reasonml-community/bs-immutablejs",version:"0.0.1",description:"Reason + BuckleScript bindings to Immutable.js",keywords:["immutable","data structures","persistent","bucklescript"],license:"MIT",updated:"2018-01-11T10:40:23.252Z",stars:19,type:"unpublished",quality:0,popularity:0,maintenance:0,readme:'<h1>bs-immutablejs</h1>\n<p><strong>Note</strong>: these are <strong>bindings</strong> to the <a href="https://facebook.github.io/immutable-js/">Immutable.js</a> library. These are only meant to be used to interoperate with existing JavaScript code; In Reason/BS, we have more lightweight immutable (and optionally mutable) data structures by default (list, record, hashmap, set, and upcoming data structures). New Reason/BS projects projects don\'t need bs-immutablejs.</p>\n<h2>Documentation</h2>\n<p>The source is a <a href="https://github.com/reasonml-community/bs-immutablejs/blob/master/src/immJsRe.re">single file</a> of BuckleScript <code>external</code>s. The API corresponds to Immutable.js\' API.</p>\n<p>Example usage:</p>\n<pre><code class="language-reason">let greeting = ImmutableJsRe.List.fromArray([|"hello", "world"|]);\n\nlet extendedGreeting = ImmutableJsRe.List.push("how are you", greeting);\n\nlet reallyExtendedGreeting =\n  ImmutableJsRe.List.(\n    extendedGreeting |> push("I\'m fine") |> push("thank you") |> push("and you?")\n  );\n</code></pre>\n<p>Generated code:</p>\n<pre><code class="language-js">var greeting = Immutable.List(/* array */[\n      "hello",\n      "world"\n    ]);\nvar extendedGreeting = greeting.push("how are you");\nextendedGreeting.push("I\'m fine").push("thank you").push("and you?");\n</code></pre>\n<h2>Transitioning to Idiomatic Reason/BuckleScript Data Structures</h2>\n<p>Here\'s a table of Immutable.js data structures and their Reason/BuckleScript equivalents. Reason/BS provide the data structures out of the box.</p>\n<table>\n<thead>\n<tr>\n<th>Immutable.js</th>\n<th>Reason/BuckleScript</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>List</td>\n<td>List</td>\n</tr>\n<tr>\n<td>Map</td>\n<td>Map</td>\n</tr>\n<tr>\n<td>OrderedMap</td>\n<td>Nothing yet</td>\n</tr>\n<tr>\n<td>Set</td>\n<td>Set</td>\n</tr>\n<tr>\n<td>OrderedSet</td>\n<td>Nothing yet</td>\n</tr>\n<tr>\n<td>Stack</td>\n<td>List</td>\n</tr>\n<tr>\n<td>Record</td>\n<td>Record</td>\n</tr>\n<tr>\n<td>Seq</td>\n<td>Use \n<code>lazy</code></td>\n</tr>\n</tbody>\n</table>\n<h2>Contributing</h2>\n<p>Prerequisite: <code>https://github.com/reasonml/reason-cli</code>.</p>\n<pre><code>git clone https://github.com/BuckleTypes/bs-immutablejs.git\ncd bs-immutablejs\nnpm install\nnpm start\n</code></pre>\n',homepageUrl:"https://github.com/reasonml-community/bs-immutablejs#readme",repositoryUrl:"https://github.com/reasonml-community/bs-immutablejs",npmUrl:null,issuesUrl:"https://github.com/reasonml-community/bs-immutablejs/issues",slug:"packages/unpublished/reasonml-community/bs-immutablejs"}},pathContext:{id:"unpublished/reasonml-community/bs-immutablejs"}}}});
//# sourceMappingURL=path---packages-unpublished-reasonml-community-bs-immutablejs-501d3fb8fb3c3e90c315.js.map