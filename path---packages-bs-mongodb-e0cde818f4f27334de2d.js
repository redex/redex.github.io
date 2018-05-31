webpackJsonp([0xdcb9d5dd5ce7],{1062:function(e,n){e.exports={data:{package:{id:"bs-mongodb",score:.35491547184961225,name:"bs-mongodb",version:"0.1.2",description:"[![Build Status](https://travis-ci.org/PeteProgrammer/bs-mongodb.svg?branch=master)](https://travis-ci.org/PeteProgrammer/bs-mongodb)",keywords:["bucklescript"],license:"MIT",updated:"2018-01-09T23:03:34.592Z",stars:null,type:"published",quality:.7787913366429255,popularity:.013374413883385495,maintenance:.333134359992999,readme:"<h1>MongoDB bindings for bucklescript</h1>\n<p><a href=\"https://travis-ci.org/PeteProgrammer/bs-mongodb\"><img src=\"https://travis-ci.org/PeteProgrammer/bs-mongodb.svg?branch=master\" alt=\"Build Status\"></a></p>\n<p>This library contains preliminary bindings to MongoDB. There is very little\ndocumentation yet, and far from all features are implemented.</p>\n<p>This library is need-driven, I am adding bindings as I need them. If you add\nbindings to this, feel free to send me a pull request.</p>\n<h2>Future breaking change - be aware</h2>\n<p>When I first created the <code>Collection.createIndex</code> function, I needed to pass\noptions. But it didn't occur to me then, that the options should be options. So\nin a future version, the options will be passed as an optional argument.\nCurrently there is a <code>Collection.createIndexNoOpts</code> for a no-options call.</p>\n<h2>Handling Async code</h2>\n<p>The mongo driver is inherently async, every result is either provided to a\ncallback, or delivered in a Promise. I personally use the callbacks with <a href=\"https://github.com/PeteProgrammer/resync\">my own\nasync handling library</a>.</p>\n<p>But I didn't want to push a specific async library upon any users of this\nlibrary, so in order to use the library, you construct the module through a\nfunctor, that takes a <code>CallbackHandler</code> as argument.</p>\n<p>This piece of code is from my project where I bind the mongo library to my async\nlibrary.</p>\n<pre><code>include MongoDB;\n\nmodule AsyncHandler : CallbackHandler with type t('a) = Async.t('a) = {\n  type t('a) = Async.t('a);\n  let callbackConverter = (x:callback('a)) : Async.t('a) => x |> Async.from_js;\n};\n\ninclude Make(AsyncHandler);\n</code></pre>\n<p>If you prefer to use a <code>(Js.Result.t('a,MongoError.t) => unit) => unit</code>, you can\ndo so. I might get some examples up.</p>\n<p>And I will try to see if I can get it to work with Promises, for those who\nprefer this route (the underlying node library returns a promise, if no callback\nis passed to the aync functions).</p>\n",homepageUrl:null,repositoryUrl:null,npmUrl:"https://www.npmjs.com/package/bs-mongodb",issuesUrl:null,slug:"packages/bs-mongodb"}},pathContext:{id:"bs-mongodb"}}}});
//# sourceMappingURL=path---packages-bs-mongodb-e0cde818f4f27334de2d.js.map