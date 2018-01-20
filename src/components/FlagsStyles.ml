open Css

let flag style_ ~invert = style [
  display InlineBlock;
  opacity 0.75;
  fontSize (em 0.75);
  lineHeight (em 1.6);
  marginRight (em 1.);
  unsafe "whiteSpace" "nowrap";
  unsafe "padding" "0 1ex";

  (match style_ with
  | `Heavy -> backgroundColor (if invert then white else Theme.Color.primary)
  | `Light -> border (px 1) Solid (if invert then white else Theme.Color.primary));

  Css.color
    (match style_ with
    | `Heavy -> if invert then Theme.Color.primary else white
    | `Light -> if invert then white else Theme.Color.primary);

  borderRadius (ex 0.5);
]

let flags = style [

]