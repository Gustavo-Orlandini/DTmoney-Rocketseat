import { useEffect, useState } from 'react'
import { Header } from '../../components/Header/Header'
import { Summary } from '../../components/Header/Summary'
import { SearchForm } from '../../components/SearchForm'
import styles from './transactions.module.css'

interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

export function Transactions() {
    const [transactions, setTransactions] = useState<Transaction[]>([])


    async function loadTransactions() {
        const response = await fetch('http://localhost:3333/transactions')
        const data = await response.json()

        setTransactions(data)
    }

    useEffect(() => {
        loadTransactions()
    }, [])

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
                                    <td style={transaction.type === 'income' ? { color: 'var(--green-500)' } : { color: 'var(--red-500)' }} >{transaction.price}</td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.createdAt}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </main>
        </div>
    )
}