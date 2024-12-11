# Section 2
## Building with re-usable components

**Types of components:**
- Parent Component
- Child Component
- Sibling Components

**Communication with Props**
- Add attributes to a JSX element
- React collects the attributes and puts them in an object
- Props object shows up as the first argument to the child component function.
- We use the props however we wish. (i.e. props.propertyName)
example:
```
// inside Parent Comonent
function ParentComponent(){
    return(
        <div>
        <ChildComp title="ABC" />
        <ChildComp title="DEF" />
        // The above 2 comps are sinlings
        </div>
    )
}

// inside child comp
function ChildComp(props){
    return(
        <div>
        <div>Title is {props.title}</div>
        </div>
    )
}
```

**Using Destructuring with props**

// inside child comp
function ChildComp({title, body}){
    return(
        <div>
        <div>Title is {title}</div>
        <div>Body Text is {body}</div>
        </div>
    )
}
```
 
**React Developer Tools**
 Use this chrome extension to inspect react components

 
