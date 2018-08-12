import React from "react";


export class App extends React.Component {
	render() {
		return (
			<div>

				<div className="title">
					<h1>
						The great RGB Color Game
						<div id="rgb">rgb(XXX, YYY, ZZZ)</div>
					</h1>
				</div>


				<div className="info">
					<div className="container">
						<div className="navbar">

							<button id="restart" >Play again</button>

							<span id="message"></span>

							<button >EASY</button>
							<button className="active">HARD</button>
						</div>
					</div>
				</div>

				<div className="squares">
					<div className="square" />
					<div className="square" />
					<div className="square" />
					<div className="square" />
					<div className="square" />
					<div className="square" />
				</div>

	
			</div>
		)
	}
}

export default App;