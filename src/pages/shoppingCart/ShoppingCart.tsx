import { ToastContainer, toast } from 'react-toastify';
import { useAppSelector } from '../../services/hooks/hooks';
import { RootState } from '../../services/store/store';
import styles from './shoppingCart.module.css';
import 'react-toastify/dist/ReactToastify.min.css'; 

export function ShoppingCart(): JSX.Element {

    const booksInCart = useAppSelector((state: RootState) => state.shoppingCart.items);
    const totalPrice = useAppSelector((state: RootState) => state.shoppingCart.totalPrice);

    return (
        <main className={styles.mainContainer}>

            <h2 className={styles.title}>Confira os livros em seu carrinho</h2>

            <section className={styles.booksContainer}>
                {booksInCart.map((book) => (
                    <div className={styles.bookCard}>
                        {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ?
                            <figure className={styles.imageContainer}>
                                <img
                                    className={styles.image}
                                    src={book.volumeInfo.imageLinks.thumbnail}
                                    alt={`Imagem do livro ${book.volumeInfo.title}`}
                                />
                            </figure>
                            :
                            <p>Sem imagem disponível</p>
                        }


                        <div className={styles.info}>
                            <h3>Título: {book.volumeInfo.title}</h3>
                            <p>Preço: R$ {book.price?.toString().replace(".", ",")}</p>
                        </div>
                    </div>
                ))}

                <div className={styles.priceContainer}>
                    <p className={styles.totalPrice}>Preço total a pagar: R$ {totalPrice.toFixed(2).replace(".", ",")}</p>
                    
                    <button onClick={() => toast.success("Compra realizada com sucesso")} className={styles.button}>Confirmar compra</button>
                </div>
            </section>
            
            <ToastContainer />
        </main>
    )
}