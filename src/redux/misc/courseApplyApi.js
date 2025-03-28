import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../auth';



// Create the API
export const courseApply = createApi({
    reducerPath: 'courseApply',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        courseApply: builder.mutation({
            query: (data) => ({
                url: 'api/misc/apply-courseee',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Vacancy'],
        }),
  
    }),
    keepUnusedDataFor: 60,
    refetchOnMountOrArgChange: 5
});

export const { useCourseApplyMutation } = courseApply;
