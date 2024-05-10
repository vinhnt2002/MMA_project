import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  user: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userRegister: (state, action: PayloadAction<any>) => {
      state.token = action.payload.token;
    },

    userLoggedIn: (state, action: PayloadAction<{accessToken:string, user: string}>) => {
      state.token = action.payload.accessToken;
      state.user = action.payload.user;
    },
    userLoggedOut: (state) => {
      (state.token = ""), (state.user = "");
    },
  },
});

export const { userRegister, userLoggedIn, userLoggedOut } = authSlice.actions;


export default authSlice.reducer;