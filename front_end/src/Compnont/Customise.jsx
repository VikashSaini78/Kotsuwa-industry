import React from 'react'
import "./Customise.css"
import { Link } from 'react-router-dom'
function Customise() {
  return (
    <>
      <div className='cost_header-img'>
        <img src='./media/header.jpg'alt=''/>
        {/* <p className='Customise_linkn'><Link to={"/"}>Home </Link> / Customise</p> */}
      </div>

         <div className='cost_contant'>
         <h5>Not sure what you need? Enquiry here and we can help you </h5>
         </div>

         <div className='customise_container'>
            <div className='customise_container-sm'>
            <label for="formGroupExampleInput" class="form-label">Tell us your name *</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Full Name"/>
         

            <label for="formGroupExampleInput" class="form-label">Enter your email *</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Eng.Example@gmail.com"/>
         

            <label for="formGroupExampleInput" class="form-label">Enter phone number *</label>
            <input type="number" class="form-control no-spinner" id="formGroupExampleInput" placeholder="Eg.  8000000000"/>

            <label for="inputState" class="form-label">Product Type *</label>
           <select id="inputState" class="form-select" placeholder="product type">
           <option>Canvas Tote Bags</option>
           <option>Cotton Tote Bags</option>
           <option>Deniem  Celloction</option>
           <option>Pouches Collection</option>
           <option>Printed Collection</option>
           </select>
         

           <label for="formGroupExampleInput" class="form-label">Dimension *</label>
            <input type="number" class="form-control no-spinner" id="formGroupExampleInput" placeholder="Dimension"/>


            <label for="formGroupExampleInput" class="form-label">Color *</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Color"/>


            <label for="formGroupExampleInput" class="form-label">Artwork *</label>
            <input type="text" class="form-control " id="formGroupExampleInput" placeholder="Artwork"/>


            <label for="formGroupExampleInput" class="form-label">Organisation *</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="write us a organisation name"/>


            <label for="formGroupExampleInput" class="form-label">Minimum order Quantity *</label>
            <input type="text" class="form-control " id="formGroupExampleInput" placeholder="Minimum order Quantity"/>

            <label for="formGroupExampleInput" class="form-label">Ideal Delivery Date *</label>
            <input type="text" class="form-control " id="formGroupExampleInput" placeholder="Ideal Delivery Date"/>


            <label for="formGroupExampleInput" class="form-label">Discribe Your Requirement *</label>
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>


            <div className='contant-buton'>
            <button type="button" class="btn btn">SUBMIT</button>
            </div>
            </div>

         </div>
    </>
  )
}

export default Customise
