import React, { Component } from "react"
import { Controls } from "./Controls";
import { Grid } from "./Grid";
import { AlertMessage } from "./AlertMessage";

export class Game extends Component {

    constructor(props) {
        super(props);

        this.state = Game.getNewGameState();
    }


    static getNewGameState = () => {
        return {
            boxes: Array(9).fill(null), //null, 'X', 'O'
            currentPlayer: "X", // 'X', 'O'
            winner: null, //null, 'X', 'O'
        }
	}
	
	checkWinner = () => {
		const { boxes } = this.state;

		const winChecks = [
			[0,1,2],
			[3,4,5],
			[6,7,8],

			[0,3,6],
			[1,4,7],
			[2,5,8],

			[0,4,8],
			[2,4,6]
		]

		const winningRow = winChecks.find(row => {
			const [a, b, c] = row;

			return boxes[a] !== null && boxes[a] === boxes[b] && boxes[a] === boxes[c]
		})

		if (winningRow) {
			const [ a ] = winningRow;

			this.setState({
				winner: boxes[a]
			})
		}
	}

	handleNewGame = () => {
		const newState = Game.getNewGameState();

        this.setState(newState)
	}

	handleBoxClick = (index) => {

		const stateUpdater = (prevState)  => {
			const { boxes, currentPlayer } = prevState;

			if (index < 0 || index >= boxes.length || boxes[index] !== null) {
				return {}
			}

			return {
				boxes: boxes.map((box, i) =>  i === index ? currentPlayer : box),
				currentPlayer: currentPlayer === "X" ? "O" : "X"
			}
		}
        this.setState(stateUpdater, this.checkWinner);
	}

    render() {
        const { boxes, currentPlayer, winner } = this.state;
		const isTie = !winner && boxes.every(b => b !== null);
		
        return (
            <div className="game">

                {winner && <AlertMessage message={`${winner} won!`} onClick={this.handleNewGame} />}
                {isTie && <AlertMessage message={`It's a tie!`} onClick={this.handleNewGame} />}

                <Controls currentPlayer={currentPlayer} onNewGameClick={this.handleNewGame} />
                <Grid
                    currentPlayer={currentPlayer}
                    boxes={boxes}
                    onBoxClick={this.handleBoxClick}
                />
            </div>
        )
    }
}

export default Game;