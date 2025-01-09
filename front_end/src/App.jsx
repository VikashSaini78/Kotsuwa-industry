import About from "./Compnont/About us/About";
import Customise from "./Compnont/Customise/Customise";
import Footer from "./Compnont/Footer/Footer";
import Home from "./Compnont/Home/Home";
import Navbar from "./Compnont/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import About from "./Compnont/Contact/Contact";
import Contact from "./Compnont/Contact/Contact";
function App() {
  return ( 
    <>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/customise" element={<Customise/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
   );
}

export default App;