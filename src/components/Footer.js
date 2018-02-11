// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Link         = require("../bindings/gatsby/link.js");
var React        = require("react");
var Vrroom       = require("vrroom/src/Vrroom.bs.js");
var ReasonReact  = require("reason-react/src/ReasonReact.js");
var CommonStyles = require("../styles/CommonStyles.js");
var FooterStyles = require("./FooterStyles.js");

var component = ReasonReact.statelessComponent("Footer");

function make(context, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", {
                  className: FooterStyles.root(context)
                }, React.createElement("div", {
                      className: CommonStyles.widthContainer
                    }, React.createElement("section", undefined, React.createElement("h1", undefined, Vrroom.text("Project")), React.createElement("ul", undefined, React.createElement("li", undefined, React.createElement("a", {
                                      href: "https://github.com/redex/redex.github.io"
                                    }, Vrroom.text("Source Code Repository"))), React.createElement("li", undefined, React.createElement("a", {
                                      href: "https://github.com/redex/redex.github.io/issues"
                                    }, Vrroom.text("Support / Bug Tracker"))), React.createElement("li", undefined, ReasonReact.element(/* None */0, /* None */0, Link.make("/publish", /* None */0, /* None */0, /* array */[Vrroom.text("Get Published")]))))), React.createElement("section", undefined, React.createElement("h1", undefined, Vrroom.text("Made with")), React.createElement("ul", undefined, React.createElement("li", undefined, React.createElement("a", {
                                      href: "https://npms.io/"
                                    }, Vrroom.text("npms.io"))), React.createElement("li", undefined, React.createElement("a", {
                                      href: "https://www.gatsbyjs.org/"
                                    }, Vrroom.text("Gatsby"))), React.createElement("li", undefined, React.createElement("a", {
                                      href: "https://reasonml.github.io/reason-react/"
                                    }, Vrroom.text("ReasonReact"))), React.createElement("li", undefined, React.createElement("a", {
                                      href: "https://github.com/bucklescript/bucklescript"
                                    }, Vrroom.text("BuckleScript"))), React.createElement("li", undefined, React.createElement("a", {
                                      href: "https://github.com/threepointone/glamor"
                                    }, Vrroom.text("glamor"))))), React.createElement("section", undefined, React.createElement("h1", undefined, Vrroom.text("Reason")), React.createElement("ul", undefined, React.createElement("li", undefined, React.createElement("a", {
                                      href: "https://reasonml.github.io/"
                                    }, Vrroom.text("Reason Homepage"))), React.createElement("li", undefined, React.createElement("a", {
                                      href: "https://reasonml.github.io/guide"
                                    }, Vrroom.text("Reason Guide"))), React.createElement("li", undefined, React.createElement("a", {
                                      href: "https://reasonml.github.io/try"
                                    }, Vrroom.text("Reason Playground"))))), React.createElement("section", undefined, React.createElement("a", {
                              href: "https://www.algolia.com"
                            }, context >= 431720585 ? React.createElement("img", {
                                    className: FooterStyles.algoliaLogo,
                                    src: "/search-by-algolia-white.svg"
                                  }) : React.createElement("img", {
                                    className: FooterStyles.algoliaLogo,
                                    src: "/search-by-algolia.svg"
                                  })))));
    });
  return newrecord;
}

var Styles = 0;

exports.Styles    = Styles;
exports.component = component;
exports.make      = make;
/* component Not a pure module */