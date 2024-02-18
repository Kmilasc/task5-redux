import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShoppingCart } from "../../interfaces/shoppingCartInterface";
import { Book } from "../../interfaces/bookApiInterface";

const initialState: ShoppingCart = {
    inCart: false,
    quantity: 0,
    items: [],
    totalPrice: 0

}

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState, 
    reducers: {
        incrementItem: (state, action: PayloadAction<Book>) => {
            state.items.push(action.payload);
            state.quantity = state.quantity + 1;
        },
        decrementItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            state.quantity = state.quantity - 1;
        },
        calculateTotalPriceItems: (state) => {
            state.totalPrice = state.items.reduce((acc, currentPrice) => acc + currentPrice.price!, 0)
        }
    }
});

export const { incrementItem, decrementItem, calculateTotalPriceItems } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;