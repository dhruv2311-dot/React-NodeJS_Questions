const express =require('express')
const app=express();
const PORT =3000;
app.use(express.json())
let users = [
    { id: 1, name: 'Dhruv', email: 'Dhruv@example.com' },
    { id: 2, name: 'Mayank', email: 'Mayank@example.com' },
    { id: 3, name: 'Riya', email: 'riya@example.com' }
  ];
  app.put('/users/:id',(req,res)=>{
        const userId=parseInt(req.params.id)
        const{name,email}=req.body
        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required' });
          }
        const index=users.findIndex(u=>u.id===userId)
        if(index=== -1){
            return res.status(404).json({ error: 'User not found' });
        }
        users[index] = { id: userId, name, email };

  res.status(200).json(users[index]);
  })
  app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
  })