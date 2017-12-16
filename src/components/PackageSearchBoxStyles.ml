open Glamor

let root = css [
  position "relative";
  flex "1";
]

let fakeInput = css [
  display "flex";
  background "white";
  fontSize "1.2em";
  width "100%";
  alignItems "center";
  padding "0 .5em";
]

let searchIcon = css [
  fill Colors.primary;
  opacity ".75"; 
  margin ".5em";
]

let input = css [
  padding ".75em .25em";
  width "100%";
  color Colors.primary;
]

let results = css [
  position "absolute";
  zIndex "10";
  marginTop ".5ex";
  width "100%";
  boxShadow Colors.Shadow.overlay;
  color Colors.text;

  Selector("& > div", [
    margin "0";
    borderTop ("1px solid " ^ Colors.subtleBorder);
  ])
]