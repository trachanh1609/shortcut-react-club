import React, { Component } from "react";
import Card from "./Card";
import Modal from "./Modal";
import deck, { shuffle, compare } from "../lib/deck";

export class Game extends Component {
	constructor(props) {
		super(props);

		this.state = this.getNewGameState();
		this.timeoutId = null;
	}

	static defaultProps = {
		nPairs: 4,
		onBackToMenu: () => {},
	};

	/**
	 * Called immediately before a component is destroyed.
	 * Perform any necessary cleanup in this method, such as cancelled network requests,
	 * or cleaning up any DOM elements created in `componentDidMount`.
	 */
	componentWillUnmount() {
		if (this.timeoutId) {
			clearTimeout(this.timeoutId);
		}
	}

	/**
	 * return the game's initial state. Used in the constructor or when the user requests a to play a new game
	 */
	getNewGameState = () => {
		const { nPairs } = this.props;
		const sample = shuffle(deck).slice(0, nPairs);

		return {
			cards: shuffle([...sample, ...sample]),
			win: false,
			guesses: [],
			pairs: [],
			hintDelay: 1000 / Math.log(nPairs),
			tries: 0,
		};
	};

	/**
	 * In charge of handling the game logic:
	 * - Checking if two guesses match (and add them to the pairs array)
	 * - Call a setTimout if the guesses doesn't match
	 * - set win to true if all the pairs are found
	 */
	update = () => {
		const { cards, pairs, guesses, hintDelay, tries } = this.state;

		if (guesses.length >= 2) {
			const [first, second] = guesses.map(index => cards[index]);

			if (compare(first, second) === 0) {
				const newPairs = [...pairs, ...guesses.slice(0, 2)];

				this.setState({
					pairs: newPairs,
					win: newPairs.length === cards.length,
					guesses: [],
					tries: tries + 1,
				});
			} else {
				this.timeoutId = setTimeout(() => {
					this.setState({ guesses: [], tries: tries + 1 });
				}, hintDelay);
			}
		}
	};

	/**
	 * Handling method when a user clicks on a card.
	 * Will add the card to the list of guesses if the card isn't already visible.
	 * Will trigger the `Game.update` method after changing the state.
	 */
	handleClick = (e, index) => {
		e.preventDefault();

		const updateGuesses = state => {
			const { guesses, pairs, tries } = state;

			//if the clicked card has already been clicked, we don't update
			if ([...guesses, ...pairs].some(i => index === i)) {
				return null;
			}

			//if user clicked on a thrid card, skip the hint timeout and reset the guesses
			if (guesses.length >= 2) {
				if (this.timeoutId) clearTimeout(this.timeoutId);
				return { guesses: [index], tries: tries + 1 };
			}

			return { guesses: [...guesses, index] };
		};

		this.setState(updateGuesses, this.update);
	};

	handleNewGame = e => {
		this.setState(this.getNewGameState());
	};

	render() {
		const { win, cards, guesses, pairs, tries } = this.state;
		const { nPairs, onBackToMenu } = this.props;

		return (
			<div className={"game"}>
				<Modal open={win}>
					<div className={"menu"}>
						<h2 className={"white"}>
							{tries === nPairs && `Perfect Win! (${tries} tries)`}
							{tries !== nPairs && `Congrats! you won with ${tries} tries`}
						</h2>

						<div className="menuItem" onClick={this.handleNewGame}>
							Play Again
						</div>
						<div className="menuItem" onClick={onBackToMenu}>
							Main Menu
						</div>
					</div>
				</Modal>

				{cards.map(([suite, value], i) => (
					<Card
						key={i}
						suite={suite}
						value={value}
						hidden={![...guesses, ...pairs].some(index => index === i)}
						onClick={e => this.handleClick(e, i)}
					/>
				))}
			</div>
		);
	}
}

export default Game;
