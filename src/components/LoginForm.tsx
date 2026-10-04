import TextInput from '@/components/TextInput'
import Button from '@/components/Button'

import styles from '@/components/AuthForm.module.css'

import { useState } from 'react'

function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Login</h1>

            <form className={styles.form}>
                <TextInput
                    id="email"
                    value={email}
                    placeholder="Digite seu email"
                    onChange={setEmail}
                    label="E-mail"
                />
                <TextInput
                    id="password"
                    value={password}
                    placeholder="Digite sua senha"
                    onChange={setPassword}
                    label="Senha"
                    type="password"
                />

                <div className={styles.helpLinksContainer}>
                    <a href="#">Esqueceu a senha?</a>
                    <a href="#">Ainda não tem cadastro?</a>
                </div>

                <div className={styles.actions}>
                    <Button
                        text="Entrar"
                        onClick={() => console.log('Entrar')}
                    />
                </div>
            </form>
        </div>
    )
}

export default LoginForm;