import React, { useState } from 'react'

const Q7 = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [error, seterror] = useState('')
    const handlesubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            seterror('Please fill all the fields')
        } else {
            seterror('');
            console.log('Login Successful:', { email, password });
        }
    };
    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handlesubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Email:</label><br />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Password:</label><br />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' }}>
                    Login
                </button>
                </form >
                
        </div>
      
    
  )
}

export default Q7
