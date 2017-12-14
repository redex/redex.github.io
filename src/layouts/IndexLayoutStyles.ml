open Glamor

let root = css [
]

let header = css [
]

let widthContainer = css [
  margin "0 auto";
  maxWidth "960px";
  padding "1.0875rem 1.45rem";
]

let title = css [
  margin "0";

  Selector("& > a", [
    color "#DD4C39";
    textDecoration "none";
  ])
]