open Glamor

[%%raw "require('./reset.css')"]
[%%raw "require('./global.css')"]

module Index = struct

  let keywords = css [
    textAlign "center";
    marginTop "3em";
    lineHeight "1.5em";

    Selector("& > a", [
      display "inline-block";
      color "white";
      textDecoration "none";
      margin "0 1ex";
      whiteSpace "nowrap";

      Selector("& > .count", [
        color "rgba(255, 255, 255, 0.5)";
        marginLeft ".5ex";
      ]);

      Selector("&:hover > .label", [
        textDecoration "underline";
      ])
    ])
  ]

  let links = css [
    textAlign "center";

    Selector("& > a", [
      color "white";
      fontSize ".85rem";
      textDecoration "none";
      margin "0 1em";

      Selector("&:hover", [
        opacity ".75";
      ])
    ])
  ]

  let lists = css [
    display "flex";
    justifyContent "space-around";
    marginTop "3em";

    Selector("& > *", [
      padding "0 1em";
      width "40%";
      minWidth "300px";

      Selector("& > h2", [
        color "white";
        textAlign "center";
        fontSize "1.1em";
        fontWeight "600";
        margin ".5em 0";
        textTransform "lowercase";
        fontVariant "small-caps";
        paddingBottom ".5em";
        borderBottom "1px solid rgba(255, 255, 255, .5)";
      ]);

      Selector("& > div", [
        background "none";
        border "none";
        padding "0";
      ])
    ])
  ]

  module ListItem = struct
    let root = css [
      display "flex";
      justifyContent "space-between";
      marginBottom ".5em";
    ]

    let name = css [
      color "white";
      textDecoration "none";

      Selector("&:hover", [
        textDecoration "underline";
      ])
    ]

    let version = css [
      fontSize ".85em";
      fontStyle "italic";
      marginLeft ".5em";
      color "white";
      opacity ".5";
    ]

    let right = css [
      textAlign "right"
    ]

    let updated = css [
      opacity ".5";
      fontSize ".85em";
      whiteSpace "nowrap";
      color "white";
      opacity ".75";
    ]

    let stars = css [
      opacity ".5";
      fontSize ".85em";
      whiteSpace "nowrap";
      color "white";
      opacity ".75";
    ]

    let starIcon = css [
      marginLeft ".25em";
      transform "translateY(-1px)";
      fill "white"; 
      opacity ".5";
    ]

    let count = css [
      opacity ".5";
      fontSize ".85em";
      color "white";
      opacity ".75";
    ]

  end

end
