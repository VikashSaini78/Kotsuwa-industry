import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ByProduct = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { product } = state || {}; 

  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const totalValue = product ? (product.price * quantity).toFixed(2) : "0.00";

  const handleOrderNow = () => {
    if (!product) return;
    console.log("Sending Product Data:", product);
    navigate("/address", { state: { product, quantity } });
  };

  if (!product) {
    return <h3>Loading product details...</h3>;
  }

  return (
    <div className="bycard_container">
      <div className="bycard_imgcolom">
        <img src={product.image || product.file} alt={product.title} />
      </div>

      <div className="byproduct_alltextes">
        <h3>{product.title}</h3>
        <p className="instock_product">In Stock</p>

        <div className="byproduct-price_offer">
          <h6>-24%</h6>
          <h5>₹ {product.price}</h5>
        </div>
        <p className="offerprice">M.R.P : ₹17,000</p>

        <div className="counter_container">
          <p>Add Quantity:</p>
          <div className="byproduct_counter">
            <button onClick={decrement} className="quantity_button">-</button>
            <p>{quantity}</p>
            <button onClick={increment} className="quantity_button">+</button>
          </div>
        </div>

        <div className="total_value">
          <h6>Total Price:</h6>
          <h5>₹ {totalValue}</h5>
        </div>

        <div className="ordernow_button">
          <button onClick={handleOrderNow}>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default ByProduct;
