open Helpers;

module Styles = PackageSummaryStyles;

let component = ReasonReact.statelessComponent("PackageSummary");
let make = (~package, _children) => {
	...component,

	render: _self =>
		<div className=Styles.root>
			<div className=Styles.left>
				<Link to_=package##fields##slug> {package##name |> text} </Link>
				{" (" ++ package##version ++ ")" |> text}
				<div>
					{package##description |> text}
				</div>
				<div>
					<FaTags color="#ccc"/>
					{
						package##keywords
						|> Array.map(
							keyword => <Tag name=keyword />
						)
						|> ReasonReact.arrayToElement
					}
				</div>
			</div>
			<div className=Styles.right>
					<div className=Styles.updated> <TimeAgo date=package##updated /> </div>
					<div className=Styles.license> {package##license |> text} </div>
					<div className=Styles.stars> {package##stars |> text} <FaStar className=Styles.starIcon/> </div>
			</div>
		</div>
};
