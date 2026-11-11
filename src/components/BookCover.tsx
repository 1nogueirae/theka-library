import BookCoverStyles from '@/components/BookCover.module.css';

import ImagesIcon from '@/assets/icons/Images.svg?react';

interface BookCoverProps {
    src: string | null;
    alt: string;
    className?: string;
}

function BookCover({ src, alt, className }: BookCoverProps) {
    if (!src) {
        return (
            <div className={[BookCoverStyles.placeholder, className].filter(Boolean).join(' ')}>
                <ImagesIcon />
            </div>
        )
    }

    return <img className={[BookCoverStyles.cover, className].filter(Boolean).join(' ')} src={src} alt={alt} />
}

export default BookCover;
