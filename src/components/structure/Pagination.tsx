import styles from '@/components/structure/Pagination.module.css';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) {
    if (totalPages <= 1) return null;

    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <nav className={styles.pagination}>
            <button
                className={styles.arrow}
                type="button"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                <span />
            </button>

            <div className={styles.pages}>
                {pages.map((page) => (
                    <button
                        key={page}
                        className={page === currentPage ? styles.activePage : styles.page}
                        type="button"
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button
                className={`${styles.arrow} ${styles.nextArrow}`}
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                <span />
            </button>
        </nav>
    );
}

export default Pagination;
