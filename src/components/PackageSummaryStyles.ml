open Glamor

let root = [
  display "flex";
  justifyContent "space-between";
  padding ".5em 1em";
  marginBottom ".5em";
  boxShadow "1px 1px 0 1px rgba(0, 0, 0, .05)";

  Selector("& a", [
    color "#DD4C39";
    fontSize "1.1em";
    textDecoration "none";
  ]);
]

let published = css (root @ [
  background "white";
])

let unpublished = css (root @ [
  background "repeating-linear-gradient(
    -45deg,
    white,
    white 10px,
    whiteSmoke 10px,
    whiteSmoke 12px
  )";
])

let left = css [

]

let version = css [
  fontSize ".85em";
  fontStyle "italic";
  marginLeft ".5em";
]

let unpublishedLabel = css [
  fontSize ".85em";
  fontStyle "italic";
  marginLeft ".5em";
  color "rgba(255, 0, 0, .75)";
]

let description = css [
  (*whiteSpace "nowrap";*)
  textOverflow "ellipsis";
  overflow "hidden";
]

let tagsIcon = css [
  fill "#aaa"; 
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
  color "rgba(255, 0, 0, .75)";
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
  fill "#888"; 
]