import { useState } from 'react'

import Button from '@/components/Button'
import TextInput from '@/components/TextInput'

import styles from '@/components/AuthForm.module.css'

function ResetPasswordForm() {

    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recuperar Senha</h1>

            <form className={styles.form}>
                <TextInput
                    id="password"
                    value={password}
                    type="password"
                    placeholder="Digite sua senha"
                    onChange={setPassword}
                    label="Nova senha"
                />
                <TextInput
                    id="password-confirmation"
                    value={passwordConfirmation}
                    type="password"
                    placeholder="Confirme sua senha"
                    onChange={setPasswordConfirmation}
                    label="Confirmar nova senha"
                />

                <div className={styles.actions}>
                    <Button
                        text="Voltar"
                        onClick={() => console.log('Voltar')}
                        variant="secondary"
                    />
                    <Button
                        text="Salvar"
                        onClick={() => console.log('Salvar')}
                        variant="primary"
                        type="submit"
                    />
                </div>
            </form>
        </div>
    )
}

export default ResetPasswordForm