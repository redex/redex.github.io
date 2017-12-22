open Css

let root = style [
  position Relative;
  fontSize (em 0.85);
  unsafe "whiteSpace" "nowrap";
  marginLeft (em 0.5);
  unsafe "cursor" "help";

  selector "& > .popover" [
    display Block;
    position Absolute;
    bottom (pct 100.);
    zIndex 10;
    backgroundColor white;
    boxShadow (shadow ~x:1 ~y:1 (rgba 0 0 0 0.1))
  ];

  selector"&:hover > .popover" [
    display Block;
  ];
]

let icon = style [
  marginLeft (em 0.25);
  transform (translateY (px (-1)));
]

let tooltip = style [
  backgroundColor white;
  boxShadow (shadow ~x:1 ~y:1 ~spread:1 ~blur:3 (rgba 0 0 0 0.1));
  unsafe "padding" ".5em 1em";

  selector "& div" [
    unsafe "whiteSpace" "nowrap";
  ]
]

let factor = style [
  display Flex;
  justifyContent SpaceBetween;

  selector "& > span:last-child" [
    marginLeft (em 1.);
  ]
]