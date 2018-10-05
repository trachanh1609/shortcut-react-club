import React, { Component } from "react"

export class AlertMessage extends Component {

	render() {
		const { message, onClick } = this.props;
		return (
			<div className="alert-message">
				<h2>{message}</h2>
				<button onClick={onClick}>Play Again</button>
			</div>
		)
	}
}

export default AlertMessage;