open! Css
open CssEx

let root = fun type_ flags isFocused -> style [
  unsafe "label" "search-result-item";
  display Flex;
  justifyContent SpaceBetween;
  unsafe "padding" "1.1em 2em";
  borderTop (px 1) Solid Theme.Color.subtleBorder;
  cursor Pointer;

  selector "> *" [
    opacity (if Array.length(flags) == 0 || isFocused then 1. else 0.5);
  ];

  hover [
    unsafe "backgroundColor" "hsl(6.9, 0%, 90%)";

    selector "> *" [
      opacity 1.;
    ]
  ];

  backgroundColor
    (if_ isFocused 
      ((Obj.magic "hsl(6.9, 90%, 90%)"): Css.color)
    |> else_ Theme.Panel.Color.background);

  unsafe "backgroundImage" (if_ (type_ == "unpublished") Theme.Panel.crosshatchBackground);

  selector "> *:last-child" [
    textAlign Right;
  ];

  media "(max-width: 600px)" [
    selector "& .platforms" [
      display None;
    ];
  ];
]

let name = style [
  color Theme.Color.link;
]

let version = style [
  fontSize (em 0.85);
  fontStyle Italic;
  marginLeft (em 0.5);

  media "(max-width: 600px)" [
    display None;
  ];
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

  media "(max-width: 450px)" [
    display None;
  ];
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