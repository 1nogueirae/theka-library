import styles from '@/components/structure/MaterialDetails.module.css';

import type { Book } from '@/types/books.types';

import Modal from '@/components/Modal';
import Button from '@/components/Button';
import BookCover from '@/components/BookCover';

import PencilIcon from '@/assets/icons/Pencil.svg?react';
import XCircleIcon from '@/assets/icons/XCircle.svg?react';

interface MaterialDetailsProps {
    book: Book;
    onClose: () => void;
    onEdit: () => void;
}

function MaterialDetails({ book, onClose, onEdit }: MaterialDetailsProps) {
    return (
        <Modal className={styles.modal} onClose={onClose}>
            <button type="button" className={styles.closeButton} onClick={onClose}>
                <XCircleIcon />
            </button>

            <BookCover className={styles.cover} src={book.capa} alt={book.titulo} />

            <div className={styles.content}>
                <h2 className={styles.title}>{book.titulo}</h2>
                <div className={styles.author}>{book.autor}, {book.ano_publicacao}</div>

                <p className={styles.summary}>{book.resumo}</p>
                <p className={styles.pages}>páginas: {book.numero_paginas}</p>

                <div className={styles.publisher}>{book.editora}</div>

                <div className={styles.actions}>
                    <Button text="Editar" variant="dark" icon={<PencilIcon />} onClick={onEdit} />
                </div>
            </div>
        </Modal>
    )
}

export default MaterialDetails
