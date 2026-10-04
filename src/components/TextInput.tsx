import TextInputStyles from './TextInput.module.css';
import type { ReactNode } from 'react'

interface TextInputProps {
    id: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    icon?: ReactNode;
    label?: string;
    type?: 'text' | 'email' | 'password';
}

function TextInput({
    id,
    value,
    onChange,
    placeholder = 'Digite...',
    icon,
    label,
    type = 'text'
}: TextInputProps) {
    return (
        <div className={TextInputStyles.field}>
            {label && <label htmlFor={id} className={TextInputStyles.label}>{label}</label>}
            <div className={TextInputStyles.textInputContainer} >
                <input
                    id={id}
                    className={TextInputStyles.input}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    type={type}
                />
                {icon && <div className={TextInputStyles.iconContainer}>{icon}</div>}
            </div>
        </div>

    )
}

export default TextInput;