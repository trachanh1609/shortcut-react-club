import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Card from './components/Card';

// const RANKS = Array.from(Array(13).keys());
// const SUITS = ['hearts', 'diamonds', 'clubs', 'spades'];

class StarterCode extends React.Component {

	state = {
		hands : [],
	}

	componentDidMount = () => {
		this.initHands();
	}

	initHands = ()=>{
		const noOfCards = 4
		const randomRankArray = this.getRandomRankArray(noOfCards);
		const randomSuitArray = this.getRandomSuitArray(noOfCards);
		const hands = [];

		for(let i=0; i < noOfCards; i++){
			const card = {
				rank: randomRankArray[i],
				suit: randomSuitArray[i],
				hidden: false,
			}
			const firstCard = {...card, id: i*2};
			const secondCard= {...card, id: i*2 + 1 }
			hands.push(firstCard);
			hands.push(secondCard);
		}

		// console.log("hands", hands);
		this.setState({hands})
	}

	getRandomSuitArray = (noOfCards) => {
		const randomSuitArray = [];
		const noOfSuits = 4 ;
		const SUITS = ['hearts', 'diamonds', 'clubs', 'spades'];

		for(let i = 0; i < noOfCards; i++) {
			const randomIndex = Math.floor(Math.random()*noOfSuits);
			randomSuitArray.push(SUITS[randomIndex]);
		}
		// console.log("randomSuitArray", randomSuitArray);
		return randomSuitArray;
	}

	getRandomRankArray = (noOfCards) => {
		const randomRankArray = [];
		const noOfRanks = 13;
		const RANKS = Array.from(Array(noOfRanks).keys()); ;
		let noOfRankLeft;

		for(let i=0; i < noOfCards; i++ ){
			noOfRankLeft = noOfRanks - i ;
			const randomIndex = Math.floor(Math.random()*noOfRankLeft) ;

			const randomRank = RANKS[randomIndex];
			RANKS.splice(randomIndex, 1);
			// console.log("RANKS", RANKS);
			randomRankArray.push(randomRank);
		}
		// console.log(randomRankArray);
		return randomRankArray;
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

					{/* <div className={"card diamonds"}> <p>A</p> </div>
					<div className={"card hearts"}> <p>2</p> </div>
					<div className={"card clubs"}> <p>3</p> </div>
					<div className={"card spades"}> <p>A</p> </div>
					<div className={"card diamonds "}> <p>10</p> </div>
					<div className={"card hearts hidden"}> <p>A</p> </div>
					<div className={"card spades hidden"}> <p>A</p> </div> */}

					{
						this.state.hands.map(card => 
							<Card
								key={card.id}
								rank={card.rank}
								suit={card.suit}
								hidden={card.hidden}
							></Card>
						)
					}

					<button onClick={this.initHands}>Test Button</button>

				</div>

			</div>
		)
	}
}


ReactDOM.render(<StarterCode />, document.getElementById('root'));
registerServiceWorker();
