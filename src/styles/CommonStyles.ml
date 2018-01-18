open! Css

(* This needs be referred to in somthing that's actually used to be included in the css bundle *)
include GlobalStyles 

let widthContainer = style [
  unsafe "label" "width-container";
  unsafe "margin" "0 auto";
  maxWidth (px 960);
  width (pct 100.);
]

let html = style [
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

  selector "& h1, & h2, & h3, & h4, & h5" [
    selector "& > a.anchor" [
      marginLeft (px (-20));
      paddingRight (px 4);

      selector "& > svg" [
        visibility Hidden;
      ]
    ];

    hover [
      selector "& > a.anchor > svg" [
        visibility Visible;
      ];
    ]
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
    textDecorationLine None;

    selector "&:hover" [
      textDecorationLine (Values [Underline])
    ];
  ];
]