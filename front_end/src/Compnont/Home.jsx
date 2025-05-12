import React, { useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
function Home() {
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

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      disable: function () {
        return window.innerWidth > 768;
      },
    });
  }, []);
  return (
    <>
      {/* slider image */}
      <div className="slider_image-div">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="img-fluid"
                src="media/des4.webp"
                alt="img error"
              />
            </div>
            <div className="carousel-item">
              <img
                className="img-fluid"
                src="media/des10.jpg"
                alt="img error"
              />
            </div>
            <div className="carousel-item">
              {/* <img className="img-fluid" src="media/des11.jpeg" className="d-block w-100" alt="img error"/> */}
              <img
                className="img-fluid"
                src="media/slider1.jpg"
                alt="img error"
              />
            </div>
          </div>
        </div>
      </div>

      {/* postfolio images */}

      <section className="sectionBx pt-5 bkWhite">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-6"
              data-aos="fade-right"
            >
              <div className="card_image-div">
                <Link to={"/catlog"}>
                  <img
                    className="img-fluid"
                    src="media/cotton4.webp"
                    alt="error"
                  />
                </Link>
                <button>Tote Bags</button>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-6"
              data-aos="fade-left"
            >
              <div className="card_image-div">
                <Link to={"/catlog"}>
                  <img className="img-fluid" src="media/canvas1.jpeg" alt="" />
                </Link>
                <button>Shopping Bags</button>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-6"
              data-aos="fade-right"
            >
              <div className="card_image-div">
                <Link to={"/catlog"}>
                  <img className="img-fluid" src="media/coton1.png" alt="" />
                </Link>
                <button>Travel Bags</button>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-6"
              data-aos="fade-left"
            >
              <div className="card_image-div">
                <Link to={"/catlog"}>
                  <img className="img-fluid" src="media/coton2.png" alt="" />
                </Link>
                <button>Cotton Bags</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* banner  */}

      <section className="banner_container" data-aos="zoom-in">
        <img className="img-fluid" src="media/banner.png" />
      </section>

      {/* slider images  */}

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
                  <Link to={"/catlog"}>
                    <img src="media/cotton14.jpg" alt="Cotton Bag 1" />
                  </Link>
                </div>
                {/* <div><button>Cotton Bags</button></div> */}
                {/* </div> */}

                <div className="slider_cardimg-div">
                  <Link to={"/catlog"}>
                 
                    <img src="media/inimage11.webp" alt="Cotton Bag 2" />
                  </Link>

                  {/* <div><button>Cotton Bags</button></div>         */}
                </div>
                <div className="slider_cardimg-div">
                <Link to={"/catlog"}>
                 
                    <img
                      className="img-fluid"
                      src="media/colom3.jpg"
                      alt="Cotton Bag 3"
                    />
                  </Link>

                  {/* <div><button>Cotton Bags</button></div> */}
                </div>
                <div className="slider_cardimg-div">
                  <Link to={"/catlog"}>
                    {" "}
                    <img
                      className="img-fluid"
                      src="media/colom4.jpg"
                      alt="Cotton Bag 4"
                    />{" "}
                  </Link>

                  {/* <div><button>Cotton Bags</button></div> */}
                </div>
                <div className="slider_cardimg-div">
                  <Link to={"/catlog"}>
                    {" "}
                    <img
                      className="img-fluid"
                      src="media/colom6.jpg"
                      alt="Cotton Bag 5"
                    />
                  </Link>

                  {/* <div><button>Cotton Bags</button></div> */}
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* testimonial */}

      <section className="sectionBx pt-5 pb-4 testimonial-bx ">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="testimonialBody" data-aos="zoom-in">
                <div className="Impex_Forbes-div">
                  <div className="md_container">
                    <div className="gupata_container">
                      <Link to={"/"}>
                        <img
                          className="img-fluid"
                          src="media/removedp.jpg"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="Testimonial_div">
                  <h2>Testimonial</h2>

                  <div className="text_slider">
                    <div
                      id="carouselExampleSlidesOnly"
                      className="carousel slide"
                      data-bs-ride="carousel"
                      data-bs-interval="5000"
                    >
                      <div className="carousel-inner">
                        <div
                          className="carousel-item active"
                          data-bs-interval="5000"
                        >
                          <p>
                            "The cotton bags we received are of exceptional
                            quality. The fabric is sturdy, the stitching is
                            flawless, and the print is vibrant. Our customers
                            love them!"
                          </p>
                          <h5>Sarah Miller</h5>
                          <h6>USA</h6>
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                          <p>
                            "We've been sourcing cotton bags from this
                            manufacturer for years, and their quality is
                            consistently outstanding. They're durable, washable,
                            and hold up well over time."
                          </p>
                          <h5>John Davis</h5>
                          <h6>UK</h6>
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                          <p>
                            "The craftsmanship of these cotton bags is truly
                            impressive. You can tell they're made with care and
                            attention to detail. We're thrilled with the final
                            product."
                          </p>
                          <h5>Maria Sanchez</h5>
                          <h6>Canada</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* colom  */}

      <section className="sectionBx pt-3 pb-3 bkgrey">
        <h3 className="about-compney">About Company</h3>
        <div className="container">
          <div className="row">
            <div
              className="col-md-3 col-lg-3 col-sm-6 col-6 "
              data-aos="fade-right"
            >
              <div className="Business-Manufacturer">
                <div className="sectionIcon">
                  <img className="img-fluid" src="media/about-icon-1.png" />
                </div>
                <p>Nature of Business-Manufacturer</p>
              </div>
            </div>
            <div
              className="col-md-3 col-lg-3 col-sm-6 col-6"
              data-aos="fade-left"
            >
              <div className="Business-Manufacturer">
                <div className="sectionIcon">
                  <img className="img-fluid" src="media/about-icon-2.png" />
                </div>
                <p>Total Number of Employees- 101 to 500r</p>
              </div>
            </div>
            <div
              className="col-md-3 col-lg-3 col-sm-6 col-6"
              data-aos="fade-right"
            >
              <div className="Business-Manufacturer">
                <div className="sectionIcon">
                  <img className="img-fluid" src="media/about-icon-3.png" />
                </div>
                <p>Year of Establishment- 1991</p>
              </div>
            </div>
            <div
              className="col-md-3 col-lg-3 col-sm-6 col-6"
              data-aos="fade-left"
            >
              <div className="Business-Manufacturer">
                <div className="sectionIcon">
                  <img className="img-fluid" src="media/about-icon-4.png" />
                </div>
                <p>Legal Status Firm- Proprietorship</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Company */}

      <section className="sectionBx pt-5 pb-5 bkgrey">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-5">
                <h2>Tell Us What Are You Looking For ?</h2>
              </div>
            </div>
          </div>
          <div className="row bkWhite">
            <div className="col-md-6 youtube_video_box">
              <div className="youtube_video" data-aos="zoom-in-down">
                <div className="invoice_Details-container">
                  <div className="ratio ratio-16x9">
                    {/* <iframe
                      src="https://www.youtube.com/embed/OalU-s7Pyok?rel=0"
                      title="YouTube video"
                      allowfullscreen
                    ></iframe> */}

                    <video
                      src="./media/video.mp4"
                      controls
                      autoplay
                      muted
                    ></video>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="Looking_form-div" data-aos="zoom-in-up">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" />
                <label className="form-label">Phone Number</label>
                <input type="Number" className="form-control no-spinner" />
                <label for="floatingTextarea">Comments</label>
                <textarea className="form-control"></textarea>
                <button type="button" className="btn btn">
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
