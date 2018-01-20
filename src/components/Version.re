open Vrroom.Helpers;
module Styles = VersionStyles;

let component = ReasonReact.statelessComponent("Version");
let make = (~version, ~isPublished, _children) => {
  ...component,

  render: _self =>
    <div className=Styles.root(isPublished)>
      {
        if (isPublished) {
          {version |> text}
        } else {
          <Tooltip content=(<div className=Styles.tooltip> {"Unpublished" |> text} </div>)>
            ...(version |> text)
          </Tooltip>
        }
      }
    </div>
}