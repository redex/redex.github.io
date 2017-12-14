open Glamor

let root = css [
  display "flex";
  flexDirection "column";
  background "#dd4c39";
  minHeight "100vh";
]

let header = css [
]

let links = css [
  textAlign "center";
  paddingTop ".5em";

  Selector("& > a", [
    color "white";
    fontVariant "small-caps";
    textDecoration "none";
    textTransform "lowercase";
    margin "0 1em";
    opacity ".75";

    Selector("&:hover", [
      opacity "1";
    ])
  ])
]

let widthContainer = css [
  margin "0 auto";
  maxWidth "960px";
  padding "1.0875rem 1.45rem";
]

let title = css [
  margin "1em 0 0";
  textAlign "center";
  fontVariant "small-caps";
  color "white";
  fontSize "2.5rem";
  lineHeight "1.1";
]

let logo = css [
  display "block";
  margin "0 auto";
  height "3em";
  fill "white";
]

let footer = css [
  background "rgba(0, 0, 0, 0.25)";
  marginTop "auto";

  Selector("& > div", [ (* matches the inner width container *)
    display "flex";

    Selector("& > section", [
      opacity ".5";
      transition "opacity .5s";
      width "20%";

      Selector("&:last-child", [
        opacity ".75";
        marginLeft "auto";
        alignSelf "end";
      ]);

      Selector("&:hover", [
        opacity "1";
      ]);

      Selector("& h1", [
        fontSize ".85em";
        color "rgba(255, 255, 255, .65)";
        textTransform "lowercase";
        fontVariant "small-caps";
        marginBottom ".35em";
      ]);

      Selector("& a", [
        color "white";
        textDecoration "none";
        fontSize ".85rem";

        Selector ("&:hover", [
          color "white";
        ]);
      ]);
    ]);
]);
]

let algoliaLogo = css [
  height "1em";
]