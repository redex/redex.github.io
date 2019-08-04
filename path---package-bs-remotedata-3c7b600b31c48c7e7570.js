webpackJsonp([0xa11111948ee3],{1253:function(s,e){s.exports={data:{package:{type:"published",id:"bs-remotedata",name:"bs-remotedata",version:"2.0.1",category:"library",flags:[],platforms:["any"],description:"RemoteData and WebData to use with bs-fetch for BuckleScript",keywords:["data fetching","utilities"],license:"MIT",updated:"2019-06-28T21:00:56.433Z",stars:8,score:.6277938735386097,quality:.8797401453626308,popularity:.03970695795808224,maintenance:.9999268418414051,readme:'<h1 id="bs-remotedata"><a href="#bs-remotedata" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-remotedata</h1>\n<p><code>RemoteData</code> and <code>WebData</code> to use with <code>bs-fetch</code> and <code>bs-json</code> for BuckleScript</p>\n<p><img src="https://travis-ci.org/FabienHenon/bs-remotedata.svg?branch=master" alt="Test status"></p>\n<p><code>RemoteData.t</code> is a simple variant type that allows you to store a data that can have 4 potential states:</p>\n<ul>\n<li><code>Success(\'a)</code>: your data has been successfully retrieved and stored</li>\n<li><code>Failure(\'e)</code>: your data could not be retrieved</li>\n<li><code>Loading</code>: your data is beeing fetched</li>\n<li><code>NotAsked</code>: you didn\'t fetch your data yet</li>\n</ul>\n<p>This type provides you many usefull functions to handle your data: <code>map</code>, <code>andThen</code>, <code>withDefault</code>, <code>fromOption</code>, <code>fromResult</code>, <code>fromPromise</code>, ...</p>\n<p>The main goal for this type is to be used for HTTP requests. That\'s where <code>WebData</code> comes into play.\n<code>WebData.t</code> is a <code>RemoteData.t</code> type but with the error type specified as a <code>WebData.error</code>. The <code>WebData</code> module provides some usefull functions to fetch data from API and convert it to a <code>WebData.t</code>. You can even provide your own <em>Json</em> decoder to convert the result of your API call to a <code>WebData.t</code> of any type you want/need.</p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> person = {\n  age: int,\n  name: string\n};\n\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Decode</span> = </span>{\n  <span class="hljs-keyword">let</span> personDecoderExn = json =&gt;\n    <span class="hljs-type">Json</span>.<span class="hljs-type">Decode</span>.{\n      age: json |&gt; field(<span class="hljs-string">"age"</span>, int),\n      name: json |&gt; field(<span class="hljs-string">"name"</span>, string)\n    };\n    \n  <span class="hljs-keyword">let</span> personDecoder = json =&gt;\n    try (<span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Ok</span>(personDecoderExn(json))) {\n    | <span class="hljs-type">Json</span>.<span class="hljs-type">Decode</span>.<span class="hljs-type">DecodeError</span>(err) =&gt; <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Error</span>(err)\n    };    \n};\n\n<span class="hljs-comment">/* At app launch say you set your data state to `NotAsked` */</span>\n<span class="hljs-keyword">let</span> data: <span class="hljs-type">WebData</span>.t(person) = <span class="hljs-type">RemoteData</span>.<span class="hljs-type">NotAsked</span>;\n\n<span class="hljs-comment">/* You received an event and you need to retrieve your data */</span>\n<span class="hljs-keyword">let</span> data: <span class="hljs-type">WebData</span>.t(person) = <span class="hljs-type">RemoteData</span>.<span class="hljs-type">Loading</span>;\n\n<span class="hljs-type">Fetch</span>.fetch(<span class="hljs-string">"http://my-api"</span>)\n|&gt; <span class="hljs-type">WebData</span>.fromResponse(<span class="hljs-type">Decode</span>.personDecoder)\n|&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.then_(data =&gt; {\n  <span class="hljs-comment">/* Here your data is still a WebData.t(person) and will be\n    either Success(person), or Failure(httpError) */</span>\n});</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> person = {\n  age: <span class="hljs-built_in">int</span>;\n  name: <span class="hljs-built_in">string</span>;}\n<span class="hljs-keyword">module</span> <span class="hljs-type">Decode</span> =\n  <span class="hljs-keyword">struct</span>\n    <span class="hljs-keyword">let</span> personDecoderExn json =\n      <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Json</span>.<span class="hljs-type">Decode</span> <span class="hljs-keyword">in</span>\n        {\n          age = (json |&gt; (field <span class="hljs-string">"age"</span> <span class="hljs-built_in">int</span>));\n          name = (json |&gt; (field <span class="hljs-string">"name"</span> <span class="hljs-built_in">string</span>))\n        }\n    <span class="hljs-keyword">let</span> personDecoder json =\n      <span class="hljs-keyword">try</span> ((<span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Ok</span> ((personDecoderExn json)))[@explicit_arity ])\n      <span class="hljs-keyword">with</span>\n      | ((<span class="hljs-type">Json</span>.<span class="hljs-type">Decode</span>.<span class="hljs-type">DecodeError</span> (err))[@explicit_arity ]) -&gt;\n          ((<span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Error</span> (err))[@explicit_arity ])\n  <span class="hljs-keyword">end</span>\n<span class="hljs-keyword">let</span> data: person <span class="hljs-type">WebData</span>.t = <span class="hljs-type">RemoteData</span>.<span class="hljs-type">NotAsked</span>\n<span class="hljs-keyword">let</span> data: person <span class="hljs-type">WebData</span>.t = <span class="hljs-type">RemoteData</span>.<span class="hljs-type">Loading</span>\n<span class="hljs-keyword">let</span> _ =\n  ((<span class="hljs-type">Fetch</span>.fetch <span class="hljs-string">"http://my-api"</span>) |&gt;\n     (<span class="hljs-type">WebData</span>.fromResponse <span class="hljs-type">Decode</span>.personDecoder))\n    |&gt; (<span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.then_ (<span class="hljs-keyword">fun</span> data  -&gt; <span class="hljs-keyword">object</span> (this)  <span class="hljs-keyword">end</span>))</code></pre>\n      </div>\n    </div>\n  \n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install --save bs-remotedata</code></pre></div>\n<p>Then add <code>bs-remotedata</code> to <code>bs-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>{\n  ...\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"bs-remotedata"</span>]\n}</code></pre></div>\n<h2 id="documentation"><a href="#documentation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Documentation</h2>\n<p>For the moment, please see the interface files:</p>\n<ul>\n<li><a href="src/RemoteData.rei">RemoteData</a></li>\n<li><a href="src/WebData.rei">WebData</a></li>\n</ul>\n',homepageUrl:"https://github.com/FabienHenon/bs-remotedata",repositoryUrl:"https://github.com/FabienHenon/bs-remotedata",npmUrl:"https://www.npmjs.com/package/bs-remotedata",issuesUrl:"https://github.com/FabienHenon/bs-remotedata/issues",slug:"/package/bs-remotedata"}},pathContext:{id:"bs-remotedata"}}}});
//# sourceMappingURL=path---package-bs-remotedata-3c7b600b31c48c7e7570.js.map