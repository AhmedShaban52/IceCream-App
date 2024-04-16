

import landingImg from "/images/slider-img.png";
import btnImg from '/images/btn-img.png'


const Hero = () => {
  return (
    <section className=" bg-[#f4f4f4] h-screen relative  ">
            <div className=" container   mx-auto grid grid-cols-1 sm:grid-cols-2  pl-4 md:pl-[90px]  gap-[20px] md:gap-8 after:absolute after:w-[65%] after:h-[20%]   sm:after:w-[35%] sm:after:h-[85%] after:bg-[#e5e5d9] after:bottom-0 after:right-[40px] "> 
              <div className="text-center sm:text-left ">
                <h1 className=" text-[#3b3a3a]  text-8xl  font-medium "  data-aos="zoom-out" data-aos-duration="700" >
                  Ice <br /> Cream  <br /> Shop{" "}
                </h1>
                <p className="text-[#3b3a3a] mt-5 sm:w-[300px] " 
                data-aos="zoom-out"
                data-aos-duration="700"
                data-aos-once="true"
                >
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua
                </p>
                <a
                  className="text-white w-fit  text-lg inline-block mt-8 py-2 px-8 mb-3  bg-primary hover:bg-black duration-1000 "
                  href=""
                  data-aos="zoom-out"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  Buy Now
                </a>
              </div>

              <div className="flex justify-center  min-w-full ">
                <img className=" z-10 relative h-[45%] sm:h-[50%]  sm:w-full  " src={landingImg}  
                data-aos="zoom-out"
                data-aos-duration="700"
                data-aos-once="true"
                />
              </div>
              </div>
          <a className="absolute  left-0 bottom-0"><img src={btnImg} className="w-[80%] " /></a>
    </section>
  );
};    

export default Hero;
