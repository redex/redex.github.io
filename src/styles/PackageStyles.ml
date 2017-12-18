open Css

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
  textDecoration None;
  lineHeight (em 1.45);

  selector "&:hover" [
    unsafe "textDecoration" "underline"
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
    textDecoration None;
    marginRight (em 2.);
    unsafe "fontVariant" "small-caps";

    selector "&:hover" [
      unsafe "textDecoration" "underline";
    ];

    selector "&:not([href])" [
      textDecoration None;
      opacity 0.25;
    ];
  ];
]






let readme = style [
  backgroundColor Theme.Panel.Color.background;
  unsafe "padding" "2em 4em";

  selector "& h1" [
    fontSize (rem 2.25);
    fontWeight Bold;
    lineHeight (em 1.1);
    marginBottom (rem 1.45);
  ];

  selector "& h2" [
    fontSize (rem 1.62671);
    fontWeight Bold;
    lineHeight (em 1.1);
    marginBottom (rem 1.45);
  ];

  selector "& h3" [
    fontSize (rem 1.38316);
    fontWeight Bold;
    lineHeight (em 1.1);
    marginBottom (rem 1.45);
  ];

  selector "& p" [
    marginBottom (rem 1.45);

    selector "& *:last-child" [
      marginBottom zero;
    ];
  ];

  selector "& b, & strong" [
    fontWeight Bold;
  ];

  selector "& i, & em" [
    fontStyle Italic;
  ];

  selector "& ol, & ul" [
    margin zero;
    marginLeft (rem 1.45);
    marginBottom (rem 1.45);
    unsafe "listStylePosition" "outside";
    unsafe "listStyleImage" "none";
  ];

  selector "& li" [
    marginBottom (rem (1.45 /. 2.));

    selector "& > ol, & > ul" [
      marginLeft (rem 1.45);
      marginBottom (rem (1.45 /. 2.));
      marginTop (rem (1.45 /. 2.));
    ];

    selector "& *:last-child" [
      marginBottom zero;
    ];

    selector "& > p" [
      marginBottom (rem (1.45 /. 2.));
    ];
  ];

  selector "& ol" [
    unsafe "listStyleType" "decimal";

    selector "& li" [
      paddingLeft zero;
    ];
  ];

  selector "& ul" [
    unsafe "listStyleType" "disc";

    selector "& li" [
      paddingLeft zero;
    ];
  ];

  selector "& code" [
    unsafe "background" "hsla(0, 0%, 0%, 0.04)";
    fontFamily "'SFMono-Regular', Consolas, 'Roboto Mono', 'Droid Sans Mono', 'Liberation Mono', Menlo, Courier, monospace";
    fontSize (rem 0.85);
    lineHeight (rem 1.45);
    unsafe "padding" ".2em 0";
  ];

  selector "& pre" [
    marginBottom (rem 1.45);
    fontSize (rem 0.85);
    lineHeight (rem 1.42);
    unsafe "background" "hsla(0, 0%, 0%, 0.04)";
    borderRadius (px 3);
    overflow Auto;
    unsafe "wordWrap" "normal";
    padding (rem 1.45);

    selector "& code" [
      background None;
      lineHeight (em 1.42);
    ];
  ];

  selector "& a" [
    color Theme.Color.link;
    textDecoration None;

    selector "&:hover" [
      unsafe "textDecoration" "underline";
    ];
  ];

]