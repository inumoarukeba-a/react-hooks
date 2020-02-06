import React from 'react';
import Counter from "./components/Counter"
import CounterHook from "./components/CounterHook";
import FormHook from "./components/FormHook";
import EffectHook from './components/EffectHook';

const App = () => {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <CounterHook /> */}
      {/* <FormHook /> */}
      <EffectHook />
    </div>
  );
}

export default App;
