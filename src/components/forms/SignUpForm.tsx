import { useNavigate } from 'react-router';

import TextInput from '@/components/TextInput'
import PasswordInput from '@/components/PasswordInput'
import Button from '@/components/Button'

import styles from '@/components/forms/AuthForm.module.css'

import { useForm } from 'react-hook-form'

import { namesQuantity } from '@/utils/string'

interface SignUpFormData {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}

function SignUpForm() {
    const { register, handleSubmit, formState } = useForm<SignUpFormData>()
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Cadastro</h1>

            <form
                className={styles.form}
                onSubmit={handleSubmit((data) => console.log(data))}
                noValidate
            >
                <TextInput
                    {...register('name',
                        {
                            required: 'O nome é obrigatório',
                            validate: (value) => namesQuantity(value) >= 2 || 'O nome deve conter pelo menos 2 palavras'
                        }
                    )}
                    id="name"
                    placeholder="Seu nome completo"
                    label="Nome"
                    error={formState.errors.name?.message}
                />
                <TextInput
                    {...register('email',
                        {
                            required: 'O e-mail é obrigatório',
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Formato de e-mail inválido' }
                        }
                    )}
                    id="email"
                    placeholder="seuemail@gmail.com"
                    label="E-mail"
                    type="email"
                    error={formState.errors.email?.message}
                />
                <PasswordInput
                    {...register('password',
                        {
                            required: 'A senha é obrigatória',
                            minLength: { value: 6, message: 'A senha deve ter no mínimo 6 caracteres' }
                        }
                    )}
                    id="password"
                    placeholder="Sua senha"
                    label="Senha"
                    error={formState.errors.password?.message}
                />
                <PasswordInput
                    {...register('passwordConfirmation',
                        {
                            required: 'A confirmação de senha é obrigatória',
                            validate: (value, formValues) => value === formValues.password || 'As senhas não coincidem'
                        }
                    )}
                    id="password-confirmation"
                    placeholder="Confirme sua senha"
                    label="Confirmar senha"
                    error={formState.errors.passwordConfirmation?.message}
                />


                <div className={styles.actions}>
                    <Button
                        text="Voltar"
                        onClick={() => navigate('/login')}
                        variant="secondary"
                    />
                    <Button
                        text="Enviar"
                        variant="primary"
                        type="submit"
                    />
                </div>
            </form>
        </div>
    )
}

export default SignUpForm;