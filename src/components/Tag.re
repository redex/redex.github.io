open! Helpers;

let colors = [|
  "#323299","#3f3fbf","#324c99","#3f59bf","#326599","#3f72bf","#327f99",
  "#3f8cbf","#329932","#32994c","#329966","#32997f","#329999","#3fa5bf",
  "#4c3299","#593fbf","#5959a5","#6565cc","#5972a5","#657fcc","#598ca5",
  "#6598cc","#4c9932","#59a559","#59a572","#59a58c","#59a5a5","#65b2cc",
  "#653299","#723fbf","#7259a5","#7f65cc","#669932","#72a559","#7f3299",
  "#8c3fbf","#8c59a5","#9865cc","#7f9932","#8ca559","#993232","#99324c",
  "#993266","#99327f","#993299","#a53fbf","#994c32","#a55959","#a55972",
  "#a5598c","#a559a5","#b265cc","#996632","#a57259","#997f32","#a58c59",
  "#999932","#a5a559","#bf3f3f","#bf3f59","#bf3f72","#bf3f8c","#bf3fa5",
  "#bf3fbf","#bf593f","#cc6565","#cc657f","#cc6599","#cc65b2","#cc65cc",
  "#bf723f","#cc7f65","#bf8c3f","#cc9965","#bfa53f","#ccb265"
|];

let style = Css.(style([
  display(InlineBlock),
  opacity(0.75),
  fontSize(em(0.85)),
  marginLeft(em(0.5)),
  unsafe("whiteSpace", "nowrap"),
  backgroundColor(hex("fff3")),
  unsafe("padding", "0 1ex"),
  textDecoration(None),

  hover([
    opacity(1.),
    unsafe("textDecoration", "underline"),
  ])
]));

let makeStyle = name =>
  ReactDOMRe.Style.make(
    ~borderColor=Utils.selectColor(colors, name),
  ());

let component = ReasonReact.statelessComponent("Tag");
let make = (~name, _children) => {
  ...component,

  render: _self =>
    <Link to_=("/keywords/" ++ name) className=style>
      {name |> text}
    </Link>
}
