open! Css

let root = fun type_ flags -> style [
  unsafe "padding" ".75em 1.5em";
  marginBottom (em 0.5);
  boxShadow Theme.Shadow.panel;
  backgroundColor Theme.Panel.Color.background;
  lineHeight (em 1.45);

  selector "> *" [
    opacity (if flags = [||] then 1. else 0.25);
  ];

  hover [
    selector "> *" [
      opacity 1.;
    ]
  ];

  unsafe "backgroundImage" (if type_ == "unpublished" then Theme.Panel.crosshatchBackground else "none");
]

let header = style [
  display Flex;
  alignItems Baseline;
]

let name = style [
  color Theme.Color.link;
  fontSize (em 1.1);
  textDecorationLine None;

  hover [
    textDecorationLine (Values [Underline]);
  ];
]

let props = style [
  display Flex;
  justifyContent FlexEnd;
  alignItems Baseline;
  unsafe "marginLeft" "auto";

  selector "& > *" [
    marginLeft (em 1.);
  ];
]

let updated = style [
  fontSize (em 0.85);
  unsafe "whiteSpace" "nowrap";
]

let license = style [
  display InlineBlock;
  fontSize (em 0.85);
  unsafe "whiteSpace" "nowrap";
  border (px 1) Solid Theme.Color.text;
  unsafe "padding" "0 1ex";
]

let nolicense = style [
  color Theme.Color.bad;
  fontSize (em 0.85);
  unsafe "whiteSpace" "nowrap";
  border (px 1) Solid Theme.Color.bad;
  unsafe "padding" "0 1ex";
]

let stars = style [
  fontSize (em 0.85);
  unsafe "whiteSpace" "nowrap";
]

let starIcon = style [
  marginLeft (em 0.25);
  transform (translateY (px (-1)));
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