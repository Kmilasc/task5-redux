import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book, BookResponse } from "../../interfaces/bookApiInterface";

const initialState: BookResponse = {
    items: [],
    searchTerm: ""
}

export const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBooks: (state, action: PayloadAction<Book[]>) => {
            state.items = action.payload
        },
        filterByName: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload
        }
    }
});

export const { setBooks, filterByName } = bookSlice.actions;
export default bookSlice.reducer;