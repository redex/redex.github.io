open Glamor

let root = css [
  display "flex";
  flexDirection "column";
  background Colors.Inverted.background;
  minHeight "100vh";
  color Colors.Inverted.text;
]

let header = css [
]

let links = css [
  textAlign "center";
  paddingTop ".5em";

  Selector("& > a", [
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

let inactiveLink = css [
  opacity ".25 !important";
  cursor "default";
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
  fontSize "2.5rem";
  lineHeight "1.1";
]

let logo = css [
  display "block";
  margin "0 auto";
  height "3em";
  fill Colors.Inverted.text;
]

let footer = css [
  background Colors.darkPrimary;
  marginTop "auto";

  Selector("& > div", [ (* matches the inner width container *)
    display "flex";

    Selector("& > section", [
      opacity ".65";
      transition "opacity .5s";
      width "20%";

      Selector("&:last-child", [
        opacity ".75";
        marginLeft "auto";
        alignSelf "end";
        textAlign "right";
      ]);

      Selector("&:hover", [
        opacity "1";
      ]);

      Selector("& h1", [
        fontSize ".85em";
        textTransform "lowercase";
        fontVariant "small-caps";
        opacity ".5";
        marginBottom ".35em";
      ]);

      Selector("& a", [
        textDecoration "none";
        fontSize ".85rem";
        opacity ".75";

        Selector ("&:hover", [
          opacity "1";
        ]);
      ]);
    ]);
]);
]

let algoliaLogo = css [
  height "1em";
  opacity ".75";
]