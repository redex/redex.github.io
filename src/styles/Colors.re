let primary = "#dd4c39";
let darkPrimary = "hsl(6.9, 65%, 50%)";

let background = "whiteSmoke";
let text = "#444";
let link = primary;

let subtleBorder = "#eee";

let bad = "rgba(255, 0, 0, .75)";

module Panel = {
  let background = "white";

  let crosshatchBackground = "repeating-linear-gradient(
    -45deg,
    white,
    white 10px,
    whiteSmoke 10px,
    whiteSmoke 12px
  )";
};

module Inverted = {
  let background = primary;

  let crosshatchBackground = "repeating-linear-gradient(
    -45deg,
    hsl(6.9, 70.7%, 54%),
    hsl(6.9, 70.7%, 54%) 10px,
    hsl(6.9, 70.7%, 58%) 10px,
    hsl(6.9, 70.7%, 58%) 12px
  )";

  let text = "white";

  let block = "rgba(255, 255, 255, .1)";
  let highlightedBlock = "rgba(255, 255, 255, .2)";
};

module Shadow = {
  let overlay = "1ex 1ex 1em 0 rgba(0, 0, 0, .1)";
  let panel = "1px 1px 0 1px rgba(0, 0, 0, .05)";
}