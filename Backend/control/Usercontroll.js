let userScheama = require("../Schema")

const createUser = (req,res) =>{
    console.log(req.body)
    let data =  userScheama.insertMany(req.body)
    res.status(201).send(data)
}


module.exports = createUser