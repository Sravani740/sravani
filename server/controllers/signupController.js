const Signup = require('../model/signup')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Secret="Sandhya123@";
const Signups=async(req,res)=>{
    const{name,email,password}=req.body;
    try{
        const sign =await Signup.findOne({email:email});
        const hashpassword=await bcrypt.hash(password,10);
        if(sign){
            res.status(400).json({message:"user already exists"})
        }else{
            const user=await Signup.create({
                name,
                email,
                password:hashpassword,
            })
            
            if(user){
                res.status(200).json({message:"user registering successfully"})
                console.log("Registering ");
            }else{
                res.status(400).json({mesage:"Error while registring"});
            } 
        }
        
    }catch(error){
        console.log(error);
    }
    
};
const Logins = async(req, res) =>{
    const {email,password}=req.body;
    try{
        const log =await Signup.findOne({email:email});
        if(!log || !(await bcrypt.compare(password,log.password))){
            res.status(400).json({message:"Invalid email Or password"})
        }else{
            const token= await jwt.sign({userId:log._id},Secret,{expiresIn:"30h",})
           res.status(200).json({message:"User login successful",token})
        }
        
    }catch(error){
        console.log(error);
    }
};
module.exports ={ Signups, Logins}




