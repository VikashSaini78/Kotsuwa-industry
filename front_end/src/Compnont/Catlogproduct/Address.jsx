import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Address() {
  const location = useLocation();
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

    if (
      !name ||
      !contact ||
      !address ||
      !roadName ||
      !pincode ||
      !email ||
      !city ||
      !state ||
      !nearby ||
      !product?.file
    ) {
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
      if (!response.ok) throw new Error("Failed to fetch product image.");

      const blob = await response.blob();
      const file = new File([blob], "product-image.jpg", { type: blob.type });
      formData.append("image", file);

      console.log("Sending Data:", Object.fromEntries(formData));

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

      // Show success message
      toast.success("Order placed successfully! Email sent!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Clear all fields after successful submission
      removeData();
    } catch (error) {
      console.error("Fetch Error:", error);
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
      {/* Toast container for displaying messages */}
      <ToastContainer />

      <div className="row">
        <div className="col-md-6">
          <form className="add_address-box" onSubmit={submitValue}>
            <h5 className="text-center fw-bold text-red mb-4">
              ADD NEW ADDRESS
            </h5>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Enter your Name"
              required
            />
            <input
              type="number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="form-control"
              placeholder="Contact Number"
              required
            />
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              placeholder="Address"
              required
            ></textarea>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Email id"
              required
            />
            <input
              type="text"
              value={roadName}
              onChange={(e) => setRoadName(e.target.value)}
              className="form-control"
              placeholder="Road Name / Area / Colony"
              required
            />
            <input
              type="number"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="form-control"
              placeholder="Pincode"
              required
            />
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="form-control"
              placeholder="City"
              required
            />
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="form-control"
              placeholder="State"
              required
            />
            <input
              type="text"
              value={nearby}
              onChange={(e) => setNearby(e.target.value)}
              className="form-control"
              placeholder="Nearby Famous Place / Shop / School, etc. (optional)"
              required
            />
            <button type="submit" className="address_orderbtn">
              Order Now
            </button>
          </form>
        </div>

        <div className="col-md-6">
          <div className="address_idproduct-box">
            {product ? (
              <img src={product.file} alt="Product" className="img-fluid" />
            ) : (
              <p>No Product Selected</p>
            )}
          </div>
          <div className="Remove_data-button text-center mt-3">
           <Link to={"/catlog"}>
           <button className="btn btn-danger" onClick={removeData}>
              Remove Data
            </button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
