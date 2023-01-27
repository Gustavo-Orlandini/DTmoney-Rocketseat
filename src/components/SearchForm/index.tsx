import { MagnifyingGlass } from 'phosphor-react'
import styles from './searchForm.module.css'

export function SearchForm() {
    return (
        <div className={styles.SearchFormContainer}>
            <input type="text" placeholder='Busque por transações' />

            <button type="submit">
                <MagnifyingGlass size={20} />
                Buscar
            </button>

        </div>
    )
}