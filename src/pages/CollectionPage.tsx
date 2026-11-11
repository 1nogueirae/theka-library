import styles from '@/pages/CollectionPage.module.css';

import Carousel from '@/components/structure/Carousel';
import CollectionFilter from '@/components/structure/CollectionFilter';
import Collection from '@/components/structure/Collection';
import Toast from '@/components/Toast';
import type { SearchParams } from '@/types/books.types';

import { useState } from 'react';

function CollectionPage() {

    const [searchParams, setSearchParams] = useState<SearchParams>({
        title: '',
        genre: '',
        publisher: '',
    });

    const [reload, setReload] = useState(0);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [hasCollectionError, setHasCollectionError] = useState(false);

    return (
        <div className={styles.container}>
            <Carousel reload={reload} onError={setErrorMessage} />

            {!hasCollectionError && <CollectionFilter onApply={setSearchParams} />}
            <Collection
                searchParams={searchParams}
                reload={reload}
                onBooksChange={() => setReload(reload + 1)}
                onError={setErrorMessage}
                onLoadError={setHasCollectionError}
            />
            {errorMessage && <Toast message={errorMessage} onClose={() => setErrorMessage(null)} />}
        </div>
    )
}

export default CollectionPage;