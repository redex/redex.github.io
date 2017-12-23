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
        textDecoration None;
        fontSize (rem 0.85);
        opacity 0.75;

        selector "&:hover" [
          opacity 1.;
        ];
      ];
    ];
];
]

let algoliaLogo = style [
  height (em 1.);
  opacity 0.75;
]