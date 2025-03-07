import React, { useEffect, useState } from "react";
import { data, Link, useLocation, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slider from "react-slick";

function Quaryproduct() {
  const { id } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState(location.state?.product || null);
  const [count, setCount] = useState(0);
  const [visibleContent, setVisibleContent] = useState("description");

  useEffect(() => {
    if (!product) {
      fetch(`http://localhost:3003/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched Product Data:", data);
          setProduct(data);
        })
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [id, product]);


  const handleAddToCart = () => {
    if (!product) return;
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productExists = cart.some((item) => item.id === product.id);

    if (productExists) {
      toast.info("Product is already in the cart!");
    } else {
      const updatedCart = [...cart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCount(updatedCart.length);
      toast.success("Product added to the cart!");
    }
  };

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCount(cart.length);
  }, []);

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    swipeToSlide: true,
    slidesToShow: 4, // Default for desktop
    responsive: [
      {
        breakpoint: 1024, // Tablet and below
        settings: {
          slidesToShow: 3, // Show 3 cards on tablets
        },
      },
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 2, // Show 3 cards on mobiles
        },
      },
    ],
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  return (
    <>
      <ToastContainer />

           <div className="Quaryproduct_container-fll">

                  
      <div className="add-cart_button">
        <Link to={"/"} className="link_home-btn">
          Home
        </Link>
        <Link to={"/shopcard"}>
          <button className="position_button">
            Add to Cart <span>{count}</span>
          </button>
        </Link>
      </div>

      {product ? (
        <>
          <div className="quary_text-top">
            <h6>{product.title}</h6>
          </div>
          <div className="quary_container">
            <div className="quary_image-box">
              <img src={product.file} alt={product.title} />
            </div>

            <div className="quary_text-colom">
              <h4>{product.name}</h4>
              <div className="colom_h6-text">
                <h6>Pattern :</h6>
                <p>Plain</p>
              </div>
              <div className="colom_h6-text">
                <h6>Country of Origin :</h6>
                <p>India</p>
              </div>
              <div className="colom_h6-text">
                <h6>Style :</h6>
                <p>{product.style || "N/A"}</p>
              </div>
              <div className="colom_h6-text">
                <h6>Size :</h6>
                <p>{product.size || "N/A"}</p>
              </div>
              <div className="colom_h6-text">
                <h6>Material :</h6>
                <p>{product.material || "N/A"}</p>
              </div>

              <div className="contactme_buttons">
                <button onClick={handleAddToCart}>Add To Enquiry</button>
                <button>WhatsApp Enquiry</button>
                <button>Customise</button>
              </div>

              <div className="Additional_Information">
                <h5>Additional Information:</h5>
              </div>
              <div className="Delivery_Timet-ext">
                <h6>Delivery Time :</h6>
                <p>Depends on the quantity</p>
              </div>
            </div>

            {/* Description Product Details  */}

            <div className="button_container-full">
              <div className="toggle-buttons">
                <table className="table table-striped">
                  <tbody>
                    <tr className="td_container">
                      <td>
                        <button
                          onClick={() => setVisibleContent("description")}
                          className={`px-4 py-2 ${
                            visibleContent === "description"
                              ? "description_active-btn"
                              : ""
                          }`}
                        >
                          Description
                        </button>
                        <button
                          onClick={() => setVisibleContent("details")}
                          className={`px-4 py-2  ${
                            visibleContent === "details"
                              ? "description_active-btn"
                              : ""
                          }`}
                        >
                          Product Details
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Toggle Content */}
              <table className="table table-bordered">
                <tbody>
                  {visibleContent === "description" && (
                    <div className="description_pragegrap">
                      <strong>Description :</strong>
                      <p>
                        10 oz Schuh London Bag is a plain shoulder bag. The bag
                        is made of 100% organic cotton and has a smooth weave,
                        making it perfect for reusable shopping. The bag is well
                        designed and woven. These bags can be used as grocery
                        bags or work bags for women. They are easy to maintain
                        as they are foldable and machine washable. The bag is
                        spacious and ideal for daily use.
                        <br />
                        We are capable of manufacturing bulk orders. Customized
                        design and size with company logo and branding are also
                        available. Worldwide shipping is available. Please get
                        in touch with us.
                      </p>
                    </div>
                  )}

                  {visibleContent === "details" && (
                    <div className="product_details-container">
                      <h6 style={{ marginLeft: "20px", fontWeight: "bold" }}>
                        Product Details :
                      </h6>

                      <div className="contaii">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <td>Minimum Order Quantity</td>
                              <td>500 pcs</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Color</td>
                              <td>{product.color || "N/A"}</td>
                            </tr>
                            <tr>
                              <td>Brand</td>
                              <td>{product.brand || "N/A"}</td>
                            </tr>
                            <tr>
                              <td>Material</td>
                              <td>{product.material || "N/A"}</td>
                            </tr>
                            <tr>
                              <td>Pattern</td>
                              <td>{product.pattern || "N/A"}</td>
                            </tr>
                            <tr>
                              <td>Size</td>
                              <td>{product.size || "N/A"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="quary_image-slider">
          <section className="sectionBx pt-5 pb-5 bkWhite">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-5">
                <h2>Our Products</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <Slider {...settings}>
                 
                 {/* <div> */}
                 <div className="slider_cardimg-div">
                  <img src="media/cotton14.jpg" alt="Cotton Bag 1" />
                </div>
                {/* <div><button>Cotton Bags</button></div> */}
                 {/* </div> */}

                <div className="slider_cardimg-div">
                  <img src="media/inimage11.webp" alt="Cotton Bag 2" />
                  
            {/* <div><button>Cotton Bags</button></div>         */}
           
                </div>
                <div className="slider_cardimg-div">
                  <img
                    className="img-fluid"
                    src="media/colom3.jpg"
                    alt="Cotton Bag 3"
                  />
                  
            {/* <div><button>Cotton Bags</button></div> */}
           
                </div>
                <div className="slider_cardimg-div">
                  <img
                    className="img-fluid"
                    src="media/colom4.jpg"
                    alt="Cotton Bag 4"
                  />
                  
            {/* <div><button>Cotton Bags</button></div> */}
           
                </div>
                <div className="slider_cardimg-div">
                  <img
                    className="img-fluid"
                    src="media/colom6.jpg"
                    alt="Cotton Bag 5"
                  />
                  
            {/* <div><button>Cotton Bags</button></div> */}
           
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
          </div>
        
        </>
      
      ) : (
        <p>Loading product details...</p>
      )}
           </div>


         
    </>
  );
}

export default Quaryproduct;
