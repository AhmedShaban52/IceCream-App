import { configureStore } from "@reduxjs/toolkit";
import ProductSlices from "../Slices/ProductSlices";
import  cartSlice  from "../Slices/CartSlice";


export const store = configureStore({
    reducer:{
        products: ProductSlices,
        cart: cartSlice,
    }
})