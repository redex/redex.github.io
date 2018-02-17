open TypedGlamor

let root = css [
  display flex;
  flexDirection column;
  backgroundColor Theme.Inverted.Color.background;
  minHeight (vh 100.);
  color Theme.Inverted.Color.text;
]

let topNav showWhenBurger = css [
  label "topNav";

  select "& > div" [ (* selects width container *)
    display flex;
    textAlign center;
    padding2 ~v:(em 0.5) ~h:(em 1.45);

    select "& > .left" [
      flex_ (int 1);
    ];

    select "& > .right" [
      flex_ (int 1);
      textAlign right;
    ];

    select "& a" [
      fontVariant smallCaps;
      textDecoration none;
      textTransform lowercase;
      margin2 ~v:zero ~h:(em 1.);
      opacity 0.75;

      select "&:hover" [
        opacity 1.;
      ];
    ];

    select "@media (max-width: 600px)" [
      if showWhenBurger then
        transforms [translateY zero]
      else
        transforms [translateY (pct (-100.))];

      position absolute;
      zIndex (int 150);
      paddingRight (em 3.5);
      transitions [(AnimatableProperty.transform, ms 250, easeInOut, ms 0)];

      flexDirection column;
      backgroundColor Theme.Color.darkPrimary;

      select "& > .left" [
        display none;
      ];

      select "& > *" [
        textAlign right;
        fontSize (em 1.25);
        lineHeight (em 1.5);
      ];

      select "& > .right" [
        marginTop (em 0.75);
        marginBottom (em 0.75);
      ];
    ];
  ];
]

let burger = css [
  position absolute;
  offsetRight zero;
  zIndex (int 200);
  display none;
  padding2 ~v:(em 0.5) ~h:(em 0.7);
  fontSize (em 1.5);

  select "@media (max-width: 600px)" [
    display block;
  ]
]

let inactiveLink = css [
  unsafe "opacity" "0.25 !important";
  cursor default;
]

let publishLink = css [
  flex_ (int 1);
  fontSize (em 0.85);
  whiteSpace nowrap;
  outline3 (px 1) solid Theme.Inverted.Color.text;
  padding2 ~v:(ex 0.5) ~h:(ex 1.5);

  hover [
    outline3 (px 1) solid Theme.Inverted.Color.text;
  ];
]

let header = css [
  margin (em 1.45);
]

let title = css [
  margin3 ~top:(em 1.) ~h:zero ~bottom:zero;
  textAlign center;
  fontVariant smallCaps;
  fontSize (rem 2.5);
  lineHeight (em 1.1);
  color (hex "fff6");

  select "& > em" [
    fontStyle normal;
    color white;
  ];

  select "@media (max-width: 600px)" [
    fontSize (rem 2.);
  ];

  select "@media (max-width: 450px)" [
    fontSize (rem 1.5);
  ];
]

let logo = css [
  display block;
  margin2 ~v:zero ~h:auto;
  height (em 3.);
  unsafe "fill" (Theme.Inverted.Color.text |> Obj.magic);
]