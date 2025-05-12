import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSadTear } from "react-icons/fa";


function ShopCart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartData);
  }, []);

  // Remove a single item from the cart
  const removeItem = (removeId) => {
    const updatedCart = cart.filter((item, index) => item.id !== removeId || index !== cart.findIndex((i) => i.id === removeId));
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Navigate to the purchase page
  const handleBuyNow = (item) => {
    navigate("/address", { state: { product: item } });
  };

  return (
    <div className="card_container-shop">
      <div className="shopping_container-box">
        <div className="shopping_container">
          <h4>Shopping Cart</h4>
        </div>
        <hr />
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index} className="card_box">
              <img src={item.file || item.image} alt={item.title} className="cart-image" />
              <div className="text_box">
                <div className="title_price">
                  <h6>{item.title}</h6>
                </div>
                <p>In Stock</p>
                <h6>Category: {item.category || "N/A"}</h6>
                <h6>Pattern Name: {item.pattern || "Default Pattern"}</h6>
                <h6>Price: ₹{item.newprice || "N/A"}</h6>
                <div className="cart_buttons">
                 <a href="#"> <button className="remove_button" onClick={() => removeItem(item.id)}>
                    Remove
                  </button></a>
                  <button className="by_now-button" onClick={() => handleBuyNow(item)}>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="empty_cart">
         <div className="empty-card_sm"> <div className="empty_cart-emoji">
          <img src="./media/global-wor.png"/>
         </div>
            <p>Your cart is currently empty!</p>
            <h6>Browse store</h6>
            <h2>...</h2>
            <h5 className="text-center">Go to store</h5></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShopCart;
