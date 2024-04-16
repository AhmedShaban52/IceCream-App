import UserImg from "/images/user.png";
import SearchImg from "/images/search-icon.png";
import menu from "/images/menu.png";
import { useEffect, useRef, useState } from "react";
import '../index.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  const menuLinks = [
    { name: "Home", link: "" },
    { name: "About", link: "about" },
    { name: "Icecreams", link: "products" },
    { name: "Blog", link: "blog" },
    { name: "Contact us", link: "contact" },
  ];

  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart )
  const navRef = useRef()
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navRef.current.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
        navRef.current.style.padding = "8px"
      } else {
        navRef.current.style.boxShadow = "none";
        navRef.current.style.padding = "0";
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
   
    <nav ref={navRef} className="bg-[#f4f4f4]  z-50 duration-700  p-2 ">
      <div className="container mx-auto px-4 relative h-[70px] flex justify-between items-center ">
        <div >
          <Link to='/' className="text-2xl font-bold text-[#3b3a3a] ">
            Joice
          </Link>
        </div>

        <div className=" md:block hidden">
          <ul className="flex justify-center items-center   ">
            {menuLinks.map((item, index) => (
              <li key={index} className="">
                <Link
                  to={`/${item.link}`}
                  className={`hover:bg-primary hover:text-white text-[18px] duration-700 ${item.name === "Home" ? "bg-primary text-white" : ""}  sm:px-4 pt-[50px] pb-[20px] px-5`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div onClick={() =>setOpen(!open) } className="z-[1000] cursor-pointer   w-[40px] md:hidden absolute right-3 ">
          <img src={menu} alt=""  />
          </div>
          
          <div className={`absolute h-screen w-2/3 py-2 px-8 z-[999]  bg-[#f4f4f4] duration-1000  top-0 ${open ? "right-0" : "right-[-100%]"} md:hidden`}>
            <ul className="flex flex-col justify-center h-full gap-10 py-2  text-lg">
              {menuLinks.map((item, index) => (
                <li key={index} >
                  <Link
                    to={`/${item.link}`}
                    className={`hover:bg-primary hover:text-white duration-300   sm:px-4 pt-[20px] pb-[10px] px-5`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        <div className="md:flex justify-center items-center gap-5 px-4 pr-[45px] z-[1000]  ">
      
        <Link to="/cart" className="text-xl flex items-center  ">
        {cart.length > 0 && ( 
          <span className="text-[16px] relative bottom-[21px] left-11 bg-primary text-center w-[22px] h-[23px] text-white rounded-full flex justify-center items-center">
            {cart.length}
          </span>
        )}
        <div className="shopping-cart duration-500 hover:text-white hover:bg-primary ">
          <FaShoppingCart size={23} className=" " /> 
        </div>
      </Link>
      
          <a href="">
            <img src={UserImg} alt="" className="w-[20px] h-[20px] hidden md:block" />
          </a>
          <a href="">
            <img src={SearchImg} alt="" className="w-[20px] h-[20px]  hidden md:block" />
          </a>
        </div>
      </div>
    
    </nav>
  
  );
};

export default Navbar;
