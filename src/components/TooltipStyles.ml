open TypedGlamor

let container = css [
  position relative;
  display inlineFlex;
  zIndex (int 50);
]

let tooltip = let size = 0.5 in css [
  position absolute;
  zIndex (int 55);
  offsetBottom (pct 100.);
  offsetLeft (pct 50.);
  transforms [translate (pct (-50.)) (em (-.size))];
  color Theme.Color.text;

  select "&::before" [
    position absolute;
    width zero;
    height zero;
    offsetBottom (em (-.size));
    offsetLeft (pct 50.);
    marginLeft (em (-.size));
    transforms [translateY (px (-1))];
    borderLeft3 (em size) solid transparent;
    borderRight3 (em size) solid transparent;
    borderTop3 (em size) solid (hex "eee");
    unsafe "content" " ";
    zIndex (int 60);
  ]
]