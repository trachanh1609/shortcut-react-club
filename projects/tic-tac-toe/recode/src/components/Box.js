import React, { Component } from 'react'

export class Box extends Component {
	render() {
		return (
			<div className={`box`} >
				<div className={`box-content player-1`}><i className="fas fa-times" /></div>
				<div className="box-preview"></div>
			</div>
		)
	}
}

export default Box
