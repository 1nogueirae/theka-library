import ModalStyles from '@/components/Modal.module.css';
import type { ReactNode } from 'react';

interface ModalProps {
    children: ReactNode;
    onClose: () => void;
    className?: string;
}

function Modal({ children, onClose, className }: ModalProps) {
    return (
        <div className={ModalStyles.overlay} onClick={onClose}>
            <div
                className={[ModalStyles.modal, className].filter(Boolean).join(' ')}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}

export default Modal;
