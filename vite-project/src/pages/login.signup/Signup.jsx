import React,{useState} from 'react';
import {Link} from "react-router-dom";
import sign from "./Signup.module.css";

const Signup = () => {
  const[name,setname]=useState();
  const[email,setemail]=useState();
  const[password,setpassword]=useState();



  const onSubmit=async()=>{
    try{
      const sendSign=await fetch('http://localhost:3000/user/signup',{
        method:"POST",
        headers:{
          'content-Type':"application/json"
        },
        body:JSON.stringify({name,email,password})
      })
      const response=await sendSign.json();


      if(sendSign.ok){

        
        alert("Registartion Successfull");
      }else{
        alert("Registration Failed");
      }
    }catch(error){
       console.log(error);
    }
  };
  return (
    <div>
      <h1>Signup</h1>
      <div>
        <input type="text"name="" id=""placeholder="Username" onChange={(e)=>setname(e.target.value)}/><br /><br />
        <input type="text"name=""id=""placeholder="Email" onChange={(e)=>setemail(e.target.value)}/><br /><br />
        <input type="password"name=""id=""placeholder="Password"onChange={(e)=>setpassword(e.target.value)} /><br /><br />
        <button onClick={onSubmit} type="submit">Submit</button>
      </div>
      <p>Already a memeber? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default Signup;