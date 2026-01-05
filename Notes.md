# Setup:
- `npx create-react-app my-app`
- `npm start`

# App.js
- return inside the app a jsx fromat
``` ex:
  
function App() {
  return (
    <h1>Hello</h1>
    <h2>Hi </h2>
  );
}
- JSX expressions must have one parent element

- Wrap with a <div> (Most common)
function App() {
  return (
    <>
      <h1>Hello</h1>
      <h2>Hi </h2>
    </>
  );
}```
