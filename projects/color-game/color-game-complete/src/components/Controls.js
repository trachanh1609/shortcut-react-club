import React from "react";
import classnames from "classnames";

export class Controls extends React.Component {
	render() {
		const { onPlayAgainClick, onChangeDifficulty, isEasy, tries, hasWon } = this.props;

		const message = hasWon ? "Correct solution!" : tries > 0 ? "Try again!" : "";
		

		return (
			<div className="info">
				<div className="container">
					<div className="navbar">

						<button id="restart" onClick={onPlayAgainClick}>Play again</button>

						<span id="message">{message}</span>

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

Controls.defaultProps = {
	onPlayAgainClick: () => {},
	onChangeDifficulty: (isEasy) => {},
	isEasy: false,
	tries: 0,
	hasWon: false

}

export default Controls;