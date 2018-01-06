webpackJsonp([97511051254745],{1080:function(e,n){e.exports={data:{package:{id:"@glennsl/bs-json",score:.6518260185565912,name:"@glennsl/bs-json",version:"1.1.0",description:"Compositional JSON encode/decode library for BuckleScript",keywords:["json","bucklescript"],license:"MIT",updated:"2018-01-05T00:10:15.987Z",stars:43,type:"published",quality:.9347972509515559,popularity:.06110526648892694,maintenance:1,readme:'<h1>bs-json</h1>\n<p>Compositional JSON encode/decode library for BuckleScript.</p>\n<p><a href="https://npmjs.org/@glennsl/bs-json"><img src="https://img.shields.io/npm/v/@glennsl/bs-json.svg" alt="npm"></a>\n<a href="https://travis-ci.org/glennsl/bs-json"><img src="https://img.shields.io/travis/glennsl/bs-json/master.svg" alt="Travis"></a>\n<a href="https://coveralls.io/github/glennsl/bs-json?branch=master"><img src="https://img.shields.io/coveralls/glennsl/bs-json/master.svg" alt="Coveralls"></a>\n<a href="https://github.com/glennsl/bs-json/issues"><img src="https://img.shields.io/github/issues/glennsl/bs-json.svg" alt="Issues"></a>\n<a href="https://github.com/glennsl/bs-json/commits/master"><img src="https://img.shields.io/github/last-commit/glennsl/bs-json.svg" alt="Last Commit"></a></p>\n<p><em><strong>NOTE:</strong> NPM package has moved to <code>@glennsl/bs-json</code>. Remember to update both <code>package.json</code> AND <code>bsconfig.json</code>.</em></p>\n<p>The Decode module in particular provides a basic set of decoder functions to be composed into more complex decoders. A\ndecoder is a function that takes a <code>Js.Json.t</code> and either returns a value of the desired type if successful or raises a\n<code>DecodeError</code> exception if not. Other functions accept a decoder and produce another decoder. Like <code>array</code>, which when\ngiven a decoder for type <code>t</code> will return a decoder that tries to produce a value of type <code>t array</code>. So to decode an\n<code>int array</code> you combine <code>Json.Decode.int</code> with <code>Json.Decode.array</code> into <code>Json.Decode.(array int)</code>. An array of arrays of\nints? <code>Json.Decode.(array (array int))</code>. Dict containing arrays of ints? <code>Json.Decode.(dict (array int))</code>.</p>\n<h2>Example</h2>\n<pre><code class="language-ml">(* OCaml *)\ntype line = {\n  start: point;\n  end_: point;\n  thickness: int option\n}\nand point = {\n  x: float;\n  y: float\n}\n\nmodule Decode = struct\n  let point json =\n    let open! Json.Decode in {\n      x = json |> field "x" float;\n      y = json |> field "y" float\n    }\n\n  let line json =\n    Json.Decode.{\n      start     = json |> field "start" point;\n      end_      = json |> field "end" point;\n      thickness = json |> optional (field "thickness" int)\n    }\nend\n\nlet data = {| {\n  "start": { "x": 1.1, "y": -0.4 },\n  "end":   { "x": 5.3, "y": 3.8 }\n} |}\n\nlet line = data |> Json.parseOrRaise\n                |> Decode.line\n</code></pre>\n<pre><code class="language-reason">/* Reason */\ntype line = {\n  start: point,\n  end_: point,\n  thickness: option(int)\n}\nand point = {\n  x: float,\n  y: float\n};\n\nmodule Decode = {\n  let point = json =>\n    Json.Decode.{\n      x: json |> field("x", float),\n      y: json |> field("y", float)\n    };\n\n  let line = json =>\n    Json.Decode.{\n      start:     json |> field("start", point),\n      end_:      json |> field("end", point),\n      thickness: json |> optional(field("thickness", int))\n    };\n};\n\nlet data = {| {\n  "start": { "x": 1.1, "y": -0.4 },\n  "end":   { "x": 5.3, "y": 3.8 }\n} |};\n\nlet line = data |> Json.parseOrRaise\n                |> Decode.line;\n</code></pre>\n<p>See <a href="https://github.com/glennsl/bs-json/blob/master/examples/">examples</a> for more.</p>\n<h2>Installation</h2>\n<pre><code class="language-sh">npm install --save @glennsl/bs-json\n</code></pre>\n<p>Then add <code>@glennsl/bs-json</code> to <code>bs-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<pre><code class="language-js">{\n  ...\n  "bs-dependencies": ["@glennsl/bs-json"]\n}\n</code></pre>\n<h2>Documentation</h2>\n<h3>API</h3>\n<p>For the moment, please see the interface files:</p>\n<ul>\n<li><a href="https://github.com/glennsl/bs-json/blob/master/src/Json.mli">Json</a></li>\n<li><a href="https://github.com/glennsl/bs-json/blob/master/src/Json_encode.mli">Json.Encode</a></li>\n<li><a href="https://github.com/glennsl/bs-json/blob/master/src/Json_decode.mli">Json.Decode</a></li>\n</ul>\n<h3>Writing custom decoders and encoders</h3>\n<p>If you look at the type signature of <code>Js.Decode.array</code>, for example, you\'ll see it takes an <code>\'a decoder</code> and returns an\n<code>\'a array decoder</code>. <code>\'a decoder</code> is just an alias for <code>Js.Json.t -> \'a</code>, so if we expand the type signature of <code>array</code>\nwe\'ll get <code>(Js.Json.t -> \'a) -> Js.Json.t -> \'a array</code>. We can now see that it is a function that takes a decoder and\nreturns a function, itself a decoder. Applying the <code>int</code> decoder to <code>array</code> will give us an <code>int array decoder</code>, a\nfunction <code>Js.Json.t -> int array</code>.</p>\n<p>If you\'ve written a function that takes just <code>Js.Json.t</code> and returns user-defined types of your own, you\'ve already been\nwriting composable decoders! Let\'s look at <code>Decode.point</code> from the example above:</p>\n<pre><code class="language-ml">let point json =\n  let open! Json.Decode in {\n    x = json |> field "x" float;\n    y = json |> field "y" float\n  }\n</code></pre>\n<p>This is a function <code>Js.Json.t -> point</code>, or a <code>point decoder</code>. So if we\'d like to decode an array of points, we can just\npass it to <code>Json.Decode.array</code> to get a <code>point array decoder</code> in return.</p>\n<h4>Builders</h4>\n<p>To write a decoder <em>builder</em> like <code>Json.Decode.array</code> we need to take another decoder as an argument, and thanks to\ncurrying we just need to apply it where we\'d otherwise use a fixed decoder. Say we want to be able to decode both\n<code>int point</code>s and <code>float point</code>s. First we\'d have to parameterize the type:</p>\n<pre><code class="language-ml">type \'a point = {\n  x: \'a,\n  y: \'a\n}\n</code></pre>\n<p>Then we can change our <code>point</code> function from above to take and use a decoder argument:</p>\n<pre><code class="language-ml">let point decodeNumber json =\n  let open! Json.Decode in {\n    x = json |> field "x" decodeNumber;\n    y = json |> field "y" decodeNumber\n  }\n</code></pre>\n<p>And if we wish we can now create aliases for each variant:</p>\n<pre><code class="language-ml">let intPoint = point Json.Decode.int\nlet floatPoint = point Json.Decode.float\n</code></pre>\n<h4>Encoders</h4>\n<p>Encoders work exactly the same way, just in reverse. <code>\'a encoder</code> is just an alias for <code>\'a -> Js.Json.t</code>, and this also\ntransfers to composition: <code>\'a encoder -> \'a array encoder</code> expands to <code>(\'a -> Js.Json.t) -> \'a array -> Js.Json.t</code>.</p>\n<h2>Changes</h2>\n<h3>1.1.0</h3>\n<ul>\n<li>Added "stack traces" to higher-order decoders, making it easier to find the location of an error.</li>\n</ul>\n<h3>1.0.1</h3>\n<ul>\n<li>Moved repository from <code>reasonml-community/bs-json</code> to <code>glennsl/bs-json</code></li>\n<li>Renamed NPM package from <code>bs-json</code> to <code>@glennsl/bs-json</code></li>\n</ul>\n<h3>1.0.0</h3>\n<ul>\n<li>Replaced <code>Json.Encoder.array</code> with <code>Json.Encode.arrayOf</code> renamed to <code>array</code>. Deprecated <code>arrayOf</code> alias.</li>\n<li>Added <code>Json.parse</code>, <code>Json.parseOrRaise</code>, <code>Json.stringify</code></li>\n<li>Added <code>date</code> encoder and decoder</li>\n<li>Added <code>tuple2</code>/<code>tuple3</code>/<code>tuple4</code> encoders and decoders</li>\n<li>Fixed bug where js integers > 32-bit were rejected as integers by Json.Decode.int (#15)</li>\n</ul>\n<h3>0.2.4</h3>\n<ul>\n<li>Added <code>Json.Encode.bool</code></li>\n<li>Added <code>Json.Encode.pair</code></li>\n<li>Added <code>Json.Encode.withDefault</code></li>\n<li>Added <code>Json.Encode.nullable</code></li>\n<li>Added <code>Json.Encode.arrayOf</code></li>\n<li>Added <code>Json.Encode.jsonArray</code> as replacement for <code>Json.Encode.array</code></li>\n<li>Deprecated <code>Json.Encode.array</code></li>\n</ul>\n<h3>0.2.3</h3>\n<ul>\n<li>Fixed embarrassing bug where an API was used that isn\'t available on IE (honestly more embarrassed on behalf of IE though)</li>\n</ul>\n<h3>0.2.2</h3>\n<ul>\n<li>Added <code>Json.Decode.pair</code></li>\n</ul>\n<h3>0.2.1</h3>\n<ul>\n<li>Added <code>Json.Encode.list</code></li>\n</ul>\n<h3>0.2.0</h3>\n<ul>\n<li>Breaking: Renamed <code>Json.Encode.object_</code> to <code>Json.Encode.dict</code></li>\n<li>Added <code>Json.Encode.object_</code> taking a list of properties instead of a Json.Dict.t as before</li>\n</ul>\n',homepageUrl:"https://github.com/glennsl/bs-json#readme",repositoryUrl:"https://github.com/glennsl/bs-json",npmUrl:"https://www.npmjs.com/package/%40glennsl%2Fbs-json",issuesUrl:"https://github.com/glennsl/bs-json/issues",slug:"packages/@glennsl/bs-json"}},pathContext:{id:"@glennsl/bs-json"}}}});
//# sourceMappingURL=path---packages-glennsl-bs-json-b0670864c76801ee1646.js.map