import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "./Slices/ProductSlices"
import { addToCart } from "./Slices/CartSlice"
import { Link } from "react-router-dom"

const Products = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)
console.log(products);
    useEffect(() => {
        dispatch(fetchProducts())
    },[])
  return (
    <section className="py-[70px]"  
    data-aos="zoom-in"
    data-aos-duration="1000"
    data-aos-once="true"
    >
    <div className="container  text-center" >
    <h1 className="text-3xl font-bold uppercase relative inline-block ">
    <span className="relative z-[8]">Our Ice Cream</span>
    <span className="absolute inset-x-0   h-0.5 left-[-35px] bottom-[16px]  bg-[#b7b7b7] w-[300px]"></span>
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center p-5 gap-4  " >
  {products.map((product) => (
    <div className="mt-[50px]  shopping-cart w-[350px] lg:w-[300px]    hover:shadow-2xl  hover:translate-y-[-15px] duration-700   " key={product.id}
    data-aos="zoom-in"
    data-aos-duration="1500"
    data-aos-once="true"
    >
    <div className=" relative ">
    <Link to="/deatils">
    <img src={product.image} className="mx-auto   mt-2 " /> 
    </Link>

    <h2 className="absolute new font-family top-1 left-3 text-white py-[2px] px-1 rounded-[13px] text-[14px]">New</h2>
    </div>
    
      <div >
      <div className="flex items-center justify-center">
        <span className="relative  mt-[35px] w-[300px] h-[1px] bg-[#b7b7b7] "></span>
      </div>

        <h1 className="mt-6 text-2xl font-bold ">{product.title}</h1>
        <p className="text-[13px]">{product.description}</p>

        <div className=" duration-500  flex justify-center mt-5 gap-3 ">
        <span className="inline-block   font-family throw-decoration   text-[16px]"> ${product.price}</span> 
        <p className="inline-block font-bold   font-family mr-5  red text-[18px]">{product.offer} $</p>
        </div>

        <button onClick={() => dispatch(addToCart(product))} className="text-white w-fit z-10   text-lg inline-block my-6   py-2 px-5 bg-primary hover:bg-black hover:bottom-1 duration-1000" >Add To Cart</button>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  )
}

export default Products