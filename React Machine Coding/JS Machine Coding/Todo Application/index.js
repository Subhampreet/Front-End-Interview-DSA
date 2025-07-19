const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const todoSubmit = document.querySelector(".todo-submit");
let editMode = false;
let editItem = null;

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const todoText = todoInput.value.trim();

  if (todoText !== "") {
    if (editMode) {
      editItem.firstChild.textContent = todoText;
      todoSubmit.innerText = "Add Todo";
      editItem = null;
      editMode = false;
    } else {
      addTodoItem(todoText);
    }
    todoInput.value = "";
  } else {
    alert("Please enter valid task");
  }
});

todoList.addEventListener("click", (e) => {
  const target = e.target;

  if (target.tagName === "BUTTON") {
    const todoItem = target.parentNode;
    if (target.innerText === "🗑️") {
      todoItem.remove();
    } else if (target.innerText === "✏️") {
      editMode = true;
      editItem = todoItem;
      todoSubmit.innerText = "Edit Todo";
      todoInput.value = todoItem.firstChild.textContent;
      todoInput.focus();
    }
  }
});

function addTodoItem(todoText) {
  const todoItem = document.createElement("li");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  todoItem.innerHTML = `<span>${todoText}</span>`;
  editButton.innerText = `✏️`;
  deleteButton.innerText = `🗑️`;

  todoItem.appendChild(editButton);
  todoItem.appendChild(deleteButton);
  todoList.appendChild(todoItem);
}
