import About from "./Compnont/About us/About";
import Customise from "./Compnont/Customise/Customise";
import Footer from "./Compnont/Footer/Footer";
import Home from "./Compnont/Home/Home";
import Navbar from "./Compnont/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return ( 
    <>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/customise" element={<Customise/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
   );
}

export default App;