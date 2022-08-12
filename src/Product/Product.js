import React, { useState } from "react";
import "./Product.css";
import { BsCartPlus } from "react-icons/bs";

const Product = ({ product, handleAddToCart }) => {
  const [flipImage, setFlipImage] = useState(false);
  //flip image state newa hoise jeta bydefault false ache
  console.log(flipImage);
  const { name, pairImage, color, price, sideImage } = product;
  return (
    <div
      className='product-card'
      onMouseEnter={() => setFlipImage(true)}
      onMouseLeave={() => setFlipImage(false)}
    >
      {/* er modhe 2 ta function newa hoise mouse dhukle true hbe r ber hole false hbe  */}
      <div className='image-container'>
        <img
          className='product-image'
          src={flipImage ? sideImage : pairImage}
          alt=''
        />
        {/* ternary operator diye side img naki double img eta set kore dilam */}
      </div>
      <div className='product-info'>
        <div>
          <p>
            {name} {color}
          </p>
          <small>$ {price}</small>
        </div>
        <div>
          <button onClick={() => handleAddToCart(product)}>
            <BsCartPlus size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
