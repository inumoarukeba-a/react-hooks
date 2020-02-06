import React, { useState, useEffect } from 'react'

const EffectHook = () => {
  const [count, setCount] = useState(0);
  const [name, setname] = useState("")

  useEffect(() => {
    document.title = `クリック数: ${count}`
    console.log("aaa");
  }, [count])

  return (
    <div>
      <p>クリック数: {count} 回</p>
      <p>名前: {name}</p>
      <input
        type="text"
        value={name}
        onChange={e => setname(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>カウント</button>
    </div>
  )
}

export default EffectHook
