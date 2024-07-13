
let mongoose = require('mongoose')
let Schema = mongoose.Schema


let userSchema = new Schema({
   username: { type: String, required: true },
email:{type:String, required:true, unique:true },
password:{type:String, required:true},
created_at:{type:Date,default:Date.now}
})    

let model = mongoose.model("user",userSchema)

module.exports = model;