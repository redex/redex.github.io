open Glamor

let root = css [
  position "relative";
]

let input = css [
  display "block";
  background "white";
  border "1px solid #eee";
  padding ".25em .5em";
  width "50vw";
  margin "0 auto";
  color "#666";
]

let results = css [
  position "absolute";
  zIndex "10";
  width "100%";
  boxShadow "1px 1px 0 1px rgba(0, 0, 0, .05)";
]