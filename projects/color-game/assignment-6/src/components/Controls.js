import React from "react";
import classnames from "classnames";

export class Controls extends React.Component {
	render() {
		const { onPlayAgainClick, onChangeDifficulty, isEasy } = this.props;

		return (
			<div className="info">
				<div className="container">
					<div className="navbar">

						<button id="restart" onClick={onPlayAgainClick}>Play again</button>

						<span id="message"></span>

						<button className={classnames({active: isEasy})}
							onClick={() => onChangeDifficulty(true)} >
							EASY
						</button>
						<button className={classnames({active: !isEasy})}
							onClick={() => onChangeDifficulty(false)} >
							HARD
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Controls;