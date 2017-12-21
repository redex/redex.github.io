open! Css
open CssEx

let root = fun type_ ->
  style [
    display Flex;
    justifyContent SpaceBetween;
    unsafe "padding" ".75em 1.5em";
    marginBottom (em 0.5);
    boxShadow Theme.Shadow.panel;
    backgroundColor Theme.Panel.Color.background;
    lineHeight (em 1.45);

    unsafe "backgroundImage" (if_ (type_ == "unpublished") Theme.Panel.crosshatchBackground);
  ]

let name = style [
  color Theme.Color.link;
  fontSize (em 1.1);
  textDecoration None;

  hover [
    unsafe "textDecoration" "underline";
  ];
]

let version = style [
  fontSize (em 0.85);
  fontStyle Italic;
  marginLeft (em 0.5);
]

let unpublishedLabel = function
| "unpublished" -> style [
    fontSize (em 0.85);
    fontStyle Italic;
    marginLeft (em 0.5);
    color Theme.Color.bad;
  ]
| _ -> style [
    display None;
  ]

let description = style [
  (*whiteSpace "nowrap";*)
  unsafe "textOverflow" "ellipsis";
  overflow Hidden;
  unsafe "margin" ".5ex 0 1ex";
]

let tags = style [
  color Theme.Color.link;

  selector "& a" [
    unsafe "backgroundColor" "hsla(6.9, 90%, 90%, .4)";
  ];
]

let tagsIcon = style [
  opacity 0.25;
]

let props = style [
  display Flex;
  flexDirection Column;
  justifyContent SpaceBetween;
  alignItems FlexEnd;
]

let updated = style [
  opacity 0.75;
  fontSize (em 0.85);
  unsafe "whiteSpace" "nowrap";
]

let license = style [
  display InlineBlock;
  opacity 0.75;
  fontSize (em 0.85);
  unsafe "whiteSpace" "nowrap";
  border (px 1) Solid Theme.Color.text;
  unsafe "padding" "0 1ex";
  unsafe "marginTop" "1ex";
]

let nolicense = style [
  color Theme.Color.bad;
  fontSize (em 0.85);
  unsafe "whiteSpace" "nowrap";
  border (px 1) Solid Theme.Color.bad;
  unsafe "padding" "0 1ex";
]

let stars = style [
  opacity 0.75;
  fontSize (em 0.85);
  unsafe "whiteSpace" "nowrap";
]

let starIcon = style [
  marginLeft (em 0.25);
  transform (translateY (px (-1)));
  opacity 0.75;
]