open Vrroom;
module Styles = PackageSummaryStyles;

let component = ReasonReact.statelessComponent("PackageSummary");
let make = (~package, _:childless) => {
	...component,

	render: _self =>
		<div className=(Styles.root(~isFlagged=Array.length(package##flags) > 0) |> TypedGlamor.toString)>
			<header className=(Styles.header |> TypedGlamor.toString)>
				<Link className=(Styles.name |> TypedGlamor.toString) to_=package##slug> {package##name |> text} </Link>
				<Version version=package##version isPublished=(package##_type == "published") />
				<Platforms platforms=package##platforms />

				<div className=(Styles.props |> TypedGlamor.toString)>
					<span className=(Styles.stars |> TypedGlamor.toString)>
						{switch (package##stars |> Js.toOption) {
						| Some(stars) => stars |> text
						| None 				=> "-" |> text
						}}
						<Icon.Star className=Styles.starIcon/>
					</span>

					<Score package />

					{switch (package##license |> Js.toOption) {
					| Some(license) => <span className=(Styles.license |> TypedGlamor.toString)> {license |> text} </span>
					| None					=> <span className=(Styles.nolicense |> TypedGlamor.toString)> {"No license" |> text} </span>
					}}

					<span className=(Styles.updated |> TypedGlamor.toString)> <TimeAgo date=package##updated /> </span>
				</div>
			</header>

			<div className=(Styles.description |> TypedGlamor.toString)>	
				<Flags package />
				{switch package##description {
				| "" 					=> nbsp
				| description => description |> text
				}}
			</div>

			<div className=(Styles.tags |> TypedGlamor.toString)>
				<Icon.Tags className=(Styles.tagsIcon |> TypedGlamor.toString) />
        <Tag.Category name=package##category />
				<Control.Map items=package##keywords>
					...(keyword => <Tag.Keyword key=keyword name=keyword />)
				</Control.Map>
			</div>
		</div>
};
