const cors =require("cors")
const express=require("express")
const mongoose = require("mongoose")
const app=express()
require("dotenv").config();     //to read environment variables from .env file
app.use(express.json())  // parse requests of content-type - application/json
app.use(express.urlencoded({       // parse requests of content-type - application/x-www-form-urlencoded
    extended: true
  }));
app.use(cors())
const user= require("./router/userRouter")
user(app)
require("./router/userRouter")(app)            //while importing we have to give some argument bcz we r importing some function
require("./router/imageRouter")(app)

const PORT=process.env.PORT || 27017     //setup server to listen on port 8080 or 3000
mongoose.connect('mongodb://localhost/imgur', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to mongodb."))
.catch(err => console.log(err));
app.get("/",(req,res)=>{
    res.send("hi everyone")
})

app.post("/comments",(req,res)=>{
    res.send("/post request is recieved")
})
app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`)
})

