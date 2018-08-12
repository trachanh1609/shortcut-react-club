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
