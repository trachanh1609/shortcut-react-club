import React from "react";

export class Header extends React.Component {
	render() {
		return (
			<div className="title">
				<h1>
					The great RGB Color Game
					<div id="rgb">rgb(XXX, YYY, ZZZ)</div>
				</h1>
			</div>
		);
	}
}

export default Header;