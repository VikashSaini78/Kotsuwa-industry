import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Address() {
  const location = useLocation();
  // const navigate = useNavigate();
  const [product, setProduct] = useState(location.state?.product || null);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [roadName, setRoadName] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [nearby, setNearby] = useState("");

  useEffect(() => {
    console.log("📦 Received Product:", product);
  }, [product]);

  const submitValue = async (e) => {
    e.preventDefault();

    if (!name || !contact || !address || !roadName || !pincode || !email || !city || !state || !nearby || !product?.file) {
      toast.error("Please fill in all fields and select an image!");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("contact", contact);
    formData.append("address", address);
    formData.append("email", email);
    formData.append("roadName", roadName);
    formData.append("pincode", pincode);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("nearby", nearby);

    try {
      const response = await fetch(product.file);
      const blob = await response.blob();
      const file = new File([blob], "product-image.jpg", { type: blob.type });
      formData.append("image", file);

      console.log("📤 Sending Data:", Object.fromEntries(formData));

      const res = await fetch("http://localhost:5003/api/EmailformData", {
        method: "POST",
        body: formData,
      });
 
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || `HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      console.log("✅ Success Response:", data);
      toast.success("Order placed successfully! Email sent!");
      
      // Clear all fields after successful submission
      removeData();
    } catch (error) {
      console.error("❌ Fetch Error:", error);
      toast.error("Failed to send email. Please try again!");
    }
  };

  const removeData = () => {
    setName("");
    setContact("");
    setAddress("");
    setEmail("");
    setRoadName("");
    setPincode("");
    setCity("");
    setState("");
    setNearby("");
    setProduct(null);
  };

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-6">
          <form className="add_address-box" onSubmit={submitValue}>
            <h5 className="text-center fw-bold text-red mb-4">ADD NEW ADDRESS</h5>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter your Name" />
            <input type="number" value={contact} onChange={(e) => setContact(e.target.value)} className="form-control" placeholder="Contact Number" />
            <textarea value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" placeholder="Address"></textarea>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email id" />
            <input type="text" value={roadName} onChange={(e) => setRoadName(e.target.value)} className="form-control" placeholder="Road Name / Area / Colony" />
            <input type="number" value={pincode} onChange={(e) => setPincode(e.target.value)} className="form-control" placeholder="Pincode" />
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="form-control" placeholder="City" />
            <input type="text" value={state} onChange={(e) => setState(e.target.value)} className="form-control" placeholder="State" />
            <input type="text" value={nearby} onChange={(e) => setNearby(e.target.value)} className="form-control" placeholder="Nearby Famous Place / Shop / School, etc. (optional)" />
            <button type="submit">Order Now</button>
          </form>
        </div>
        <div className="col-md-6">
          <div className="address_idproduct-box">
            {product ? <img src={product.file} alt="Product" /> : <p>No Product Selected</p>}
          </div>
          <div className="Remove_data-button">
            <button onClick={removeData}>Remove Data</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;





// import { useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import "../Customise.css";
// import "react-toastify/dist/ReactToastify.css";

// function Address() {
//   const location = useLocation();
//   const [product, setProduct] = useState(location.state?.product || null);

//   // Form State
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     productType: "Canvas Tote Bags",
//     dimension: "",
//     color: "",
//     artwork: "",
//     organisation: "",
//     minOrderQuantity: "",
//     deliveryDate: "",
//     description: "",
//   });

//   useEffect(() => {
//     console.log("📦 Received Product:", product);
//   }, [product]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const submitValue = async (e) => {
//     e.preventDefault();

//     const requiredFields = [
//       "name",
//       "email",
//       "phone",
//       "dimension",
//       "color",
//       "artwork",
//       "organisation",
//       "minOrderQuantity",
//       "deliveryDate",
//       "description",
//     ];

//     for (let field of requiredFields) {
//       if (!formData[field]) {
//         toast.error(`⚠️ ${field} is required!`);
//         return;
//       }
//     }

//     if (!product?.file) {
//       toast.error("⚠️ Please select an image!");
//       return;
//     }

//     const formDataObj = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       formDataObj.append(key, value);
//     });

//     try {
//       if (product.file) {
//         const response = await fetch(product.file);
//         if (!response.ok) throw new Error("Failed to fetch image");

//         const blob = await response.blob();
//         const file = new File([blob], "product-image.jpg", { type: blob.type });
//         formDataObj.append("image", file);
//       }

//       console.log("📤 Sending Data:", Object.fromEntries(formDataObj));

//       const res = await fetch("http://localhost:5008/api/EmailformData", {
//         method: "POST",
//         body: formDataObj,
//       });

//       if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.error || `HTTP error! Status: ${res.status}`);
//       }

//       const data = await res.json();
//       console.log("✅ Success Response:", data);
//       toast.success("Order placed successfully! Email sent! 🚀");

//       removeData();
//     } catch (error) {
//       console.error("❌ Fetch Error:", error);
//       toast.error("Failed to send email. Please try again!");
//     }
//   };

//   const removeData = () => {
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       productType: "Canvas Tote Bags",
//       dimension: "",
//       color: "",
//       artwork: "",
//       organisation: "",
//       minOrderQuantity: "",
//       deliveryDate: "",
//       description: "",
//     });

//     if (product) {
//       setProduct(null);
//     }
//   };

//   return (
//     <div className="container mt-2">
//       <div className="row">
//         <div className="col-md-6">
//           <form className="customise_container" onSubmit={submitValue}>
//             <div className="customise_container-sm">
//               <h5 className="text-center fw-bold text-red mb-4">ADD NEW ADDRESS</h5>

//               {[
//                 { label: "Tell us your name *", name: "name", type: "text", placeholder: "Enter Full Name" },
//                 { label: "Enter your email *", name: "email", type: "email", placeholder: "Eng.Example@gmail.com" },
//                 { label: "Enter phone number *", name: "phone", type: "text", placeholder: "Eg. 8000000000" },
//                 { label: "Dimension *", name: "dimension", type: "text", placeholder: "Dimension" },
//                 { label: "Color *", name: "color", type: "text", placeholder: "Color" },
//                 { label: "Artwork *", name: "artwork", type: "text", placeholder: "Artwork" },
//                 { label: "Organisation *", name: "organisation", type: "text", placeholder: "Organisation Name" },
//                 { label: "Minimum Order Quantity *", name: "minOrderQuantity", type: "text", placeholder: "Quantity" },
//                 { label: "Ideal Delivery Date *", name: "deliveryDate", type: "text", placeholder: "Delivery Date" },
//               ].map(({ label, name, type, placeholder }) => (
//                 <div key={name}>
//                   <label htmlFor={name} className="form-label">
//                     {label}
//                   </label>
//                   <input type={type} name={name} className="form-control" placeholder={placeholder} value={formData[name]} onChange={handleChange} />
//                 </div>
//               ))}

//               <label htmlFor="productType" className="form-label">Product Type *</label>
//               <select name="productType" className="form-select" value={formData.productType} onChange={handleChange}>
//                 {["Canvas Tote Bags", "Cotton Tote Bags", "Denim Collection", "Pouches Collection", "Printed Collection"].map((option) => (
//                   <option key={option}>{option}</option>
//                 ))}
//               </select>

//               <label htmlFor="description" className="form-label">Describe Your Requirement *</label>
//               <textarea name="description" className="form-control" placeholder="Leave a comment here" value={formData.description} onChange={handleChange}></textarea>

//               <div className="contant-buton">
//                 <button type="submit" className="btn btn-primary">SUBMIT</button>
//               </div>
//             </div>
//           </form>
//         </div>

//         <div className="col-md-6">
//           <div className="address_idproduct-box">
//             {product ? <img src={product.file} alt="Product" /> : <p>No Product Selected</p>}
//           </div>
//           <div className="Remove_data-button">
//             <button onClick={removeData} className="btn btn-danger">Remove Data</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Address;
