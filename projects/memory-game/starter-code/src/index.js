import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Card from './components/Card';
import { HOLDING_TIME } from './GlobalVariables';

// const RANKS = Array.from(Array(13).keys());
// const SUITS = ['hearts', 'diamonds', 'clubs', 'spades'];


class StarterCode extends React.Component {

	state = {
		hands : [],
		freezedCards : [],
		hasWinner: false,
		onHold: false,
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
				hidden: true,
			}
			const firstCard = {...card, id: i*2};
			const secondCard= {...card, id: i*2 + 1 }
			hands.push(firstCard);
			hands.push(secondCard);
		}

		this.setState({hands: this.shuffle(hands), freezedCards: [], hasWinner: false, onHold: false}) ;
		// this.setState({hands, freezedCards: [], hasWinner: false, onHold: false}) ;

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

	handleClick = async (cardID)=>{
		console.log("\n Click", cardID);
		const noOfCards = 8 ;
		const {freezedCards, onHold} = this.state;
		if( freezedCards.includes(cardID) || onHold ) {;
			return
		} else if (freezedCards.length % 2 === 0) {
			freezedCards.push(cardID);
			await this.setStateAsync({freezedCards});
			await this.flipCard(cardID) ;
			
		} else if (freezedCards.length % 2 === 1) {
			const secondCardID = await this.flipCard(cardID) ;
			// const secondCardID = cardID ;
			const firstCardID = freezedCards.pop();
			freezedCards.push(firstCardID);
			freezedCards.push(secondCardID);
			await this.setStateAsync({freezedCards, onHold: true});
			
			const areSameCards = this.areSameCards(firstCardID, secondCardID);
			if (areSameCards) {
				const hasWinner = await this.hasWinner( noOfCards );
				await this.setStateAsync({hasWinner, onHold: false}) ;
				
			} else {
				await this.wait(HOLDING_TIME);
				freezedCards.pop();
				freezedCards.pop();
				await this.setStateAsync({freezedCards, onHold: false});
				await this.flipCard(firstCardID);
				await this.flipCard(secondCardID);
			}
		}
		

	}

	setStateAsync = (state) => {
		return new Promise((resolve) => {
		  this.setState(state, resolve)
		});
	}

	hasWinner = (noOfCards) => {
		const {freezedCards} = this.state ;
		if ( freezedCards.length === noOfCards) {
			console.log("Yay, we have a winner !");
			return true
		} else {
			return false
		}
	}

	areSameCards = (firstID, secondID) => {
		const { hands } = this.state;

		const filterCards = hands.filter( card => {
			return card.id === firstID || card.id === secondID ;
		})

		if (filterCards.length === 2 && filterCards[0].rank === filterCards[1].rank && filterCards[0].suit === filterCards[1].suit ) {
			return true ;
		} else {
			return false ;
		}
	}

	flipCard = (cardID) => {
		console.log("flipCard ", cardID) ;

		const { hands } = this.state ;
		const clickedCardIndex = hands.findIndex( (card) => {
			return card.id === cardID
		});

		const clickedCard = hands[clickedCardIndex];
		clickedCard.hidden = !clickedCard.hidden ;

		hands[clickedCardIndex] =  clickedCard ;
		// this.setState({hands });
		return new Promise(
			(resolve) => {
				this.setState({hands}, resolve(cardID));
			}
		);
	}

	wait = miliseconds => {
		return new Promise(resolve => setTimeout(resolve, miliseconds));
	}

	render() {
		
		// console.log("hands", this.state.hands);
		console.log("freezedCards", this.state.freezedCards);
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
