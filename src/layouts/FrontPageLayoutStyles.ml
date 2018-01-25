open! Css

let root = style [
  display Flex;
  flexDirection Column;
  backgroundColor Theme.Inverted.Color.background;
  minHeight (vh 100.);
  color Theme.Inverted.Color.text;
]

let topNav showWhenBurger = style [
  label "topNav";

  selector "& > div" [ (* selects width container *)
    display Flex;
    textAlign Center;
    unsafe "padding" "0.5em 1.45em";

    selector "& > .left" [
      flex 1;
    ];

    selector "& > .right" [
      flex 1;
      textAlign Right;
    ];

    selector "& a" [
      unsafe "fontVariant" "small-caps";
      textDecorationLine None;
      textTransform Lowercase;
      unsafe "margin" "0 1em";
      opacity 0.75;

      selector "&:hover" [
        opacity 1.;
      ];
    ];

    media "(max-width: 600px)" [
      if showWhenBurger then
        transform (translateY zero)
      else
        transform (translateY (pct (-100.)));

      position Absolute;
      zIndex 150;
      paddingRight (em 3.5);
      transition ~duration:250 "transform";

      flexDirection Column;
      backgroundColor Theme.Color.darkPrimary;

      selector "& > .left" [
        display None;
      ];

      selector "& > *" [
        textAlign Right;
        fontSize (em 1.25);
        lineHeight (em 1.5);
      ];

      selector "& > .right" [
        marginTop (em 0.75);
        marginBottom (em 0.75);
      ];
    ];
  ];
]

let burger = style [
  position Absolute;
  right zero;
  zIndex 200;
  display None;
  unsafe "padding" ".5em .75em";
  fontSize (em 1.5);

  media "(max-width: 600px)" [
    display Block;
  ]
]

let inactiveLink = style [
  opacity 0.25 |> important;
  cursor (Custom "default");
]

let publishLink = style [
  flex 1;
  fontSize (em 0.85);
  unsafe "whiteSpace" "nowrap";
  outline (px 1) Solid Theme.Inverted.Color.text;
  unsafe "padding" ".5ex 1.5ex";

  selector "&:hover" [
    outline (px 1) Solid Theme.Inverted.Color.text;
  ];
]

let header = style [
  margin (em 1.45);
]

let title = style [
  unsafe "margin" "1em 0 0";
  textAlign Center;
  unsafe "fontVariant" "small-caps";
  fontSize (rem 2.5);
  lineHeight (em 1.1);
  color (hex "fff6");

  selector "& > em" [
    fontStyle Normal;
    color white;
  ];

  media "(max-width: 600px)" [
    fontSize (rem 2.);
  ];

 media "(max-width: 450px)" [
    fontSize (rem 1.5);
  ];
]

let logo = style [
  display Block;
  unsafe "margin" "0 auto";
  height (em 3.);
  unsafe "fill" (Theme.Inverted.Color.text |> Obj.magic);
]