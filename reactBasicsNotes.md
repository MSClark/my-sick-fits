# Notes on react basics refresher course

https://www.youtube.com/watch?v=DLX62G4lc44 [freecodecamp]

## virtual DOM

react keeps exact copy of dom and checks for changes and updates only nodes that need changes instead of querying whole live dom for changes resulting in a less expensive method of updating the dom. i.e. checking for changes in the live dom is expensive, so react finds where the changes need to be made and only updates those items.

## JSX notes on things I may not remember

* elements must be nested or singleton

## Uber basic boiletplate

``` javascript
import react from "react";
import reactDOM from "react-DOM";

let stuff = <ul>
  <li>a</li>
  <li>b</li>
  <li>c</li>
</ul>;
reactDOM.render(stuff, document.getElementById("root"));
```

## Functional Components

```javascript
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