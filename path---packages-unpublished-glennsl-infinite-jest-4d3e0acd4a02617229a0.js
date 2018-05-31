webpackJsonp([0xbf7234be4d37],{1112:function(n,e){n.exports={data:{package:{id:"unpublished/glennsl/infinite-jest",score:0,name:"glennsl/infinite-jest",version:"0.0.0",description:"Experimental cross-platform native/BuckleScript test framework",keywords:["jest","bucklescript","testing","cross-platform"],license:"MIT",updated:"2018-01-11T10:40:23.300Z",stars:4,type:"unpublished",quality:0,popularity:0,maintenance:0,readme:'<h1>infinite-jest</h1>\n<p>An experimental cross-platform native/BuckleScript test framework</p>\n<blockquote>\n<p>Alas, poor Yorick! I knew him, Horatio: a fellow of infinite jest, of most excellent fancy: he hath borne me on his back a thousand times; and now, how abhorred in my imagination it is!</p>\n</blockquote>\n<h2>Example</h2>\n<pre><code class="language-ml">open InfiniteJest\n\nlet myTests =\n  open InfiniteJest.Test in\n  \n  describe "Assertions" (fun () -> [\n  \n    test "completely bananas" (fun () ->\n      "bananas" |> Expect.stringContaining "nanas");\n      \n    test "succ" (fun () ->\n      2 |> succ\n        |> Expect.toEqual 3);\n        \n  ])\n\nlet _ = \n  run [myTests]\n</code></pre>\n<h2>Output comparison</h2>\n<p>Jest/BuckleScript (Left) vs Native runner (Right)\n<img src="images/output-comparison.png" alt="Output comparison">)</p>\n',homepageUrl:"https://github.com/glennsl/infinite-jest#readme",repositoryUrl:"https://github.com/glennsl/infinite-jest",npmUrl:null,issuesUrl:"https://github.com/glennsl/infinite-jest/issues",slug:"packages/unpublished/glennsl/infinite-jest"}},pathContext:{id:"unpublished/glennsl/infinite-jest"}}}});
//# sourceMappingURL=path---packages-unpublished-glennsl-infinite-jest-4d3e0acd4a02617229a0.js.map