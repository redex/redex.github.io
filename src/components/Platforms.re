open! Vrroom.Helpers;
module Control = Vrroom.Control;
module Styles = PlatformsStyles;

let platform = (icon, label) =>
  <div> icon {label |> text} </div>;

let component = ReasonReact.statelessComponent("Platforms");
let make = (~platforms, _children) => {
  ...component,

  render: _self =>
    <div className=Styles.root>
      <Tooltip content={
                <div className=Styles.tooltip>
                  {"Platforms:" |> text}
                  <Control.Map items=platforms>
                    ...(fun | "browser" => platform(<Icon.Html5 />, "Browser")
                            | "node"    => platform(<Icon.Nodejs />, "Node.js")
                            | "native"  => platform(<Icon.Matrix />, "Native")
                            | "any"     => platform(<Icon.Infinity />, "Any")
                            | other     => <div> {"Unknown: " ++ other |> text} </div>)
                  </Control.Map>
                </div>
              }>
        ...(
          <Control.Map items=platforms>
            ...(fun | "browser" => <Icon.Html5 />
                    | "node"    => <Icon.Nodejs />
                    | "native"  => <Icon.Matrix />
                    | "any"     => <Icon.Infinity />
                    | _         => ReasonReact.nullElement)
          </Control.Map>
        )
    </Tooltip>
  </div>
}