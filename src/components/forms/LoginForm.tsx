import TextInput from '@/components/TextInput'
import Button from '@/components/Button'

import { Link } from 'react-router'

import styles from '@/components/forms/AuthForm.module.css'

import { useForm } from 'react-hook-form'

import { authService } from '@/services/auth'

interface LoginFormData {
    email: string;
    password: string;
}

function LoginForm() {

    const { register, handleSubmit, formState } = useForm<LoginFormData>()

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Login</h1>

            <form
                className={styles.form}
                onSubmit={handleSubmit((data) => {
                    const credentials = {
                        email: data.email,
                        password: data.password
                    }
                    authService.login(credentials).then((tokens) => {
                        localStorage.setItem('token', tokens.access)
                        localStorage.setItem('refresh', tokens.refresh)
                    })
                })}
                noValidate
            >
                <TextInput
                    {...register('email',
                        {
                            required: 'O e-mail é obrigatório',
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Formato de e-mail inválido' }
                        }
                    )}
                    id="email"
                    placeholder="Digite seu email"
                    label="E-mail"
                    type="email"
                    error={formState.errors.email?.message}
                />
                <TextInput
                    {...register('password',
                        {
                            required: 'A senha é obrigatória'
                        }
                    )}
                    id="password"
                    placeholder="Digite sua senha"
                    label="Senha"
                    type="password"
                    error={formState.errors.password?.message}
                />

                <div className={styles.helpLinksContainer}>
                    <Link to="/recoverpassword">Esqueceu a senha?</Link>
                    <Link to="/signup">Ainda não tem cadastro?</Link>
                </div>

                <div className={styles.actions}>
                    <Button
                        text="Entrar"
                        type="submit"
                    />
                </div>
            </form>
        </div>
    )
}

export default LoginForm;