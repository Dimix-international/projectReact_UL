import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export var rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: function (headers) {
            var token = localStorage.getItem('user') || '';
            if (token) {
                headers.set('Authorization', token);
            }
            return headers;
        },
    }),
    endpoints: function (builder) { return ({}); },
});
