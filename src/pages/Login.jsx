import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Button } from "@mui/material";
import{Navigate}from "react-router-dom";
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {token,handleClick}=useContext(AuthContext);

  return ( <>
    {!token ?
      <div className="login">
        <input
          className="inpfields"
          value={email}
          type="text"
          placeholder="Enter Email"
          onChange={(el)=>{setEmail(el.target.value)}}
        ></input>
        <input
          className="inpfields"
          value={password}
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
          onClick = {() => handleClick({email:email, password:password})}
        >
          Login
        </Button>
      </div>
    : <Navigate to="/" /> }
    </>
  );
};

export default Login;
