import React from "react";
import classnames from "classnames";

export class Squares extends React.Component {
	render() {
		const { squares, onClickSquare } = this.props;

		return (
			<div className="squares">
				{squares.map((square, index) => {

					const squareStyles = {
						backgroundColor: square.color,
					}
					const classes = classnames("square", {
						hidden: square.hidden
					})

					return (
						<div key={index}
							onClick={() => onClickSquare(index)} 
							className={classes} 
							style={squareStyles} />
					)

				})}
			</div>
		);
	}
}

Squares.defaultProps = {
	squares: [],
	onClickSquare: (index) => {}
}

export default Squares;