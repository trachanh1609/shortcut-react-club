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

	state = {
		squares: [
			makeSquare(),
			makeSquare(),
			makeSquare(),
			makeSquare(),
			makeSquare(),
			makeSquare()
		]
	}

	render() {
		const { squares } = this.state;
		const firstSquare = squares[0];

		return (
			<div>

				<Header color={firstSquare.color} />

				<Controls />

				<Squares squares={squares} />

	
			</div>
		)
	}
}

export default App;