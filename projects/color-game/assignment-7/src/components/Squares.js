import React from "react";

export class Squares extends React.Component {
	render() {
		const { squares, onClickSquare } = this.props;

		return (
			<div className="squares">
				{squares.map((square, index) => {

					const squareStyles = {
						backgroundColor: square.color,
						opacity: square.hidden ? "0" : "1"
					}

					return (
						<div key={index}
							onClick={() => onClickSquare(index)} 
							className={"square"} 
							style={squareStyles} />
					)

				})}
			</div>
		);
	}
}

export default Squares;