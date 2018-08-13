import React from "react";

export class Header extends React.Component {
	render() {
		const { color } = this.props;

		return (
			<div className="title">
				<h1>
					The great RGB Color Game
					<div id="rgb">{color}</div>
				</h1>
			</div>
		);
	}
}

Header.defaultProps = {
	color: "rgb(rrr, ggg, bbb)"
}

export default Header;