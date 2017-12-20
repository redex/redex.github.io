
let getNodes = result =>
  result##edges |> Array.map(edge => edge##node);