import offer from '/images/offer-img.png'

const Offer = () => {
  return (
    <section className="bg-[#e5e5d9] "
    data-aos="zoom-in"
    data-aos-duration="1000"
    data-aos-once="true"
    >
    <div className="container flex justify-between items-center flex-col-reverse md:flex-row md:py-0 py-[50px] px-[20px]">
    <div>
    <button className="text-white w-fit  text-lg inline-block mt-16 md:mt-0  py-2 px-[30px] bg-primary hover:bg-black duration-1000">Buy Now</button>
    </div>
    <div className="flex justify-center">
    <div>
      <h1 className='text-center mt-9 md:mt-0 text-[#424242]  text-3xl font-family'> <span className='mr-5 text-4xl font-bold text-[#000000]'>50%</span>Offer on Every Ice Cream</h1>
    </div>
    </div> 
    <div className='mt-[-95px]'>
    <img src={offer} />
    </div>
    </div>
    </section>
  )
}

export default Offer