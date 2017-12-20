open! Helpers;

module Styles = SearchResultItemStyles;

type t = {.
  "_type":        string,
  "slug":         string,
  "name":         string,
  "description":  string,
  "stars":        Js.nullable(string),
  "updated":      Js.Date.t,
  "version":      string
};

let component = ReasonReact.statelessComponent("SearchResultItem");
let make = (~package, ~isFocused, ~onClick, _children) => {
	...component,

	render: _self =>
		<div className=Styles.root(package##_type, isFocused) onClick=(_e => onClick(package))>
			<div>
				<span className=Styles.name> {package##name |> text} </span>
				<span className=Styles.version> {package##version |> text} </span>
				<span className=Styles.unpublishedLabel(package##_type)> {"unpublished" |> text} </span>

				<div className=Styles.description>	
					{package##description |> text}
				</div>
			</div>

			<div>
        <div className=Styles.updated> <TimeAgo date=package##updated /> </div>
        <Control.IfSome option=(package##stars |> Js.toOption)>
          ...(stars =>
            <div className=Styles.stars>
              {stars |> text} <Icon.Star className=Styles.starIcon/>
            </div>
          )
				</Control.IfSome>
			</div>
		</div>
};
