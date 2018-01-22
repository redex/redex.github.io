open Vrroom.Helpers;
module Control = Vrroom.Control;
module Styles = FlagsStyles;

module Flag = {
  let component = ReasonReact.statelessComponent("Flag");
  let make = (~label, ~style, ~invert, _children) => {
    ...component,

    render: (_self) =>
      <span className=Styles.flag(style, ~invert)> {label |> text} </span>
  }
};

let component = ReasonReact.statelessComponent("Flags");
let make = (~package, ~invert=false, _children) => {
  ...component,

  render: _self =>
    <span className=Styles.flags>
      {package##_type == "unpublished" ? <Flag label="unpublished" style=`Light invert /> : null}
      <Control.Map items=package##flags>
        ...{flag => <Flag key=flag label=flag style=`Heavy invert />}
      </Control.Map>
    </span>
}