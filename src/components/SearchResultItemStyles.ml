open! Css

let root = 
  let common = [
    unsafe "label" "search-result-item";
    display Flex;
    justifyContent SpaceBetween;
    unsafe "padding" "1.1em 2em";
    borderTop (px 1) Solid Theme.Color.subtleBorder;
    cursor Pointer;

    hover [
      unsafe "background" "hsl(6.9, 90%, 90%)";
    ];

    selector "> *:last-child" [
      textAlign Right;
    ];
  ] in function
  | "unpublished" -> style (common @ [
      unsafe "background" Theme.Panel.crosshatchBackground;
    ])
  | _ -> style (common @ [
      backgroundColor Theme.Panel.Color.background;
    ])


let name = style [
  color Theme.Color.link;
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

let updated = style [
  opacity 0.5;
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