import React,{useState} from 'react'

const Q4 = () => {
    const[text,settext]=useState('');
    const  handlechange = (e) => settext(e.target.value);
  return (
    <div>
      <h2>Character Count</h2>
      <textarea
        rows="6"
        cols="40"
        placeholder="Type something..."
        value={text}
        onChange={handlechange}
      />
      <p>Character Count: {text.length}</p>
    </div>
  )
}

export default Q4
