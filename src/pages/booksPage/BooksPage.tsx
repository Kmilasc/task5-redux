import { useEffect } from "react";
import { useGetBooksQuery } from "../../services/slices/booksApiSlice"
import { useAppDispatch, useAppSelector } from "../../services/hooks/hooks";
import { RootState } from "../../services/store/store";
import { setBooks } from "../../services/slices/booksSlice";

export function BooksPage(): JSX.Element {

    const { data: booksList, error, isLoading } = useGetBooksQuery('books');
    const books = useAppSelector((state: RootState) => state.books.items);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setBooks(booksList!));
    }, [booksList]);
    
    console.log(books);

    return (
        <>
            {isLoading && <div>Loading...</div>}
         
        </>
    )
}