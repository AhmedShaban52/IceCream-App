
import about from '/images/client-bg.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
const TestimonialsSection = () => {
  const data = [
    {
    name: 'Eiusmod',
    quote:"/images/quote.png",
    img: '/images/client-1.png',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    }, 
    {
    name: 'Tempor',
    quote:"/images/quote.png",
    img: '/images/client-2.png',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    },
    {
    name: 'Eiusmod',
    quote:"/images/quote.png",
    img: '/images/client-1.png',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    },
    {
    name: 'Tempor',
    quote:"/images/quote.png",
    img: '/images/client-2.png',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    },
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}
  return (
    <section className="bg-gray-100 mt-10 h-screen relative  text-center"
    data-aos="zoom-in"
    data-aos-duration="1000"
    data-aos-once="true"
    >
    <div className='absolute right-0 '>
        <img className='w-[60px] md:w-[110px] ' src={about}/>
    </div>
    <div className="container w-3/4 m-auto mt-[20px] ">
    <h1 className="text-2xl md:text-3xl font-bold uppercase relative inline-block mt-10 ">
    <span className="relative z-[8]  "> our customer</span>
    <span className="absolute inset-x-0  h-0.5 left-[-20px] bottom-[13px]  bg-[#b7b7b7]   w-[230px] md:w-[280px]  "></span>
    </h1>
   
    <Slider {...settings}>
    {
        data.map((d) => (
            <div key={d} className='bg-white h-[450px] text-black rounded-lg mt-[40px]'>
            <div className=' flex justify-center items-center'>
            <img className='rounded-full mt-2 '  src={d.img} />
            </div>

            <div className='flex flex-col justify-center items-center text-center gap-4 p-4'>
            <div className='flex gap-4'>
            <p className='text-xl font-semibold'>{d.name}</p>
            <img className='w-[20px]' src={d.quote}/>
            </div>
            <p>{d.review}</p>
            <button className='bg-primary text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
            </div>
            </div>
        ))
    }
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;
