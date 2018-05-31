webpackJsonp([2180654145837],{1082:function(e,n){e.exports={data:{package:{id:"unpublished/Schmavery/reprocessing",score:0,name:"Schmavery/reprocessing",version:"0.1.0",description:"Processing library for Reason",keywords:[],license:null,updated:"2017-12-23T12:43:15.257Z",stars:103,type:"unpublished",quality:0,popularity:0,maintenance:0,readme:'<h1>Reprocessing</h1>\n<p>This is a high-level drawing library, inspired by <a href="https://processing.org">Processing</a>, allowing you to write code that\'ll run on the web (using WebGL) and natively (using OpenGL).</p>\n<h2>Example</h2>\n<p>The <a href="https://schmavery.github.io/reprocessing/">web environment</a> is the simplest way to try reprocessing. (It uses an older verison of the Reason syntax though, we\'re working on fixing that).</p>\n<p>The 2nd simplest way to try is to clone <a href="https://github.com/bsansouci/reprocessing-example">reprocessing-example</a>.</p>\n<p>See <a href="#projects-using-reprocessing">below</a> for projects using Reprocessing!</p>\n<h2>Getting Started</h2>\n<pre><code class="language-bash">npm install schmavery/reprocessing\n</code></pre>\n<h3>Example</h3>\n<pre><code class="language-reason">open Reprocessing;\n\nlet setup = (env) => {\n  Env.size(~width=600, ~height=600, env);\n};\n\nlet draw = (_state, env) => {\n  Draw.background(Constants.black, env);\n  Draw.fill(Constants.red, env);\n  Draw.rect(~pos=(150, 150), ~width=300, ~height=300, env)\n};\n\nrun(~setup, ~draw, ());\n</code></pre>\n<h3>Build</h3>\n<pre><code>npm run build:web\n</code></pre>\n<p>This will draw a simple red square on a black background.  Compare this to <a href="https://github.com/bsansouci/reasonglexampleproject/blob/simple/src/index.re">reglexampleproject</a>, which takes 200+ lines to do the exact same thing.  This difference is even more notable on bigger projects.  Check out the code for a <a href="https://github.com/Schmavery/reprocessing/blob/master/examples/redsquare.re">draggable red square</a>.</p>\n<h2>Demo</h2>\n<p>There are a couple demos inside <code>examples</code>. Run <code>npm i</code> to install all deps and <code>npm run build</code> to build to JS (default). Open <code>index.html</code> in safari (or use <code>python -m SimpleHTTPServer 8000</code> to spawn a static server and go to <code>localhost:8000</code> in chrome).</p>\n<p>Run <code>npm run build:bytecode</code> to build to a bytecode executable and run <code>./lib/bs/bytecode/index.byte</code>.</p>\n<p>Run <code>npm run build:native</code> to build to a native executable and run <code>./lib/bs/native/index.native</code>.</p>\n<p>See also <a href="https://github.com/Schmavery/FlappyBird">https://github.com/Schmavery/FlappyBird</a> for a slightly bigger example.</p>\n<h1>Some Differences from Processing</h1>\n<ul>\n<li>\n<p>There is no magic - everything is proper Reason code.  This means that you have to call <code>Reprocessing.run</code> with the functions that you want to use.  You also have a couple of options about which utility modules to open.  See the <code>examples</code> directory for some different ways to do this.  It is recommended to <code>open Reprocessing</code> at the top, and then you can optionally open <code>Draw</code>, <code>Env</code> and <code>Utils</code> to make it look more like Processing code. Alternatively, they can be used directly, as can be seen above.</p>\n</li>\n<li>\n<p>For state management, we encourage the use of the <code>state</code> value that Reprocessing manages for the user.  To use this, decide on a datatype representing the state and return the initial value from <code>setup</code>.  This will be persisted behind the scenes and passed to every callback (such as <code>draw</code> and <code>mouseDown</code>).  Each callback should return the new value of the state (or the old value if it doesn\'t change).</p>\n</li>\n<li>\n<p>There are no built-in variables like <code>width</code> and <code>mouseX</code>.  Instead, these are functions that are called, passing in an environment object that is always provided.</p>\n</li>\n</ul>\n<pre><code class="language-reason">let draw = (state, env) => {\n  let w = Env.width(env);\n  print_endline("The current width is:" ++ string_of_int(w))\n};\n</code></pre>\n<ul>\n<li>\n<p>The builtin <code>map</code> function is called <code>remap</code> instead to avoid confusion with the well-known <code>List.map</code> function which maps over a list of values. As, according to the Processing docs, this function "Re-maps a number from one range to another.", this naming seems appropriate.</p>\n</li>\n<li>\n<p>Because of the limitations of Reason, several utility functions that would otherwise accept either an integer or a float now expose a version with an <code>f</code> suffix, which supports floats.  Ex: <code>random</code> vs <code>randomf</code>.</p>\n</li>\n<li>\n<p>Points are expressed as tuples.  Instead of exposing a <code>mouseX</code> and <code>mouseY</code>, there is a <code>mouse</code>, which is a tuple of x and y values.</p>\n</li>\n</ul>\n<pre><code class="language-reason">let draw = (state, env) => {\n  let (x, y) = Env.mouse(env);\n  print_endline("The current mouse position is:" ++ (string_of_int(x) ++ string_of_int(y)))\n};\n</code></pre>\n<h1>Using Fonts</h1>\n<p>The story for using fonts in your Reprocessing app is still under some development to make it nicer.  Right now we have support for writing text in a font defined in the <a href="http://www.angelcode.com/products/bmfont/">Angel Code font</a> format. This is basically a bitmap of packed glyph textures along with a text file that describes it. The above link gives a few different tools that can be used to generate these files.  The assets folder of this repo also has an <a href="https://github.com/Schmavery/reprocessing/tree/bsb-support-new/assets/font">example</a> of a font that can be copied to your project and used.  In order to use a font once you have the files:</p>\n<pre><code>let font = Draw.loadFont(~filename, env);\nDraw.text(~font, ~body="Test!!!", ~pos=(10, 10), env);\n</code></pre>\n<h2>Projects using Reprocessing</h2>\n<ul>\n<li><a href="https://github.com/jaredly/gravitron">Gravitron</a></li>\n<li><a href="https://github.com/bsansouci/ludum-dare-40">Oh No! Zombies!</a></li>\n<li><a href="https://github.com/bsansouci/reprocessing-example/tree/2048">2048</a></li>\n<li><a href="https://github.com/bsansouci/reprocessing-example/tree/livestream-flappybird">FlappyBird</a></li>\n<li><a href="https://github.com/illbexyz/repong">Pong</a></li>\n</ul>\n',homepageUrl:null,repositoryUrl:"https://github.com/Schmavery/reprocessing",npmUrl:null,issuesUrl:null,slug:"packages/unpublished/Schmavery/reprocessing"}},pathContext:{id:"unpublished/Schmavery/reprocessing"}}}});
//# sourceMappingURL=path---packages-unpublished-schmavery-reprocessing-915fa4e43b8b9345f116.js.map