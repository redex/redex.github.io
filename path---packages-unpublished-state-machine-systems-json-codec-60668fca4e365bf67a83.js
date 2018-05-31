webpackJsonp([72560817583404],{1136:function(e,n){e.exports={data:{package:{id:"unpublished/state-machine-systems/JsonCodec",score:0,name:"state-machine-systems/JsonCodec",version:"0.1.0",description:"JSON combinator library for BuckleScript/Reason",keywords:["json","bucklescript"],license:"Apache-2.0",updated:"2018-01-14T10:19:38.596Z",stars:9,type:"unpublished",quality:0,popularity:0,maintenance:0,readme:'<h1>JsonCodec</h1>\n<h2>JSON combinator library for BuckleScript/Reason</h2>\n<p>Using the magic of <a href="https://www.microsoft.com/en-us/research/wp-content/uploads/2004/01/picklercombinators.pdf">pickler combinators</a>, this library allows you to parse and serialize JSON structures in a declarative way, free of boilerplate.</p>\n<p>Here\'s a little example:</p>\n<pre><code class="language-reason">let json = {js|\n{\n    "name": "Great Pyramid of Giza",\n    "lat": 29.979175,\n    "lon": 31.134358,\n    "height": 146.5\n}\n|js};\n\n/* Define a codec for the above object type */\nlet codec =\n  JsonCodec.(\n    object4\n      (field "name" string) (field "lat" number) (field "long" number) (field "height" number)\n  );\n\n/* Decoding */\nlet () =\n  switch (JsonCodec.decodeJson codec json) {\n  | Js.Result.Ok (name, lat, lon, height) =>\n    Printf.printf "name=\'%s\' location=%f,%f height=%f\\n" name lat lon height\n  | Js.Result.Error error => Printf.printf "Decoding error: %s" error\n  };\n\n/* Encoding */\nlet encoded = JsonCodec.encodeJson codec ("Machu Picchu", -13.163333, -72.545556, 2430.0);\n\nlet () = Printf.printf "JSON: %s\\n" encoded;\n</code></pre>\n<p>© 2017 State Machine Systems Ltd. <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache Licence, Version 2.0</a></p>\n',homepageUrl:"https://github.com/state-machine-systems/JsonCodec#readme",repositoryUrl:"https://github.com/state-machine-systems/JsonCodec",npmUrl:null,issuesUrl:"https://github.com/state-machine-systems/JsonCodec/issues",slug:"packages/unpublished/state-machine-systems/JsonCodec"}},pathContext:{id:"unpublished/state-machine-systems/JsonCodec"}}}});
//# sourceMappingURL=path---packages-unpublished-state-machine-systems-json-codec-60668fca4e365bf67a83.js.map