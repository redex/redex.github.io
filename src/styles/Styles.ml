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
module Index = struct

  let keywords = style [
    textAlign Center;
    marginTop (em 3.);
    lineHeight (em 1.5);

    selector "& > a" [
      display InlineBlock;
      unsafe "textDecoration" "none";
      unsafe "margin" "0 1ex";
      unsafe "whiteSpace" "nowrap";

      selector "& > .count" [
        unsafe "marginLeft" ".5ex";
        opacity 0.5;
      ];

      selector "&:hover > .label" [
        unsafe "textDecoration" "underline";
      ];
    ];
  ]

  let links = style [
    textAlign Center;

    selector "& > a" [
      fontSize (rem 0.85);
      textDecoration None;
      unsafe "margin" "0 1em";

      selector "&:hover" [
        opacity 0.75;
      ];
    ];
  ]

  let lists = style [
    display Flex;
    justifyContent SpaceAround;
    marginTop (em 3.);

    selector "& > *" [
      unsafe "padding" "0 1em";
      width (pct 40.);
      minWidth (px 300);

      selector "& > h2" [
        textAlign Center;
        fontSize (em 1.1);
        fontWeight Bold;
        unsafe "margin" ".5em 0";
        textTransform Lowercase;
        unsafe "fontVariant" "small-caps";
        paddingBottom (em 0.5);
        borderBottom (px 1) Solid (rgba 255 255 255 0.5);
      ];

      selector "& > div" [
        background None;
        unsafe "border" "none";
        padding zero;
      ];
    ];
  ]



end
