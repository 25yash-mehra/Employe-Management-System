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
 
const loginData = async(req,res)=>{
    // let loginD = userScheama.insertMany(req.body)
    // res.status(200).send(loginD)
    let user = await userScheama.findOne({email:req.body.email})
    if(!user) return res.status(401).send("invalid user")

        let compare = await bcrypt.compare(req.body.password,user.password)
        if(!compare) return res.status(404).send("not matched")

            let token = jwt.sign({email:user?.email},"secret")
               console.log(token);
               res.status(200).send(token)
}

module.exports = {createUser , loginData}