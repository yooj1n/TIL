import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
  return {
    type: ADD,
    text,
    id: Date.now(),
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

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

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDelToDo = (e) => {
  const id = e.target.parentNode.id;
  store.dispatch(deleteToDo(id));
};

const paintToDo = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DELETE";
    btn.addEventListener("click", dispatchDelToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDo);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
