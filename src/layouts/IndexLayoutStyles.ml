open Css

let root = style [
  display Flex;
  flexDirection Column;
  minHeight (vh 100.);

  selector "& p" [
    marginBottom (rem 1.45);
  ];
]

let header = style [
  margin (rem 1.45);

  selector "& > div" [ (* matches width container *)
    display Flex;

    (*
    Selector("& > *", [
      margin "0 1em";

      Selector("&:first-child", [
        marginLeft "0";
      ]);

      Selector("&:last-child", [
        marginRight "0";
      ]);
    ]);
    *)
  ];

]

let title = style [
  display Flex;
  alignItems Center;
  color Theme.Color.primary;
  margin zero;
  unsafe "fontVariant" "small-caps";
  fontSize (em 1.5);
  lineHeight (em 1.1);

  selector "&:hover > svg" [
    transform (rotateZ (deg 15.));
    cursor Pointer;
  ]
]

let logo = style [
  height (em 1.5);
  width (em 1.5);
  unsafe "fill" (Theme.Color.primary |> Obj.magic);
  unsafe "margin" "0 1em";
  transition "transform 100ms ease-in-out";
]