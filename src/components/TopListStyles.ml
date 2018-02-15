open TypedGlamor

let root = css [
  display flex;
  justifyContent spaceBetween;
  marginBottom (em 0.5);
]

let name = css [
  textDecoration none;

  hover [
    textDecoration underline
  ];
]

let version = css [
  fontSize (em 0.85);
  fontStyle italic;
  marginLeft (em 0.5);
  opacity 0.5;
]

let updated = css [
  opacity 0.5;
  fontSize (em 0.85);
  whiteSpace nowrap;
  opacity 0.75;
]

let stars = css [
  opacity 0.5;
  fontSize (em 0.85);
  whiteSpace nowrap;
  opacity 0.75;
]

let starIcon = css [
  marginLeft (em 0.25);
  transforms [translateY (px (-1))];
  unsafe "fill" (Theme.Inverted.Color.text |> Obj.magic); 
  opacity 0.5;
]