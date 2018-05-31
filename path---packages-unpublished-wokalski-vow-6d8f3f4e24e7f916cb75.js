webpackJsonp([0x611d44f781ac],{1135:function(e,o){e.exports={data:{package:{id:"unpublished/wokalski/vow",score:0,name:"wokalski/vow",version:"0.0.2",description:"Almost sound Promises for Bucklescript",keywords:["promise","bucklescript"],license:"MIT",updated:"2018-01-12T09:28:21.797Z",stars:32,type:"unpublished",quality:0,popularity:0,maintenance:0,readme:'<h1>Vow</h1>\n<p><code>Vow</code> is a tiny library which allows you to handle promises more safely in your Bucklescript application.</p>\n<p>A <code>Vow</code> can be either <code>handled</code> and <code>unhandled</code>. All promises of type <code>vow \'a handled</code> make sure that you handled Promise rejections. Thanks to that you will avoid the Uncaught promise error.</p>\n<h2>Side effects</h2>\n<p>After series of operations you usually want to "consume" a promise. <code>Vow.sideEffect</code> should be used for that.</p>\n<p>It only accepts promises which are properly handled.</p>\n<h2>Unwrapping</h2>\n<p>You can unwrap a handled promise using <code>Vow.unwrap</code>.</p>\n<h2>Nesting vows</h2>\n<p><code>Js.Promise.t</code> is unsafe when you nest promises. i.e. <code>Js.Promise.t (Js.Promise.t \'a)</code> is unsound. In the runtime it\'s <code>Js.Promise.t</code>.</p>\n<p>This is resolved with <code>vow</code>s. If you nest <code>vow</code>s they behave as expected.</p>\n<p>However if you put a <code>Js.Promise.t</code> inside a <code>vow</code> (which are boxed <code>Js.Promise.t</code> under the scenes) you\'re gonna get a <code>vow</code> of the following type:</p>\n<pre><code class="language-reason">/* in Reason syntax */\n\nvow (Js.Promise.t \'a) \'status\n</code></pre>\n<p>However, under the scenes it\'ll really be</p>\n<pre><code class="language-reason">vow \'a \'status\n</code></pre>\n<p>Therefore <code>vow</code> is not sound.</p>\n<h2>Binding</h2>\n<p>In order to use vows you have to bind to your existing APIs using <code>Vow.wrap</code>/<code>Vow.unsafeWrap</code>.</p>\n<p>If you <code>unsafeWrap</code> a promise which does throw your code will be unsound.</p>\n<h2>Example</h2>\n<p>Let\'s see a real world example of vows with some comments:</p>\n<pre><code class="language-reason">let login _: Vow.Result.t authenticationState error Vow.handled =>\n  /* Returns a handled Vow.Result.t */\n  Login.logIn () |>\n  /* Validates the returned value. Since the vow is handled we don\'t need to catch*/\n  Vow.Result.map (\n    fun x =>\n      if x##isCancelled {\n        Vow.Result.fail LoginRequestCancelled\n      } else {\n        Vow.Result.return ()\n      }\n  ) |>\n  /* Another handled Vow.Result.t */\n  Vow.Result.map Login.getCurrentAccessToken () |>\n  Vow.Result.map (\n    fun x => {\n      let token = x##accessToken;\n      /* This returns an unhandled Vow.Result.t.\n       * Note that the \'error types have to match\n       * Because after one error the subsequent operations\n       * Are not performed.\n       */\n      Queries.login ::token\n    }\n  ) |>\n  /* Ooops, the `Queries.login` might reject.\n   * We are forced to handle it in the compile time.\n   */\n  Vow.Result.onError (fun _ => Vow.Result.fail GraphQlSignInError) |>\n  Vow.Result.map (\n    fun x =>\n      switch x {\n      | Authenticated {token, userId} =>\n        /* The promise we wrap is never rejected */\n        Vow.unsafeWrap\n          KeyChain.(\n            Js.Promise.all2 (\n              setGenericPassword username::"userId" password::userId service::"userId",\n              setGenericPassword username::"token" password::token service::"token"\n            )\n          ) |>\n        Vow.map (fun _ => Vow.Result.return x)\n      | _ => Vow.Result.return x\n      }\n  );\n</code></pre>\n<h2>Author</h2>\n<p><a href="http://twitter.com/wokalski">@wokalski</a> </p>\n',homepageUrl:"https://github.com/wokalski/vow#readme",repositoryUrl:"https://github.com/wokalski/vow",npmUrl:null,issuesUrl:"https://github.com/wokalski/vow/issues",slug:"packages/unpublished/wokalski/vow"}},pathContext:{id:"unpublished/wokalski/vow"}}}});
//# sourceMappingURL=path---packages-unpublished-wokalski-vow-6d8f3f4e24e7f916cb75.js.map