open! Css

let root = fun ~isFlagged -> style [
  unsafe "padding" ".75em 1.5em";
  marginBottom (em 0.5);
  lineHeight (em 1.45);

  if isFlagged then selector "&" [
    boxShadow Theme.Shadow.panel;
    backgroundColor Theme.Panel.Color.background;
  ] else  selector "&" [
    opacity 0.5;
  ];

  hover [
    opacity 1.;
  ];

  media "(max-width: 600px)" [
    selector "& .version" [
      display None;
    ];

    selector "& .platforms" [
      display None;
    ];
  ];
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

  media "(max-width: 600px)" [
    display None;
  ];
]

let license = style [
  display InlineBlock;
  fontSize (em 0.85);
  unsafe "whiteSpace" "nowrap";
  border (px 1) Solid Theme.Color.text;
  unsafe "padding" "0 1ex";

  media "(max-width: 600px)" [
    display None;
  ];
]

let nolicense = style [
  color Theme.Color.bad;
  fontSize (em 0.85);
  unsafe "whiteSpace" "nowrap";
  border (px 1) Solid Theme.Color.bad;
  unsafe "padding" "0 1ex";

  media "(max-width: 600px)" [
    display None;
  ];
]

let stars = style [
  fontSize (em 0.85);
  unsafe "whiteSpace" "nowrap";

  media "(max-width: 450px)" [
    display None;
  ];
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