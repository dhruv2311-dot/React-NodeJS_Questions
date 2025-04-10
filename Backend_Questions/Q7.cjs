const express =require('express')
const app=express()
const PORT=3000;
app.use(express.json())
app.delete('/users/:id',(req,res)=>{
    const userId=parseInt(req.params.id)
    const userExists = users.some(u => u.id === userId);

  if (!userExists) {
    return res.status(404).json({ error: 'User not found' });
  }

  users = users.filter(u => u.id !== userId);
  res.status(204).send(); 
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });