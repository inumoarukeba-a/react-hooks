import React, { useState, useEffect } from 'react'

const EffectMouseEvent = () => {
  console.log("EffectMouseEventが呼ばれました")
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const getMousePosition = (e) => {
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log("useEffectが呼ばれました")
    window.addEventListener("mousemove", getMousePosition)
    return () => {
      window.removeEventListener("mousemove", getMousePosition)
    };
  }, [])

  return (
    <div>
      <p>x: {x}</p>
      <p>y: {y}</p>
    </div>
  )
}

export default EffectMouseEvent
