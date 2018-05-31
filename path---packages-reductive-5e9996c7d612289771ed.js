webpackJsonp([18871995413856],{1105:function(e,t){e.exports={data:{package:{id:"reductive",score:.3376240138171803,name:"reductive",version:"0.2.0",description:"Redux in Reason",keywords:["redux","ocaml"],license:"MIT",updated:"2018-01-12T07:25:52.391Z",stars:null,type:"published",quality:.720417122733416,popularity:.015338278389543224,maintenance:.3318013701737583,readme:'<h1>Reductive</h1>\n<p>A reimplementation of <a href="https://github.com/reactjs/redux">redux</a> in <a href="https://github.com/facebook/reason">Reason</a>.</p>\n<h2>Word of Caution</h2>\n<p><strong><a href="https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367">You might not need this library</a></strong>, especially so in a language which provides good enough construction blocks out of the box. <strong>ReasonReact <a href="https://reasonml.github.io/reason-react/blog/2017/09/01/reducers.html">already comes with reducers</a></strong>!</p>\n<p>However, in the spirit of unifying the Reason community around an authoritative Redux implementation and to avoid churn, we\'ll polish Reductive to make it production-ready for those who do wish to use it anyway.</p>\n<h2>Comparisons with Redux</h2>\n<h3>Actions</h3>\n<p>Redux <a href="http://redux.js.org/docs/basics/Actions.html">actions</a> are implemented as plain JS objects. JS objects can be a bit too flexible, and many Redux users rely on standardized shapes for their actions to make sure that middlewares and third party libraries work with them. Reason has language-level support for composing a set of data types which many functions can operate over. They are called <a href="https://reasonml.github.io/guide/language/data-types#variants">variants</a> and you can see how they are used <a href="https://github.com/reasonml-community/reductive/blob/master/examples/basic/simpleStore.re">here</a>.</p>\n<h3>Action Creators</h3>\n<p>Redux <a href="http://redux.js.org/docs/basics/Actions.html#action-creators">action creators</a> are used as composable ways of generating plain JS objects that match the schema of a specific action. In Reason, the type system does a lot of this work for you, so you can reliably put action types directly in your code and know that things will Just Work™. This has an added performance advantage of shifting that function call to compile time.</p>\n<h3>Enhancer Composition</h3>\n<p>Much of the power of redux comes from having a unified API for writing and using middleware or enhancers. They\'re typically wired together behind the scenes in the <a href="http://redux.js.org/docs/api/applyMiddleware.html">applyMiddlewares function</a>. This function doesn\'t exist in Reductive, because Reason has language-level support for function composition with operators like <a href="https://caml.inria.fr/pub/docs/manual-ocaml/libref/Pervasives.html#6_Compositionoperators"><code>|></code> and <code>@@</code></a>. You can see some <a href="https://github.com/reasonml-community/reductive/blob/master/examples/immutable/timeTravelStore.re#L86-L87">example usage here</a> and <a href="https://github.com/reasonml-community/reductive/blob/master/src/reductive.rei#L39-L112">some of the deprecation messages</a> to get a better understanding of typical usage.</p>\n<h3>The Source</h3>\n<p>The code behind Reductive is incredibly simple. The <a href="https://github.com/reasonml-community/reductive/blob/master/src/reductive.re#L1-L40">first 40 lines</a> Include the entire reimplementation of <a href="https://github.com/reactjs/redux">redux</a>. The <a href="https://github.com/reasonml-community/reductive/blob/master/src/reductive.re#L42-L83">next ~40 lines</a> are a reimplementation of the <a href="https://github.com/reactjs/react-redux">react-redux</a> library (without the higher-order component connect style implementation). The code is short and relatively simple to follow.</p>\n<h2>Alternative to Reductive</h2>\n<p>Hopefully, the above comparisons demonstrated that <strong>you might not need an extra-react state management technique at all</strong>; passing props down works well in <a href="https://github.com/reasonml/reason-react">Reason-React</a>, and since props are well-typed, adding/remove them takes seconds. Keep state/props management simple so that you can spend the learning budget elsewhere!</p>\n<h2>Contributing</h2>\n<p>Current needs:</p>\n<ul>\n<li>Potential bug fixes</li>\n<li>Better examples usages</li>\n<li>More docs on differences from/similarities with Redux</li>\n<li>Different examples of/links to simpler state management in Reason</li>\n</ul>\n',homepageUrl:null,repositoryUrl:null,npmUrl:"https://www.npmjs.com/package/reductive",issuesUrl:null,slug:"packages/reductive"}},pathContext:{id:"reductive"}}}});
//# sourceMappingURL=path---packages-reductive-5e9996c7d612289771ed.js.map