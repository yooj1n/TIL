import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD = "ADD";
const DELETE = "DELETE";

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD:
      return [...state, { text: action.text, id: action.id }];
    case DELETE:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: ADD, text: toDo, id: Date.now() });
};

form.addEventListener("submit", onSubmit);
