webpackJsonp([0x6bf2167b35c2],{1061:function(s,e){s.exports={data:{package:{id:"bs-ocaml-protoc",stars:56,name:"bs-ocaml-protoc",version:"1.0.2",category:"tool",flags:[],platforms:["any"],description:"A Protocol Buffers compiler for OCaml",keywords:["data serialization"],license:"MIT",updated:"2018-02-07T13:00:03.686Z",type:"published",score:.6165668096618659,quality:.813352179669332,popularity:.06461456919754427,maintenance:.9998458758340738,readme:'<h1 id="ocaml-protoc"><a href="#ocaml-protoc" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ocaml-protoc</h1>\n<p>A <a href="https://developers.google.com/protocol-buffers/">protobuf</a> compiler for OCaml. </p>\n<ul>\n<li><a href="#introduction">Introduction</a></li>\n<li><a href="#a-simple-example">Simple Example</a></li>\n<li><a href="#build-install">Build/Install</a></li>\n<li><a href="doc/protobuf_ocaml_mapping.md">Protobuf &#x3C;-> OCaml mapping</a></li>\n<li><a href="doc/compiler_internals.md">Compiler Internals</a></li>\n<li><a href="doc/ocaml_extensions.md">Protobuf extensions</a></li>\n<li><a href="doc/benchmarking.md">Benchmarking</a></li>\n</ul>\n<h3 id="introduction"><a href="#introduction" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Introduction</h3>\n<p><code>ocaml-protoc</code> compiles <a href="https://developers.google.com/protocol-buffers/docs/proto">protobuf message files</a> into\n<a href="http://caml.inria.fr/pub/docs/manual-ocaml/moduleexamples.html">OCaml modules</a>. Each message/enum/oneof protobuf type\nhas a corresponding OCaml type along with the following functions:</p>\n<ul>\n<li><code>encode_&#x3C;type></code> : encode the generated type to <code>bytes</code> following protobuf specification</li>\n<li><code>decode_&#x3C;type></code> : decode the generated type from <code>bytes</code> following protobuf specification</li>\n<li><code>default_&#x3C;type></code> : default value honoring <a href="https://developers.google.com/protocol-buffers/docs/proto#optional">protobuf default attributes</a> or <a href="https://developers.google.com/protocol-buffers/docs/proto3#default">protobuf version 3 default rules</a> </li>\n<li><code>pp_&#x3C;type></code> : pretty print of the OCaml type</li>\n</ul>\n<p>The compiler relies on a runtime library <code>pbrt</code> which is itself implemented using the same runtime library as <a href="https://github.com/whitequark/ppx_deriving_protobuf/">ppx_deriving_protobuf</a> for low level encoding/decoding. </p>\n<p>OCaml users have now 2 complementary options to choose for protobuf serialization:</p>\n<ul>\n<li>If your application is mainly OCaml then <code>ppx_deriving_protobuf</code> is usually the best tool. You can leverage the OCaml type system as a schema definition and minimum setup is required to support serialization.</li>\n<li>If your application is using multiple languages and you are leveraging <code>Protobuf</code> as a language-independent data specification, then  <code>ocaml-protoc</code> is likely a more suitable option. <code>ocaml-protoc</code> guarantees that the generated OCaml types conform to the protobuf specifications.</li>\n</ul>\n<h3 id="a-simple-example"><a href="#a-simple-example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>A simple example</h3>\n<p>Let\'s take a similar example as the <a href="https://developers.google.com/protocol-buffers/docs/overview#how-do-they-work">google one</a>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-javascript"><code>message <span class="hljs-type">Person</span> {\n  required <span class="hljs-built_in">string</span> name = <span class="hljs-number">1</span>;\n  required <span class="hljs-built_in">int32</span> id = <span class="hljs-number">2</span>;\n  optional <span class="hljs-built_in">string</span> email = <span class="hljs-number">3</span>;\n  repeated <span class="hljs-built_in">string</span> phone = <span class="hljs-number">4</span>;\n}</code></pre></div>\n<p>The following OCaml code will get generated after running <code>ocaml-protoc -ml_out ./ example.proto</code></p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-comment">(** example01.proto Generated Types and Encoding *)</span>\n\n<span class="hljs-comment">(** {2 Types} *)</span>\n\n<span class="hljs-keyword">type</span> person = {\n  name : <span class="hljs-built_in">string</span>;\n  id : <span class="hljs-built_in">int32</span>;\n  email : <span class="hljs-built_in">string</span> option;\n  phone : <span class="hljs-built_in">string</span> <span class="hljs-built_in">list</span>;\n}\n\n\n<span class="hljs-comment">(** {2 Default values} *)</span>\n\n<span class="hljs-keyword">val</span> default_person : \n  ?name:<span class="hljs-built_in">string</span> -&gt;\n  ?id:<span class="hljs-built_in">int32</span> -&gt;\n  ?email:<span class="hljs-built_in">string</span> option -&gt;\n  ?phone:<span class="hljs-built_in">string</span> <span class="hljs-built_in">list</span> -&gt;\n  <span class="hljs-built_in">unit</span> -&gt;\n  person\n<span class="hljs-comment">(** [default_person ()] is the default value for type [person] *)</span>\n\n\n<span class="hljs-comment">(** {2 Protobuf Decoding} *)</span>\n\n<span class="hljs-keyword">val</span> decode_person : <span class="hljs-type">Pbrt</span>.<span class="hljs-type">Decoder</span>.t -&gt; person\n<span class="hljs-comment">(** [decode_person decoder] decodes a [person] value from [decoder] *)</span>\n\n\n<span class="hljs-comment">(** {2 Protobuf Encoding} *)</span>\n\n<span class="hljs-keyword">val</span> encode_person : person -&gt; <span class="hljs-type">Pbrt</span>.<span class="hljs-type">Encoder</span>.t -&gt; <span class="hljs-built_in">unit</span>\n<span class="hljs-comment">(** [encode_person v encoder] encodes [v] with the given [encoder] *)</span>\n\n\n<span class="hljs-comment">(** {2 Formatters} *)</span>\n\n<span class="hljs-keyword">val</span> pp_person : <span class="hljs-type">Format</span>.formatter -&gt; person -&gt; <span class="hljs-built_in">unit</span> \n<span class="hljs-comment">(** [pp_person v] formats v] *)</span></code></pre></div>\n<p>You can then use this OCaml module in your application to populate, serialize, and retrieve <code>person</code> protocol buffer messages.\nFor example:</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> <span class="hljs-literal">()</span> =\n\n  <span class="hljs-comment">(* Create OCaml value of generated type *)</span> \n  <span class="hljs-keyword">let</span> person = <span class="hljs-type">Example_pb</span>.({ \n    name = <span class="hljs-string">"John Doe"</span>; \n    id = <span class="hljs-number">1234l</span>;\n    email = <span class="hljs-type">Some</span> <span class="hljs-string">"jdoe@example.com"</span>; \n    phone = [<span class="hljs-string">"123-456-7890"</span>];\n  }) <span class="hljs-keyword">in</span> \n  \n  <span class="hljs-comment">(* Create a Protobuf encoder and encode value *)</span>\n  <span class="hljs-keyword">let</span> encoder = <span class="hljs-type">Pbrt</span>.<span class="hljs-type">Encoder</span>.create <span class="hljs-literal">()</span> <span class="hljs-keyword">in</span> \n  <span class="hljs-type">Example_pb</span>.encode_person person encoder; \n\n  <span class="hljs-comment">(* Output the protobuf message to a file *)</span> \n  <span class="hljs-keyword">let</span> oc = open_out <span class="hljs-string">"myfile"</span> <span class="hljs-keyword">in</span> \n  output_bytes oc (<span class="hljs-type">Pbrt</span>.<span class="hljs-type">Encoder</span>.to_bytes encoder);\n  close_out oc</code></pre></div>\n<p>Then later on you can read your message back in:</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> <span class="hljs-literal">()</span> = \n  <span class="hljs-comment">(* Read bytes from the file *)</span> \n  <span class="hljs-keyword">let</span> <span class="hljs-built_in">bytes</span> = \n    <span class="hljs-keyword">let</span> ic = open_in <span class="hljs-string">"myfile"</span> <span class="hljs-keyword">in</span> \n    <span class="hljs-keyword">let</span> len = in_channel_length ic <span class="hljs-keyword">in</span> \n    <span class="hljs-keyword">let</span> <span class="hljs-built_in">bytes</span> = <span class="hljs-type">Bytes</span>.create len <span class="hljs-keyword">in</span> \n    really_input ic <span class="hljs-built_in">bytes</span> <span class="hljs-number">0</span> len; \n    close_in ic; \n    <span class="hljs-built_in">bytes</span> \n  <span class="hljs-keyword">in</span> \n  \n  <span class="hljs-comment">(* Decode the person and Pretty-print it *)</span>\n  <span class="hljs-keyword">let</span> person = <span class="hljs-type">Example_pb</span>.decode_person (<span class="hljs-type">Pbrt</span>.<span class="hljs-type">Decoder</span>.of_bytes <span class="hljs-built_in">bytes</span>) <span class="hljs-keyword">in</span>\n  <span class="hljs-type">Format</span>.fprintf <span class="hljs-type">Format</span>.std_formatter <span class="hljs-string">"%a"</span> <span class="hljs-type">Example_pb</span>.pp_person person</code></pre></div>\n<p><em>OCaml users will immediately point to the use of <code>int32</code> type in the generated code which might not be the most convenient choice. One can modify this behavior using <a href="doc/ocaml_extensions.md">custom extensions</a>.</em> </p>\n<h3 id="build-install"><a href="#build-install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build-Install</h3>\n<p><strong>Prerequesite</strong></p>\n<p><code>ocaml-protoc</code> depends on :</p>\n<ul>\n<li>the OCaml compiler distribution (byte code/native compiler and ocamlbuild).</li>\n<li><a href="https://github.com/whitequark/ppx_deriving_protobuf">ppx_deriving_protobuf</a> for the generated code runtime.</li>\n</ul>\n<p><strong>Intall from OPAM</strong></p>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>opam install ocaml-protoc</code></pre></div>\n<p><strong>Install from source with <a href="http://projects.camlcity.org/projects/findlib.html">ocamlfind</a></strong></p>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>mkdir -p tmp/bin\n<span class="hljs-built_in">export</span> PREFIX=`<span class="hljs-built_in">pwd</span>`/tmp\nmake install</code></pre></div>\n<p><strong>Build your program</strong> </p>\n<p>Here are the steps to build the example above where the source are in <code>src/examples/</code>. We now assume that <code>$PREFIX/bin</code> is in your path.</p>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code><span class="hljs-comment"># Generate the OCaml protobuf module </span>\nocaml-protoc -ml_out ./ example01.proto</code></pre></div>\n<p>When using <code>findlib</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>ocamlfind ocamlopt -linkpkg -package ocaml-protoc \\\n  -o example01 \\\n  example01_pb.mli example01_pb.ml example01.ml</code></pre></div>\n<p>You can now run the example</p>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>./example01</code></pre></div>\n<h3 id="protobuf---ocaml-mapping"><a href="#protobuf---ocaml-mapping" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Protobuf &#x3C;-> OCaml mapping</h3>\n<p>see <a href="doc/protobuf_ocaml_mapping.md">here</a>.</p>\n<h3 id="compiler-internals"><a href="#compiler-internals" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Compiler Internals</h3>\n<p>see <a href="doc/compiler_internals.md">here</a></p>\n<h3 id="protobuf-extensions"><a href="#protobuf-extensions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Protobuf Extensions</h3>\n<p>see <a href="doc/ocaml_extensions.md">here</a></p>\n<h3 id="benchmarking"><a href="#benchmarking" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Benchmarking</h3>\n<p>see <a href="doc/benchmarking.md">here</a></p>\n',homepageUrl:"https://github.com/mransan/ocaml-protoc",repositoryUrl:"https://github.com/mransan/ocaml-protoc",npmUrl:"https://www.npmjs.com/package/bs-ocaml-protoc",issuesUrl:"https://github.com/mransan/ocaml-protoc/issues",slug:"/package/bs-ocaml-protoc"}},pathContext:{id:"bs-ocaml-protoc"}}}});
//# sourceMappingURL=path---package-bs-ocaml-protoc-6240f09b61f353fef7d8.js.map