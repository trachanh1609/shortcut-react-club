import React, { Component } from 'react'

export class Controls extends Component {

	render() {
		const { currentPlayer, onNewGameClick } = this.props;
		const label = currentPlayer === 'X' ? "fas fa-times" : "far fa-circle";

		return (
			<div className="controls">
				<button onClick={onNewGameClick} >New Game</button>
				<span>Your turn: <i className={`${label}`} /></span>
			</div>
		)
	}
}

export default Controls
