This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Memory Game

In this game, you will have to find all the matchings cards from a randomly generated pool.

This repository provides the source code for one way to implement this game with React16.

# Demo

Comming soon...

# Install & Usage

- Clone or Download the project to your computer
- Navigate to the project directory
- Install dependencies by running `npm install`
- Start the project by running `npm start`

# Implement your own game

Level: easy

Skills Needed:
- Understanding of State
- Understanding of Props
- Understanding of Event Listeners

## Setup
- Use create-react-app to setup your application

## Features
- The game picks 4 random cards from a pool of [52 playing cards](https://en.wikipedia.org/wiki/Standard_52-card_deck#/media/File:Piatnikcards.jpg)
- 8 shuffled cards are displayed (4 pairs)
- The cards are laid face down
- The user can reveal 2 cards at once
  - If the cards are the same, they stay revealed
  - Otherwise the cards are turned face down after a short time
- The user wins when all the cards are revealed
- When the user wins, a Menu appears with 2 options:
  - Play again: start a new game
  - Go to Menu (See Bonus)

## Bonuses
 - Add a menu to select difficulty
   - Classic Mode : Start a game, 8 cards are displayed
   - Hard Mode: Start a game, 16 cards are displayed
 - Make the card disapear faster on Hard difficulty
 - Add a counter to display the number of guesses

## Advanced Bonuses
- Use a [custom font](https://fonts.googleapis.com/css?family=Mina) (understanding of create-react-app public directory)
- Write unit tests
- Use PropTypes
- Use [Flow Type](https://flow.org/) ([create-react-app doc](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-flow))

# About
This repository's Objective is to provide code examples for a react peer learning group from the [Shortcut Community](http://theshortcut.org/) in Finland.

