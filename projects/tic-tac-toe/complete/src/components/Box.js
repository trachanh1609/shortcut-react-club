import React, { Component } from 'react'
import classnames from 'classnames'

export class Box extends Component {

	render() {
		const { currentPlayer, content, onClick } = this.props;
		const className = classnames("box-content", { 
			"player-1": content === "X",
			"player-2": content ==="O"
		})

		return (
			<div className={`box`} onClick={onClick}>
				<div className={className}>
					{content === "X" && <i className="fas fa-times" />}
					{content === "O" && <i className="far fa-circle" />}
				</div>
				<div className="box-preview">
					{currentPlayer === "X" && <i className="fas fa-times" />}
					{currentPlayer === "O" && <i className="far fa-circle" />}
				</div>
			</div>
		)
	}
}

export default Box
