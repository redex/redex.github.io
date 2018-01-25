open! Vrroom.Helpers;
module Control = Vrroom.Control;
module Styles = PlatformsStyles;

let platform = (icon, name, label) =>
  <div>
    icon
    <a href=("/platform/" ++ name)> {label |> text} </a>
  </div>;

let tooltip = platforms =>
  <div className=Styles.tooltip>
    {"Platforms:" |> text}
    {platforms |> Js.Array.includes("browser")  ? platform(<Icon.Html5 />,    "browser",  "Browser") : null}
    {platforms |> Js.Array.includes("node")     ? platform(<Icon.Nodejs />,   "node",     "Node.js") : null}
    {platforms |> Js.Array.includes("native")   ? platform(<Icon.Matrix />,   "native",   "Native") : null}
    {platforms |> Js.Array.includes("any")      ? platform(<Icon.Infinity />, "any",      "Any") : null}
  </div>;

let component = ReasonReact.statelessComponent("Platforms");
let make = (~platforms, _children) => {
  ...component,

  render: _self =>
    <div className=("platforms " ++ Styles.root)>
      <Tooltip content=tooltip(platforms)>
        ...(
          <Fragment>
            {platforms |> Js.Array.includes("browser")  ? <Icon.Html5 /> : null}
            {platforms |> Js.Array.includes("node")     ? <Icon.Nodejs /> : null}
            {platforms |> Js.Array.includes("native")   ? <Icon.Matrix /> : null}
            {platforms |> Js.Array.includes("any")      ? <Icon.Infinity /> : null}
          </Fragment>
        )
    </Tooltip>
  </div>
}