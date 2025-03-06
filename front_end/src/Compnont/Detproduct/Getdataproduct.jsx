import React, { useState } from "react";
import "./Getproduct.css";

function Getdataproduct() {
  const [formData, setFormData] = useState({
    name: "",
    pattern: "",
    country: "",
    style: "",
    size: "",
    material: "",
    minOrderQty: "",
    color: "",
    brand: "",
    category: "", // Store selected category
    file: null, // Store file as an object
  });

  const handleChange = (e) => {
    if (e.target.name === "file") {
      setFormData({ ...formData, file: e.target.files[0] }); // Store file object
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    fetch("http://localhost:5003/api/productdata", {
      method: "POST",
      body: formDataToSend, // Sending as multipart/form-data
    })
      .then((response) => response.json())
      .then((data) => console.log("Response:", data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="input_container">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="pattern"
          placeholder="Pattern"
          onChange={handleChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country of origin"
          onChange={handleChange}
        />
        <input
          type="text"
          name="style"
          placeholder="Style"
          onChange={handleChange}
        />
        <input
          type="text"
          name="size"
          placeholder="Size"
          onChange={handleChange}
        />
        <input
          type="text"
          name="material"
          placeholder="Material"
          onChange={handleChange}
        />
        <input
          type="text"
          name="minOrderQty"
          placeholder="Minimum Order Quantity"
          onChange={handleChange}
        />
        <input
          type="text"
          name="color"
          placeholder="Color"
          onChange={handleChange}
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          onChange={handleChange}
        />

        {/* Select dropdown for category */}
        <select
          name="category"
          onChange={handleChange}
          value={formData.category}
        >
          <option value="">Please select</option>
          <option value="Canvas Tote Bags">Canvas Tote Bags</option>
          <option value="Cotton Tote Bags">Cotton Tote Bags</option>
          <option value="Denim Collection">Denim Collection</option>
          <option value="Drawstring Bag">Drawstring Bag</option>
          <option value="GROCERY BAG">GROCERY BAG</option>
          <option value="Laundry Bag">Laundry Bag</option>
          <option value="Organic Canvas Bags">Organic Canvas Bags</option>
          <option value="Pouches Collection">Pouches Collection</option>
        </select>

        <input type="file" name="file" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Getdataproduct;
