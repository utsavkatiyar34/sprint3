import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Button } from "@mui/material";
import "../style/navbar.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  let handleClick = () => {
    console.log(email)
    console.log(password)
  }
  return (
    <>
      <div className="login">
        <input
          className="inpfields"
          type="text"
          placeholder="Enter Email"
          onChange={(el)=>{setEmail(el.target.value)}}
        ></input>
        <input
          className="inpfields"
          type="password"
          placeholder="Enter Password"
          onChange={(el)=>{setPassword(el.target.value)}}
        ></input>
        <Button
          varient="solid"
          sx={{
            backgroundColor: "purple",
            color: "white",
            height: "35px",
            width: "120px",
            marginLeft:'auto',
            marginRight:'auto',
            "&:hover": { backgroundColor: "purple", color: "white" },
          }}
          onClick = {handleClick}
        >
          Login
        </Button>
      </div>
    </>
  );
};

export default Login;
