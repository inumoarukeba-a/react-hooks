import React, { useState } from 'react'

const FormHook = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const setFirstName = (e) => {
    setName({ ...name, firstName: e })
  }

  return (
    <div>
      <div>
        <p>firstName : {name.firstName}</p>
        <p>lastName : {name.lastName}</p>
      </div>
      <form>
        <input type="text" value={name.firstName}
          onChange={e => setName({ ...name, firstName: e.target.value })} />
        <input type="text" value={name.lastName}
          onChange={e => setName({ ...name, lastName: e.target.value })} />
      </form>
    </div>
  )
}

export default FormHook
