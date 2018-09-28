import React, { Component } from "react"

export class AlertMessage extends Component {
	render() {
		return (
			<div className="alert-message">
				<h2>It's a Tie</h2>
				<button >Play Again</button>
			</div>
		)
	}
}

export default AlertMessage;