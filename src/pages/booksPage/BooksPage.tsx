import { useEffect, useState } from "react";
import { useGetBooksQuery } from "../../services/slices/booksApiSlice"
import { useAppDispatch, useAppSelector } from "../../services/hooks/hooks";
import { RootState } from "../../services/store/store";
import { setBooks } from "../../services/slices/booksSlice";
import styles from './books.module.css';
import { Header } from "../../components/header/Header";
import { ShoppingCartCheckoutOutlined, Check } from "@mui/icons-material"
import { calculateTotalPriceItems, decrementItem, incrementItem } from "../../services/slices/shoppingCartSlice";
import { Book } from "../../interfaces/bookApiInterface";
import { CircularProgress } from "@mui/material";

export function BooksPage(): JSX.Element {

    const { data: booksList, error, isLoading } = useGetBooksQuery('technology');
    const { items: books, searchTerm, bookPrices } = useAppSelector((state: RootState) => state.books);

    const { items, totalPrice } = useAppSelector((state: RootState) => state.shoppingCart);
    const dispatch = useAppDispatch();


    useEffect(() => {

        if (booksList) {
            const booksWithPrices: Book[] = booksList.map(book => ({
                ...book,
                price: bookPrices[book.id] || Math.floor(Math.random() * 50) + 0.99
            }))

            dispatch(setBooks(booksWithPrices));
        }

    }, [booksList, dispatch]);


    const bookInCart = (id: string): boolean => items.some(book => book.id === id);


    function handleChangeShoppingCart(book: Book): void {
        if (!bookInCart(book.id)) {
            dispatch(incrementItem(book));
        }
        else {
            dispatch(decrementItem(book.id));
        }
        dispatch(calculateTotalPriceItems());
    }



    const filteredBooks = books
        .filter(book => book.volumeInfo.title.toLowerCase().includes(searchTerm.toLowerCase()));

    if (isLoading) {
        return (
            <div className={styles.loading}>
                <CircularProgress />
            </div>
        )
    }

    return (
        <>

            <Header />

            <main className={styles.mainContainer}>

                <h2 className={styles.title}>Confira os livros disponíveis para compra</h2>
                <section className={styles.sectionContainer}>
                    {filteredBooks && filteredBooks.map((book) => (
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
                                <h3 className={styles.bookTitle}>{book.volumeInfo.title}</h3>
                                <p className={styles.releaseDate}>
                                    {book.volumeInfo.publishedDate ? 
                                        <span>Data de lançamento: {book.volumeInfo.publishedDate.split("-").reverse().join("/")}</span>
                                        :
                                        <span>Data indisponível</span>
                                    }
                                    
                                </p>
                                <p className={styles.bookPrice}>Preço: R$ {book.price?.toString().replace(".", ",")}</p>
                            </div>

                            <button className={styles.button} onClick={() => handleChangeShoppingCart(book)}>
                                {bookInCart(book.id) ?
                                    <Check /> :
                                    <span>Adicionar ao carrinho <ShoppingCartCheckoutOutlined /></span>
                                }

                            </button>
                        </div>
                    ))}
                </section>
            </main>

        </>
    )
}