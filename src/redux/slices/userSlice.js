import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout(state, action) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

// export function login(email, password) {
//   if (!username || !password) {
//     throw new Error("All values are required");
//   }

//   return async function (dispatch, getState) {
//     try {
//       dispatch({ type: "loading/setLoading", payload: true });
//       const res = await axios.post("/user/login", { email, password });
//       console.log(res);
//       dispatch({
//         type: "user/login",
//         payload: {
//           user: res,
//           isAuthenticated: true,
//         },
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };
// }

export const { logout } = userSlice.actions;

export default userSlice.reducer;
