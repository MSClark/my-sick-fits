# Notes on react basics refresher course

 [Scrimba](https://scrimba.com/playlist/p7P5Hd)

## virtual DOM

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