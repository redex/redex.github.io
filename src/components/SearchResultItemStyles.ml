open! Css
open CssEx

let root = fun type_ isFocused ->
  style [
    unsafe "label" "search-result-item";
    display Flex;
    justifyContent SpaceBetween;
    unsafe "padding" "1.1em 2em";
    borderTop (px 1) Solid Theme.Color.subtleBorder;
    cursor Pointer;

    backgroundColor
      (if_ isFocused 
        ((Obj.magic "hsl(6.9, 90%, 90%)"): Css.color)
      |> else_ Theme.Panel.Color.background);

    unsafe "backgroundImage" (if_ (type_ == "unpublished") Theme.Panel.crosshatchBackground);

    hover [
      unsafe "backgroundColor" "hsl(6.9, 90%, 90%)";
    ];

    selector "> *:last-child" [
      textAlign Right;
    ];
  ]

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