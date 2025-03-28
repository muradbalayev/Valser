import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../auth';

// Create the API
export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: () => 'api/admin/blogs',
            providesTags: ['Blog'],
        }),
        deleteBlog: builder.mutation({
            query: (id) => ({
                url: `api/admin/blogs/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Blog'], // Invalidate 'Blog' to refetch blog list after deletion
        }),
        addBlog: builder.mutation({
            query: (formData) => ({
                url: 'api/admin/blogs',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['Blog'],
        }),
        editBlog: builder.mutation({
            query: ({ blogId, formData }) => {
              return {
                url: `api/admin/blogs/${blogId}`,
                method: 'PUT',
                body: formData,
              };
            },
            invalidatesTags: ['Blog'],
          }),
    }),
    keepUnusedDataFor: 60,
    refetchOnMountOrArgChange: 5
});

export const { useGetBlogsQuery, useDeleteBlogMutation, useAddBlogMutation, useEditBlogMutation } = blogApi;
