import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <div className="home_abut-page">
        <p>
          <Link to={"/"}>Home</Link> /{" "}
        </p>
        <p>About Us</p>
      </div>
      <div className="about_container">
        <div className="about_contant">

          <h6>Leading the Way in Cotton Bag Manufacturing</h6>
          <p>Kotsuwa Industry is a leading manufacturer of high-quality cotton bags. We specialize in creating sustainable and eco-friendly alternatives to plastic, offering a wide range of stylish and durable bags for various purposes. Our commitment to exceptional quality and customer service sets us apart in the industry.</p>

          <h6>Quality & Sustainability at the Core</h6>
          <p>At Kotsuwa Industry, we believe in the power of sustainable choices. We are dedicated to manufacturing eco-friendly cotton bags that are not only stylish but also built to last. Our focus on quality craftsmanship and ethical production ensures you receive products that are kind to the environment and designed to stand the test of time.</p>

          <h6>Customer-Centric Approach for Your Needs</h6>
          <p>Kotsuwa Industry is your trusted partner for high-quality cotton bags. We understand the importance of customer satisfaction and strive to provide exceptional service at every step. Whether you need custom-designed bags or ready-made solutions, we work closely with you to meet your specific needs and exceed your expectations.</p>

      
        </div>
      </div>
    </>
  );
}

export default About;
