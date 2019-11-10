webpackJsonp([0xfcf71e63f714],{1345:function(s,e){s.exports={data:{package:{type:"published",id:"reason-hooks-testing-library",name:"reason-hooks-testing-library",version:"0.2.0",category:"binding",flags:[],platforms:["node","browser"],description:"ReasonReact hooks testing library.",keywords:["react","testing"],license:"MIT",updated:"2019-10-25T01:22:22.500Z",stars:16,score:.5834860219834815,quality:.6956190554561266,popularity:.07132684267144686,maintenance:.9995311726046778,readme:'<h1 id="reason-hooks-testing-library"><a href="#reason-hooks-testing-library" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>reason-hooks-testing-library</h1>\n<p>Reason bindings for <a href="https://github.com/mpeyper/react-hooks-testing-library"><code>react-hooks-testing-library</code></a>.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p><code>npm install --save-dev reason-hooks-testing-library</code></p>\n<p>Then add <code>reason-hooks-testing-library</code> to <code>bs-dev-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"bs-dev-dependencies"</span>: [<span class="hljs-string">"@glennsl/bs-jest"</span>, <span class="hljs-string">"reason-hooks-testing-library"</span>]\n}</code></pre></div>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">Jest</span>;\nopen <span class="hljs-type">Expect</span>;\nopen <span class="hljs-type">ReasonHooksTestingLibrary</span>.<span class="hljs-type">Testing</span>;\n\n<span class="hljs-keyword">type</span> counterType = {\n  counter: int,\n  <span class="hljs-keyword">set</span>: (int =&gt; int) =&gt; unit,\n};\n<span class="hljs-keyword">let</span> useCounter = initial =&gt; {\n  <span class="hljs-keyword">let</span> (counter, <span class="hljs-keyword">set</span>) = <span class="hljs-type">React</span>.useState(() =&gt; initial);\n  {counter, <span class="hljs-keyword">set</span>};\n};\n\ndescribe(<span class="hljs-string">"useCounter"</span>, () =&gt; {\n  open <span class="hljs-type">Result</span>;\n  <span class="hljs-keyword">let</span> container = renderHook(() =&gt; useCounter(<span class="hljs-number">0</span>), ());\n  test(<span class="hljs-string">"counter is 0"</span>, () =&gt;\n    expect(container-&gt;result-&gt;current.counter) |&gt; toEqual(<span class="hljs-number">0</span>)\n  );\n  test(<span class="hljs-string">"counter is 1"</span>, () =&gt; {\n    act(() =&gt; container-&gt;result-&gt;current.<span class="hljs-keyword">set</span>(prev =&gt; prev + <span class="hljs-number">1</span>));\n    expect(container-&gt;result-&gt;current.counter) |&gt; toEqual(<span class="hljs-number">1</span>);\n  });\n  test(<span class="hljs-string">"counter is 2"</span>, () =&gt; {\n    act(() =&gt; container-&gt;result-&gt;current.<span class="hljs-keyword">set</span>(prev =&gt; prev + <span class="hljs-number">1</span>));\n    expect(container-&gt;result-&gt;current.counter) |&gt; toEqual(<span class="hljs-number">2</span>);\n  });\n});</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">964</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p><a href="https://github.com/beizhedenglong/reason-hooks-testing-library/tree/master/__tests__">More examples</a></p>\n',homepageUrl:"https://github.com/beizhedenglong/reason-hooks-testing-library",repositoryUrl:"https://github.com/beizhedenglong/reason-hooks-testing-library",npmUrl:"https://www.npmjs.com/package/reason-hooks-testing-library",issuesUrl:"https://github.com/beizhedenglong/reason-hooks-testing-library/issues",slug:"/package/reason-hooks-testing-library"}},pathContext:{id:"reason-hooks-testing-library"}}}});
//# sourceMappingURL=path---package-reason-hooks-testing-library-e04402635da951382db2.js.map