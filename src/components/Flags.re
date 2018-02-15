open Vrroom;
module Styles = FlagsStyles;

module Flag = {
  let component = ReasonReact.statelessComponent("Flag");
  let make = (~label, ~style, ~invert, _:childless) => {
    ...component,

    render: (_self) =>
      <span className=(Styles.flag(style, ~invert) |> TypedGlamor.toString)> {label |> text} </span>
  }
};

let component = ReasonReact.statelessComponent("Flags");
let make = (~package, ~invert=false, _:childless) => {
  ...component,

  render: _self =>
    <span className=("flags" ++ (Styles.flags |> TypedGlamor.toString))>
      {package##_type == "unpublished" ? <Flag label="unpublished" style=`Black invert /> : nothing}
      <Control.Map items=package##flags>
        ...{flag => <Flag key=flag label=flag style=`Heavy invert />}
      </Control.Map>
    </span>
}