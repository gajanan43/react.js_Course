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

let name = "MyApp"
function App() {
  return (
    <>
      <h1>{name}</h1>
      <h1>Hello</h1>
      <h2>Hi </h2>
    </>
  );
}

- {} in JSX is used to write JavaScript expressions inside HTML.
```
---

# Compilation Process

**JSX is NOT understood by browsers directly.**
So it goes through this pipeline:

```
JSX  →  Babel  →  JavaScript  →  Browser
```

---

## 🧩 Step-by-Step JSX Compilation

### 1️⃣ You Write JSX

```jsx
function App() {
  return <h1>Hello</h1>;
}
```

❌ Browser cannot run JSX
✔ It must be converted to plain JavaScript

---

### 2️⃣ Babel Transpiles JSX

Babel converts JSX into normal JavaScript.

**JSX**

```jsx
<h1>Hello</h1>
```

**After Babel**

```js
React.createElement("h1", null, "Hello");
```

👉 This is valid JavaScript.

---

### 3️⃣ React Renders It

* `React.createElement()` creates a **Virtual DOM object**
* React compares it with previous DOM
* Updates the **real DOM efficiently**

---



✔ This is what the browser actually executes

---

## ⚙️ Who Does the Compilation?

### In Create React App (CRA)

You **don’t configure anything manually**.

CRA internally uses:

* **Babel** → JSX → JS
* **Webpack** → Bundling
* **Dev Server** → Live reload

📁 Hidden config:

```
node_modules/react-scripts/
```

---

## 🧠 Interview-Friendly Explanation

> “JSX is compiled by **Babel** into `React.createElement()` calls, which produce Virtual DOM objects that React uses to update the UI efficiently.”

---

## ❓ Why We Need JSX at All?

Without JSX:

```js
React.createElement("h1", null, "Hello");
```

With JSX:

```jsx
<h1>Hello</h1>
```

✔ Cleaner
✔ Readable
✔ HTML-like syntax

---

## ⚠️ Important Rules (Must Remember)

* JSX must have **one parent element**
* `{}` allows **JavaScript expressions only**
* JSX is **syntactic sugar**, not HTML

---

# BootStrap:
```
CSS:

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">

JS:

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
    crossorigin="anonymous"></script>

```

# Props & PropsType:

- props are read-only (immutable)

```
 default App function App() {
  return (
    <Navbar title="MyApp" about="About Us" /> //Passing value title - Props
  );
}

export default function Navbar(props) {  //Taking input as props
  return (
    <>
     <span className="navbar-brand">{props.title}</span>   //writing a props using js
     <button className="nav-link btn btn-link text-white"> {props.about} </button>  // Wroking with multiple props
    </>
  )
}
```
PropsType :
```

export default function Navbar({
  title = 'Set Title Here',
  about = 'Set About Here'
}) {
  return (
        <span className="navbar-brand">{title}</span>
        <button className="nav-link btn btn-link text-white">{about}</button>
  )
}


Navbar.propTypes = {                        //Like a constraints
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  title: 'Set Title Here',
  about: 'Set About Here',
}

```
