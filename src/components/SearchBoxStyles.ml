open TypedGlamor

let root = css [
  position relative;
  flex_ (int 1);
]

let fakeInput = css [
  display flex;
  backgroundColor Theme.Panel.Color.background;
  fontSize (em 1.2);
  width (pct 100.);
  alignItems center;
  padding2 ~v:zero ~h:(em 0.5);
]

let searchIcon = css [
  unsafe "fill" (Theme.Color.primary |> Obj.magic);
  opacity 0.75; 
  margin (em 0.5);
  minWidth (em 1.);
]

let input = css [
  padding2 ~v:(em 0.75) ~h:(em 0.25);
  width (pct 100.);
  color Theme.Color.primary;

  select "::placeholder" [
    color Theme.Color.primary;
  ];
]

let results = css [
  position absolute;
  zIndex (int 100);
  marginTop (ex 0.5);
  width (pct 100.);
  boxShadows [Theme.Shadow.overlay];
  color Theme.Color.text;

  select "& > div" [
    margin zero;
    borderTop3 (px 1) solid Theme.Color.subtleBorder;
  ]
]

let footer = css [
  backgroundColor white;
  textAlign right;

  select "> a" [
    opacity 0.75;

    hover [
      opacity 1.;
    ]
  ]
]

let algoliaLogo = css [
  height (em 0.85);
  margin3 ~top:(em 0.5) ~h:(em 2.) ~bottom:(em 0.1);
]