open Css

let flag style_ ~invert = style [
  display InlineBlock;
  fontSize (em 0.75);
  lineHeight (em 1.6);
  marginRight (em 1.);
  unsafe "whiteSpace" "nowrap";
  unsafe "padding" "0 1ex";

  (match style_ with
  | `Heavy -> backgroundColor (if invert then hex "fffc" else Theme.Color.primary)
  | `Light -> border (px 1) Solid (if invert then hex "fffc" else Theme.Color.primary)
  | `Black -> backgroundColor (if invert then hex "0003" else hex "444e"));

  Css.color
    (match style_ with
    | `Heavy -> if invert then Theme.Color.primary else white
    | `Light -> if invert then white else Theme.Color.primary
    | `Black -> hex "fffd");

  borderRadius (ex 0.5);
]

let flags = style [

]