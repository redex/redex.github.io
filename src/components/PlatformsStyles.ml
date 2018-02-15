open TypedGlamor

let root = css [
  display inlineFlex;
  alignSelf baseline;
  transforms [translateY (px 2)];
  marginLeft (em 0.5);
  opacity 0.5;

  select "& svg" [
    unsafe "fill" "currentColor";
    height (em 1.);
    width (em 1.)
  ];

  hover [
    opacity 1.;
  ];
]

let tooltip = css [
  backgroundColor white;
  boxShadows [(shadow ~x:(px 1) ~y:(px 1) ~spread:(px 1) ~blur:(px 3) (rgba 0 0 0 0.1))];
  padding2 ~v:(em 0.5) ~h:(em 1.);

  select "& div" [
    whiteSpace nowrap;

    select "& a" [
      textDecoration none;

      hover [
        textDecoration underline;
      ]
    ];

    select "& svg" [
      unsafe "fill" "currentColor";
      height (em 1.);
      width (em 1.);
      marginRight (em 0.5);
      verticalAlign middle;
      transforms [translateY (px (-1))];
    ];
  ]
]