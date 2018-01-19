open Css

let container = style [
  position Relative;
  display InlineFlex;
  zIndex 50;
]

let tooltip = let size = 0.5 in style [
  position Absolute;
  zIndex 55;
  bottom (pct 100.);
  left (pct 50.);
  transform (translate (pct (-50.)) (em (-.size)));
  color Theme.Color.text;

  selector "&::before" [
    position Absolute;
    width zero;
    height zero;
    bottom (em (-.size));
    left (pct 50.);
    marginLeft (em (-.size));
    transform (translateY (px (-1)));
    borderLeft (em size) Solid (Obj.magic "transparent");
    borderRight (em size) Solid (Obj.magic "transparent");
    borderTop (em size) Solid (hex "eee");
    unsafe "content" " ";
    zIndex 60;
  ]
]