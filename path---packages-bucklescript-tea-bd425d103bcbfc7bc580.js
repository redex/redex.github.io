webpackJsonp([0x8cb30c4dc78a],{1087:function(e,t){e.exports={data:{package:{id:"bucklescript-tea",score:.6346301401144616,name:"bucklescript-tea",version:"0.7.0",description:"TEA for Bucklescript",keywords:["tea","ocaml","bucklescript"],license:"LGPL-3.0",updated:"2018-01-11T21:46:25.290Z",stars:232,type:"published",quality:.8067117178126416,popularity:.13141153941913702,maintenance:.9903502456399178,readme:'<h1>Bucklescript-TEA</h1>\n<p><a href="https://nodei.co/npm/bucklescript-tea/"><img src="https://nodei.co/npm/bucklescript-tea.png?compact=true" alt="NPM"></a></p>\n<p><a href="https://travis-ci.org/OvermindDL1/bucklescript-tea"><img src="https://travis-ci.org/OvermindDL1/bucklescript-tea.svg?branch=master" alt="Build Status"></a></p>\n<h2>Reason to Use</h2>\n<ul>\n<li>Entirely event driven, this is like React/Flow but type-safe and significantly faster.</li>\n<li>Amazingly fast compile-times, especially with the built-in watcher of Bucklescript.</li>\n<li>You have the entire power of the OCaml language at your disposal to Javascript.</li>\n<li>You have access to the highly optimized OCaml ecosystem if necessary.</li>\n<li>You have access to the entire Javascript eco-system through a type-safe interface if necessary.</li>\n<li>Open license, same as Bucklescript itself.</li>\n</ul>\n<h2>Description</h2>\n<p>This is a library for OCaml-via-Bucklescript (though in the future to support native compilation for back-end template generation) that follows TEA/<a href="https://guide.elm-lang.org/architecture/">The Elm Architecture</a> as I see it in various incarnations.</p>\n<p>You can read more about it <a href="http://blog.overminddl1.com/tags/bucklescript-tea/">here</a>.</p>\n<p>Currently included and planned forms are:</p>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> Elm API: Following the Elm API as closely as OCaml allows. Converting code back and forth between Elm and OCaml should be made as easy as possible (mostly organizing functions correctly and adding a few <code>let</code>\'s around, a conversion utility to go back and forth is a \'nice-to-have\' someday, but not currently in-dev, PR\'s welcome). It may be good to \'version\' the API, break it out from the latest Elm API to follow different versions of the Elm API behind versioned modules that can be easily opened. This is not done yet but is a \'nice-to-have\' goal before hitting version 1.0.0 to ensure even better API stability. Currently the <code>update</code> callback passes the <code>model</code> first instead of second as it makes matching on the message in a far more expected way, comments on reversing this back to Elm\'s way?</li>\n<li class="task-list-item"><input type="checkbox" disabled> WebComponent: TEA is a wonderful way to reason about information flow and view generation, however the implementation in Elm is very broken when wanting to combine it with WebComponents due to lacking a few ways to listen for data changes (which also fits very well into the TEA <code>update</code> model, just Elm has not done it as of the date of this writing). This may be an extension on the above Elm API however it is possible that it may require breaking away from that API.</li>\n<li class="task-list-item"><input type="checkbox" disabled> OCamlized-TEA: The Elm API is succinct, but highly inefficient in the amount of allocations it causes, though this is not necessary it would be nice to have a replacement API that takes effort to reduce the amount of allocations. Most real-world use would get near nothing out of this but for a few cases it would be quite useful to have an overhaul of the Virtual-DOM declaration style.</li>\n<li class="task-list-item"><input type="checkbox" disabled> React: It would also be nice to have a React back-end for easier integration with React projects, both into and out of this component. This should not have any breaking change over the Elm API but would just be an extension on it.</li>\n<li class="task-list-item"><input type="checkbox" disabled> Binding: Experiment with a method to build a vdom once then \'bind\' to various parts of it. This will not follow TEA so precisely but the TEA style central event loop will still exist, this style will be quite different but may be even more simple while allowing even faster DOM diffing and updating.</li>\n</ul>\n<p>With the above any PR\'s are welcome to clean up code, flesh out functionality, and until we hit 1.0.0 break API compatibility if necessary (but as minimally as possible). 1.0.0 should be complete when the Elm API style is followed as closely as possible and becomes as optimized as it can become while following the API, once that is set then API breaking changes will only happen to match Elm updates. PR\'s are also welcome to add support to other systems such as Yarn as long as it does not break the base NPM packaging system.</p>\n<h2>Installation</h2>\n<h3>NPM</h3>\n<p>First verify you have <code>bs-platform</code> installed, whether globally or just in your project.</p>\n<p>Then install via npm by:</p>\n<pre><code class="language-sh">npm install --save-dev bucklescript-tea\n</code></pre>\n<p>Then in your current Bucklescript project just use this as a dependency add this to your bsconfig.json file:</p>\n<pre><code class="language-json">  "bs-dependencies" : ["bucklescript-tea"]\n</code></pre>\n<p><em>If you install it via any other method make sure that <code>bucklescript-tea</code> is a dependency in your npm\'s package.json file as <code>bsb</code> uses that for lookup.</em></p>\n<h2>Usage</h2>\n<h3>Example project</h3>\n<p>Once you have your Bucklescript project set up and the dependencies configured as above then lets make a new TEA module, the Counter, as is traditional in Elm tutorials, this file will be named <code>counter.ml</code> in your <code>src</code> directory for this example. Code is described via inline comments:</p>\n<pre><code class="language-ocaml">(* This line opens the Tea.App modules into the current scope for Program access functions and types *)\nopen Tea.App\n\n(* This opens the Elm-style virtual-dom functions and types into the current scope *)\nopen Tea.Html\n\n(* Let\'s create a new type here to be our main message type that is passed around *)\ntype msg =\n  | Increment  (* This will be our message to increment the counter *)\n  | Decrement  (* This will be our message to decrement the counter *)\n  | Reset      (* This will be our message to reset the counter to 0 *)\n  | Set of int (* This will be out message to set the counter to a specific value *)\n  [@@bs.deriving {accessors}] (* This is a nice quality-of-life addon from Bucklescript, it will generate function names for each constructor name, optional, but nice to cut down on code, this is unused in this example but good to have regardless *)\n\n(* This is optional for such a simple example, but it is good to have an `init` function to define your initial model default values, the model for Counter is just an integer *)\nlet init () = 4\n\n(* This is the central message handler, it takes the model as the first argument *)\nlet update model = function (* These should be simple enough to be self-explanatory, mutate the model based on the message, easy to read and follow *)\n  | Increment -> model + 1\n  | Decrement -> model - 1\n  | Reset -> 0\n  | Set v -> v\n\n(* This is just a helper function for the view, a simple function that returns a button based on some argument *)\nlet view_button title msg =\n  button\n    [ onClick msg\n    ]\n    [ text title\n    ]\n\n(* This is the main callback to generate the virtual-dom.\n  This returns a virtual-dom node that becomes the view, only changes from call-to-call are set on the real DOM for efficiency, this is also only called once per frame even with many messages sent in within that frame, otherwise does nothing *)\nlet view model =\n  div\n    []\n    [ span\n        [ style "text-weight" "bold" ]\n        [ text (string_of_int model) ]\n    ; br []\n    ; view_button "Increment" Increment\n    ; br []\n    ; view_button "Decrement" Decrement\n    ; br []\n    ; view_button "Set to 42" (Set 42)\n    ; br []\n    ; if model &#x3C;> 0 then view_button "Reset" Reset else noNode\n    ]\n\n(* This is the main function, it can be named anything you want but `main` is traditional.\n  The Program returned here has a set of callbacks that can easily be called from\n  Bucklescript or from javascript for running this main attached to an element,\n  or even to pass a message into the event loop.  You can even expose the\n  constructors to the messages to javascript via the above [@@bs.deriving {accessors}]\n  attribute on the `msg` type or manually, that way even javascript can use it safely. *)\nlet main =\n  beginnerProgram { (* The beginnerProgram just takes a set model state and the update and view functions *)\n    model = init (); (* Since model is a set value here, we call our init function to generate that value *)\n    update;\n    view;\n  }\n</code></pre>\n<p>If anything is typed wrong than the OCaml type checker will catch it and advise. Compilation times are wonderfully fast, probably faster than about any other compile-to-javascript language that you will come across.</p>\n<p>To use this from javascript (with your bundler of choice) you can just do:</p>\n<pre><code class="language-javascript">  var app = require("src/counter.ml").main(document.getElementById("my-element"));\n</code></pre>\n<p>And if you need to shut it down or pass it a message or so then you can do so via the <code>app</code> variable, or feel free to not assign it to a variable as well.</p>\n<p>For further examples see the <a href="https://github.com/OvermindDL1/bucklescript-testing">bucklescript-testing</a> project for now until a full example set up is built.</p>\n<h3>Starter-Kit</h3>\n<p>There is a fantastic starter kit made by tcoopman that supports rollup combining of the files and a built-in server for testing, see and get it at: <a href="https://github.com/tcoopman/bucklescript-tea-starter-kit">tcoopman\'s starter kit</a></p>\n',homepageUrl:"https://github.com/overminddl1/bucklescript-tea#readme",repositoryUrl:"https://github.com/overminddl1/bucklescript-tea",npmUrl:"https://www.npmjs.com/package/bucklescript-tea",issuesUrl:"https://github.com/overminddl1/bucklescript-tea/issues",slug:"packages/bucklescript-tea"}},pathContext:{id:"bucklescript-tea"}}}});
//# sourceMappingURL=path---packages-bucklescript-tea-bd425d103bcbfc7bc580.js.map