import { Book } from "./bookApiInterface";

export interface ShoppingCart {
    inCart: boolean,
    quantity: number,
    items: Book[]
}