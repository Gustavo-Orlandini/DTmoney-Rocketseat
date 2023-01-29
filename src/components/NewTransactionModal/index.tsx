import styles from './modal.module.css'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller } from 'react-hook-form'

const newtransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newtransactionFormSchema>

export function NewTransactionModal() {
    const { control, register, handleSubmit, formState: { isSubmitting } } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newtransactionFormSchema)
    })

    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className={styles.Overlay} />

            <Dialog.Content className={styles.DialogContent} >
                <Dialog.Title>Nova Transação</Dialog.Title>

                <Dialog.Close className={styles.CloseButton} >
                    <X size={24} />
                </Dialog.Close>

                <form onSubmit={handleSubmit(handleCreateNewTransaction)} className={styles.DialogForm} >
                    <input
                        type="text"
                        placeholder='Descrição'
                        required
                        {...register('description')}
                    />
                    <input
                        type="number"
                        placeholder='Preço'
                        required
                        {...register('price', { valueAsNumber: true })}
                    />
                    <input
                        type="text"
                        placeholder='Categoria'
                        required
                        {...register('category')}
                    />

                    <Controller
                        control={control}
                        name="type"
                        render={({ field }) => {
                            return (
                                <RadioGroup.Root
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    className={styles.TransactionType}
                                >

                                    <RadioGroup.Item
                                        value='income'
                                        className={styles.firstButton}>
                                        <ArrowCircleUp size={24} />
                                        Entrada
                                    </RadioGroup.Item>

                                    <RadioGroup.Item
                                        value='outcome'
                                        className={styles.secondButton} >
                                        <ArrowCircleDown size={24} />
                                        Saída
                                    </RadioGroup.Item>

                                </RadioGroup.Root>
                            )
                        }}
                    />


                    <button disabled={isSubmitting} type="submit">Cadastrar</button>

                </form>

            </Dialog.Content>
        </Dialog.Portal>
    )
}