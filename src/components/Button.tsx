import type { ReactNode } from 'react';

import ButtonStyles from '@/components/Button.module.css';

interface ButtonProps {
    text: string;
    onClick: () => void;
    icon?: ReactNode;
    variant?: 'primary' | 'secondary';
    type?: 'button' | 'submit';
}

function Button({
    text,
    onClick,
    icon,
    variant = 'primary',
    type = 'button'
}: ButtonProps) {
    return (
        <button
            className={
                [
                    ButtonStyles.button,
                    variant === 'primary'
                        ? ButtonStyles.buttonPrimary
                        : ButtonStyles.buttonSecondary
                ].join(' ')
            }
            type={type}
            onClick={onClick}>
            {text}
            {icon && <span>{icon}</span>}
        </button>
    )
}

export default Button;