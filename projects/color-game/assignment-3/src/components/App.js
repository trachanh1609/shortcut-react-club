import React from "react";
import Header from "./Header";
import Controls from "./Controls";
import Squares from "./Squares";

const makeSquare = (r, g, b) => ({
	color: `rgb(${r}, ${g}, ${b})`,
	hidden: false
})

export class App extends React.Component {

	state = {
		squares: [
			makeSquare(125,125,125),
			makeSquare(0,125,125),
			makeSquare(125,0,125),
			makeSquare(125,125,0),
			makeSquare(255,125,125),
			makeSquare(125,255,125)
		]
	}

	render() {
		const { squares } = this.state;

		return (
			<div>

				<Header />

				<Controls />

				<Squares squares={squares} />

	
			</div>
		)
	}
}

export default App;