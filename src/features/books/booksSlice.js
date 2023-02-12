import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const booksAdapter = createEntityAdapter({
	sortComparer: (a, b) => b.title.localeCompare(a.title),
});

const initialState = booksAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getBooks: builder.query({
			query: () => "/books",
			transformResponse: (responseData) => {
				return booksAdapter.setAll(initialState, responseData);
			},
			providesTags: (result, error, arg) => [
				{ type: "Book", id: "LIST" },
				...result.ids.map((id) => ({ type: "Book", id })),
			],
		}),
	}),
});

export const { useGetBooksQuery } = extendedApiSlice;
