import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router';

import Button from '@/components/Button'
import TextInput from '@/components/TextInput'

import styles from '@/components/forms/AuthForm.module.css'

interface ResetPasswordFormData {
    password: string;
    passwordConfirmation: string;
}

function ResetPasswordForm() {

    const { register, handleSubmit, formState } = useForm<ResetPasswordFormData>()

    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recuperar Senha</h1>

            <form
                className={styles.form}
                onSubmit={handleSubmit((data) => console.log(data))}
                noValidate
            >
                <TextInput
                    {...register('password',
                        {
                            required: 'A senha é obrigatória',
                            minLength: { value: 6, message: 'A senha deve ter no mínimo 6 caracteres' }
                        }
                    )}
                    id="password"
                    type="password"
                    placeholder="Digite sua senha"
                    label="Nova senha"
                    error={formState.errors.password?.message}
                />
                <TextInput
                    {...register('passwordConfirmation',
                        {
                            required: 'A confirmação de senha é obrigatória',
                            validate: (value, formValues) => value === formValues.password || 'As senhas não coincidem'
                        }
                    )}
                    id="password-confirmation"
                    type="password"
                    placeholder="Confirme sua senha"
                    label="Confirmar nova senha"
                    error={formState.errors.passwordConfirmation?.message}
                />

                <div className={styles.actions}>
                    <Button
                        text="Voltar"
                        onClick={() => navigate('/login')}
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