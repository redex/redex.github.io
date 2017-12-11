let hash = (input) => {
  let value = ref(0);

  input |> String.iter(
           (c) => value := (value^ lsl 5) - value^ + Char.code(c));

  Js.Math.abs_int(value^)
};

let selectColor = (colors, string) => {
  let choices = Array.length(colors);
  let index = hash(string) mod choices;

  colors[index]
};