import { useAppSelector } from '../../services/hooks/hooks';
import { RootState } from '../../services/store/store';
import styles from './header.module.css';
import { ShoppingCart } from '@mui/icons-material'

export function Header(): JSX.Element {

    const quantityItems = useAppSelector((state: RootState) => state.shoppingCart.quantity);

    return (
        <header className={styles.headerContainer}>
            <h1>Livraria Online</h1>

            <nav className={styles.navbarContainer}>
                <form className={styles.searchContainer} >
                    <input className={styles.input} type="text" placeholder='Digite o nome do livro desejado...' />
                    <button className={styles.button} type='submit'>Pesquisar</button>
                </form>

                <div className={styles.shoppingCartIconContainer}>
                    <span className={styles.circleQttItems}>{quantityItems}</span>
                    <ShoppingCart sx={{ width: 50, height: 50 }} />
                </div>
            </nav>
        </header>
    )
}