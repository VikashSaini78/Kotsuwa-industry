import "./Contact.css";
import { FaRegUser } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CgMail } from "react-icons/cg";

function Contact() {
  return (
    <>
      <h2 className="Contact_h2tag">Contact Us</h2>

      <div className="contact_container">
        <div className="contant_container">
          <div className="contact_persan-div">
            <h3>
             
              <i>
                <FaRegUser />
              </i>
              Contact Person
            </h3>
            <p>Irfan Ali Ansari (president)</p>
          </div>

          <div className="contact_persan-div">
            <h3>
             
              <i>
                <CiLocationOn />
              </i>
              Address
            </h3>
            <p>
            
              Add-117B, Ram Nagar, Toll Tax, Tehsil Sanaganer, Jaipur,
              Rajasthan, 302022
            </p>
          </div>

          <div className="contact_persan-div">
            <h3>
              
              <i>
                <MdOutlineLocalPhone />
              </i>
              Lets Talk
            </h3>
            <p>70-234-70-489</p>
          </div>

          <div className="contact_persan-div">
            <h3>
              <i className="icon">
                <CgMail />
              </i>
              General Support
            </h3>
            <p>kotsuwaindustry@gmail.com</p>
          </div>
        </div>
        <div className="input_container">
          <div className="contact_page">
            <div className="username_input">
              <input
                type="text"
                class="form-control"
                placeholder="First name"
              />
              <input type="text" class="form-control" placeholder="Last name" />
            </div>

            <div className="contact_input">
              <input
                type="text"
                class="form-control"
                placeholder="Enter your email"
              />
              <input
                type="Number"
                class="form-control no-spinner"
                placeholder="Enter phone number"
              />
              <input
                type="text"
                class="form-control"
                placeholder="Enter subject "
              />
            </div>
            <div className="pragraph_tag">
              <h6>Message</h6>
              <p>
                If you would like a quote, please provide us with the following
                information to help us reach you sooner:
              </p>
              <p>Product Name/Style</p>
              <p>Size</p>
              <p>Quantity</p>
              <p>Fabric Color (other than natural/greige)</p>
              <p>
                Print Specifications (ex. number of colors in artwork, one side
                or two side print)
              </p>
              <p>Shipping Information (State & Country)</p>
              <p>Additional Information Or Requirements</p>
            </div>

            <div className="textarea_contant">
            <textarea class="form-control " id="validationTextarea" placeholder="We Look Forward To Hearing From You!" required/>
            </div>

             <div className="submit_button-text"> <button>Submit</button></div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
