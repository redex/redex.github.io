let if_ = (predicate, value) =>
  predicate ? value : Obj.magic(Js.null);

let else_ = (b, a) =>
  Obj.magic(a) === Js.null ? b : a;
