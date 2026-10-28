import type { ReactNode } from 'react';

import ButtonStyles from '@/components/Button.module.css';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    icon?: ReactNode;
    variant?: 'primary' | 'secondary' | 'pink';
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
                        : variant === 'secondary'
                            ? ButtonStyles.buttonSecondary
                            : variant === 'pink'
                                ? ButtonStyles.buttonPink
                                : ''

                ].join(' ')
            }
            type={type}
            onClick={onClick}>
            {text}
            {icon && <span className={ButtonStyles.icon}>{icon}</span>}
        </button>
    )
}

export default Button;