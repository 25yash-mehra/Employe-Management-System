let express = require("express")
let app = express()
let cors = require("cors")

app.use(express.json())
app.use(cors())


app.post("/signup",function(req,res){
console.log(req.body);
res.json({ message: 'Data received successfully' });
})

app.get("/" ,function(req,res){
res.send("hello")
})

console.log("started");
app.listen(8000)