open Rebase;
open! Vrroom;

module Styles = SearchResultItemStyles;

type t = {.
	"id"					: string,
  "_type"				: string,
  "slug"				: string,
  "name"				: string,
  "description"	: string,
  "stars"				: Js.nullable(string),
  "updated"			: Js.Date.t,
	"version" 		: string,
	"score"				: float,
	"quality"			: float,
	"popularity"	: float,
	"maintenance"	: float,
	"platforms"		: array(string),
	"flags"				: array(string)
};

let decode = json =>
	Json.Decode.({
		"id":						json |> field("id", string),
		"_type":				json |> field("type", string),
		"slug":					json |> (field("id", string) |> map(id => "/package/" ++ id)),
		"name":					json |> field("name", string),
		"description":	json |> field("description", string),
		"stars":				json |> optional(field("stars", int)) |> Option.map(string_of_int) |> Js.Nullable.fromOption, /* TODO: nullable should probably return Js.nullable, not Js.null */
		"updated":			json |> field("updated", date),
		"version":			json |> field("version", string),
		"score":				json |> field("score", Json.Decode.float),
		"quality":			json |> field("quality", Json.Decode.float),
		"popularity":		json |> field("popularity", Json.Decode.float),
		"maintenance":	json |> field("maintenance", Json.Decode.float),
		"platforms":		json |> optional(field("platforms", array(string))) |> Option.getOr([||]),
		"flags":				json |> optional(field("flags", array(string))) |> Option.getOr([|"stale"|])
	});

let component = ReasonReact.statelessComponent("SearchResultItem");
let make = (~package, ~isFocused, ~onClick, _:childless) => {
	...component,

	render: _self =>
		<div className=(Styles.root(~isFlagged=Array.length(package##flags) > 0, ~isFocused) |> TypedGlamor.toString) onClick=(_e => onClick(package))>
			<div>
				<span className=(Styles.name |> TypedGlamor.toString)> {package##name |> text} </span>
				<span className=(Styles.version |> TypedGlamor.toString)> {package##version |> text} </span>
				<Platforms platforms=package##platforms />

				<div className=(Styles.description |> TypedGlamor.toString)>	
					<Flags package />
					{package##description |> text}
				</div>
			</div>

			<div>
				<div>
					<span className=(Styles.stars |> TypedGlamor.toString)>
						{switch (package##stars |> Js.toOption) {
						| Some(stars) => stars |> text
						| None 				=> "-" |> text
						}}
						<Icon.Star className=(Styles.starIcon |> TypedGlamor.toString)/>
					</span>

					<Score package />
				</div>
			 	<div className=(Styles.updated |> TypedGlamor.toString)> <TimeAgo date=package##updated /> </div>	
			</div>
		</div>
};
