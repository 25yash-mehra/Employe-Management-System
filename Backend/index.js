let express = require("express")
let app = express()
let cors = require("cors")  
let mongodb = require('./Connect.js')
let userRouter = require('./router/Userrouter.js')
app.use(cors())

mongodb()  // mongo db ko connect kar liya

app.use(express.json())
app.use(userRouter)

app.listen(8000)