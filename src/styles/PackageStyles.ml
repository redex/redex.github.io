open Glamor

let header = css [
  background "#dd4c39";
  (*background "linear-gradient(to bottom right, hsl(6.9, 70.7%, 52%), hsl(6.9, 70.7%, 58%))";*)
  color "white";
  padding "2em 4em";
]

let unpublished = css [
  background "repeating-linear-gradient(
    -45deg,
    hsl(6.9, 70.7%, 54%),
    hsl(6.9, 70.7%, 54%) 10px,
    hsl(6.9, 70.7%, 58%) 10px,
    hsl(6.9, 70.7%, 58%) 12px
  )";
]

let props = css [
  display "flex";
  justifyContent "flex-end";
  alignItems "baseline";

  Selector("& > *", [
    marginLeft "1em";
  ])
]

let title = css [
  padding "1em 0 0";
  display "flex";
  alignItems "baseline";
]

let owner = css [
  display "block";
  opacity ".75";
  fontSize ".85em";
  fontVariant "small-caps";
]

let name = css [
  fontSize "1.5rem";
  fontWeight "bold";
  color "white";
  textDecoration "none";
  lineHeight "1.45";

  Selector("&:hover", [
    textDecoration "underline"
  ]);
]

let fields = css [
]

let version = css [
  fontSize ".85em";
  fontStyle "italic";
  marginLeft ".5em";
  opacity ".75";
]

let unpublishedLabel = css [
  fontSize ".85em";
  fontStyle "italic";
  marginLeft ".5em";
  color "hsl(0, 100%, 50%)";
  color "#dd4d39";
  background "white";
  padding ".2ex 1ex";
  borderRadius "1.4ex";
  alignSelf "center";
]

let description = css [
  (*whiteSpace "nowrap";*)
  marginBottom ".5em";
  textOverflow "ellipsis";
  overflow "hidden";
  opacity ".75";
]

let tags = css [
  Selector("& span", [
    fontSize ".85em";
    background "rgba(255, 255, 255, .1)";
    color "white !important";
    padding "0 1ex";
    opacity "1";
    borderLeft "2px solid white";

    Selector("&:hover", [
      background "rgba(255, 255, 255, .2)";
      cursor "pointer";
    ]);
  ]);
]

let tagsIcon = css [
  fill "rgba(255, 255, 255, .25)"; 
]

let right = css [
  textAlign "right";
]

let updated = css [
  fontSize ".85em";
  whiteSpace "nowrap";
]

let license = css [
  fontSize ".85em";
  whiteSpace "nowrap";
  border "1px solid white";
  padding "0 1ex";
]

let nolicense = css [
  color "rgba(255, 0, 0, .75)";
  fontSize ".85em";
  whiteSpace "nowrap";
  fontWeight "bold";
  background "white";
  padding "0 1ex";
  borderRadius "1.4ex";
]

let stars = css [
  fontSize ".85em";
  whiteSpace "nowrap";
]

let starIcon = css [
  marginLeft ".25em";
  transform "translateY(-1px)";
  fill "rgba(255, 255, 255, .5)"; 
]

let links = css [
  marginTop "3em";

  Selector("& > a", [
    color "white";
    textDecoration "none";
    marginRight "2em";
    fontVariant "small-caps";

    Selector("&:hover", [
      textDecoration "underline";
    ]);

    Selector("&:not([href])", [
      textDecoration "none";
      opacity ".25";
    ]);
  ]);
]






let readme = css [
  background "white";
  padding "2em 4em";

  Selector("& h1", [
    fontSize "2.25rem";
    fontWeight "bold";
    lineHeight "1.1";
    marginBottom "1.45rem";
  ]);

  Selector("& h2", [
    fontSize "1.62671rem";
    fontWeight "bold";
    lineHeight "1.1";
    marginBottom "1.45rem";
  ]);

  Selector("& h3", [
    fontSize "1.38316rem";
    fontWeight "bold";
    lineHeight "1.1";
    marginBottom "1.45rem";
  ]);

  Selector("& p", [
    marginBottom "1.45rem";

    Selector("& *:last-child", [
      marginBottom "0";
    ]);
  ]);

  Selector("& b, & strong", [
    fontWeight "bold";
  ]);

  Selector("& i, & em", [
    fontStyle "italic";
  ]);

  Selector("& ol, & ul", [
    margin "0";
    marginLeft "1.45rem";
    marginBottom "1.45rem";
    listStylePosition "outside";
    listStyleImage "none";
  ]);

  Selector("& li", [
    marginBottom "calc(1.45rem / 2)";

    Selector("& > ol, & > ul", [
      marginLeft "1.45rem";
      marginBottom "calc(1.45rem / 2)";
      marginTop "calc(1.45rem / 2)";
    ]);

    Selector("& *:last-child", [
      marginBottom "0";
    ]);

    Selector("& > p", [
      marginBottom "calc(1.45rem / 2)";
    ]);
  ]);

  Selector("& ol", [
    listStyleType "decimal";

    Selector("& li", [
      paddingLeft "0";
    ]);
  ]);

  Selector("& ul", [
    listStyleType "disc";

    Selector("& li", [
      paddingLeft "0";
    ]);
  ]);

  Selector("& code", [
    background "hsla(0, 0%, 0%, 0.04)";
    fontFamily "'SFMono-Regular', Consolas, 'Roboto Mono', 'Droid Sans Mono', 'Liberation Mono', Menlo, Courier, monospace;";
    fontSize "0.85rem";
    lineHeight "1.45rem";
    padding ".2em 0";
  ]);

  Selector("& pre", [
    marginBottom "1.45rem";
    fontSize "0.85rem";
    lineHeight "1.42";
    background "hsla(0, 0%, 0%, 0.04)";
    borderRadius "3px";
    overflow "auto";
    wordWrap "normal";
    padding "1.45rem";

    Selector("& code", [
      background "none";
      lineHeight "1.42";
    ]);
  ]);

  Selector("& a", [
    color "#dd4c39";
    textDecoration "none";

    Selector("&:hover", [
      textDecoration "underline";
    ]);
  ]);

]