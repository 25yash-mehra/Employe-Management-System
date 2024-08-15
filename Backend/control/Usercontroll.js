let userScheama = require("../Schema")
let employeSchema = require("../Schema/Empschema")
let bcrypt = require("bcrypt")
let jwt = require("jsonwebtoken")


// const emp

const createUser = async(req,res) =>{
    let hashed = await bcrypt.hash(req.body.password,10)
    // let token = jwt.sign({email:req.body.email},"secret")
    let data =  userScheama.insertMany({
    email:req.body.email,
    password : hashed,
    username:req.body.username
})

// console.log(req.body.username)

    res.status(201).send(data)
}        
 
const loginData = async(req,res)=>{
    let user = await userScheama.findOne({email:req.body.email})
    if(!user) return res.status(401).send("invalid user")

        let compare = await bcrypt.compare(req.body.password,user.password)
        if(!compare) return res.status(404).send({message:"not matched"})
            let token = jwt.sign({email:user?.email},"secret")
        let decode = jwt.decode(token)
               res.status(200).send(decode)
}

const manageemployee = async(req,res)=>{
  let empData = await employeSchema.insertMany({
    email:req.body.email,
    contact:req.body.contact,
    fname:req.body.fname
  })
    
   res.status(200).send(empData)
}


module.exports = {createUser , loginData, manageemployee}