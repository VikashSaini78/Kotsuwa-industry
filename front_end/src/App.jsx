import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Compnont/Navbar";
import Home from "./Compnont/Home";
import About from "./About";
import Customise from "./Compnont/Customise";
import Footer from "./Compnont/Footer";
// import Contact from "./Compnont/Contact";

function App() {
  return ( 
    <>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/customise" element={<Customise/>} />
        {/* <Route path="/contact" element={<Contact/>} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
   );
}

export default App;