import TextInput from '@/components/TextInput'
import Button from '@/components/Button'

import styles from '@/components/forms/AuthForm.module.css'

import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'

interface RecoverPasswordFormData {
    email: string;
}

function RecoverPasswordForm() {

    const { register, handleSubmit, formState } = useForm<RecoverPasswordFormData>()

    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recuperar senha</h1>

            <form
                className={styles.form}
                onSubmit={handleSubmit((data) => console.log(data))}
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

                <div className={styles.actions}>
                    <Button
                        text="Voltar"
                        onClick={() => navigate('/login')}
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