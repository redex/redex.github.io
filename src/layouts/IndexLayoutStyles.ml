open TypedGlamor

let root = css [
  display flex;
  flexDirection column;
  minHeight (vh 100.);

  select "& p" [
    marginBottom (rem 1.45);
  ];
]

let header = css [
  margin (rem 1.45);

  select "& > div" [ (* matches width container *)
    display flex;

    (*
    Selector("& > *", [
      margin "0 1em";

      Selector("&:first-child", [
        marginLeft "0";
      ]);

      Selector("&:last-child", [
        marginRight "0";
      ]);
    ]);
    *)
  ];

]

let title = css [
  display flex;
  alignItems center;
  color Theme.Color.primary;
  margin zero;
  fontVariant smallCaps;
  fontSize (em 1.5);
  lineHeight (em 1.1);

  select "&:hover > svg" [
    transforms [rotate (deg 15.)];
    cursor pointer;
  ]
]

let logo = css [
  height (em 1.5);
  width (em 1.5);
  unsafe "fill" (Theme.Color.primary |> Obj.magic);
  margin2 ~v:zero ~h:(em 1.);
  transitions [(AnimatableProperty.transform, ms 100, easeInOut, ms 0)];
]