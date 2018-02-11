// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Icon          = require("../bindings/Icon.js");
var Link          = require("../bindings/gatsby/link.js");
var Curry         = require("bs-platform/lib/js/curry.js");
var React         = require("react");
var Vrroom        = require("vrroom/src/Vrroom.bs.js");
var TimeAgo       = require("../bindings/TimeAgo.js");
var ReasonReact   = require("reason-react/src/ReasonReact.js");
var Js_primitive  = require("bs-platform/lib/js/js_primitive.js");
var TopListStyles = require("./TopListStyles.js");

var component = ReasonReact.statelessComponent("TopList");

function make(packages, value, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return ReasonReact.element(/* None */0, /* None */0, Curry._3(Vrroom.Control[/* Map */0][/* make */1], packages, /* None */0, (function ($$package) {
                        return React.createElement("div", {
                                    key: $$package.name,
                                    className: TopListStyles.root
                                  }, React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, Link.make($$package.slug, /* Some */[TopListStyles.name], /* None */0, /* array */[Vrroom.text($$package.name)])), React.createElement("span", {
                                            className: TopListStyles.version
                                          }, Vrroom.text($$package.version))), React.createElement("div", undefined, value >= 500154939 ? React.createElement("div", {
                                              className: TopListStyles.updated
                                            }, ReasonReact.element(/* None */0, /* None */0, TimeAgo.make($$package.updated, /* array */[]))) : ReasonReact.element(/* None */0, /* None */0, Curry._2(Vrroom.Control[/* IfSome */3][/* make */1], Js_primitive.null_undefined_to_opt($$package.stars), (function (stars) {
                                                    return React.createElement("div", {
                                                                className: TopListStyles.stars
                                                              }, Vrroom.text(stars), ReasonReact.element(/* None */0, /* None */0, Icon.Star[/* make */0](/* Some */[TopListStyles.starIcon], /* array */[])));
                                                  })))));
                      })));
    });
  return newrecord;
}

var Styles = 0;

exports.Styles    = Styles;
exports.component = component;
exports.make      = make;
/* component Not a pure module */