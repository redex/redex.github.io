open TypedGlamor

let root = css [
  position relative;
  fontSize (em 0.85);
  whiteSpace nowrap;
  cursor help;

  select "& > .popover" [
    display block;
    position absolute;
    offsetBottom (pct 100.);
    zIndex (int 10);
    backgroundColor white;
    boxShadows [shadow ~x:(px 1) ~y:(px 1) (rgba 0 0 0 0.1)]
  ];

  select "&:hover > .popover" [
    display block;
  ];
]

let icon = css [
  marginLeft (em 0.25);
  transforms [translateY (px (-1))];
]

let tooltip = css [
  backgroundColor white;
  boxShadows [(shadow ~x:(px 1) ~y:(px 1) ~spread:(px 1) ~blur:(px 3) (rgba 0 0 0 0.1))];
  padding2 ~v:(em 0.5) ~h:(em 1.);

  select "& div" [
    whiteSpace nowrap;
  ]
]

let factor = css [
  display flex;
  justifyContent spaceBetween;

  select "& > span:last-child" [
    marginLeft (em 1.);
  ]
]