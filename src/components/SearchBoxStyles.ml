open Css

let root = style [
  position Relative;
  flex 1;
]

let fakeInput = style [
  display Flex;
  backgroundColor Theme.Panel.Color.background;
  fontSize (em 1.2);
  width (pct 100.);
  alignItems Center;
  unsafe "padding" "0 .5em";
]

let searchIcon = style [
  unsafe "fill" (Theme.Color.primary |> Obj.magic);
  opacity 0.75; 
  margin (em 0.5);
]

let input = style [
  unsafe "padding" ".75em .25em";
  width (pct 100.);
  color Theme.Color.primary;

  selector "::placeholder" [
    color Theme.Color.primary;
  ];
]

let results = style [
  position Absolute;
  zIndex 10;
  unsafe "marginTop" ".5ex";
  width (pct 100.);
  boxShadow Theme.Shadow.overlay;
  color Theme.Color.text;

  selector "& > div" [
    margin zero;
    borderTop (px 1) Solid Theme.Color.subtleBorder;

  ]
]

let footer = style [
  backgroundColor white;
  textAlign Right;

  selector "> a" [
    opacity 0.5;

    hover [
      opacity 0.75;
    ]
  ]
]

let algoliaLogo = style [
  height (em 0.85);
  margin3 ~top:(em 0.5) ~h:(em 2.) ~bottom:(em 0.1);
]