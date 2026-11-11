import TextInputStyles from '@/components/TextInput.module.css';
import type { ReactNode, ComponentProps } from 'react'

interface TextInputProps extends ComponentProps<'input'> {
    icon?: ReactNode;
    label?: string;
    error?: string;
    containerClassName?: string;
}

function TextInput({
    id,
    icon,
    label,
    error,
    placeholder = "Digite...",
    containerClassName,
    ...rest
}: TextInputProps) {
    return (
        <div className={[TextInputStyles.field, containerClassName].filter(Boolean).join(' ')}>
            {label && <label htmlFor={id} className={TextInputStyles.label}>{label}</label>}
            <div className={TextInputStyles.textInputContainer} >
                <input
                    id={id}
                    placeholder={placeholder}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${id}-error` : undefined}
                    className={TextInputStyles.input}
                    {...rest}
                />
                {icon && <div className={TextInputStyles.iconContainer}>{icon}</div>}
            </div>
            {error && <p id={`${id}-error`} className={TextInputStyles.error}>{error}</p>}
        </div>

    )
}

export default TextInput;
export type { TextInputProps };