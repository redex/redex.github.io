open! Helpers;

module Styles = PackageSummaryStyles;

let component = ReasonReact.statelessComponent("PackageSummary");
let make = (~package, _children) => {
	...component,

	render: _self =>
		<div className=Styles.root(package##_type)>
			<div>
				<Link className=Styles.name to_=package##slug> {package##name |> text} </Link>
				<span className=Styles.version> {package##version |> text} </span>
				<span className=Styles.unpublishedLabel(package##_type)> {"unpublished" |> text} </span>

				<div className=Styles.description>	
					{switch package##description {
					| "" 					=> nbsp
					| description => description |> text
					}}
				</div>

				<div className=Styles.tags>
					<Icon.Tags className=Styles.tagsIcon />
					<Control.Map items=package##keywords>
						...(keyword => <Tag key=keyword name=keyword />)
					</Control.Map>
				</div>
			</div>

			<div className=Styles.props>
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

				{switch (package##license |> Js.toOption) {
				| Some(license) => <div className=Styles.license> {license |> text} </div>
				| None					=> <div className=Styles.nolicense> {"No license" |> text} </div>
				}}
			</div>
		</div>
};
