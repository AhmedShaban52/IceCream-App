import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("ProductsSlice/fetchProducts", async () => {
    const res = await fetch("/ice.json")
    const data = await res.json()
    return data
})


export const productSlice = createSlice({
    name: "ProductsSlice",
    initialState:[],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default productSlice.reducer
