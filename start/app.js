const express = require("express");
require("./db/conn");
const Student = require("./models/students")
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

// create a new students
app.post("/students",(req,res) =>{

    console.log(req.body)

    const user =  new Student(req.body);
    user.save().then(()=>{
           res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    })
   



    // res.send("hello from the other side");

})

app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})