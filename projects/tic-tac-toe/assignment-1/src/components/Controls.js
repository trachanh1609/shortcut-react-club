import React, { Component } from 'react'

export class Controls extends Component {

	render() {
		return (
			<div className="controls">
				<button >New Game</button>
				<span>Your turn: <i className="fas fa-times" /></span>
			</div>
		)
	}
}

export default Controls
