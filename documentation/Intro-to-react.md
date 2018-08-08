# Intro to React

This is a short document where external resources have been selected to introduce React.

This document is tailored for the group's live sessions. For a full guide, you should read the [React Official guide](https://reactjs.org/docs/hello-world.html).

## Resources
- [ReactJS official website](https://reactjs.org/)
- [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
- [React Official guide](https://reactjs.org/docs/hello-world.html)
- [Component and Props](https://reactjs.org/docs/components-and-props.html)
- [State and Lifecyle](https://reactjs.org/docs/state-and-lifecycle.html)
- [Imperative vs Declarative](http://latentflip.com/imperative-vs-declarative)

## What is React?

ReactJS is a library made to build user interfaces.

1. It uses a [declarative](http://latentflip.com/imperative-vs-declarative) approach so you focus on describing *what* you want your UI to look like instead of writing code that tells *how* your UI works.
```
//Example

//React
//Describes, "I want some markup with that content"
const App = ({weather}) => (
	<div>
		<h1>Welcome to weather station</h1>
		<div>
			It is {weather.forecast} in {weather.city}
		</div>
	</div>
)

//Jquery
//Tells your application to Look for those elements and update their texts
<script>
	let forecast = "...";
	let city = "...";
	$("#ForecastPlaceholder).text(forecast);
	$("#CityPlaceholder).text(city);
</script>

```
2. It's component based, meaning that each feature/element is encapsulated and manages its own state.
```
const App  = (props) => (
	<div>
		<Profile author={props.author} /> // Author is a component
		<Publications author={props.author.books}> //Publications is another component
	</div>
)
```
3. It has a really small API that focuces on UI. It can be web UI or any other UI ([mobile](https://facebook.github.io/react-native/), [terminal](https://github.com/Yomguithereal/react-blessed), ...) while letting you use your own technology stack for non UI features.
Here are the main features that you will daily use:
   - [rendering](https://reactjs.org/docs/rendering-elements.html)
   - [props](https://reactjs.org/docs/components-and-props.html)
   - [state & lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
   - [events](https://reactjs.org/docs/handling-events.html)
   - (there is more specific tools that we will see later)




## React Philosophy

The main concept in React is "Component Composition".

React provides a simple API that lets components written by different people work together. 

The idea with React is that your complex UI is a composition of simple, well defined components.

Finally, all you code is in Javascript, but your state and data is always kept out of the DOM. React does the DOM manipulation internally.

## How to Work in React

To understand how to build you React projects, you should read this article: [Thinking in React](https://reactjs.org/docs/thinking-in-react.html).