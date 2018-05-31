webpackJsonp([96293522899504],{1092:function(e,a){e.exports={data:{package:{id:"re-formality",score:.487388140030679,name:"re-formality",version:"0.0.3",description:"Reasonable form validation tool for reason-react",keywords:["reason-react","react","ocaml","bucklescript"],license:"MIT",updated:"2018-01-07T01:49:54.103Z",stars:2,type:"published",quality:.4303320764795989,popularity:.029498424508351523,maintenance:.9941830528825037,readme:'<h1>Formality</h1>\n<p>Reasonable form validation tool for <a href="https://reasonml.github.io/reason-react/"><code>reason-react</code></a>.</p>\n<h2>Why</h2>\n<p>The main goal of the library is to simplify an implementation of forms validation preserving an excellent UX. It offers set of predefined strategies to handle different kinds of validation flows.</p>\n<h2>Examples</h2>\n<ul>\n<li>Signup form [ <a href="https://formality.now.sh">live</a> · <a href="examples/SignupForm.re">source</a> ]</li>\n</ul>\n<h2>🚧 WIP 🚧</h2>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> Base API</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Validation strategies</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Dependant fields validation</li>\n<li class="task-list-item"><input type="checkbox" disabled> Async validations</li>\n<li class="task-list-item"><input type="checkbox" disabled> Convert <a href="https://github.com/shakacode/react-validation-layer/tree/master/__tests__">test suit</a></li>\n</ul>\n<h2>Installation</h2>\n<pre><code class="language-shell"># yarn / npm\nyarn add re-formality\nnpm install --save re-formality\n</code></pre>\n<h2>Usage</h2>\n<p>Docs are WIP. Here\'s the quick example. See <a href="examples/"><code>examples</code></a> for real-world cases.</p>\n<blockquote>\n<p>Also, you can read more on <code>strategies</code> <a href="https://github.com/shakacode/react-validation-layer#propsstrategy">here</a></p>\n</blockquote>\n<pre><code class="language-reason">module MyForm = {\n  type field =\n    | Email\n    | Password;\n  type state = {\n    email: string,\n    password: string\n  };\n  let update = ((field, value), state) =>\n    switch (field, value) {\n    | (Email, value) => {...state, email: value}\n    | (Password, value) => {...state, password: value}\n    };\n  let strategy = Formality.Strategy.OnFirstSuccessOrFirstBlur;\n  module Validators = Formality.MakeValidators({type t = field;});\n  type validators = Validators.t(Formality.validator(field, state));\n  let validators = Formality.(\n    Validators.empty\n    |> Validators.add(Email, {\n         strategy: None, /* None means global strategy will be used, you can override it w/ Some(Formality.Strategy.t) */\n         dependents: None, /* You can define fields which must be revalidated on change of this field\'s value */\n         validate: (value, state) => {\n           switch (value |> Js.Option.getWithDefault(state.email)) {\n           | "" => Valid(false)\n           | _ => Valid(true)\n           }\n         }\n       })\n    |> Validators.add(Password, {\n         strategy: None, /* None means global strategy will be used, you can override it w/ Some(Formality.Strategy.t) */\n         dependents: None, /* You can define fields which must be revalidated on change of this field\'s value */\n         validate: (value, state) => {\n           switch (value |> Js.Option.getWithDefault(state.password)) {\n           | "" => Valid(false)\n           | _ => Valid(true)\n           }\n         }\n       })\n    );\n};\n\nmodule Container = Formality.Make(MyForm);\n\nlet component = ReasonReact.statelessComponent("MyForm");\n\nlet make = (_) => {\n  ...component,\n  render: (_) =>\n    &#x3C;Container\n      initialState={email: "", password: ""}\n      onSubmit=((~notifyOnSuccess, ~notifyOnFailure, state) => {/* Submit form... */})>\n      ...(\n           ({state, results, update, blur, submit, submitting}) =>\n             &#x3C;form className="form" onSubmit=submit>\n               &#x3C;input\n                 value=state.email\n                 disabled=(submitting |> Js.Boolean.to_js_boolean)\n                 onChange=(update(MyForm.Email))\n                 onBlur=(blur(MyForm.Email))\n               />\n               (\n                 switch (MyForm.Email |> results) {\n                 | Some(Formality.Valid(valid)) =>\n                   &#x3C;div className=(Cn.make(["form-message", valid ? "success" : "failure"]))>\n                     ((valid ? "Nice!" : "Uh oh error") |> ReasonReact.stringToElement)\n                   &#x3C;/div>\n                 | None => ReasonReact.nullElement\n                 }\n               )\n               &#x3C;input\n                 value=state.password\n                 disabled=(submitting |> Js.Boolean.to_js_boolean)\n                 onChange=(update(MyForm.Password))\n                 onBlur=(blur(MyForm.Password))\n               />\n               (\n                 switch (MyForm.Password |> results) {\n                 | Some(Formality.Valid(valid)) =>\n                   &#x3C;div className=(Cn.make(["form-message", valid ? "success" : "failure"]))>\n                     ((valid ? "Nice!" : "Uh oh error") |> ReasonReact.stringToElement)\n                   &#x3C;/div>\n                 | None => ReasonReact.nullElement\n                 }\n               )\n               &#x3C;button disabled=(submitting |> Js.Boolean.to_js_boolean)>\n                 ((submitting ? "Submitting..." : "Submit") |> ReasonReact.stringToElement)\n               &#x3C;/button>\n             &#x3C;/form>\n         )\n    &#x3C;/Container>\n};\n</code></pre>\n',homepageUrl:"https://github.com/alexfedoseev/re-formality#readme",repositoryUrl:"https://github.com/alexfedoseev/re-formality",npmUrl:"https://www.npmjs.com/package/re-formality",issuesUrl:"https://github.com/alexfedoseev/re-formality/issues",slug:"packages/re-formality"}},pathContext:{id:"re-formality"}}}});
//# sourceMappingURL=path---packages-re-formality-a8dc6f0e2fe9d40fe80a.js.map