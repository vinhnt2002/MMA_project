// RTK QUERY

import { apiSlice } from "../api/apiSlice";

// query      mutation
//   get        post put del

export const postApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get posts
    getAllPosts: builder.query({
      query: ({}) => ({
        url: "posts",
        method: "GET",
        credentials: "include" as const,
      }),
    }),

    createPosts: builder.mutation({
      query: ({authorId, content, thumbnail}) => ({
        url: "posts",
        method: "POST",
        body: {
            authorId, content, thumbnail
        },
        credentials: "include" as const,
      }),
    }),
  }),
});

export const { useGetAllPostsQuery, useCreatePostsMutation } = postApi;
