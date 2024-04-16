import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "./Slices/CartSlice";
import { MdDeleteForever } from "react-icons/md";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <section>
      <div className="container text-center ">
        <div className="mx-auto mt-10 font-family w-[95%]">

          <table className="w-full">
            <thead>
              <tr>
                <th className="border py-2">id</th>
                <th className="border py-2">Name</th>
                <th className="border py-2">image</th>
                <th className="border py-2">Price</th>
                <th className="border py-2">Quantity</th>
                <th className="border py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td className="border py-2">{product.id}</td>
                  <td className="border py-2">{product.title}</td>
                  <td className="border py-2">
                    <div className="flex justify-center items-center">
                      <img className="w-[100px] h-[100px]" src={product.image} alt={product.title} />
                    </div>
                  </td>
                  <td className="border py-2">{product.price} $</td>
                  <td className="border py-2">{product.quantity}</td>
                  <td className="border py-2">
                    <MdDeleteForever onClick={() => dispatch(deleteFromCart(product))} className="cursor-pointer text-[25px] w-[25px] mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center items-center text-center my-5 gap-10">
            <h1 className="font-family">Total Price: {totalPrice.toFixed(2)} $</h1>
            <button onClick={() => dispatch(clear())} className="text-white w-fit rounded-xl text-lg  py-2 px-2 bg-primary hover:bg-black duration-1000">Clear</button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Cart;
