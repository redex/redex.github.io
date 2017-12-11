open Glamor

let root = css [
  display "flex";
  justifyContent "space-between";
  border "1px solid #eee";
  background "white";
  padding ".5em 1em";

  Selector("& a", [
    color "#DD4C39";
    fontSize "1.1em";
    textDecoration "none";
  ]);
]

let left = css [

]

let version = css [
  fontSize ".85em";
  fontStyle "italic";
  marginLeft ".5em";
]

let right = css [
  textAlign "right";
]

let updated = css [
  opacity ".5";
  fontSize ".85em";
  whiteSpace "nowrap";
]

let license = css [
  opacity ".5";
  fontSize ".85em";
  whiteSpace "nowrap";
]

let nolicense = css [
  color "red";
  fontSize ".85em";
  whiteSpace "nowrap";
]

let stars = css [
  opacity ".5";
  fontSize ".85em";
  whiteSpace "nowrap";
]

let starIcon = css [
  marginLeft ".25em";
  transform "translateY(-1px)";
]