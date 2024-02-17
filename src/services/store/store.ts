import { configureStore } from "@reduxjs/toolkit";
import { bookApi } from "../slices/booksApiSlice";
import booksSlice from "../slices/booksSlice";
import { authApi } from "../slices/authApi";

export const store = configureStore({
  reducer: {
    books: booksSlice,
    [bookApi.reducerPath]: bookApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(bookApi.middleware, authApi.middleware)
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;