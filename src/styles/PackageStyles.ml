open! Css

let root = style [
  marginBottom (em 1.45);
]

let header = 
  let common = [
    unsafe "label" "header";
    backgroundColor Theme.Inverted.Color.background;
    (*background "linear-gradient(to bottom right, hsl(6.9, 70.7%, 52%), hsl(6.9, 70.7%, 58%))";*)
    color Theme.Inverted.Color.text;
    unsafe "padding" "2em 4em";
  ] in function
  | "unpublished" -> style (common @ [
      unsafe "background" Theme.Inverted.crosshatchBackground;
    ])
  | _ -> style common

let props = style [
  display Flex;
  justifyContent FlexEnd;
  alignItems Baseline;

  selector "& > *" [
    marginLeft (em 1.);
  ];
]

let title = style [
  unsafe "padding" "1em 0 0";
  display Flex;
  alignItems Baseline;
]

let owner = style [
  display Block;
  opacity 0.75;
  fontSize (em 0.85);
  unsafe "fontVariant" "small-caps";
]

let name = style [
  fontSize (rem 1.5);
  fontWeight Bold;
  textDecorationLine None;
  lineHeight (em 1.45);

  selector "&:hover" [
    textDecorationLine (Values [Underline])
  ];
]

let fields = style [
]

let version = style [
  fontSize (em 0.85);
  fontStyle Italic;
  marginLeft (em 0.5);
  opacity 0.75;
]

let unpublishedLabel = style [
  fontSize (em 0.85);
  fontStyle Italic;
  marginLeft (em 0.5);
  color Theme.Color.bad;
  backgroundColor Theme.Inverted.Color.text;
  unsafe "padding" ".2ex 1ex";
  unsafe "borderRadius" "1.4ex";
  alignSelf Center;
]

let description = style [
  (*whiteSpace "nowrap";*)
  marginBottom (em 0.5);
  unsafe "textOverflow" "ellipsis";
  overflow Hidden;
  opacity 0.75;
]

let tags = style [
  selector "& span" [
    fontSize (em 0.85);
    backgroundColor Theme.Inverted.Color.block;
    unsafe "padding" "0 1ex";
    opacity 1.;

    selector "&:hover" [
      backgroundColor Theme.Inverted.Color.highlightedBlock;
      cursor Pointer;
    ];
  ];
]

let tagsIcon = style [
  opacity 0.25;
]

let right = style [
  textAlign Right;
]

let updated = style [
  fontSize (em 0.85);
  unsafe "whiteSpace" "nowrap";
]

let license = style [
  fontSize (em 0.85);
  unsafe "whiteSpace" "nowrap";
  border (px 1) Solid Theme.Inverted.Color.text;
  unsafe "padding" "0 1ex";
]

let nolicense = style [
  color Theme.Color.bad;
  fontSize (em 0.85);
  unsafe "whiteSpace" "nowrap";
  fontWeight Bold;
  backgroundColor Theme.Inverted.Color.text;
  unsafe "padding" "0 1ex";
  unsafe "borderRadius" "1.4ex";
]

let stars = style [
  fontSize (em 0.85);
  unsafe "whiteSpace" "nowrap";
]

let starIcon = style [
  marginLeft (em 0.25);
  transform (translateY (px (-1)));
  opacity 0.5;
]

let links = style [
  marginTop (em 3.);

  selector "& > a" [
    textDecorationLine None;
    marginRight (em 2.);
    unsafe "fontVariant" "small-caps";

    selector "&:hover" [
      textDecorationLine (Values [Underline])
    ];

    selector "&:not([href])" [
      textDecorationLine None;
      opacity 0.25;
    ];
  ];
]

let readme = merge [
  CommonStyles.html;
  style [
    backgroundColor Theme.Panel.Color.background;
    unsafe "padding" "2em 4em";
  ]
]