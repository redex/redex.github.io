open! Css

let root = style [
  display Flex;
  alignSelf Baseline;
  transform (translateY (px 2));
  marginLeft (em 0.5);
  opacity 0.5;

  selector "& svg" [
    unsafe "fill" "currentColor";
    height (em 1.);
    width (em 1.)
  ];

  hover [
    opacity 1.;
  ];
]

let tooltip = style [
  backgroundColor white;
  boxShadow (shadow ~x:1 ~y:1 ~spread:1 ~blur:3 (rgba 0 0 0 0.1));
  unsafe "padding" ".5em 1em";

  selector "& div" [
    unsafe "whiteSpace" "nowrap";

    selector "& svg" [
      unsafe "fill" "currentColor";
      height (em 1.);
      width (em 1.);
      marginRight (em 0.5);
      unsafe "vertical-align" "middle";
      transform (translateY (px (-1)));
    ];
  ]
]