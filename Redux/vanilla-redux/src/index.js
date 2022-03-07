import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//reducer(countModifier)는 내 data를 modify하는 function이다.
const countModifier = (count = 0) => {
  return count;
};

//store(countStore)는 내 data를 저장하는 곳
const countStore = createStore(countModifier);

console.log(countStore.getState());
