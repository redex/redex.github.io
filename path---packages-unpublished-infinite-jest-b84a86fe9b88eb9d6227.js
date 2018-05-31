webpackJsonp([0xf0e205d906c7],{1012:function(n,e){n.exports={data:{package:{id:"unpublished/infinite-jest",updated:"2017-12-16T15:20:04.855Z",name:"infinite-jest",version:"0.0.0",description:"",keywords:["bucklescript","test","ocaml"],license:"MIT",type:"unpublished",stars:4,readme:'<h1>infinite-jest</h1>\n<p>An experimental cross-platform native/BuckleScript test framework</p>\n<blockquote>\n<p>Alas, poor Yorick! I knew him, Horatio: a fellow of infinite jest, of most excellent fancy: he hath borne me on his back a thousand times; and now, how abhorred in my imagination it is!</p>\n</blockquote>\n<h2>Example</h2>\n<pre><code class="language-ml">open InfiniteJest\n\nlet myTests =\n  open InfiniteJest.Test in\n  \n  describe "Assertions" (fun () -> [\n  \n    test "completely bananas" (fun () ->\n      "bananas" |> Expect.stringContaining "nanas");\n      \n    test "succ" (fun () ->\n      2 |> succ\n        |> Expect.toEqual 3);\n        \n  ])\n\nlet _ = \n  run [myTests]\n</code></pre>\n<h2>Output comparison</h2>\n<p>Jest/BuckleScript (Left) vs Native runner (Right)\n<img src="images/output-comparison.png" alt="Output comparison">)</p>\n',homepageUrl:null,repositoryUrl:"https://github.com/glennsl/infinite-jest",npmUrl:null,issuesUrl:null,slug:"packages/unpublished/infinite-jest"}},pathContext:{id:"unpublished/infinite-jest"}}}});
//# sourceMappingURL=path---packages-unpublished-infinite-jest-b84a86fe9b88eb9d6227.js.map