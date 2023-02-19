import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://www.googleapis.com/books" }),
    tagTypes: ["Books"],
    endpoints: (builder) => ({
        searchBooks: builder.query({
            query: (q) => ({
                url: '/v1/volumes/?' + new URLSearchParams({
                    orderBy: "relevance",
                    printType: "BOOKS",
                    q: q.trim() == "" ? "Travel & Food" : q,
                    maxResults: 40,
                }).toString()
            }),
            providesTags: ['Books']
        })
    }),
})

export const {
    useSearchBooksQuery,
} = booksApi