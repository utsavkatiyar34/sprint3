import React, { useEffect,useState } from "react";
import axios from 'axios';
import ProductItem from './ProductItem'

const Products = () => {
const [products, setProducts] = useState([]);
useEffect(() => {
 axios({
  method:"get",
  url:"http://localhost:8090/products"
 }).then(res=>{
  setProducts(res.data);
 }).catch(err=> console.log(err));
}, [])


  return <div>
    {products.map((el, ind)=><ProductItem key={el.id}{...el}/>)}
    </div>;
};

export default Products;
