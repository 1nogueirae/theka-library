import styles from '@/components/structure/Collection.module.css';

import { useState, useEffect } from 'react';

import { booksService } from "@/services/books";
import type { Book, SearchParams } from '@/types/books.types';
import Pagination from '@/components/structure/Pagination';

const BOOKS_PER_PAGE = 15;

type CollectionProps = {
    searchParams: SearchParams;
};

function Collection({ searchParams }: CollectionProps) {
    const [books, setBooks] = useState<Book[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const getBooks = async () => {
            try {
                const response = await booksService.list({
                    ...searchParams,
                    page: currentPage,
                    pageSize: BOOKS_PER_PAGE,
                });
                setBooks(response.results);
                setTotalPages(Math.ceil(response.count / BOOKS_PER_PAGE));
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        }
        getBooks();
    }, [currentPage, searchParams])

    return (
        <div>
            <ul className={styles.booksList}>
                {books.map((book) => (
                    <li key={book.id} className={styles.bookCard}>
                        <img src={book.capa} alt={book.titulo} />
                    </li>
                ))}
            </ul>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    )
}

export default Collection
