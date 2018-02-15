open! Vrroom;
module Styles = ScoreStyles;

let formatPercentage = number =>
  ((number *. 100.) |> Js.Float.toFixed) ++ "%";

let factor = (name, value) =>
  <div className=(Styles.factor |> TypedGlamor.toString)>
    <span> {name |> text} </span>
    <span> {value |> formatPercentage |> text} </span>
  </div>;

let component = ReasonReact.statelessComponent("Score");
let make = (~package, _:childless) => {
  ...component,
  render: _self =>
    <Tooltip content={
              <div className=(Styles.tooltip |> TypedGlamor.toString)>
                {factor("Quality", package##quality)}
                {factor("Popularity", package##popularity)}
                {factor("Maintenance", package##maintenance)}
              </div>
            }>
      ...(
        <span className=(Styles.root |> TypedGlamor.toString)>
          {package##score |> formatPercentage |> text}
          <Icon.Verified className=Styles.icon/>
        </span>
      )
    </Tooltip>
};