# Notes on react basics refresher course

 freecodecamp [https://www.youtube.com/watch?v=DLX62G4lc44]

## virtual DOM

react keeps exact copy of dom and checks for changes and updates only nodes that need changes instead of querying whole live dom for changes resulting in a less expensive method of updating the dom. i.e. checking for changes in the live dom is expensive, so react finds where the changes need to be made and only updates those items.

## JSX notes on things I may not remember

* elements must be nested or singleton
* importing react allows for the use of jsx

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

## Methodology

* Import/Exporting Components
    * Only have one component per js file and put them all in a "component" folder
    * Name same as component name
    * Export - `export default MyInfo`
    * Import - `import MyInfo from "./components/Myinfo";`