<h1 align="center">JavaScript & React Interview Questions</h1>

This repository contains a few hundred curated JavaScript interview questions with high quality answers for acing your Front End Engineer interviews.

### What are the differences between JavaScript variables created using `let`, `var` or `const`?

<!-- Update here: /questions/what-are-the-differences-between-variables-created-using-let-var-or-const/en-US.mdx -->

In JavaScript, `let`, `var`, and `const` are all keywords used to declare variables, but they differ significantly in terms of scope, initialization rules, whether they can be redeclared or reassigned and the behavior when they are accessed before declaration:

| Behavior | `var` | `let` | `const` |
| --- | --- | --- | --- |
| Scope | Function or Global | Block | Block |
| Initialization | Optional | Optional | Required |
| Redeclaration | Yes | No | No |
| Reassignment | Yes | Yes | No |
| Accessing before declaration | `undefined` | `ReferenceError` | `ReferenceError` |

### What is the difference between `==` and `===` in JavaScript?

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







   
