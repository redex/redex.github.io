open Vrroom;
module Styles = TopListStyles;

let component = ReasonReact.statelessComponent("TopList");
let make = (~packages, ~value, _:childless) => {
  ...component,
  render: _self =>
    <Control.Map items=packages>
      ...(package =>
        <div key=package##name className=(Styles.root |> TypedGlamor.toString)>
          <div>
            <Link to_=package##slug className=(Styles.name |> TypedGlamor.toString)>
              {package##name |> text}
            </Link>
            <span className=(Styles.version |> TypedGlamor.toString)> {package##version |> text} </span>
          </div>
          <div>
            {switch value {

            | `updated =>
              <div className=(Styles.updated |> TypedGlamor.toString)> <TimeAgo date=package##updated /> </div>

            | `stars =>
              <Control.IfSome option=(package##stars |> Js.toOption)>
                ...(stars =>
                  <div className=(Styles.stars |> TypedGlamor.toString)>
                    {stars |> text} <Icon.Star className=(Styles.starIcon |> TypedGlamor.toString)/>
                  </div>
                )
              </Control.IfSome>

            }}
          </div>
        </div>
      )
    </Control.Map>
};