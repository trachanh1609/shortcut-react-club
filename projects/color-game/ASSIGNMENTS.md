# Assignments

1. Split the static markup into reusable components
 
   - Create a component per file
   - Move the static markup to their components
   - Make the App component use your reusable components
   - You should see the same content at the end (in your browser)

2. Create the app state
 
   - The app should render squares that can change color and visibility over time
   - Create a state object in App component
   - Make a function 'makeSquare' that accepts numbers between 0 and 255 for r,g,b and return an object with a 'color' and 'hidden' attribute (hidden set to false) 
   - Create an an attribute 'squares' which is array with 6 squares of different colors
   - (Bonus) Use [React devtools](https://github.com/facebook/react-devtools) to validate that you App component has a state with an array of 6 boxes.

3. Make the Squares component dynamic
 
   - Pass the state attribute 'squares' as a prop to the Squares component
   - Replace the static markup with the dynamic content (using this.props.squares.map)
   - Don't forget to give a key to the square in order to suppress the react warnning
   - Give your square the right 'style' prop to display the right background-color
   - At the end you should see 6 boxes with the color you defined in the App component

4. Make the square colors random
 
   - When the page loads, generate 6 random colors
   - Pass a prop 'color' to the Header component that is the color of the first box in the boxes array
   - Make the prop 'color' of the Header component be a random color from one of the boxes.

5. Make sure the prop 'color' passed to the Header component doesn't change unless we want it (or the app reloads)

   - Create a `rightSquareIndex` in your state and assign it a random number (hint: use [class constructors](https://reactjs.org/docs/react-component.html#constructor))
   - There should not be any random call in your render method. use your state attributes to extract the right square's color and pass it to Header

6. Adding event listeners
   - Play again
     - In your Controls component play again button, add this prop: `onClick={this.props.onPlayAgainClick}`
     - In your App component create a method `handlePlayAgainClick` and pass the prop to you Controls
     - In your App component implement the Play again feature. It should generate 6 new squares and a new rightSquareIndex
   - Change difficulty
     - In your Controls component, add a onClick prop that calls `this.props.onChangeDifficulty()` with argument true if click on easy or false if click on hard
     - In you App component, create a handleChangeDifficulty that accepts a boolean 'isEasy'. If true, start a new game with 3 squares, else create a new game with 6 squares
   - [Bonus] : add the className "active" to the good button in Controls

7. Game logic
   - In your Squares component, add a onClick prop to each square that calls `this.props.onClickSquare` and gives the square index as argument
   - In your App component, implement the `handleClickSquare` method that takes an index:
     - If the square is hidden, do nothing
     -  If the index matches the rightSquareIndex, change all squares attributes to `hidden to false` and `color to <color-of-the-right-square>`
     - Otherwise, set the square `hidden` attribute to true


8. Bonuses
   - Disable square click when game is won
   - Add a text `try again!` or `Correct answer` in the Controls component
     - the right text shows according to the last handleClickSquare
   - Use classNames in the Squares component to use css animations
     - Look in the index.css file to see all the styles available
   - add propTypes and defaultProps