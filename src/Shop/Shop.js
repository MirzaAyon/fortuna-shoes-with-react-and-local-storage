import React, { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { addToLocalStorage } from "./Utilities/Utilities";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart)
  console.log(products);

  useEffect(() => {
    //data.json er bodole direct github er boots data theke data niye ta raw hishebe ekhane show kora jabe ekhetre datae giye raw te click korlei hbe link diye dbe 
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (selectedProduct) => {
    console.log("Add to cart");
    // const newCart = [selectedProduct]; //ekhan emutation problem hbe 
    let newCart = [];
    const exist = cart.find((product) => product.id == selectedProduct.id);
    if (!exist) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(product => product.id != selectedProduct.id)
      selectedProduct.quantity = selectedProduct.quantity + 1;
      // newCart = [...cart, selectedProduct]
      newCart = [...rest, selectedProduct]
    }
    console.log(exist);
    addToLocalStorage(selectedProduct.id);
    setCart(newCart)
    //obj er upr map possible na tai array banalam
    //kintu ekhn new ta click korle old ta change hye jachee
  };

  const handleClearCart = () => {
    const newCart = [];
    setCart(newCart)
  };



  //local sto er concept gula js folder e ache 



  return (
    <>
      <div className='shop'>
        <div className='products-container'>
          {products.map((product, index) => {
            return (
              <Product
                key={index}
                product={product}
                handleAddToCart={handleAddToCart}
              />
            );
          })}
        </div>
        <div className='cart-container'>
          <Cart
            cart={cart}
            products={products}
            handleClearCart={handleClearCart}
          />
        </div>




        {/* ekhn local sto er koekta jinish dekhbo */}


      </div>

    </>
  );
};

export default Shop;
