import styles from './header.module.css'
import Logo from '../../assets/Logo.png'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
    return (
        <div className={styles.HeaderContainer}>
            <div className={styles.HeaderContent}>
                <img src={Logo} alt="" />


                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <button>Nova Transação</button>
                    </Dialog.Trigger>

                    <NewTransactionModal />

                </Dialog.Root>
            </div>
        </div>
    )
}