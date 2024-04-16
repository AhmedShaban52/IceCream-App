
import facebookIcon from "/images/fb.png"
import twitterIcon from "/images/twitter.png"
import linkedinIcon from "/images/linkedin.png"
import instgramIcon from "/images/instagram.png"

import location from "/images/location.png"
import phone from "/images/phone.png"
import email from "/images/mail.png"
const Footer = () => {
  return (
    <section className="bg-[#363636] text-white font-family">
    <div className="container">
    <div className="contact-us flex flex-col justify-center items-center ">
    <h1 className="uppercase  text-4xl font-bold  mt-[60px]">Contact Us</h1>
    <div className=" flex justify-center items-center gap-2 mt-4">
    
    <a href=""> <img  src={facebookIcon}/> </a>
    <a href=""> <img  src={twitterIcon}/> </a>
    <a href=""> <img  src={linkedinIcon}/> </a>
    <a href=""> <img  src={instgramIcon}/> </a>
    </div>
    </div>
    <div className="flex justify-center items-center mt-[60px]">
    <form className="">
    <input placeholder="Enter Your Email" type="text" className=" bg-transparent  border-b border-[#616060] outline-none font-family text-lg text-white placeholder:text-white  md:w-[600px]" /> 
    <button className="uppercase  text-lg font-bold  border-b border-[#616060]">Subscripe</button>
    </form>
    </div>

    <div className="deatails flex justify-center items-center flex-col md:flex-row py-[80px] text-[18px] font-family gap-8">
    <div className="box flex items-center flex-col md:flex-row pb-10 gap-4 ">
    <div className="bg-white p-5 rounded-md">
    <img className="w-6" src={location}/>
    </div>
    <div className="">
    <p className="md:w-[140px]">No.123 Chalingt Gates, loram ipusm</p>
    </div>
    </div>
    <div className="box flex items-center flex-col md:flex-row pb-10 gap-4 ">
    <div className="bg-white p-5 rounded-md">
    <img className="w-6" src={phone}/>
    </div>
    <div className="">
    <p className="">+01 1234567890</p>
    </div>
    </div>
    <div className="box flex items-center flex-col md:flex-row pb-10  gap-4 ">
    <div className="bg-white p-5 rounded-md">
    <img className="w-6" src={email}/>
    </div>
    <div className="">
    <p className=" ">demo@gmail.com</p>
    </div>
    </div>
    </div>
    <div className="flex justify-center items-center text-center   ">
    <p className="border-t p-5 border-[#616060] w-[700px] ">© 2024 All Rights Reserved By Ahmed Shaaban</p>
    </div>
    </div>
    </section>
  )
}

export default Footer