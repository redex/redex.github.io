webpackJsonp([3877244267053],{1110:function(s,a){s.exports={data:{package:{id:"bs-reform",stars:46,name:"bs-reform",version:"4.2.2",category:"library",flags:[],platforms:["browser"],description:"Reasonably making forms sound good again",keywords:["react","form validation"],license:"MIT",updated:"2018-02-16T13:44:02.133Z",type:"published",score:.6218201432072421,quality:.8032075113497779,popularity:.08816539943516792,maintenance:1,readme:'<h1 id="reformre"><a href="#reformre" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ReForm.re</h1>\n<p><a href="https://greenkeeper.io/"><img src="https://badges.greenkeeper.io/Astrocoders/reform.svg" alt="Greenkeeper badge"></a>\n<a href="https://travis-ci.org/Astrocoders/reform"><img src="https://travis-ci.org/Astrocoders/reform.svg?branch=master" alt="Build Status"></a></p>\n<p><img src="./website/static/img/fulldemo.png" alt="ReForm demo"></p>\n<p>Reasonably making forms sound good again (pun 100% intended)</p>\n<ul>\n<li><a href="#installation">Installation</a></li>\n<li><a href="#what-this-is-and-why">What this is and why</a></li>\n<li><a href="#usage">Quick usage</a></li>\n<li>\n<p><a href="#api">API</a></p>\n<ul>\n<li><a href="#component-params">Component params</a></li>\n<li><a href="#onsubmit-param">onSubmit</a></li>\n<li><a href="#schema">Schema</a></li>\n<li><a href="#available-validators">Available validators</a></li>\n<li><a href="#form">reform.form</a></li>\n<li><a href="#geterrorforfield-configfields--optionsstring">reform.getErrorForField</a></li>\n<li><a href="#handlesubmit-unit--unit">reform.handleSubmit</a></li>\n<li><a href="#handlechange-configfields-string--unit">reform.handleChange</a></li>\n<li><a href="#handleglobalvalidation-optionstring--unit">reform.handleGlobalValidation</a></li>\n</ul>\n</li>\n</ul>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add bs-reform</code></pre></div>\n<p>Then add it to bsconfig.json</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-string">"bs-dependencies"</span>: [\n <span class="hljs-string">"bs-reform"</span>\n]</code></pre></div>\n<h2 id="what-this-is-and-why"><a href="#what-this-is-and-why" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What this is and why</h2>\n<p>Dealing with forms directly can scalate really quickly to a hell when not using the right approach.\nWe created ReForm to be both deadly simple and to make forms sound good leveraging ReasonML\'s powerful typesytem.\nEven the schemas we use are nothing more than constructors built-in in the language itself with a small size footprint.</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>Checkout <code>demo/src/app.re</code> also</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">SignUpFormParams</span> = </span>{\n  <span class="hljs-keyword">type</span> state = {\n    password: string,\n    email: string\n  };\n  <span class="hljs-keyword">type</span> fields = [ | `password | `email | `confirmPassword];\n  <span class="hljs-comment">/* (fieldName, getter, setter) */</span>\n  <span class="hljs-keyword">let</span> lens = [\n    (`email, (s) =&gt; s.email, (s, email) =&gt; { ...s, email }),\n    (`password, (s) =&gt; s.password, (s, password) =&gt; { ...s, password }),\n    (`confirmPassword, (s) =&gt; s.confirmPassword, (s, confirmPassword) =&gt; { ...s, confirmPassword }),\n  ];\n};\n\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">SignUpForm</span> = <span class="hljs-title">ReForm</span>.<span class="hljs-title">Create</span>(<span class="hljs-title">SignUpFormParams</span>);\n\n<span class="hljs-title">let</span> <span class="hljs-title">component</span> = <span class="hljs-title">ReasonReact</span>.<span class="hljs-title">statelessComponent</span>("<span class="hljs-title">SignUp</span>");\n\n<span class="hljs-title">let</span> <span class="hljs-title">make</span> = (~<span class="hljs-title">signInMutation</span>, <span class="hljs-title">_children</span>) =&gt; </span>{\n  ...component,\n  render: (<span class="hljs-number">_</span>) =&gt; {\n    &lt;<span class="hljs-type">SignUpForm</span>\n      initialState={password: <span class="hljs-string">""</span>, email: <span class="hljs-string">""</span>}\n      schema=[\n        (`password, <span class="hljs-type">Required</span>),\n        (`email, <span class="hljs-type">Email</span>),\n      ]\n      onSubmit=((values, ~setError, ~setSubmitting) =&gt; whatever(values, ~setError, ~setSubmitting))\n    &gt;\n      ...(\n        ({\n          form,\n          handleChange,\n          handleSubmit,\n          getErrorForField\n        }) =&gt;\n          &lt;<span class="hljs-type">FormWrapper</span>&gt;\n            &lt;<span class="hljs-type">ErrorWarn</span> error=form.error/&gt;\n            &lt;<span class="hljs-type">FieldsWrapper</span>&gt;\n              &lt;<span class="hljs-type">FormField</span>\n                fieldType=<span class="hljs-type">FormField</span>.<span class="hljs-type">TextField</span>\n                value=form.values.email\n                placeholder=<span class="hljs-string">"Email"</span>\n                style=fieldsStyle\n                placeholderTextColor=<span class="hljs-type">AppTheme</span>.<span class="hljs-type">Colors</span>.blackLight\n                onChangeText=handleChange(`email)\n              /&gt;\n              &lt;<span class="hljs-type">ErrorText</span> value=getErrorForField(`password)/&gt;\n              &lt;<span class="hljs-type">FormField</span>\n                fieldType=<span class="hljs-type">FormField</span>.<span class="hljs-type">TextField</span>\n                placeholder=<span class="hljs-string">"Password"</span>\n                onChangeText=handleChange(`password)\n                value=form.values.password\n                style=fieldsStyle\n                placeholderTextColor=<span class="hljs-type">AppTheme</span>.<span class="hljs-type">Colors</span>.blackLight\n              /&gt;\n              etc\n            &lt;/<span class="hljs-type">FieldsWrapper</span>&gt;\n            &lt;<span class="hljs-type">RaisedButton</span> text=<span class="hljs-string">"Sign in"</span> onPress=handleSubmit/&gt;\n          &lt;/<span class="hljs-type">FormWrapper</span>&gt;\n      )\n    &lt;/<span class="hljs-type">SignUpForm</span>&gt;\n  }\n}</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">SignUpFormParams</span> =\n  <span class="hljs-keyword">struct</span>\n    <span class="hljs-keyword">type</span> state = {\n      password: <span class="hljs-built_in">string</span>;\n      email: <span class="hljs-built_in">string</span>;}\n    <span class="hljs-keyword">type</span> fields = [ `password  | `email  | `confirmPassword ]\n    <span class="hljs-keyword">let</span> lens =\n      [(`email, ((<span class="hljs-keyword">fun</span> s  -&gt; s.email)),\n         ((<span class="hljs-keyword">fun</span> s  -&gt; <span class="hljs-keyword">fun</span> email  -&gt; { s <span class="hljs-keyword">with</span> email })));\n      (`password, ((<span class="hljs-keyword">fun</span> s  -&gt; s.password)),\n        ((<span class="hljs-keyword">fun</span> s  -&gt; <span class="hljs-keyword">fun</span> password  -&gt; { s <span class="hljs-keyword">with</span> password })));\n      (`confirmPassword, ((<span class="hljs-keyword">fun</span> s  -&gt; s.confirmPassword)),\n        ((<span class="hljs-keyword">fun</span> s  -&gt; <span class="hljs-keyword">fun</span> confirmPassword  -&gt; { s <span class="hljs-keyword">with</span> confirmPassword })))]\n  <span class="hljs-keyword">end</span>\n<span class="hljs-keyword">module</span> <span class="hljs-type">SignUpForm</span> = <span class="hljs-type">ReForm</span>.<span class="hljs-type">Create</span>(<span class="hljs-type">SignUpFormParams</span>)\n<span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent <span class="hljs-string">"SignUp"</span>\n<span class="hljs-keyword">let</span> make ~signInMutation  _children =\n  {\n    component <span class="hljs-keyword">with</span>\n    render =\n      (<span class="hljs-keyword">fun</span> _  -&gt;\n         ((<span class="hljs-type">SignUpForm</span>.createElement\n             ~initialState:{ password = <span class="hljs-string">""</span>; email = <span class="hljs-string">""</span> }\n             ~schema:[(`password, <span class="hljs-type">Required</span>); (`email, <span class="hljs-type">Email</span>)]\n             ~onSubmit:(<span class="hljs-keyword">fun</span> values  -&gt;\n                          <span class="hljs-keyword">fun</span> ~setError  -&gt;\n                            <span class="hljs-keyword">fun</span> ~setSubmitting  -&gt;\n                              whatever values ~setError ~setSubmitting)\n             ~children:(<span class="hljs-keyword">fun</span>\n                          { form; handleChange; handleSubmit;\n                            getErrorForField }\n                           -&gt;\n                          ((<span class="hljs-type">FormWrapper</span>.createElement\n                              ~children:[((<span class="hljs-type">ErrorWarn</span>.createElement\n                                             ~error:(form.error) ~children:<span class="hljs-literal">[]</span>\n                                             <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]);\n                                        ((<span class="hljs-type">FieldsWrapper</span>.createElement\n                                            ~children:[((<span class="hljs-type">FormField</span>.createElement\n                                                           ~fieldType:<span class="hljs-type">FormField</span>.<span class="hljs-type">TextField</span>\n                                                           ~<span class="hljs-keyword">value</span>:((form.values).email)\n                                                           ~placeholder:<span class="hljs-string">"Email"</span>\n                                                           ~style:fieldsStyle\n                                                           ~placeholderTextColor:<span class="hljs-type">AppTheme</span>.<span class="hljs-type">Colors</span>.blackLight\n                                                           ~onChangeText:(\n                                                           handleChange\n                                                             `email)\n                                                           ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)\n                                                      [@<span class="hljs-type">JSX</span> ]);\n                                                      ((<span class="hljs-type">ErrorText</span>.createElement\n                                                          ~<span class="hljs-keyword">value</span>:(getErrorForField\n                                                                    `password)\n                                                          ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)\n                                                      [@<span class="hljs-type">JSX</span> ]);\n                                                      ((<span class="hljs-type">FormField</span>.createElement\n                                                          ~fieldType:<span class="hljs-type">FormField</span>.<span class="hljs-type">TextField</span>\n                                                          ~placeholder:<span class="hljs-string">"Password"</span>\n                                                          ~onChangeText:(\n                                                          handleChange\n                                                            `password)\n                                                          ~<span class="hljs-keyword">value</span>:((form.values).password)\n                                                          ~style:fieldsStyle\n                                                          ~placeholderTextColor:<span class="hljs-type">AppTheme</span>.<span class="hljs-type">Colors</span>.blackLight\n                                                          ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)\n                                                      [@<span class="hljs-type">JSX</span> ]);\n                                                      etc] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]);\n                                        ((<span class="hljs-type">RaisedButton</span>.createElement\n                                            ~text:<span class="hljs-string">"Sign in"</span>\n                                            ~onPress:handleSubmit\n                                            ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)\n                          [@<span class="hljs-type">JSX</span> ])) <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]))\n  }</code></pre>\n      </div>\n    </div>\n  \n<h1 id="api"><a href="#api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API</h1>\n<p>We tried to make the API simple yet very powerful, so you don\'t have to worry about learning a lot of quirks</p>\n<h2 id="component-params"><a href="#component-params" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Component params</h2>\n<p>When you create a new ReForm module you get a brand new ReasonReact component</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* Just some regular ReasonReact guy */</span>\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Form</span> = <span class="hljs-title">ReForm</span>.<span class="hljs-title">Create</span>(<span class="hljs-title">SignUpFormParams</span>);</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">Form</span> = <span class="hljs-type">ReForm</span>.<span class="hljs-type">Create</span>(<span class="hljs-type">SignUpFormParams</span>)</code></pre>\n      </div>\n    </div>\n  \n<p>These are the props/params it accepts:</p>\n<h3 id="schema-param"><a href="#schema-param" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>schema param</h3>\n<p>The schema tells to ReForm how to validate your date, take a look at <a href="#schema">Schema</a> to see more</p>\n<h3 id="validate-param"><a href="#validate-param" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>validate param</h3>\n<p>We let this scape hatch for when the provided validators aren\'t enough for you and you need some more complexity.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> validate: <span class="hljs-type">SignUpForm</span>.values =&gt; option(string) = (values) =&gt; {\n  <span class="hljs-keyword">switch</span> (values) {\n    | { email: <span class="hljs-string">"unsafeTypeGuy@ohno.com"</span> } when values.password === <span class="hljs-string">"secretThing"</span> =&gt; <span class="hljs-type">Some</span>(<span class="hljs-string">"Can\'t do."</span>)\n    | <span class="hljs-number">_</span> =&gt; <span class="hljs-type">None</span>\n  }\n}\n\n&lt;<span class="hljs-type">Form</span>\n  validate\n  <span class="hljs-comment">/* Yes! You can still use schema with it */</span>\n  schema=[(`email, <span class="hljs-type">Email</span>)]\n&gt;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">883</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p>The returned valued of <code>validate</code> will set <code>reform.form.error</code></p>\n<h3 id="onsubmit-param"><a href="#onsubmit-param" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>onSubmit param</h3>\n<p>This is the guy you\'ll be putting your POST/mutation/whatever logic into, it is triggered after <code>handleSubmit</code> is called.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> onSubmit = (values, ~setError, ~setSubmitting) =&gt; {\n  <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.(\n    values \n    |&gt; convertToJS\n    |&gt; mutate\n    |&gt; then_(response =&gt; {\n        <span class="hljs-keyword">switch</span>(response##error |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Null_undefined</span>.to_opt) {\n          | <span class="hljs-type">None</span> =&gt;\n            setSubmitting(<span class="hljs-literal">false</span>);\n            doSomeOtherThing();\n          | <span class="hljs-type">Some</span>(error) =&gt;\n            setSubmitting(<span class="hljs-literal">false</span>);\n            setError(<span class="hljs-type">Some</span>(<span class="hljs-string">"Something went wrong, try again"</span>))\n        }\n      })\n  )\n  |&gt; ignore\n}\n\n\n&lt;<span class="hljs-type">Form</span> schema onSubmit&gt;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">883</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="i18n-param"><a href="#i18n-param" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>i18n param</h3>\n<p>You can pass a custom dictionary to be shown as the validators errors</p>\n<h2 id="children-yourformreform--reasonreactreactelement"><a href="#children-yourformreform--reasonreactreactelement" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>children: (YourForm.reform => ReasonReact.reactElement)</h2>\n<p>The param passed to the children is a record of the following type</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> reform = {\n  form: state,\n  handleChange: (<span class="hljs-type">Config</span>.fields, value) =&gt; unit,\n  handleGlobalValidation: option(string) =&gt; unit,\n  handleSubmit: unit =&gt; unit,\n  getErrorForField: <span class="hljs-type">Config</span>.fields =&gt; option(string)\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> reform =\n  {\n  form: state;\n  handleChange: <span class="hljs-type">Config</span>.fields -&gt; <span class="hljs-keyword">value</span> -&gt; <span class="hljs-built_in">unit</span>;\n  handleGlobalValidation: <span class="hljs-built_in">string</span> option -&gt; <span class="hljs-built_in">unit</span>;\n  handleSubmit: <span class="hljs-built_in">unit</span> -&gt; <span class="hljs-built_in">unit</span>;\n  getErrorForField: <span class="hljs-type">Config</span>.fields -&gt; <span class="hljs-built_in">string</span> option;}</code></pre>\n      </div>\n    </div>\n  \n<h3 id="form-paramsstate"><a href="#form-paramsstate" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>form: Params.state</h3>\n<p>Accessed via <code>reform.form</code> and contains the following</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>{\n  <span class="hljs-comment">/* The record containing the actual form state */</span>\n  values: <span class="hljs-type">Params</span>.state,\n  <span class="hljs-comment">/* The submitting state */</span>\n  isSubmitting: bool,\n  <span class="hljs-comment">/* This is intended to store global validation error, like a submitting failure */</span>\n  error: option(string)\n}</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  { values = <span class="hljs-type">Params</span>.state; isSubmitting = <span class="hljs-built_in">bool</span>; error = (option <span class="hljs-built_in">string</span>) }</code></pre>\n      </div>\n    </div>\n  \n<h3 id="handlechange-configfields-string--unit"><a href="#handlechange-configfields-string--unit" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>handleChange: (Config.fields, string) => unit</h3>\n<p><code>handleChange</code> takes the field in question and its string value, we made like this so you can use it both in Web and React Native</p>\n<h3 id="handlesubmit-unit--unit"><a href="#handlesubmit-unit--unit" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>handleSubmit: unit => unit</h3>\n<p>Triggers the submitting and makes ReForm set <code>reform.form.isSubmitting</code> to true</p>\n<h3 id="geterrorforfield-configfields--optionsstring"><a href="#geterrorforfield-configfields--optionsstring" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>getErrorForField: Config.fields => options(string)</h3>\n<p>Returns the validation error, if there is any, for the field in question</p>\n<h3 id="handleglobalvalidation-optionstring--unit"><a href="#handleglobalvalidation-optionstring--unit" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>handleGlobalValidation: option(string) => unit</h3>\n<p>Handles the global error value at <code>reform.form.error</code></p>\n<h2 id="schema"><a href="#schema" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Schema</h2>\n<p>The schema used by ReForm is nothing more than a tuple and the validator is a <a href="http://2ality.com/2017/12/variants-reasonml.html#variants-as-data-structures">constructor</a> thus the final representation is really lightweight and does not enforce you to bring Yet Another Schema Validator For JS.</p>\n<p>It is passed as a param to the form, <code>&#x3C;SignInForm schema></code></p>\n<p>ReForm accepts a validation schema that looks like </p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>(fieldName, getter, validator)</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = (fieldName, getter, validator)</code></pre>\n      </div>\n    </div>\n  \n<p>or</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>(`email, s =&gt; s.email, <span class="hljs-type">Email</span>)</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = (`email, (<span class="hljs-keyword">fun</span> s  -&gt; s.email), <span class="hljs-type">Email</span>)</code></pre>\n      </div>\n    </div>\n  \n<p>Take a look in the demo to see it in action.</p>\n<h3 id="available-validators"><a href="#available-validators" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Available validators</h3>\n<h4 id="customstate--optionstring"><a href="#customstate--optionstring" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Custom(state => option(string))</h4>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>(`password, s =&gt; s.password, <span class="hljs-type">Custom</span>(values =&gt; values.password == <span class="hljs-string">"123"</span> ? <span class="hljs-type">Some</span>(<span class="hljs-string">"Really?"</span>) : <span class="hljs-type">None</span>))</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  (`password, (<span class="hljs-keyword">fun</span> s  -&gt; s.password),\n    ((<span class="hljs-type">Custom</span>\n        ((<span class="hljs-keyword">fun</span> values  -&gt;\n            <span class="hljs-keyword">match</span> values.password = <span class="hljs-string">"123"</span> <span class="hljs-keyword">with</span>\n            | <span class="hljs-literal">true</span>  -&gt; ((<span class="hljs-type">Some</span> (<span class="hljs-string">"Really?"</span>))[@explicit_arity ])\n            | <span class="hljs-literal">false</span>  -&gt; <span class="hljs-type">None</span>)))[@explicit_arity ]))</code></pre>\n      </div>\n    </div>\n  \n<h4 id="required"><a href="#required" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Required</h4>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>(`fullName, s =&gt; s.fullName, <span class="hljs-type">Required</span>)</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = (`fullName, (<span class="hljs-keyword">fun</span> s  -&gt; s.fullName), <span class="hljs-type">Required</span>)</code></pre>\n      </div>\n    </div>\n  \n<h4 id="email"><a href="#email" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Email</h4>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>(`email, s =&gt; s.email, <span class="hljs-type">Email</span>)</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = (`email, (<span class="hljs-keyword">fun</span> s  -&gt; s.email), <span class="hljs-type">Email</span>)</code></pre>\n      </div>\n    </div>\n  \n<h4 id="any-doubts"><a href="#any-doubts" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Any doubts?</h4>\n<p>If you have any doubts don\'t hesitate to reach out the wonderful <a href="https://discord.gg/reasonml">https://discord.gg/reasonml</a></p>\n',
homepageUrl:"https://github.com/Astrocoders/reform#readme",repositoryUrl:"https://github.com/Astrocoders/reform",npmUrl:"https://www.npmjs.com/package/bs-reform",issuesUrl:"https://github.com/Astrocoders/reform/issues",slug:"/package/bs-reform"}},pathContext:{id:"bs-reform"}}}});
//# sourceMappingURL=path---package-bs-reform-a6c7230da211cac61b80.js.map