import React, { useState, useEffect } from 'react'

const DataFetch = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    const RESPONSE = await fetch("https://api.randomuser.me/");
    const DATA = await RESPONSE.json();
    const [item] = DATA.results;
    setUser(item);
    setLoading(false);
    console.log(item);
  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <div>
      {loading ? "loading..." : user.name.first}
    </div>
  )
}

export default DataFetch
