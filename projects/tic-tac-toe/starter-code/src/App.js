import React, { Component } from "react"


export class App extends Component {

  render() {
    return (
      <div className="tic-tac-toe">
        <h1>Tic Tac Toe</h1>

        {/* <div className="alert-message">
          <h2>It's a Tie</h2>
          <button >Play Again</button>
        </div> */}

        <div className="game">

          <div className="controls">
            <button >New Game</button>
            <span>Your turn: <i className="fas fa-times" /></span>
          </div>

          <div className="grid">

            <div className={`box`} >
              <div className={`box-content player-1`}><i className="fas fa-times" /></div>
              <div className="box-preview"></div>
            </div>

            <div className={`box`} >
              <div className={`box-content player-1`}><i className="fas fa-times" /></div>
              <div className="box-preview"></div>
            </div>

            <div className={`box`} >
              <div className={`box-content`}></div>
              <div className="box-preview"><i className="fas fa-times" /></div>
            </div>

            <div className={`box`} >
              <div className={`box-content player-2`}><i className="far fa-circle" /></div>
              <div className="box-preview"></div>
            </div>

            <div className={`box`} >
              <div className={`box-content player-2`}><i className="far fa-circle" /></div>
              <div className="box-preview"></div>
            </div>

            <div className={`box`} >
              <div className={`box-content`}></div>
              <div className="box-preview"><i className="fas fa-times" /></div>
            </div>
            <div className={`box`} >
              <div className={`box-content`}></div>
              <div className="box-preview"><i className="fas fa-times" /></div>
            </div>

            <div className={`box`} >
              <div className={`box-content`}></div>
              <div className="box-preview"><i className="fas fa-times" /></div>
            </div>

            <div className={`box`} >
              <div className={`box-content`}></div>
              <div className="box-preview"><i className="fas fa-times" /></div>
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default App;