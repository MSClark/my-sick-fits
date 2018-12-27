# Advanced React Notes

## General Frontend Notes

### Styled components

   Stored on the server because we do server side rendering

### NProgress

   CSS is linked in meta component

## General Backend Notes

### Next js

   Routing

## Intro and setup

### 1. editor setup

   *code ./frontend to open frontend
   *cmd+, opens settings in vscode
   *wesbos.com/uses for what he uses

### 2. tech stack

### 3. intro to next.js, tooling and routing

### 4. custom _app.js

## CSS and Styled Components

### 5. intro to styled components

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
