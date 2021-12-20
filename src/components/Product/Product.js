import React, { useState, useEffect } from "react";
import ProductsService from "../../services/ProductsService";
import Footer from "../Footer";
import { NavBar } from "../NavBar";
import NewsLetter from "../NewsLetter";
import "./style.css";

const Product = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await ProductsService();
    // console.log(response.data);
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  
  return (
    <>
        <NavBar/>
      <h1>Products Lists</h1>

      <div className="products">
        <div className="row">
          {products.map((item) => {
            const { _id, price, quantity, brand, name ,product_img} = item;
            return (
              <figure key={_id}>
                <img src={product_img} alt="img" ></img>
                <figcaption>
                  <h4>Brand : {brand}</h4>
                  <h4>Item : {name}</h4>
                  <h4>Price : {price}</h4>
                  <h4>Quantity : {quantity}</h4>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
      <NewsLetter/>
    <Footer/>
    </>
  );
};

export default Product;
