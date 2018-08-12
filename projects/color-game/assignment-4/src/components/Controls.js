import React from "react";

export class Controls extends React.Component {
	render() {
		return (
			<div className="info">
				<div className="container">
					<div className="navbar">

						<button id="restart" >Play again</button>

						<span id="message"></span>

						<button >EASY</button>
						<button className="active">HARD</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Controls;