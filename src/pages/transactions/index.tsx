import { useContext } from 'react'
import { Header } from '../../components/Header/Header'
import { Summary } from '../../components/Header/Summary'
import { SearchForm } from '../../components/SearchForm'
import { TransactionsContext } from '../../Contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../Utils/formatter'
import styles from './transactions.module.css'



export function Transactions() {
    const { transactions } = useContext(TransactionsContext)

    return (
        <div>
            <Header />
            <Summary />

            <main className={styles.TransactionsContainer}>

                <SearchForm />

                <table className={styles.table}>
                    <tbody>
                        {transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                                    <td width={'50%'} >{transaction.description}</td>
                                    <td style={transaction.type === 'income' ? { color: 'var(--green-500)' } : { color: 'var(--red-500)' }} >
                                        {transaction.type === 'outcome' && '- '}
                                        {priceFormatter.format(transaction.price)}
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </main>
        </div>
    )
}