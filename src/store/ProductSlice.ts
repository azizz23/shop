import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllProductData = createAsyncThunk(
  "ProductData/getAllProductData",
  async () => {
    const { data: res } = await axios(`/static/db.json`);

    return res as any;
  }
);

export const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    data: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getAllProductData.fulfilled,
      (state: { data: any }, { payload }: { payload: any }) => {
        state.data = payload;
      }
    );
  },
});

// Action creators are generated for each case reducer function
export { getAllProductData };

export default ProductSlice.reducer;
