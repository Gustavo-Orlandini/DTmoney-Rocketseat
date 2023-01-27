import styles from './header.module.css'
import Logo from '../../assets/Logo.png'

export function Header() {
    return (
        <div className={styles.HeaderContainer}>
            <div className={styles.HeaderContent}>
                <img src={Logo} alt="" />
                <button>Nova Transação</button>
            </div>
        </div>
    )
}