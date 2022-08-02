import React,{ useContext } from "react";
import Products from "../components/Products";
import { AuthContext } from "../context/AuthContext";
import{Navigate}from "react-router-dom";

const Home = () => {
  const {token} = useContext(AuthContext);
  return <div style={{textAlign:"center"}}>
    {token?<>
    <Products/>
    </>
    : <Navigate to="/login" />}
    </div>;
};

export default Home;
