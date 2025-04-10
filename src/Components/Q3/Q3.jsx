import React, {useState} from 'react'

const Q3 = () => {
    const[isVisible,setisVisible]=useState(true);
    const handleToggle = () => {
        setisVisible(!isVisible)
    }
  return (
    <div style={{ textAlign: 'center' }}>
    <button onClick={handleToggle}>
      {isVisible ? 'Hide' : 'Show'} Text
    </button>
    {isVisible && <p>Hello World</p>}
  </div>

  )
}

export default Q3
