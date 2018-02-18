open TypedGlamor

(* This needs be referred to in somthing that's actually used to be included in the css bundle *)
include GlobalStyles 

let widthContainer = css [
  label "width-container";

  margin2 ~v:zero ~h:auto;
  maxWidth (px 960);
  minWidth (px 359);
  width (pct 100.);
]

let html = css [
  select "& h1" [
    fontSize (rem 2.25);
    fontWeight bold;
    lineHeight (em 1.1);
    marginBottom (rem 1.45);
  ];

  select "& h2" [
    fontSize (rem 1.62671);
    fontWeight bold;
    lineHeight (em 1.1);
    marginBottom (rem 1.45);
  ];

  select "& h3" [
    fontSize (rem 1.38316);
    fontWeight bold;
    lineHeight (em 1.1);
    marginBottom (rem 1.45);
  ];

  select "& h1, & h2, & h3, & h4, & h5" [
    select "& > a.anchor" [
      marginLeft (px (-20));
      paddingRight (px 4);

      select "& > svg" [
        visibility hidden;
      ]
    ];

    hover [
      select "& > a.anchor > svg" [
        visibility visible;
      ];
    ]
  ];

  select "& p" [
    marginBottom (rem 1.45);

    select "& *:last-child" [
      marginBottom zero;
    ];
  ];

  select "& b, & strong" [
    fontWeight bold;
  ];

  select "& i, & em" [
    fontStyle italic;
  ];

  select "& ol, & ul" [
    margin zero;
    marginLeft (rem 1.45);
    marginBottom (rem 1.45);
    unsafe "listStylePosition" "outside";
    unsafe "listStyleImage" "none";
  ];

  select "& li" [
    marginBottom (rem (1.45 /. 2.));

    select "& > ol, & > ul" [
      marginLeft (rem 1.45);
      marginBottom (rem (1.45 /. 2.));
      marginTop (rem (1.45 /. 2.));
    ];

    select "& *:last-child" [
      marginBottom zero;
    ];

    select "& > p" [
      marginBottom (rem (1.45 /. 2.));
    ];
  ];

  select "& ol" [
    unsafe "listStyleType" "decimal";

    select "& li" [
      paddingLeft zero;
    ];
  ];

  select "& ul" [
    unsafe "listStyleType" "disc";

    select "& li" [
      paddingLeft zero;
    ];
  ];

  select "& code" [
    background (hsla (num 0.) 0 0 0.04);
    fontFamilies [
      "'SFMono-Regular'";
      "Consolas";
      "'Roboto Mono'";
      "'Droid Sans Mono'";
      "'Liberation Mono'";
      "Menlo";
      "Courier";
      "monospace"
    ];
    fontSize (rem 0.85);
    lineHeight (rem 1.45);
    padding2 ~v:(em 0.2) ~h:zero;
  ];

  select "& pre" [
    marginBottom (rem 1.45);
    fontSize (rem 0.85);
    lineHeight (rem 1.42);
    background (hsla (num 0.) 0 0 0.04);
    overflow auto;
    unsafe "wordWrap" "normal";
    padding (rem 1.45);

    select "& code" [
      background none;
      lineHeight (em 1.42);
    ];
  ];

  select "& a" [
    color Theme.Color.link;
    textDecoration none;

    hover [
      textDecoration underline
    ];
  ];

  select "& img" [
    maxWidth (pct 100.);
  ];

  select "& .redex-codeblock.m-tabbed" [
    display flex;
    position relative;

    select "& > ul" [
      display flex;
      position absolute;
      flexDirection column;
      margin zero;
      opacity 0.;
      transitions [(AnimatableProperty.opacity, ms 400, easeInOut, ms 200)];
      transforms [translateX (pct (-100.))];
      height (pct 100.);

      select "& > li" [
        cursor pointer;
        margin zero;
        display inlineBlock;
        padding2 ~v:(em 0.35) ~h:(em 0.75);
        color white;
        textTransform lowercase;
        fontVariant smallCaps;

        select "&:not(.s-selected)" [
          opacity 0.5;
          boxShadows [shadow ~inset:true ~x:zero ~y:(px (-4)) ~blur:(px (-2)) ~spread:(px (-2)) (rgba 0 0 0 0.1)] ;

          hover [
            opacity 1.;
          ]
        ];

        select "&.reason" [
          backgroundColor Theme.Color.reason;
        ];
        select "&.ml" [
          backgroundColor Theme.Color.ocaml;
        ];
      ];
    ];

    hover [
      select "& > ul" [
        opacity 1.;
      ]
    ];

    select "& > .codeblock" [
      display none;
      flex_ (int 1);
      maxWidth (pct 100.);

      select "&.s-selected" [
        display block;
      ];

      select "& > pre" [
        marginTop zero;

        select "&.lang-reason" [
          borderLeft3 (px 2) solid Theme.Color.reason
        ];

        select "&.lang-ml" [
          borderLeft3 (px 2) solid Theme.Color.ocaml
        ];
      ];
    ]
  ]
]