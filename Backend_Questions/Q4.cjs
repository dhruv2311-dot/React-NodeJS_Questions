const express = require('express')
const app = express()
const PORT =3000;
app.use(express.json())
let users = [
    { id: 1, name: 'Dhruv', email: 'Dhruv@example.com' },
    { id: 2, name: 'Mayank', email: 'Mayank@example.com' },
    { id: 3, name: 'Riya', email: 'riya@example.com' }
  ];
  app.get('/users',(req,res)=>{
    res.json(users)
  })
  app.get('/users/:id',(req,res)=>{
    const userId=parseInt(req.params.id)
    const user=users.find(u=>u.id===userId)
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
    
      res.json(user);
  })
  app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)  
  })