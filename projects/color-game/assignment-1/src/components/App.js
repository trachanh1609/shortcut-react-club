import React from "react";
import Header from "./Header";
import Controls from "./Controls";
import Squares from "./Squares";


export class App extends React.Component {
	render() {
		return (
			<div>

				<Header />

				<Controls />

				<Squares />

	
			</div>
		)
	}
}

export default App;