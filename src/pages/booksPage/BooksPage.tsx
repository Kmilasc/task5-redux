import { useEffect } from "react";
import { useGetBooksQuery } from "../../services/slices/booksApiSlice"
import { useAppDispatch, useAppSelector } from "../../services/hooks/hooks";
import { RootState } from "../../services/store/store";
import { setBooks } from "../../services/slices/booksSlice";
import styles from './books.module.css';

export function BooksPage(): JSX.Element {

    const { data: booksList, error, isLoading } = useGetBooksQuery('technology');
    const books = useAppSelector((state: RootState) => state.books.items);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (booksList) {
            dispatch(setBooks(booksList));
        }

    }, [booksList, dispatch]);


    return (
        <>
            {isLoading && <div>Loading...</div>}

            <main className={styles.mainContainer}>

                <h2 className={styles.title}>Confira os livros disponíveis para compra</h2>
                <section className={styles.sectionContainer}>
                    {books && books.map((book) => (
                        <div key={book.id} className={styles.card}>
                            {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? (
                                <img
                                    src={book.volumeInfo.imageLinks.thumbnail}
                                    alt={`Imagem do livro ${book.volumeInfo.title}`}
                                />
                            ) : (
                                <div >Sem imagem disponível</div>
                            )}
                            <div className={styles.bookInfoContainer}>
                                <h3>{book.volumeInfo.title}</h3>
                                <p>Data de lançamento: {book.volumeInfo.publishedDate.split("-").reverse().join("/")}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </main>

        </>
    )
}