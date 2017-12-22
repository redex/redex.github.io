type client;
type index;

[@bs.module] external makeClient : (string, string) => client = "algoliasearch";

module Helper = {
  type t;
  type results('a) = {.
    "hits": array(Js.Json.t)
  };
  type state;

  [@bs.module] external make : (client, string) => t = "algoliasearch-helper";

  [@bs.send.pipe: t] external search : unit => t = "";
  [@bs.send.pipe: t] external setQuery : string => t = "";
  [@bs.send.pipe: t] external setIndex : string => t = "";
  [@bs.send.pipe: t] external setPage : int => t = "";
  [@bs.send.pipe: t] external nextPage : unit => t = "";
  [@bs.send.pipe: t] external previousPage : unit => t = "";
  [@bs.send.pipe: t] external on : ([@bs.string] [
      | `result((results('a), state) => unit)
    ]) => t = "";

};