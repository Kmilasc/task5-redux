import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Credentials {
    email: string;
    password: string;
}

interface NewUser {
    username: string;
    password: string;
    email: string;
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api' }),
    endpoints: (builder) => ({
        login: builder.mutation<void, Credentials>({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials
            }),
        }),
        register: builder.mutation<void, NewUser>({
            query: (newUser) => ({
                url: '/register',
                method: 'POST',
                body: newUser
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;