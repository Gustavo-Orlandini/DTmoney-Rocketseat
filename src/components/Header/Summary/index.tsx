import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import styles from './summary.module.css'


export function Summary() {
    return (
        <div className={styles.SummaryContainer}>
            <div className={styles.SummaryCard}>

                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color='#00b37e' />
                </header>

                <strong>R$ 17.400,00</strong>
            </div>

            <div className={styles.SummaryCard}>

                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color='#f75a68' />
                </header>

                <strong>R$ 17.400,00</strong>
            </div>

            <div className={styles.SummaryCard}>

                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color='#fff' />
                </header>

                <strong>R$ 17.400,00</strong>
            </div>

        </div>
    )
}