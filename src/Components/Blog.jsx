
import blog from '/images/blog-img.jpg'
const Blog = () => {
  return (
    <section className='flex justify-center '>
    <div className="container p-[30px]">
    <h1 className="text-3xl font-bold uppercase relative inline-block ml-[32px]">
    <span className="relative z-[8]"
    data-aos="zoom-in"
    data-aos-duration="1000"
    data-aos-once="true"
 
    >Blog</span>
    <span className="absolute inset-x-0  h-0.5 left-[-30px] bottom-[16px]  bg-[#b7b7b7] w-[150px] "></span>
    </h1>
    <div className='parent md:flex  gap-8'>
    <div className="box mt-[60px]"
    data-aos="zoom-in"
    data-aos-duration="1000"
    data-aos-once="true"
  
    >
    <div className="img-box relative">
    <img src={blog} />
    <div className='img-date absolute top-0 left-0 bg-primary text-white text-center text-sm font-medium  p-1 w-12'>
    <h1> 02 <br/> FEB <br/> 2020</h1>

    </div>
    </div>
    <div className='text'>
    <h1 className='uppercase text-2xl   my-5'>consectetur adipiscing elit, sed</h1>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    </p>
    <a  href="" className='text-white w-fit  text-lg inline-block mt-10   py-2 px-6 bg-primary hover:bg-black duration-1000'>Read More</a>
    </div>
    </div>

    <div className="box mt-[60px]"   
    data-aos="zoom-in"
    data-aos-duration="1000"
    data-aos-once="true">
    <div className="img-box relative">
    <img src={blog} 
 
    />
    <div className='img-date absolute top-0 left-0 bg-primary text-white text-center text-sm font-medium  p-1 w-12'>
    <h1> 02 <br/> FEB <br/> 2020</h1>

    </div>
    </div>
    <div className='text'>
    <h1 className='uppercase text-2xl my-5 mb-2'>consectetur adipiscing elit, sed</h1>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    </p>
    <a  href="" className='text-white w-fit  text-lg inline-block mt-10   py-2 px-6 bg-primary hover:bg-black duration-1000'>Read More</a>
    </div>
    </div>
    </div>
    </div>
    </section>
  )
}

export default Blog