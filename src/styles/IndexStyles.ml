open! Css

  let root = style [
    margin (em 1.45);
  ]

  let keywords = style [
    textAlign Center;
    marginTop (em 3.);
    lineHeight (em 1.5);

    selector "& > a" [
      display InlineBlock;
      textDecorationLine None;
      unsafe "margin" "0 1ex";
      unsafe "whiteSpace" "nowrap";

      selector "& > .count" [
        unsafe "marginLeft" ".5ex";
        opacity 0.5;
      ];

      selector "&:hover > .label" [
        textDecorationLine (Values [Underline])
      ];
    ];
  ]

  let links = style [
    textAlign Center;

    selector "& > a" [
      fontSize (rem 0.85);
      textDecorationLine None;
      unsafe "margin" "0 1em";

      selector "&:hover" [
        opacity 0.75;
      ];
    ];
  ]

  let lists = style [
    display Flex;
    justifyContent SpaceAround;
    marginTop (em 3.);

    selector "& > *" [
      unsafe "padding" "0 1em";
      width (pct 40.);
      minWidth (px 300);

      selector "& > h2" [
        textAlign Center;
        fontSize (em 1.1);
        fontWeight Bold;
        unsafe "margin" ".5em 0";
        textTransform Lowercase;
        unsafe "fontVariant" "small-caps";
        paddingBottom (em 0.5);
        borderBottom (px 1) Solid (rgba 255 255 255 0.5);
      ];

      selector "& > div" [
        background None;
        unsafe "border" "none";
        padding zero;
      ];
    ];
  ]