import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { TransactionsContext } from '../../../Contexts/TransactionsContext'
import { useContext } from 'react';
import styles from './summary.module.css'


export function Summary() {
    const { transactions } = useContext(TransactionsContext);

    const sumary = transactions.reduce(
        (acc, transaction) => {

            if (transaction.type === 'income') {
                acc.income += transaction.price;
                acc.total += transaction.price;
            } else {
                acc.outcome += transaction.price;
                acc.total -= transaction.price;
            }

            return acc;
        }, { income: 0, outcome: 0, total: 0 })

    return (
        <div className={styles.SummaryContainer}>
            <div className={styles.SummaryCard}>

                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color='#00b37e' />
                </header>

                <strong>{sumary.income}</strong>
            </div>

            <div className={styles.SummaryCard}>

                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color='#f75a68' />
                </header>

                <strong>{sumary.outcome}</strong>
            </div>

            <div className={styles.SummaryCard}>

                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color='#fff' />
                </header>

                <strong>{sumary.total}</strong>
            </div>

        </div>
    )
}


