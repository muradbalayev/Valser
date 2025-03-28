import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../auth';



// Create the API
export const vacanciesApi = createApi({
    reducerPath: 'vacanciesApi',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getVacancy: builder.query({
            query: () => 'api/admin/vacancies',
            providesTags: ['Vacancy'],
        }),
        deleteVacancy: builder.mutation({
            query: (id) => ({
                url: `api/admin/vacancies/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Vacancy'], 
        }),
        addVacancy: builder.mutation({
            query: (formData) => ({
                url: 'api/admin/vacancies',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['Vacancy'],
        }),
        editVacancy: builder.mutation({
            query: ({ vacancyId, formData }) => {
              return {
                url: `api/admin/vacancies/${vacancyId}`,
                method: 'PUT',
                body: formData,
              };
            },
            invalidatesTags: ['Vacancy'],
          }),
    }),
    keepUnusedDataFor: 60,
    refetchOnMountOrArgChange: 5
});

export const { useGetVacancyQuery, useDeleteVacancyMutation, useAddVacancyMutation, useEditVacancyMutation } = vacanciesApi;
