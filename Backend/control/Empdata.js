// const Empschema = require("../Schema/Empschema")
const { json } = require("react-router")
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
    let allEmployee = await empSchema.find()
    res.status(200).send(allEmployee)
}



const deletItem = async(req,res)=>{
let data = await empSchema.deleteOne({_id:req.params.id})
res.status(200).send(data)
}

module.exports = {employeData,findemp,deletItem}