
import aboutImg from '/images/about-img.png'
import about from '/images/about-bg.png'

const About = () => {
  return (
    <section className='relative ' id="#about">
    <div className=' flex justify-between items-center flex-col md:flex-row pt-[50px]  '
    data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-once="true" >
    <div >
    <img src={aboutImg} alt="" className='object-contain'  />
    </div>

    <div className=" container text-end px-3 ">
    <h1 className="text-3xl font-bold uppercase relative inline-block mr-[35px]">
      <span className="relative z-[8]">About</span>
      <span className="absolute inset-x-0  h-0.5 left-[-35px] bottom-[16px]  bg-[#b7b7b7] w-[170px] mx-auto"></span>
    </h1>
    <p className='my-5   '>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    </p>
    <a href='' className='text-white w-fit z-10 relative   text-lg inline-block mt-10   py-2 px-5 bg-primary hover:bg-black duration-1000'>Read More</a>
    <div className='flex absolute justify-end w-[90px] right-0 bottom-0 '>
      <img src={about} className='w-[60%] md:w-full' />
      </div>
  </div>
    </div>
    </section>
  )
}

export default About