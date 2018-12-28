# Notes

## General Frontend Notes

### Styled components

   Stored on the server because we do server side rendering

### NProgress

   CSS is linked in meta component

### Next js

* Routing, server side rendering, tooling, webpack etc.

### Apollo Client

* Replaces need for redux
* acts as layer between react and graphql
* handles caching and local state

## General Backend Notes

### GraphQL Yoga

* acts as our express graphql server
* handles server side logic, cc charging, email, permission checking

### Prisma

* Provides CRUD api's, acts as an abstraction so you dont have to interect with mysql directly

## Intro and setup

### 1. editor setup

* code ./frontend to open frontend
* `ctrl` + `,` opens settings in vscode
* wesbos.com/uses for what he uses

### 2. tech stack

Filled out technology descriptions above

### 3. intro to next.js, tooling and routing

* package.json has next.js's babel config
* getInitialProps waits for page to resolve on server before sending to client
* next.js
  * npm run __dev__, dev is an alias that will run the cmd `next -p 7777`
  * next.js will handle importing react
  * next.js has link tag functionality for push state allowing caching
   ex.
   ```
   import Link from 'next/link';
   ...
   <Link href="/sell">
      <a>Sell!</a>
   <Link>
   ```

### 4. custom _app.js

* next.js wraps whole appilcation in "app component" - _app.js
  * allows for keeping state when changing pages

Files:
* _app.js
* Page.js
* Header.js
* Meta.js
  * next.js handles html head through some trickery so we just use `import Head from 'next/head';`

## CSS and Styled Components

### 5. intro to styled components

Styled components allows for component styling in js
ex.
```
const MyButton = styled.button`
   background: red;
   font-size: ${props => (props.huge ? '100px' : "50px")}
   .a {                 /*child 'a' element*/
      font: 100px;
   }
`;
...
<MyButton huge="100"> //huge is a prop that can pass in the value of 100 to css above
   <a>test</a>
</MyButton>
```

### 6. themes and layout using styled components

### 7. global styling and typography with styled components

### 8. visualizing route changes

### 9. fixing styled component flicker on server render

    What I learned: Styled components is rendered on the server so the client doesnt get them until the "second" pass of react client rendering where it checks to see if anything needs to be updated.
    What I did: added _document.js to preload css

## Server Side GraphQL

### 10. intro to graphql

    What I learned: Start graphql. graphql is a spec. used to replace REST or sits in front of one. language agnostic.
    What I did:

### 11. prisma setup

### 12. running yoga server

### 13. first query and mutation

   `type Query{
      dogs: [Dog]!
   }`
! Means if there cant be any null items in the array

### 14. items creation and yoga flow

## Client Side GraphQL

### 15. setting up apollo with react

### 16. react meets graphql

### 17. creating items and mutations

### 18. uploading images

### 19. updating items with queries and mutations

### 20. deleting items

### 21. displaying single items

### 22. pagination

### 23. pagination and cache invalidation

## Side Notes

`git rm -r --cached ./path` to remove files/folders from github