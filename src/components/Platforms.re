open! Vrroom.Helpers;
module Control = Vrroom.Control;
module Styles = PlatformsStyles;

let platform = (icon, label) =>
  <div key=label> icon {label |> text} </div>;

let tooltip = platforms =>
  <div className=Styles.tooltip>
    {"Platforms:" |> text}
    <Control.Map items=platforms>
      ...(fun | "browser" => platform(<Icon.Html5 />, "Browser")
              | "node"    => platform(<Icon.Nodejs />, "Node.js")
              | "native"  => platform(<Icon.Matrix />, "Native")
              | "any"     => platform(<Icon.Infinity />, "Any")
              | other     => <div> {"Unknown: " ++ other |> text} </div>)
    </Control.Map>
  </div>;

let component = ReasonReact.statelessComponent("Platforms");
let make = (~platforms, _children) => {
  ...component,

  render: _self =>
    <div className=Styles.root>
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