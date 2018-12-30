# Notes on react basics refresher course

 freecodecamp [https://www.youtube.com/watch?v=DLX62G4lc44]

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
    * cant do pseudoelements inline because js doesnt like the colon
    * can be useful if you want js to determine styles ex. 
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

## TODO App

