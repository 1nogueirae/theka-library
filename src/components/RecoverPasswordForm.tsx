import TextInput from '@/components/TextInput'
import Button from '@/components/Button'

import styles from '@/components/AuthForm.module.css'

import { useState } from 'react'

function RecoverPasswordForm() {
    const [email, setEmail] = useState('')

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recuperar Senha</h1>

            <form className={styles.form}>
                <TextInput
                    id="email"
                    value={email}
                    placeholder="Digite seu email"
                    onChange={setEmail}
                    label="E-mail"
                    type="email"
                />

                <div className={styles.actions}>
                    <Button
                        text="Voltar"
                        onClick={() => console.log('Voltar')}
                        variant="secondary"
                    />
                    <Button
                        text="Enviar"
                        onClick={() => console.log('Enviar')}
                        variant="primary"
                        type="submit"
                    />
                </div>
            </form>
        </div>
    )
}

export default RecoverPasswordForm;