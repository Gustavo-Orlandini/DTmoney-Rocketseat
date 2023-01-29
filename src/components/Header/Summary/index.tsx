import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import styles from './summary.module.css'
import { priceFormatter } from '../../../Utils/formatter';
import { useSummary } from '../../../hooks/useSummary';


export function Summary() {
    const summary = useSummary();

    return (
        <div className={styles.SummaryContainer}>
            <div className={styles.SummaryCard}>

                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color='#00b37e' />
                </header>

                <strong>{priceFormatter.format(summary.income)}</strong>
            </div>

            <div className={styles.SummaryCard}>

                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color='#f75a68' />
                </header>

                <strong>{priceFormatter.format(summary.outcome)}</strong>
            </div>

            <div className={styles.SummaryCard}>

                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color='#fff' />
                </header>

                <strong>{priceFormatter.format(summary.total)}</strong>
            </div>

        </div>
    )
}


