webpackJsonp([0xa625cac2f865],{80:function(e,n){"use strict";function t(e){return null===e?1:+(void 0===e)}function o(e){return null===e||void 0===e?0:[e]}function s(e){return void 0===e?0:[e]}function i(e){return null===e?0:[e]}function r(e){return e?e[0]:void 0}function a(e){return e?e[0][1]:void 0}n.is_nil_undef=t,n.null_undefined_to_opt=o,n.undefined_to_opt=s,n.null_to_opt=i,n.option_get=r,n.option_get_unwrap=a},92:function(e,n,t){"use strict";var o=t(85);o.css.insert("html {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}"),o.css.insert("body {\n  margin: 0;\n}"),o.css.insert("article,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}"),o.css.insert("h1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}"),o.css.insert("figcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}"),o.css.insert("figure {\n  margin: 1em 40px;\n}"),o.css.insert("hr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}"),o.css.insert("pre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}"),o.css.insert("a {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}"),o.css.insert("a:active,\na:hover {\n  outline-width: 0;\n}"),o.css.insert("abbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}"),o.css.insert("b,\nstrong {\n  font-weight: inherit;\n}"),o.css.insert("b,\nstrong {\n  font-weight: bolder;\n}"),o.css.insert("code,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}"),o.css.insert("dfn {\n  font-style: italic;\n}"),o.css.insert("mark {\n  background-color: #ff0;\n  color: #000;\n}"),o.css.insert("small {\n  font-size: 80%;\n}"),o.css.insert("sub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}"),o.css.insert("sub {\n  bottom: -0.25em;\n}"),o.css.insert("sup {\n  top: -0.5em;\n}"),o.css.insert("audio,\nvideo {\n  display: inline-block;\n}"),o.css.insert("audio:not([controls]) {\n  display: none;\n  height: 0;\n}"),o.css.insert("img {\n  border-style: none;\n}"),o.css.insert("svg:not(:root) {\n  overflow: hidden;\n}"),o.css.insert("button,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}"),o.css.insert("button,\ninput { /* 1 */\n  overflow: visible;\n}"),o.css.insert("button,\nselect { /* 1 */\n  text-transform: none;\n}"),o.css.insert('button,\nhtml [type="button"], /* 1 */\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button; /* 2 */\n}'),o.css.insert('button::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}'),o.css.insert('button:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}'),o.css.insert("fieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}"),o.css.insert("legend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}"),o.css.insert("progress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}"),o.css.insert("textarea {\n  overflow: auto;\n}"),o.css.insert('[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}'),o.css.insert('[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}'),o.css.insert('[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}'),o.css.insert('[type="search"]::-webkit-search-cancel-button,\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}'),o.css.insert("::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}"),o.css.insert("details, /* 1 */\nmenu {\n  display: block;\n}"),o.css.insert("summary {\n  display: list-item;\n}"),o.css.insert("canvas {\n  display: inline-block;\n}"),o.css.insert("template {\n  display: none;\n}"),o.css.insert("[hidden] {\n  display: none;\n}")},61:function(e,n,t){"use strict";var o=t(9),s=t(12),i=t(89),r=o.style([o.unsafe("label","width-container"),[o.unsafe("margin","0 auto"),[o.maxWidth(o.px(960)),[o.width(o.pct(100)),0]]]]),a=o.style([o.selector("& h1",[o.fontSize(o.rem(2.25)),[o.fontWeight(1),[o.lineHeight(o.em(1.1)),[o.marginBottom(o.rem(1.45)),0]]]]),[o.selector("& h2",[o.fontSize(o.rem(1.62671)),[o.fontWeight(1),[o.lineHeight(o.em(1.1)),[o.marginBottom(o.rem(1.45)),0]]]]),[o.selector("& h3",[o.fontSize(o.rem(1.38316)),[o.fontWeight(1),[o.lineHeight(o.em(1.1)),[o.marginBottom(o.rem(1.45)),0]]]]),[o.selector("& h1, & h2, & h3, & h4, & h5",[o.selector("& > a.anchor",[o.marginLeft(o.px(-20)),[o.paddingRight(o.px(4)),[o.selector("& > svg",[o.visibility(1),0]),0]]]),[o.hover([o.selector("& > a.anchor > svg",[o.visibility(0),0]),0]),0]]),[o.selector("& p",[o.marginBottom(o.rem(1.45)),[o.selector("& *:last-child",[o.marginBottom(o.zero),0]),0]]),[o.selector("& b, & strong",[o.fontWeight(1),0]),[o.selector("& i, & em",[o.fontStyle(1),0]),[o.selector("& ol, & ul",[o.margin(o.zero),[o.marginLeft(o.rem(1.45)),[o.marginBottom(o.rem(1.45)),[o.unsafe("listStylePosition","outside"),[o.unsafe("listStyleImage","none"),0]]]]]),[o.selector("& li",[o.marginBottom(o.rem(.725)),[o.selector("& > ol, & > ul",[o.marginLeft(o.rem(1.45)),[o.marginBottom(o.rem(.725)),[o.marginTop(o.rem(.725)),0]]]),[o.selector("& *:last-child",[o.marginBottom(o.zero),0]),[o.selector("& > p",[o.marginBottom(o.rem(.725)),0]),0]]]]),[o.selector("& ol",[o.unsafe("listStyleType","decimal"),[o.selector("& li",[o.paddingLeft(o.zero),0]),0]]),[o.selector("& ul",[o.unsafe("listStyleType","disc"),[o.selector("& li",[o.paddingLeft(o.zero),0]),0]]),[o.selector("& code",[o.unsafe("background","hsla(0, 0%, 0%, 0.04)"),[o.fontFamily("'SFMono-Regular', Consolas, 'Roboto Mono', 'Droid Sans Mono', 'Liberation Mono', Menlo, Courier, monospace"),[o.fontSize(o.rem(.85)),[o.lineHeight(o.rem(1.45)),[o.unsafe("padding",".2em 0"),0]]]]]),[o.selector("& pre",[o.marginBottom(o.rem(1.45)),[o.fontSize(o.rem(.85)),[o.lineHeight(o.rem(1.42)),[o.unsafe("background","hsla(0, 0%, 0%, 0.04)"),[o.borderRadius(o.px(3)),[o.overflow(3),[o.unsafe("wordWrap","normal"),[o.padding(o.rem(1.45)),[o.selector("& code",[o.background(0),[o.lineHeight(o.em(1.42)),0]]),0]]]]]]]]]),[o.selector("& a",[o.color(s.Color[5]),[o.textDecorationLine(0),[o.selector("&:hover",[o.textDecorationLine([[0,0]]),0]),0]]]),0]]]]]]]]]]]]]]),l=i._reset,c=i._global;n._reset=l,n._global=c,n.widthContainer=r,n.html=a},89:function(e,n,t){"use strict";var o=t(9),s=t(12);t(92),o.$$global("*",[o.boxSizing(0),0]),o.$$global("*:focus",[o.outlineStyle(0),0]),o.$$global("body",[o.unsafe("lineHeight","inherit"),[o.color(s.Color[4]),0]]),o.$$global("h1, h2, h3",[o.lineHeight(o.em(1.1)),[o.fontWeight(0),0]]),o.$$global("a",[o.unsafe("color","inherit"),0]),o.$$global("button, input, select",[o.unsafe("background","none"),[o.unsafe("border","none"),[o.unsafe("font","inherit"),0]]]);var i=o.$$global("ol, ul",[o.unsafe("listStyle","none"),[o.margin(o.zero),[o.padding(o.zero),0]]]);o.$$global("html",[o.fontSize(o.px(15)),[o.lineHeight(o.em(1.25)),[o.fontFamily("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"),[o.boxSizing(0),[o.overflowY(2),0]]]]]);var r=o.$$global("html, body, #___gatsby",[o.backgroundColor(s.Color[2]),[o.minHeight(o.pct(100)),0]]);n._reset=i,n._global=r},527:function(e,n,t){"use strict";function o(e){return"unpublished"===e?s.style(a.$at(d,[s.unsafe("background",r.Inverted[1]),0])):s.style(d)}var s=t(9),i=t(6),r=t(12),a=t(219),l=t(61),c=s.style([s.marginBottom(s.em(1.45)),0]),m=s.unsafe("label","header"),u=[s.backgroundColor(r.Inverted[0][0]),[s.color(r.Inverted[0][1]),[s.unsafe("padding","2em 4em"),0]]],d=[m,u],p=s.style([s.display(3),[s.justifyContent(1),[s.alignItems(4),[s.selector("& > *",[s.marginLeft(s.em(1)),0]),0]]]]),f=s.style([s.unsafe("padding","1em 0 0"),[s.display(3),[s.alignItems(4),0]]]),g=s.style([s.display(0),[s.opacity(.75),[s.fontSize(s.em(.85)),[s.unsafe("fontVariant","small-caps"),0]]]]),b=s.style([s.fontSize(s.rem(1.5)),[s.fontWeight(1),[s.textDecorationLine(0),[s.lineHeight(s.em(1.45)),[s.selector("&:hover",[s.textDecorationLine([[0,0]]),0]),0]]]]]),h=s.style(0),y=s.style([s.fontSize(s.em(.85)),[s.fontStyle(1),[s.marginLeft(s.em(.5)),[s.opacity(.75),0]]]]),v=s.style([s.fontSize(s.em(.85)),[s.fontStyle(1),[s.marginLeft(s.em(.5)),[s.color(r.Color[7]),[s.backgroundColor(r.Inverted[0][1]),[s.unsafe("padding",".2ex 1ex"),[s.unsafe("borderRadius","1.4ex"),[s.alignSelf(2),0]]]]]]]]),x=s.style([s.marginBottom(s.em(.5)),[s.unsafe("textOverflow","ellipsis"),[s.overflow(1),[s.opacity(.75),0]]]]),k=s.style([s.selector("& span",[s.fontSize(s.em(.85)),[s.backgroundColor(r.Inverted[0][2]),[s.unsafe("padding","0 1ex"),[s.opacity(1),[s.selector("&:hover",[s.backgroundColor(r.Inverted[0][3]),[s.cursor(5),0]]),0]]]]]),0]),_=s.style([s.opacity(.25),0]),z=s.style([s.textAlign(2),0]),w=s.style([s.fontSize(s.em(.85)),[s.unsafe("whiteSpace","nowrap"),0]]),S=s.style([s.fontSize(s.em(.85)),[s.unsafe("whiteSpace","nowrap"),[s.border(s.px(1),2,r.Inverted[0][1]),[s.unsafe("padding","0 1ex"),0]]]]),H=s.style([s.color(r.Color[7]),[s.fontSize(s.em(.85)),[s.unsafe("whiteSpace","nowrap"),[s.fontWeight(1),[s.backgroundColor(r.Inverted[0][1]),[s.unsafe("padding","0 1ex"),[s.unsafe("borderRadius","1.4ex"),0]]]]]]]),C=s.style([s.fontSize(s.em(.85)),[s.unsafe("whiteSpace","nowrap"),0]]),$=s.style([s.marginLeft(s.em(.25)),[s.transform(s.translateY(s.px(-1))),[s.opacity(.5),0]]]),E=s.style([s.marginTop(s.em(3)),[s.selector("& > a",[s.textDecorationLine(0),[s.marginRight(s.em(2)),[s.unsafe("fontVariant","small-caps"),[s.selector("&:hover",[s.textDecorationLine([[0,0]]),0]),[s.selector("&:not([href])",[s.textDecorationLine(0),[s.opacity(.25),0]]),0]]]]]),0]]),L=i._1(s.merge,[l.html,[s.style([s.backgroundColor(r.Panel[0][0]),[s.unsafe("padding","2em 4em"),0]]),0]]);n.root=c,n.header=o,n.props=p,n.title=f,n.owner=g,n.name=b,n.fields=h,n.version=y,n.unpublishedLabel=v,n.description=x,n.tags=k,n.tagsIcon=_,n.right=z,n.updated=w,n.license=S,n.nolicense=H,n.stars=C,n.starIcon=$,n.links=E,n.readme=L},529:function(e,n,t){"use strict";function o(e,n){var t=h.slice();return t[9]=function(){var n=e.package,t=n.license,o=n.type,h="unpublished"===o?c.createElement("span",{className:b.unpublishedLabel},d.Helpers[0]("unpublished")):null,y={},v=g.null_undefined_to_opt(n.homepageUrl);v&&(y.href=v[0]);var x={},k=g.null_undefined_to_opt(n.repositoryUrl);k&&(x.href=k[0]);var _={},z=g.null_undefined_to_opt(n.npmUrl);z&&(_.href=z[0]);var w={},S=g.null_undefined_to_opt(n.issuesUrl);S&&(w.href=S[0]);var H={},C=g.null_undefined_to_opt(n.docsUrl);return C&&(H.href=C[0]),c.createElement("div",{className:b.root},f.element(0,0,u.make([m.titleTemplate(n.name)],0,0,0,[])),c.createElement("header",{className:b.header(n.type)},c.createElement("div",{className:b.props},f.element(0,0,a._2(d.Control[3][1],g.null_undefined_to_opt(n.stars),function(e){return c.createElement("div",{className:b.stars},d.Helpers[0](e),f.element(0,0,i.Star[0]([b.starIcon],[])))})),f.element(0,0,l.make(n,[])),null==t?c.createElement("div",{className:b.nolicense},d.Helpers[0]("No license")):c.createElement("div",{className:b.license},d.Helpers[0](t)),c.createElement("div",{className:b.updated},f.element(0,0,p.make(n.updated,[])))),c.createElement("div",{className:b.title},f.element(0,0,r.make(n.slug,[b.name],0,[d.Helpers[0](n.name)])),c.createElement("span",{className:b.version},d.Helpers[0](n.version)),h),c.createElement("div",{className:b.fields},c.createElement("div",{className:b.description},d.Helpers[0](n.description)),c.createElement("div",{className:b.tags},f.element(0,0,i.Tags[0]([b.tagsIcon],[])),f.element(0,0,a._3(d.Control[0][1],n.keywords,[d.Helpers[0](" - ")],function(e){return f.element([e],0,s.make(e,[]))})))),c.createElement("div",{className:b.links},c.createElement("a",y,d.Helpers[0]("homepage")),c.createElement("a",x,d.Helpers[0]("repository")),c.createElement("a",_,d.Helpers[0]("npm")),c.createElement("a",w,d.Helpers[0]("issues")),c.createElement("a",H,d.Helpers[0]("documentation")))),c.createElement("div",{className:b.readme,dangerouslySetInnerHTML:{__html:n.readme}}))},t}n.__esModule=!0;var s=t(456),i=t(82),r=t(60),a=t(6),l=t(222),c=t(1),m=t(55),u=t(56),d=t(19),p=t(148),f=t(8),g=t(80),b=t(527);t(611);var h=f.statelessComponent("Package"),y=f.wrapReasonForJs(h,function(e){return o(e.data,[])}),v=(n.query="** extracted graphql fragment **",0),x=0;n.Control=v,n.Styles=x,n.component=h,n.make=o,n.$$default=y,n.default=y,n.__esModule=!0},611:function(e,n){}});
//# sourceMappingURL=component---src-templates-package-js-0adbdf7f9e1013d9a34c.js.map