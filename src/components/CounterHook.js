import React, { useState } from 'react'

const CounterHook = () => {
  const [count, setCount] = useState(0)

  const incrementCount1 = () => {
    setCount(prevCount => prevCount + 1)
  }
  const incrementCount10 = () => {
    for (let i = 0; i < 10; i++) {
      setCount(prevCount => prevCount + 1)
    }
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount1}>カウント +1</button>
      <button onClick={incrementCount10}>カウント +10</button>
    </div>
  )
}

export default CounterHook
