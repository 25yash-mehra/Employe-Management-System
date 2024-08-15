const { type } = require("@testing-library/user-event/dist/type")
const moongose = require("mongoose")

const empSchema = new moongose.Schema({
    email:{type:String,required:true},
    contact:{type:Number,required:true},
    fname:{type:String,required:true}
})

module.exports = moongose.model('employeData',empSchema)