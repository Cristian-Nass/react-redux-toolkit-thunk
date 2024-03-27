import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const GET_ALL_PRODUCTS_URL =
  "https://gist.githubusercontent.com/Cristian-Nass/f5e2dedf7f090591fca4ba9d9873a2f9/raw/ace08fb1b35b3987c3631adf1583ffb1405a4a37/products.json";

const initialState = {
  productsData: [],
  loading: false,
  error: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  //   reducers: {
  //     increment: (state) => {
  //       state.value += 1;
  //     },
  //     decrement: (state) => {
  //       state.value -= 1;
  //     },
  //     incrementByAmount: (state, action) => {
  //       state.value += action.payload;
  //     },
  //   },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProductsData.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getAllProductsData.fulfilled, (state, action) => {
        state.productsData = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(getAllProductsData.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } =

export const getAllProductsData = createAsyncThunk(
  "products/getAllProductsData",
  async () => {
    try {
      const responce = await axios.get(GET_ALL_PRODUCTS_URL);
      const fetchData = responce.data;
      return fetchData;
    } catch (error) {
      console.log(error);
    }
  }
);
productsSlice.actions;

export default productsSlice.reducer;
