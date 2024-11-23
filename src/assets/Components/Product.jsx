import React from "react";
import "./Product.css";
import img from '../Components/p1.jpg'
import img2 from '../Components/p2.jpg'
import img3 from '../Components/p3.jpg'
import img4 from '../Components/p4.jpg'
const Product = () => {
  const products = [
    {
      name: "Autumn Bouquet",
      price: 375,
      rating: 5,
      image: img, 
    },
    {
      name: "Cozy Armchair",
      price: 945,
      rating: 4,
      image: img2,  
    },
    {
      name: "Forest Fairy",
      price: 188,
      rating: 3,
      image: img3, 
    },
    {
      name: "Laced Dress",
      price: 2590,
      rating: 5,
      image: img4, 
    },
  ];

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <div className="product-image-container">
            <img src={product.image} alt={product.name} className="product-image" />
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
            <div className="product-rating">
              {"★".repeat(product.rating)}
              {"☆".repeat(5 - product.rating)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
