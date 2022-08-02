import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const fetchCart = () => {
    axios({
      method: "get",
      url: "http://localhost:8090/cartItems",
    })
      .then((res) => {
        setCart(res.data);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    fetchCart();
  }, []);

  const handleAddtocart = (id) => {
    const item = cart.find((el) => el.productId === id);
    if (item === undefined) {
      axios({
        method: "post",
        url: "http://localhost:8090/cartItems",
        data: {
          count: 1,
          productId: id,
          id,
        },
      })
        .then((res) => {
          fetchCart();
        })
        .catch((err) => console.log(err));
    }
   
  };
  const handleInc = (id) => {
    const item = cart.find((el) => el.productId === id);
      axios({
        method: "patch",
        url: `http://localhost:8090/cartItems/${id}`,
        data: {
          count: item.count+1,
        },
      })
        .then((res) => {
          fetchCart();
        })
        .catch((err) => console.log(err));
  };
  const handleDec = (id) => {
    const item = cart.find((el) => el.productId === id);
    if(item.count===1){
      axios({
        method: "delete",
        url: `http://localhost:8090/cartItems/${id}`,
      })
        .then((res) => {
          fetchCart();
        })
        .catch((err) => console.log(err));
    }
    else{
    axios({
      method: "patch",
      url: `http://localhost:8090/cartItems/${id}`,
      data: {
        count: item.count-1,
      },
    })
      .then((res) => {
        fetchCart();
      })
      .catch((err) => console.log(err));
    }
  };
  const handleRemove = (id) => {
    axios({
      method: "delete",
      url: `http://localhost:8090/cartItems/${id}`,
    })
      .then((res) => {
        fetchCart();
      })
      .catch((err) => console.log(err));
  };
  const value = {
    cart,
    handleAddtocart,
    handleDec,
    handleInc,
    handleRemove,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
