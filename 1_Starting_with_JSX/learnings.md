# Section1
## Getting Started with JSX
To get started we need to follow below 5 steps,
1) Importing React and ReactDom libraries
2) Get referennce to the div (inside index.html) with id 'root'. We can use
    ```
    el = document.getElementById('root) 
    ```
3) Tell React to take ocntrol of the root element by,
    ```
    const root = ReactDOM.createRoot(el)
    ```
4) Create a component
    ```
    function App(){
        return <h1>Hi</h1>
    }
    ```
5) Show the component on the screen
root.render(<App />);

**React vs ReactDOM Library:**
- React: This allows us to work with multiple components.
- React DOM: Library that shows react components in browser

**Browser cannot run JSX**
Then why we use it? Bcuz JSX simplifies things for the developers.

**Then how the browsers understand JSX**
Babel transpiles JSX code and modern JS code(ES6 and beyond) into standard JavaScript that browsers can understand.

**Print JS variables in JSX**
```
function App(){
    const message = "123"; // It can be a num, str or array but not an object.
    return <h1>{message}</h1>
}
```
**Shorthand syntax**
```
// It is also possible ot return the data directly by wrapping in {}
function App(){
    return <h1>{new Date().toLocaleTimeString()}</h1>
}
```
### Props
Props is a short form for properties.

**Customizing elememts using props**
```
function App(){
    return (
        <input 
            type = "number"
            min = {5}
            list = {[1,2,3]}
            style = {{color:'red'}}
        />
    )
}
```

**Converting HTML to JSX**
Rules:
1- All props names follow camelCase
e.g: <input autoFocus={true} />
2- Number attributes use curly braces
3- Boolean 'true' can be written with just the property name. 'False' should be written with curly braces.
e.g: <input spellCheck /> // true case
4- The 'class' attribute is written as 'className'
5- In-line styles are provided as objects 
e.g: <input style={{border: '1px solid blue', padding:'5px'}} />


**Extracting Components**
- create a component
- At the end of file do, export default Component;
- Inport ithe component and use it, 
import Component from './Component'

**Import & Export**
Types:
- Default export
- Named export



Notes: https://jsx-notes.vercel.app/


