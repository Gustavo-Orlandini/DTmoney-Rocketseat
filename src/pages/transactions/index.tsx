import { Header } from '../../components/Header/Header'
import { Summary } from '../../components/Header/Summary'
import { SearchForm } from '../../components/SearchForm'
import styles from './transactions.module.css'

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <main className={styles.TransactionsContainer}>

                <SearchForm />

                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <td width={'50%'} >Desenvolvimento de site</td>
                            <td>R$ 12.000,00</td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>

                        <tr>
                            <td width={'50%'} >Hamburguer</td>
                            <td>- R$ 59,00</td>
                            <td>Alimentação</td>
                            <td>10/04/2022</td>
                        </tr>

                        <tr>
                            <td width={'50%'} >Desenvolvimento de site</td>
                            <td>R$ 12.000,00</td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </div>
    )
}