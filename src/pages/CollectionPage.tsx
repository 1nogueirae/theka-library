import styles from '@/pages/CollectionPage.module.css';

import Carousel from '@/components/structure/Carousel';
import CollectionFilter from '@/components/structure/CollectionFilter';
import Collection from '@/components/structure/Collection';
import type { SearchParams } from '@/types/books.types';

import { useState } from 'react';

function CollectionPage() {

    const [searchParams, setSearchParams] = useState<SearchParams>({
        title: '',
        genre: '',
        publisher: '',
    });

    return (
        <div className={styles.container}>
            <Carousel />

            <div className={styles.title}>
                Veja nosso catálogo
            </div>
            <CollectionFilter onApply={setSearchParams} />
            <Collection searchParams={searchParams} />
        </div>
    )
}

export default CollectionPage;