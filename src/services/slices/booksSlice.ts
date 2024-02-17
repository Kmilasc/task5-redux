import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book, BookResponse } from "../../interfaces/bookApiInterface";

const initialState: BookResponse = {
    items: []
}

export const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBooks: (state, action: PayloadAction<Book[]>) => {
            state.items = action.payload
        }
    }
});

export const { setBooks } = bookSlice.actions;
export default bookSlice.reducer;