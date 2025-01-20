import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import loadingSlice from "./slices/loadingSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    loading: loadingSlice,
    user: userSlice,
  },
});
