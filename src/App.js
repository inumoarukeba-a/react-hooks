import React from 'react';
import Counter from "./components/Counter"
import CounterHook from "./components/CounterHook";

const App = () => {
  return (
    <div className="App">
      <Counter />
      <CounterHook />
    </div>
  );
}

export default App;
