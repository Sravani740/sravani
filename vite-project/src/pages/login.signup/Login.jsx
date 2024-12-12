import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Login.module.css";
import {useNavigate} from "react-router-dom"
// import Link from "browser-router-dom"
const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  
  const navigate=useNavigate()
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const sendSign = await fetch(`http://localhost:3000/user/Login`, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const response = await sendSign.json();

      if (sendSign.ok) {
        alert("Login Successfull");
        navigate("/home");
        localStorage.setItem(
            
            "token",response.token)
      } else {
        alert("Login Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div lassName={style.full}>
      <div>
        <h1 className={style.hello}>Login</h1>
      </div>
      <div>
        <input type="text" name="" id="" placeholder="Email" onChange={(e)=>setemail(e.target.value)}/>
        <br />
        <input type="text" name="" id="" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
        <br />
        <button onClick={onSubmit}>Login</button>
      </div>
      <div>
        <p>
          Not a member?<Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;