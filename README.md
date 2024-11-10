<h1 align="center">JavaScript & React Interview Questions</h1>

This repository contains a few hundred curated JavaScript interview questions with high quality answers for acing your Front End Engineer interviews.

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

   
