open Glamor

let root = [
  display "flex";
  justifyContent "space-between";
  padding ".5em 1em";
  marginBottom ".5em";
  boxShadow Colors.Shadow.panel;

  Selector("& a", [
    color Colors.link;
    fontSize "1.1em";
    textDecoration "none";
  ]);
]

let published = css (root @ [
  background Colors.Panel.background;
])

let unpublished = css (root @ [
  background Colors.Panel.crosshatchBackground;
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
  color Colors.bad;
]

let description = css [
  (*whiteSpace "nowrap";*)
  textOverflow "ellipsis";
  overflow "hidden";
]

let tagsIcon = css [
  opacity ".25";
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
  color Colors.bad;
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
  opacity ".5";
]