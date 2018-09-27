import React, { Component } from 'react'

export class Controls extends Component {

	// state = {
	// 	boxes: Array(9).fill(null)
	// }

	render() {
		//const boxes = this.state.boxes;
		const { boxes } = this.state;
		return (
			<div className="controls">
				<button >New Game</button>
				<span>Your turn: <i className="fas fa-times" /></span>
			</div>
		)
	}
}

export default Controls
