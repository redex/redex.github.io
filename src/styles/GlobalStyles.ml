open! Css

[%%raw "require('glamor-reset')"]

let _reset = begin
  global "*" [
    boxSizing BorderBox;
  ];

  global "*:focus" [
    outlineStyle None
  ];

  global "body" [
    unsafe "lineHeight" "inherit";
    color Theme.Color.text;
  ];

  global "h1, h2, h3" [
    lineHeight (em 1.1);
    fontWeight Normal;
  ];

  global "a" [
    unsafe "color" "inherit";
  ];

  global "button, input, select" [
    unsafe "background" "none";
    unsafe "border" "none";
    unsafe "font" "inherit";
  ];

  global "button::-moz-focus-inner" [
    unsafe "outline" "none";
  ];

  global "ol, ul" [
    unsafe "listStyle" "none";
    margin zero;
    padding zero;
  ];
end

let _global = begin
  global "html" [
    fontSize (px 15);
    lineHeight (em 1.25);
    fontFamily "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif";
    boxSizing BorderBox;
    overflowY Scroll;
  ];

  global "html, body, #___gatsby" [
    backgroundColor Theme.Color.background;
    minHeight (pct 100.);
  ];
end
