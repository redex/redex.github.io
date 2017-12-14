open Helpers;

module Styles = PackageSummaryStyles;

let component = ReasonReact.statelessComponent("PackageSummary");
let make = (~package, _children) => {
	...component,

	render: _self =>
		<div className={package##_type === "unpublished" ? Styles.unpublished : Styles.published}>
			<div className=Styles.left>
				<Link to_=package##slug> {package##name |> text} </Link>
				<span className=Styles.version> {package##version |> text} </span>
				{
					switch (package##_type) {
					| "unpublished" =>
						<span className=Styles.unpublishedLabel> {"unpublished" |> text} </span>
					| _ => ReasonReact.nullElement
					}
				}

				<div className=Styles.description>	
					{package##description |> text}
				</div>

				{
					switch package##keywords {
					| [||] => ReasonReact.nullElement
					| keywords =>
						<div>
							<Icon.Tags className=Styles.tagsIcon />
							{
								keywords |> Array.map(keyword => <Tag key=keyword name=keyword />)
											   |> ReasonReact.arrayToElement
							}
						</div>
					}
				}
			</div>

			<div className=Styles.right>
				<div className=Styles.updated> <TimeAgo date=package##updated /> </div>
				{
					switch (package##license |> Js.toOption) {
					| Some(license) => <div className=Styles.license> {license |> text} </div>
					| None					=> <div className=Styles.nolicense> {"No license" |> text} </div>
					}
				}
				{
					switch (package##stars |> Js.toOption) {
					| Some(stars) => <div className=Styles.stars> {stars |> text} <Icon.Star className=Styles.starIcon/> </div>
					| None 				=> ReasonReact.nullElement
					}
				}
			</div>
		</div>
};
