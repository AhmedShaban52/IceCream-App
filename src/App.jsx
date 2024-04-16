import About from "./Components/About"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"

import { Routes, Route } from "react-router"

import './index.css'
import Products from "./Components/Products"
import Cart from "./Components/Cart"
import Shop from "./Components/Shop"
import Blog from "./Components/Blog"
import Testimonials from "./Components/Testmonails"
import Contact from "./Components/Contact"
import Offer from "./Components/Offer"
import Footer from "./Components/Footer"


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-hidden" >
    <Navbar/>
    <Routes>
    <Route path="/" element={<> <Hero/> <About/> <Products/> <Shop/> <Blog/> <Testimonials/> <Contact/> <Offer/>  </> } />
    <Route path="/about" element={<> <About/>  </> } />
    <Route path="/products" element={<> <Products/>  </> } />
    <Route path="/cart" element={<> <Cart/>  </> } />
    <Route path="/blog" element={<> <Blog/>  </> } />
    <Route path="/contact" element={<> <Contact/>  </> } />
  
    </Routes>
    <Footer/>
    </div>
  )
}

export default App