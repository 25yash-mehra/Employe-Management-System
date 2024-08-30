let express = require("express")
let app = express()
let cors = require("cors")  
let mongodb = require('./Connect.js')
let userRouter = require('./router/Userrouter.js')
let empRouter = require("./router/Emprouter.js")
app.use(cors())

mongodb()  // mongo db ko connect kar liya
// app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(userRouter)
app.use(empRouter)

app.listen(8000)