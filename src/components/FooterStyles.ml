open! Css

let root context = style [
  backgroundColor
    (match context with
    | `Front -> Theme.Color.darkPrimary
    | `Index -> Theme.Color.darkBackground
    );

  unsafe "marginTop" "auto";

  selector "& > div" [ (* matches the inner width container *)
    display Flex;
    padding (em 1.45);
    paddingTop (em 1.);

    selector "& > section" [
      opacity 0.65;
      transition "opacity" ~duration:500;
      width (pct 20.);

      selector "&:last-child" [
        opacity 0.75;
        unsafe "marginLeft" "auto";
        alignSelf FlexEnd;
        textAlign Right;
      ];

      selector "&:hover" [
        opacity 1.;
      ];

      selector "& h1" [
        fontSize (em 0.85);
        textTransform Lowercase;
        unsafe "fontVariant" "small-caps";
        opacity 0.5;
        marginBottom (em 0.35);
      ];

      selector "& a" [
        textDecorationLine None;
        fontSize (rem 0.85);
        opacity 0.75;
        paddingRight (em 0.5);

        selector "&:hover" [
          opacity 1.;
        ];
      ];
    ];

    media "(max-width: 600px)" [
      selector "& > section" [
        width (pct 25.);
      ]
    ];

    media "(max-width: 450px)" [
      flexDirection Column;
      selector "& > section" [
        width auto;
      ]
    ];

  ];
]

let algoliaLogo = style [
  height (em 1.);
  opacity 0.75;
]