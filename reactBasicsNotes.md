# Notes on react basics refresher course

https://www.youtube.com/watch?v=DLX62G4lc44 [freecodecamp]

## virtual DOM

react keeps exact copy of dom and checks for changes and updates only nodes that need changes instead of querying whole live dom for changes resulting in a less expensive method of updating the dom. i.e. checking for changes in the live dom is expensive, so react finds where the changes need to be made and only updates those items.

## JSX

elements must be nested or singleton

