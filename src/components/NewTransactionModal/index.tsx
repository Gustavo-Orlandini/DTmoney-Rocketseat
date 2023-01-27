import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import styles from './modal.module.css'

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Dialog.Overlay className={styles.Overlay} />

            <Dialog.Content className={styles.DialogContent} >
                <Dialog.Title>Nova Transação</Dialog.Title>

                <Dialog.Close className={styles.CloseButton} >
                    <X size={24} />
                </Dialog.Close>

                <form action="" className={styles.DialogForm} >
                    <input type="text" placeholder='Descrição' required />
                    <input type="number" placeholder='Preço' required />
                    <input type="text" placeholder='Categoria' required />

                    <button type="submit">Cadastrar</button>

                </form>

            </Dialog.Content>
        </Dialog.Portal>
    )
}