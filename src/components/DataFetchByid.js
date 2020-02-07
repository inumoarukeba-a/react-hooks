import React, { useState, useEffect } from 'react'

const DataFetchByid = () => {
  const [post, setPost] = useState(null)
  const [id, setId] = useState(1)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    setLoading(true);
    const RESPONCE = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const ITEM = await RESPONCE.json();
    console.log(RESPONCE);
    console.log(ITEM);
    setPost(ITEM);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [id])

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={e => setId(e.target.value)}
      />
      <p>
        {loading ? "loading..." : post.title}
      </p>
    </div>
  )
}

export default DataFetchByid
