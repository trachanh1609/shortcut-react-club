import React, { Component } from "react"
import { Controls } from "./Controls";
import { Grid } from "./Grid";
import { AlertMessage } from "./AlertMessage";

export class Game extends Component {
	render() {
		return (
			<div className="game">

          {/* <AlertMessage /> */}
          <Controls />
          <Grid boxes={[]} />
        </div>
		)
	}
}

export default Game;