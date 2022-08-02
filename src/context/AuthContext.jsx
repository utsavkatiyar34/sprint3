import React, { createContext, useState} from "react";
import axios from 'axios';
import {Navigate} from 'react-router';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
 
  let handleClick = (body) => {
    axios({
      method: "post",
      url:'https://reqres.in/api/login',
      data:body
    })
    .then(res =>{
      setToken(res.data);
      // alert("Login Successful");
      <Navigate to="/"/>
    })
    .catch(err=> console.log(err));
    }
    let handleLogout=()=>{
    setToken(null);
    <Navigate to="/login" />
    }
    const value= {
      handleClick,
      token,
      handleLogout
    }
   
      

  return <AuthContext.Provider value={value}>
    {children}
    </AuthContext.Provider>;
};
