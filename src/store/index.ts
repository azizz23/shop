import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./ModalSlice";
import ProductSlice from "./ProductSlice";

export const store = configureStore({
  reducer: {
    modal: ModalSlice,
    products: ProductSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
