open Vrroom;
module Styles = VersionStyles;

let component = ReasonReact.statelessComponent("Version");
let make = (~version, ~isPublished, _:childless) => {
  ...component,

  render: _self =>
    <div className=("version " ++ (Styles.root(isPublished) |> TypedGlamor.toString))>
      {
        if (isPublished) {
          {version |> text}
        } else {
          <Tooltip content=(<div className=(Styles.tooltip |> TypedGlamor.toString)> {"Unpublished" |> text} </div>)>
            ...(version |> text)
          </Tooltip>
        }
      }
    </div>
}