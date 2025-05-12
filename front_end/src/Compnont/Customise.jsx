import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Customise.css";

function Customise() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    productType: "Canvas Tote Bags",
    dimension: "",
    color: "",
    artwork: "",
    organisation: "",
    minOrderQty: "",
    deliveryDate: "",
    requirement: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("📤 Sending Form Data:", formData); // Debugging Step

    try {
      const response = await fetch("http://localhost:5003/api/sendemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email.");
      }

      const data = await response.json();
      console.log("✅ Email Sent:", data);

      // Show success message
      toast.success("Email sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        productType: "Canvas Tote Bags",
        dimension: "",
        color: "",
        artwork: "",
        organisation: "",
        minOrderQty: "",
        deliveryDate: "",
        requirement: "",
      });
    } catch (error) {
      console.error("❌ Error sending email:", error);

      // Show error message
      toast.error("Failed to send email. Please try again!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        productType: "Canvas Tote Bags",
        dimension: "",
        color: "",
        artwork: "",
        organisation: "",
        minOrderQty: "",
        deliveryDate: "",
        requirement: "",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="cost_header-img">
        <img src="./media/header.jpg" alt="" />
      </div>

      <div className="cost_contant">
        <h5>Not sure what you need? Enquire here and we can help you</h5>
      </div>

      <form onSubmit={handleSubmit} className="customise_container">
        <div className="customise_container-sm">
          <label className="form-label">Tell us your name *</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />

          <label className="form-label">Enter your email *</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Eg.example@gmail.com"
            required
          />

          <label className="form-label">Enter phone number *</label>
          <input
            type="number"
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="En.1000000000"
            required
          />

          <label className="form-label">Product Type *</label>
          <select
            name="productType"
            className="form-select"
            value={formData.productType}
            onChange={handleChange}
             placeholder="Product Type"
            required
            
          >
            <option>Canvas Tote Bags</option>
            <option>Cotton Tote Bags</option>
            <option>Denim Collection</option>
            <option>Pouches Collection</option>
            <option>Printed Collection</option>
          </select>

          <label className="form-label">Dimension *</label>
          <input
            type="text"
            className="form-control"
            name="dimension"
            value={formData.dimension}
            onChange={handleChange}
            placeholder="Dimension"
            required
          />

          <label className="form-label">Color *</label>
          <input
            type="text"
            className="form-control"
            name="color"
            value={formData.color}
            onChange={handleChange}
            placeholder="Color"
            required
          />

          <label className="form-label">Artwork *</label>
          <input
            type="text"
            className="form-control"
            name="artwork"
            value={formData.artwork}
            onChange={handleChange}
            placeholder="Artwork"
            required
          />

          <label className="form-label">Organisation *</label>
          <input
            type="text"
            className="form-control"
            name="organisation"
            value={formData.organisation}
            onChange={handleChange}
            placeholder="Organisation name"
            required
          />

          <label className="form-label">Minimum Order Quantity *</label>
          <input
            type="number"
            className="form-control"
            name="minOrderQty"
            value={formData.minOrderQty}
            onChange={handleChange}
            placeholder="Minimum Order Quantity"
            required
          />

          <label className="form-label">Ideal Delivery Date *</label>
          <input
            type="date"
            className="form-control"
            name="deliveryDate"
            value={formData.deliveryDate}
            onChange={handleChange}
            placeholder="Ideal Delivery Date "
            required
          />

          <label className="form-label">Describe Your Requirement *</label>
          <textarea
            className="form-control"
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            placeholder="Write us Describe Your Requirement"
            required
          ></textarea>

          <div className="contant-buton">
            <button type="submit" className="btn btn">
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Customise;
