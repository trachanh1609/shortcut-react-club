import React, { Component } from "react"
import Game from "./Game";

export class App extends Component {

  render() {
    return (
      <div className="tic-tac-toe">
        <h1>Tic Tac Toe</h1>

        <Game />

      </div>
    )
  }
}

export default App;