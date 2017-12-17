open Glamor

let root = css [
]

let header = css [
  margin "1.45rem";

  Selector("& > div", [ (* matches width container *)
    display "flex";

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
  ]);
]

let widthContainer = css [
  margin "0 auto";
  maxWidth "960px";
  padding "0 1.45rem";
]

let title = css [
  color Colors.primary;
  margin "0";
  fontVariant "small-caps";
  fontSize "1.5em";
  lineHeight "1.1";
  display "flex";
  alignItems "center";

  Selector("&:hover > svg", [
    transform "rotateZ(15deg)";
    cursor "pointer";
  ])
]

let logo = css [
  height "1.5em";
  fill Colors.primary;
  margin "0 1em";
  transition "transform 100ms ease-in-out";
]