import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//reducer(countModifier)는 내 data를 modify하는 function이다.
//action은 redux에서 function을 부를때 쓰는 두번째 parameter or argument 이다
const countModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

//store(countStore)는 내 data를 저장하는 곳
const countStore = createStore(countModifier);

countStore.dispatch({ type: "ADD" }); //1
countStore.dispatch({ type: "ADD" }); //2
countStore.dispatch({ type: "ADD" }); //3
countStore.dispatch({ type: "ADD" }); //4
countStore.dispatch({ type: "ADD" }); //5
countStore.dispatch({ type: "MINUS" }); //4

console.log(countStore.getState()); //4
