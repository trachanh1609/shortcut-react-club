import React from "react";
import Header from "./Header";
import Controls from "./Controls";
import Squares from "./Squares";

const randomNumber = () => Math.floor(Math.random() * 255);

const makeSquare = () => {
	return ({
		color: `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`,
		hidden: false
	})
}

export class App extends React.Component {

	constructor(props) {
		// READ: https://reactjs.org/docs/react-component.html#constructor
		// Why avoid componentDidMount: https://reactjs.org/docs/react-component.html#componentdidmount
		super(props);

		const squares = [
			makeSquare(),
			makeSquare(),
			makeSquare(),
			makeSquare(),
			makeSquare(),
			makeSquare(),
		];

		this.state = {
			squares,
			rightSquareIndex: Math.floor(Math.random() * squares.length)
		}
	}

	render() {
		const { squares, rightSquareIndex } = this.state;
		const rightSquare = squares[rightSquareIndex];

		return (
			<div>

				<Header color={rightSquare.color} />

				<Controls />

				<Squares squares={squares} />

	
			</div>
		)
	}
}

export default App;