import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Credentials, RegisterResponse } from '../../interfaces/authApiInterface';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api' }),
    endpoints: (builder) => ({
        login: builder.mutation<RegisterResponse, Credentials>({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials
            }),
        }),
        register: builder.mutation<RegisterResponse, Credentials>({
            query: (newUser) => ({
                url: '/register',
                method: 'POST',
                body: newUser
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;