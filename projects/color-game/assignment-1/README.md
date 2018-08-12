This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Color Game

This Color Game is a React application inspired by the Color Gessing game from Colt Steele's course "Web Developper Bootcamp" hosted on Udemy.

The game provides the user with a 'rgb color notation' and 3 or 6 colored boxes. The user must find the color corresponding to the rgb notation and click on the box matching that color.

This repository provides the source code and the test files for one way to implement this game with React16.

# Demo

You can try the app [here!](https://shortcut-peer-learning-react.herokuapp.com/color-game/build/)

# Install & Usage

- Clone or Download the project to your computer
- Navigate to the project directory
- Install dependencies by running `npm install`
- Start the project by running `npm start`
- Test the project by running `npm test`

# Implement your own game

Level: easy

Skills Needed:
- Understanding on State
- Understanding of Props
- Understanding of Event Listeners

## Setup
- Use create-react-app to setup your application

## Features
- The application must generate the colors randomly
- You have two difficulty modes: 'easy' with 3 boxes and 'hard' with 6 boxes
- The game promps a rgb color to the user using this notation: `"rgb(<red>, <green>, <blue>)"` where each color is a random number between 0 and 255 (i.e: `"rgb(62,108,255)"` )
- The color prompted to the user must be matching exactly one of the boxes. The other boxes use other random colors
- The user can  change the difficulty by clicking on a button
- The user can click on a "Play again" button. The game restarts and new colors are generated
- The user must be able to click on one of the squares
  - If the square matches the rgb color, all the squares are visible and share the same color and a text "Correct Answer!" appears
  - If the square does not match the rgb color, the square disapears from the screen and a text "Try again!" appears

## Bonuses
- Have a "try again" counter
- Display the best score
- Display the number of perfect answers
- Add more difficulty levels
- Let the user choose another color notation

## Advanced Bonuses
- Use a [custom font](https://fonts.googleapis.com/css?family=Mina) (understanding of create-react-app public directory)
- Write unit tests
- Use PropTypes
- Use [Flow Type](https://flow.org/) ([create-react-app doc](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-flow))

# About
This repository's Objective is to provide code examples for a react peer learning group from the [Shortcut Community](http://theshortcut.org/) in Finland.

