import React, { Component } from 'react'
import { Box } from './Box';

export class Grid extends Component {
	state = {
		//Short way to create an array with initial values 
		// Using the Array constructor method with 1 parameter (its length) and then filling the slots with default values
		//boxes: Array(9).fill(null)

		//mock data to do your assignment
		boxes: [
			null, 'X', 'O',
			'X', null, 'O',
			'O', 'X', null
			]
	}

	render() {
		const { boxes } = this.state;

		return (
			<div className="grid">
				{/* https://reactjs.org/docs/lists-and-keys.html */}
				{boxes.map((info, index) => (
					<Box key={index} info={info}  />
				))}
			</div>

		)
	}
}

export default Grid
