import React, { Component } from "react";
// import PropTypes from "prop-types";

/**
 * 04-0 - Intro to smart components
 *
 * Until now we created "functional components" also known as "stateless components" or "dump components"
 *
 * Those components are called like this because they can only return JSX based on the props that we give them.
 * In this section, we are going to learn what are "smart components" (or "stateful components")
 *
 * Let's take the example of a Counter component. A counter is a component that renders a button and a "count" (number).
 * When you click on the button, you want your component to be "smart" and increment the "count".
 *
 * Unfortunately, our functional components are dumb, they receive read-only props and can't do much about it.
 * Take the example of the two components below, "BadCounter1" and "BadCounter2":
 *
 * - BadCounter1 receive a count as prop, and when we click on a button, we try to mutate the props.count
 *   I'll let you try that on the browser (npm start) and see what happens. (refresh page or click on the 'x' when done)
 *
 * - Let's try with BadCounter2, we decice to go against React methodology and use the count directly
 *  the count act as a global variable, let's also try that on the browser....
 *  You should see that the component doesn't work. It as nothing to do with the code but with React.
 *  (You can check your browser's console, you'll see that the count is updating)
 *  React will only update the DOM if the props (or 'state', comming soon) changes. But here something outside React changed, hence no update.
 *
 *  So, you can't update the props directly, and passing data outside of props, will not work... What should we do?
 *  Let's see that on the next exercices !
 *
 * NB: note on the "onClick" prop:
 *   all builtin components (starting with lowercase like 'div', 'input', 'button', ....) accept a lot of props.
 *   You already seen the "className" prop (same as class in html), now you have discovered the "onClick" (same as "onclick" in html)
 *   onClick expects a function and whenever the button is clicked, the function will be called. (think addEventListener)
 *   In these examples we try to mutate (change the value of) our count.
 *   We are going to use eventListeners from now on, for more info read: https://reactjs.org/docs/handling-events.html
 *
 */

let count = 0;
export function BadCounter1(props) {
    function updateCount() {
        ++props.count;
    }

    return (
        <div>
            <button onClick={updateCount}>Click me</button>
            <p>{props.count}</p>
        </div>
    );
}

export function BadCounter2() {
    function updateCount() {
        ++count;
        console.log("new count:", count);
    }

    return (
        <div>
            <button onClick={updateCount}>Click me</button>
            <p>{count}</p>
        </div>
    );
}

export const badCounter1 = <BadCounter1 count={count} />;
export const badCounter2 = <BadCounter2 />;

