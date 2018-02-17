open TypedGlamor

let flag style_ ~invert = css [
  display inlineBlock;
  fontSize (em 0.75);
  lineHeight (em 1.6);
  marginRight (em 1.);
  whiteSpace nowrap;
  padding2 ~v:zero ~h:(ex 1.);

  (match style_ with
  | `Heavy -> backgroundColor (if invert then hex "fffc" else Theme.Color.primary)
  | `Light -> border3 (px 1) solid (if invert then hex "fffc" else Theme.Color.primary)
  | `Black -> backgroundColor (if invert then hex "0003" else hex "444e"));

  color
    (match style_ with
    | `Heavy -> if invert then Theme.Color.primary else white
    | `Light -> if invert then white else Theme.Color.primary
    | `Black -> hex "fffd");

  borderRadius (ex 0.5);
]

let flags = css [

]