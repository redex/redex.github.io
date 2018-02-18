open TypedGlamor

let root = fun ~isFlagged -> css [
  padding2 ~v:(em 0.75) ~h:(em 1.5);
  marginBottom (em 0.5);
  lineHeight (em 1.45);

  if isFlagged then add [
    opacity 0.5;
  ] else add [
    boxShadows [Theme.Shadow.panel];
    backgroundColor Theme.Panel.Color.background;
  ];

  hover [
    opacity 1.;
  ];

  select "@media (max-width: 600px)" [
    select "& .version" [
      display none;
    ];

    select "& .platforms" [
      display none;
    ];
  ];
]

let header = css [
  display flex;
  alignItems baseline;
]

let name = css [
  color Theme.Color.link;
  fontSize (em 1.1);
  textDecoration none;

  hover [
    textDecoration underline;
  ];
]

let props = css [
  display flex;
  justifyContent flexEnd;
  alignItems baseline;
  marginLeft auto;

  select "& > *" [
    marginLeft (em 1.);
  ];
]

let updated = css [
  fontSize (em 0.85);
  whiteSpace nowrap;

  select "@media (max-width: 600px)" [
    display none;
  ];
]

let license = css [
  display inlineBlock;
  fontSize (em 0.85);
  whiteSpace nowrap;
  border3 (px 1) solid Theme.Color.text;
  padding2 ~v:zero ~h:(ex 1.);

  select "@media (max-width: 600px)" [
    display none;
  ];
]

let nolicense = css [
  color Theme.Color.bad;
  fontSize (em 0.85);
  whiteSpace nowrap;
  border3 (px 1) solid Theme.Color.bad;
  padding2 ~v:zero ~h:(ex 1.);

  select "@media (max-width: 600px)" [
    display none;
  ];
]

let stars = css [
  fontSize (em 0.85);
  whiteSpace nowrap;

  select "@media (max-width: 450px)" [
    display none;
  ];
]

let starIcon = css [
  marginLeft (em 0.25);
  transforms [translateY (px (-1))];
]

let description = css [
  (*whiteSpace "nowrap";*)
  unsafe "textOverflow" "ellipsis";
  overflow hidden;
  margin3 ~top:(ex 0.5) ~h:zero ~bottom:(ex 1.);
]

let tags = css [
  color Theme.Color.link;

  select "& a" [
    backgroundColor (hsla (num 6.9) 90 90 0.4);
  ];
]

let tagsIcon = css [
  opacity 0.25;
]