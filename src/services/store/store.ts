import { configureStore } from "@reduxjs/toolkit";
import { bookApi } from "../slices/booksApiSlice";
import booksSlice from "../slices/booksSlice";
import shoppingCartSlice from "../slices/shoppingCartSlice";

export const store = configureStore({
    reducer: {
        books: booksSlice,
        shoppingCart: shoppingCartSlice,
        [bookApi.reducerPath]: bookApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(bookApi.middleware)
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;