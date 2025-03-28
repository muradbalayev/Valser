import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../auth';



// Create the API
export const eventApi = createApi({
    reducerPath: 'eventApi',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getEvents: builder.query({
            query: () => 'api/admin/events',
            providesTags: ['Event'],
        }),
        deleteEvent: builder.mutation({
            query: (id) => ({
                url: `api/admin/events/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Event'], // Invalidate 'Event' to refetch event list after deletion
        }),
        addEvent: builder.mutation({
            query: (formData) => ({
                url: 'api/admin/events',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['Event'],
        }),
        editEvent: builder.mutation({
            query: ({ eventId, data }) => {
              return {
                url: `api/admin/events/${eventId}`,
                method: 'PUT',
                body: data,
              };
            },
            invalidatesTags: ['Event'],
          }),
    }),
    keepUnusedDataFor: 60,
    refetchOnMountOrArgChange: 5
});

export const { useGetEventsQuery, useDeleteEventMutation, useAddEventMutation, useEditEventMutation } = eventApi;
