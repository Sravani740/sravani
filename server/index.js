const express = require("express");
const cors = require("cors");
const Signup=require("./model/signup") 
const userRoute=require("./Routes/userRoutes")
const{default:mongoose}=require("mongoose")
const app = express();
mongoose.connect("mongodb://localhost:27017/").then(()=>console.log("mongodb connected successfully")) .catch((error)=>console.log(error));

app.use(express.json());
const corsOptions={
    origin:["http://localhost:5173","http://loacalhost:5174"],
    methods:["POST","GET"],
    allowedHeaders:["Content-Type","Authorization"],
    credentials:true,
}
app.use(cors(corsOptions));
app.get("/",(req,res)=>{
    res.send("hello world")
});


app.use("/user",userRoute);
app.listen(3000,(req,res)=>{
        console.log("server is running")
})