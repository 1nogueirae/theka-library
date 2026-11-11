import ConfirmModalStyles from '@/components/ConfirmModal.module.css';
import type { ReactNode } from 'react';

import Modal from '@/components/Modal';
import Button from '@/components/Button';

interface ConfirmModalProps {
    message: string;
    confirmText: string;
    confirmIcon?: ReactNode;
    onConfirm: () => void;
    onCancel: () => void;
}

function ConfirmModal({ message, confirmText, confirmIcon, onConfirm, onCancel }: ConfirmModalProps) {
    return (
        <Modal className={ConfirmModalStyles.modal} onClose={onCancel}>
            <p className={ConfirmModalStyles.message}>{message}</p>

            <div className={ConfirmModalStyles.actions}>
                <Button text="Cancelar" variant="pinkSecondary" onClick={onCancel} />
                <Button text={confirmText} variant="pink" icon={confirmIcon} onClick={onConfirm} />
            </div>
        </Modal>
    )
}

export default ConfirmModal;
