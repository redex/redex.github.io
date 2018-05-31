webpackJsonp([0x8c1c68f005cb],{1093:function(e,t){e.exports={data:{package:{id:"re-respect",score:.6226323769236359,name:"re-respect",version:"0.5.1",description:"BDD-style test framework for Reason/bucklescript",keywords:["bucklescript","testing","bdd"],license:"MIT",updated:"2018-01-10T17:15:34.495Z",stars:11,type:"published",quality:.8427974513542718,popularity:.05655183290672703,maintenance:1,readme:'<h1>ReSpect</h1>\n<p>BDD-style test framework for Reason/bucklescript</p>\n<p><a href="https://travis-ci.org/PeteProgrammer/respect"><img src="https://travis-ci.org/PeteProgrammer/respect.svg?branch=master" alt="Build Status"></a></p>\n<p>This is an RSpec inspired test framework for ReasonML/OCaml/Bucklescript. The\nrunner uses raw javascript code, so it will only run in node environments at the moment.</p>\n<p>I base this on a lot of experience I gained from a similar project for F#, FSpec.</p>\n<p>This project is still in a very early stage, so use at your own risk. Breaking\nchanges occur from time to time.</p>\n<h2>Features</h2>\n<ul>\n<li>The framework places tests in "examples", which are grouped in "example\ngroups", just like mocha, jest, jasmine, etc.</li>\n<li>Example groups and their examples are build using immutable data structures,\nallowing for metaprogramming to modify/generate the examples.</li>\n<li>Support for testing async code.</li>\n<li>The framework provides a context object that is unique to each individual\ntest case, and provides a place where each test case can store state\nnecessary for that case.</li>\n<li>Each example or group can have metadata atteched that will be made available\nthrough the context object. This can be used modify what happens in the\nsetup code.</li>\n</ul>\n<p>For more info, see the full <a href="https://github.com/PeteProgrammer/respect/blob/master/Documentation.md">Documentation</a></p>\n<h2>TODO</h2>\n<ul>\n<li>"Finalize" DSL for building test suites.</li>\n<li>Determine whether or not to allow mutation of <code>TestContext</code>. This worked well\nin F#/FSpec, but we don\'t have runtime type checking in Reason/Bucklescript.</li>\n<li>Finalize assertion framework.</li>\n<li>Nicer test output when running.</li>\n<li>Nicer test output when assertions fail.</li>\n<li>Internally, figure out how to report progresss.</li>\n<li>More flexible runner, e.g. configurable location of test files</li>\n<li>✓ Handle async timeout to avoid hanging when async tests don\'t call back</li>\n<li>Make timeout configurable through example metadata.</li>\n<li>Support tear-down code</li>\n</ul>\n<p>Although, I had learned from many mistakes when building FSpec, there are some\nproblems that demand different solutions in Reason/Bucklescript. Async support\nin particular.</p>\n<h2>Latest changes</h2>\n<p>This section just contains the most recent changes. Find the full version\nhistory <a href="https://github.com/PeteProgrammer/respect/blob/master/CHANGELOG.md">here</a>.</p>\n<h3>0.5.1</h3>\n<ul>\n<li>No of passed, pending, and failed tests are written to the console after the\ntest run.</li>\n</ul>\n<h3>0.5.0</h3>\n<ul>\n<li>Breaking change: Renamed <code>TestContext</code> module to <code>Respect_ctx</code> and made it\navailable under <code>Respect.Ctx</code>. A quick fix to get your code to compile\nis to add the this to your own modules <code>module TestContext = Respect.Ctx</code>.</li>\n</ul>\n',homepageUrl:"https://github.com/PeteProgrammer/respect#readme",repositoryUrl:"https://github.com/PeteProgrammer/respect",npmUrl:"https://www.npmjs.com/package/re-respect",issuesUrl:"https://github.com/PeteProgrammer/respect/issues",slug:"packages/re-respect"}},pathContext:{id:"re-respect"}}}});
//# sourceMappingURL=path---packages-re-respect-1c09589abcb56adde03c.js.map