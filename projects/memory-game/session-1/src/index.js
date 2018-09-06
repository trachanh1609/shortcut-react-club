import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const suites = ["diamonds", "hearts", "spades", "clubs"]
const numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]; 
const deck = suites.reduce((acc, suite) => {
	return [
		...acc,
		...numbers.map((number) => {
			return {
				suite,
				number
			}
		})
	]
}, []);
//[{suite: "diamonds", number: "2"},{suite: "diamonds", number: "3"}, ...{suite: "hearts", number: "2"}, ... ] //length = 52

// for(let i = 0; i < suites.length; i++){
// 	for(let j = 0; j < numbers.length; j++ ){
// 		deck.push({
// 			suite: suites[i], 
// 			number: numbers[j]
// 		})
// 	}
// }


const randomDeck = () => {
	const cards = Array(4).fill().slice()

	return Array(4);
	
}


class StarterCode extends React.Component {



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
					<div className={"card hearts"}> <p>A</p> </div>
					<div className={"card clubs"}> <p>A</p> </div>
					<div className={"card spades"}> <p>A</p> </div>
					<div className={"card diamonds hidden"}> <p>A</p> </div>
					<div className={"card hearts hidden"}> <p>A</p> </div>
					<div className={"card clubs hidden"}> <p>A</p> </div>
					<div className={"card spades hidden"}> <p>A</p> </div> */}

					<Card />
				</div>

			</div>
		)
	}
}


class Card extends React.Component {



	randomCard = () => {
		return {
			suite: this.suites[Math.floor(Math.random() * this.suites.length)],
			number: this.numbers[Math.floor(Math.random() * this.numbers.length)]
		}
	}

	render() {
		const card = this.randomCard(); 
		return (
			<div className={`card ${card.suite}`}>
				<p>{card.number}</p>
			</div>
		)
	}
}


ReactDOM.render(<StarterCode />, document.getElementById('root'));
registerServiceWorker();
