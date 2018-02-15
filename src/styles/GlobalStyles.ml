open TypedGlamor

[%%raw "require('glamor-reset')"]

let _reset = begin
  global "*" [
    unsafe "boxSizing" "border-box";
  ];

  global "*:focus" [
    outlineStyle none
  ];

  global "body" [
    lineHeight inherit_;
    color Theme.Color.text;
  ];

  global "h1, h2, h3" [
    lineHeight (em 1.1);
    fontWeight normal;
  ];

  global "a" [
    color inherit_;
  ];

  global "button, input, select" [
    background none;
    border none;
    font inherit_;
  ];

  global "button::-moz-focus-inner" [
    outline none;
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
    fontFamilies [
      "-apple-system";
      "BlinkMacSystemFont";
      "Segoe UI";
      "Roboto";
      "Oxygen";
      "Ubuntu";
      "Cantarell";
      "Fira Sans";
      "Droid Sans";
      "Helvetica Neue";
      "sans-serif"
    ];
    unsafe "boxSizing" "border-box";
    unsafe "overflowY" "scroll";
  ];

  global "html, body, #___gatsby" [
    backgroundColor Theme.Color.background;
    minHeight (pct 100.);
  ];
end
