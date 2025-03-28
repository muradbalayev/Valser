import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../auth';



// Create the API
export const applyVacancy = createApi({
    reducerPath: 'applyVacancy',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        applyVacancy: builder.mutation({
            query: (formData) => ({
                url: 'api/misc/apply-vacancy',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['Vacancy'],
        }),
  
    }),
    keepUnusedDataFor: 60,
    refetchOnMountOrArgChange: 5
});

export const { useApplyVacancyMutation } = applyVacancy;
