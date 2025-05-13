const fs = require('fs');
// fs.readFile('exampl.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// fs.writeFile('example.txt','hellow,world!',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("file created")
//     }
// })

// fs.appendFile('example.txt','hellow,world!',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("file created")
//     }
// })

// fs.unlink('example.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console
//     }
// })

// fs.mkdir('example',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("directory created")
//     }
// })


// fs.rmdir('example',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("directory deleted")
//     }
// })



// const express= require('express')
// const app=express();
// const PORT=3000;
// app.use(express.json())
// const students=[
//     {id:1,name:'Dhruv',age:20},
//     {id:2,name:'mayank',age:19},
//     {id:3,name:'kiran',age:18}
// ]
// app.get('/students',(req,res)=>{
//     res.json(students)
// })
// app.get('/students/:id',(req,res)=>{
//     const studentId=parseInt(req.params.id)
//     const student=students.find((u)=>u.id===studentId)
//     if(!student){
//         res.json(400).send("student not found")
//     }
//     res.json(student)
// })
// app.post('/students',(req,res)=>{
//     const student={
//         id:students.length+1,
//         name:req.body.name,
//         age:req.body.age
//     }
//     students.push(student)
//     res.json(student)
// })
// app.put('/students/:id',(req,res)=>{
//     const studentId=parseInt(req.params.id)
//     const student=students.find((u)=>u.id===studentId)
//     if(!student){
//         res.status(400).send("student not found")
//     }
//     student.name=req.body.name
//     student.age=req.body.age
//     res.json(student)
// })

// app.delete('/students/:id',(req,res)=>{
//     const studentId=parseInt(req.params.id)
//     const student=students.find((u)=>u.id===studentId)
//     if(!student){
//         res.status(400).send("student not found")
//     }
//     const index=students.indexOf(student)
//     students.splice(index,1)
//     res.json(student)
// }
// )
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


// const joi =require('joi')
// const express= require('express')
// const app=express()
// const PORT=3000
// app.use(express.json())
// const userschema=joi.object({
//     name:joi.string().min(3).max(30).required(),
//     email:joi.string().email().required(),
//     age:joi.number().integer().min(18).optional()
// })
// app.post('/api/users',(req,res)=>{
//     const{error}=userschema.validate(req.body)
//     if(error){
//         return res.status(400).send(error.details[0].message)
//     }
//     res.send('user created')
// })
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));