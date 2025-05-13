const express=require('express')
const app = express()
const PORT=3000
const jwt = require('jsonwebtoken')
require('dotenv').config()
app.use(express.json())
const dummmyuser={
    username:"admin",
    password:"password123"
}
app.post('/login',(req,res)=>{
    const {username,password}=req.body
    if(username===dummmyuser.username && password===dummmyuser.password){
        const payload={username}
        const token=jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'1h'})
         res.json({ message: 'Login successful', token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});