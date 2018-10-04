import React, { Component } from 'react'
import { Box } from './Box';

export class Grid extends Component {

	render() {
		const { boxes, currentPlayer, onBoxClick } = this.props;

		return (
			<div className="grid">
				{boxes.map((content, index) => (
					<Box
						key={index}
						content={content}
						currentPlayer={currentPlayer}
						onClick={() => onBoxClick(index)}
					/>
				))}
			</div>

		)
	}
}

export default Grid
