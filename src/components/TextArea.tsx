import TextInputStyles from '@/components/TextInput.module.css';
import type { ComponentProps } from 'react'

interface TextAreaProps extends ComponentProps<'textarea'> {
    label?: string;
    error?: string;
    containerClassName?: string;
}

function TextArea({
    id,
    label,
    error,
    placeholder = "Digite...",
    rows = 4,
    containerClassName,
    ...rest
}: TextAreaProps) {
    return (
        <div className={[TextInputStyles.field, containerClassName].filter(Boolean).join(' ')}>
            {label && <label htmlFor={id} className={TextInputStyles.label}>{label}</label>}
            <div className={`${TextInputStyles.textInputContainer} ${TextInputStyles.multiline}`}>
                <textarea
                    id={id}
                    rows={rows}
                    placeholder={placeholder}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${id}-error` : undefined}
                    className={TextInputStyles.input}
                    {...rest}
                />
            </div>
            {error && <p id={`${id}-error`} className={TextInputStyles.error}>{error}</p>}
        </div>
    )
}

export default TextArea;
export type { TextAreaProps };
