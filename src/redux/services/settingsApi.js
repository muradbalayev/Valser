import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../auth';



// Create the API
export const settingsApi = createApi({
    reducerPath: 'settingsApi',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getSettings: builder.query({
            query: () => 'api/admin/settings',
            providesTags: ['Settings'],
        }),
        editSetting: builder.mutation({
            query: (body) => ({
                url: '/api/admin/settings/toggle-bitrix-forwarding',
                method: 'PUT',
                body: body,
            }),
            invalidatesTags: ['Settings'],
        }),
    }),
    keepUnusedDataFor: 60,
    refetchOnMountOrArgChange: 5
});

export const { useGetSettingsQuery, useEditSettingMutation } = settingsApi;
