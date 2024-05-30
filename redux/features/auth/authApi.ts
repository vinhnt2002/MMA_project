import { apiSlice } from "../api/apiSlice";

import { userRegister, userLoggedIn, userLoggedOut } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: ({ email, name, password }) => ({
        url: "register",
        method: "POST",
        body: {
          email,
          name,
          password,
        },
        credentials: "include" as const,
      }),
    }),

    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "login",
        method: "POST",
        body: {
          email,
          password,
        },
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (error: any) {
          console.log(error);
        }
      },
    }),

    logOut: builder.query({
      query: () => ({
        url: "logout",
        method: "GET",
        credentials: "include" as const
      }),
      async onQueryStarted(arg, {queryFulfilled, dispatch}){
        try {
          dispatch(
            userLoggedOut()
          )
        } catch (error:any) {
          console.log(error)
        }
      }

      
    })
  }),
});

export const { useLoginMutation, useRegisterMutation, useLogOutQuery } = authApi;
