import React, { useEffect, useState } from "react";
import "../Styling/Style.css";
import Nav from "../Navbar/Nav"

let Api = () => {
  let [api, setApi] = useState({ products: [] });
  let [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((val) => {
        setApi({ products: val });
      });
  }, []);

  let valueSearch = (e) => {
    setSearch(e.target.value);
  };
  return (

    <>
    <Nav/>
    <div className="search-content">
    <div id="heading">
      <h1>ShopSphere powers the dreams of eCommerce businesses everywhere.</h1>
    </div>
      <input className="search" type="text" placeholder="Search products..." onChange={valueSearch} value={search}
      />

      <div className="products">
        {api.products
          .filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((product) => (
            <div key={product.id}>
              <img src={product.image} alt={product.title} width="150" />
              <p>{product.title}</p>
              <p className="price">${product.price}</p>
              <button id="cart">Add to Cart</button>
              <button className="cart">Buy Now</button>
            </div>
          ))}
      </div>
    </div>
    </>
  );
};

export default Api;
