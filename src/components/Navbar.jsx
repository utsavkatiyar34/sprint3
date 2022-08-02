import React, { useContext, useEffect } from "react";
import { NavLink, Navigate } from "react-router-dom";
import "../App.css";
import { Button } from "@mui/material";
import { CartContext } from "../context/CartContext";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { token,handleLogout } = useContext(AuthContext);
  const {cart} = useContext(CartContext);
  return (
    <nav className="navbar">
      <div className="logonav">
        <NavLink to="/" className="logonav-nav">
          {" "}
          &#60; Store &#47; &#62;
        </NavLink>
      </div>
      <div className="menu">
        {token ? (
          <ul>
            <NavLink to="/" className="menulinks">
            <Button
          varient="solid"
          sx={{
            backgroundColor: "purple",
            color: "white",
            height: "35px",
            width: "100px",
            marginLeft:'auto',
            marginRight:'auto',
            "&:hover": { backgroundColor: "purple", color: "white" },
          }}
          onClick={()=>handleLogout()}>
            Logout
          </Button>
            </NavLink>
          </ul>
        ) : (
          <ul>
            <NavLink to="/login" className="menulinks">
              Login
            </NavLink>
          </ul>
        )}
      </div>
      <ShoppingCartOutlinedIcon
        sx={{
          marginTop: "auto",
          marginBottom: "auto",
          marginLeft: "35px",
          width: "50px",
          height: "50px",
          color: "purple",
        }}
      />
      <Button
        varient="solid"
        sx={{
          backgroundColor: "purple",
          color: "white",
          height: "35px",
          width: "40px",
          marginTop:'10px',
          fontSize:'25px',
          fontWeight:'600',
          "&:hover": { backgroundColor: "purple", color: "white" },
        }}
      >
        {token?cart.length : 0}
       {/* {cart.length} */}
      </Button>
    </nav>
  );
};

export default Navbar;
