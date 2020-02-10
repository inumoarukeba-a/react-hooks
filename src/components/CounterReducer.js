import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {count}
      <button onClick={() => dispatch("increment")}>カウント +</button>
      <button onClick={() => dispatch("decrement")}>カウント -</button>
      <button onClick={() => dispatch("reset")}>リセット</button>
    </div>
  );
}

export default CounterReducer;
