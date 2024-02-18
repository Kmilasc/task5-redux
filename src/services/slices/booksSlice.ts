import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book, BookResponse } from "../../interfaces/bookApiInterface";

const initialState: BookResponse = {
    items: [],
    searchTerm: "",
    bookPrices: {}
}

export const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBooks: (state, action: PayloadAction<Book[]>) => {
            state.items = action.payload;
            
            action.payload.forEach(book => {
                if (book.price) {
                    state.bookPrices[book.id] = book.price;
                }
            });
        },
        filterByName: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload
        },
    }
});

export const { setBooks, filterByName } = bookSlice.actions;
export default bookSlice.reducer;