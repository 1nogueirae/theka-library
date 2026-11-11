import styles from '@/components/structure/Collection.module.css';

import ButtonPlus from '@/assets/icons/Plus.svg?react';
import EyeIcon from '@/assets/icons/Eye.svg?react';

import { useState, useEffect } from 'react';

import { booksService } from "@/services/books";
import type { Book, SearchParams } from '@/types/books.types';
import Pagination from '@/components/structure/Pagination';
import MaterialForm from '@/components/forms/MaterialForm';
import Button from '@/components/Button';
import BookCover from '@/components/BookCover';
import MaterialDetails from '@/components/structure/MaterialDetails';

const BOOKS_PER_PAGE = 15;

type CollectionProps = {
    searchParams: SearchParams;
    reload: number;
    onBooksChange: () => void;
    onError: (message: string) => void;
    onLoadError: (hasError: boolean) => void;
};

function Collection({ searchParams, reload, onBooksChange, onError, onLoadError }: CollectionProps) {
    const [books, setBooks] = useState<Book[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const [showMaterialForm, setShowMaterialForm] = useState(false);

    const [activeBookId, setActiveBookId] = useState<number | null>(null);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [editingBook, setEditingBook] = useState<Book | null>(null);

    useEffect(() => {
        const getBooks = async () => {
            setIsLoading(true);
            setHasError(false);
            try {
                const response = await booksService.list({
                    ...searchParams,
                    page: currentPage,
                    pageSize: BOOKS_PER_PAGE,
                });
                setBooks(response.results);
                setTotalPages(Math.ceil(response.count / BOOKS_PER_PAGE));
                onLoadError(false);
            } catch (error) {
                console.error('Error fetching books:', error);
                setBooks([]);
                setHasError(true);
                onLoadError(true);
                onError('Não foi possível carregar o acervo.');
            }
            setIsLoading(false);
        }
        getBooks();
    }, [currentPage, searchParams, reload, onError, onLoadError])

    return (
        <div>
            <div className={styles.collectionWrapper}>
                {isLoading && <div className={styles.statusBox}>Carregando livros...</div>}
                {!isLoading && hasError && (
                    <div className={styles.statusBox}>
                        <p className={styles.statusTitle}>Ops! Algo deu errado.</p>
                        <p>Não conseguimos carregar o acervo agora. Tente novamente em alguns minutos.</p>
                    </div>
                )}
                {!isLoading && !hasError && books.length === 0 && (
                    <div className={styles.statusBox}>
                        <p>Nenhum livro encontrado.</p>
                        <Button text="Adicionar material" variant="pink" icon={<ButtonPlus />} onClick={() => setShowMaterialForm(true)} />
                    </div>
                )}
                {!isLoading && books.length > 0 && (
                    <ul className={styles.booksList}>
                        {books.map((book) => (
                            <li
                                key={book.id}
                                className={book.id === activeBookId ? `${styles.bookCard} ${styles.active}` : styles.bookCard}
                                onClick={() => setActiveBookId(book.id)}
                            >
                                <BookCover src={book.capa} alt={book.titulo} />
                                <div className={styles.bookOverlay}>
                                    <div className={styles.bookTitle}>{book.titulo}</div>
                                    <div className={styles.bookInfo}>{book.autor}, {book.ano_publicacao}</div>
                                    <button type="button" className={styles.eyeButton} onClick={() => setSelectedBook(book)}>
                                        <EyeIcon />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                {!isLoading && books.length > 0 && (
                    <div className={styles.buttonPlus} onClick={() => setShowMaterialForm(true)}>
                        <span className={styles.buttonPlusLabel}>Adicionar material</span>
                        <ButtonPlus />
                    </div>
                )}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
            {selectedBook && (
                <MaterialDetails
                    book={selectedBook}
                    onClose={() => setSelectedBook(null)}
                    onEdit={() => {
                        setEditingBook(selectedBook);
                        setSelectedBook(null);
                        setShowMaterialForm(true);
                    }}
                />
            )}
            {showMaterialForm && (
                <MaterialForm
                    book={editingBook}
                    onClose={() => {
                        setShowMaterialForm(false);
                        setEditingBook(null);
                    }}
                    onSave={() => {
                        setShowMaterialForm(false);
                        setEditingBook(null);
                        onBooksChange();
                    }}
                />
            )}
        </div>
    )
}

export default Collection
