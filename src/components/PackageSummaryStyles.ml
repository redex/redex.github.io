open! Css

let root = 
  let common = [
    display Flex;
    justifyContent SpaceBetween;
    unsafe "padding" ".5em 1em";
    marginBottom (em 0.5);
    boxShadow Theme.Shadow.panel;

    selector "& a" [
      color Theme.Color.link;
      fontSize (em 1.1);
      textDecoration None;
    ];
  ] in function
  | "unpublished" -> style (common @ [
      unsafe "background" Theme.Panel.crosshatchBackground;
    ])
  | _ -> style (common @ [
      backgroundColor Theme.Panel.Color.background;
    ])


let left = style [

]

let version = style [
  fontSize (em 0.85);
  fontStyle Italic;
  marginLeft (em 0.5);
]

let unpublishedLabel = function
| "unpublished" -> style [
    fontSize (em 0.85);
    fontStyle Italic;
    marginLeft (em 0.5);
    color Theme.Color.bad;
  ]
| _ -> style [
    display None;
  ]

let description = style [
  (*whiteSpace "nowrap";*)
  unsafe "textOverflow" "ellipsis";
  overflow Hidden;
]

let tagsIcon = style [
  opacity 0.25;
]

let right = style [
  textAlign Right;
]

let updated = style [
  opacity 0.5;
  fontSize (em 0.85);
  unsafe "whiteSpace" "nowrap";
]

let license = style [
  opacity 0.5;
  fontSize (em 0.85);
  unsafe "whiteSpace" "nowrap";
]

let nolicense = style [
  color Theme.Color.bad;
  fontSize (em 0.85);
  unsafe "whiteSpace" "nowrap";
]

let stars = style [
  opacity 0.5;
  fontSize (em 0.85);
  unsafe "whiteSpace" "nowrap";
]

let starIcon = style [
  marginLeft (em 0.25);
  transform (translateY (px (-1)));
  opacity 0.5;
]