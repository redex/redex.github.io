open TypedGlamor

let root = css [
  margin (em 1.45);
]

let keywords = css [
  label "keywords";

  textAlign center;
  marginTop (em 3.);
  lineHeight (em 1.5);

  select "& > a" [
    display inlineBlock;
    textDecoration none;
    margin2 ~v:zero ~h:(ex 1.);
    whiteSpace nowrap;

    select "& > .count" [
      marginLeft (ex 0.5);
      opacity 0.5;
    ];

    select "&:hover > .label" [
      textDecoration underline
    ];
  ];
]

let lists = css [
  label "lists";

  display flex;
  justifyContent spaceAround;
  marginTop (em 3.);

  select "& > *" [
    padding2 ~v:zero ~h:(em 1.);
    width (pct 40.);
    minWidth (px 300);

    select "& > h2" [
      textAlign center;
      fontSize (em 1.1);
      fontWeight bold;
      margin2 ~v:(em 0.5) ~h:zero;
      textTransform lowercase;
      fontVariant smallCaps;
      paddingBottom (em 0.5);
      borderBottom3 (px 1) solid (rgba 255 255 255 0.5);
    ];

    select "& > div" [
      background none;
      border none;
      padding zero;
    ];
  ];

  select "@media (max-width: 600px)" [
    flexDirection column;
    alignItems center;

    select "& > *" [
      width (pct 100.);
      maxWidth (px 450);
    ]
  ]
]