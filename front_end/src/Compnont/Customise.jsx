// import React, { useState } from 'react';
// import { toast } from "react-toastify";
// import "./Customise.css";

// function Customise() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     productType: "Canvas Tote Bags",
//     dimension: "",
//     color: "",
//     artwork: "",
//     organisation: "",
//     minOrderQty: "",
//     deliveryDate: "",
//     requirement: "",
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5003/sendemail", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("✅ Email Sent Successfully:", data);
//       toast.success("Email sent successfully!");

//       // Reset form after successful submission
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         productType: "Canvas Tote Bags",
//         dimension: "",
//         color: "",
//         artwork: "",
//         organisation: "",
//         minOrderQty: "",
//         deliveryDate: "",
//         requirement: "",
//       });
//     } catch (error) {
//       console.error("❌ Error sending email:", error);
//       toast.error("Failed to send email. Please try again!");
//     }
//   };

//   return (
//     <>
//       <div className='cost_header-img'>
//         <img src='./media/header.jpg' alt='' />
//       </div>

//       <div className='cost_contant'>
//         <h5>Not sure what you need? Enquire here and we can help you</h5>
//       </div>

//       <form onSubmit={handleSubmit} className='customise_container'>
//         <div className='customise_container-sm'>
//           <label className="form-label">Tell us your name *</label>
//           <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />

//           <label className="form-label">Enter your email *</label>
//           <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />

//           <label className="form-label">Enter phone number *</label>
//           <input type="number" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />

//           <label className="form-label">Product Type *</label>
//           <select name="productType" className="form-select" value={formData.productType} onChange={handleChange} required>
//             <option>Canvas Tote Bags</option>
//             <option>Cotton Tote Bags</option>
//             <option>Denim Collection</option>
//             <option>Pouches Collection</option>
//             <option>Printed Collection</option>
//           </select>

//           <label className="form-label">Dimension *</label>
//           <input type="text" className="form-control" name="dimension" value={formData.dimension} onChange={handleChange} required />

//           <label className="form-label">Color *</label>
//           <input type="text" className="form-control" name="color" value={formData.color} onChange={handleChange} required />

//           <label className="form-label">Artwork *</label>
//           <input type="text" className="form-control" name="artwork" value={formData.artwork} onChange={handleChange} required />

//           <label className="form-label">Organisation *</label>
//           <input type="text" className="form-control" name="organisation" value={formData.organisation} onChange={handleChange} required />

//           <label className="form-label">Minimum Order Quantity *</label>
//           <input type="number" className="form-control" name="minOrderQty" value={formData.minOrderQty} onChange={handleChange} required />

//           <label className="form-label">Ideal Delivery Date *</label>
//           <input type="date" className="form-control" name="deliveryDate" value={formData.deliveryDate} onChange={handleChange} required />

//           <label className="form-label">Describe Your Requirement *</label>
//           <textarea className="form-control" name="requirement" value={formData.requirement} onChange={handleChange} required></textarea>

//           <div className='contant-buton'>
//             <button type="submit" className="btn btn">SUBMIT</button>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// }

// export default Customise;


import React, { useState } from 'react';
import { toast } from "react-toastify";
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
  
      const data = await response.json();
      console.log("✅ Email Sent:", data);
      toast.success("Email sent successfully!");
    } catch (error) {
      console.error("❌ Error sending email:", error);
      toast.error("Failed to send email. Please try again!");
    }
  };
  

  return (
    <>
      <div className='cost_header-img'>
        <img src='./media/header.jpg' alt='' />
      </div>

      <div className='cost_contant'>
        <h5>Not sure what you need? Enquire here and we can help you</h5>
      </div>

      <form onSubmit={handleSubmit} className='customise_container'>
        <div className='customise_container-sm'>
          <label className="form-label">Tell us your name *</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />

          <label className="form-label">Enter your email *</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />

          <label className="form-label">Enter phone number *</label>
          <input type="number" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />

          <label className="form-label">Product Type *</label>
          <select name="productType" className="form-select" value={formData.productType} onChange={handleChange} required>
            <option>Canvas Tote Bags</option>
            <option>Cotton Tote Bags</option>
            <option>Denim Collection</option>
            <option>Pouches Collection</option>
            <option>Printed Collection</option>
          </select>

          <label className="form-label">Dimension *</label>
          <input type="text" className="form-control" name="dimension" value={formData.dimension} onChange={handleChange} required />

          <label className="form-label">Color *</label>
          <input type="text" className="form-control" name="color" value={formData.color} onChange={handleChange} required />

          <label className="form-label">Artwork *</label>
          <input type="text" className="form-control" name="artwork" value={formData.artwork} onChange={handleChange} required />

          <label className="form-label">Organisation *</label>
          <input type="text" className="form-control" name="organisation" value={formData.organisation} onChange={handleChange} required />

          <label className="form-label">Minimum Order Quantity *</label>
          <input type="number" className="form-control" name="minOrderQty" value={formData.minOrderQty} onChange={handleChange} required />

          <label className="form-label">Ideal Delivery Date *</label>
          <input type="date" className="form-control" name="deliveryDate" value={formData.deliveryDate} onChange={handleChange} required />

          <label className="form-label">Describe Your Requirement *</label>
          <textarea className="form-control" name="requirement" value={formData.requirement} onChange={handleChange} required></textarea>

          <div className='contant-buton'>
            <button type="submit" className="btn btn">SUBMIT</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Customise;
