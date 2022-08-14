import React, { useEffect, useState } from "react";
import "./Cart.css";
import { IoTrashBin } from "react-icons/io5";

const Cart = ({ cart, products, handleClearCart }) => {
  console.log(products) //inspact e ekta array showing
  const [freeProduct, setFreeProduct] = useState({})
  //single product obj er modhe pabo tai empty obj dilam 
  const item = products[5];
  console.log(item);

  const handleOffer = () => {
    const randomNumber = Math.floor((Math.random() * products.length));
    const item = products[randomNumber]
    console.log(item);
  }
  return (
    <div className='cart'>
      <div className='cart-header'>
        <h1>Order Summery</h1>
        <button
          onClick={handleClearCart}
          className='remove-button'
          title='Clear Cart'
        >
          <IoTrashBin color='white' size={20} />
        </button>
      </div>
      {cart.map((product, index) => (
        <div key={index} className='cart-item'>
          <img src={product.pairImage} alt='' />
          <div>
            <p>
              {product.name} {product.color}
            </p>
            <p>$ {product.price}</p>
          </div>
        </div>
      ))}
      <p><marquee behavior="" direction="">Buy one get one free</marquee></p>
      <button className="offer-button" onClick={handleOffer}>Get one for me</button>
      {/* ekhane kno pm pass kora lgbe na  */}
    </div>
  );
};

export default Cart;
