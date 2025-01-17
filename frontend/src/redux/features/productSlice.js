import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
};
const baseUrl = "http://localhost:5000/product";

export const getData = createAsyncThunk("getProduct", async () => {
  const { data } = await axios.get(baseUrl);
  console.log(data);
  return data.products;
});

export const deleteProduct = createAsyncThunk("delete", async (id) => {
  await axios.delete(`${baseUrl}/${id}`);
  return id;
});

export const addProduct = createAsyncThunk("addproduct", async (product) => {
  const { data } = await axios.post(baseUrl, product);
  return data;
});

export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.products = action.payload;
    }),
      builder.addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (item) => item._id !== action.payload
        );
      }),
      builder.addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      });
  },
});

export const { extraReducers } = productSlice.actions;

export default productSlice.reducer;
