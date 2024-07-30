let userScheama = require("../Schema")
let bcrypt = require("bcrypt")
let jwt = require("jsonwebtoken")

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
 
const loginData = (req,res)=>{
    let loginD = userScheama.insertMany(req.body)
    res.status(200).send(loginD)
}

module.exports = {createUser , loginData}