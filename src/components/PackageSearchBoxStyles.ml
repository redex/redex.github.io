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
  color "#dd4c39";
  alignItems "center";
  padding "0 .5em";
]

let searchIcon = css [
  fill "#dd4c39";
  opacity ".75"; 
  margin ".5em";
]

let input = css [
  display "block";
  background "white";
  border "none";
  padding ".75em .25em";
  width "100%";
  color "#dd4c39";
]

let results = css [
  position "absolute";
  zIndex "10";
  width "100%";
  boxShadow "1px 1px 0 1px rgba(0, 0, 0, .05)";

  Selector("& > div", [
    margin "0";
    borderTop "1px solid #eee";
  ])
]