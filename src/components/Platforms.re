open! Vrroom;
module Styles = PlatformsStyles;

let platform = (icon, name, label) =>
  <div>
    icon
    <a href=("/platform/" ++ name)> {label |> text} </a>
  </div>;

let tooltip = platforms =>
  <div className=(Styles.tooltip |> TypedGlamor.toString)>
    {"Platforms:" |> text}
    {platforms |> Js.Array.includes("browser")  ? platform(<Icon.Html5 />,    "browser",  "Browser") : nothing}
    {platforms |> Js.Array.includes("node")     ? platform(<Icon.Nodejs />,   "node",     "Node.js") : nothing}
    {platforms |> Js.Array.includes("native")   ? platform(<Icon.Matrix />,   "native",   "Native") : nothing}
    {platforms |> Js.Array.includes("any")      ? platform(<Icon.Infinity />, "any",      "Any") : nothing}
  </div>;

let component = ReasonReact.statelessComponent("Platforms");
let make = (~platforms, _:childless) => {
  ...component,

  render: _self =>
    <div className=("platforms " ++ (Styles.root |> TypedGlamor.toString))>
      <Tooltip content=tooltip(platforms)>
        ...(
          <Fragment>
            {platforms |> Js.Array.includes("browser")  ? <Icon.Html5 /> : nothing}
            {platforms |> Js.Array.includes("node")     ? <Icon.Nodejs /> : nothing}
            {platforms |> Js.Array.includes("native")   ? <Icon.Matrix /> : nothing}
            {platforms |> Js.Array.includes("any")      ? <Icon.Infinity /> : nothing}
          </Fragment>
        )
    </Tooltip>
  </div>
}