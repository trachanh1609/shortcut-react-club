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
		clicked: [],
	}

	componentDidMount = () => {
		this.initHands();
	}

	initHands = ()=>{
		const pairs = 4
		const randomRankArray = this.getRandomRankArray(pairs);
		const randomSuitArray = this.getRandomSuitArray(pairs);
		const hands = [];

		for(let i=0; i < pairs; i++){
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

		console.log("hands", hands);
		this.setState({hands: this.shuffle(hands)})
	}

	getRandomSuitArray = (pairs) => {
		const randomSuitArray = [];
		const noOfSuits = 4 ;
		const SUITS = ['hearts', 'diamonds', 'clubs', 'spades'];

		for(let i = 0; i < pairs; i++) {
			const randomIndex = Math.floor(Math.random()*noOfSuits);
			randomSuitArray.push(SUITS[randomIndex]);
		}
		// console.log("randomSuitArray", randomSuitArray);
		return randomSuitArray;
	}

	getRandomRankArray = (pairs) => {
		const randomRankArray = [];
		const noOfRanks = 13;
		const RANKS = Array.from(Array(noOfRanks).keys()); ;
		let noOfRankLeft;

		for(let i=0; i < pairs; i++ ){
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

	shuffle(array) {
		let counter = array.length;
	
		// While there are elements in the array
		while (counter > 0) {
			// Pick a random index
			let index = Math.floor(Math.random() * counter);
	
			// Decrease counter by 1
			counter--;
	
			// And swap the last element with it
			let temp = array[counter];
			array[counter] = array[index];
			array[index] = temp;
		}
	
		return array;
	}

	handleClick = (cardID)=>{
		const { clicked, hands } = this.state ;
		const clickedCardIndex = hands.findIndex( (card) => {
			return card.id === cardID
		});

		const clickedCard = hands[clickedCardIndex];
		clickedCard.hidden = !clickedCard.hidden ;

		hands[clickedCardIndex] =  clickedCard ;

		this.setState({hands });
	}

	flipCard = (cardID) => {

	}

	wait = miliseconds => {
		return new Promise(resolve => setTimeout(resolve, miliseconds));
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
								id={card.id}
								rank={card.rank}
								suit={card.suit}
								hidden={card.hidden}
								handleClick={this.handleClick}
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
