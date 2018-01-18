open! Css

let root = style [
  display Flex;
  justifyContent SpaceBetween;
  marginBottom (em 0.5);
]

let name = style [
  textDecorationLine None;

  hover [
    textDecorationLine (Values [Underline])
  ];
]

let version = style [
  fontSize (em 0.85);
  fontStyle Italic;
  marginLeft (em 0.5);
  opacity 0.5;
]

let updated = style [
  opacity 0.5;
  fontSize (em 0.85);
  unsafe "whiteSpace" "nowrap";
  opacity 0.75;
]

let stars = style [
  opacity 0.5;
  fontSize (em 0.85);
  unsafe "whiteSpace" "nowrap";
  opacity 0.75;
]

let starIcon = style [
  marginLeft (em 0.25);
  transform (translateY (px (-1)));
  unsafe "fill" (Theme.Inverted.Color.text |> Obj.magic); 
  opacity 0.5;
]