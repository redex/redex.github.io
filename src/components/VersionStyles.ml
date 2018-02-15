open TypedGlamor

let root isPublished= css [
  fontSize (em 0.85);
  fontStyle italic;
  marginLeft (em 0.5);

  select "> div" (
    if not isPublished then [
      textDecoration lineThrough
    ] else []);
]

let tooltip = css [
  backgroundColor white;
  boxShadows [shadow ~x:(px 1) ~y:(px 1) ~spread:(px 1) ~blur:(px 3) (rgba 0 0 0 0.1)];
  padding2 ~v:(em 0.5) ~h:(em 1.);

  select "& div" [
    whiteSpace nowrap;
  ]
]