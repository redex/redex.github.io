webpackJsonp([0xa7c5ba5bd8ff],{1042:function(e,t){e.exports={data:{package:{id:"bs-date-fns",score:.45692378512099363,name:"bs-date-fns",version:"0.1.2",description:"Bucklescript bindings to date-fns",keywords:["date-fns","bucklescript"],license:"MIT",updated:"2018-01-11T10:38:05.463Z",stars:8,type:"published",quality:.4119763095455001,popularity:.0398400760279586,maintenance:.912533901850166,readme:'<h2>Bucklescript bindings to date-fns</h2>\n<p>Bindings for all date-fns functions as of 1.29.0. Currently still missing support for locales.</p>\n<h3>Getting started</h3>\n<pre><code>npm install bs-date-fns --save\n</code></pre>\n<p>Add <code>"bs-date-fns"</code> to <code>bs-dependencies</code> in your project\'s <code>bsconfig.json</code></p>\n<h3>Differences from original date-fns API</h3>\n<p>In bindings the date parameter is moved to last position in a bunch of functions to work better with currying and make better use of pipe operator. Most of these can be seen from types. The ones that have same types but are different from date-fns:</p>\n<pre><code class="language-rs">laterDate |> DateFns.isAfter(earlierDate) /* true */\nDateFns.isAfter(earlierDate, laterDate) /* true */\n\nearlierDate |> DateFns.isBefore(laterDate) /* true */\nDateFns.isBefore(laterDate, earlierDate) /* true */\n\nmiddleDate |> DateFns.isWithinRange(earliestDate, latestDate) /* true */\nDateFns.isWithinRange(earliestDate, latestDate, middleDate) /* true */\n</code></pre>\n',homepageUrl:"https://github.com/SllyQ/bs-date-fns#readme",repositoryUrl:"https://github.com/SllyQ/bs-date-fns",npmUrl:"https://www.npmjs.com/package/bs-date-fns",issuesUrl:"https://github.com/SllyQ/bs-date-fns/issues",slug:"packages/bs-date-fns"}},pathContext:{id:"bs-date-fns"}}}});
//# sourceMappingURL=path---packages-bs-date-fns-ad17f32450cb74c802e7.js.map