const express =  require("express");
const router  = new express.Router();
const Student = require('../models/students');




// create a new students by async await
router.post("/students", async (req, res) => {

    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser)
    } catch (e) {
        res.status(400).send(e);
    }

})


// read the data registered Students
router.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData)
    } catch (e) {
        res.send(e)
    }
    // res.send("hii my self faishal imam")
})




// get the individual Students Data using id
router.get("/students/:id", async (req , res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        console.log(studentData)
        if(!studentData){
            return res.status(404).send();
        }else{
           res.send(studentData)
        }
        
    } catch (e) {
        res.status(500).send(e)
    }
})



// update the  students by its id
router.patch("/students/:id" , async (req , res)=>{
    try{
      const  _id = req.params.id;
      const updateStudents  = await Student.findByIdAndUpdate(_id ,req.body ,{
          new:true
      })
      res.send(updateStudents)
    }catch(e){
        res.status(404).send(e)
    }

})


module.exports = router;