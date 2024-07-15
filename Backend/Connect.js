const mongoose = require("mongoose")

let mongodb = () =>
    { mongoose.connect('mongodb+srv://myash7535:5214@employeclusture.7srm66h.mongodb.net/test').then(()=>{
    console.log("connected sucessfully");
}).catch((err)=>{
    console.error(err)
})
}

module.exports = mongodb