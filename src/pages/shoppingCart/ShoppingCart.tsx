import { ToastContainer, toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../services/hooks/hooks';
import { RootState } from '../../services/store/store';
import styles from './shoppingCart.module.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { clearShoppingCart } from '../../services/slices/shoppingCartSlice';
import { Header } from '../../components/header/Header';

export function ShoppingCart(): JSX.Element {

    const booksInCart = useAppSelector((state: RootState) => state.shoppingCart.items);
    const totalPrice = useAppSelector((state: RootState) => state.shoppingCart.totalPrice);
    const dispatch = useAppDispatch();

    function doShopping() {
        toast.success("Compra realizada com sucesso");
        dispatch(clearShoppingCart());
    }

    return (
        <>
            <Header />
            
            <main className={styles.mainContainer}>

                <h2 className={styles.title}>Confira os livros em seu carrinho</h2>

                {booksInCart.length > 0 ?
                    <section className={styles.booksContainer}>
                        {booksInCart.map((book) => (
                            <div key={book.id} className={styles.bookCard}>
                                {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ?
                                    <figure className={styles.imageContainer}>
                                        <img
                                            className={styles.image}
                                            src={book.volumeInfo.imageLinks.thumbnail}
                                            alt={`Imagem do livro ${book.volumeInfo.title}`} />
                                    </figure>
                                    :
                                    <p>Sem imagem disponível</p>}


                                <div className={styles.info}>
                                    <h3 className={styles.bookTitle}>Título: {book.volumeInfo.title}</h3>
                                    <p>Preço: R$ {book.price?.toString().replace(".", ",")}</p>
                                </div>
                            </div>
                        ))}

                        <div className={styles.priceContainer}>
                            <p className={styles.totalPrice}>Preço total a pagar: R$ {totalPrice.toFixed(2).replace(".", ",")}</p>

                            <button onClick={doShopping} className={styles.button}>Confirmar compra</button>
                        </div>
                    </section>
                    :
                    <p>Carrinho vazio</p>}


                <ToastContainer />
            </main>
        </>
    )
}