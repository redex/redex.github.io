open! Css

let root = style [
  display Flex;
  flexDirection Column;
  backgroundColor Theme.Inverted.Color.background;
  minHeight (vh 100.);
  color Theme.Inverted.Color.text;
]

let header = style [
]

let links = style [
  textAlign Center;
  paddingTop (em 0.5);

  selector "& > a" [
    unsafe "fontVariant" "small-caps";
    textDecoration None;
    textTransform Lowercase;
    unsafe "margin" "0 1em";
    opacity 0.75;

    selector "&:hover" [
      opacity 1.;
    ];
  ];
]

let inactiveLink = style [
  unsafe "opacity" ".25 !important";
  cursor (Custom "default");
]

let widthContainer = style [
  unsafe "margin" "0 auto";
  maxWidth (px 960);
  unsafe "padding" "1.0875rem 1.45rem";
]

let title = style [
  unsafe "margin" "1em 0 0";
  textAlign Center;
  unsafe "fontVariant" "small-caps";
  fontSize (rem 2.5);
  lineHeight (em 1.1);
]

let logo = style [
  display Block;
  unsafe "margin" "0 auto";
  height (em 3.);
  unsafe "fill" (Theme.Inverted.Color.text |> Obj.magic);
]

let footer = style [
  backgroundColor Theme.Color.darkPrimary;
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