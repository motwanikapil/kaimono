import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import loadingSlice from "./slices/loadingSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    loading: loadingSlice,
  },
});
