import React, { Component } from 'react'

export class Controls extends Component {

	render() {
		const { currentPlayer, onNewGameClick } = this.props;
		const label = currentPlayer === 'X' ? "fa-times" : "fa-cirlce";

		return (
			<div className="controls">
				<button onClick={onNewGameClick} >New Game</button>
				<span>Your turn: <i className={`fas ${label}`} /></span>
			</div>
		)
	}
}

export default Controls
