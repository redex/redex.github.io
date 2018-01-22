open! Vrroom.Helpers;

module Styles = SearchResultItemStyles;

type t = {.
	"id"					: string,
  "_type"				: string,
  "slug"				: string,
  "name"				: string,
  "description"	: string,
  "stars"				: Js.nullable(string),
  "updated"			: Js.Date.t,
	"version"			: string,
	"score"				: float,
	"quality"			: float,
	"popularity"	: float,
	"maintenance"	: float,
	"flags"				: array(string)
};

let component = ReasonReact.statelessComponent("SearchResultItem");
let make = (~package, ~isFocused, ~onClick, _children) => {
	...component,

	render: _self =>
		<div className=Styles.root(package##_type, package##flags, isFocused) onClick=(_e => onClick(package))>
			<div>
				<span className=Styles.name> {package##name |> text} </span>
				<span className=Styles.version> {package##version |> text} </span>

				<div className=Styles.description>	
					<Flags package />
					{package##description |> text}
				</div>
			</div>

			<div>
				<div>
					<span className=Styles.stars>
						{switch (package##stars |> Js.toOption) {
						| Some(stars) => stars |> text
						| None 				=> "-" |> text
						}}
						<Icon.Star className=Styles.starIcon/>
					</span>

					<Score package />
				</div>
			 	<div className=Styles.updated> <TimeAgo date=package##updated /> </div>	
			</div>
		</div>
};
