import styles from '@/components/structure/Carousel.module.css';
import Arrow from '@/assets/icons/ArrowCircleRight.svg?react';

import { useState, useEffect } from 'react';

import { booksService } from '@/services/books';
import type { Book } from '@/types/books.types';

function Carousel() {

    const [books, setBooks] = useState<Book[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [shownIndex, setShownIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    function selectBook(index: number) {
        if (index === currentIndex) return;
        setCurrentIndex(index);
        setIsFading(true);
        setTimeout(() => {
            setShownIndex(index);
            setIsFading(false);
        }, 150);
    }

    useEffect(() => {
        const getBooks = async () => {
            try {
                setIsLoading(true);
                const books = await booksService.news();
                setBooks(books);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        }
        getBooks();
    }, [])

    return (
        <div className={styles.container}>

            {isLoading ? (
                <div className={styles.loading}>Loading...</div>
            ) : (
                <>
                    <div className={styles.informations}>
                        <div className={styles.title}>
                            Novidades da semana
                        </div>

                        <div className={isFading ? `${styles.bookText} ${styles.fading}` : styles.bookText}>
                            <div className={styles.bookTitle}>
                                {books[shownIndex].titulo}
                            </div>

                            <div className={styles.bookInfo}>
                                {books[shownIndex].autor} - {books[shownIndex].ano_publicacao}
                            </div>
                        </div>
                    </div>

                    <div className={styles.carousel}>
                        <ul className={styles.bookList}>
                            {books.map((book, index) => (
                                <li
                                    key={book.id}
                                    className={index === currentIndex ? styles.active : undefined}
                                    onClick={() => selectBook(index)}
                                >
                                    <Arrow className={styles.arrow} />
                                    <img
                                        src={book.capa}
                                        alt={book.titulo}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    )

}

export default Carousel;