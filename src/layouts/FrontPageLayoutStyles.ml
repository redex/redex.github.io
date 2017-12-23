open! Css

let root = style [
  display Flex;
  flexDirection Column;
  backgroundColor Theme.Inverted.Color.background;
  minHeight (vh 100.);
  color Theme.Inverted.Color.text;
]

let header = style [
  margin (em 1.45);
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
  opacity 0.25 |> important;
  cursor (Custom "default");
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
  ]
]

let logo = style [
  display Block;
  unsafe "margin" "0 auto";
  height (em 3.);
  unsafe "fill" (Theme.Inverted.Color.text |> Obj.magic);
]