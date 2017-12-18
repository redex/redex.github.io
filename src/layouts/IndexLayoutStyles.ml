open Css

let root = style [
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
  ]
]

let widthContainer = style [
  unsafe "margin" "0 auto";
  maxWidth (px 960);
  unsafe "padding" "0 1.45rem";
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