let express = require("express")
let app = express()
let cors = require("cors")  
// let fs = require('fs')
let mongodb = require('./Connect.js')
let userRouter = require('./router/Userrouter.js')
app.use(express.json())
app.use(cors())

mongodb()  // mongo db ko connect kar liya
// userRouter() 
app.use("/v1",userRouter)


// app.post("/signup",function(req,res){
//     res.json(req.body);
//     let  store = __dirname + "store.jsx"
// if(store){
//     fs.appendFileSync("store.jsx",JSON.stringify(req.body))
// }else{
//     fs.writeFileSync("store.js",JSON.stringify(req.body))
// }
// })

// app.get("/" ,function(req,res){
// res.send("hello")
// })

// console.log("started");
app.listen(8000)