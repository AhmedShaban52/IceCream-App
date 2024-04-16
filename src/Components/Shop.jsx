
import shopImg from '/images/shop-bg.jpg';

const Shop = () => {
  return (
    <section className='text-white h-screen flex my-[70px]' style={{ backgroundImage: `url(${shopImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-once="true"
    >
    <div className='container p-9 flex flex-col justify-center items-center text-center '>
    <h1 className='font-bold text-4xl leading-[60px]'
    data-aos="zoom-in"
    data-aos-duration="1000"
    data-aos-once="true"
    >
      Best Ice Cream Flavours 
      <br/>
      In
      <br/>
      Shop
    </h1>
    <p className='mx-auto my-2 '>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    </p>
    <a  href="" className='text-white w-fit    text-lg inline-block mt-16   py-3 px-[70px] bg-primary hover:bg-black duration-1000'>Order Now</a>
  </div>
    </section>
  )
}

export default Shop