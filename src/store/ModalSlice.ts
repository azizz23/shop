import { createSlice } from "@reduxjs/toolkit";

const initialState: { product: any; isOpen: boolean } = {
  product: {},
  isOpen: false,
};

export const ModalSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.product = payload;
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.product = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = ModalSlice.actions;

export default ModalSlice.reducer;
