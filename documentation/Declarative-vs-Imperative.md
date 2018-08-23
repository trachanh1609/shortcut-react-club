# Declarative vs Imperative  Programming

## Table Of Contents
- Short Intro to Programming
- What is Imperative Programming
- What Limitations
- What is Declarative Programming
- Declarative vs Imperative in the web (React vs Jquery)
- JavaScript Imperative or Declarative?
- Resources

## Short Intro to Programming

Programming means to write instructions to a machine so it performs specific tasks.

We use programming languages to have a middle ground between the machine (that understands low level instructions) and the human (who understands high level communication like English).

The programming language is always compiled to a low  level langage that your machine can understand.

A program is only a set of instructions that tells your machine what to do, step by step.
```bash
# Let's say this is a legit programming language
# each line is a new instruction to the machine.
# each instruction tells the machine what to do;

DELCARE VARIABLE user_name;
ASSIGN user_name "Bob"

DECLARE FUNCTION add WITH PARAMETERS value1, value2;
LET add RETURN value1 + value 2;

DECLARE VARIABLE result;
ASSIGN result CALL add WITH 2, 2;
```

In most programming languages you can declare variables to store data in your RAM and you can declare functions or more complex elements so you don't have to repeat the same set of instructions many times.

## What is Imperative Programming

Imperative programming means you tell your machine what to do.
Basically, as we've seen just before, Imperative programming is the only way to communicate with your machine since you need to tell it what do do step by step.

Some programming languages use other approches than imperative programming but, in the end, it will still compile to imperative code.

## What Limitations

With Imperative programming it's up to the developpers to tell the machine what to do.

Javascript is a "Imperative" language [1]:
```javascript
var user_name = "bob";

function add(value1, value2) {
	return value1 + value2
}
var result = add(value1, value2)
```

The limitations with Imperative are:
-  When you write big and complex applications, the developper needs to know everything about the application in order to make modifications or add a feature.

- You always need to tell your machine all the possible outcomes of an action or you risk facing bugs.

[1] See *JavaScript Imperative or Declarative?*


## What is Declarative Programming

Declarative Programming means that, instead of giving the machine instructions on how to do a task, you tell the machine what task you want to achieve.

Because the machine only understands imperative instructions, you need to rely on Programming Languages or Language extensions to enable Declarativity.

Because you only tell your machine what you want, it's up to the programming language or language extension to provide the instructions.
This means that if the language evolves, you can benefit from the upgrade without having to change your code.

Yet the biggest bonus is that when using Declarative Languages, you prevent a whole panel of bugs from appearing:

What you declare (and see) is what you get. You won't rely on instructions so you won't have an instruction that removes or disables a feature by mistake.

## Declarative vs Imperative in the web (React vs Jquery)
If we compare Jquery (Imperative) and React(Declarative)

We can see the main differences and benefits

### With JQuery
First is an example of a simple application with Jquery:
```javascript
//https://jsfiddle.net/xpvt214o/663958/

//index.html

<div id="banner-message">
  <p>Hello World</p>
  <button>Change color</button>
</div>

//app.js

var banner = $("#banner-message")
var button = $("button")

button.on("click", function(){
  banner.toggleClass("alt")
})


```
In this configuration, in your app.js, you need to know what the html looks like and how to find your elemeents (banner and button) and also what to do with them.

You tell your machine, step by step what to do.

If you need to add a new button in your HTML, you will need to change your app.js because the querySelector won't work anymore.
Basically, changing anything will cause side effects to your whole application, this is why you need to know all of the application before doing modifications.

### With React
```javascript
//https://jsfiddle.net/n5u2wwjg/148216/

//index.html
<div id="app" /> //just a mount point, that all you need

//app.js

class App extends React.Component {
  //Your state is safe inside the component, nobody else can touch it
  state = {
  	alt: false
  };

  handleClick = () => {
  	this.setState(prevState => ({
    	alt: !prevState.alt
    }))
  }

  render() {
    //Yes this is an imperative instruction but it only affects this part of the app and nowhere else
    const className = this.state.alt ?  "alt" : ""

    return (
      //JSX is what makes React Declarative
      //You declare your view once. Even if className changes, the promise stays the same
      <div id="banner-message" className={className}>
        <p>Hello World</p>
        <button onClick={this.handleClick}>Change color</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#app")); //mount your app

```

With React and JSX, in your render method, you only describe what you want your view to look like and what the possible interactions are.

You won't need to querySelect the button "Change color", to give it a onClick callback. You will declare the button and give it its props.

If you want to remove the onClick, you either declare it in your component:
```javascript
<button disabled={this.state.disabled} onClick={this.handleClick}>Change color</button>
```

or in you handleClick method
```javascript
handleClick = () => {
  if (this.state.disabled) return ;

  this.setState(prevState => ({
    alt: !prevState.alt
  }))
}
```

## JavaScript Imperative or Declarative?

Javascript is an Imperative language **but** it has some Declarative capabilities.

For instance, in Javascript both are possible:
```javascript
//Imperative way
const values = [1,2,3,4,5,6,7,8];
let oddValues = [];
for (let i = 0; i < values.length; i++) {
  if (values[i] % 2 === 1) oddValues.push(values[i])
}
console.log(oddValues) //[1,3,5,7]

//Declarative way
const values = [1,2,3,4,5,6,7,8];
const oddValues = values.filter(value => value % 2 === 1)
console.log(oddValues) //[1,3,5,7]
```


## Resources
- [StackOverflow - Difference between declarative and imperative in React.js?](https://stackoverflow.com/a/33656983)
- [StackOverflow - What is the difference between declarative and imperative programming](https://stackoverflow.com/a/1784702)