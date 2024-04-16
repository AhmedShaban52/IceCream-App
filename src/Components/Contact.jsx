
import contact from '/images/contact-bg.png'
const Contact = () => {
  return (
    <section className='relative py-[75px]'>
    <div className='absolute  top-[300px] md:top-[180px]'>
        <img className='w-[110px] md:w-[110px] ' src={contact}/>
    </div>
    <div className='container '>
    <div className='heading text-center '>
    <h1 className="text-3xl font-bold uppercase relative  inline-block mt-10 ml-[32px]"
    data-aos="zoom-in"
    data-aos-duration="1000"
    data-aos-once="true"
    >
    <span className="relative z-[8]  text-2xl sm:text-3xl " >Request A Call Back</span>
    <span className="absolute inset-x-0  h-0.5 left-[-20px] bottom-[14px]  bg-[#b7b7b7] w-[295px] sm:w-[365px]"></span>
    </h1>
    </div>
    <div className='contact flex justify-center items-center md:items-start flex-col p-4 md:flex-row gap-[15px] md:gap-[40px] mt-[70px] z-20 relative'>
    <form className='w-[350px] md:w-[500px] '
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-once="true"
    >
    <div>
    <input placeholder='Name' type='text' className='w-full bottom-0 outline-0 border-b border-primary p-1' />
    </div>
    <div >
    <input placeholder='Email' type='email' className='w-full bottom-0 outline-0 border-b border-primary mt-4 p-1'/>
    </div>
    <div>
    <input placeholder='Phone Number' type='text' className='w-full bottom-0 outline-0 border-b border-primary mt-4 p-1' />
    </div>
    <div>
    <input placeholder='Message' type='text' className='w-full bottom-0 outline-0 border-b border-primary mt-[60px] p-1' />
    </div>
    <div>
    <button className='bg-[#fd9e2e] text-white text-sm uppercase px-[55px] py-4 my-[50px]  ' >send</button>
    </div>
    </form>
    <iframe className='h-[330px]  bottom-0 w-[350px] md:w-[550px]' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5249.98325970342!2d2.294481!3d48.85837!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1709401359141!5m2!1sen!2sus"   allowfullscreen="" loading="lazy" 
    data-aos="slide-up"
    data-aos-duration="1000"

    ></iframe> 
    </div>
    </div>
    </section>
  )
}

export default Contact