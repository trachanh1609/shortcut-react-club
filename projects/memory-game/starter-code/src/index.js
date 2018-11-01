import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Card from './components/card';

const RANKS = Array.from(Array(13).keys());
const SUITS = ['hearts', 'diamonds', 'clubs', 'spades'];

class StarterCode extends React.Component {

	state = {
		hands : [
			{rank: 0, suit: 'hearts'},
			{rank: 0, suit: 'diamonds'},
		]
	}

	initHands = ()=>{
		let randRank = Math.floor(Math.random()*13) ;
		const gameRanks = RANKS ;
		const gameSuits = SUITS ;

	}

	render() {
		return (
			<div className="MemoryApp">

				<div className={"game"}>
					<div className={"modal"}>
						<div className={"menu"}>
							<h2 className={"white"} >Congrats !</h2>

							<div className="menuItem"> Play Again </div>
							<div className="menuItem"> Main Menu </div>

						</div>
					</div>

					<div className={"card diamonds"}> <p>A</p> </div>
					<div className={"card hearts"}> <p>2</p> </div>
					<div className={"card clubs"}> <p>3</p> </div>
					<div className={"card spades"}> <p>A</p> </div>
					<div className={"card diamonds "}> <p>10</p> </div>
					<div className={"card hearts hidden"}> <p>A</p> </div>
					<div className={"card spades hidden"}> <p>A</p> </div>
					<Card></Card>

					<button onClick={this.initHands}>Test Button</button>

				</div>

			</div>
		)
	}
}


ReactDOM.render(<StarterCode />, document.getElementById('root'));
registerServiceWorker();
