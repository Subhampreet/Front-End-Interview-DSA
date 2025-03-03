<h1 align="center">JavaScript & React Interview Questions</h1>

This repository contains a few hundred curated JavaScript & React interview questions with high quality answers for acing your Front End Engineer interviews.

## Table of Contents

| #  | Question |
|----|----------|
| 1  | [What are the differences between JavaScript variables created using let, var or const?](#what-are-the-differences-between-javascript-variables-created-using-let-var-or-const) |
| 2  | [What is the difference between == and === in JavaScript?](#2-what-is-the-difference-between--and--in-javascript) |


### 1. What are the differences between JavaScript variables created using `let`, `var` or `const`?

<!-- Update here: /questions/what-are-the-differences-between-variables-created-using-let-var-or-const/en-US.mdx -->

In JavaScript, `let`, `var`, and `const` are all keywords used to declare variables, but they differ significantly in terms of scope, initialization rules, whether they can be redeclared or reassigned and the behavior when they are accessed before declaration:

| Behavior | `var` | `let` | `const` |
| --- | --- | --- | --- |
| Scope | Function or Global | Block | Block |
| Initialization | Optional | Optional | Required |
| Redeclaration | Yes | No | No |
| Reassignment | Yes | Yes | No |
| Accessing before declaration | `undefined` | `ReferenceError` | `ReferenceError` |

### 2. What is the difference between `==` and `===` in JavaScript?

<!-- Update here: /questions/what-is-the-difference-between-double-equal-and-triple-equal/en-US.mdx -->

`==` is the abstract equality operator while `===` is the strict equality operator. The `==` operator will compare for equality after doing any necessary type conversions. The `===` operator will not do type conversion, so if two values are not the same type `===` will simply return `false`.

| Operator | `==` | `===` |
| --- | --- | --- |
| Name | (Loose) Equality operator | Strict equality operator |
| Type coercion | Yes | No |
| Compares value and type | No | Yes |

### What is Event Bubbling or Bubbling in JS ? 
Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.

- Event bubbling is essential for event delegation, where a single event handler manages events for multiple child elements, enhancing performance and code simplicity. While convenient, failing to manage event propagation properly can lead to unintended behavior, such as multiple handlers firing for a single event.
- Use **event.stopPropagation()** to stop the event bubbling to the parent / root elements

```js
const div = document.getElementById("div");
const span = document.getElementById("span");
const button = document.getElementById("button");

div.addEventListener("click", () => {
  console.log("div was clicked");
});
span.addEventListener("click", () => {
  console.log("span was clicked");
});
button.addEventListener("click", (event) => {
 // Use stopPropagation() to stop event bubbling
  event.stopPropagation();
  console.log("button was clicked");
});
```

### What is Event Delegation in JavaScript ?
Event delegation is a event handling pattern in which you handle the events at a higher level in the DOM tree instead of the actual level where the event was received. The event delegation is based on event bubbling concept.

**Advantages -** 

- **Improved performance**: Attaching a single event listener is more efficient than attaching multiple event listeners to individual elements, especially for large or dynamic lists. This reduces memory usage and improves overall performance.
- **Dynamic Content Handling:** Event delegation can automatically handle events on new child elements that are added later.

```html
<div id="div">
      <span id="span">
        <button>button1</button>
        <button>button2</button>
        <button>button3</button>
        <!-- Elements can be added without thinking much about the backend JS function -->
        <button>button4</button>
      </span>
 </div>
```
```js
const div = document.getElementById("div");

div.addEventListener("click", (event) => {
  const target = event.target;

  if (target.tagName === "BUTTON") {
    console.log(target.innerHTML);
  }
});
```

### Explain “this” keyword in JavaScript

There's no simple explanation for this; it is one of the most confusing concepts in JavaScript because it's behavior differs from many other programming languages. The one-liner explanation of the this keyword is that it is a dynamic reference to the context in which a function is executed.

A longer explanation follows is that this follows these rules:

1. If the new keyword is used when calling the function, meaning the function was used as a function constructor, the this inside the function is the newly-created object instance.
2. If this is used in a class constructor, the this inside the constructor is the newly-created object instance.
3. If apply(), call(), or bind() is used to call/create a function, this inside the function is the object that is passed in as the argument.
4. If a function is called as a method (e.g. obj.method()) — this is the object that the function is a property of.
5. If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, this is the global object. In the browser, the global object is the window object. If in strict mode ('use strict';), this will be undefined instead of the global object.
6. If multiple of the above rules apply, the rule that is higher wins and will set the this value.
7. If the function is an ES2015 arrow function, it ignores all the rules above and receives the this value of its surrounding scope at the time it is created.

For an in-depth explanation, do check out [Arnav Aggrawal's article on Medium](https://codeburst.io/the-simple-rules-to-this-in-javascript-35d97f31bde3) & [this is JS, Simplified](https://www.youtube.com/watch?v=MgOK_DwJqTM).

### What are callback functions in JS?
Callback function is a function which is passed as an argument to another function. Using callback helps you to call a function from another function. 
```js
function log(value) {
  console.log(value);
}

function findSum(num1, num2, print) {
  const sum = num1 + num2;

  print(sum);
}

findSum(20, 30, log);

// Example -
// window.addEventListener(event, callback function)
```

### What is the event loop in JavaScript runtimes?

<!-- Update here: /questions/what-is-event-loop-what-is-the-difference-between-call-stack-and-task-queue/en-US.mdx -->

The event loop is concept within the browser runtime environment regarding how asynchronous operations are executed within JavaScript engines. It works as such:

1. The JavaScript engine starts executing scripts, placing synchronous operations on the call stack.
2. When an asynchronous operation is encountered (e.g., `setTimeout()`, HTTP request), it is offloaded to the respective Web API or Node.js API to handle the operation in the background.
3. Once the asynchronous operation completes, its callback function is placed in the respective queues – task queues (also known as macrotask queues / callback queues) or microtask queues. We will refer to "task queue" as "macrotask queue" from here on to better differentiate from the microtask queue.
4. The event loop continuously monitors the call stack and executes items on the call stack. If/when the call stack is empty:
   1. Microtask queue is processed. Microtasks include promise callbacks (`then`, `catch`, `finally`), `MutationObserver` callbacks, and calls to `queueMicrotask()`. The event loop takes the first callback from the microtask queue and pushes it to the call stack for execution. This repeats until the microtask queue is empty.
   2. Macrotask queue is processed. Macrotasks include web APIs like `setTimeout()`, HTTP requests, user interface event handlers like clicks, scrolls, etc. The event loop dequeues the first callback from the macrotask queue and pushes it onto the call stack for execution. However, after a macrotask queue callback is processed, the event loop does not proceed with the next macrotask yet! The event loop first checks the microtask queue. Checking the microtask queue is necessary as microtasks have higher priority than macrotask queue callbacks. The macrotask queue callback that was just executed could have added more microtasks!
      1. If the microtask queue is non-empty, process them as per the previous step.
      2. If the microtask queue is empty, the next macrotask queue callback is processed. This repeats until the macrotask queue is empty.
5. This process continues indefinitely, allowing the JavaScript engine to handle both synchronous and asynchronous operations efficiently without blocking the call stack.

The following are resources explaining the event loop:

- [JavaScript Visualized - Event Loop, Web APIs, (Micro)task Queue](https://www.youtube.com/watch?v=eiC58R16hb8) (2024): Lydia Hallie is a popular educator on JavaScript and this is the best recent videos explaining the event loop. There's also an [accompanying blog post](https://www.lydiahallie.com/blog/event-loop) for those who prefer detailed text-based explanations.
- [In the Loop](https://www.youtube.com/watch?v=cCOL7MC4Pl0) (2018): Jake Archibald previously from the Chrome team provides a visual demonstration of the event loop during JSConf 2018, accounting for different types of tasks.
- [What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ) (2014): Philip Robert's gave this epic talk at JSConf 2014 and it is one of the most viewed JavaScript videos on YouTube.

### Explain the use of the `map` function in JavaScript.
- The arr.map method is one of the most useful and often used.
- It calls the function for each element of the array and returns the array of results.
```js
// The syntax - 
let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
});

Usage - 
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6
```

### Explain `filter` method in JavaScript
- The `find` method looks for a single (first) element that makes the function return true.
- If there may be many, we can use `arr.filter(fn)`.
- `filter` returns an array of all matching elements
```js
// The syntax - 
let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});

// Example - 
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2
```
### Explain `reduce` method in JavaScript
- The method `arr.reduce` used to calculate a single value based on the array.
- The function is applied to all array elements one after another and “carries on” its result to the next call.
```js
// The syntax is:
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);

// Example -
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

alert(result); // 15

```

##### Arguments:
1. accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
2. item – is the current array item.
3. index – is its position.
4. array – is the array.

For an in-depth explanation do check - [Array methods in JS - javascript.info](https://javascript.info/array-methods)

### Write Polyfill for `map`, `filter`, `reduce`
- For detailed explanation for the polyfills of map, filter, reduce do check - [Array Methods Polyfills](https://www.youtube.com/watch?v=dGq0gi0wv64)

```js
// Polyfill for map
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

const multiplyThree = nums.myMap((num, index, arr) => {
  return num * 3;
});

console.log(multiplyThree);

// Polyfill for filter
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }

  return temp;
};

const moreThanTwo = nums.myFilter((num) => {
  return num > 2;
});

console.log(moreThanTwo);

// Polyfill for reduce
Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;

  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }

  return acc;
};

const sum = nums.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

console.log(sum);
```


### What is the difference between `map` and `foreach` 
- The first difference between `map()` and `forEach()` is the returning value. The `forEach()` method returns `undefined` and `map()` returns a new array with the transformed elements. Even if they do the same job, the returning value remains different.
- The second difference between these array methods is the fact that `map()` is chainable. This means that you can attach `reduce()`, `sort()`, `filter()` and so on after performing a `map()` method on an array. That's something you can't do with `forEach()` because, as you might guess, it returns `undefined`.

For an in-depth explanation do check - [Main Differences Between forEach and map](https://www.freecodecamp.org/news/4-main-differences-between-foreach-and-map/)

### Explain Map in JavaScript
    
[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) is a collection of keyed data items, just like an `Object`. But the main difference is that `Map` allows keys of any type. Methods and properties are:    
- [`new Map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/Map) – creates the map.
- [`map.set(key, value)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set) – stores the value by the key.
- [`map.get(key)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get) – returns the value by the key, `undefined` if `key` doesn’t exist in map.
- [`map.has(key)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has) – returns `true` if the `key` exists, `false` otherwise.
- [`map.delete(key)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete) – removes the element (the key/value pair) by the key.
- [`map.clear()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear) – removes everything from the map.
- [`map.size`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size) – returns the current element count.

### Explain Set in JavaScript    
A [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) is a special type collection – “set of values” (without keys), where each value may occur only once. Its main methods are:    
- [`new Set([iterable])`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set) – creates the set, and if an `iterable` object is provided (usually an array), copies values from it into the set.
- [`set.add(value)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add) – adds a value, returns the set itself.
- [`set.delete(value)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/delete) – removes the value, returns `true` if `value` existed at the moment of the call, otherwise `false`.
- [`set.has(value)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has) – returns `true` if the value exists in the set, otherwise `false`.
- [`set.clear()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear) – removes everything from the set.
- [`set.size`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size) – is the elements count.

### What's the difference between `Map` and `WeakMap`?
| Map | WeakMap | 
| --- | --- | 
| A Map is an unordered list of key-value pairs where the key and the value can be of any type like string, boolean, number, etc. | In a Weak Map, every key can only be an object and function. It used to store weak object references. |
| Maps are iterable. | WeakMaps are not iterable. |
| Maps will keep everything even if you don’t use them. | WeakMaps holds the reference to the key, not the key itself. |
| The garbage collector doesn’t remove a key pointer from `Map` and also doesn’t remove the key from memory. | The garbage collector goes ahead and removes the key pointer from `WeakMap` and also removes the key from memory. WeakMap allows the garbage collector to do its task but not the Map. |
| Maps have some properties : .set, .get, .delete, .size, .has, .forEach, Iterators. | WeakMaps have some properties : .set, .get, .delete, .has. |


<h1 align="center">React Interview Questions</h1>

### Can you explain the virtual DOM in React?
    
The virtual DOM is an in-memory representation of the real DOM elements. Instead of interacting directly with the real DOM, which can be slow and costly in terms of performance, React creates a virtual representation of the UI components. This virtual representation is a lightweight JavaScript object that mirrors the structure of the real DOM.
  
  Here's a step-by-step process of how the virtual DOM works:
  
  1. **Step 1 – Initial Rendering**: when the app starts, the entire UI is represented as a Virtual DOM. React elements are created and rendered into the virtual structure.
  2. **Step 2 – State and Props Changes**: as the states and props change in the app, React re-renders the affected components in the virtual DOM. These changes do not immediately impact the real DOM.
  3. **Step 3 – Comparison Using Diff Algorithm**: React then uses a **diffing algorithm** to compare the current version of the Virtual DOM with the previous version. This process identifies the differences (or "diffs") between the two versions.
  4. **Step 4 – Reconciliation Process**: based on the differences identified, React determines the most efficient way to update the real DOM. Only the parts of the real DOM that need to be updated are changed, rather than re-rendering the entire UI. This selective     updating is quick and performant.
  5. **Step 5 – Update to the Real DOM**: finally, React applies the necessary changes to the real DOM. This might involve adding, removing, or updating elements based on the differences detected in step 3.
  
  Read the following article for detailed understanding - [What is the Virtual DOM in React?](https://www.freecodecamp.org/news/what-is-the-virtual-dom-in-react/)

### What is reconciliation in React?
    
  In React, reconciliation is **the process of updating the user interface (UI) when the state or data of a component changes**. It's a core feature of React that helps ensure fast and efficient updates. 
  
  1. React compares the current state of a component to its previous state
  2. React uses a diffing algorithm to identify the differences between the two states
  3. React determines which parts of the DOM need to be updated, added, or removed
  4. React updates the DOM to reflect the changes
  
  **Benefits of reconciliation**
  
  1. Reconciliation minimizes the number of DOM operations, which improves performance
  2. Reconciliation ensures that the UI is consistent with the underlying data, which prevents rendering errors

### What are React fibers, and how do they improve rendering?
    
  React Fiber is a core algorithm within React that significantly improves rendering performance by breaking down the rendering process into smaller, manageable chunks, allowing React to pause and resume work as needed, thus maintaining responsiveness even during complex updates and preventing the UI from freezing during heavy computations; essentially enabling "incremental rendering" where updates are spread across multiple frames instead of happening all at once.
  
  **Key points about React Fiber:** 
  
  - **Incremental Rendering:** The primary benefit of Fiber is its ability to split rendering work into smaller units called "fibers," allowing React to prioritize updates and distribute rendering across multiple frames, resulting in a smoother user experience.
  - **Priority-Based Updates:** Developers can assign priorities to different updates, ensuring that critical changes are rendered first, while less important updates can be deferred.
  - **Pause and Resume Capability:** React can pause rendering work in the middle of an update if a higher priority task comes in, and then resume later where it left off.
  - **Better Animation Handling:** By enabling incremental rendering, Fiber is particularly beneficial for animations and gestures, allowing for smoother visual transitions.
  
  **How it works:** 
  
  - **Fiber Tree:** When a component renders, React creates a tree-like structure called a "Fiber tree" where each node represents a component and its properties.
  - **Reconciliation:** When data changes, React compares the new component tree with the existing one to identify differences and determine what needs to be updated in the DOM.
  - **Work Units:** During reconciliation, the work is divided into smaller units (fibers) which can be paused and resumed depending on the priority and available time.
  
  Overall, React Fiber significantly enhances the performance of React applications by allowing for more granular control over the rendering process, making it especially beneficial for complex UIs with frequent updates and animations.


### What is lifting state up in React?

Lifting state up is an important pattern for React developers because sometimes we have state that's located within a particular component that also needs to be shared with sibling components.
    
Instead of using an entire state management library like Redux or React Context, we can just lift the state up to the closest common ancestor and pass both the state variables the state values down as well as any callbacks to update that state.
    
Read the following article for detailed understanding - [What Is "Lifting State Up" in React?](https://www.freecodecamp.org/news/what-is-lifting-state-up-in-react/)

### What are Higher Order Components? 
    
HOCs are functions that wrap existing components, providing them with additional props or behaviors. Like a gift wrap, wrapping an existing component and adding additional feature to the gift. 
    
The main benefit of HOCs is that they enable us to extend the functionality of multiple components without repeating the same code in each of them. This promotes code reuse and enhances the maintainability of your React applications. Examples - Auth Check, Dark Mode / Light Mode Application etc. 
    
Read the following article for detailed understanding - [Mastering Higher Order Components (HOCs) in React | HackerNoon](https://hackernoon.com/mastering-higher-order-components-hocs-in-react)

### Explain `useState` hook and its purpose

The `useState` hook is perhaps the most basic and essential hook in React. It enables you to add state to your functional components, allowing them to keep track of data that changes over time. Let's dive into how `useState` works with a simple example.

```js
import React, { useState } from 'react';

const Counter = () => {
  // Declare a state variable named 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
```

### Can you describe the useEffect hook and its purpose?

The `useEffect` hook is used to perform side effects in your functional components, such as fetching data, subscribing to external events, or manually changing the DOM. It combines the functionality of `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.

```js
import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from an API
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default DataFetcher;
```
**Cleanup using `useEffect`**

Sometimes, side effects need to be cleaned up, especially when dealing with subscriptions or timers to prevent memory leaks. The `useEffect` hook can return a cleanup function that will be executed when the component unmounts.

```js
// In this example, the setInterval function is used to update the seconds state every second.
// The cleanup function returned by useEffect clears the interval when the component is unmounted.

import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array for initial setup only

  return <p>Seconds: {seconds}</p>;
};

export default Timer;
```

### Can you describe the `useContext` hook and its purpose?
    
The `useContext` hook is used to consume values from a React context. Context provides a way to pass data through the component tree without having to pass props manually at every level. Let's explore how `useContext` works with a simple example.

```js
// We create an AuthContext using createContext and provide an AuthProvider component. The AuthProvider component wraps its children with the context provider and includes functions for logging in and out.

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
```

```js
// Consuming useContext in the children components 
// Here, the useAuth hook is used to access the values provided by the AuthContext. The AuthStatus component displays the user's login status and provides buttons to log in and out.

import React from 'react';
import { useAuth } from './AuthContext';

const AuthStatus = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      <p>User is {isAuthenticated ? 'logged in' : 'logged out'}</p>
      <button onClick={login}>Login</button>


      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AuthStatus;
```

### Explain useReducer in React and its usage
The `useReducer` hook in React is an alternative to `useState` for managing more complex state logic. It is particularly useful when the state depends on previous states or involves multiple sub-values, enabling better organization and control.

**How `useReducer` Works**

`useReducer` is based on the **Reducer Pattern**:

1. **Reducer Function**: A pure function that takes the current state and an action, then returns the new state.
2. **Dispatch**: A function used to send actions to the reducer.
3. **State**: The state managed by the reducer.

Read the following article for detailed understanding - [How to useReducer in React](https://www.robinwieruch.de/react-usereducer-hook/)

### Explain the use of custom hooks in React

Read the following article for detailed understanding - [Custom Hooks in React](https://www.robinwieruch.de/react-custom-hook/)

```js
const useBoolean = () => {
  const [state, setState] = React.useState();

  const handleTrue = () => setState(true);
  const handleFalse = () => setState(false);
  const handleToggle = () => setState(!state);

  return [
    state,
    {
      setTrue: handleTrue,
      setFalse: handleFalse,
      setToggle: handleToggle,
    },
  ];
};
```
```js
function App() {
  const [isToggle, {
    setToggle,
    setTrue,
    setFalse,
  }] = useBoolean(false);

  return (
    <div>
      <button type="button" onClick={setToggle}>
        Toggle
      </button>
      <button type="button" onClick={setTrue}>
        To True
      </button>
      <button type="button" onClick={setFalse}>
        To False
      </button>

      {isToggle.toString()}
    </div>
  );
}
```

### How do you update the state of a parent component from a child component?
    
  To update the state of a parent component from a child component, you can pass a **state-updating function** (defined in the parent) as a **prop** to the child component. The child can then invoke this function to update the parent's state.
    
  **Steps to Update Parent State from Child**
    
  1. **Define State in the Parent Component**: The parent component owns the state and provides a function to update it.
  2. **Pass the Update Function as a Prop**: The parent's state-updating function is passed to the child component as a prop.
  3. **Invoke the Update Function in the Child**: The child component calls the function to modify the parent's state.
**Example**

**Parent Component**
```js
import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [message, setMessage] = useState("Hello from Parent");

  // Function to update state
  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <h1>{message}</h1>
      <Child updateMessage={updateMessage} />
    </div>
  );
};

export default Parent;
```
**Child Component**
```js
import React from "react";

const Child = ({ updateMessage }) => {
  const handleChange = () => {
    updateMessage("Message updated from Child!");
  };

  return (
    <button onClick={handleChange}>Update Parent Message</button>
  );
};

export default Child;
```

  **Alternative Approaches**
  
  1. **Using Context API**:
  2. **State Management Libraries**

### What is prop drilling and how can you avoid it?
    
  Prop drilling refers to the process of passing data (props) from a parent component to a deeply nested child component through multiple intermediary components, even if those intermediary components do not directly need the data.
    
  **Problems with Prop Drilling**
    
  1. **Unnecessary Complexity**: Makes components tightly coupled, harder to maintain and refactor.
  2. **Code Duplication**: Repetitive passing of props through intermediate components.
  3. **Scalability Issues**: As the app grows, managing deeply nested props becomes cumbersome.
    
  **How to Avoid Prop Drilling -**
    
  1. Use React Context API
  2. Use State Management Libraries - Redux, Zustand, MobX
  3. Higher Order components
  4. Custom Hooks

### How to call parent component method from child component in react ?
    
To call a parent component's method from a child component in React, you can pass the parent method as a prop to the child component. This establishes communication between the child and the parent.

### What are React Suspense and React.lazy?
    
  React provides **lazy loading** capabilities using `React.lazy()` and `React.Suspense` to improve performance by dynamically loading components only when needed.
  
  **React.lazy()**
  
  `React.lazy()` is a function that enables **code-splitting** by loading components dynamically. It works with ES6’s dynamic `import()` to load a component only when it's needed.
  
  **Example: Using React.lazy()**
  
  ```jsx
  import React, { Suspense, lazy } from "react";
  
  // Lazy load the component
  const LazyComponent = lazy(() => import("./LazyComponent"));
  
  function App() {
    return (
      <div>
        <h1>My App</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      </div>
    );
  }
  
  export default App;
  
  ```
  
  💡 **How it Works:**
  
  - `lazy(() => import('./LazyComponent'))` dynamically imports the component.
  - The component is only loaded when needed, reducing the initial bundle size.
  - **Must be wrapped in `<Suspense>`** to provide a fallback UI while loading.
  
  **React Suspense**
  
  `React.Suspense` is a component that lets you **handle loading states** for lazy-loaded components and asynchronous data fetching (in React Server Components).
  
  **Use Cases of Suspense**
  
  - **Lazy Loading Components** (via `React.lazy()`)
  - **Fetching Data with Suspense-enabled Libraries** (like React Server Components, Relay, or React Query)
  
  **Example: Suspense for Data Fetching (React Server Components)**
  
  ```tsx
  import { Suspense } from "react";
  import UserProfile from "./UserProfile";
  
  function App() {
    return (
      <Suspense fallback={<div>Loading user data...</div>}>
        <UserProfile />
      </Suspense>
    );
  }
  
  ```
  
  💡 **How it Works:**
  
  - When `UserProfile` needs to fetch data, React pauses rendering.
  - The fallback UI (`Loading user data...`) is shown until the data is available.
  
  **Key Differences Between React.lazy() and React.Suspense**
  
  | Feature | React.lazy() | React.Suspense |
  | --- | --- | --- |
  | Purpose | Code-splitting (dynamic component import) | Handles loading states for lazy components & async data |
  | Works With | Components only | Components & data fetching |
  | Needs Suspense? | Yes ✅ | Yes ✅ |
  | Example Use Case | Lazy loading a Dashboard component | Showing a loading spinner while fetching user data |
  
  **🚀 When to Use Them?**
  
  - Use `React.lazy()` when you want to split your bundle and **load components only when needed**.
  - Use `React.Suspense` to **handle loading states** for lazy components or asynchronous data fetching in React Server Components.

### Explain lazy loading & create a lazy loaded component in react ?
Lazy loading is a design pattern used to improve application performance by deferring the loading of components or resources until they are actually needed. In React, lazy loading is commonly used for components to reduce the initial load time by splitting the code into smaller chunks (code-splitting).

**How It Works**
When a React app is built, all components are usually bundled into a single JavaScript file. Lazy loading splits this file into smaller chunks, loading only the necessary parts as the user navigates the app. This helps in:
- **Reducing initial load time**.
- **Improving user experience** for larger applications.
- **Optimizing resource utilization**.

**Syntax**
```javascript
const LazyComponent = React.lazy(() => import('./LazyComponent'));
```

**Example**

**Component Setup**
```javascript
// LazyComponent.js
import React from 'react';

const LazyComponent = () => {
  return <h1>This is a lazy-loaded component!</h1>;
};

export default LazyComponent;
```

**Using Lazy Loading in the App**
```javascript
import React, { Suspense } from 'react';

// Lazy load the component
const LazyComponent = React.lazy(() => import('./LazyComponent'));

const App = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      {/* Suspense provides a fallback UI while loading */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default App;
```

**Key Elements**
1. **`React.lazy`:**
   Dynamically imports the component.

2. **`Suspense`:**
   Wraps the lazy-loaded component and displays a fallback UI (like a loading spinner) while the component is being fetched.

**Benefits of Lazy Loading**
- **Performance Optimization:**  
- **Efficient Resource Utilization:**
- **Improved User Experience:**

Read the following article to understand [Lazy Loading in Routes](https://www.robinwieruch.de/react-router-lazy-loading/)


### What's difference between useMemo & useCallback? 
    
  The main difference between useMemo and useCallback is that **useMemo returns a value, while useCallback returns a function.** Both are React hooks that help optimize performance by avoiding unnecessary re-renders.
  
  |  | useMemo | useCallback |
  | --- | --- | --- |
  | What it returns | A memoized value | A memoized function |
  | When it's used | For expensive calculations or data transformations | To cache a function that relies on changing props or state |
  
  **When to use**
  
  - useMemo is good for optimizing expensive calculations or data transformations.
  - useCallback is good for handling events and other functions that get passed down to child components.
   



   
