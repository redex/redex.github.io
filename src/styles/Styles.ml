open Glamor

[%%raw "require('./reset.css')"]

module Layout = struct

  let header = css [
    background "#DD4C39";
  ]

  let widthContainer = css [
    margin "0 auto";
    maxWidth "960px";
    padding "1.0875rem 1.45rem";
  ]

  let title = css [
    margin "0";

    Selector("& > a", [
      color "white";
      textDecoration "none";
    ])
  ]

end