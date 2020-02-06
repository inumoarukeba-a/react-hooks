import React, { useState } from 'react';

const ItemHook = () => {
  const { items, setItems } = useState([]);
  const addItem = () => {
    setItems([...items, { id: items.length, value: Math.floor(Math.random() * 11) }])
  }

  return (
    <React.Fragment>
      <button onClick={addItem}>追加</button>

    </React.Fragment>
  )
}

export default ItemHook
