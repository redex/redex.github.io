open TypedGlamor

let root = css [
  marginBottom (em 1.45);
]

let header = css [
  label "header";
  (*backgroundColor (if flags = [||] then Theme.Inverted.Color.background else (hex "aaa"));*)
  backgroundColor Theme.Inverted.Color.background;
  (*background "linear-gradient(to bottom right, hsl(6.9, 70.7%, 52%), hsl(6.9, 70.7%, 58%))";*)
  color Theme.Inverted.Color.text;
  padding2 ~v:(em 2.) ~h:(em 4.);

  select "@media (max-width: 900px)" [
    padding2 ~v:(em 1.) ~h:(em 2.);
  ]
]

let props = css [
  display flex;
  justifyContent flexEnd;
  alignItems baseline;

  select "& > *" [
    marginLeft (em 1.);
  ];
]

let title = css [
  padding3 ~top:(em 1.) ~h:zero ~bottom:zero;
  display flex;
  alignItems baseline;
]

let owner = css [
  display block;
  opacity 0.75;
  fontSize (em 0.85);
  fontVariant smallCaps;
]

let name = css [
  fontSize (rem 1.5);
  fontWeight bold;
  textDecoration none;
  lineHeight (em 1.45);

  select "&:hover" [
    textDecoration underline
  ];
]

let descLine = css [
  marginBottom (em 0.5);
]

let description = css [
  (*whiteSpace "nowrap";*)
  unsafe "textOverflow" "ellipsis";
  overflow hidden;
  opacity 0.75;
]

let tags = css [
  select "& span" [
    fontSize (em 0.85);
    backgroundColor Theme.Inverted.Color.block;
    padding2 ~v:zero ~h:(ex 1.);
    opacity 1.;

    hover [
      backgroundColor Theme.Inverted.Color.highlightedBlock;
      cursor pointer;
    ];
  ];
]

let tagsIcon = css [
  opacity 0.25;
]

let right = css [
  textAlign right;
]

let updated = css [
  fontSize (em 0.85);
  whiteSpace nowrap;
]

let license = css [
  fontSize (em 0.85);
  whiteSpace nowrap;
  border3 (px 1) solid Theme.Inverted.Color.text;
  padding2 ~v:zero ~h:(ex 1.);
]

let nolicense = css [
  fontSize (em 0.85);
  whiteSpace nowrap;
  border3 (px 1) solid (hex "0008");
  color (hex "0008");
  padding2 ~v:zero ~h:(ex 1.);
]

let stars = css [
  fontSize (em 0.85);
  whiteSpace nowrap;
]

let starIcon = css [
  marginLeft (em 0.25);
  transforms [translateY (px (-1))];
  opacity 0.5;
]

let links = css [
  label "links";
  
  marginTop (em 3.);

  select "& > a" [
    display inlineBlock;
    textDecoration none;
    marginRight (em 2.);
    fontVariant smallCaps;

    select "@media (max-width: 450px)" [
      marginRight (em 1.);
    ];

    hover [
      textDecoration underline
    ];

    select "&:not([href])" [
      textDecoration none;
      opacity 0.25;
    ];
  ];
]

let readme = css ~extend:CommonStyles.html [
  backgroundColor Theme.Panel.Color.background;
  padding2 ~v:(em 2.) ~h:(em 4.);

  select "@media (max-width: 900px)" [
    padding2 ~v:(em 1.) ~h:(em 2.);
  ]
]