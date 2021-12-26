import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `users`,
    }),
    getPosts: builder.query({
      query: () => `posts`,
    }),
    addPost: builder.mutation({
      query: ({ title, name, user }) => {
        console.log(title, name, user);
        return {
          url: `posts`,
          method: "POST",
          body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1,
          }),
        };
      },
    }),
  }),
});

export const { useGetUsersQuery, useGetPostsQuery, useAddPostMutation } =
  usersApi;
