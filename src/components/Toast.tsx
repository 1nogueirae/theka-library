import ToastStyles from '@/components/Toast.module.css';
import { useEffect } from 'react';

import MessageIcon from '@/assets/icons/Message.svg?react';

interface ToastProps {
    message: string;
    onClose: () => void;
}

function Toast({ message, onClose }: ToastProps) {
    useEffect(() => {
        const timer = setTimeout(onClose, 4000);

        return () => clearTimeout(timer);
    }, [message, onClose])

    return (
        <div className={ToastStyles.toast}>
            <div className={ToastStyles.iconContainer}>
                <MessageIcon />
            </div>
            <p className={ToastStyles.message}>{message}</p>
        </div>
    )
}

export default Toast;
