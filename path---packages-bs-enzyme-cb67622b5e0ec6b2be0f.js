webpackJsonp([76067603543503],{1046:function(e,t){e.exports={data:{package:{id:"bs-enzyme",score:.6038948698461448,name:"bs-enzyme",version:"0.3.0",description:"Bucklescript bindings for Enzyme",keywords:["bucklescript","testing","enzyme"],license:"MIT",updated:"2017-12-30T17:33:25.735Z",stars:15,type:"published",quality:.7862052601903127,popularity:.05172092734237953,maintenance:.9998027634834805,readme:'<h1>bs-enzyme - <a href="https://github.com/bucklescript/bucklescript">BuckleScript</a> bindings for <a href="https://github.com/airbnb/enzyme">Enzyme</a> <a href="https://www.npmjs.com/package/bs-enzyme"><img src="https://img.shields.io/npm/v/bs-enzyme.svg?style=flat-square" alt="npm (scoped)"></a></h1>\n<p>:construction: <strong>Note:</strong> This package is still <em>very</em> experimental. Expect\nfrequent, breaking changes right up until 1.0 is released. :construction:</p>\n<hr>\n<h2>Status</h2>\n<ul>\n<li>Most of the <code>shallow</code> API is implemented</li>\n<li>The <code>simulate</code> method is currently wrapped in multiple <code>simulateN</code> functions\nto handle mixed variadic arguments</li>\n<li>Neither the <code>render</code> nor <code>mount</code> APIs are implemented</li>\n<li>I haven\'t extensively tested most of the functions, so some might be broken</li>\n</ul>\n<h2>Example</h2>\n<p>Using the excellent <a href="https://github.com/reasonml-community/bs-jest">bs-jest</a></p>\n<pre><code class="language-reason">open Jest;\n\nEnzyme.configureEnzyme(Enzyme.react_16_adapter());\n\nlet setup = (~title="Test", ~handleClick=(_evt) => (), ()) =>\n  Enzyme.shallow(&#x3C;DummyComponent title handleClick />);\n\nlet header = (wrapper) =>\nwrapper\n  |> Enzyme.find("#header")\n  |> Enzyme.first;\n\nlet listItems = (wrapper) =>\n  wrapper\n  |> Enzyme.find("#list")\n  |> Enzyme.children;\n\ndescribe("DummyComponent", () => {\n  open Expect;\n\n  test("renders a #header", () => {\n    let title = "A test title";\n    let wrapper = setup(~title, ());\n    let headerNodes = wrapper |> header;\n    expect(Enzyme.length(headerNodes)) |> toBe(1)\n  });\n\n  test("has the expected h1 tag in the #header", () => {\n    let title = "A test title";\n    let wrapper = setup(~title, ());\n    let expectedNode = &#x3C;h1> (ReasonReact.stringToElement(title)) &#x3C;/h1>;\n    expect(Enzyme.contains(expectedNode, wrapper)) |> toBe(true)\n  });\n\n  test("initially has its `clicked` state set to false", () => {\n    let wrapper = setup();\n    let {clicked}: DummyComponent.state = Enzyme.state(wrapper);\n    expect(clicked) |> toBe(false)\n  });\n\n  test("folds left properly", () => {\n    let items = setup() |> listItems;\n    let result = Enzyme.foldLeft((text, node) => text ++ Enzyme.text(node), "", items);\n    expect(result) |> toBe("OneTwoThree")\n  });\n});\n</code></pre>\n<p>See more examples in the project\'s\n<a href="https://github.com/rpowelll/bs-enzyme/tree/master/src/__tests__">tests directory</a>.</p>\n<h2>Installation</h2>\n<pre><code>$ npm install --save-dev bs-enzyme\n</code></pre>\n<p>Then add <code>bs-enzyme</code> to <code>bs-dev-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<pre><code class="language-json">{\n  ...\n  "bs-dev-dependencies": ["bs-enzyme"]\n}\n</code></pre>\n<p><strong>Note:</strong> If you\'re using this package with <code>bs-jest</code>, be sure to list\n<code>bs-enzyme</code> first in your dependencies.</p>\n',homepageUrl:"https://github.com/rpowelll/bs-enzyme#readme",repositoryUrl:"https://github.com/rpowelll/bs-enzyme",npmUrl:"https://www.npmjs.com/package/bs-enzyme",issuesUrl:"https://github.com/rpowelll/bs-enzyme/issues",slug:"packages/bs-enzyme"}},pathContext:{id:"bs-enzyme"}}}});
//# sourceMappingURL=path---packages-bs-enzyme-cb67622b5e0ec6b2be0f.js.map