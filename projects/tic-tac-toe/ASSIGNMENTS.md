# Tic Tac Toe Assignments

## 0. Starter Code

### Read
- [What is React (short)](https://github.com/ArmandDu/shortcut-react-club/wiki/ShortDoc---What-is-React.JS%3F)

### Tasks
clone this repository to your computer.

```bash
git clone git@github.com:ArmandDu/shortcut-react-club.git
```

Navigate to `projects/tic-tac-toe` and make a copy of the `starter-code` folder.

Name your copy as `[your_username]`.

```bash
cd shortcut-react-club/projects/tic-tac-toe
cp -r starter-code [your_username]
```


Start your editor and open your team folder: `~/shortcut-react-clut/projects/tic-tac-toe/[your_username]`

You will see different files and folders:

- `public/`: all the public and static assets
- `public/index.html`: the file that is served to the client (browser)
- `src/`: the main folder for your code source (all your .js files)
- `src/index.js`: the entrypoint for your application
- `src/index.css`: defines all the css for this app
- `src/App.js`: the react App

First thing is to start your application.
Make sure you are in the right folder and your node modules are installed (`npm install`) and run `npm start`.

You should see the static application in your browser.

## 1. Define your app components

### Read
- [Components](https://github.com/ArmandDu/shortcut-react-club/wiki/ShortDoc---Components)
- [Composing components](https://github.com/ArmandDu/shortcut-react-club/wiki/ShortDoc-Composing-Components)

### Tasks

Create a new folder in your src: `src/components`

Open your `src/App.js` file and identify the differents independent sections of the app.

Start the App and in the browser, try to identify the different sections of the App.

In the `src/components` folder, create a new file for each component you identified in the `App.js` file.

- each file must be named after your component name and start with a capital letter.
- inside each file, import React and Component
- create a class component
- export the class both with the default and named export
- inside the render method, write the JSX related to the component

```javascript

//src/components/MyComponent.js
import React, { Component } from "react";

export class MyComponent extends Component {
	render() {
		//...
	}
}

export default MyComponent;
```

In the `App.js` file:
- import your components
- replace the duplicate JSX with the new components you just wrote

```javascript
//src/App.js
import React, { Compoent } from "react";

import ComponentX from "./components/ComponentX",
import ComponentY from "./components/ComponentY",
import ComponentZ from "./components/ComponentZ",

export class App extends Component {
	render() {
		return (
			<div /*...*/>
				<ComponentX />
				<ComponentY />
				<ComponentZ />
			</div>
		)
	}
}

```


### Nested components

 Components can be nested. If you find a component inside another component, this is what you should do:

```javascript
//src/components/ComponentX.js
import React, { Component } from "react"

export class ComponentX extends Component {
	render() {
		return (
			<div>
				{/*...*/}
			</div>
		)
	}
}
export default ComponentX;
```

```javascript
//src/components/ComponentY.js
import React, { Component } from "react";
import ComponentX from "./ComponentX";

export class ComponentX extends Component {
	render() {
		return (
			<div>
				{/*...*/}
				<ComponentX />
				{/*...*/}
			</div>
		)
	}
}

export default ComponentY;
```

At the end, you should have a simpler App component that only renders child components. The application must be exactly the same in your browser.

## 2. Rendering dynamic boxes

### Read
- [Rendering List of Items](https://github.com/ArmandDu/shortcut-react-club/wiki/ShortDoc-Rendering-a-List-of-Items)
- [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
### Tasks

In your `Grid` component, you will need to dynamicly render the correct number of boxes. Later those boxes will render a X, a O or nothing depending of the properties you will provide to each box.

For now, create a new attribute  `state` to your `Grid` class. We will show the special meaning of state later on.
the state attribute is an object with one key: `boxes`. boxes is an array of 9 elements of (null, 'X' or 'O')

```javascript
class Grid extends Component {

	state: {
		boxes: [...]
	}

	render() {/*...*/}
}
```

In your render method,

extract the boxes from your component state then map over all the boxes in order to render your `Box` component.

```javascript
class Grid extends Component {

	state: {
		boxes: [...]
	}

	render() {
		const { boxes } = this.state;

		return (
			<div>
				{/*...*/}
				{boxes.map(/*...*/)}
				{/*...*/}
			</div>
		)
	}
}
```


## 3. Passing data

### Read

- [Props](https://github.com/ArmandDu/shortcut-react-club/wiki/ShortDoc-Props)

### Tasks

In your `Grid` component, you only render the same box 9 times. Now we want the box to render differently depending of the value of each box.
Each box from you boxes array can be null, 'X' or 'O'.

The component responsible to render a `Box` in the screen is the `Box` component. This component needs to know what to render.
In order to do that, we need to give this component some informations. We do this via `props`.

For each of your `Box`es, add a prop named `value` and assign it the value of the box.


In the `Box`component, in the render method, extract the `value` from `this.props` and return the correct JSX based on that value:
- Whenever there is a 'X', the component should render a `<i className="fas fa-times" />`
- Whenever there is a 'O', the component should render a `<i className="far fa-circle" />`
- Whenever there is a null, the component doesn't render a `<i>`
- Whenever a box has a prop with 'X' or 'O', the box-content must have a className of `player-1` or `player-2`

