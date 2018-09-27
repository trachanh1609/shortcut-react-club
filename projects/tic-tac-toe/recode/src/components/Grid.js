import React, { Component } from 'react'
import { Box } from './Box';

export class Grid extends Component {
	render() {
		const { boxes } = this.props;

		return (
			<div className="grid">
				<Box />
				<Box />
				<Box />
				<Box />
				<Box />
				<Box />
				<Box />
				<Box />
				<Box />
			</div>

		)
	}
}

export default Grid
