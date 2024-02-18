import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/hooks/hooks';

import { RootState } from '../../services/store/store';
import styles from './header.module.css';
import { ShoppingCart } from '@mui/icons-material'
import { filterByName } from '../../services/slices/booksSlice';
import { useNavigate } from 'react-router-dom';


export function Header(): JSX.Element {

    const quantityItems = useAppSelector((state: RootState) => state.shoppingCart.quantity);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [searchValue, setSearchValue] = useState('');

    function handleInputChange(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        dispatch(filterByName(searchValue));
    }

    return (
        <header className={styles.headerContainer}>
            <h1 className={styles.title} onClick={() => navigate("/home")}>Livraria Online</h1>

            <nav className={styles.navbarContainer}>
                <form onSubmit={handleInputChange}  className={styles.searchContainer} >
                    <input className={styles.input} type="text" placeholder='Digite o nome do livro desejado...' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                    <button className={styles.button} type='submit'>Pesquisar</button>
                </form>

                <div onClick={() => navigate("/shopping-cart")} className={styles.shoppingCartIconContainer}>
                    <span className={styles.circleQttItems}>{quantityItems}</span>
                    <ShoppingCart sx={{ width: 50, height: 50 }} />
                </div>
            </nav>
        </header>
    )
}