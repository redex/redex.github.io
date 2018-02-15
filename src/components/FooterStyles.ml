open TypedGlamor

let root context = css [
  backgroundColor
    (match context with
    | `Front -> Theme.Color.darkPrimary
    | `Index -> Theme.Color.darkBackground
    );

  marginTop auto;

  select "& > div" [ (* matches the inner width container *)
    display flex;
    padding (em 1.45);
    paddingTop (em 1.);

    select "& > section" [
      opacity 0.65;
      transitions [(AnimatableProperty.opacity, ms 500, linear, ms 0)];
      width (pct 20.);

      select "&:last-child" [
        opacity 0.75;
        marginLeft auto;
        alignSelf flexEnd;
        textAlign right;
      ];

      hover [
        opacity 1.;
      ];

      select "& h1" [
        fontSize (em 0.85);
        textTransform lowercase;
        fontVariant smallCaps;
        opacity 0.5;
        marginBottom (em 0.35);
      ];

      select "& a" [
        textDecoration none;
        fontSize (rem 0.85);
        opacity 0.75;
        paddingRight (em 0.5);

        hover [
          opacity 1.;
        ];
      ];
    ];

    select "@media (max-width: 600px)" [
      select "& > section" [
        width (pct 25.);
      ]
    ];

    select "@media (max-width: 450px)" [
      flexDirection column;
      select "& > section" [
        width auto;
      ]
    ];

  ];
]

let algoliaLogo = css [
  height (em 1.);
  opacity 0.75;
]