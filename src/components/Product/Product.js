import React, { useState, useEffect } from "react";
import ProductsService from "../../services/ProductsService";
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
                  <h5>Item : {name}</h5>
                  <p>Price : {price}</p>
                  <p>Quantity : {quantity}</p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
