import React, { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Catlog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/products") 
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredData(data);
        console.log("Fetched products:", data); // Debugging Step
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredData(products);
    } else {
      const filtered = products.filter((item) => item.category === category);
      setFilteredData(filtered);
    }
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <>
      <div className="header_catlog-container">
        <img src="./media/des4.webp" alt="Header" />
      </div>

      <div className="OurProducts_continer">
        <h2>Our Products</h2>
        <p>
          Kotsuwa Bags and Aprons, a highly acclaimed name - Kotsuwa,
          specializes in the manufacturing and export of a wide variety of
          Canvas Bags, Cotton Canvas Bags, and aprons for various domestic and
          business requirements.
        </p>
      </div>

      <div className="colom-m">
        <div className="catlog_buttons">
          <button
            className={selectedCategory === "all" ? "active" : ""}
            onClick={() => handleFilter("all")}
          >
            All Products
          </button>
          <button
            className={selectedCategory === "Canvas Tote bags" ? "active" : ""}
            onClick={() => handleFilter("Canvas Tote bags")}
          >
            Canvas Tote bags
          </button>
          <button
            className={selectedCategory === "Cotton Tote Bags" ? "active" : ""}
            onClick={() => handleFilter("Cotton Tote Bags")}
          >
            Cotton Tote Bags
          </button>
          <button
            className={selectedCategory === "Denim Collection" ? "active" : ""}
            onClick={() => handleFilter("Denim Collection")}
          >
            Denim Collection
          </button>
          <button
            className={selectedCategory === "Drawstring Bag" ? "active" : ""}
            onClick={() => handleFilter("Drawstring Bag")}
          >
            Drawstring Bag
          </button>
          <button
            className={selectedCategory === "GROCERY BAG" ? "active" : ""}
            onClick={() => handleFilter("GROCERY BAG")}
          >
            GROCERY BAG
          </button>
          <button
            className={selectedCategory === "Laundry Bag" ? "active" : ""}
            onClick={() => handleFilter("Laundry Bag")}
          >
            Laundry Bag
          </button>
          <button
            className={
              selectedCategory === "Organic Canvas Bags" ? "active" : ""
            }
            onClick={() => handleFilter("Organic Canvas Bags")}
          >
            Organic Canvas Bags
          </button>
          <button
            className={
              selectedCategory === "Pouches Collection" ? "active" : ""
            }
            onClick={() => handleFilter("Pouches Collection")}
          >
            Pouches Collection
          </button>
        </div>
      </div>

      <div className="products_container">
        {filteredData.length > 0 ? (
          filteredData.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product)}
            >
              <img
                src={product.file}
                alt={product.name}
                className="product-image"
              />
              <div className="product-name">{product.name}
              <div className="catlog_price-box"> <h5>₹{product.newprice
              }</h5> <h6>₹{product.oldprice
              }</h6> <span>Inclusive of GST</span></div>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </>
  );
}

export default Catlog;
