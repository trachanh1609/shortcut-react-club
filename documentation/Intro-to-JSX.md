# Intro to JSX

JSX is a syntax extension of Javascript that we use with React.

JSX is optionnal with React but recommended to make your code more readable and easier to debug.

JSX lets you describe how your UI looks like.

## Resources
- [Introducing JSX (React Doc)](https://reactjs.org/docs/introducing-jsx.html)

### JSX is a syntax extension

JSX syntax looks like this:
```javascript
const element = <div>Hello World!</div>;
```
React wants to be a declarative library, they use JSX to let you *describe* what your UI should look like.

JSX is a syntax extension that will be compiled into a Javascript function that returns a Javascript Object. It means that your JSX syntax can be mixed with your Javascript code:
```javascript

//Store your JSX in a variable
const element = <div>Hello World!</div>;

//Store your JSX in an array
const catList = [
	<li>Cat 1</li>,
	<li>Cat 2</li>,
	<li>Cat 3</li>
];

//Or pass it as function parameter, and so on...
```

### You can evaluate Javascript expresions in JSX

JSX is Javascript, you can evaluate any expression. To do so you **must** encapsulate your expression inside curly braces `{}`.

You can pass variables as content or pass props to your elements:

```javascript
const user = {
	name: "Bob",
	tasks: [
		"learn React",
		"learn JSX"
	]
}
//style in JSX must be an object
const style = {
	backgroundColor: "#f2f2f2"
}

const element = (
	//I'm a comment outside of JSX
	// you can pass any props to an element using {}
	<div style={style}>
		{/*I'm inside JSX now*/}
		{/*A comment is a Javascript expression*/}

		{/*we evaluate 'user.name' and the number of tasks*/}
		<h1> Welcome {user.name} you have {user.tasks.length} tasks.</h1>

		{/*only literal strings don't need to be inside {} , but they can be*/}
		<ul className="tasks">
			{/*We can iterate over a JS array and return a JSX array*/}
			{
				user.tasks.map(task => (
					{/* inside that JSX element, we evalute our values*/}
					<li key={task}> {task} </li>
				))
			}
		</ul>
	</div>
)
```

Also from the previous example, JSX elements can have children elements.

### JSX compiles to `React.createElement()`

When your javascript compiles, all JSX elements will be replaced by `React.createElement()` calls.

React.createElement will return a `React Element` object.

```javascript

const element = <div className="main">Hello World!</div>

//same as : 
const element = React.createElement("div", {className: "main"}, "Hello World!");
```

### Some Gotchas

1. Root JSX elements can't be next to each other

```javascript
//ERROR: this is invalid
const element = (
	<div>Hello</div>
	<div>World></div>
)

//OK: both divs are wrapped in a root element
const element = (
	<div>
		<div>Hello</div>
		<div>World</div>
	</div>
)

```

2. Class and styles are special
- The `class` keyword is reserved in Javascript so you need to use `className` when using JSX with React.
- The `style` props must be an object. Attributes with dashes must be written in camelCase: `background-color` becomes `backgroundColor`.


3. When using JSX with React, you must import React from "react"
- Even when you don't directly use it in your file, JSX will be compiled to `React.createElement(<tagName>,<props>, <children>)` if you don't import React, you will get an error.

4. React Element children can be a React Element or an array of React Elements
- You can safely have your component have an array as children. React knows how to work with arrays.
- If you use an array, each child Element must have a unique [`key` prop](https://reactjs.org/docs/lists-and-keys.html#keys) so React knows how to compare the elements.
