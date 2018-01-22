open Css


let root isPublished= style [
  fontSize (em 0.85);
  fontStyle Italic;
  marginLeft (em 0.5);

  selector "> div" (
    if not isPublished then [
      textDecorationLine (Values [LineThrough])
    ] else []);
]

let tooltip = style [
  backgroundColor white;
  boxShadow (shadow ~x:1 ~y:1 ~spread:1 ~blur:3 (rgba 0 0 0 0.1));
  unsafe "padding" ".5em 1em";

  selector "& div" [
    unsafe "whiteSpace" "nowrap";
  ]
]