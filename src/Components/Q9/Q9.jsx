import React,{useState} from 'react'

const Q9 = () => {
    const[isDarkMode,setisDarkMode]=useState(false)
    const toggleTheme= () =>{
        setisDarkMode(!isDarkMode)
    }
    const containerStyle={
        height: '100vh',
        padding: '40px',
        textAlign: 'center',
        backgroundColor: isDarkMode ? '#121212' : '#f5f5f5',
        color: isDarkMode ? '#fff' : '#000',
        transition: 'all 0.3s ease',
    }
  return (
    <div>
      <h2>{isDarkMode?"Dark Mode":"Light Mode"}</h2>
      <button onClick={toggleTheme}>Switch to {isDarkMode ? 'Light' : 'Dark'} Mode</button>
    </div>
  )
}

export default Q9
