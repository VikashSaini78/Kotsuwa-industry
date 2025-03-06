import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ShopCart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartData);
  }, []);

  // Remove item from cart
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  


  // Navigate to purchase page
  const handleBuyNow = (item) => {
    navigate("/address", { state: { product: item } });
  };

  return (
    <>
      <div className="card_container-shop">
        <div className="shopping_container-box">
          <div className="shopping_container">
            <h4>Shopping Cart</h4>
            {/* <p>Price</p> */}
          </div>

          <hr />

          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="card_box">
                <img src={item.file || item.image} alt={item.title} className="cart-image" />

                <div className="text_box">
                  <div className="title_price">
                    <h6>{item.title}</h6>
                  </div>
                  <p>In Stock</p>
                  <h6>Category: {item.category || "N/A"}</h6>
                  <h6>Pattern Name: {item.pattern || "Default Pattern"}</h6>


                  <div className="cart_buttons">
                    <button className="remove_button" onClick={() => removeItem(item.id)}>
                      Remove
                    </button>
                    <button className="by_now-button" onClick={() => handleBuyNow(item)}>
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="empty_cart">
              <h4>Your cart is empty!</h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ShopCart;
