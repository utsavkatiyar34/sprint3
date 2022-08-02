import React, { useContext } from "react";
import { Button } from "@mui/material";
import "../App.css";
import { CartContext } from "../context/CartContext";


const ProductItem = ({ name, description, id }) => {
  const { cart, handleAddtocart, handleDec, handleInc, handleRemove} = useContext(CartContext);
  
  
  return (
    <div className="productcard">
      <div className="name">{name}</div>
      <div className="description">{description}</div>
      <div className="counte">{cart.find((el) => el.productId === id)?.count}</div>
      <Button
        varient="solid"
        sx={{
          backgroundColor: "purple",
          color: "white",
          height: "35px",
          width: "120px",
          margin:"5px",
          "&:hover": { backgroundColor: "purple", color: "white" },
        }}
        onClick={()=>handleAddtocart(id)}
      >
        Add to cart
      </Button>
      <Button
        varient="solid"
        sx={{
          backgroundColor: "purple",
          color: "white",
          height: "35px",
          width: "120px",
          margin:"5px",
          "&:hover": { backgroundColor: "purple", color: "white" },
        }}
        onClick={()=>handleRemove(id)}
      >
       remove
      </Button>
      <br></br>
      <Button
        varient="solid"
        sx={{
          backgroundColor: "purple",
          color: "white",
          height: "35px",
          width: "120px",
          margin:"5px",
          "&:hover": { backgroundColor: "purple", color: "white" },
        }}
        onClick={()=>handleInc(id)}
      >
        increment
      </Button>
      <Button
        varient="solid"
        sx={{
          backgroundColor: "purple",
          color: "white",
          height: "35px",
          width: "120px",
          margin:"5px",
          "&:hover": { backgroundColor: "purple", color: "white" },
        }}
        onClick={()=>handleDec(id)}
      >
        decrement
      </Button>
    </div>
  );
};

export default ProductItem;
