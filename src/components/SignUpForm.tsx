import TextInput from '@/components/TextInput'
import Button from '@/components/Button'

import styles from '@/components/AuthForm.module.css'

import { useState } from 'react'

function SignUpForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Cadastro</h1>

            <form className={styles.form}>
                <TextInput
                    id="name"
                    value={name}
                    placeholder="Seu nome completo"
                    onChange={setName}
                    label="Nome"
                />
                <TextInput
                    id="email"
                    value={email}
                    placeholder="seuemail@gmail.com"
                    onChange={setEmail}
                    label="E-mail"
                    type="email"
                />
                <TextInput
                    id="password"
                    value={password}
                    placeholder="Sua senha"
                    onChange={setPassword}
                    label="Senha"
                    type="password"
                />

                <TextInput
                    id="password-confirmation"
                    value={passwordConfirmation}
                    placeholder="Confirme sua senha"
                    onChange={setPasswordConfirmation}
                    label="Confirmar senha"
                    type="password"
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

export default SignUpForm;