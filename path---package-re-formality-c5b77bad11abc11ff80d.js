webpackJsonp([91172818476772],{1162:function(s,a){s.exports={data:{package:{id:"re-formality",stars:24,name:"re-formality",version:"0.4.1",category:"library",flags:[],platforms:["browser"],description:"Reasonable form validation tool for reason-react",keywords:["react","form validation"],license:"MIT",updated:"2018-03-11T15:35:31.533Z",type:"published",score:.5557692282313353,quality:.6131570409122311,popularity:.06234890273618858,maintenance:1,readme:'<h1 id="formality"><a href="#formality" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Formality</h1>\n<p><a href="https://www.npmjs.com/package/re-formality"><img src="https://img.shields.io/npm/v/re-formality.svg?style=flat-square" alt="npm version"></a>\n<a href="https://travis-ci.org/alexfedoseev/re-formality"><img src="https://img.shields.io/travis/alexfedoseev/re-formality/master.svg?style=flat-square" alt="build status"></a>\n<a href="https://gemnasium.com/alexfedoseev/re-formality"><img src="https://img.shields.io/gemnasium/alexfedoseev/re-formality.svg?style=flat-square" alt="dependencies status"></a>\n<a href="https://www.npmjs.com/package/re-formality"><img src="https://img.shields.io/npm/l/re-formality.svg?style=flat-square" alt="license"></a></p>\n<p>Reasonable form validation tool for <a href="https://reasonml.github.io/reason-react/"><code>reason-react</code></a>.</p>\n<h2 id="features"><a href="#features" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Features</h2>\n<ul>\n<li>Validation strategies</li>\n<li>Dependant fields validation</li>\n<li>Async validations (on blur / debounced on change)</li>\n<li>I18n compat</li>\n</ul>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<ul>\n<li>Signup form [ <a href="https://formality.now.sh/#signup">live</a> · <a href="examples/SignupForm.re">source</a> ]</li>\n<li>Login form [ <a href="https://formality.now.sh/#login">live</a> · <a href="examples/LoginForm.re">source</a> ]</li>\n</ul>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code><span class="hljs-comment"># yarn</span>\nyarn add re-formality\n<span class="hljs-comment"># or npm</span>\nnpm install --save re-formality</code></pre></div>\n<h2 id="-docs-are-wip-"><a href="#-docs-are-wip-" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>🚧 Docs are WIP 🚧</h2>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>Here\'s the quick example. See <a href="examples/"><code>examples</code></a> for real-world cases.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">MyForm</span> = </span>{\n  <span class="hljs-keyword">type</span> field =\n    | <span class="hljs-type">Email</span>\n    | <span class="hljs-type">Password</span>;\n  <span class="hljs-keyword">type</span> state = {\n    email: string,\n    password: string\n  };\n  <span class="hljs-keyword">type</span> message = string;\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">get</span> = (field, state) =&gt;\n    <span class="hljs-keyword">switch</span> field {\n    | <span class="hljs-type">Email</span> =&gt; state.email\n    | <span class="hljs-type">Password</span> =&gt; state.password\n    };\n  <span class="hljs-keyword">let</span> update = ((field, value), state) =&gt;\n    <span class="hljs-keyword">switch</span> (field, value) {\n    | (<span class="hljs-type">Email</span>, value) =&gt; {...state, email: value}\n    | (<span class="hljs-type">Password</span>, value) =&gt; {...state, password: value}\n    };\n  <span class="hljs-keyword">let</span> strategy = <span class="hljs-type">Formality</span>.<span class="hljs-type">Strategy</span>.<span class="hljs-type">OnFirstSuccessOrFirstBlur</span>;\n  <span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Validators</span> = <span class="hljs-title">Formality</span>.<span class="hljs-title">MakeValidators</span>(</span>{<span class="hljs-keyword">type</span> t = field;});\n  <span class="hljs-keyword">type</span> validators = <span class="hljs-type">Validators</span>.t(<span class="hljs-type">Formality</span>.validator(field, state, message));\n  <span class="hljs-keyword">let</span> validators = <span class="hljs-type">Formality</span>.(\n    <span class="hljs-type">Validators</span>.empty\n    |&gt; <span class="hljs-type">Validators</span>.add(<span class="hljs-type">Email</span>, {\n         strategy,\n         dependents: <span class="hljs-type">None</span>, <span class="hljs-comment">/* You can define fields which must be revalidated on change of this field\'s value */</span>\n         validate: (value, _state) =&gt;\n           <span class="hljs-keyword">switch</span> value {\n           | <span class="hljs-string">""</span> =&gt; <span class="hljs-type">Invalid</span>(<span class="hljs-string">"Uh oh error"</span>)\n           | <span class="hljs-number">_</span> =&gt; <span class="hljs-type">Valid</span>\n           }\n       })\n    |&gt; <span class="hljs-type">Validators</span>.add(<span class="hljs-type">Password</span>, {\n         strategy,\n         dependents: <span class="hljs-type">None</span>, <span class="hljs-comment">/* You can define fields which must be revalidated on change of this field\'s value */</span>\n         validate: (value, _state) =&gt;\n           <span class="hljs-keyword">switch</span> value {\n           | <span class="hljs-string">""</span> =&gt; <span class="hljs-type">Invalid</span>(<span class="hljs-string">"Uh oh error"</span>)\n           | <span class="hljs-number">_</span> =&gt; <span class="hljs-type">Valid</span>\n           }\n       })\n    );\n};\n\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">FormContainer</span> = <span class="hljs-title">Formality</span>.<span class="hljs-title">Make</span>(<span class="hljs-title">MyForm</span>);\n\n<span class="hljs-title">let</span> <span class="hljs-title">component</span> = "<span class="hljs-title">MyForm</span>" |&gt; <span class="hljs-title">ReasonReact</span>.<span class="hljs-title">statelessComponent</span>;\n\n<span class="hljs-title">let</span> <span class="hljs-title">make</span> = (<span class="hljs-title">_</span>) =&gt; </span>{\n  ...component,\n  render: (<span class="hljs-number">_</span>) =&gt;\n    &lt;<span class="hljs-type">FormContainer</span>\n      initialState={email: <span class="hljs-string">""</span>, password: <span class="hljs-string">""</span>}\n      onSubmit=((state, notify) =&gt; {\n        <span class="hljs-comment">/* Submit form and either notify.onSuccess / notify.onFailure */</span>\n      })\n    &gt;\n      ...(\n            form =&gt;\n              &lt;form\n                className=<span class="hljs-string">"form"</span>\n                onSubmit=(form.submit |&gt; <span class="hljs-type">Formality</span>.<span class="hljs-type">Dom</span>.preventDefault)&gt;\n                &lt;input\n                  value=form.state.email\n                  disabled=(form.submitting |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Boolean</span>.to_js_boolean)\n                  onChange=(<span class="hljs-type">MyForm</span>.<span class="hljs-type">Email</span> |&gt; form.change |&gt; <span class="hljs-type">Formality</span>.<span class="hljs-type">Dom</span>.valueOnChange)\n                  onBlur=(<span class="hljs-type">MyForm</span>.<span class="hljs-type">Email</span> |&gt; form.blur |&gt; <span class="hljs-type">Formality</span>.<span class="hljs-type">Dom</span>.valueOnBlur)\n                /&gt;\n                (\n                  <span class="hljs-keyword">switch</span> (<span class="hljs-type">MyForm</span>.<span class="hljs-type">Email</span> |&gt; form.results) {\n                  | <span class="hljs-type">Some</span>(<span class="hljs-type">Invalid</span>(message)) =&gt;\n                    &lt;div className=(<span class="hljs-type">Cn</span>.make([<span class="hljs-string">"form-message"</span>, <span class="hljs-string">"failure"</span>]))&gt;\n                      (message |&gt; <span class="hljs-type">ReasonReact</span>.stringToElement)\n                    &lt;/div&gt;\n                  | <span class="hljs-type">Some</span>(<span class="hljs-type">Valid</span>)\n                  | <span class="hljs-type">None</span> =&gt; <span class="hljs-type">ReasonReact</span>.nullElement\n                  }\n                )\n                &lt;input\n                  value=form.state.password\n                  disabled=(form.submitting |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Boolean</span>.to_js_boolean)\n                  onChange=(<span class="hljs-type">MyForm</span>.<span class="hljs-type">Password</span> |&gt; form.change |&gt; <span class="hljs-type">Formality</span>.<span class="hljs-type">Dom</span>.valueOnChange)\n                  onBlur=(<span class="hljs-type">MyForm</span>.<span class="hljs-type">Password</span> |&gt; form.blur |&gt; <span class="hljs-type">Formality</span>.<span class="hljs-type">Dom</span>.valueOnBlur)\n                /&gt;\n                (\n                  <span class="hljs-keyword">switch</span> (<span class="hljs-type">MyForm</span>.<span class="hljs-type">Password</span> |&gt; form.results) {\n                  | <span class="hljs-type">Some</span>(<span class="hljs-type">Invalid</span>(message)) =&gt;\n                    &lt;div className=(<span class="hljs-type">Cn</span>.make([<span class="hljs-string">"form-message"</span>, <span class="hljs-string">"failure"</span>]))&gt;\n                      (message |&gt; <span class="hljs-type">ReasonReact</span>.stringToElement)\n                    &lt;/div&gt;\n                  | <span class="hljs-type">Some</span>(<span class="hljs-type">Valid</span>)\n                  | <span class="hljs-type">None</span> =&gt; <span class="hljs-type">ReasonReact</span>.nullElement\n                  }\n                )\n                &lt;button disabled=(form.submitting |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Boolean</span>.to_js_boolean)&gt;\n                  ((form.submitting ? <span class="hljs-string">"Submitting..."</span> : <span class="hljs-string">"Submit"</span>) |&gt; <span class="hljs-type">ReasonReact</span>.stringToElement)\n                &lt;/button&gt;\n              &lt;/form&gt;\n          )\n    &lt;/<span class="hljs-type">FormContainer</span>&gt;\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">MyForm</span> =\n  <span class="hljs-keyword">struct</span>\n    <span class="hljs-keyword">type</span> field =\n      | <span class="hljs-type">Email</span>\n      | <span class="hljs-type">Password</span>\n    <span class="hljs-keyword">type</span> state = {\n      email: <span class="hljs-built_in">string</span>;\n      password: <span class="hljs-built_in">string</span>;}\n    <span class="hljs-keyword">type</span> message = <span class="hljs-built_in">string</span>\n    <span class="hljs-keyword">let</span> get field state =\n      <span class="hljs-keyword">match</span> field <span class="hljs-keyword">with</span> | <span class="hljs-type">Email</span>  -&gt; state.email | <span class="hljs-type">Password</span>  -&gt; state.password\n    <span class="hljs-keyword">let</span> update (field,<span class="hljs-keyword">value</span>) state =\n      <span class="hljs-keyword">match</span> (field, <span class="hljs-keyword">value</span>) <span class="hljs-keyword">with</span>\n      | (<span class="hljs-type">Email</span> ,<span class="hljs-keyword">value</span>) -&gt; { state <span class="hljs-keyword">with</span> email = <span class="hljs-keyword">value</span> }\n      | (<span class="hljs-type">Password</span> ,<span class="hljs-keyword">value</span>) -&gt; { state <span class="hljs-keyword">with</span> password = <span class="hljs-keyword">value</span> }\n    <span class="hljs-keyword">let</span> strategy = <span class="hljs-type">Formality</span>.<span class="hljs-type">Strategy</span>.<span class="hljs-type">OnFirstSuccessOrFirstBlur</span>\n    <span class="hljs-keyword">module</span> <span class="hljs-type">Validators</span> = <span class="hljs-type">Formality</span>.<span class="hljs-type">MakeValidators</span>(<span class="hljs-keyword">struct</span> <span class="hljs-keyword">type</span> t = field <span class="hljs-keyword">end</span>)\n    <span class="hljs-keyword">type</span> validators = (field,state,message) <span class="hljs-type">Formality</span>.validator <span class="hljs-type">Validators</span>.t\n    <span class="hljs-keyword">let</span> validators =\n      <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Formality</span> <span class="hljs-keyword">in</span>\n        (<span class="hljs-type">Validators</span>.empty |&gt;\n           (<span class="hljs-type">Validators</span>.add <span class="hljs-type">Email</span>\n              {\n                strategy;\n                dependents = <span class="hljs-type">None</span>;\n                validate =\n                  (<span class="hljs-keyword">fun</span> <span class="hljs-keyword">value</span>  -&gt;\n                     <span class="hljs-keyword">fun</span> _state  -&gt;\n                       <span class="hljs-keyword">match</span> <span class="hljs-keyword">value</span> <span class="hljs-keyword">with</span>\n                       | <span class="hljs-string">""</span> -&gt; ((<span class="hljs-type">Invalid</span> (<span class="hljs-string">"Uh oh error"</span>))[@explicit_arity ])\n                       | _ -&gt; <span class="hljs-type">Valid</span>)\n              }))\n          |&gt;\n          (<span class="hljs-type">Validators</span>.add <span class="hljs-type">Password</span>\n             {\n               strategy;\n               dependents = <span class="hljs-type">None</span>;\n               validate =\n                 (<span class="hljs-keyword">fun</span> <span class="hljs-keyword">value</span>  -&gt;\n                    <span class="hljs-keyword">fun</span> _state  -&gt;\n                      <span class="hljs-keyword">match</span> <span class="hljs-keyword">value</span> <span class="hljs-keyword">with</span>\n                      | <span class="hljs-string">""</span> -&gt; ((<span class="hljs-type">Invalid</span> (<span class="hljs-string">"Uh oh error"</span>))[@explicit_arity ])\n                      | _ -&gt; <span class="hljs-type">Valid</span>)\n             })\n  <span class="hljs-keyword">end</span>\n<span class="hljs-keyword">module</span> <span class="hljs-type">FormContainer</span> = <span class="hljs-type">Formality</span>.<span class="hljs-type">Make</span>(<span class="hljs-type">MyForm</span>)\n<span class="hljs-keyword">let</span> component = <span class="hljs-string">"MyForm"</span> |&gt; <span class="hljs-type">ReasonReact</span>.statelessComponent\n<span class="hljs-keyword">let</span> make _ =\n  {\n    component <span class="hljs-keyword">with</span>\n    render =\n      (<span class="hljs-keyword">fun</span> _  -&gt;\n         ((<span class="hljs-type">FormContainer</span>.createElement\n             ~initialState:{ email = <span class="hljs-string">""</span>; password = <span class="hljs-string">""</span> }\n             ~onSubmit:(<span class="hljs-keyword">fun</span> state  -&gt; <span class="hljs-keyword">fun</span> notify  -&gt; <span class="hljs-keyword">object</span> (this)  <span class="hljs-keyword">end</span>)\n             ~children:(<span class="hljs-keyword">fun</span> form  -&gt;\n                          ((form ~className:<span class="hljs-string">"form"</span>\n                              ~onSubmit:(form.submit |&gt;\n                                           <span class="hljs-type">Formality</span>.<span class="hljs-type">Dom</span>.preventDefault)\n                              ~children:[((input ~<span class="hljs-keyword">value</span>:((form.state).email)\n                                             ~disabled:(form.submitting |&gt;\n                                                          <span class="hljs-type">Js</span>.<span class="hljs-type">Boolean</span>.to_js_boolean)\n                                             ~onChange:((<span class="hljs-type">MyForm</span>.<span class="hljs-type">Email</span> |&gt;\n                                                           form.change)\n                                                          |&gt;\n                                                          <span class="hljs-type">Formality</span>.<span class="hljs-type">Dom</span>.valueOnChange)\n                                             ~onBlur:((<span class="hljs-type">MyForm</span>.<span class="hljs-type">Email</span> |&gt;\n                                                         form.blur)\n                                                        |&gt;\n                                                        <span class="hljs-type">Formality</span>.<span class="hljs-type">Dom</span>.valueOnBlur)\n                                             ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]);\n                                        (<span class="hljs-keyword">match</span> <span class="hljs-type">MyForm</span>.<span class="hljs-type">Email</span> |&gt; form.results\n                                         <span class="hljs-keyword">with</span>\n                                         | ((<span class="hljs-type">Some</span>\n                                             (((<span class="hljs-type">Invalid</span>\n                                              (message))[@explicit_arity ])))\n                                             [@explicit_arity ]) -&gt;\n                                             ((div\n                                                 ~className:(<span class="hljs-type">Cn</span>.make\n                                                               [<span class="hljs-string">"form-message"</span>;\n                                                               <span class="hljs-string">"failure"</span>])\n                                                 ~children:[message |&gt;\n                                                              <span class="hljs-type">ReasonReact</span>.stringToElement]\n                                                 <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])\n                                         | ((<span class="hljs-type">Some</span>\n                                           (<span class="hljs-type">Valid</span> ))[@explicit_arity ])|<span class="hljs-type">None</span> \n                                             -&gt; <span class="hljs-type">ReasonReact</span>.nullElement);\n                                        ((input\n                                            ~<span class="hljs-keyword">value</span>:((form.state).password)\n                                            ~disabled:(form.submitting |&gt;\n                                                         <span class="hljs-type">Js</span>.<span class="hljs-type">Boolean</span>.to_js_boolean)\n                                            ~onChange:((<span class="hljs-type">MyForm</span>.<span class="hljs-type">Password</span> |&gt;\n                                                          form.change)\n                                                         |&gt;\n                                                         <span class="hljs-type">Formality</span>.<span class="hljs-type">Dom</span>.valueOnChange)\n                                            ~onBlur:((<span class="hljs-type">MyForm</span>.<span class="hljs-type">Password</span> |&gt;\n                                                        form.blur)\n                                                       |&gt;\n                                                       <span class="hljs-type">Formality</span>.<span class="hljs-type">Dom</span>.valueOnBlur)\n                                            ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]);\n                                        (<span class="hljs-keyword">match</span> <span class="hljs-type">MyForm</span>.<span class="hljs-type">Password</span> |&gt;\n                                                 form.results\n                                         <span class="hljs-keyword">with</span>\n                                         | ((<span class="hljs-type">Some</span>\n                                             (((<span class="hljs-type">Invalid</span>\n                                              (message))[@explicit_arity ])))\n                                             [@explicit_arity ]) -&gt;\n                                             ((div\n                                                 ~className:(<span class="hljs-type">Cn</span>.make\n                                                               [<span class="hljs-string">"form-message"</span>;\n                                                               <span class="hljs-string">"failure"</span>])\n                                                 ~children:[message |&gt;\n                                                              <span class="hljs-type">ReasonReact</span>.stringToElement]\n                                                 <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])\n                                         | ((<span class="hljs-type">Some</span>\n                                           (<span class="hljs-type">Valid</span> ))[@explicit_arity ])|<span class="hljs-type">None</span> \n                                             -&gt; <span class="hljs-type">ReasonReact</span>.nullElement);\n                                        ((button\n                                            ~disabled:(form.submitting |&gt;\n                                                         <span class="hljs-type">Js</span>.<span class="hljs-type">Boolean</span>.to_js_boolean)\n                                            ~children:[(<span class="hljs-keyword">match</span> form.submitting\n                                                        <span class="hljs-keyword">with</span>\n                                                        | <span class="hljs-literal">true</span>  -&gt;\n                                                            <span class="hljs-string">"Submitting..."</span>\n                                                        | <span class="hljs-literal">false</span>  -&gt; <span class="hljs-string">"Submit"</span>)\n                                                         |&gt;\n                                                         <span class="hljs-type">ReasonReact</span>.stringToElement]\n                                            <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])) <span class="hljs-literal">()</span>)\n         [@<span class="hljs-type">JSX</span> ]))\n  }</code></pre>\n      </div>\n    </div>\n  \n<h2 id="api"><a href="#api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API</h2>\n<p>...</p>\n<h3 id="strategies"><a href="#strategies" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Strategies</h3>\n<p>In most cases validation feedback should be provided as soon as possible, but not too soon. The question comes down to when to start providing feedback. It really depends on context. Using strategies below, the form won\'t provide any feedback until the specific moment, e.g. the first blur from the field or the first successful validation. All you have to do is to pick the most suitable one for your context. To understand the behavior of each strategy, add the following prefix to its name: "Start providing feedback on..."</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Strategy</span> = </span>{\n  <span class="hljs-keyword">type</span> t =\n    | <span class="hljs-type">OnFirstBlur</span>\n    | <span class="hljs-type">OnFirstChange</span>\n    | <span class="hljs-type">OnFirstSuccess</span>\n    | <span class="hljs-type">OnFirstSuccessOrFirstBlur</span>\n    | <span class="hljs-type">OnSubmit</span>;\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">Strategy</span> =\n  <span class="hljs-keyword">struct</span>\n    <span class="hljs-keyword">type</span> t =\n      | <span class="hljs-type">OnFirstBlur</span>\n      | <span class="hljs-type">OnFirstChange</span>\n      | <span class="hljs-type">OnFirstSuccess</span>\n      | <span class="hljs-type">OnFirstSuccessOrFirstBlur</span>\n      | <span class="hljs-type">OnSubmit</span>\n  <span class="hljs-keyword">end</span></code></pre>\n      </div>\n    </div>\n  \n<h4 id="onfirstblur"><a href="#onfirstblur" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>OnFirstBlur</code></h4>\n<p>Results are emitted on the first blur. After first results are emitted, feedback is provided on every change in this field.</p>\n<h4 id="onfirstchange"><a href="#onfirstchange" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>OnFirstChange</code></h4>\n<p>Results are emitted as user types in the field.</p>\n<h4 id="onfirstsuccess"><a href="#onfirstsuccess" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>OnFirstSuccess</code></h4>\n<p>Results are emitted on first successful validation. After first results are emitted, feedback is provided on every change in this field.</p>\n<h4 id="onfirstsuccessorfirstblur-"><a href="#onfirstsuccessorfirstblur-" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>OnFirstSuccessOrFirstBlur</code> ✨</h4>\n<p>Results are emitted immediately on successful validation or on the first blur. After first results are emitted, feedback is provided on every change in this field.</p>\n<h4 id="onsubmit"><a href="#onsubmit" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>OnSubmit</code></h4>\n<p>Results are emitted only after first submission attempt. After this, results for each field are emitted on every change until the form is reset or remounted.</p>\n<p>...</p>\n',
homepageUrl:"https://github.com/alexfedoseev/re-formality#readme",repositoryUrl:"https://github.com/alexfedoseev/re-formality",npmUrl:"https://www.npmjs.com/package/re-formality",issuesUrl:"https://github.com/alexfedoseev/re-formality/issues",slug:"/package/re-formality"}},pathContext:{id:"re-formality"}}}});
//# sourceMappingURL=path---package-re-formality-c5b77bad11abc11ff80d.js.map