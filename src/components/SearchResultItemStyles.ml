open! TypedGlamor

let root = fun ~isFlagged ~isFocused -> css [
  label "search-result-item";

  display flex;
  justifyContent spaceBetween;
  padding2 ~v:(em 1.1) ~h:(em 2.);
  borderTop3 (px 1) solid Theme.Color.subtleBorder;
  cursor pointer;

  select "> *" [
    opacity (if isFlagged && not isFocused then 0.5 else 1.);
  ];

  hover [
    backgroundColor (hsl (num 6.9) 0 90);

    select "> *" [
      opacity 1.;
    ]
  ];

  backgroundColor (
    if isFocused then
      hsl (num 6.9) 90 90
    else
      Theme.Panel.Color.background
  );


  select "> *:last-child" [
    textAlign right;
  ];

  select "@media (max-width: 600px)" [
    select "& .platforms" [
      display none;
    ];
  ];
]

let name = css [
  color Theme.Color.link;
]

let version = css [
  fontSize (em 0.85);
  fontStyle italic;
  marginLeft (em 0.5);

  select "@media (max-width: 600px)" [
    display none;
  ];
]

let description = css [
  (*whiteSpace "nowrap";*)
  unsafe "textOverflow" "ellipsis";
  overflow hidden;
]

let updated = css [
  opacity 0.5;
  fontSize (em 0.85);
  whiteSpace nowrap;

  select "@media (max-width: 450px)" [
    display none;
  ];
]

let stars = css [
  opacity 0.5;
  fontSize (em 0.85);
  whiteSpace nowrap;
]

let starIcon = css [
  marginLeft (em 0.25);
  transforms [translateY (px (-1))];
  opacity 0.5;
]