/**
 * 04-1 - Your first smart component
 *
 * Let's get started, as you now know, functional (dumb) components can't be used to build a Counter component.
 * So it won't be much use to create your next Facebook App. So let's learn a new kind of components that are "smart".
 *
 * In React (using es6), when we want to create smart components we create JS classes.
 * Read all about classes here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * or here: https://dev.to/rainerhahnekamp/javascript-and-object-oriented-programming-55k6
 *
 * In React, our classes always start the same:
 *
 * class MyComponentName extends Component {
 *
 *   render() {
 *    const props = this.props;
 *
 *     return (
 *      //your JSX here
 *     )
 *   }
 * }
 *
 * 1.Make sure to import React, { Component } from "react"
 * 2. MyComponentName is the name of your component
 * 3. render(){} is a method of your class and is required. It is the most important piece of your component and returns JSX element.
 *
 * Now that you now everything about class components, it's your turn to code!
 *
 * Export a class component named "SmartCounter" that extends Component.
 *
 * Inside your render method, return a div. That div contains a button with text "click me" and a p (empty for now)
 *
 *
 *
 *
 *
 *
 *
 * 04-2 - adding memory to your state
 *
 * Instead of using the props.count, we are going to store the "count" inside the class component.
 *
 * Inside your class and before your render method. Create a "constructor" method. This methods expects a "props" argument.
 * Inside your constructor method, fist thing to do is to forward the props to React.Component, using the "super" keyword.
 * constructor(props) {
 *  super(props);
 *  // rest of your code
 * }
 *
 * After calling super, you are going to attach the property "state" to the component.
 * You can access your component with the keyword "this".
 *
 * Your state should be an object with one key: [number] 'count' and defaulting to 0
 *
 * Now inside your render method, assign the value of "this.state.count" to your 'p' component.
 *
 *
 *
 *
 *
 *
 *
 *
 * 04-3 viewing your component.
 *
 * Let's pause there and see what your component renders.
 *
 * export a variable named "myCounter" and assign it an instance of SmartCounter.
 * You should see on the browser your smartCounter and it's identical to badCounter1 and badCounter2
 *
 *
 *
 *
 *
 *
 *
 * 04-4 updating your state
 *
 * If we did all that, it was to fix a problem: "How can I change the count?"
 * So let's do just that.
 *
 * return to your SmartCounter component and create a method named "handleClick" between your constructor and render method.
 *
 * The handleClick method will be called with one argument but we don't need it, so let's the parameters empty.
 * add a prop "onClick" to the button and assign it the "handleClick" method (onClick={this.handleclick})
 *
 * Inside this function, we are going to update the state. First I'll show you how NOT to do it.
 *
 * Bad way of doing it:
 *  inside the handleClick, do something like : "this.state.count += 1". Save and try it in your browser...
 *  ...And it's crashing (at least it should)!
 *
 *
 * if it's not crashing, make sure your handleClick is defined like this: "handleClick() {}"
 *
 * if it's crashing... It's not because of your code but because of how es6 class works.
 * The error: "this is not defined". That's because the "this" keyword is not forwarded to the button's onClick prop.
 *
 * Two solutions for that: either using bind or using arrow function.
 *
 * The bind way: in your constructor method, do this "this.handleClick = this.handleClick.bind(this)"
 *
 * the arrow function way: replace "handleClick(){}" by "handleClick = () => {}"
 * This is the other way to fix the binding issues.
 *
 * This exercice is long enough, please ask on slack or github for more info.
 *
 * Now, that you fix the binding issue, try again...
 * ...And it's not working !
 *
 * That's because of state should never be modified directly.
 * It won't crash the same way as mutating props.count in BadCounter1 but it will behave the same as BadCounter2.
 * Try to add a 'console.log("count", this.state.count)' just after 'this.state.count += 1'
 * You'll see that the counter is being updated but your component won't re-render and update the DOM.
 *
 *
 *
 *
 *
 *
 *
 * 04-5 the React way to mutate state
 *
 * The current code doesn't work because React doesn't know that the state changed.
 * Because React only updates (calls render again) when the state or props changes, you need to do it the right way.
 *
 * The right way is to never mutate state or props yourself.
 * To update the state, you need to use a method provided by Component: "this.setState".
 *
 * We will go easy and just use the basic form of setState. In the basic form, setState expects a new object.
 * inside this object you will provide the new values for the attributes that changed in your state.
 * For now we only have "count" but if you had more, React would be smart enough to keep the unchanged ones and change only those who changed.
 *
 * example: this.setState({
 * count: this.state.count + 1
 * })
 *
 * note how we never change this.state.count but use it to create a new state object!
 *
 * In your handleClick method, replace "this.state.count +=1" to "this.setState(...)"
 * Remove the console.log line and try it in your browser...
 * ...And TADAAA! Finally working!
 *
 */

/**
 * 04-6 Conclusion(ish)
 *
 * I'm sorry for the long exercice but once you understand state and how to update it, it will become super easy to use.
 * The exercices are going faster and faster, this is also to encourage you to ask questions during the sessions and on slack.
 * Otherwise I would have to write a thousand line of instruction and dozens of exercices, which would be complicated to do.
 *
 * Now you have made your first smart component and seen a bit of event handling in React.
 * From now on we will be using both functional and class components.
 *
 * We will use functional components when the component doesn't need to be "smart" (store and mutate state).
 * We will use class components to store the state and "command" the "dumb" components.
 *
 * Before we go to the next step,
 * In order to demonstrate why we need to store the state inside the component (and not outside like in BadCounter2),
 *
 * You're going to export a variabled named "mySecondCounter" and assign it another instance of "SmartCounter".
 * Now go to your browser and click on either one or the other counters.
 *
 * You'll see that they are independant, each component owns its own state and each component manages its own state.
 * This is part of what makes React powerful, being able to reuse and compose stateless and statefull components alike.
 * Another part is that React will only update the DOM if the props or the state changed,
 * and because you'll never mutate (change) either of them yourself (always use setState), React will be able to perfom it's task efficiently!
 */
