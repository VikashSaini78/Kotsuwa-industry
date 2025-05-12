import React, { useState } from "react";
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
    oldprice: "",
    newprice: "",
    category: "",
    file: null,
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
    console.log("📤 Sending Form Data:", formData); // Debugging Step

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
        <div className="input_lable-getproduct">
          <label htmlFor="name"> Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
        </div>
        {/*  */}
        <div className="input_lable-getproduct">
          <label htmlFor="name">pattern</label>
          <input
            type="text"
            name="pattern"
            placeholder="Pattern"
            onChange={handleChange}
          />
        </div>
        <div className="input_lable-getproduct">
          <label htmlFor="name">country</label>

          <input
            type="text"
            name="country"
            placeholder="Country of origin"
            onChange={handleChange}
          />
        </div>
        <div className="input_lable-getproduct">
          <label htmlFor="name">Style</label>

          <input
            type="text"
            name="style"
            placeholder="Style"
            onChange={handleChange}
          />
        </div>
        <div className="input_lable-getproduct">
          <label htmlFor="name">Size</label>
          <input
            type="text"
            name="size"
            placeholder="Size"
            onChange={handleChange}
          />
        </div>
        <div className="input_lable-getproduct">
          <label htmlFor="name">Material</label>

          <input
            type="text"
            name="material"
            placeholder="Material"
            onChange={handleChange}
          />
        </div>
        <div className="input_lable-getproduct">
          <label htmlFor="name">minOrderQty</label>
          <input
            type="text"
            name="minOrderQty"
            placeholder="Minimum Order Quantity"
            onChange={handleChange}
          />
        </div>
        <div className="input_lable-getproduct">
          <label htmlFor="name">Color</label>

          <input
            type="text"
            name="color"
            placeholder="Color"
            onChange={handleChange}
          />
        </div>
        <div className="input_lable-getproduct">
          <label htmlFor="name">Brand</label>
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            onChange={handleChange}
          />
        </div>
        <div className="input_lable-getproduct">
          <label htmlFor="name">Old Price</label>
          <input
            type="number"
            name="oldprice"
            placeholder="old price"
            onChange={handleChange}
          />
        </div>
        <div className="input_lable-getproduct">
          <label htmlFor="name">New Price</label>
          <input
            type="number"
            name="newprice"
            placeholder="new price"
            onChange={handleChange}
          />
        </div>
        <div className="input_lable-getproduct">
          <label htmlFor="name">Category</label>
          <select
            name="category"
            onChange={handleChange}
            value={formData.category}
          >
            <option value="">Please select</option>
            <option value="Canvas Tote bags">Canvas Tote bags</option>
            <option value="Cotton Tote Bags">Cotton Tote Bags</option>
            <option value="Denim Collection">Denim Collection</option>
            <option value="Drawstring Bag">Drawstring Bag</option>
            <option value="GROCERY BAG">GROCERY BAG</option>
            <option value="Laundry Bag">Laundry Bag</option>
            <option value="Organic Canvas Bags">Organic Canvas Bags</option>
            <option value="Pouches Collection">Pouches Collection</option>
          </select>
        </div>
        <div className="input_lable-getproduct">
          <label htmlFor="name">File</label>
          <input type="file" name="file" onChange={handleChange} />
        </div>

        {/* Select dropdown for category */}

        <div className="getdata-submit_btn"> <button type="submit">Submit</button></div>
      </form>
    </div>
  );
}

export default Getdataproduct;
