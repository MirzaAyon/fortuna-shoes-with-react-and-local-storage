import React, { useEffect, useState } from "react";
import "./Cart.css";
import { IoTrashBin } from "react-icons/io5";

const Cart = ({ cart, products, handleClearCart }) => {
  const [offer, setOffer] = useState(false);
  console.log(products) //inspact e ekta array showing
  const [freeProduct, setFreeProduct] = useState({})
  //single product obj er modhe pabo tai empty obj dilam 
  console.log(offer);
  const item = products[5];
  console.log(item);

  const handleOffer = () => {
    const randomNumber = Math.floor((Math.random() * products.length));
    const item = products[randomNumber]
    console.log(item); //inspact e random item showing
    setFreeProduct(item);
  }

  useEffect(() => {
    if (cart.length > 0) {
      setOffer(true)
    } else {
      setOffer(false);
    }
  }, [cart])

  // const obj = { abc: 1, det: 2 };
  // console.log(Object.keys(obj)) //array pabo
  // console.log(Object.keys(obj.length)) 
  //array er length pabo
  // const obj = {};
  // console.log(Object.keys(obj)) //array pabo
  // console.log(Object.keys(obj.length))
  //array er length pabo

  //line 19 theke 26 holo conceptss


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
      <button className={offer ? 'offer-button' : "offer-button-disabled"} onClick={handleOffer} disabled={!offer}>Get one for me</button>
      {/* disabled false kore dile kaj korbe true korle kaj krbe na */}
      {/* ekhane kno pm pass kora lgbe na  */}

      {Object.keys(freeProduct).length > 0 && (
        <div className='cart-item'>
          <img src={freeProduct.pairImage} alt='' />
          <div>
            <p>
              {freeProduct.name} {freeProduct.color}
            </p>
            <p>$ {freeProduct.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
