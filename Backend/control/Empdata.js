// const Empschema = require("../Schema/Empschema")
let empSchema = require("../Schema/Empschema")

const employeData = async(req,res) => {
    let data =  empSchema.insertMany({
        email:req.body.email,
        fname:req.body.fname,
        contact:req.body.contact
    })


    res.status(200).send(data)
}

const findemp = async(req,res)=>{
    // console.log(empSchema);
    
    let allEmployee = await empSchema.find()
    res.status(200).send(allEmployee)
}


const deletItem = async(req,res)=>{
console.log(req.params.id);
res.status(200).send("done")
}

module.exports = {employeData,findemp,deletItem}