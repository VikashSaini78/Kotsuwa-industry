import React from 'react'
import { Link } from 'react-router-dom'
function About() {
  return (
    <>
    <div className='home_abut-page'>
    <p><Link to={"/"}>Home</Link> / </p><p>About Us</p>
    </div>
    <div className='about_container'>
    
    <div className='about_contant'>
        <h1>About Us</h1>
        <p>Sekawati Impex, A highly acclaimed name - Sekawati, specializes in the manufacturing and export of a wide variety of Canva
        <p>s Bags, Cotton Canvas Bags and Aprons for various domestic and business requirements. I<p>ncorporated in 1991, company offers a wide range of canvas shopping bags, cotton canvas bags, canvas bags wholesale and aprons in exclusive designs and styles that are in sync with the fashion trends and follows a professional approach in designing, production and supplying. We never use Child Labour in our manufacturing process of bags, aprons and follows Fair Trade Practices.The organization has</p> acquired an unrivalled position in the</p> market on the grounds of quality, variety and style. All the products offered by us such as c<p>anvas bags and canvas shopping bags conform to highest quality standards and are manufactured using superior quality materials sourced from reliable vendors.

         We have the capability to execute bulk orders in smallest lead ti</p>me that gives us an upper hand over our competitors. Our comprehensive quality control procedure has helped us in achieving higher degree of customer satisfaction and attain a respectable name among them.</p>
    </div>

    </div>
      
    </>
  )
}

export default About
