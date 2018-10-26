import React, { Component } from "react";
import { Game } from "./Game";
import MainMenu from "./MainMenu";

export class App extends Component {
	state = {
		nPairs: 0,
	};

	handleReset = () => {
		this.setState({
			nPairs: 0,
		});
	};

	handleSelectDifficulty = difficulty => {
		this.setState({ nPairs: difficulty !== "hard" ? 4 : 8 });
	};

	render() {
		const { nPairs } = this.state;

		return (
			<div className="MemoryApp">
				{!nPairs ? (
					<MainMenu onSelect={this.handleSelectDifficulty} />
				) : (
					<Game nPairs={nPairs} onBackToMenu={this.handleReset} />
				)}
			</div>
		);
	}
}

export default App;
