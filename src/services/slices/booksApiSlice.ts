import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Book, BookResponse } from '../../interfaces/bookApiInterface';

export const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1/' }),
    endpoints: (builder) => ({
        getBooks: builder.query<Book[], string>({
            query: (theme) => `/volumes?q=${theme}&maxResults=20`,
            transformResponse: (response: BookResponse) => response.items
        })
    })
})

export const { useGetBooksQuery } = bookApi;