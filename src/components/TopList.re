open Vrroom.Helpers;
module Control = Vrroom.Control;
module Styles = TopListStyles;

let component = ReasonReact.statelessComponent("TopList");
let make = (~packages, ~value, _children) => {
  ...component,
  render: _self =>
    <Control.Map items=packages>
      ...(package =>
        <div key=package##name className=Styles.root>
          <div>
            <Link to_=package##slug className=Styles.name>
              {package##name |> text}
            </Link>
            <span className=Styles.version> {package##version |> text} </span>
          </div>
          <div>
            {switch value {

            | `updated =>
              <div className=Styles.updated> <TimeAgo date=package##updated /> </div>

            | `stars =>
              <Control.IfSome option=(package##stars |> Js.toOption)>
                ...(stars =>
                  <div className=Styles.stars>
                    {stars |> text} <Icon.Star className=Styles.starIcon/>
                  </div>
                )
              </Control.IfSome>

            }}
          </div>
        </div>
      )
    </Control.Map>
};