const express = require('express')
const app = express();
const PORT =3000;
const user = [
    { id: 1, name: 'Dhruv', email: 'Dhruv@example.com' },
    { id: 2, name: 'Mayank', email: 'Mayank@example.com' },
    { id: 3, name: 'Parth', email: 'Parth@example.com' }
];
app.get('/users',(req,res)=>{
    res.json(user)
})
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})