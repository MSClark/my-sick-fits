# Notes on react basics refresher course

 [Scrimba](https://scrimba.com/playlist/p7P5Hd)

## Virtual DOM

react keeps exact copy of dom and checks for changes and updates only nodes that need changes instead of querying whole live dom for changes resulting in a less expensive method of updating the dom. i.e. checking for changes in the live dom is expensive, so react finds where the changes need to be made and only updates those items.

## JSX notes on things I may not remember

* elements must be nested or singleton
* importing react allows for the use of jsx
* to interpret js inside jsx use curly braces ex. `<h1>Hello {firstName + " " + lastName}!</h1>` or in ES6 template literals ```<h1>Hello {`${firstName} ${lastName}`}!</h1>```

## Uber basic boiletplate

``` javascript
import React from 'react';
import ReactDOM from 'react-dom';

let stuff = <ul>
  <li>a</li>
  <li>b</li>
  <li>c</li>
</ul>;
reactDOM.render(stuff, document.getElementById("root"));
```

## Functional Components

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function MyApp(){
    return (
        <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
        </ul>
    );
}
reactDOM.render(<MyApp />, document.getElementById("root"));
```

Super simple arrow function component
```javascript
const App = () => <h1>Hello world!</h1>
```

## Methodology

* Import/Exporting Components
    * Only have one component per js file and put them all in a "component" folder
    * Name same as component name
    * Export - `export default MyInfo`
    * Import - `import MyInfo from "./components/Myinfo";`
* App.js
    * Treated like a table of contents for components
    * Used as entire app's container and is referenced in index.js

## Styling

* class
    * similar to normal css referncing just need to use __className__ instead of class ex. `<header className="navbar">This is the header</header>`
    * refer to styled components notes for additionals styling
* inline
    * ex. `<h1 style={{color: "#FF8C00"}}>Good {timeOfDay}!</h1>` double braces - first goes into js land, second makes it a js object
    * cant use dashes in attribute sections, so you have to camelcase it instead and itll still work
        * instead of `background-color` use `backgroundColor`
    * best to put styles in their own object and reference them ex.
    ```javascript
    const styles = {
    color: "#FF8C00",
    backgroundColor: "#FF2D00",
    fontSize: 24
  }
  
  return (
    <h1 style={styles}>Good {timeOfDay}!</h1>
  )
    ```
    
    * can't do pseudoelements inline because js doesnt like the colon
    * inline can be useful if you want js to determine styles ex. 
    ```javascript
    import React from "react"
    import ReactDOM from "react-dom"

    function App() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
        fontSize: 30
    }
    
    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "#04756F"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "#2E0927"
    } else {
        timeOfDay = "night"
        styles.color = "#D90000"
    }
    
    return (
        <h1 style={styles}>Good {timeOfDay}!</h1>
    )
    }

    ReactDOM.render(<App />, document.getElementById("root"))
    ```

## TODO App

### Styles used
```css
body {
    background-color: whitesmoke;
}

.todo-list {
    background-color: white;
    margin: auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #efefef;
    box-shadow:
    /* The top layer shadow */
        0 1px 1px rgba(0,0,0,0.15),
            /* The second layer */
        0 10px 0 -5px #eee,
            /* The second layer shadow */
        0 10px 1px -4px rgba(0,0,0,0.15),
            /* The third layer */
        0 20px 0 -10px #eee,
            /* The third layer shadow */
        0 20px 1px -9px rgba(0,0,0,0.15);
    padding: 30px;
}

.todo-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 30px 20px 0;
    width: 70%;
    border-bottom: 1px solid #cecece;
    font-family: Roboto, sans-serif;
    font-weight: 100;
    font-size: 15px;
    color: #333333;
}

input[type=checkbox] {
    margin-right: 10px;
    font-size: 30px;
}

input[type=checkbox]:focus {
    outline: 0;
}
```

## Props

* immutable

### Contact card example
```javascript
function ContactCard(props) {
    return (
        <div className="contact-card">
            <img src={props.imgUrl}/>
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default ContactCard
```
```javascript
<ContactCard 
    name="Mr. Whiskerson" 
    imgUrl="http://placekitten.com/300/200" 
    phone="(212) 555-1234" 
    email="mr.whiskaz@catnap.meow"
/>
```
Can also pass along object when you have many props 
``` javascript
<ContactCard 
    contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
    // double brackets to get into js land and to specify that were working with an object
    // referenced with {props.contact.name}
/>
```  

Dont render prop if it isnt passed in or doesnt exist `<h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3>` another way of doing so - `<h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>`

## Mapping Components
Reminder - Array.prototype.map() returns a new array so you want to save it to a new var in most cases
### ES6 Reminder - arrow function examples

Empty function for our mapping
```javascript
function App() {
    jokesData.map(() => {
        
    })
```
Fleshed out
```javascript
function App() {
    jokesData.map(joke => {
        return (
            <Joke question={joke.question} punchLine={joke.punchLine} />
        )
    })
```
Simplified 
```javascript 
    jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
```
Sidenote - need key prop for repetitive objects such as those in an array 

Useful higher order functions to refamiliarize with
[Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
[Sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
[Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
[Every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
[Some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
[Find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
[FindIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex)

### Product Example using props and map from object data

App.js Snippet
```javascript
function App() {
    const productComponents = productsData.map(item => <Product key={item.id} product={item}/>)
    // item is arbitrary name given to object being passed in, its a param
    return (
        <div>
            {productComponents}
        </div>
    )
}
```
Product.js snippet
```javascript
function Product(props) {
    return (
        <div>
            <h2>{props.product.name}</h2>
            <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} - {props.product.description}</p>
            {/*toLocaleString formats currency in this case*/}
        </div>
    )
}
```

### TODO List pt. 3
app.js example
```javascript
import TodoItem from "./TodoItem"
import todosData from "./todosData"

function App() {
    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)
    
    return (
        <div className="todo-list">
            {todoItems}
        </div>
    )
}
```
TodoItem.js
```javascript
function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed}/>
            <p>{props.item.text}</p>
        </div>
    )
}
```

## Class based components

* props are slightly different where you need to use `{this.props.whatever}` in class based components vs `{props.whatever}` in functional
```javascript
class App extends React.Component {
    
    myMethod(){
        // logic and styling
    }

    render() {
        // display logic and styling goes here or in class method
        this.myMethod();
        return (
            <div>
                <h1>{this.props.whatever}</h1>
            </div>
        )
    }
}
```

## Intro to State

* if you want a component to keep track of its state it needs to be a class based component
* every component that keeps track of state needs a constructor method
* often pass state through props to child components
* changing state in parent component will update child components props
basic ex. 
```javascript
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: "Yes"
        }
    }
    
    render() {
        return (
            <div>
                <h1>Is state important to know? {this.state.answer}</h1>
                <ChildComponent answer={this.state.answer}/>
            </div>
        )
    }
}
```
Another example
```javascript
class App extends Component {
    constructor(){
        super();
        this.state = {
            isLoggedIn: false
        }
    }
    render(){
        
        return (
        <div>
            <h1>You are currently logged {this.state.isLoggedIn ? "in" : "out"}</h1>
        </div>
        )   
    }
}
```

### TODO App pt. 4
Changing app component to class based stateful component and loading todos data into state
```javascript
import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App
```

## Event handling

[React Events](https://reactjs.org/docs/events.html#supported-events)
Anonymous function event example `<button onClick={() => console.log("I was clicked!")}>Click me</button>`
Regular function event example `<button onClick={handleClick}>Click me</button>` no parenthesis needed
MouseOver event example `<img onMouseOver={() => console.log("Hovered!")} src="https://www.fillmurray.com/200/100"/>`

## Changing State

 * when you update state youre making a new state, never changing the original state
 * anytime you use a method that sets state youll need to bind that method to the class its in within the constructor
 ex. `this.handleClick = this.handleClick.bind(this)`
 ```javascript
 class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        this.setState({ count: 1 })
    }
 ```
 Another way to write handleClick if you need previous state
 ```javascript
 handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1 // not ++ because that would modify prevState
            }
        })
    }
 ```

 ## TODO pt 6.

 ex. making the checkboxes change on click and keeping track of that state 
 App.js 
 ```javascript
 import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) { // passed in id of todo when its called 
        this.setState(prevState => { // using previous state because we never modify state
            const updatedTodos = prevState.todos.map(todo => { // map makes copy of todos state
                if (todo.id === id) { // trying to match current iteration's id with passed in id 
                    todo.completed = !todo.completed //flip bool
                }
                return todo // return this to do into the current iteration index
            })
            return {
                todos: updatedTodos // return the new todos array obj that contains the new state of todos
            }
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        // added handle change prop to get passed down state
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App
 ```
 TodoItem.js
 ```javascript
 import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)} // need to pass id to handleChange function which is why its not just {props.handleChange}
            />
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem
 ```

 ## Lifecycle Methods
 
 [Lifecycle methods explanation before version 16.3](https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1)
 [Lifecycle method changes](https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes)
 [Visualization of lifecycle methods](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
 [Lifecycle cheatsheet](https://gist.github.com/bvaughn/923dffb2cd9504ee440791fade8db5f9)