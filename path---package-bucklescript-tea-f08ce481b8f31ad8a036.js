webpackJsonp([0x922585088bde],{1240:function(e,s){e.exports={data:{package:{type:"published",id:"bucklescript-tea",name:"bucklescript-tea",version:"0.11.1",category:"library",flags:[],platforms:["browser"],description:"TEA for Bucklescript",keywords:["state management","virtual dom"],license:"LGPL-3.0-or-later",updated:"2019-03-13T07:35:21.053Z",stars:429,score:.43997846981173605,quality:.524214441670179,popularity:.14011689791170442,maintenance:.6676377801188166,readme:'<h1 id="bucklescript-tea"><a href="#bucklescript-tea" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bucklescript-TEA</h1>\n<p><a href="https://nodei.co/npm/bucklescript-tea/"><img src="https://nodei.co/npm/bucklescript-tea.png?compact=true" alt="NPM"></a></p>\n<p><a href="https://travis-ci.org/OvermindDL1/bucklescript-tea"><img src="https://travis-ci.org/OvermindDL1/bucklescript-tea.svg?branch=master" alt="Build Status"></a></p>\n<h2 id="reason-to-use"><a href="#reason-to-use" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reason to Use</h2>\n<ul>\n<li>Entirely event driven, this is like React/Flow but type-safe and significantly faster.</li>\n<li>Amazingly fast compile-times, especially with the built-in watcher of Bucklescript.</li>\n<li>You have the entire power of the OCaml language at your disposal to Javascript.</li>\n<li>You have access to the highly optimized OCaml ecosystem if necessary.</li>\n<li>You have access to the entire Javascript eco-system through a type-safe interface if necessary.</li>\n<li>Open license, same as Bucklescript itself.</li>\n</ul>\n<h2 id="description"><a href="#description" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Description</h2>\n<p>This is a library for OCaml-via-Bucklescript (though in the future to support native compilation for back-end template generation) that follows TEA/<a href="https://guide.elm-lang.org/architecture/">The Elm Architecture</a> as I see it in various incarnations.</p>\n<p>You can read more about it <a href="http://blog.overminddl1.com/tags/bucklescript-tea/">here</a>.</p>\n<p>Currently included and planned forms are:</p>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> Elm API: Following the Elm API as closely as OCaml allows. Converting code back and forth between Elm and OCaml should be made as easy as possible (mostly organizing functions correctly and adding a few <code>let</code>\'s around, a conversion utility to go back and forth is a \'nice-to-have\' someday, but not currently in-dev, PR\'s welcome). It may be good to \'version\' the API, break it out from the latest Elm API to follow different versions of the Elm API behind versioned modules that can be easily opened. This is not done yet but is a \'nice-to-have\' goal before hitting version 1.0.0 to ensure even better API stability. Currently the <code>update</code> callback passes the <code>model</code> first instead of second as it makes matching on the message in a far more expected way, comments on reversing this back to Elm\'s way?</li>\n<li class="task-list-item"><input type="checkbox" disabled> WebComponent: TEA is a wonderful way to reason about information flow and view generation, however the implementation in Elm is very broken when wanting to combine it with WebComponents due to lacking a few ways to listen for data changes (which also fits very well into the TEA <code>update</code> model, just Elm has not done it as of the date of this writing). This may be an extension on the above Elm API however it is possible that it may require breaking away from that API.</li>\n<li class="task-list-item"><input type="checkbox" disabled> OCamlized-TEA: The Elm API is succinct, but highly inefficient in the amount of allocations it causes, though this is not necessary it would be nice to have a replacement API that takes effort to reduce the amount of allocations. Most real-world use would get near nothing out of this but for a few cases it would be quite useful to have an overhaul of the Virtual-DOM declaration style.</li>\n<li class="task-list-item"><input type="checkbox" disabled> React: It would also be nice to have a React back-end for easier integration with React projects, both into and out of this component. This should not have any breaking change over the Elm API but would just be an extension on it.</li>\n<li class="task-list-item"><input type="checkbox" disabled> Binding: Experiment with a method to build a vdom once then \'bind\' to various parts of it. This will not follow TEA so precisely but the TEA style central event loop will still exist, this style will be quite different but may be even more simple while allowing even faster DOM diffing and updating.</li>\n</ul>\n<p>With the above any PR\'s are welcome to clean up code, flesh out functionality, and until we hit 1.0.0 break API compatibility if necessary (but as minimally as possible). 1.0.0 should be complete when the Elm API style is followed as closely as possible and becomes as optimized as it can become while following the API, once that is set then API breaking changes will only happen to match Elm updates. PR\'s are also welcome to add support to other systems such as Yarn as long as it does not break the base NPM packaging system.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<h3 id="npm"><a href="#npm" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>NPM</h3>\n<p>First verify you have <code>bs-platform</code> installed, whether globally or just in your project.</p>\n<p>Then install via npm by:</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install --save-dev bucklescript-tea</code></pre></div>\n<p>Then in your current Bucklescript project just use this as a dependency add this to your bsconfig.json file:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>  <span class="hljs-string">"bs-dependencies"</span> : [<span class="hljs-string">"bucklescript-tea"</span>]</code></pre></div>\n<p><em>If you install it via any other method make sure that <code>bucklescript-tea</code> is a dependency in your npm\'s package.json file as <code>bsb</code> uses that for lookup.</em></p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="example-project"><a href="#example-project" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example project</h3>\n<p>Once you have your Bucklescript project set up and the dependencies configured as above then lets make a new TEA module, the Counter, as is traditional in Elm tutorials, this file will be named <code>counter.ml</code> in your <code>src</code> directory for this example. Code is described via inline comments:</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-comment">(* This line opens the Tea.App modules into the current scope for Program access functions and types *)</span>\n<span class="hljs-keyword">open</span> <span class="hljs-type">Tea</span>.<span class="hljs-type">App</span>\n\n<span class="hljs-comment">(* This opens the Elm-style virtual-dom functions and types into the current scope *)</span>\n<span class="hljs-keyword">open</span> <span class="hljs-type">Tea</span>.<span class="hljs-type">Html</span>\n\n<span class="hljs-comment">(* Let\'s create a new type here to be our main message type that is passed around *)</span>\n<span class="hljs-keyword">type</span> msg =\n  | <span class="hljs-type">Increment</span>  <span class="hljs-comment">(* This will be our message to increment the counter *)</span>\n  | <span class="hljs-type">Decrement</span>  <span class="hljs-comment">(* This will be our message to decrement the counter *)</span>\n  | <span class="hljs-type">Reset</span>      <span class="hljs-comment">(* This will be our message to reset the counter to 0 *)</span>\n  | <span class="hljs-type">Set</span> <span class="hljs-keyword">of</span> <span class="hljs-built_in">int</span> <span class="hljs-comment">(* This will be our message to set the counter to a specific value *)</span>\n  [@@bs.deriving {accessors}] <span class="hljs-comment">(* This is a nice quality-of-life addon from Bucklescript, it will generate function names for each constructor name, optional, but nice to cut down on code, this is unused in this example but good to have regardless *)</span>\n\n<span class="hljs-comment">(* This is optional for such a simple example, but it is good to have an `init` function to define your initial model default values, the model for Counter is just an integer *)</span>\n<span class="hljs-keyword">let</span> init <span class="hljs-literal">()</span> = <span class="hljs-number">4</span>\n\n<span class="hljs-comment">(* This is the central message handler, it takes the model as the first argument *)</span>\n<span class="hljs-keyword">let</span> update model = <span class="hljs-keyword">function</span> <span class="hljs-comment">(* These should be simple enough to be self-explanatory, mutate the model based on the message, easy to read and follow *)</span>\n  | <span class="hljs-type">Increment</span> -&gt; model + <span class="hljs-number">1</span>\n  | <span class="hljs-type">Decrement</span> -&gt; model - <span class="hljs-number">1</span>\n  | <span class="hljs-type">Reset</span> -&gt; <span class="hljs-number">0</span>\n  | <span class="hljs-type">Set</span> v -&gt; v\n\n<span class="hljs-comment">(* This is just a helper function for the view, a simple function that returns a button based on some argument *)</span>\n<span class="hljs-keyword">let</span> view_button title msg =\n  button\n    [ onClick msg\n    ]\n    [ text title\n    ]\n\n<span class="hljs-comment">(* This is the main callback to generate the virtual-dom.\n  This returns a virtual-dom node that becomes the view, only changes from call-to-call are set on the real DOM for efficiency, this is also only called once per frame even with many messages sent in within that frame, otherwise does nothing *)</span>\n<span class="hljs-keyword">let</span> view model =\n  div\n    <span class="hljs-literal">[]</span>\n    [ span\n        [ style <span class="hljs-string">"text-weight"</span> <span class="hljs-string">"bold"</span> ]\n        [ text (string_of_int model) ]\n    ; br <span class="hljs-literal">[]</span>\n    ; view_button <span class="hljs-string">"Increment"</span> <span class="hljs-type">Increment</span>\n    ; br <span class="hljs-literal">[]</span>\n    ; view_button <span class="hljs-string">"Decrement"</span> <span class="hljs-type">Decrement</span>\n    ; br <span class="hljs-literal">[]</span>\n    ; view_button <span class="hljs-string">"Set to 42"</span> (<span class="hljs-type">Set</span> <span class="hljs-number">42</span>)\n    ; br <span class="hljs-literal">[]</span>\n    ; <span class="hljs-keyword">if</span> model &lt;&gt; <span class="hljs-number">0</span> <span class="hljs-keyword">then</span> view_button <span class="hljs-string">"Reset"</span> <span class="hljs-type">Reset</span> <span class="hljs-keyword">else</span> noNode\n    ]\n\n<span class="hljs-comment">(* This is the main function, it can be named anything you want but `main` is traditional.\n  The Program returned here has a set of callbacks that can easily be called from\n  Bucklescript or from javascript for running this main attached to an element,\n  or even to pass a message into the event loop.  You can even expose the\n  constructors to the messages to javascript via the above [@@bs.deriving {accessors}]\n  attribute on the `msg` type or manually, that way even javascript can use it safely. *)</span>\n<span class="hljs-keyword">let</span> main =\n  beginnerProgram { <span class="hljs-comment">(* The beginnerProgram just takes a set model state and the update and view functions *)</span>\n    model = init <span class="hljs-literal">()</span>; <span class="hljs-comment">(* Since model is a set value here, we call our init function to generate that value *)</span>\n    update;\n    view;\n  }</code></pre></div>\n<p>If anything is typed wrong than the OCaml type checker will catch it and advise. Compilation times are wonderfully fast, probably faster than about any other compile-to-javascript language that you will come across.</p>\n<p>To use this from javascript (with your bundler of choice) you can just do:</p>\n<div class="redex-codeblock"><pre class="hljs lang-javascript"><code>  <span class="hljs-keyword">var</span> app = require(<span class="hljs-string">"src/counter.ml"</span>).main(document.getElementById(<span class="hljs-string">"my-element"</span>));</code></pre></div>\n<p>And if you need to shut it down or pass it a message or so then you can do so via the <code>app</code> variable, or feel free to not assign it to a variable as well.</p>\n<p>For further examples see the <a href="https://github.com/OvermindDL1/bucklescript-testing">bucklescript-testing</a> project for now until a full example set up is built.</p>\n<h2 id="starter-kits"><a href="#starter-kits" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Starter-Kits</h2>\n<p>A list of starter-kits that get you up and running.</p>\n<blockquote>\n<p>Feel free to extend this list!</p>\n</blockquote>\n<h4 id="tcoopmanbucklescript-tea-starter-kit"><a href="#tcoopmanbucklescript-tea-starter-kit" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a href="https://github.com/tcoopman/bucklescript-tea-starter-kit">tcoopman/bucklescript-tea-starter-kit</a></h4>\n<ul>\n<li>syntax: OCaml</li>\n<li>build-system: <a href="https://github.com/rollup/rollup">rollup</a></li>\n<li>dev-server: <a href="https://github.com/zeit/serve">zeit/serve</a></li>\n</ul>\n<h4 id="feluxebs-tea-starter-kit"><a href="#feluxebs-tea-starter-kit" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a href="https://github.com/feluxe/bs-tea-starter-kit">feluxe/bs-tea-starter-kit</a></h4>\n<ul>\n<li>syntax: ReasonML</li>\n<li>build-system: <a href="https://github.com/webpack/webpack">webpack</a></li>\n<li>dev-server: <a href="https://github.com/webpack/webpack-dev-server">webpack-dev-server</a></li>\n<li>css: <a href="https://github.com/SentiaAnalytics/bs-css">bs-css</a></li>\n</ul>\n<h4 id="darklangphilip2"><a href="#darklangphilip2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a href="https://github.com/darklang/philip2">darklang/philip2</a></h4>\n<p>This one is not so much a starter kit as it is a porting kit, it can actually take in elm files, parse them, and output bucklescript-tea OCaml code (which can be converted to ReasonML via <code>refmt</code> of course) with only minor\'ish tweaks there-after needed to get it working.</p>\n<p>See its announcement article at:  <a href="https://medium.com/@paulbiggar/philip2-an-elm-to-reasonml-compiler-a210aaa6cd04">https://medium.com/@paulbiggar/philip2-an-elm-to-reasonml-compiler-a210aaa6cd04</a></p>\n<p>And its porting guide at:  <a href="https://github.com/darklang/philip2#how-to-port-your-project">https://github.com/darklang/philip2#how-to-port-your-project</a></p>\n',homepageUrl:"https://github.com/overminddl1/bucklescript-tea#readme",repositoryUrl:"https://github.com/overminddl1/bucklescript-tea",npmUrl:"https://www.npmjs.com/package/bucklescript-tea",issuesUrl:"https://github.com/overminddl1/bucklescript-tea/issues",slug:"/package/bucklescript-tea"}},pathContext:{id:"bucklescript-tea"}}}});
//# sourceMappingURL=path---package-bucklescript-tea-f08ce481b8f31ad8a036.js.map