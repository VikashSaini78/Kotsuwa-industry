import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Compnont/Navbar";
import Home from "./Compnont/Home";
import About from "./About";
import Customise from "./Compnont/Customise";
import Footer from "./Compnont/Footer";
import Catlog from "./Compnont/Catlog";
// import Contact from "./Compnont/Contact";
import Navbar1 from "./Compnont/Contact";
import Cut from "./Compnont/Cut";
import Getdataproduct from "./Compnont/Detproduct/Getdataproduct";
import Quaryproduct from "./Compnont/Catlogproduct/Quaryproduct";
import ShopCart from "./Compnont/Catlogproduct/ShopCart";
import ByProduct from "./Compnont/Catlogproduct/ByProduct";
import Address from "./Compnont/Catlogproduct/Address";
import Insertdata from "./Compnont/Curd/Insertdata";

function App() {
  return ( 
    <>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/customise" element={<Customise/>} />
        <Route path="/contact" element={<Navbar1/>} />
        <Route path="/catlog" element={<Catlog/>} />
        <Route path="/cat" element={<Cut/>} />
        <Route path="/getdataproduct" element={<Getdataproduct/>} />
        <Route path="/product/:id" element={<Quaryproduct />} />
        <Route path="/shopcard" element={<ShopCart />} />
        <Route path="/byproduct" element={<ByProduct/>} />
        <Route path="/address" element={<Address/>} />
        <Route path="/insertproductdata" element={<Insertdata/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
   );
}

export default App;